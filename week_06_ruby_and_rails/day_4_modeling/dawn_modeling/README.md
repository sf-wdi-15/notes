# Intro Rails
## Models and Validations


| Objectives |
| :---- |
| become familiar with ActiveRecord query interface and model CRUD |
| become familiar with Rails migrations |
| become familiar with Rails model validations|


## Definitions


### Active Record

The ORM implementation that comes with Rails. Makes our objects intelligent without using SQL.

Active Record was described by Martin Fowler in his book Patterns of Enterprise Application Architecture. It is an implementation of the Active Record pattern which itself is a description of an Object Relational Mapping (ORM) system. 

[Additional reading](http://guides.rubyonrails.org/active_record_basics.html)



### Rake

*Rake is a simple ruby helper program.* It helps us to perform tasks by running scripts. A typical rake command works like rake and then a space, followed by whatever task we'd like it to perform. We can also write our own tasks and if we did, those would go inside the lib tasks folder. We can see which tasks are available, both the Rails default tasks and any custom tasks from the command line.

In terminal you can type type rake -T. That's going to return a list of the tasks that we have available. It returns a long list of all the tasks. Notice in particular, that some of these tasks have db in front of them. There's quite a few of them that are used for working with the database. If we want to see just those listings, you can amend your last command so that it's rake -T db. 

[Additional Reading](https://rubygems.org/gems/rake)



##  Setup


Generate a new Rails project. Set it up to use Postgres as our database (`-d`). We're also excluding tests for now (`-T`) since we will be using a different testing package (RSpec) in the future.


```
rails new models_example -T -d postgresql

```
Create our database.

**NOTE**: make sure your postgres app is running.

```
rake db:create
```



Create a new model called User with first_name and last_name properties that are strings.

```
rails generate model User first_name:string last_name:string
```

Migrate our database to create the users table.

```
rake db:migrate
```


### Exercise

Inside of your Rails console (`rails console` or `rails c`): 

**Create** a new User object.


```
irb(main):001:0> friend = User.new
```

Set the name of the user.

```
irb(main):002:0> friend.first_name = "Jane"
irb(main):002:0> friend.last_name = "Doe"
```

Save your user to the database.

```
irb(main):003:0> friend.save
```

**You can also use User.create**

```
User.create({first_name: "John", last_name: "Doe"})
```

**Read** all of the users in the database.You should see our two users in an the array.

```
irb(main):004:0> User.all

```

or  find a specific user using a `first_name`

```
irb(main):005:0> User.find_by(first_name: "Jane")
```

or find a specific user using the `id`

```
irb(main):005:0> User.find(2)
```


**Update** an Active Record object after it has been retrieved, its attributes can be modified and it can be saved to the database.

```
irb(main):006:0> user = User.find_by(first_name: "Jane")
irb(main):007:0> user.first_name = "Janet"
irb(main):008:0> user.save
```
You can also use the `update_attributes` method.

```
irb(main):009:0> user = User.find(2)
irb(main):0010:0> user.update_attributes({first_name: "Jack"});
```

**Delete** the user after you find them in the database

```
irb(main):0011:0> user = User.find_by(first_name: "Jack")
irb(main):0012:0> user.destroy
```


[Active Record CRUD](http://edgeguides.rubyonrails.org/active_record_basics.html#crud-reading-and-writing-data)
[Active Record Querying](http://edgeguides.rubyonrails.org/active_record_querying.html)



## Generating Models

When you generate a model in rails it will generate a matching migration

```
rails generate model MODEL_NAME one_column_name:data_type another_column_name:data_type

```

Table column types

```
binary
boolean
date
datetime
decimal
float
integer
string
text
time
```

## Generating Migrations

These reside in our `db/migrate` directory and to create one we use


```
rails generate migration MIGRATION_NAME

```

[creating migrations](http://edgeguides.rubyonrails.org/active_record_migrations.html#creating-a-migration)

migrations will have a few methods inside of them

```
create_table(table, &block)
drop_table(table)
rename_table(table, new_name)
add_column(table, column, type, options)
remove_column(table, column)
rename_column(table, column, new_name)
change_column(table, column, type, options)
add_index(table, column, options)
execute("any SQL string") - rare

```



### Exercise


Let's add an `email` to our users table


```
rails generate migration AddEmailToUsers email:string
```

open the `db/migrate` file associated to this migration and verify it looks correct.

```
rake db:migrate
```

* Create a similar migration for adding `age` to `users`, and migrate it.


Let's Assume we decide we don't need our `users` age. We can write a migration to remove them.


```
rails generate migration RemoveAgeFromUsers age:integer
```

Go to the `db/migrate` file and verify it looks correct. Then you should `migrate`.


## Validations

### Validation Helpers

for all of these validations you can pass in an error message of - :message => "Something error related"

```
validates_presence_of - attribute must not be blank
validates_length_of - must have a length of x. Pass in a hash with (:is, :minimum, :maximum, etc.)
validates_numericality_of - attribute must be an integer or float (can pass in :equal_to)
validates_inclusion_of - attribute must be in a list of choices
validates_exclusion_of - attribute must be in a list of choices
validates_format_of - attribute must match a regular expression (pass in :with)
validates_uniqueness_of - attribute must be unique
validates_acceptance_of - makes sure an attribute is accepted (a TOS is agreed)
validates_confirmation_of - attribute must be confirmed (type in password twice). Rails will only run this if the attribute is set to something
validates_associated - validates associated objects (validate options in associated relationships)

can pass in (:on => :save/:create/:update) to specify when to validate

can also pass in :if => :method / :unless => :method to help with determining when to validate (only check email if user wants to be identified by email)

```


### The Validates Method

* shortcut for validations
* wrap these all up in a hash

```
validates :COL_NAME, 
    presence: true, 
    length: {:maximum => 50}, 
    numericality: false, 
    uniqueness: true
```

[more reading](http://edgeguides.rubyonrails.org/active_record_validations.html#validation-helpers)




#### Exercise 1

We add all validations to the model files under `app/models`. Lets add some `User` validations.


```
class User < ActiveRecord::Base
	validates :email, confirmation: true
end

```

Now let's check that it works in `rails console`. Try the following:


```
User.create({email: "jack@jack.com"})
```

Now try the following:


```
User.create({email: "jack@jack.com", email_confirmation: "jack@jack.com"})
```


Note: we can still do `User.create`  with an empty email, so let's add a presence confirmation.

```
class User < ActiveRecord::Base
	validates :email, confirmation: true, presence: true
end

```

> Using the helpers this could be re-written
> 
> ```
> class User < ActiveRecord::Base
> 	validates_confirmation_of :email, 
> 	validates_presence_of :email
> end
> ```

## Helpful Rake Commands

* When everything is screwed up with your db and you're comfortable losing your data try the following:
	* `rake db:reset` 
* If for some reason that doesn't work
	* `rake db:drop` will drop your `db`
	* `rake db:create` will create your `db`
	* `rake db:migrate` will recreate your tables in your `db`
	* `rake db:seed` will run your `seeds.rb` file and create any data instructed in there.
	 