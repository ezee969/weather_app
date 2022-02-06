import locationImg from '../assets/icono-location.png';
import tuercaImg from '../assets/tuerca.png';

export default class WeatherCard {
  constructor(weatherData, div) {
    this.weatherData = weatherData;
    this.div = div;
  }

  init() {
    this.weatherCardDomCreator();
    this.htmlNammer();
    this.weatherCardImgSetter();
    this.weatherCardDomInnerHtmlSetter();
    this.domBinder();
    this.appender();
  }

  weatherCardDomCreator() {
    this.weatherCardCont = document.createElement('div');
    this.weatherImg = document.createElement('img');
    this.tuercaImg = document.createElement('img');
    this.locationImg = document.createElement('img');
    this.nameCont = document.createElement('div');
    this.gradosUpperCont = document.createElement('div');
    this.gradosLowerCont = document.createElement('div');
    this.cityName = document.createElement('div');
    this.gradosGrandesText = document.createElement('div');
    this.gradosMaxText = document.createElement('div');
    this.gradosMinText = document.createElement('div');
    this.weatherDescriptionText = document.createElement('p');
    this.weatherRealFeelText = document.createElement('p');
    this.mainContTop = document.createElement('div');
    this.minMaxCont = document.createElement('div');
    this.configCont = document.createElement('div');
    this.celciusText = document.createElement('p');
    this.fahrenheitText = document.createElement('p');
    this.miniCardsContainer = document.createElement('div');
  }

  weatherCardImgSetter() {
    this.weatherImg.src = `https://openweathermap.org/img/w/${this.weatherData.icon}.png`;
    this.locationImg.src = locationImg;
    this.tuercaImg.src = tuercaImg;
  }

  weatherCardDomInnerHtmlSetter() {
    this.cityName.innerHTML = `${this.weatherData.cityName}, ${this.weatherData.countryName}`;
    this.gradosGrandesText.innerHTML = `${this.weatherData.temp.toFixed()}°`;
    this.gradosMaxText.innerHTML = `${this.weatherData.tempMax.toFixed()}°`;
    this.gradosMinText.innerHTML = `${this.weatherData.tempMin.toFixed()}°`;
    this.weatherDescriptionText.innerHTML = this.weatherData.weatherDesc.charAt(0).toUpperCase()
                                            + this.weatherData.weatherDesc.slice(1);
    this.weatherRealFeelText.innerHTML = `RealFeel ${this.weatherData.tempFeelsLike.toFixed()}°`;
    this.celciusText.innerHTML = 'Celcius';
    this.fahrenheitText.innerHTML = 'Fahrenheit';
  }

  htmlNammer() {
    this.mainContTop.className = 'main-cont-top';
    this.weatherCardCont.className = 'weather-card';
    this.weatherImg.className = 'icon-img';
    this.tuercaImg.className = 'tuerca-img';
    this.locationImg.className = 'location-img';
    this.nameCont.className = 'name-cont';
    this.gradosUpperCont.className = 'upper-cont';
    this.gradosLowerCont.className = 'lower-cont';
    this.gradosGrandesText.className = 'grados-grandes-text';
    this.minMaxCont.className = 'min-max-cont';
    this.configCont.className = 'config-cont-hide';
    this.celciusText.className = 'config-option';
    this.fahrenheitText.className = 'config-option';
    this.celciusText.id = 'config-option-celcius';
    this.fahrenheitText.id = 'config-option-fahrenheit';
    this.miniCardsContainer.className = 'mini-cards-container';
  }

  domBinder() {
    this.tuercaImg.addEventListener('click', () => {
      this.configCont.classList.toggle('config-cont-show');
    });
    this.celciusText.addEventListener('click', () => {
      this.celciusText.classList.add('config-option-clicked');
      this.fahrenheitText.classList.remove('config-option-clicked');
      this.configCont.classList.toggle('config-cont-show');
    });
    this.fahrenheitText.addEventListener('click', () => {
      this.celciusText.classList.remove('config-option-clicked');
      this.fahrenheitText.classList.add('config-option-clicked');
      this.configCont.classList.toggle('config-cont-show');
    });
  }

  appender() {
    this.minMaxCont.appendChild(this.gradosMaxText);
    this.minMaxCont.appendChild(this.gradosMinText);
    this.gradosUpperCont.appendChild(this.gradosGrandesText);
    this.gradosUpperCont.appendChild(this.minMaxCont);
    this.gradosLowerCont.appendChild(this.weatherDescriptionText);
    this.gradosLowerCont.appendChild(this.weatherRealFeelText);
    this.nameCont.appendChild(this.locationImg);
    this.nameCont.appendChild(this.cityName);
    this.nameCont.appendChild(this.tuercaImg);
    this.weatherCardCont.appendChild(this.nameCont);
    this.mainContTop.appendChild(this.weatherImg);
    this.mainContTop.appendChild(this.gradosUpperCont);
    this.weatherCardCont.appendChild(this.mainContTop);
    this.weatherCardCont.appendChild(this.gradosLowerCont);
    this.weatherCardCont.appendChild(this.miniCardsContainer);
    this.configCont.appendChild(this.fahrenheitText);
    this.configCont.appendChild(this.celciusText);
    this.div.appendChild(this.weatherCardCont);
    this.div.appendChild(this.configCont);
  }
}
