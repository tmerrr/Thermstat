// <script type="text/javascript">
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

const increase = function() {
  thermostat.increaseTemp();
  updateTemperature();
}

const decrease = function() {
  thermostat.decreaseTemp()
  updateTemperature();
}
// </script>
