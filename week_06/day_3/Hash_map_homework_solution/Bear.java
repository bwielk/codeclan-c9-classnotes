import java.util.*;

public class Bear {
  
  private String name;
  private ArrayList<Edible> belly;
  private HashMap<String, Integer> journal;

  public Bear(String name){
    this.name = name;
    this.belly = new ArrayList<Edible>();
    this.journal = new HashMap<String, Integer>();
  }

  public String getName(){
    return this.name;
  }

  public int foodCount(){
    return belly.size();
  }

  public void eat(Edible food, String currentDay){
    Integer counter = journal.get(currentDay);
    if(counter == null) {
      counter = 0;
    }
    counter++;
    journal.put(currentDay, counter);
    belly.add(food);
  }

  public int foodEatenOnDay(String day){
    Integer count = journal.get(day);
    if(count ==  null) {
      count = 0;
    }
    return count.intValue();
  }

  public void sleep(){
    belly.clear();
  }

  public Edible throwUp(){
    if(foodCount() > 0){
      return belly.remove(0);
    }
    return null;
  }

  public int totalNutrition(){
    int total = 0;
    for(Edible food : belly) {
      total += food.nutritionValue();
    }
    return total;
  }

}
