package wizard_management;
import behaviours.*;

public class Ogre extends MythicalBeast implements Protector {

  public Ogre(String name){
    super(name);
  }

  public String protect(){
    return "Hitting with a massive mace";
  }

}
