class Planet

  def initialize(name, size)
    @name = name
    @size = size
  end

  def get_name()
    return @name
  end

  def get_size()
    return @size
  end

  def explode()
    puts "Boom! #{@name} has exploded."
  end

end

mars = Planet.new("Mars", 908973)
puts "#{mars.get_name()} is #{mars.get_size()}"
mars.explode()