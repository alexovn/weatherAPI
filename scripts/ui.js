class UI {
  constructor() {
    this.city = document.querySelector('#w-city');
    this.country = document.querySelector('#w-country');
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.string = document.querySelector('#w-string');
    // this.icon = document.querySelector('#w-icon');
    this.details = document.querySelector('#w-details');
    this.humidity = document.querySelector('#w-humidity');
    this.pressure = document.querySelector('#w-pressure');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.wind = document.querySelector('#w-wind');
  }

  paint(weather) {
    this.city.textContent = weather.name;
    this.country.textContent = weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    console.log(weather.weather[0].icon)
    // this.icon.textContent = weather.weather.icon;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
  }
}