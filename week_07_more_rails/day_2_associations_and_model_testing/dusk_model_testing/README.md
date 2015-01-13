#Rspec in Rails

###Learning Objectives
- install rspec in rails app
- create unit tests for our model validations
- create controller specs to test blog routes
- define TDD

###Resources
______________

1. **Rspec-Rails Documentation** https://github.com/rspec/rspec-rails  
2. **Model Specs** https://www.relishapp.com/rspec/rspec-rails/docs/model-specs  
3. **Request Specs** https://www.relishapp.com/rspec/rspec-rails/docs/request-specs/request-spec  
4. **Matchers**  https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
5. **Model Specs Example** https://github.com/wdi-sf-july/validation_tests
6. **Controller Specs Example** https://github.com/tlicata/rails_blog_lab

###Rspec - Rails Installation
_____________________________

(It's always best to refer to offical documentation, see Resource#1,
in case these instructions go out of date eventually.)

**Step 1:**  

Add rspec rails to your Gemfile in the development, test group and bundle install  

*Gemfile*

        group :development, :test do
          gem 'rspec-rails', '~> 3.0.0'
        end

*Terminal*  
`bundle install`  

**Step 2:**  

Create spec directory, and necessary configurations  

*Terminal*  
`rails generate rspec:install`  

This adds `spec/spec_helper.rb` and `.rspec` files that are used for configuration. See those files for more information.  

**Step 3:**  

Create a spec file for our model.  
This is only necessary if you had a model created before you installed rspec.  

*Terminal*  
`rails generate rspec:model student`  

**Step 4:**  

Run your rspec tests (they should all pass as you don't have any)  

*Terminal*  
`bundle exec rspec` or `bin/rspec`

To run specific specs

```
# Run only model specs
`bin/rspec spec/models`

# Run only specs for AccountsController (Assuming such a controller exists)
`bin/rspec spec/controllers/accounts_controller_spec.rb`
```

###Exercise (Model Specs)
__________________

Write a spec to verify your solution to Class Exercise 1 (one-to-many)

  - You'll want to generate a spec for both your Order model and your Item model.
  - For your order model, write a test to make sure the order name is being returned correctly
  - For your items model, write a few tests to ensure that the item name, description, and price are all being returned correctly.
  - Don't forget to use the `before` and `after` keywords to generate at least one order and at least one item to test against in your specs.

### Bonus Example (Controller Specs)

Don't feel bad if this one is out-of-reach (for now).

To help you figure things out, let's break into groups. This will be a pair programming exercise.

The rails-rspec documentation (see Resource #1) has a very interesting
"Controller Specs" example.  They test something called
PostsController, which happens to be the name of our controller in our
rails_blog_lab. Let's add a controller spec to the blog lab.

__1.__ Switch to your rails_blog_lab project

__2.__ Install 'rspec-rails' in the project by repeating steps 1 & 2 from the "Installation" instructions above.
  
Hint:

*Gemfile*

        group :development, :test do
          gem 'rspec-rails', '~> 3.0.0'
        end

*Terminal*  
`bundle install`  

*Terminal*  
`rails generate rspec:install`  


__3.__ Generate a spec file for your PostsController

  The following command is only used if you have created models before installing the `rspec-rails` gem.
    - rails generate rspec:controller posts

__4.__ Follow the example in the rspec-rails documentation. It fits
our use case surprisingly well.

### Terms

**TDD** - Write your tests first. [Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development)

**BDD** - Hipster TDD. [Wikipedia](http://en.wikipedia.org/wiki/Behavior-driven_development)

**Tests as documentation** - If your tests are thorough enough,
  someone new to your code could read them to figure out how your code
  works. In this way, your tests are like the [spec]ification for your
  code.

**Unit tests vs. Integration tests vs. Regression Tests**

**Code coverage?**
