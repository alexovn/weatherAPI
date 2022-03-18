class Weather {
  constructor() {
    this.apiKey = 'a9f1b3e7ce71f6d73a6bdd1275776d61';
    this.limit = 1;
  }

  // Get coords
  async getCityCoords(city = this.city, state = this.state) {
    this.city = city;
    this.state = state;

    const response =  await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state}&limit=${this.limit}&appid=${this.apiKey}`);

    const responseLocationData = await response.json();

    return responseLocationData;
  }

  // Get weather data
  async getWeather(data) {
    if(!data.city || !data.state) return;
    Object.assign(this, data);

    const cityCoords = await this.getCityCoords();
    const {lat, lon} = cityCoords[0];

    const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);

    const responseData = await response.json();

    console.log(responseData.name + ': ' + responseData.main.temp + ' F')

    return responseData;
  }

  changeLocation(city, state) {
    return this.getWeather({city, state});
  }
}