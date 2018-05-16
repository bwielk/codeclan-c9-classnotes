class Student

  attr_accessor :name, :cohort

  def initialize(name, cohort)
    @name = name
    @cohort = cohort.to_i()
  end

  def talk()
    return "I can talk"
  end

  def code(language)
    return "I love #{language}"
  end
end