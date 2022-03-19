const weather = new Weather('Moscow', 'RU');

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

const changeWeatherBtn = document.querySelector('#w-change-btn');
changeWeatherBtn.addEventListener('click', (e) => {
  const city = document.querySelector('#city').value;
  const state = document.querySelector('#state').value;

  weather.changeLocation(city, state);

  // Get and display weather
  getWeather();

  var myModal = new bootstrap.Modal(document.getElementById('locModal'));
  myModal.hide();
});

function getWeather () {
  weather.getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}