import static org.junit.Assert.*;
import org.junit.*;

public class BearTest{
  Bear bear;
  Salmon salmon;
  Human human;
  Chicken chicken;

  @Before 
  public void before() {
    bear = new Bear("Baloo");
    salmon = new Salmon(); 
    human = new Human();
    chicken = new Chicken();
  }

  @Test
  public void hasName(){
    assertEquals( "Baloo", bear.getName() ); 
  }

  @Test
  public void bellyStartsEmpty(){
    assertEquals(0, bear.foodCount());
  }

  @Test
  public void canEatSalmon(){
    bear.eat(salmon, "Monday");
    assertEquals(1, bear.foodCount());
  }

  @Test
  public void canEatHuman(){
    bear.eat(human, "Monday");
    assertEquals(1, bear.foodCount());
  }

  @Test
  public void shouldEmptyBellyAfterSleeping(){
    bear.eat(salmon, "Monday");
    bear.sleep();
    assertEquals(bear.foodCount(), 0);
  }

  @Test
  public void canThrowUpSalmon() {
    bear.eat(salmon, "Monday");
    Edible food = bear.throwUp();
    Salmon original = (Salmon)food;
    assertEquals("swimming",original.swim());
  }

  @Test
  public void canThrowUpChicken() {
    bear.eat(chicken, "Monday");
    Edible food = bear.throwUp();
    Chicken original = (Chicken)food;
    assertEquals("Kweh!",original.cluck());
  }

  @Test
  public void returnsTotalNutrition(){
    bear.eat(salmon, "Monday");
    bear.eat(human, "Monday");
    assertEquals(bear.totalNutrition(), 12);
  }

  @Test
  public void returnsMondaysMeals(){
    bear.eat(salmon, "Monday");
    bear.eat(human, "Monday");
    assertEquals(bear.foodEatenOnDay("Monday"), 2);
  }


  @Test
  public void noMealsOnTuesday(){
    bear.eat(salmon, "Monday");
    bear.eat(human, "Monday");
    assertEquals(bear.foodEatenOnDay("Tuesday"), 0);
  }
}
