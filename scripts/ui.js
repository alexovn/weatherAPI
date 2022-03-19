class UI {
  constructor() {
    this.city = document.querySelector('#w-city');
    this.country = document.querySelector('#w-country');
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.string = document.querySelector('#w-string');
    this.icon = document.querySelector('#w-icon');
    this.details = document.querySelector('#w-details');
    this.humidity = document.querySelector('#w-humidity');
    this.pressure = document.querySelector('#w-pressure');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.wind = document.querySelector('#w-wind');
  }

  paint(weather) {
    const iconUrl = 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '.png'

    this.city.textContent = weather.name;
    this.country.textContent = weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.string.innerHTML = weather.main.temp + ' ' + '&#8451;';
    this.icon.setAttribute('src', iconUrl);
    this.humidity.innerHTML = `Relative Humidity: ${weather.main.humidity}` + '&#37;';
    this.feelsLike.innerHTML = `Feels like: ${weather.main.feels_like}` + ' ' + '&#8451;';
    this.pressure.textContent = `Pressure: ${weather.main.pressure}` + ' ' + 'hPa';
    this.wind.textContent = `Wind: ${weather.wind.speed}` + ' ' + 'm/s';
  }
}