require_relative('../db/sql_runner')
require( 'pg' )

class PizzaOrder

  attr_reader :topping, :quantity, :customer_id

  def initialize( options )
    @id = options['id'].to_i if options['id']
    @topping = options['topping']
    @quantity = options['quantity'].to_i
    @customer_id = options['customer_id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM pizza_orders;"
    orders = SqlRunner.run( sql )
    return orders.map { |order| PizzaOrder.new( order ) }
  end

  def save()
    sql = "INSERT INTO pizza_orders (
      topping,
      quantity,
      customer_id ) VALUES (
      '#{ @topping }',
      '#{ @quantity }',
      '#{ @customer_id }'
      ) RETURNING *;"
    order = SqlRunner.run( sql ).first
    @id = order['id'].to_i
  end

  def customer()
    sql = "SELECT * FROM customers WHERE id = #{ @customer_id }"
    customer = SqlRunner.run( sql ).first
    result = Customer.new( customer )
    return result
  end

end