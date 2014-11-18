# JS Control Flow
## Cond, Loop, Iterator, and all that


| Objectives |
| :---- |
| 	Identify and discuss boolean operators and truthyness |
| 	Apply different boolean operators with objects in conditional statements |
|	Discuss and apply loops and iterators using conditional statements |


### Agenda

* Javascript Control Flow
  * Logical Operators
  	* `&&`, `||`, and `!`
  	* comparisons
  	* truthy and falsey 	
  * Conditionals (if/else)
  	* short circuit 
  	* Ternary operator
  * For iterator
  	* What is iterating? Compute with for loops: factorial, repeating 50 times.
  	* `for` 
  	* `for ... in`
  * While loop
  	* generic condition
  * Switch case
  * Refactoring Conds
  
------

### Self Assessment

* **Fiz-Buzz**
	*  For each number from `1` to `100`  print the following: `fizz` if it is a multiple of `3`, `buzz` if it is a multiple of `5`, and `fizzbuzz` it is a multiple of both.
	
-----

### Logical Operators

There are two types of binary operators that work with booleans, (a binary operator just requires two arguments.)

* **AND**, denoted `&&` 
* **OR**, denoted `||`


There is a third unary operatory, (a unary operator that requirs just one argument).

* **NOT**, denoted `!`

[MDN Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

Quick Notes:

* The `&&` operator requires both left and right values to be `true` to return `true`, i.e.
	
	````
		true && true //=> true
	````
and any other combination is false.

* The `||` operator requires just one of the left or right values to be `true` to return true.
	* Only `false || false` will return `false`
	
* The `!` takes a value and returns the opposite boolean value, i.e. ` !(true) //=> false`.
	

### Comparisons

To compare two values in Javascript for equality testing we use `===`, which will check the sameness of the thing on the left with the thing on the right. Note sameness is a very fuzzy word, and thus, `===` is also very fuzzy concept, which should be approached with caution in every language. 

Here are some cases when equality testing seems reasonable

```javascript
	
	true === true 
	//=> true
	false === true
	//=> false
	
	1 === 1
	//=> true
	1 === 2
	//=> false
	
	"hello" === "hello"
	//=> false
	
```


But here are some cases when it does not. 


```javascript
	
	{} === {}
	//=> false
	[] === []
	//=> false
	
	
```


**Explanation**

The second set of examples fail because both **object literals** and **arrays** are objects, and not just values like strings, numbers, and booleans. Objects can be complex collections of values in memory that we  are referring to in a program, and so, we only reference each object by an id to simply things. However, that means when we go to compare the two objects we don't care if they look like similar collections. We only compare their respective ids when checking for equality, and each `{}` or `[]` represents a new object with it's own unique id.

Arrays and objects are called **reference** types for the above reasons, so be careful with using them too intuitively.


#### Truthy

In a language some values can be taken to be `true` or `false`, and we can check this using the `!` operator

```javascript

	!!(1)
	//=> true
	
	!!(0)
	//=> false
	
	!!(-1)
	//=> true
	
	!!([])
	//=> true
	
	!!({})
	//=> true
	
	!!(null)
	//=> false
	
	!!('')
	//=> false
```


### Conditionals

Conditionals are a way of essentially skipping over a block of code if it does not pass boolean expression.


* `if(expr) { code }`, run code block if `expr` is `true`

```javascript

var num = 22;

if (num % 2  === 0) {
	console.log("is even");
}

```

* `if (expr) { ... } else { ... }`
	*  you can specifiy the `else` block to run if `expr` is `false`
* `if (expr1) { ... } else if (expr2) { ... } ... else { ... }`
	*  if `expr1` is false then each `else if` expression will be evaluated until one is `true`, and an `else` will be run otherwise.
	


```javascript

var expr1 = true;
var expr2 = true;


if (expr1) {
	console.log("expr1 is true!");
} else if (expr2){
	console.log("expr2 is true!");
}


```


The above example will print `"expr1 is true"` and the `else if` is never reached. If `expr1` is `false` it would only print `"expr2 is true"`


### Exercises


#### Warming up

1. Use conditionals to check if a hardcoded number is `odd` or `even`, and then `console.log` the number is `odd` or `even` with the numbers value.

	```
	var num = ;// write a number here
	
	// write your conditions here
	
	```

2. Use conditionals to check if a hardcoded number is divisible by `2` or  `3` and then `console.log` that the number is divisible by two or three.

	```
	var num = ;// write a number here
	
	// write your conditions here
	
	```

3. Use conditionals to check if a hardcoded `quantity` is `1` or greater than one. If the `quantity`  is one or greater `console.log` either `1 pet` or `quantity + " pets"` respectively.

	```
	var quantity = ;// write a number here
	
	// write your conditions here
	
	```
#### Intermediate

4. There is an event where guests will be sitting in three sections based on their names: "left", "middle", and "right". If they have a premium ticket they can sit in first `3` rows in their section, otherwise they can take any seat behind row 3. Using hardcoded variables for `name` and `ticketType` print out appropriate seating instructions.
5. There is an event with ticket prices that are `$50`, `$65`, `$85` for standard, premier, and premier plus (for drinks) seating. Seniors, veterans, and students receive a `$10` discount while standard patrons  receive no discount. Based on hardcoded variables for `ticketType` and `discountType`, print out a patrons `ticketPrice`.


#### Ternary Operators

Another way to write a very shorthand conditional is using a **ternary operator**, `expr1 ? expr2 : expr3 `. 

```
true ? console.log("it is true"): console.log("it is false");
//=>  "it is false"
false ? console.log("it si true"): console.log("it is false");
//=> "it is false"
```

### Iterating

It is a way of incrementally repeating a task. Iterating is a way of describing procedures like 

```
print "hello world" 50 times
``` 
It is also a way of describing 

```
print each item in a shopping list
```

It can also be a way of solving problems like

```
how would I print all vegetables in a shoppping list
```


Typically iteration has three or four main parts 

* an initial state
* a condition for repeating
* process to be run for each repetition 
* a state change for proceeding to the next step

It isn't surprising that the primary means of iterating in most languages is called a `for` loop, which has the following structure

```

for ( intial state; check condition; change state) {
	run this code for before changing state
}

```


or a  more concrete example


```

var friends = ["larry", "moe", "curly"];

for (var index = 0; index < friends.length; index = index + 1) {
	console.log(friends[index]))
}

```

#### Exercises


1. Iterate through a shopping list and print each item in a shopping list.

	```
		var shoppingList = ["apples", "oranges", "carrots"];
		
		// iterate here
	```

2. Iterate through a list of shopping lists and print each item in each list.

	```
		var shoppingLists = [
								["apples", "oranges", "carrots"],
								["ham", "turkey", "cheese"],
								["fruits", "vegetables", "meat"]
							];
		// iterate here
	```


3. Word counting:
	a. Count the number of space separated words in a string (Hint: do this with and without a `for` loop.).
	b. Count the number of words that in a string that have the letter `a` in them.


4. Capitalize the first letter in every word in a string, i.e
	
	```
	"hello world" => "Hello World"	
	
	```

5. Find the largest number in a hardcoded array using a for loop. Find the smallest number in a hardcoded array.


6. You have a list of numbers below that somehow got shuffled and one is missing. Luckily you know that the numbers were from `1 to 100`. Find the missing number. 

	```
	var numbers = [56, 74, 31, 89, 8, 
					22, 5, 19, 28, 100,
					82, 72, 39, 25, 90, 
					1, 97, 83, 58, 38, 
					57, 71, 70, 7, 3, 
					12, 48, 45, 43, 84, 
					68, 49, 37, 41, 92, 
					96, 6, 66, 95, 15, 
					67, 2, 59, 4, 91, 
					44, 50, 17, 30, 88, 
					34, 55, 64, 9, 27, 
					73, 60, 32, 81, 10, 
					53, 61, 63, 51, 65, 
					36, 26, 99, 76, 47, 
					21, 14, 16, 40, 79, 
					75, 85, 42, 86, 18, 
					23, 24, 46, 69, 29, 
					77, 20, 54, 80, 87, 
					13, 94, 98, 93, 62, 
					35, 33, 11, 52];
					
					
					
	```
	
7. Find the `sum` of the values in an array and the `average`. 
8. Find the average of only the odd numbers in an array.
9. Write a loop that creates an array of `100` random integers (not decimal numbers).
10. Find the numbers in common in two different lists of numbers.

