require( 'sinatra' )
require( 'sinatra/contrib/all' )
require( 'pry-byebug' )
require_relative('./models/pizza') 

get '/pizzas' do
  @pizzas = Pizza.all() #new
  erb ( :index ) #new
end

#new pizza form
get '/pizzas/new' do 
  erb( :new )
end

#get a pizza by id
get '/pizzas/:id' do
  @pizza = Pizza.find( params[:id] ) #new
  erb( :show ) #new
end

#delete a pizza by id
post '/pizzas/:id/delete' do
  Pizza.destroy( params[:id] )
  redirect to('/pizzas')
end

#actually make a pizza
post '/pizzas' do 
  @pizza = Pizza.new( params ) #NEW
  @pizza.save() #NEW
  erb( :create ) #NEW
end

#edit pizza form
get '/pizzas/:id/edit' do
  @pizza = Pizza.find( params[:id] ) #new
  erb( :edit ) #new
end

#actually update a pizza by id
post '/pizzas/:id' do
  @pizza = Pizza.update( params )
  redirect to( "/pizzas/#{params[:id]}" )
end