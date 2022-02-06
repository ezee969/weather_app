export default class CityWeather {
  constructor(
    countryName,
    cityName,
    weatherDesc,
    temp,
    tempFeelsLike,
    tempMax,
    tempMin,
    humidity,
    icon,
  ) {
    this.countryName = countryName;
    this.cityName = cityName;
    this.weatherDesc = weatherDesc;
    this.temp = temp;
    this.tempFeelsLike = tempFeelsLike;
    this.tempMax = tempMax;
    this.tempMin = tempMin;
    this.humidity = humidity;
    this.icon = icon;
  }
}
