describe ('Thermostat', function() {

  beforeEach(function() {

    thermostat = new Thermostat();

  })

  describe ('Temperature', function() {
    it('set to 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#increaseTemp', function() {
    it('Increase this.temperature by 1', function (){
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21);
    });
    it('When isPowerSaving is true throw an error if this.temperature is equal to 25', function() {
      thermostat.isPowerSaving = true
      thermostat.temperature = 25
      expect(function() {
        thermostat.increaseTemp()
      }).toThrow('Power saving is on, maximum temperature reached');
    })
    it('When IsPowerSain is false throw an error if this.temperature is equal to 32', function() {
      thermostat.isPowerSaving = false
      thermostat.temperature = 32
      expect(function() {
        thermostat.increaseTemp()
      }).toThrow('Power saving is off, maximum temperature reached');
    })
  });

  describe('#decreaseTemp', function() {
    it('Decrease this.temperature by 1', function (){
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(19);
    });
    it('Raise up error call decreaseTemp and this.temp is  = to 10', function() {
      for(i = 0; i < 10; i++) {
        thermostat.decreaseTemp();
      }
      expect(function() {
        thermostat.decreaseTemp()
      }).toThrow('Minimum temperature reached');
    })
  });
  describe('isPowerSaving', function() {
    it('Powers saving is on by default', function() {
      expect(thermostat.isPowerSaving).toBe(true);
    });
  });
});
