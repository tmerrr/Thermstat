const thermostat = new Thermostat();

const loadInfo = function() {
  $.get('http://localhost:9292/get_data', function(loadData) {
    info = $.parseJSON(loadData);
    thermostat.temperature = info.temperature;
    thermostat.isPowerSaving = info.power_mode;
    $('#cities').val(info.city);
    updateTemperature();
    updatePowerSavingSwitch();
    updateWeather();
  });
}

const updateTemperature = function() {
  $('#currentTemperature').html(thermostat.temperature);
  updateColor();
  // document.getElementById('currentTemperature').innerHTML = (thermostat.temperature);
}

const saveStatus = function() {
  var city = $('#cities option:selected').text();
  $.post('http://localhost:9292/save_data', {
    temperature: thermostat.temperature,
    power_mode: thermostat.isPowerSaving,
    city: city
  });
}

const decideColour = function() {
  switch (thermostat.energyUsage()) {
    case 'low-usage':
    return '#27AE60';
    break;
    case 'medium-usage':
    return '#8E44AD';
    break;
    case 'high-usage':
    return '#CB4335';
  };
}

const updateColor = function() {
  $('#Box').css('background-color', decideColour);
}

const updatePowerSavingSwitch = function() {
  $('#powerSaving').html(thermostat.isPowerSaving ? 'Off' : 'On');
}

const updateWeather = function() {
  var city = $('#cities option:selected').text();
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=be55924011f9ecb6fd2e037de76a225e`, function(weatherResponse) {
    $('#outsideTemp').html(weatherResponse.main.temp);
    $('#weather').html(weatherResponse.weather[0].description);
  });
}

$('#increaseTemp').click(function() {
  thermostat.increaseTemp();
  updateTemperature();
  saveStatus();
});

$('#decreaseTemp').click(function() {
  thermostat.decreaseTemp()
  updateTemperature();
  saveStatus();
});

$('#switchPowerSaving').click(function() {
  thermostat.switchPowerSaving();
  updatePowerSavingSwitch();
  updateTemperature();
  saveStatus();
});

$('#Reset').click(function() {
  thermostat.reset();
  updateTemperature();
  saveStatus();
});

$('#confirmCity').click(function() {
  updateWeather();
  saveStatus();
});

$(document).ready(function() {
  loadInfo();
});
