export default class MiniCard {
  constructor(maxTemp, minTemp, icon, div, dayName) {
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.icon = icon;
    this.div = div;
    this.dayName = dayName;
  }

  init() {
    this.domCreator();
    this.domHtmlSetter();
    this.domHtmlNamer();
    this.domAppender();
  }

  domCreator() {
    this.miniCardCont = document.createElement('div');
    this.dayNameP = document.createElement('p');
    this.iconImg = document.createElement('img');
    this.maxTempP = document.createElement('p');
    this.minTempP = document.createElement('p');
  }

  domHtmlSetter() {
    this.iconImg.src = `https://openweathermap.org/img/w/${this.icon}.png`;
    this.dayNameP.innerHTML = `${this.dayName}`;
    this.minTempP.innerHTML = `${this.minTemp.toFixed()}°`;
    this.maxTempP.innerHTML = `${this.maxTemp.toFixed()}°`;
  }

  domHtmlNamer() {
    this.miniCardCont.classList = 'mini-card-cont';
    this.dayNameP.id = 'mini-card-day';
    this.iconImg.id = 'mini-card-icon';
    this.maxTempP.id = 'mini-card-temp';
    this.minTempP.id = 'mini-card-temp';
  }

  domAppender() {
    this.miniCardCont.appendChild(this.dayNameP);
    this.miniCardCont.appendChild(this.iconImg);
    this.miniCardCont.appendChild(this.maxTempP);
    this.miniCardCont.appendChild(this.minTempP);
    this.div.appendChild(this.miniCardCont);
  }
}
