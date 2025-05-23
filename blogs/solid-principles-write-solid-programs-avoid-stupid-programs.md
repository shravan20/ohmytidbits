---
title: "SOLID Principles: Write SOLID programs; Avoid STUPID programs"
date: 2020-10-06
slug: "solid-principles-write-solid-programs-avoid-stupid-programs"
excerpt: "<p>Hi everyone! Previously, in my last article, I had explained some of the must-know fundamental programming principles, which are applicable in any programming paradigm that you follow. Be it Functi"
categories: ["developer", "development", "express", "javascript", "node", "object-oriented-paradigm", "programming", "technical"]
author: "shravan20"
url: "http://ohmyscript.com/2020/10/06/solid-principles-write-solid-programs-avoid-stupid-programs/"
---

# SOLID Principles: Write SOLID programs; Avoid STUPID programs

Hi everyone! Previously, in [my last article](https://ohmyscript.com/2020/09/03/must-know-basic-engineering-principles-for-programming/), I had explained some of the must-know fundamental programming principles, which are applicable in any programming paradigm that you follow. Be it Functional or Object-Oriented paradigm/programming, those serve as the primary fundamentals.

This article purely speaks of another 5 design principles, most specifically hold good to problems that can be solved using OOPs paradigm. With the rise of OOPs paradigm, brought new designs and techniques of writing the solution to a problem. 

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/09/dont-be-stupid-grasp-solid-north-east-php-1-638-1.jpg?w=449)&#8220;Think Twice, Code Once&#8221;

Similarly, on a larger scale, this technique caused some flaws in the solution we design and write, which often we fail to recognize the bugs added in the form of **STUPID code**.

As I started programming in Typescript standards, implementing OOPS, had become easier, better, smaller and cleaner. I realised one thing after moving from Functional Paradigm to OOPs paradigm, that knowingly or unknowingly we end up implementing some sort of anti-patterns into our codebase.

What&#8217;s a **STUPID** codebase?

A STUPID codebase is that codebase which has flaws or faults, which affect the maintainability, readability or efficiency.

Anti-Pattern Code == STUPID Code

What causes ***STUPID*** codebase?

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/10/captured-4-1.png?w=1024)Why be STUPID, when you can be SOLID

**Singleton**: Violation of Singleton basically decreases the flexibility and reusability of the existing code, which deals with the object creation mechanism. 
It is an anti-pattern, where we define a class and its object in the same script/file and export the object for reusability. This is pattern is not wrong, but using it everywhere inappropriately is an symptom sick codebase.

```
/**
*
*  Creating class Singleton, which is an Anti Pattern 
*  definition.
* 
*  WHY?
*  Let us see.
*/
class Singleton {
  private static instance: Singleton;
  private _value: number;

  /**
  * To avoid creating objects directly using 'new' 
  * operator
  * 
  * Therefore, the constructor is accessible to class 
  * methods only
  */
  private constructor() { } 

  /**
  * Defining a Static function, so to directly
  *  make it accessible without creating an Object
  */
  static makeInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
      Singleton.instance._value = 0;
    }
    return Singleton.instance;
  }
  
  getValue (): number {
    return this._value;
  }
  
  setValue(score) {
    this._value = score;
  }
  incrementValueByOne(): number {
    return this._value += 1;
  }
}

/**
*  Since the Singleton class's constructor is private, we  
*  need to create an instance using the static method 
*  makeInstance()
*  
*  Let us see what anomalies does that cause.
*    
*  Creating an instance using 'new' throw an Error
*  Constructor of class 'Singleton' is private and 
*  only accessible within the class declaration
*  const myInstance = new Singleton(); 
*/

const myInstance1 = Singleton.makeInstance();
const myInstance2 = Singleton.makeInstance();

console.log(myInstance1.getValue()); // OUTPUT: 0
console.log(myInstance2.getValue()); // OUTPUT: 0

myInstance1.incrementValueByOne(); // value = 1
myInstance2.incrementValueByOne(); // value = 2

console.log(myInstance1.getValue()); // OUTPUT: 2
console.log(myInstance2.getValue()); // OUTPUT: 2

/**
* This is the issue Singleton Anti-Pattern
* causing Issue with Singleton Pattern
*/
```

**Tight-Coupling**: Excessive coupling/dependency between classes or different separate functionality is a code smell, we need to be very careful about while we are developing or programming.
We can figure tight-coupling when a method accesses the data of another object more than its own data or some sort of functional chaining scenarios. 

```
/**
* A simple example for Tight-Coupling
*/

class Car {
  
  move() {
    console.log("Car is Moving");
  }
 
}

class Lorry {
   
   move(){
      console.log("Lorry is Moving");
   }

}

class Traveller1 {

  Car CarObj = new Car();
  
  travellerStatus(){
     CarObj.move();
  }    

}

class Traveller2 {

  Lorry LorryObj = new Lorry();
  
  travellerStatus(){
     CarObj.move();
  }    

}
```

**Untestabiility**: Unit Testing is a very important part of software development where you cross-check and test if the component you built is functioning exactly the way expected. It is always advised to ship a product only after writing test cases. Shipping an untested code/product is very much similar to deploying an application whose behaviour you are not sure about.  
Apart from Unit testing, we have other tests like Integration testing, E2E testing and so on, which are done based on their use cases and necessity.
**Premature Optimizations**: Avoid refactoring code if it doesn&#8217;t improve readability or performance of the system for no reason. 
Premature optimisation can also be defined as trying to optimizing the code, expecting it to improvise the performance or readability without having much data assuring it and purely weighing upon intuitions.
**Indescriptive Naming**: Descriptive Naming and Naming Conventions are two important criteria. Most of the times, naming becomes the most painful issue. 
After some time when you or another developer visits the codebase, you would be asking the question &#8216;What does this variable do?&#8217;. We fail to decide what would be the best descriptive name that can be given to a variable, class, class object/instance or function. It is very important to give a descriptive name, for better readability and understandability. 

```
/**
* Example for adding two numbers: Avoid this
*/
function a(a1,a2) { // It is less descriptive in nature
  return a1 + a2;
}

console.log(a(1,2)); // It is less descriptive in nature

/**
* Example for adding two numbers: Better Approach
*/
function sum(num1,num2) {  // sum() is descriptive
  return num1 + num2;
}

console.log(sum(1,2)); 
// Statement is descriptive in nature
```

- **Duplication**: Sometimes, duplication of code is resultant of copy and paste. Violation of [DRY principle](http://DRY principle) causes code-duplication. Always advised not to replicate the code across the codebase, as on longer run causes huge technical debt. Duplication makes code maintenance tedious on a larger scale and longer run.

These flaws were often overlooked knowingly or unknowingly, for which SOLID principles served as the best cure.

So, you wondering now what SOLID principles hold and how does it solve the issues caused due to STUPID postulates. These are programming standards that all developers must understand very well, to create a product/system with good architecture. 
SOLID principles can be considered as remedies to the problems caused due to any of the STUPID flaws in your codebase. 
Uncle Bob, otherwise known as Robert C Martin, was the Software Engineer and Consultant, who came up with mnemonic acronym SOLID in his book &#8220;Clean Coder&#8221;.   Let&#8217;s explore a little more on SOLID principles in detail,

- **Single Responsibility Principle (SRP)**

A class, method or function should undertake the responsibility of one functionality. In simpler words, it should carry out only one feature/functionality.

A class should only have a single responsibility, that is, only changes to one part of the software&#8217;s specification should be able to affect the specification of the class.

[Wikipedia](https://en.wikipedia.org/wiki/SOLID)

In OOPs paradigm, one class should only serve one purpose. This does not mean that each class should have just one method, but the methods you define inside a class should be related to the responsibility of that class.

Let us look into it using a very basic example,

```
/**
* Here, Class User bundled with functionalities which
* deals with business logic and DB calls defined 
* in the same class
*    
* STUPID Approach
*/

class User {

constructor() {...}

/**
* These methods deal with some business logic
*/

//Add New User
public addUser(userData:IUser):IUser {...}

//Get User Details Based on userID
public getUser(userId:number):IUser {...}

//Get all user details
public fetchAllUsers():Array&lt;IUser&gt; {...} 

//Delete User Based on userID
public removeUser(userId:number):IUser {...}

/**
* These methods deal with Database Calls
*/

//Save User Data in DB
public save(userData:IUser):IUser {...}

//Fetch User Data based on ID
public find(query:any):IUser {...}

//Delete User Based on query
public delete(query:any):IUser {...}

}
```

The problem in the above implementation is that, methods that deals with business logic and related to database calls are coupled together in same class, which violates the **Single Responsible Principle**. 

The same code can be written ensuring the SRP is not violated, by dividing the responsibilities for dealing business logic and database calls separately, as shown in the below instance

```
/**
*  We will apply the SOLID approach for the 
*  previous example and divide the responsibility. 
*
* &#039;S&#039;OLID Approach  
*/

/**
* Class UserService deals with the business logic 
* related to User flow
*/

class UserService {

constructor() {...}

/**
* These methods deal with some business logic
*/

//Add New User
public addUser(userData:IUser):IUser {...}

//Get User Details Based on userID
public getUser(userId:number):IUser {...}

//Get all user details
public fetchAllUsers():Array&lt;IUser&gt; {...} 

//Delete User Based on userID
public removeUser(userId:number):IUser {...}
}

/**
* Class UserRepo deals with the Database Queries/Calls
* of the User flow
*/
class UserRepo {

constructor() {...}

/**
* These methods deal with database queries
*/

//Save User Data in DB
public save(userData:IUser):IUser {...}

//Fetch User Data based on ID
public find(query:any):IUser {...}

//Delete User Based on query
public delete(query:any):IUser {...}

}
```

Here, we are ensuring a specific class solves a specific problem; UserService dealing with business logic and UserRepo dealing with database queries/calls.

- **Open-Closed Principle (OCP)**

This principle speaks about the flexibility nature of the code you write. As the name stands for itself, the principle states that the solution/code you write should always be **Open** for extensions but **Closed** for modifications.

 *Software entities &#8230; should be open for extension, but closed for modification.*

[Wikipedia](https://en.wikipedia.org/wiki/SOLID)

To put it up in simpler words, code/program you write for a problem statement, be it a class, methods or functions, should be designed in such that, to change their behaviour, it is not necessary to change their source code/reprogram. 

If you get additional functionality, we need to add that additional functionality without changing/reprogramming the existing source code.

```
/**
* Simple  Notification System Class Example for 
* violating OCP
*
* STUPID Approach of Programming
*
*/

class NotificationSystem {

 // Method used to send notification
  sendNotification = (content:any,user:any,notificationType:any):void =&gt; {
    
    if( notificationType == &quot;email&quot; ){
      sendMail(content,user); 
    }
    
    if( notificationType == &quot;pushNotification&quot; ){
      sendPushNotification(content,user); 
    }
    
    if( notificationType == &quot;desktopNotification&quot;  ){
      sendDesktopNotification(content,user); 
    }
  
  }

}
```

The major setback with the above approach is that again if a newer way of sending a notification or combined notifying mechanism is needed, then we need to alter the definition of the sendNotification().

This can implemented ensuring the SOLID principle not being violated, as shown below,

```
/**
* Simple Example for Notification System Class  
*
* S'O'LID Approach of Programming
*
*/

class NotificationSystem {

    sendMobileNotification() {...}
    
    sendDesktopNotification() {...} 
    
    sendEmail() {...}
    
    sendEmailwithMobileNotification() {
      this.sendEmail();
      this.sendMobileNotification()
    }
}
```

As you see in the above example, when you needed another requirement where you had to send both email and mobile notification, all I did was adding another function **sendEmailwithMobileNotification()** without changing the implementation of previous existing functions. That&#8217;s how simple it is, making an extension of features.

Now, moving on to next important principle, called as **Liskov Substitution principle**.

- **Liskov Substitution Principle (LSP)**

This principle is the trickiest one. Liskov Substitution Principle was introduced by Barbara Liskov in her paper called &#8220;Data Abstraction&#8221;. 
By now, you already must have known that this principle has to do with the way we implement [Abstraction](https://ohmyscript.com/2020/07/08/example-post-2/).  

Recalling, what is abstraction/data abstraction? In simplest words, hiding certain details and showing essential features.
Example: Water is composed of Hydrogen and Oxygen, but we see is a *liquid matter ([Abstraction](https://ohmyscript.com/2020/07/08/example-post-2/))*

&#8220;Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.&#8221;

[Wikipedia](https://en.wikipedia.org/wiki/SOLID)

According to LSP in the OOP paradigm, child classes should never break the parent class type definition. 
To put it in even simpler bits, all subclass/derived class should be substitutable for their base/parent class. If you use base type, you should be able to use subtypes without breaking anything.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/10/liskov-substition-principle-565x600-1.png?w=283)

```
/**
* Simple hypothetical example that violates  
* Liskov Principle with real-time situation
*
* STUPID Approach
*/

class Car {
  constructor(){...}
  
  public getEngine():IEngine {...}  
  public startEngine():void {...}
  public move():void {...}
  public stopEngine():IEngine {...}
}
/* 
* We are extending class Car to class Cycle
*/
class Cycle extends Car {  
    constuctor(){...}
    public startCycle() {...}
    public stopCycle() {...}  
}
/**
* Since Cycle extends Car; 
* startEngine(), stopEngine() methods are also
* available which is incorrect and inaccurate abstraction
*
* How can we fix it?
*/
```

What we can draw from the **LSP** violation, causes tight coupling and less flexibility to handle changed requirements. Also, one thing that we take away from the above example and principle is that OOP is not only about mapping real-world*** problems to object*s; it is about creating abstractions**.

```
/**
* Simple hypothetical example that follows the 
* Liskov Principle with real-time situation
*
* SO'L'ID approach
*/

class Vehicle {
  constructor(){...}
  
  public move():void {...}
}

class Car extends Vehicle {
  constructor(){...}
  
  public getEngine():IEngine {...}  
  public startEngine():void {...}
  public move():void {...}
  public stopEngine():IEngine {...}

}

/* 
* We are extending class Car to class Cycle
*/
class Cycle extends Car {  
    constructor(){...}
  
    public startCycle() {...}
    public move() {...}   
    public stopCycle() {...}  
}
/**
* Since class Cycle extends Vehicle; 
* move() method is only also available and applicable
* which is precise level of abstraction
*/
```

- **Interface Segregation Principle (ISP)**

This principle deals with the demerits and issues caused when implementing big interfaces.

&#8220;Many client-specific interfaces are better than one general-purpose interface.&#8221;

[Wikipedia](https://en.wikipedia.org/wiki/SOLID)

It states that we should break our interfaces into granular small ones so that they better satisfy the requirements. This is necessary so as to reduce the amount of unused code.

```
/**
*  Simplest Example that violates Interface 
*  Segregation Principle 
*
*  STUPID Approach
*
*  Interface for Shop that sells dress and shoes 
*/

interface ICommodity {
   public updateRate();
   public updateDiscount();

   public addCommodity();
   public deleteCommodity();

   public updateDressColor();
   public updateDressSize();

   public updateSoleType();
   
}
```

Here we see that, one interface ICommodity is created for the items/commodity in shop; which is incorrect.

```
/**
*  Simplest Example that supports Interface 
*  Segregation Principle 
*
*  SOL'I'D Approach
*
*  Separate Interfaces for Shop that sells dress and shoes 
*/

interface ICommodity {
   public updateRate();
   public updateDiscount();
   public addCommodity();
   public deleteCommodity();
}

interface IDress {
   public updateDressColor();
   public updateDressSize();
}

interface IShoe {
   public updateSoleType();
   public updateShoeSize();
}
```

This principle focuses on dividing the set of actions into smaller parts such that Class executes what is required.

- **Dependency Inversion Principle (DIP)**

This principle states that we should depend upon abstractions. Abstractions should not be dependent on the implementation. The implementation of our functionality should be dependent on our abstractions.

One should &#8220;depend upon abstractions, [not] concretions.&#8221;

[Wikipedia](https://en.wikipedia.org/wiki/SOLID)

**Dependency Injection** is very much correlated to another term called as **Inversion of Control**. These two terminologies are can be explained differently in two situations.

- Based on Framework
- Based on Non-Framework ( Generalistic ) 

Based on programming in Framework, Dependency Injection is an application of IoC, i.e., **Inversion of Control**. Technically speaking, **Inversion of Control** is the programming principle, that says invert the control of the program flow. 

To put it up in simpler words, the control of a program is inverted, i.e., instead of programmer controlling the flow of the program. **IoC** is inbuilt with the framework and is a factor that differentiates a framework and library. **Spring Boot** is the best example.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/10/gr8conf-2015-spring-boot-and-groovy-what-more-do-you-need-24-638.jpg?w=638)Voila! Spring Boot developers! Inversion of Control made sense!! Didn&#8217;t it?

Note: For all Spring Boot developers, just like how annotation take control over your program flow 

Based on the general perspective, we can define IoC as the principle that ensures, &#8220;An object does not create other objects on which they rely to do their work&#8221;.
Similarly, based on the general perspective, **DIP** is a subset principle to **IoC**, that states define interfaces to make it easy to pass in the implementations.

```
/**
* Simple Example for DIP
*
* STUPID Approach
*/

class Logger {
   debug(){...}

   info(){...}
}

class User {
  public log: Logger;

  constructor(private log: Logger){...} // =&gt;Mentioning Type Logger Class

  someBusinessLogic(){...} //uses that this.log
}

/**
* Simple Example for DIP
*
* SOLI&#039;D&#039; Approach
*/

interface ILogger {
  debug();
  info();
  error();
}

class Logger implements ILogger{
   debug(){...}

   info(){...}
}

class User {
 public log: ILogger;

 constructor(private log: ILogger){...}
        //=&gt;Mentioning Type Logger Interface

  someBusinessLogic(){...} //uses that this.log
}
```

If you look into the above examples, the Object creation is dependent on the interface and not on the class.

These are the OOPs Paradigm Programming Principle that makes your code more readable, maintainable and clean.

As a developer, we should avoid trying to write dirty or STUPID code. These are the basic things, we need to keep in mind during the development. 

**SOLID** is no panacea or remedy for all the problems. Some problems in Computer Science can be solved using basic engineering techniques. SOLID is one such technique that helps us maintain healthy codebase and clean software. The benefits of these principles are not immediately apparent but they become noticed and visible over time and during the maintenance phase of the software.

As a developer, it is my suggestion that every time you design or program a solution, ask yourself &#8220;Am I violating the SOLID principles?&#8221;, if your answer is YES, too long, then you should know that you are doing it wrong.
One thing that I can assure is, these principles are always going to help us write better code.

If you like the article, hit the like button, share the article and subscribe to the blog. If you want me to write an article on specific domain/technology I am provisioned in, feel free to drop a mail at shravan@ohmyscript.com

Stay tuned for my next article.

That's all for now. Thank you for reading.

Signing off until next time.
Happy Learning.