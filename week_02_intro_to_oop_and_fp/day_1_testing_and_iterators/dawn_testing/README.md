# Objects
## Methods & Context


* Objects
	* Review: key vals
		* exercises 	
	* keys as properties
	* dot syntax
* Methods
	* functions as values
	* examples/exercises
	* context
	
## Objects
### Review

Self review, please do the following in the browser console or in a Node REPL.

1.) Create  a varaible `friend` that references an object with a `firstName` and `lastName`.

2.) Access the `firstName` of the friend above.

3.) What are some ways to check if a `key` is not in `friend`?

4.) Add an `age` to the `friend` object, and change the `firstName`.

**[Answers](/week_02_funcs_objs_n_protos/day_1_funcs_methods/dawn_methods/review_answers.js)** are in the `review_answers.js` file.

### Keys As Properties

One interpertation of keys in an object is to view them as properties or attributes describing the object. Where have we seen these properties before?

```
var friend = { 
				firstName: "Jane", 
				lastName: "Doe" 
			};

// firstName is property
console.log(friend['firstName']);
```

Technically speaking, an `Array` is also a **type** of object, and it has properties too.


```
var nums = [5,4,3,2,1];

// nums.length is a property describing the length

```

We will talk later about how to actually create different **types** of objects, but for now we just want to note how there are different **types** and their properties.

### Dot Syntax

You can access different properties of an object using one of two syntaxes you might have seen already.


```
var friend = { 
				firstName: "Jane", 
				lastName: "Doe" 
			};

// firstName is property
console.log(friend['firstName']);

```

The above is an example of the **square brackets notation** and it's the more general way to access keys of an object. There is also a **dot** syntax for convenience.


```
var friend = { 
				firstName: "Jane", 
				lastName: "Doe" 
			};

// firstName is property
console.log(friend.firstName);

```

The notation you choose to use is up to you, and depends on the amount of generality you need for solving a particular problem.


## Methods

Objects are currently taken to mean a collection of key value pairs, which might be simplified to just say **a collection of data**. The following example falls into this simplification quite nicely, a friend with a first and last name, **data**.


```
var friend = { 
				firstName: "Jane", 
				lastName: "Doe" 
			};

// firstName is property
console.log(friend.firstName);

```

Lets make a function to change our friends first name.


```

var changeFirstName = function (person, newName) {
	person.firstName = newName;
}; 

changeFirstName(friend, "Janet");

console.log(friend.firstName);
// logs "Janet"

```

**Exercise**

Make a function to change a persons `lastName`.


-----------


What starts to suck about this pattern is passing in `friend` each time. What we are seeing here is that objects don't just have **properties** that are important. They also have **behavior**.

Luckily, JavaScript let's us treat functions as values, and we can add them to our object. It also let's us do a whole lot more, but lets see a simple example of this.


```
var pet = {name: "Balto", age: 2};

pet.speak = function () {
	return "ruFF"
};

pet.speak();
// returns "ruFF"
```

In this example `speak` is a meathod on the `pet` named `spot`.

### Exercies

1. What are the `properties` of the `pet` from the example above?
2. Make a `pigeon` with the name of `smokey`. Give `smokey` a method to `fly` that returns `"Whoosh!"`.
3. Make a `dog` named `Bolt` and an age of `1`. Give `Bolt` a method to `run` that returns `"WROOOM!"`.
4. Make a `superHero` with a `name` and `city` of your choice. Give your superhero a super-power method called whatever you'd like that returns an `onomatopoeia`.


### Context

All the methods we made in our last example were doing some really fun things, but they aren't really interacting with the **data** in an object. We could make a method that did using an example like the following:


```
var person = {
	firstName: "Jane",
	lastName: "Doe"
};

person.fullName = function () {
	// we access the first and last name of person
	person.lastName + ", " person.firstName;
};

console.log(person.fullName());
```

This example prints the persons full name to the console.

* How is it able to do this? 


Javascript gives each function a context which references the object it belongs to. The keyword for accessing the context is called `this`, and we can use it to refactor our `person.fullName` from above.


```

person.fullName = function () {
	/*
		we access the first and last name of person
			using the keyword this
	*/
	this.lastName + ", " this.firstName;
};

console.log(person.fullName());
```

### Exercises

1. Make a `pet` with some name, and a method `speak` that returns `"hello I am SOME_NAME"` using the `this` keyword to access the name of the pet.
2. Give your pet a property called `dirty` that is `true`. Give your pet a method called `wash` that sets `dirty` to `false` using `this`. 
3. Give your pet a property called `hungry` that is `true`. Give your pet a method called `feed` that sets `hungry` to `false` using `this`.
4. Give your pet a property called `awake` that is `true`, and a method called `rest` that sets `awake` to `false`.
5. Give your pet a method `wake` that sets `awake` to `true`.


