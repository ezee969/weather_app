import './app/style.css';
import CityWeather from './app/utils/city_class';
import WeatherCard from './app/utils/card_creator';
import MiniCard from './app/utils/mini_card_creator';
import NotFound from './app/utils/error_class';

class MainPage {
  constructor() {
    this.units = 'metric';
    this.day = new Date();
    this.dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT',
      'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT',
    ];
  }

  init() {
    this.domCache();
    this.domBind();
  }

  domCache() {
    this.searchBut = document.querySelector('#button');
    this.inputField = document.querySelector('#input');
    this.weatherCardCont = document.querySelector('.card-cont');
    this.mainCont = document.querySelector('.main-cont');
  }

  domBind() {
    this.searchBut.addEventListener('click', async () => {
      this.weatherCardDomClear();
      const cityName = this.inputField.value;
      let auxNumber = 0;
      try {
        const latLon = await this.getLatLon(cityName);
        const forecastData = await this.getForecastData(latLon);
        const forecastFutureData = forecastData.daily.slice(1);
        const todayData = new CityWeather(
          latLon.country,
          latLon.name,
          forecastData.current.weather[0].description,
          forecastData.current.temp,
          forecastData.current.feels_like,
          forecastData.daily[0].temp.max,
          forecastData.daily[0].temp.min,
          forecastData.current.humidity,
          forecastData.current.weather[0].icon,
        );
        this.createWeatherCard(todayData, this.weatherCardCont);
        document.getElementById('config-option-celcius').addEventListener('click', () => {
          this.celciusOnClick();
        });
        document.getElementById('config-option-fahrenheit').addEventListener('click', () => {
          this.fahrenheitOnClick();
        });
        forecastFutureData.forEach((e) => {
          this.createMiniCards(
            e.temp.max,
            e.temp.min,
            e.weather[0].icon,
            document.querySelector('.mini-cards-container'),
            this.dayNames[this.day.getDay() + 1 + auxNumber],
          );
          auxNumber++;
        });
      } catch {
        const errorCard = new NotFound(this.weatherCardCont, this.inputField.value);
        errorCard.init();
      }
    });
    this.inputField.addEventListener('keypress', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.searchBut.click();
      }
    });
  }

  async getForecastData(geoCoordinate) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoCoordinate.lat}&lon=${geoCoordinate.lon}&exclude=minutely,alerts&units=${this.units}&appid=7eac41afe56160a477bb9b88c7ca09a3`, { mode: 'cors' });
      const data = await response.json();
      return data;
    } catch {
      console.log('ERROR');
    }
  }

  async getLatLon(searchTerm) {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&appid=7eac41afe56160a477bb9b88c7ca09a3`, { mode: 'cors' });
    const data = await response.json();
    return ({
      lat: data[0].lat, lon: data[0].lon, name: data[0].name, country: data[0].country,
    });
  }

  createMiniCards(maxTemp, minTemp, icon, div, dayName) {
    const miniCard = new MiniCard(maxTemp, minTemp, icon, div, dayName);
    miniCard.init();
  }

  createWeatherCard(todayData, cont) {
    const weatherCard = new WeatherCard(todayData, cont);
    weatherCard.init();
  }

  celciusOnClick() {
    this.units = 'metric';
    this.searchBut.click();
  }

  fahrenheitOnClick() {
    this.units = 'imperial';
    this.searchBut.click();
  }

  weatherCardDomClear() {
    this.weatherCardCont.innerHTML = '';
  }
}

const gifPage = new MainPage();
gifPage.init();
