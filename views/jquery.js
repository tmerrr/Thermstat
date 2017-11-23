const thermostat = new Thermostat();

const updateTemperature = function() {
  $('#currentTemperature').html(thermostat.temperature);
  updateColor();
  // document.getElementById('currentTemperature').innerHTML = (thermostat.temperature);
}

  $('#save').click(function(){
    $.post('http://localhost:9292/thermostat', { temperature: thermostat.temperature });
  });

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

$('#confirmCity').click(function(){
  var city = $('#cities option:selected').text();
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=be55924011f9ecb6fd2e037de76a225e`, function(weatherResponse) {
    $('#outsideTemp').html(weatherResponse.main.temp);
    $('#weather').html(weatherResponse.weather[0].description);
  });
});

$(document).ready(function(){
  updateTemperature();
});
