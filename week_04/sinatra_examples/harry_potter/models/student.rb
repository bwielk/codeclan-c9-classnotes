require_relative( '../db/sql_runner' )

class Student

  attr_accessor( :first_name, :second_name, :age, :id, :image_url, :house_id )

  def initialize( options )
    @id = nil || options['id'].to_i
    @first_name = options['first_name']
    @second_name = options['second_name']
    @age = options['age']
    @image_url = options['image_url']
    @house_id = options['house_id']
  end

  def save()
    sql = "INSERT INTO students (
      first_name, second_name, age, image_url, house_id
    ) VALUES (
      '#{ @first_name }','#{ @second_name }', '#{ @age }', '#{image_url}', '#{house_id}'
    ) RETURNING *"
    student_data = SqlRunner.run(sql)
    @id = student_data.first()['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM students"
    students = SqlRunner.run( sql )
    result = students.map { |student| Student.new( student ) }
    return result
  end

  def self.find( id )
    sql = "SELECT * FROM students WHERE id=#{id}"
    student = SqlRunner.run( sql )
    result = Student.new( student.first )
    return result
  end

  def self.update( options )
    sql = "UPDATE students SET
      first_name='#{ options['first_name'] }', second_name='#{ options['second_name'] }', age='#{ options['age'] }', image_url='#{ options['image_url'] }', house_id='#{ options['house_id'] }'
      WHERE id='#{ options['id'] }'"
    SqlRunner.run( sql )
  end

  def self.destroy( id )
    sql = "DELETE FROM students WHERE id=#{ id }"
    SqlRunner.run( sql )
  end

  def house()
    sql = "SELECT * FROM houses WHERE id = #{@house_id}"
    result = SqlRunner.run( sql ).first
    return House.new( result )
  end

end
