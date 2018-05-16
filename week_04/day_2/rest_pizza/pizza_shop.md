# RESTful Pizza Shop

## Objectives
- Learn the restful routes pattern
- Make a functioning CRUD app for one resource
- Understand form posting
- Practice ERB

# Create the database

We have some models to use already, which are very similar to what we had last week with a few little additions. 

[i:] Give the students a few minutes to look at the sql script and seeds file.

```
createdb pizza_shop
psql -d pizza_shop -f db/pizza_shop.sql
ruby db/seeds.rb
```

# Restful routes

Write out restful routes one by one in this order.

We need to make sure /new goes above :/id can you think why? The :id route will catch /new otherwise! Put specific matches above so it matches first.

```ruby

#get all pizza
get '/pizzas' do

end

#new pizza form
get '/pizzas/new' do 
  
end

#actually make a pizza
post '/pizzas' do 

end

#get a pizza by id
get '/pizzas/:id' do

end

#delete a pizza by id
post '/pizzas/:id/delete' do

end

#edit pizza form
get '/pizzas/:id/edit' do
  
end

#actually update a pizza by id
post '/pizzas/:id' do

end

```

# Show all pizza

If we are going to show the pizzas in our db, we will need to first include the model in our controller.

```ruby
require_relative('./models/pizza') 
```

Next, we want to get all of the pizzas and allow them to be accessed from the view.

```ruby
get '/pizza' do
  @pizzas = Pizza.all() #new
  erb ( :index ) #new
end
```

We need the corresponding index view so let's go make it now.

```ruby
#terminal
touch views/index.erb
```

Let's check it's working first by using a little bit of dummy html.

```ruby
#index.erb
<h1>Hello</h1>
```

Imagine we were just writing some normal ruby code, how could we iterate over our pizzas? A for loop or an each enumerator! We can do this in our erb. 

Pay special attention to which <% %> tags have an equals sign and which do not!

```
<h1>Pizza Orders</h1>

<% for pizza in @pizzas %>
<p>Name: <%= pizza.pretty_name() %></p>
<p>Order: <%= pizza.quantity %> x <%= pizza.topping %></p>
<hr/>
<% end %>
```

Let's add a wee nav item that we can use to get back to the index page at any time.

```ruby
#layout.erb
<body>
<nav>
  <ul>
    <li>
      <a href="/pizzas">Pizza Orders</a>
    </li>
  </ul>
</nav>
#same as before
```

# View Pizza By Id

It would be nice to be able to view a given pizza by it's id. If we look at our Pizza model it has a method on it that can help us out.

```ruby
#pizza_controller
get '/pizza/:id' do
  @pizza = Pizza.find( params[:id] ) #new
  erb( :show ) #new
end
```

We need to create the corresponding view.

```ruby
#terminal
touch views/show.erb
```

```ruby
#views/show
<p>First name: <%= @pizza.first_name() %></p>
<p>Last name: <%= @pizza.last_name() %></p>
<p>Quantity: <%= @pizza.quantity %></p>
<p>Topping: <%= @pizza.topping %></p>
```

Let's update our index page with a link to each one.

```ruby
#index.erb
<% for pizza in @pizzas %>
<p>Name: <%= pizza.pretty_name() %></p>
<p>Order: <%= pizza.quantity %> x <%= pizza.topping %></p>
<p><a href="/pizzas/<%=pizza.id %>">Show</a></p> #NEW
<hr>
```

# Delete a pizza

Next step - let's remove a pizza! Have a look at the pizza model and see if you can see the method we need to call.

```ruby
#pizza_controller.rb
post '/pizza/:id/delete' do
  Pizza.destroy( params[:id] )
  redirect to('/pizzas')
end
```

Let's add a delete button to the show page. Note - we can't use a href to make a post request!! So this will have to be a form.

```ruby
#views/show
<p>First name: <%= @pizza.first_name() %></p>
<p>Last name: <%= @pizza.last_name() %></p>
<p>Quantity: <%= @pizza.quantity %></p>
<p>Topping: <%= @pizza.topping %></p>

<form action="/pizzas/<%= @pizza.id %>/delete" method="post">
  <input type="submit" value="Delete"> #UPDATED
</form> 
```

# New Pizza Form

Now that we have deleted all of our pizzas, now is probably a good time to allow the user to add a new one.

```ruby
#new pizza form
get '/pizzas/new' do 
  erb( :new )
end
```

This is a GET route that serves up a page with a form where a user can fill out some fields for a new pizza. It is NOT responsible for making the actual pizza and saving it to the db! It is important to see the difference. 

This is step one of a two step process - where we will POST the data to another route that handles the actual creation and saving to the db.

Let's add a link to the index page so we can get to this route.

```ruby
#index.erb
<h1>Pizza Orders<h1>
<p><a href="/pizzas/new">New pizza</a></p> #NEW
```

[i:] The full form is below, but you might want to do it input by input to fix any typos along the way!

Notice that 'number' types do not allow non numerical text.

```ruby
#terminal
touch views/new.erb

#new.erb
<h1>Order a pizza</h1>

<form action="/pizzas" method="post">
  <label>
  First Name:
  <input type="text" name="first_name">
  </label>

  <label>
  Last Name:
  <input type="text" name="last_name">
  </label>

  <label>
    Select a pizza:
    <select name="topping">
      <option value="Margherita">Margherita</option>
      <option value="Calzone">Calzone</option>
    </select>
  </label>

  <label>
  Quantity:
  <input type="number" name="quantity">
  </label>

  <input type='submit' value="Order Pizza">
</form>

```

!!!! On submit, show the "form data" in the request in the Network tab of Chrome Dev Tools > Headers > Form Data. !!!

This currently does nothing, let's go update the corresponding POST route.

# Create a pizza from a POST

We want to save our newly created pizza and then go to a page that displays a confirmation. Luckily, our pizza data is available to us in the params hash.

```ruby
#pizza_controller
post '/pizzas' do 
  @pizza = Pizza.new( params ) #NEW
  @pizza.save() #NEW
  erb( :create ) #NEW
end
```

Let's show a little message on creation.

```ruby
#terminal
touch views/create.erb

#views/create.erb
<p>Your order was successful!</p>
<p>Total: £<%= @pizza.total() %></p>
<p>Please call 0800 91554 to pay.</p>
```

# Edit a pizza form

It's feasible we might make a mistake when creating a pizza, so let's add the ability to edit a pizza.

```ruby
#pizza_controller
get '/pizzas/:id/edit' do
  @pizza = Pizza.find( params[:id] ) #new
  erb( :edit ) #new
end
```

Let's add a link to this route to our show page.

```ruby
<p>Topping: <%= @pizza.topping %></p>

<a href="/pizzas/<%= @pizza.id %>/edit">Edit</a> 
```

```ruby
#terminal
touch views/edit.erb
```

Copy over new.erb and modify it with values. We ** could ** share this with the new form, but we want to keep it simple for now.

[i:] Again, the whole form is here but you might want to do it bit by bit to account for typos.

```ruby
#edit.erb
<h1>Edit Pizza Order</h1>

<form action="/pizzas/<%= @pizza.id %>" method="post">
  <label>
  First Name:
    <input type="text" name="first_name" value="<%= @pizza.first_name() %>" >
  </label>

  <label>
  Last Name:
    <input type="text" name="last_name" value="<%= @pizza.last_name() %>">
  </label>

  <label>Select a pizza:
    <select name="topping">
      <option value="Margherita" <%= "selected" if @pizza.topping == "Margherita" %>>Margherita</option>
      <option value="Calzone" <%= "selected" if @pizza.topping == "Calzone" %>>Calzone</option>
    </select>
  </label>

  <label>Quantity:
    <input type="number" name="quantity" value="<%= @pizza.quantity() %>">
  </label>
  <input type='submit' value="Update">
</form>

```

Make sure the POST goes to the correct url before we add the code to make the magic happen.

# Save an updated pizza

```ruby
#pizza_controller
post '/pizzas/:id' do
  @pizza = Pizza.update( params )
  redirect to( "/pizzas/#{params[:id]}" )
end
```

Now our pizza shop app has all of our CRUD actions and we can talk to our database through our Sinatra website.





