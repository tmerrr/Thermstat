const thermostat = new Thermostat();

const updateTemperature = function() {
  $('#currentTemperature').html(thermostat.temperature);
  updateColor();
  // document.getElementById('currentTemperature').innerHTML = (thermostat.temperature);
}

  $('#save').click(function() {
    var city = $('#cities option:selected').text();
    $.post('http://localhost:9292/thermostat', {
      temperature: thermostat.temperature,
      power_mode: thermostat.isPowerSaving,
      city: city
    });
  });

const decideColour = function() {
  switch (thermostat.energyUsage()) {
    case 'low-usage':
    return 'green';
    break;
    case 'medium-usage':
    return 'yellow';
    break;
    case 'high-usage':
    return 'red';
  };
}

const updateColor = function() {
  $('#Box').css('background-color', decideColour);
}

$('#increaseTemp').click(function() {
  thermostat.increaseTemp();
  updateTemperature();
});

$('#decreaseTemp').click(function() {
  thermostat.decreaseTemp()
  updateTemperature();
});

$('#switchPowerSaving').click(function() {
  thermostat.switchPowerSaving();
  $('#powerSaving').html(thermostat.isPowerSaving ? 'Off' : 'On');
  updateTemperature();
});

$('#Reset').click(function() {
  thermostat.reset();
  updateTemperature();
});

$('#confirmCity').click(function() {
  var city = $('#cities option:selected').text();
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=be55924011f9ecb6fd2e037de76a225e`, function(weatherResponse) {
    $('#outsideTemp').html(weatherResponse.main.temp);
    $('#weather').html(weatherResponse.weather[0].description);
  });
});

$(document).ready(function() {
  updateTemperature();
});
