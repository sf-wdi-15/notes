#Javascript Constructors
> By the end of this lecture, students will understand constructors in a javascript. A way of create objects that share the same methods and attributes

##Constructors
There is a lot of different ways to create objects. 

**Object Literal Notation**

```
var anil = {}
var anil = new Object()

anil.firstName = "anil"
anil.lastName = "bridgpal"
anil.role = "instructor"

```

Object Literal notation, is uses `var` and `:`

**Constructor Notation**

We can use a constructor function to create multiple objects that share the same properties.

```
require('locus')
var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return ("Hello" + firstName + lastName)
  }
}

var anil = new Person("anil", "bridgpal");

console.log(anil.firstName);
console.log(anil.fullName());
eval(locus);
```

Using the `new` keyword, Javascript does a few thing.
 * Creates a new object
 * Sets the `constructor` property to the object Person
 You can use x.constructor to get a direct reference to the object, but it's an anonymous function so there's no way of getting its name.



##Pitfalls
When using the constructor

Don't try to call a constructor without the `new` keyword.

Person("delmer")

`firstName` now exists

====
`return` statements in a constructor does not do anything


## A Prototype In JS

In javascript we don't have classes. We have prototypes

  function Person(name){
    this.name = name
  }
  
  Person.prototype.greet = function(){
    return "Hello, my name is " + this.name;
  };

* Why do we use the prototype?
* What is a `hasOwnProperty`?
* What is a `prototypeProperty`?
* How do we create a new `Person`?


### Static Methods and Attributes

Here is a static attribute

```
  function Person(name){
    this.name = name
    Person.all.push(name);
  }

  Person.all = [];

  Person.prototype.greet = function(){
    return "Hello, my name is " + this.name;
  };

```

Here is a static method

```
  function Person(name){
    this.name = name
    Person.all.push(name);
  }

  Person.all = [];
  Person.count = function(){
    return Person.all.length;
  };
  
  Person.prototype.greet = function(){
    return "Hello, my name is " + this.name;
  };

```
