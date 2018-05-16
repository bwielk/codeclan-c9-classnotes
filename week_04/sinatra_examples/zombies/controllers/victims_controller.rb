require( 'sinatra' )
require( 'sinatra/contrib/all' )
require_relative( '../models/victim.rb' )

get '/victims' do
  @victims = Victim.all()
  erb ( :"victims/index" )
end