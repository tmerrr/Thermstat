require 'sinatra/base'

class Thermostat < Sinatra::Base

  post '/thermostat' do
    p params
    @temperature = params[:temperature]
    erb(:thermostat)
  end

  run if app_file == $0
end
