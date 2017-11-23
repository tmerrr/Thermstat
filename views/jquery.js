const thermostat = new Thermostat();

const updateTemperature = function() {
  $('#currentTemperature').html(thermostat.temperature);
  updateColor();
  // document.getElementById('currentTemperature').innerHTML = (thermostat.temperature);
}

const updateColor = function(){
  switch (thermostat.energyUsage()) {
    case 'low-usage':
      color = 'green';
      break;
    case 'medium-usage':
      color = 'yellow';
      break;
    case 'high-usage':
      color = 'red';
  };
  $('#Box').css('background-color', color);
}

$('#increaseTemp').click(function() {
  thermostat.increaseTemp();
  updateTemperature();
});

$('#decreaseTemp').click(function(){
  thermostat.decreaseTemp()
  updateTemperature();
});

$('#switchPowerSaving').click(function(){
  thermostat.switchPowerSaving();
  $('#powerSaving').html(thermostat.isPowerSaving ? 'Off' : 'On');
  updateTemperature();
});

$('#Reset').click(function(){
  thermostat.reset();
  updateTemperature();
});

$(document).ready(function(){
  updateTemperature();
  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=be55924011f9ecb6fd2e037de76a225e", function(weatherResponse) {
    $('#outsideTemp').html(weatherResponse.main.temp);
    $('#weather').html(weatherResponse.weather[0].description);
  });
});
