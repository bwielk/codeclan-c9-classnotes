class Library

  attr_reader :books

  def initialize()
    @books = {
      "lord_of_the_rings" => {
        :student_name => "Jeff",
        :date => "01/12/2016"
      },
      "colour_of_magic" => {
        :student_name => "",
        :date => ""
      }
    }
  end

  def find_renting_info(book_title)
    return @books[book_title]
  end

  def add_book(new_book)
    @books.merge!(new_book)
  end

  def rent_book(book_title, student, due_date)
    @books[book_title] = {
      :student_name => student,
      :date => due_date
    }
  end
end