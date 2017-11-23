function Thermostat() {
  this.temperature = 20;
  this.isPowerSaving = true;
}

Thermostat.prototype.increaseTemp = function() {
  if (this.isPowerSaving && this.temperature >= 25) {
    throw 'Power saving is on, maximum temperature reached';
  } else if (this.isPowerSaving === false && this.temperature === 32) {
    throw 'Power saving is off, maximum temperature reached';
  }
  this.temperature++ //You can use +=  1 like in ruby
}

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature <= 10) throw 'Minimum temperature reached';
  this.temperature--
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
}

Thermostat.prototype.switchPowerSaving = function() {
  if (this.isPowerSaving) {
    this.isPowerSaving = false;
  } else {
    if (this.temperature > 25) this.temperature = 25;
    this.isPowerSaving = true;
  }
}
