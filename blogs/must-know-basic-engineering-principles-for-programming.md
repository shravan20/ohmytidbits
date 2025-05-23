---
title: "Must-Know: Basic Engineering Principles for Programming"
date: 2020-09-03
slug: "must-know-basic-engineering-principles-for-programming"
excerpt: "<p>Hi everyone! This article would be covering all the basic Engineering Programming Principles to become a better developer or to follow and maintain clean code. One very important thing that we alwa"
categories: ["developer", "development", "javascript", "object-oriented-paradigm", "programming", "technical"]
author: "shravan20"
url: "http://ohmyscript.com/2020/09/03/must-know-basic-engineering-principles-for-programming/"
---

# Must-Know: Basic Engineering Principles for Programming

Hi everyone! This article would be covering all the basic Engineering Programming Principles to become a better developer or to follow and maintain clean code.

One very important thing that we always need to constantly remind ourselves, is that the code we write is consumed by another person/developer as well, going ahead. And, please don't make another person's life hard, thereby, it is very important to write a code that is easy to understand, neat enough for a man not to go crazy, and not a messed up a place for another person to deal with.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/08/quote-excusing-bad-programming-is-a-shooting-offence-no-matter-what-the-circumstances-linus-torvalds-91-28-84.jpg?w=831)

Most programmers and developers are constantly in quench to improve themself, by learning a newer stack or learning newer technology, tools, and mastering them. But there are some fundamental norms, we often overlook while programming or solving and dealing with a problem statement. 

What makes you a good programmer? 

If you ask 10 developers the same question, you will definitely get 10 different answers. Although the answers are put out in different words, they would most probably convey the same idea. For a year now, after being a developer professionally, there have been many things I have learned which I wish would have been quite handy during my Under-Graduate period to maintain a large codebase.

***PS: Projects built during my UG period sucks.* Fails all the principle I am explaining here**   

Speaking from my personal experience and the problems that I have been through, I believe being a good programmer is a skill of understanding a certain problem and coming up with the most feasible solution, not for the time being but also serving the best in the longer run. I believe along with staying updated to the newer technologies, these are some fundamental principles that all developers should adhere to:

## 1. Don&#8217;t Replicate Yourself (DRY Principle)

As the name suggests, the **‘Don't Replicate yourself' Principle**, otherwise called a **DRY Principle**, simply suggests to us, not to replicate the code across the project or codebase.

When writing code, make sure you avoid duplication of the code. This principle simply suggests us, "***Write it Once, Use it Twice"***.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/08/dry-dont-repeat-yourself-solid-design-principle-2.png?w=400)Don&#8217;t Repeat Yourself

In the longer run, duplicated codes will be too difficult to manage and maintain, as newer requirements will arise.

A simple example of the same is shown below, where the non-DRY approach is something you can at least imagine if the chocolates are less than 5. As its size/number of chocolate increases, it would be too hard to manage such code with non-DRY approach.

```
let costofChocolate = &#91;10,12,15,20];

/**
** Non - DRY Approach
** Suppose you need to add ₹ 2 as tax for each
**/

costofChocolates&#91;0] = costofChocolate&#91;0] + 2;
costofChocolates&#91;1] = costofChocolate&#91;0] + 2;
costofChocolates&#91;2] = costofChocolate&#91;0] + 2;
costofChocolates&#91;3] = costofChocolate&#91;0] + 2;

/**
** DRY Approach
** Suppose you need to add ₹ 2 as tax for each
**/

function addTax(chocolatesCost,taxAmount) {
   for(let i =0; i&lt;chocolatesCost.length;i++){
      chocolatesCost&#91;i]=chocolatesCost&#91;i]+taxAmount;
   }
  return chocolatesCost
}

addTax(costofChocolate, 2);
```

Apart from avoiding duplication, this makes your code more readable and also allows particular functionality available for re-using it in any other component/part in your project. And the biggest pro of DRY is maintainability. If at all there is a bug that you need to fix, patch it in a single place, not in multiple spots.

***Note:***

- Sometimes, we need to be quite careful about following the ***DRY*** Principle. Because at times, a pair of code snippets might look similar but with a very fine line of difference
- Avoid premature ***DRY*** optimization.

## 2. The Law of Demeter (LoD)

***The Law of Demeter*** is a design principle, which otherwise is also called the ***Principle of least Knowledge***. This law originally states that

For all classes C, and for all methods M attached to C, all objects to which M sends a message must be

M's argument objects, including the self object or

The instance variable objects of C

(Object created by M, or by functions or methods which M calls, and objects in global variables are considered as arguments of M.)

In the initial, when Simula came into the market, the first language having features of Object Oriented Principles; objects were simply used as a medium transfer data from one method to the other.

The basic idea behind "Objects" was to transfer data to each other, that is each of them communicated. Now if you read the original law, it simply implies the below general things:

- Objects should only deal with their direct neighbors (neighbors -&gt; method or data)
- Objects should never be dependent on another neighbor
- Objects should only expose the information used by other entities

Let me explain the simple instance;

```
/**
** Simple Example of Law of Demeter in JavaScript
** 
** Assume an object userObj of the class User
** 
**/
const userObj = new User(); 

userObj.getUsers().filterAge();  // Breaches the Law of Demeter

let userList = userObj.getUsers()  // Breaches the Law of Demeter
let filterUsers = userObj.filterAge(); // Does not breach the Law of Demeter

/*
** Even while structuring /  formatting the data
** 
** User's designation is to be accessed from the variable
*/

user.designation._id // Breaches
user.designation.designationName // Breaches

user.designationId // Does not breach 
user.designationName // Does not breach
```

This law ensures that the systems have a decoupled system design.

## 3. KISS (Keep It Simple, Stupid)

I strongly believe that ***KISS*** is more meaningful when it is an acronym for "***Keep It Simple &amp; Smart***".

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/09/kiss-sleeping-man.gif?w=520)Hahaha!!! 
Keep It Simple, Stupid is a great life hack!!!

As the quote goes,

&#8220;Everything should be made as simple as possible not simpler&#8221;

Albert Einstein

The code you write or the design you create as a programmer should be simplified. It should be at its maximum simplicity.
Sometimes we come across complicated problem statements or requirements. Most of the time, the solution is quite easy and we are not aware of how to deal with it.

Learn the problem statement before you start solving it. Often the solutions are available but we fail to plan the way about how to write the solution; and once we get the solution, hardly care to check if that was THE BEST, OPTIMUM WAY to solve it.

Most minimalistic example, we always fail to follow as we start as a developer,

```
/**
** Simple Example of Short Circuit Evaluation in JavaScript
** 
** This is first thing we learn in C, C++ or Java when we learn 
** expressions & operators, yet fail to apply this.
** 
**
** Assuming you want to console a variable; only if the variable username  
** is defined and not null  
** 
**/

// Breaching the KISS
if(username == undefined || username == null || username == ''){
          console.log('Error');
}
else {
     console.log(username);
}

//Does not reach the KISS Principle
console.log( username || 'Error' );
```

Even the Node's Asynchronous Operation was the best example of the KISS principle. Wondering how? Initially, we used callbacks to deal with asynchronous functions. To make it easier, Node developers jumped to promises. To have it even more simplified, Node developers finally came up with async / await. Made sense? Of course, one's who worked in Javascript frameworks or libraries must have understood this ( Pain behind dealing with Callbacks ) 😭 and also must have understood how important the KISS principle is ( How easy life was after Async/Await ) 😎

## 4. YAGNI (You Ain&#8217;t Gonna Need It)

As developers, we try to think way too ahead and quite too much into the future of the project. Trying to code some extra features based on assumption, "**We might need it later**" or "**We will eventually need them**&#8220;.

And the answer is "***YAGNI — You Ain't Gonna Need it***"; design and develop what is needed and avoid the unwanted or simply foreseen requirements and features.

Every developer must have been through this phase, I, myself have committed this mistake. I had developed other extra features that weren't asked, assuming those might be useful in the future, but in the end, the Final System which the client wanted was totally different from what I had foreseen.

Why ***YAGNI***?
Chances are that you won't be needing it at all in the future and you will be wasting time. If you are working in an Agile or Incremental Model of Software Development, you do not get the complete requirements in one-go. Avoid adding bloats to your project.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/09/19-figure4-1-1.png?w=646)Build what&#8217;s needed! Don&#8217;t be a wizard 

Simply put, Live in the present, not in the future; ensuring you are prepared for the future.
I would just give a simple example, might sound a little vague, but you can relate.

```
/**
** For the first iteration requirement was to design a simple React Web - ** App to manage and view meetings 
**  
** A backend developer, builds the requirements and then spends adequate
** amount of time on creating a socket for adding real-time notification 
** based on his assumptions that it would be needed for Mobile App in 
** near future.
**  
** In the second iteration, they finalize that project is confined to only
** as Web-App and there is no scope for Mobile App for this at all. 
**
**
** What's the whole point of investing so much time and implementing it 
** when it was not asked in the first place?
** 
**/
```

## 5. SoC ( Separation of Concern )

Major and one of the most fundamental principles that we always fail to achieve as a developer or as a human is ***Separation of Concern***.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/09/soc.jpg?w=341)Look at the how messed up this looks? 
Imagine how your code base would look, if you don&#8217;t separate them by their concerns

As developers, we often make a simple mistake of bundling too many things into a single class/function. We design functionalities in a way, where we want to "do all the things" with one function, class, or object. This approach of designing a solution for a problem is incorrect and going to be quite tedious to maintain in the longer run.

To Do a Great Big Thing, Break It Into Tiny Things

Anonymous

Always maintain a High Level of Abstraction; the simplest example would be MVP design(Model View Presenter Design); where the design is divided into three parts model deals with the data, another Presenter which deals with the user interface, or what user views.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/09/pngtree-hand-drawn-cartoon-doctor-nurse-visiting-patient-element-design-png-image_581134.jpg?w=640)Separation of Concern : The Nurse and The Doctor 

Like the above example, the responsibilities of the doctor and nurse are distinctive, separate, and defined and hence are easier to manage and maintain for each individual.

Another simple example would as follows,

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/09/carbon.png?w=1024)

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/09/carbon-1.png?w=822)

The above example shows how we have separated the style and HTML content; basically externalizing the CSS file.

## 6. Boy-Scout Rule ( Refactoring )

If you have been part of the School Boy Scouts, you must be aware of the simple rule that states, "***Leave the campground cleaner than you found it***".

This particular rule can be applied to Software Development as well. When implementing new features or working on legacy code, one thing we fail to ensure is how it affects the existing quality of the code.

We do not look for the technical debt in the existing code, instead end up building new features on top of it. This will eventually end up toppling the complete system and breaking the code at some point, which is one thing you definitely do not want to happen.

***Refactoring*** is the key. Refactoring simply means Changing the structure without changing its implementation or end result.

Simplest Example:

***Headphones*** were refactored to ***Earphones***: Easy to carry and Less cost

Similarly, we should refactor our code base for better understanding, readability, and easy maintenance and also maybe to improve the efficiency and optimize the execution.

```
/**
** Before Refactoring
**/

function getAddress(latitude, longitude){}
function getCountry(latitude, longitude){}
function getCity(latitude, longitude){}

/**
** After Refactoring :: 
** Better readability and maintain function-arity (&lt;3-4 No. of Arguments)
**/
function getAddress(coordinates){}
function getCountry(coordinates){}
function getCity(coordinates){}
```

***Note : ***
Avoid Unwanted Optimization / Refactoring

## 7. TDA ( Tell Don&#8217;t Ask )

***Tell Don't Ask*** is a basic principle that reminds people that Object-Orientation is about encapsulating the data with methods that deal with data. Confusing?

When you want to access data from a class, never access it using the object, instead of through a method asking for that data, in a simpler way a getter/setter as you all have heard of.

***TDA*** suggests that it is always better to perform some operation than directly accessing the data.

A simple example of TDA would be as follows,

```
/**
** Non TDA Approach
**/

class User {
   
constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const userObj = new User('OhMyScript', '22');
console.log(userObj.name); // Breaches TDA
console.log(userObj.age); // Breaches TDA

/**
** TDA Approach
**/

class User {
   
constructor(name, age) {
    this.name = name;
    this.age = age;
  }

getName(){
   return this.name;
}

getAge(){
   return this.age;
}
}

const userObj = new User('OhMyScript', '22');

console.log(userObj.getName()); // Does not breach TDA
console.log(userObj.getAge()); // Does not breach TDA
```

## 8. P3 ( P-Cube Principle )

This is not a programming principle but a general developer principle that I firmly believe in and the only thing that helps you be proficient in all the above principles. ***Practice-Practice-Practice*** makes a man perfect.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/09/il_340x270.1819894240_1lpq.jpg?w=340)With experience, your standards will just get better and better

These principles are not something you can learn and apply on. It is very much similar to what we hear about old wine.

These were some of the most important basic principles that play a big role in your journey as a developer. I am pretty sure there might many more principles I might have missed upon.

Those who know about SOLID principles, please stay tuned for the next article. SOLID principles are one of the very important design principles when it comes to Object-Oriented Programming. I have decided to dedicate a separate article for that.

If you like the article, hit the like button, share the article and subscribe to the blog. If you want me to write an article on specific domain/technology I am provisioned in, feel free to drop a mail at shravan@ohmyscript.com

Stay tuned for my next article on ***the SOLID Programming Principles***.

That's all for now. Thank you for reading.

Signing off until next time.
Happy Learning.