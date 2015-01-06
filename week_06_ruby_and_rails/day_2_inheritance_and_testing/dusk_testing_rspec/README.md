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

To get a better understanding of this, consider the following example:
`user_spec.rb`
```rb
require_relative 'user'

describe User do
    it "lets me assign a name" do
        user = User.new "Paul"
        expect(user.name).to be("Paul")
    end
end
```
In this case, the class we're testing would likely look something like this:

`user.rb`
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

### Why use TDD/BDD? 
