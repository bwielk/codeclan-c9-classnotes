require_relative( '../models/student.rb' )
require_relative( '../models/house.rb' )
require('pry')

house1 = House.new({
  'name' => "Gryffindor"
})
house1.save()

house2 = House.new({
  'name' => "Hufflepuff"
})
house2.save()

house3 = House.new({
  'name' => "Ravenclaw"
})
house3.save()

house4 = House.new({
  'name' => "Slytherin"
})
house4.save()

student1 = Student.new({
  'first_name' => "Harry",
  'second_name' => 'Potter',
  'age' => 17,
  'image_url' => 'http://vignette2.wikia.nocookie.net/harrypotter/images/0/00/Harry_James_Potter34.jpg/revision/latest?cb=20150826224904',
  'house_id' => house1.id
})

student2 = Student.new({
  'first_name' => "Hermione",
  'second_name' => 'Granger',
  'age' => 16,
  'image_url' => 'https://flavorwire.files.wordpress.com/2015/09/harry-potter-top-10-hermione-granger-moments-hermione-granger-358045.jpg',
  'house_id' => house1.id
})

student3 = Student.new({
  'first_name' => "Hannah",
  'second_name' => 'Abbott',
  'age' => 16,
  'image_url' => 'http://vignette1.wikia.nocookie.net/harrypotter/images/0/05/Hannah.jpg/revision/latest?cb=20110812073826',
  'house_id' => house2.id
})

student4 = Student.new({
  'first_name' => "Susan",
  'second_name' => 'Bones',
  'age' => 18,
  'image_url' => 'http://vignette1.wikia.nocookie.net/es.harrypotter/images/f/ff/Pansy_sexto.PNG/revision/latest?cb=20100909195511',
  'house_id' => house2.id
})

student5 = Student.new({
  'first_name' => "Terry",
  'second_name' => 'Boot',
  'age' => 16,
  'image_url' => 'http://vignette4.wikia.nocookie.net/harrypotter/images/c/c4/Justin_Finch-Fletchley.jpg/revision/latest?cb=20100404201307',
  'house_id' => house3.id
})

student6 = Student.new({
  'first_name' => "Anthony",
  'second_name' => 'Goldstein',
  'age' => 16,
  'image_url' => 'https://www.favslist.com/photos/pages/x1/Anthony-Goldstein-1405170944-79192.jpg',
  'house_id' => house3.id
})

student7 = Student.new({
  'first_name' => "Draco",
  'second_name' => 'Malfoy',
  'age' => 16, 
  'image_url' => 'https://s-media-cache-ak0.pinimg.com/originals/bf/a5/5c/bfa55ce3a914adea0feababdfcc6f870.jpg',
  'house_id' => house4.id 
})

student8 = Student.new({
  'first_name' => "Gregory",
  'second_name' => 'Goyle',
  'age' => 16,
  'image_url' => 'http://images4.fanpop.com/image/photos/22300000/Gregory-Goyle-draco-and-slytherin-22383874-249-340.jpg',
  'house_id' => house4.id
})

student1.save()
student2.save()
student3.save()
student4.save()
student5.save()
student6.save()
student7.save()
student8.save()




