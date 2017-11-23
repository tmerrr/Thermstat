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

$(document).ready(function(){
  updateTemperature();
})

$('#Reset').click(function(){
  thermostat.reset();
  updateTemperature();
});
