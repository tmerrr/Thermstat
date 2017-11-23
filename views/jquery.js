const thermostat = new Thermostat();

const updateTemperature = function() {
  $('#currentTemperature').html(thermostat.temperature);
  // document.getElementById('currentTemperature').innerHTML = (thermostat.temperature);
}

const switchPs = function() {
  thermostat.switchPowerSaving();
  $('#powerSaving').html(thermostat.isPowerSaving ? 'On' : 'Off');
  updateTemperature();
  // document.getElementById('powerSaving').innerHTML = (thermostat.isPowerSaving ? 'On' : 'Off');
}

const decrease = function() {
  thermostat.decreaseTemp()
  updateTemperature();
}

// $(document).click(function() {
//   thermostat.increaseTemp();
//   updateTemperature();
// });

$('#increaseTemp').click(function() {
  thermostat.increaseTemp();
  updateTemperature();
});
