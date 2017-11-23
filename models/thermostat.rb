require 'data_mapper'
require 'dm-postgres-adapter'

class ThermostatModel
  include DataMapper::Resource

  property :id,          Serial
  property :temperature, Integer
  property :power_mode,  Boolean
  property :city,        String
end

DataMapper.setup(:default, 'postgres://localhost/thermostat')
DataMapper.finalize
DataMapper.auto_migrate!
