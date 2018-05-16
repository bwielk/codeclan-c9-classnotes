require('MiniTest/autorun')
require('MiniTest/rg')
require_relative('../library')

class LibraryTest < MiniTest::Test

  def setup()

    books = {
      "lord_of_the_rings" => {
        :student_name => "Jeff",
        :date => "01/12/2016"
      },
      "colour_of_magic" => {
        :student_name => "",
        :date => ""
      }
    }

    @library = Library.new(books)

  end

  def test_list_books()
    book_list = @library.books()
    assert_equal({
      "lord_of_the_rings" => {
        :student_name => "Jeff",
        :date => "01/12/2016"
      },
      "colour_of_magic" => {
        :student_name => "",
        :date => ""
      }
    }, book_list)
  end

  def test_check_who_is_renting()
    assert_equal({:student_name => "Jeff", :date => "01/12/2016"}, @library.find_renting_info("lord_of_the_rings"))
  end

  def test_can_add_book()
    new_book = {
      "1984" => {
        :student_name => "",
        :date => ""
      }
    }
    @library.add_book(new_book)
    all_books = @library.books()
    assert_equal(3, all_books.count())
  end

  def test_can_rent_out_book()
    @library.rent_book("colour_of_magic", "Paul", "05/12/2016")
    all_books = @library.books()
    assert_equal({
        :student_name => "Paul",
        :date => "05/12/2016"
      } , all_books["colour_of_magic"])
  end

end