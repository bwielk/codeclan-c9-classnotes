require( 'sinatra' )
require( 'sinatra/contrib/all' )
require_relative( '../models/zombie.rb' )

get '/zombies' do
  @zombies = Zombie.all()
  erb ( :"zombies/index" )
end