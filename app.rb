require 'sinatra/base'
require './models/thermostat'

class ThermostatController < Sinatra::Base

  post '/thermostat' do
    p params
    temperature = params[:temperature]
    power_mode = params[:power_mode]
    city = params[:city]
    if ThermostatModel.all.empty?
      ThermostatModel.create(temperature: temperature, power_mode: power_mode, city: city)
    else
      last_data = ThermostatModel.all.last
      last_data.update(temperature: temperature, power_mode: power_mode, city: city)
    end
  end

  run if app_file == $0
end
