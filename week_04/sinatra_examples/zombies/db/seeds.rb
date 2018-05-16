require_relative( '../models/zombie.rb' )
require_relative( '../models/victim.rb' )
require_relative( '../models/biting.rb' )
require('pry')

Biting.delete_all
Zombie.delete_all
Victim.delete_all

zombie1 = Zombie.new({
  'name' => "Craig",
  'type' => 'Drooler'
})

zombie1.save

zombie2 = Zombie.new({
  'name' => "Beth",
  'type' => 'Walker'
})

zombie2.save

zombie3 = Zombie.new({
  'name' => "Sean",
  'type' => 'Bearded'
})

zombie3.save

zombie4 = Zombie.new({
  'name' => "Steven",
  'type' => 'Runner'
})

zombie4.save

victim1 = Victim.new({
  'name' => "Kristie",
  'run_speed' => 1
})

victim1.save

victim2 = Victim.new({
  'name' => "Nina",
  'run_speed' => 6
})

victim2.save

victim3 = Victim.new({
  'name' => "Ben",
  'run_speed' => 90
})

victim3.save

victim4 = Victim.new({
  'name' => "Graeme",
  'run_speed' => 100
})

victim4.save

biting1 = Biting.new({
  'victim_id' => victim1.id,
  'zombie_id' => zombie1.id
})

biting1.save

biting2 = Biting.new({
  'victim_id' => victim2.id,
  'zombie_id' => zombie2.id
})

biting2.save