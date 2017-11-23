require 'sinatra/base'
require './models/thermostat'

class ThermostatController < Sinatra::Base

  post '/thermostat' do
    p params
    temperature = params[:temperature]
    power_mode = params[:power_mode]
    city = params[:city]
    ThermostatModel.create(temperature: temperature, power_mode: power_mode, city: city)
  end

  run if app_file == $0
end
