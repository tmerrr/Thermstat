require 'sinatra/base'
require 'sinatra/cross_origin'
require './models/thermostat'

class ThermostatController < Sinatra::Base
  register Sinatra::CrossOrigin

  get '/get_data' do
    cross_origin
    @data = ThermostatModel.get(1)
    erb :thermostatData
  end

  post '/save_data' do
    cross_origin
    temperature = params[:temperature]
    power_mode = params[:power_mode]
    city = params[:city]
    ThermostatModel.destroy!
    ThermostatModel.create(id: 1, temperature: temperature, power_mode: power_mode, city: city)
  end

  run if app_file == $0
end
