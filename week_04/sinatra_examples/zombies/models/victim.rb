require_relative( '../db/sql_runner' )

class Victim

  attr_reader( :name, :run_speed, :id )

  def initialize( options )
    @id = nil || options['id'].to_i
    @name = options['name']
    @run_speed = options['run_speed']
  end

  def save()
    sql = "INSERT INTO victims (
      name, run_speed
    ) VALUES (
      '#{ @name }',#{ @run_speed }
    ) RETURNING *"
    results = SqlRunner.run(sql)
    @id = results.first()['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM victims"
    results = SqlRunner.run( sql )
    return results.map { |hash| Victim.new( hash ) }
  end

  def self.find( id )
    sql = "SELECT * FROM victims WHERE id=#{id}"
    results = SqlRunner.run( sql )
    return Victim.new( results.first )
  end

  def self.delete_all
    sql = "DELETE FROM victims"
    SqlRunner.run( sql )
  end

end
