import errorImg from '../assets/warning.png';

export default class NotFound {
  constructor(div, searchTerm) {
    this.div = div;
    this.searchTerm = searchTerm;
  }

  init() {
    this.domCreator();
    this.domHtmlSetter();
    this.domHtmlNamer();
    this.domAppender();
  }

  domCreator() {
    this.errorImg = document.createElement('img');
    this.errorTxt = document.createElement('P');
    this.errorCont = document.createElement('div');
  }

  domHtmlSetter() {
    this.errorImg.src = errorImg;
    this.errorTxt.innerHTML = `Could not find any match for "${this.searchTerm}"`;
  }

  domHtmlNamer() {
    this.errorImg.id = 'error-img';
    this.errorTxt.id = 'error-txt';
    this.errorCont.classList = 'error-cont';
  }

  domAppender() {
    this.errorCont.appendChild(this.errorImg);
    this.errorCont.appendChild(this.errorTxt);
    this.div.appendChild(this.errorCont);
  }
}
