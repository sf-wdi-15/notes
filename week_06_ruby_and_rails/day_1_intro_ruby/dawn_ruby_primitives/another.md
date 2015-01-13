### Ruby Methods - 9/24/13

#### Why methods?

One word: D R Y

Remember choose your own adventure?  How many times did you write the same loop?  Or did you just get lazy and stop validating users' input because it was so dumb to write the same loop 10 times?  Imagine staying up all night writing a complicated, 50 line algorithm, only to find that for tomorrow's task you need almost exactly the same code with just a few modifications?  Do you copy and paste it?  What happens if you find a bug in code you've already copy-pasted 20 places?

In programming, we don't like to repeat ourselves.  (Almost) every programming language ever invented has had a way to encapsulate a bit of functionality and reuse it; in Ruby those are called METHODS.  We make our code reusable by taking out all the "hard-coded" values and replacing them with variables, which are made available to our function through parameters.  We'll see analogies to methods/functions everywhere; from Rake tasks to manage our Rails projects, to stored database procedures, to partial templates.

#### Define a method

```ruby
def say_hello
  puts "Hello"
end
```

#### Define a method with a parameter

```ruby
def say(something)
  puts something
end
```

#### Define a method that operates on two parameters
```ruby
def add_numbers(first, second)
  puts first + second
end
```

#### Printing and returning are different
```ruby
def add_numbers_quietly(first, second)
  first + second
end
```

#### Methods in Ruby always return the value of the last evaluated expression
```ruby
def implicitly_return_5
  if true
    5
  end
end
```

* What was the value of the if statement?
* `status_of_world = if 1 == 2 then "messed up" else "a-o-k" end`
* `result = 1 == 2 ? "wuh oh" : "phew"`

#### Parameters can have default values

```ruby
def say(something = "Hello")
  puts something
end

say # prints "Hello"
say "Goodbye" # prints "Goodbye"
```

#### Functions have locally scoped variables
```ruby
foo = 1

def do_stuff
  foo += 1
  bar = 1
end

p foo
p bar
```

#### Lab: Revisit choose your own adventure

* `prompt_and_chomp(prompt) # => chomped input`
* `get_valid_response(prompt, valid_ary) # loops calling prompt_and_chomp until input is valid`
* `level_n # displays level info, calls get_valid_response, determines outcome and calls another level function`
* "main" (entry point) of program: `level_1`

#### Recursion: methods can call themselves

```ruby
def recurse(depth)
  if depth > 0
    puts "Spiraling down..."
    recurse(depth - 1)
    puts "Spiraling up..."
  else
    puts "Bottom of the rabbit hole"
  end
end

recurse(5)
```

#### (It wouldn't be an intro programming course without:) Lab: Factorial + Fibonacci

* `fact(n) # => n * (n-1) * (n-2) * ... * 1`
* `fib(n) # finds the nth number in the sequence: 0 1 1 2 3 5 8 13 ...`