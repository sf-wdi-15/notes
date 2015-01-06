# RSpec: Test Driven Development (TDD) and Behavior Driven Development (BDD) with Ruby

##Objectives

1. Refresh our memories about what TDD/BDD is
2. Know what RSpec is
3. Install RSpec
4. Learn how to use RSpec
  - Set up RSpec testing environment
  - Know how and why to use Describe and It Blocks
  - Understand the Red/Green/Refactor Cycle
5. Learn how to utilize/implement a TDD cycle

## So what exactly is the difference between Test Driven Development / Behavior Driven Development?

### Test Driven Development (TDD)
TDD is a paradigm. A way of developing applications. It's less of a concept and more a way of doing things. In a test driven development cycle, we:
    1. Write a test for our application to pass or fail
    2. Write the minimum amount of application code necessary for the test to pass
    3. Refactor/improve our code and re-test to ensure that our test still passes.

TDD is a great process. It's intended to reduce errors and bugs through the institution of a _process_ that encourages us to write small, manageable chunks of code that we can make certain work—rather than getting sidetracked by bonuses, extra features, or refactoring.

So what's the problem? Test Driven Development doesn't really provide much guidance on:
    1. Where should I start developing?
    2. What exactly should I test?
    3. How should tests be structured and named?

Test Driven Development is also a more granular process than Behavior Driven Development. It tends to lead developers to test more specific things like the value of a particular variable, rather than helping us to focus on the _behavior_ we're trying to create.

### Behavior-Driven Development (BDD)
While Behavior Driven Development definitely incorporates the cycle defined by TDD, it also answers the questions specified above. In short, here are the answers:
    1. Where should I start developing?
    At each stage of development, focus on the piece of functionality that is most important to your __user__. In other words, before you write and code (or any tests), take off your developer glasses and look at the problem from your user's perspective. Ask yourself what's most important for your user's experience. This can be difficult, but with experience, research, and feedback, this will usually become more clear.
    2. What exactly should I test?
    In BDD, we want to think of our tests more like a specification for a piece of functionality. We also write our tests (specs) in the form of whole sentences. That sentence, read as a complete thought is all we want to try to test—no more, no less.
    3. How should tests be structured and named?
    We've already answered part of this question actually. In BDD, we use `"describe"` and `"it"` blocks to create tests that read like complete sentences.

####To get a better understanding of this, consider the following example:
File: __user_spec.rb__
```rb

require_relative 'user'

describe User do
    it "lets me assign a name" do
        user = User.new "Paul"
        expect(user.name).to be("Paul")
    end
end
```

File: __user.rb__
```rb
class User
    def initialize (name)
        @name = name
        self
    end
end
```

We would read this example as:
"User lets me assign a name."

And our tests, namely, the creation of a new User and assignment of that user's name using the initialization method serve to test out this behavior.

Note the difference between testing for behavior and testing various 'assertions' (typical in TDD). Think back to our work with the `assert` module in Node. There, an 'assertion' was something like, `assert.equals(User.name, "Paul")`. While this _assertion_ would serve to test whether or not the name "Paul" had been properly applied to the user, the syntax itself is more difficult to understand and definitely doesn't provide us with clear picture of what behavior we are trying to verify. All it tells us is that when our application is working properly, User.name should be equal to "Paul".

In contrast, our BDD statements, `describe` and `it` help to define the nature of the behavior, so we can understand exactly what behavior is being tested and write tests appropriately.   

### Why use TDD/BDD? 
At this point the answer should be somewhat obvious. Using TDD/BDD methodologies allows us to make sure:
  - We're building exactly the features we need, and nothing more.
  - That our code works at each step along the way
  - That if someone else modifies our code, they'll know if they've broken it
  - That if we modify someone else's code, we'll know if we've broken it

## RSpec

So what is RSpec? 
It's a Behavior-Driven Development framework. Used properly, it directs what code we write, and when.

## Install RSpec

Please run the following code at a bash prompt

```bash
$ gem install rspec
$ rspec --v
$ rspec --help
```

## Set up the RSpec Testing Environment

Now, go to your working folder for today's lesson. In my case, that's

```bash
$ mkdir example
$ cd example
```
_...day_2_inheritance_and_testing/dusk_testing_rspec/example_

Now run the command

```bash
$ rspec --init
```
You should see the following output

```bash
create   .rspec
create   spec/spec_helper.rb
```

This means that `rspec --init` created:
  - .rspec - a file that allows you to configure the behavior of rspec within your project
  - a new folder called `spec` that contains a file called `spec_helper.rb`. For now, don't worry about what `spec_helper.rb` actually does. The main thing to know is that your 'specs' (AKA tests) go in the spec folder.

Before we move on, we want to open `.rspec` and check to ensure it contains the following lines of configuration information:

```bash
  --color
  --format documentation
```

## Now, Let's Create a Simple Project

For this first project using RSpec, we're going to create two classes: `Book` and `Library`

To get started, we'll want to create a file for each class in our project directory. So run the following commands at a bash prompt:

```bash
$ touch book.rb
$ touch library.rb
```

We also want to create a `_spec.rb` file for each class. This is where we'll write our tests. Run the following commands:

```bash
$ cd spec
$ touch book_spec.rb
$ touch library_spec.rb
```

Now, because our `spec_helper.rb` file is always included by default whenever we run the `rspec` command, and because we need to include our class files for our tests to work, we're going to use `require_relative` to make sure everything that's needed is included.

Add the following to the top of `spec_helper.rb`:
```rb
require_relative '../library'
require_relative '../book'

# Ignore the automatically generated code
```

Ok! Now we're ready to start testing. But because part of the goal of this lesson is to show the methodology behind Behavior-Driven Development, we're going to build our tests (and, in response, our classes) together.

Please switch over to Sublime by moving to your main project directory and typing the following:

```bash
$ subl .
```

