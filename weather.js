class Weather {
  constructor(city, state) {
    this.apiKey = 'a9f1b3e7ce71f6d73a6bdd1275776d61';
    this.city = city;
    this.state = state;
    this.limit = 1;
    this.coords = null;
  }

  // Get coords
  async getCoords() {
    const response =  await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state}&limit=${this.limit}&appid=${this.apiKey}`);

    const responseLocationData = await response.json();
    this.coords = responseLocationData;

    return responseLocationData;
  }

  // Get weather data
  async getWeather() {
    let coords = await this.getCoords().then(data => data);
    const {lat, lon} = coords[0];

    const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}