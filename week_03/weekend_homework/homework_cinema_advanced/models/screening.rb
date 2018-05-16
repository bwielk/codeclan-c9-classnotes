require_relative('../db/sql_runner')
require('pry-byebug')

class Screening

  attr_reader :id, :film_id, :start_time, :empty_seats

  def initialize(options)
    @id = options['id'].to_i
    @film_id = options['film_id'].to_i
    @start_time = options['start_time']
    @empty_seats = options['empty_seats'].to_i
  end

  def save()
    sql = "INSERT INTO screenings (film_id, start_time, empty_seats) VALUES (#{@film_id}, '#{@start_time}', #{@empty_seats}) RETURNING *"
    screening = SqlRunner.run(sql).first
    @id = screening['id'].to_i
  end 

  def film()
    sql = "SELECT * FROM films WHERE films.id = #{@film_id}"
    film = Film.map_item(sql)
    return film
  end

  def update()
    sql = "UPDATE screenings SET (film_id, start_time, empty_seats) = (#{@film_id}, '#{@start_time}', #{@empty_seats}) WHERE id = #{@id}"
    SqlRunner.run(sql)
  end

  def sell_ticket()
    @empty_seats -= 1
    update()
  end

  def self.all()
    sql = "SELECT * FROM screenings"
    return Screening.map_items(sql)
  end

  def self.delete_all()
    sql = "DELETE FROM screenings"
    SqlRunner.run(sql)
  end

  def self.find(id)
    sql = "SELECT * FROM screenings WHERE id = #{id}"
    return Screening.map_item(sql)
  end

  def self.most_popular()
    sql = "SELECT screening_id, COUNT(*) AS count FROM tickets GROUP BY screening_id ORDER BY count DESC LIMIT 1;"
    most_popular_id = SqlRunner.run(sql).first["screening_id"].to_i
    return Screening.find(most_popular_id)
  end

  #Helper methods for mapping
  def self.map_items(sql)
    screenings = SqlRunner.run(sql)
    result = screenings.map { |screening| Screening.new( screening ) }
    return result
  end

  def self.map_item(sql)
    result = Screening.map_items(sql)
    return result.first
  end

end