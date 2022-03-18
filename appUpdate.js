const weather = new Weather();

const example = {
  city: 'London',
  state: 'GB'
}
weather.getWeather(example)
  .then(result => console.log(result))
  .catch(err => console.log(err));