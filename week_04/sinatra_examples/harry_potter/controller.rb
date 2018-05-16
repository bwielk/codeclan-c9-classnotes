require( 'sinatra' )
require( 'sinatra/contrib/all' )

require_relative( './models/student' )
require_relative( './models/house' )

#Homepage
get '/' do
  erb( :welcome )
end

#Students - Index
get '/students' do
  @students = Student.all()
  erb( :'students/index' )
end

#Students - New
get '/students/new' do
  @houses = House.all()
  erb(:'students/new')
end

#Students - Create
post '/students' do
  student = Student.new( params )
  student.save()
  redirect to("/students/#{student.id}")
end

#Students - Show
get '/students/:id' do
  @student = Student.find( params[:id] )
  erb( :'students/show' )
end

#Students - Edit
get '/students/:id/edit' do
  @student = Student.find( params[:id] )
  @houses = House.all()
  erb( :'students/edit' )
end

#Students - Update
post '/students/:id' do
  @student = Student.update( params )
  redirect to( "/students/#{ params[:id] }" )
end

#Students - Destroy
post '/students/:id/delete' do
  Student.destroy( params[:id] )
  redirect to( "/students" )
end

#Houses - Index
get '/houses' do
  @houses = House.all()
  erb( :'houses/index' )
end

#Houses - Show
get '/houses/:id' do
  @house = House.find( params[:id] )
  @students = @house.students
  erb( :'houses/show' )
end


