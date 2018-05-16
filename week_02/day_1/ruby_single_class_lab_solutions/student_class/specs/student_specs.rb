require('MiniTest/autorun')
require('MiniTest/rg')
require_relative('../student')

class StudentTest < MiniTest::Test

  def setup()

    @student = Student.new("Jeff", 6)

  end

  def test_student_has_name()
    assert_equal("Jeff", @student.name())
  end

  def test_student_has_cohort()
    assert_equal(6, @student.cohort())
  end

  def test_student_can_talk()
    assert_equal("I can talk", @student.talk())
  end

  def test_student_has_favourite_language()
    assert_equal("I love Ruby", @student.code("Ruby"))
  end

  def test_students_name_can_update()
    @student.name = "Paul"
    assert_equal("Paul", @student.name())
  end

  def test_student_can_change_cohort()
    @student.cohort = 9
    assert_equal(9, @student.cohort())
  end


end