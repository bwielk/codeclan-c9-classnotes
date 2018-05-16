# One to Many Intro

#### Objectives

- Explain what a one to many relationship is
- Demonstrate setting up a SQL database and tables with a foreign key

So far we have just been relating one model with one database table. However the power of relational databases like Postgres is that you can have relationships, or associations, between different tables, and then we can reflect this in our Ruby modelling.

Today we will be looking at a 'one-to-many' relationship. One row in one table is related to many rows in another. 

Yesterday we were creating a database of Pizza Orders. However if a customer were to make several orders, there's no way to keep a record of all the orders this customer has made. What if we separated out the 'first_name' and 'last_name' columns on the PizzaOrders table to be their own table of Customers?

### What's the relationship?

Customer has many PizzaOrders

PizzaOrder belongs to one Customer

What are the benefits of having this relationship?

- The customer could go back and look at previous orders to remember what the name of that awesome pizza they got last time was
- The shop could look at a customer's orders and send them special deals for things they order often
- A customer could create an account and not have to enter their delivery details and phone number each time

...and many more. When there's a relationship between two things it makes sense to represent this in our database.

### Setup

First get our files from yesterday. If you want to have that stuff separately to look at you can copy it, but you'll have to make a second database with a different name to be working on.

Planning - what do our new tables need to look like? Customer has a name and id, PizzaOrder has id, topping, quantity, and customer_id. 

Let's set up our new Customers table in our SQL file.

```
#pizza_shop.sql
DROP TABLE pizza_orders;
DROP TABLE customers;

CREATE TABLE customers (
  id SERIAL4 primary key,
  name VARCHAR(255)
);

-- delete the first_name and last_name from pizza_orders

CREATE TABLE pizza_orders (
  id SERIAL4 primary key,
  topping VARCHAR(255),
  quantity INT2
);

```

Now run the SQL file:

```
  psql -d pizza_shop -f db/pizza_shop.sql
```

So at the moment, our models are completely unrelated. Pizza Orders know nothing about Customers and Customers know nothing about Pizza Orders. How can we relate a customer to a set of orders? 

We can use a foreign key in the orders table. We do this with the references keyword, and specify which column of another table it is linked to. Every time an order is created, it should be given a relevant customer's id that it is attached to.

```
...

CREATE TABLE pizza_orders (
  id SERIAL4 primary key,
  topping VARCHAR(255),
  quantity INT2,
  customer_id INT4 references customers(id)
);

```

[i]: Remember we are dropping the pizza_orders table first because it references some customers so it can't exist without the customers.

Revision from Monday: Why do we use the references keyword instead of just having a customer_id that's an INT4? It ties it to a primary key in another table, and makes sure we can't just write nonsense or reference a customer that doesn't exist. It makes sure it's UNIQUE and NOT NULL.

## Models

Let's make a Customer model:
```
## In terminal:
touch models/customer.rb

## in customer.rb:

require( 'pg' )

class Customer

  attr_reader :id, :name 

  def initialize( options )
    @id = options['id'].to_i
    @name = options['name']
  end

//get students to write the save method

  def save()
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' } )
    sql = "INSERT INTO customers (name) VALUES ('#{ @name }')"
    result = db.exec(sql)
    db.close()
    @id = result[0]['id'].to_i
  end

end

```

We also have to edit our PizzaOrder class to include the customer ID.

```
## In pizza_order.rb:

class PizzaOrder

  attr_reader :topping, :quantity, :customer_id

  def initialize( options )
    @id = options['id'].to_i if options['id']
    @topping = options['topping']
    @quantity = options['quantity'].to_i
    @customer_id = options['customer_id'].to_i
    // remove first and last name 
  end

...

  def save()
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' } )
    sql = "INSERT INTO pizza_orders ( topping, quantity, customer_id ) 
      VALUES ( '#{ @topping }', '#{ @quantity }','#{ @customer_id }' );"
    result = db.exec(sql)
    db.close()
    @id = result[0]['id'].to_i
  end
end

```

Show how having returned and updated the ID lets us write seed data for PizzaOrders that uses the ID of previously created Customers:

```
# console.rb

customer1 = Customer.new({ 'name' => 'Beth Fraser' })
customer1.save()

order1 = PizzaOrder.new({ 
  'customer_id' => customer1.id,
  'topping' => 'pepperoni', 
  'quantity' => 2 
})
order1.save()
```


## Refactoring

As we can see we have some repeated code where we go to talk to the database. This is only going to increase in repetition as we add more database related methods. Let's separate that code out into its own class, called SqlRunner, which we just pass a SQL string to to be executed. 


```
## In terminal:
touch db/sql_runner.rb

## In sql_runner.rb:
class SqlRunner

  def self.run( sql )
    begin
      db = PG.connect({ dbname: 'pizza_shop', host: 'localhost' })
      result = db.exec( sql )
    ensure
      db.close
    end
    return result
  end

end
```

- What does the Begin/Ensure/End block do?

Now let's use this in our Customer and PizzaOrder models.

Let's quickly make an .all() method for the customer model just so we can easily have a look at all of our customers.

```
#customer.rb

  def self.all()
    sql = "SELECT * FROM customers;"
    customers = SqlRunner.run( sql )
    return customers.map { |person| Customer.new( person ) }
  end

```

TASK: Change the other database calling methods to use our SqlRunner helper.

## Adding records in the console

We already have our console file so can now add some more seed data to create some customers and add them to the orders, and check our other methods.

## Retrieving our customer from orders 

OK, so now we have a customer and order which are related. The power of these database relationships is that they link data together, so we want to be able to make use of that in our Ruby models. It would be great to be able to call order1.customer() and see that it's Beth and see her address to deliver to, or for Beth to be able to call customer1.pizza_orders() and see a list of her past orders.

What could we do to get back the customer related to our order?

First we need to work out the SQL string we need to run to get back the customer. Assume we already know the ID is 1.

```
SELECT * FROM customers WHERE id = 1;
```

Now think about how we can replace the 1 with whichever customer's ID the pizza order has. 

In pizza_order.rb:

```
def customer()
  sql = "SELECT * FROM customers WHERE id = #{ @customer_id }"
  customer = SqlRunner.run( sql ).first
  result = Customer.new( customer )
  return result
end
```

TASK:
Now try getting the pizza orders that a customer has. This is slightly different because there may be more than one being returned.

In customer.rb:

```
def pizza_orders()
  sql = "SELECT * FROM pizza_orders WHERE customer_id = #{ @id }"
  orders = SqlRunner.run( sql )
  result = orders.map { |order| PizzaOrder.new( order ) }
  return result
end
```


