import './app/style.css';
import CityWeather from './app/utils/city_class';

class MainPage {
  init() {
    this.domCache();
    this.getCityData('Cordoba');
    this.domBind();
    this.domStyle();
  }

  domCache() {
    this.searchBut = document.querySelector('#button');
    this.inputField = document.querySelector('#input');
    this.mainCont = document.querySelector('.main-cont');
  }

  domBind() {
    this.searchBut.addEventListener('click', () => {
      this.getCityData(this.inputField.value);
    });
  }

  async getCityData(searchTerm) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=7eac41afe56160a477bb9b88c7ca09a3&units=metric`, { mode: 'cors' });
      const data = await response.json();
      console.log(data.weather[0]);
      console.log(data.main);
      console.log(data.wind);
      return data;
    } catch {
      console.log('error');
    }
  }

  gifDomRemove() {
    if (this.img != null) {
      this.img.remove();
    }
  }
}

const gifPage = new MainPage();
gifPage.init();
