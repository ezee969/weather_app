export { CityWeather };

class CityWeather {
  constructor(weather, weatherDesc, temp, tempFeelsLike, tempMax, tempMin, humidity) {
    this.weather = weather;
    this.weatherDesc = weatherDesc;
    this.temp = temp;
    this.tempFeelsLike = tempFeelsLike;
    this.tempMax = tempMax;
    this.tempMin = tempMin;
    this.humidity = humidity;
  }
}
