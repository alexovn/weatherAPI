const weather = new Weather('London', 'GB');

weather.getWeather()
  .then(result => console.log(result))
  .catch(err => console.log(err));