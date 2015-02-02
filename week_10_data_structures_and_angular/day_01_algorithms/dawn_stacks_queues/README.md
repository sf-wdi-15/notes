# Data structures and algorithms + CS essential concepts

### What is the goal of this monstrous readme?

- Learn the concepts behind data structures and algorithms
- Learn about big O and see some examples of algorithms and big O
- Get to a point where you can understand the data structure or algorithm and start thinking how to implement them in your language of choice
- Prepare you for interview questions relating to data structures, algorithmic efficiency and optimization
- Get you excited and interested about a really cool part of computer science! And if not....understand just why companies ask questions about this stuff.
- Understand more about how computers work and what goes on behind the scenes, especially with memory

Before we start examining data structures and algorithms, we need to understand a fundamental concept of just how we measure the efficiency of these data structures and algorithms. It would be a shame if we knew what the algorithms and data structures did, but had no concept of their performance and efficiency. 

# Algorithmic Complexity: Big O

## Asymptotic Notation

Often in software engineering, we need to choose between algorithms and data structures which are suited to different tasks.  We need to analyze our own tasks, and the data we will be using, and make informed decisions about what tools to use.  Sometimes one tool is better in every way than another, but more often we have to sacrifice memory use for computation speed, or sacrifice speed of deletions to increase speed of insertions, and so on.

So What does it mean for an algorithm to be efficient? We can't measure in terms of seconds, because hardware and software are different across all machines. One program may run slower than another because of different software or because one machine is older than other - it's like comparing apples and oranges.

So how do we compare 2 algorithms regardless of hardware and software? We measure the asymptotic complexity of a program and a notation called big O. You can see the mathematical proof [here](http://en.wikipedia.org/wiki/Big_O_notation).

What this basically means is that big O measures how fast a program's runtime grows asymptotically - as the size of the inputs increase towards infinity, how does the runtime of your program grow?

Imagine counting the letters of a string and going one by one - This algorithm would run at a linear time, for each letter n you count n times, this is also known as O(n). The time to traverse a string is proportional to the number of characters.

Say O(n) is not fast enough? What if you already stored the length and then tried to find it again? You could run 1 calculation to find the length. This program would run equally fast on a 2 character string or a 1000 character string. Accessing a variable is an asymptotically constant time operation or O(1). The runtime does not change as the size of the inputs grow.

### Why do we care?

First, it is important that the algorithms used in our applications will behave well as the amount of data our application is operating on increases.  For instance, in the absence of indexing, a database feature , the ActiveRecord code `User.where(name: "Bob")` will take `O(n)` time.  This means that if the number of users in our database doubles, it will take twice as long to find Bob.  With indexing, this will take `O(log(n))` time, meaning that the amount of time used to find Bob will double if the number of users in our database is __squared__.  This is the difference between the app collapsing into a slow and unresponsive grave when the number of users gets to thousands and the app continuing calmly to a hundred thousand or a million users.

Second, you will get these sorts of questions in interviews.

### Common Algorithmic Decisions:
* To Index or not to Index? (tree vs list)
* Should this be a hash or an array?
* Should some data be cached?
* What should we optimize?
* How should we write our SQL/ActiveRecord queries?

### A visualization of Big O

![big O](http://www.daveperrett.com/images/articles/2010-12-07-comp-sci-101-big-o-notation/Time_Complexity.png)

### What this looks like numerically

|   Big O	| Operations for 10 "elements"  	| Operations for 100 "elements"  	|
|---	|---	|---	|
|  O(1) 	|  1 	| 1  	|
|  O(log n)	| 3 | 	7 	|
|   O(n)	| 10 |	100 |
| O(n log n) |	30 |	700 |
| O(n^2)	|100	|10000|
| O(2^n)	|1024	|2^100 (1.2676506e+30)|
| O(n!)	|3628800	|100! (9.332622e+157)	|

### Some Complexity Classes:
* O(1) - Constant time
   * Get the first value of a list
   * Random sample from a list
   
* O(log n) - Divide and Conquer searches
   * Typical of algorithms that divide the input, then look at one of the sections
   * Searching sorted data

* O(n) - Examples:
   * Sum an array
   * Find the max of an unsorted array
   * Traversal of a list (a linked list or an array) with n elements;

* O(n log n) - Divide and pick a section for every piece of input
   * Sorting with quicksort, merge sort, or another  reasonably fast sort.

* O(n^2) - Examples:
	* Finding duplicates in an unsorted list of n elements 	(implemented with two nested loops).
   * Insertion Sort
   * Selection Sort
   * Bubble Sort
   
* O(2^n) - One new piece of data doubles the work is 2^n.
  * Naive Fibonacci

* O(n!) - List all combinations of a set, every possible subset.  Impossibly slow and hardly ever needed.
  * Naive traveling salesman

## Data Structures

### What is a data structure?

A data structure is a way to store and organize data in a computer, so that it can be used efficiently. The key word here is "efficiently". At the end of the day, we are only interested in data structures that are efficient (we will discuss how we measure efficiency later). 

With the definition out of the way, let's think about a data structure we have used since the beginning of our coding journey. How about an Array? An array is a very simple data structure, but what does it do well? What does it not do well? Start here [http://stackoverflow.com/questions/8423493/what-is-the-performance-of-objects-arrays-in-javascript-specifically-for-googl](http://stackoverflow.com/questions/8423493/what-is-the-performance-of-objects-arrays-in-javascript-specifically-for-googl).

### How should you decide which DS to use? 

Some questions you have to ask and decisions you have to make are:

- What needs to be stored?
- What are the cost of operations?
- What is the potential memory usage?
- What is the ease of implementation (not always the best question...)?

## Some common data structures 

Once again, the most important takeaway you can get from this document is an understand of just __what__ these data structures are. This is called ADT or Abstract Data Structure. When learning about a data structure, the more important thing to remember is that you want to strive to gain an understanding of just __WHAT__ it is before you even think about how to implement one. The descriptions of the following data structures will focus mostly on the definition, application and value. The implementation will be left up to you! Let's start with one of the simplest data structures - linked lists

### Linked Lists

A linked list is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of a data and a reference (in other words, a link) to the next node in the sequence

#### Singly Linked List

n a singly linked list each node in the list stores the contents of the node and a pointer or reference to the next node in the list.

![http://www.lisha.ufsc.br/teaching/sce/ine6511-2003-2/work/gp/lists_files/image001.gif](http://www.lisha.ufsc.br/teaching/sce/ine6511-2003-2/work/gp/lists_files/image001.gif)

#### Doubly Linked List

A doubly-linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes.

![https://www.cs.auckland.ac.nz/~jmor159/PLDS210/fig/dllist.gif](https://www.cs.auckland.ac.nz/~jmor159/PLDS210/fig/dllist.gif)

### Stacks

Stack - both insertion and removal happen from same end we call this a LIFO (last-in-first-out) structure

![http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png)

You can think of a stack simply as some items stacked on top of each other just like these cups!

![http://files.mom.me/photos/2012/05/22/6-3681-stacked_cups-1337654706.jpg](http://files.mom.me/photos/2012/05/22/6-3681-stacked_cups-1337654706.jpg)

### Where do we see stacks in the real world?

- How about the call stack? Remember what that is? [http://en.wikipedia.org/wiki/Call_stack](http://en.wikipedia.org/wiki/Call_stack)
- We use stacks to help in the implementation of more complex data structures and algorithms
- A stack is an extremely useful and efficient data structure for solving algorithms like figuring out a palindrome.
- Typical application areas include compilers, operating systems, handling of program memory (nested function calls)

### Queues

Queue - insertion must happen from rear/tail end of queue and removal must happen from front/head. We call this a FIFO (first-in-first-out) structure

Queue - list or collection with the restriction that insertion ca be performed at one end and deletion can be performed at the other front

Queue operations - These are all O(1)

insertion - enqueue/push/insert
deletion -  dequeue/pop/remove/delete
front/peek - find the head element (just return the element at front)
isEmpty - check if empty
IsFull - if there is a limited size

![http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png)

Or a real life example of a queue

![http://goodmenproject.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-15-at-9.16.04-AM.png](http://goodmenproject.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-15-at-9.16.04-AM.png)

### Where do we use queues?

- Batch processing: For operations where various entities are stored and held to be processed later, the queue performs the function of a buffer.
- Typical application areas include print job scheduling, operating systems (process scheduling).

And remember, the regular Array structure in Javascript is a Stack (first in, last out) and can also be used as a Queue (first in, first out) depending on the calls you make.

# Algorithms

### What is an algorithm?

A well defined, step by step computational procedure for solving a problem 

Algorithms are:

- Deterministic - they have a goal
	- They terminate as well 
- They take input
- They produce output

Just like in our explanation of data structures

## Some common sorting algorithms 

Below you will see four common sorting algorithms and some links to see them in action. One of the best ways to learn these algorithms is to try to implement them yourself. Use sticky notes, a pen and paper, cups, colored blocks or whatever you find best and try to recreate these sorting scenarios. Not only will this help you tremendously in your understanding of the algorithm, but it is __essential__ to have a fundamental knowledge before trying to implement them.

### Bubble Sort

For each element in the list, look at the element and the one to the right, if the left > right, swap them. Keep swapping until we are at the end of the array. Then move onto the next element in the array and repeat this. Bubble sort can be easily implemented using multiple loops (at least two) or recursion.

For bubble sort, The worst case is if we have backwards list (then it takes n passthroughs - 1)

![http://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif](http://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif)

We know for sure that after 1 pass the right most element is sorted correctly, and after 2 passes the right 2 elements are sorted correctly

How can we make bubble sort even smarter? We can always count to see the number of swaps and if there are none we know it's sorted.

Bubble sort is NOT an efficient algorithm, it's worst case performance is O(n^2), because you have to make n iterations through a list checking all n elements each pass so n * n = n^2. This runtime means that as the number of elements sorted increase, the runtime increase quadratically. But efficiency isn't a major concern or if you are sorting a small number of elements, it's a great way to start.


### Insertion Sort

![http://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif](http://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)

Divide the list into 2 portions, sorted and unsorted. At each set, move an unsorted to the sorted until the entire list is sorted. We just move elements in the sorted list to the right if they are greater than the new item.

Worst case of insertion sort -> O(n^2)

Best case of insertion sort -> O(n)

## Merge Sort

Similar to quick sort, This is one of the most efficient ways of sorting an array. It has three steps, divide, conquer(sort) and then combine(merge). 

![http://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif](http://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

And here is an example of the process

![http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif](http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif)


# Good things to know

### Memory Management and other differences between languages 

So....what's the difference between Ruby and Java? PHP and C? Javascript and C++? One of the main differences is that some of these languages are compiled (C, C++, Java) and others are interpreted (Ruby, PHP)! 

Don't know what a compiler is or what it does? Check out [this](https://www.youtube.com/watch?v=CSZLNYF4Klo&list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ&index=13) quick video for a good introduction.

Below are some of the differences between compiled and interpreted languages.

![ivsc.png](ivsc.png)

### A little more on memory

##### Garbage collector

In computer science, garbage collection (GC) is a form of automatic memory management. The garbage collector, or just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program. Garbage collection was invented by John McCarthy around 1959.

Garbage collection is often portrayed as the opposite of manual memory management, which requires the programmer to specify which objects to deallocate and return to the memory system. However, many systems use a combination of approaches, including other techniques such as stack allocation and region inference. Like other memory management techniques, garbage collection may take a significant proportion of total processing time in a program and can thus have significant influence on performance.

Here is a comparison of memory management in some popular programming languages 

![memory.png](memory.png)

How does memory management work in JavaScript? Read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

#### Pointers

In lower level languages, when we want to access a variable we need to know its memory __address__ (you can think of this as a house address). A computer program can find a variable as long as it knows its memory address. Pointers provide us a way to deal directly with these addresses. A pointer is a programming language object, whose value refers directly to (or "points to") another value stored elsewhere in the computer memory using its address. 

However, pointers can be very challenging to manage and even used dangerously (overused) so that many higher level languages hide them entirely.

Read more about pointers [here](http://en.wikipedia.org/wiki/Pointer_%28computer_programming%29)

Here is an example of a linked list with pointers (how you would implement this in a lower level language)

![http://courses.cs.vt.edu/~csonline/DataStructures/Lessons/OrderedListImplementationView/linked_list.gif](http://courses.cs.vt.edu/~csonline/DataStructures/Lessons/OrderedListImplementationView/linked_list.gif)

#### Stack + Heap

One of the most essential concepts in memory management is the Stack and the Heap. 

The stack is the memory set aside as scratch space for a thread of execution. When a function is called, a block is reserved on the top of the stack for local variables and some bookkeeping data. When that function returns, the block becomes unused and can be used the next time a function is called. The stack is always reserved in a LIFO (last in first out) order; the most recently reserved block is always the next block to be freed. This makes it really simple to keep track of the stack; freeing a block from the stack is nothing more than adjusting one pointer.

The heap is memory set aside for dynamic allocation. Unlike the stack, there's no enforced pattern to the allocation and deallocation of blocks from the heap; you can allocate a block at any time and free it at any time. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time; there are many custom heap allocators available to tune heap performance for different usage patterns.

Here is a nice visual:

![stack and heap](http://techinerd.com/wp-content/uploads/2014/05/stack_heap.jpg)

Read [more](http://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap) on StackOverflow

## Resources:
* Overview of selected data structures, operations, and their complexity: [http://bigocheatsheet.com/](http://bigocheatsheet.com/)
* The classic Algorithms textbook by Cormen, Leierson, Rivest, and Stein: [http://mitpress.mit.edu/books/introduction-algorithms](http://mitpress.mit.edu/books/introduction-algorithms)
* Good introduction to complexity analysis by Dionysis Zindros [http://discrete.gr/complexity/](http://discrete.gr/complexity/)
* MIT notes on Big O: [http://web.mit.edu/16.070/www/lecture/big_o.pdf](http://web.mit.edu/16.070/www/lecture/big_o.pdf)
* Harvard CS50 Shorts [https://www.youtube.com/playlist?list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ](https://www.youtube.com/playlist?list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ)
