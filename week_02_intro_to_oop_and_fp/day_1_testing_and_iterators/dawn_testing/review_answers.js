console.log(new Array(50).join("*"));
/* 1.) Create  a varaible `friend` 
        that references an object 
        with a `firstName` and 
        `lastName`.
*/

var friend = {
            firstName: "Jane",
            lastName: "Doe"
          };
console.log("\n1. My friend is the following:")
console.dir(friend);

/* 2.) Access the `firstName` of 
        the friend above.
*/

console.log("\n2. Friend has firstName: %s", friend['firstName']);
console.log("\t using `friend['firstName']`");

/* 3.) What are some ways to check
         if a `key` isn't in `friend`?
*/

console.log("3. Using friend['someKey'] \n\t returns undefined");
console.log("3 cont.) 'someKey' in friend \n\t returns false")

/* 4.) Add an `age` to the `friend`
       object, and change the 
       `firstName`.
*/

console.log("4. Using friend['age'] = someValue.")
friend['age'] = 21;

console.log("\n")
console.log(new Array(50).join("*"));