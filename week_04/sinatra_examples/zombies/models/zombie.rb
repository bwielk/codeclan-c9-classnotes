require_relative( '../db/sql_runner' )

class Zombie

  attr_reader( :name, :type, :id )

  def initialize( options )
    @id = nil || options['id'].to_i
    @name = options['name']
    @type = options['type']
  end

  def save()
    sql = "INSERT INTO zombies (
      name, type
    ) VALUES (
      '#{ @name }','#{ @type }'
    ) RETURNING *"
    results = SqlRunner.run(sql)
    @id = results.first()['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM zombies"
    results = SqlRunner.run( sql )
    return results.map { |hash| Zombie.new( hash ) }
  end

  def self.find( id )
    sql = "SELECT * FROM zombies WHERE id=#{id}"
    results = SqlRunner.run( sql )
    return Zombie.new( results.first )
  end

  def self.delete_all
    sql = "DELETE FROM zombies"
    SqlRunner.run( sql )
  end

end
