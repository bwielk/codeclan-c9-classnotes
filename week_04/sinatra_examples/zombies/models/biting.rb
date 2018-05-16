require_relative( '../db/sql_runner' )

class Biting

  attr_reader( :zombie_id, :victim_id, :id )

  def initialize( options )
    @id = nil || options['id'].to_i
    @zombie_id = options['zombie_id']
    @victim_id = options['victim_id']
  end

  def save()
    sql = "INSERT INTO bitings (
      zombie_id, victim_id
    ) VALUES (
      '#{ @zombie_id }',#{ @victim_id }
    ) RETURNING *"
    results = SqlRunner.run(sql)
    @id = results.first()['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM bitings"
    results = SqlRunner.run( sql )
    return results.map { |hash| Biting.new( hash ) }
  end

  def victim
    sql = "SELECT * FROM victims v
          INNER JOIN bitings b
          ON b.victim_id = v.id
          WHERE v.id = #{@victim_id}"
          # "SELECT * FROM victims
          # WHERE id = #{@victim_id}"
    results = SqlRunner.run( sql )
    return Victim.new( results.first )
  end

  def zombie
    sql = "SELECT * FROM zombies z
          INNER JOIN bitings b
          ON b.zombie_id = z.id
          WHERE z.id = #{@zombie_id}"
    results = SqlRunner.run( sql )
    return Zombie.new( results.first )
  end

  def self.delete_all
    sql = "DELETE FROM bitings"
    SqlRunner.run( sql )
  end

  def self.destroy(id)
    sql = "DELETE FROM bitings where id = #{id}"
    SqlRunner.run( sql )
  end

end
