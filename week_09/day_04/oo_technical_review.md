#OO Technical Review

## Learning Objectives
- OO fundamentals
  - Describe the difference between a class an an object

- 4 Pillars of OO, in relation to OO describe:
  - Abstraction
  - Encapsulation
  - Inheritance
  - Polymorphism

- Abstract class vs interface
- Difference between overriding overloading
- Composition

##Introduction
You've all written some great OO programs in Ruby and Java.  In this lesson we are going to formalise our understanding from a theoretical point of view.  This will be helpful when discussing programs with colleagues, particularly in an interview setting.  We will go through some questions.

##Classes and Objects
In traditional OO programming the two main constructs are Classes and Objects.  Can you explain what they are and how they differ?

Answer: Objects are instances of classes.  Classes can be thought of as a blueprint for an object.  We write these blueprints and then instantiate objects from it.  Can then call methods on these objects to solve problems  [ Draw picture ] Person Class, people objects such as Jay, Val. Drawing pictures is good!

## The 4 Pillars of OO
- 4 Pillars of OO
  - Abstraction
  - Encapsulation
  - Inheritance
  - Polymorphism

###What is Abstraction
Abstract our program into objects. Each object has it's own responsibility.  We start to think about our program from the point of view of each object.  We should aim for an abstraction where each class has only one responsibility
*Single Responsibility Principle*  *Cohesion* Low cohesion, class does a great variety of actions, not focused.  High Cohesion,  well focused.

###What is Encapsulation
Object deals with it's own private state.  This can't be seen from outside - it's encapsulated.  The object exposes it's behaviour through methods.  Objects communicate by calling methods on one another.  Keeping their instance variables private.

###What is Inheritance
Objects gets behaviour defined not only in their direct class,  but also from any class it inherits from.  Allows behaviour to be shared and also polymorphism.  However inheritance can be overused providing hard to understand solutions - difficult to know where behaviour is defined, also class explosion. ElectricBikeWithHorn   *We should favour composition over inheritance*. See later
*Liskov substitution*  If we inherit.  You should be able to replace the parent super class with the sub class. Implement everything correctly.


###What is Polymorphism
An object acting as many different things.  An object is an instance of it's class, this can be thought of as it's type.  It's type can, however, be considered as that of any of it's superclasses. Simba is a Lion, also a Cat also an Animal.  This is polymorphism.  It's type can also be any interface that it implements.  Simba is Roarable.

####Why is this important?
In a statically typed languages we need to define the type that is accepted as a method argument. A zoo could have lions.  If we have a feed method and it asked for Lions, it could then only be used for Lions. It would be *strongly coupled* to Lions. If we wanted to feed a Tiger we would need a separate method and change our Zoo class.

We can *loosen this coupling* by accepting an Animal. Or even better a Feedable interface. Decoupling the Zoo and Lion class, making much more flexible adaptable solution.   *Program to an interface not a implementation*  *Dependency Inversion*

#Abstract Classes
##What is an abstract class?
An abstract class is a class that cannot be instantiated.  What? What is the point in this?  Abstract classes exist purely to be inherited from.  Allowing sharing of functionality and providing polymorphism.  Abstract classes can have abstract methods - methods with no implementation that have to be extended and implement by the child classes, and non-abstract methods - methods with an implementation.

##What is the difference between an abstract class and an interface
An interface is 100% abstract class - all methods are abstract.  What is the point in this, it gives you no implementation so no sharing of functionality!!??  Purely for polymorphism, implementing a interface means you are that, so any method can just ask for that interface, knowing that you have that functionality.  I want a wood chopper - rather than I want a lumberjack, or a sawmill, or an axe.   And the best part... because there is no implementation you can implement from multiple interfaces, there's no problem of knowing which behaviour to use. *Program to an interface not a implementation*
*Interface segregation* More smaller highly cohesive interfaces, over large vague ones.

Abstract classes:
  Subclass can have only ONE superclass
  Can contain properties
  Can contain default implementations
  Can define abstract methods which must be implemented on subclass
  Give the superclass type to the subclass

Interfaces:
  Implementing class can have MANY interfaces
  Cannot contain properties
  Cannot contain default implementations
  Defines method signatures which must be implemented on class using it
  Gives the implementing class the interface type

#What is composition?
Composition is an object delegating to another object to achieve a task.  Think of our Bike delegating a sound making object such as a horn or a bell. It makes our bike flexible to change. If we want to extend our bike we can produce a new ringable object,  we do not have to modify the bike class *Open/Closed Principle*.
Open for modification, closed for extension. Composing in this way, an object delegating to another object is given a fancy name, *dependency injection*.  And further if we are able to change the value it depends on bike.sounder = cool_bell. It is called the *strategy* design pattern.

##Overriding vs overloading
Overriding  ->  Implementing a method that has been inherited
Overloading ->  Creating multiple methods with the same name,  that have different input paramaters; number or type
