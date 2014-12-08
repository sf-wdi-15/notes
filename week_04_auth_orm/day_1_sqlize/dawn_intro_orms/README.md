## Getting started with Sequelize

### Key terms + definitions


#### Relational Database

A relational database is one designed to efficiently query and structure relationships between data. The data is typically structured into tables with columns and rows. 

**Think SQL when you think Relational Database.**

#### ORM

An ORM stands for **Object Relational Mapping**. On one end there is a **Relational Database**. On the other end there is an **object oriented application**, or some application that allows us to create objects for that matter. The **mapping** is just a way of using object methods to make queries and represent results returned from our database.

In short an ORM (Object Relational Mapper) is a piece/layer of software that helps map objects to our database. This means we can just use JavaScript to create and work with our data instead of writing raw SQL queries (the concept is very similar to what we build with the weekend lab!)


You can read some more about the benefits of using an ORM [here](http://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it)

#### Sequelize

From the Sequelize docs "To put it in a nutshell, it's an ORM (Object-Relational-Mapper). The library is written entirely in JavaScript and can be used in the Node.JS environment." In other words, Sequelize is an ORM that works with relational databases and Node.js. It allows us to do many things including:

- Represent models and their data.
- Represent associations between these models.
- Validate data before they gets persisted to the database.
- Perform database operations in an object-oriented fashion.

#### Model

A model is a class that maps to the data relation (table) and potentially bridges tables. You can think of a model as the blueprint (class) for what each row of data is going to contain. Unlike a migration, you perform CRUD on instances of your models.

#### Migration

 Migrations (also known as ‘schema evolution’ or ‘mutations’) are a way of changing your database schema from one version into another. You can think of a migration as the creation or changes you want to make to a database table or column. Before you can start manipulating your models, you need to create and run a migration. Examples of migrations are creating, deleting and altering tables (and their existing columns).

#### Sequelize-cli 

Tog get Sequelize working we just need to install the tool locally.

```
npm install -g sequelize-cli
```

### Setup part 2 - starting a new node project

Let's build our first app using Sequelize! First we need to create a node app and include our dependencies. __All in terminal__:

Create a new folder and add an app.js and .gitignore and initialize the repository

- mkdir firstapp
- touch app.js
- touch .gitignore
- git init

Add the text 'node_modules in our .gitignore

- echo "node_modules" >> .gitignore

Initialize our project and add/save dependencies 

- npm init
- npm install --save express ejs

Note that for sequelize we'll need to do the following install

- npm install --save pg lodash sequelize

Create a database and initialize a sequelize project

- createdb firstapp
- sequelize init

### Setup part 3 - config.json, models and migrations:

In sublime we should now see a bunch of new folders. We now have config, migrations and models. This was created for us when we ran `sequelize init`. Let's start in the config folder and open up the config.json file. This file contains information about the database we are using as well as how to connect. We have three settings, one for development (what we will use now), test(for testing our code), and production(when we deploy our app on AWS/Heroku). Let's change the config.json so it looks like this (we will not be using the test or production environments, so just ignore those for now - all that matters is "development").

```
{
  "development": {
    "database": "firstapp",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

```

Once this is complete, let's move to the models folder.

## Creating a model and a matching migration

In order to create a model, we start with `sequelize model:create` and then specify the name of the model using the `--name` flag. Make sure your models are __always__ in the singular (remember table name in plural, model name in singular). After passing in the --name flag followed by the name of your model, you can then add an --attributes flag and pass in data about your model. When you generate your model, you will also generate a corresponding migration. You only need to do this once for your model. Remember, if you want to make changes to your model after generating it - all you have to do is make a change and save it. If you want to make changes to your migrations, you have to re-run them (either by undoing the migration or by creating a new one that alters the migration).

Here is an example of a command to generate a User model with a first_name, last_name and age along with a corresponding migration. Make sure you do __not__ have any spaces for each of the attributes and their data types

`sequelize model:create --name User --attributes first_name:string,last_name:string,age:integer`

This will generate the following migration

```
"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Users").done(done);
  }
};
```

And a corresponding model:

```
"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return User;
};

```

## What is this "associate" thing in my model?

In this function, we specify any relations/associations (one to one, one to many or many to many) between our models (hasMany or belongsTo). We'll discuss this more in class, but always remember, the association goes in the model and the foreign keys go in the migration.

## Validations

Sequelize has a bunch of validations we can add to our models to ensure that our data has met certain criteria before add it to our database. To include validations in your model, wrap them in a validate object. An examples of this is validating an email address (making sure it has a @ etc. as well as ensuring that it is never null):

```
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
 

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
       }
    },
  },

    {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return User;
};
```

## Running a migration

Whenever we generate a migration, we have to run the migration to execute the `up`method (which we have in our migration - when we undo a migration we run the down method). To do this, run in terminal `sequelize db:migrate`

## CRUD with Sequelize (Using our User model)

It's time to hop into the lab to use our models open the node REPL and require your db

```
> var db = require('./models');
```

### Create


```
> db.user.create({ first_name: 'jane', last_name: 'doe', age: 26 })
  .then(function(user) {
  // you can now access the newly created task via the variable data
  });
```

### Read


```
db.user.find(1)
  .then(function(user) {
  // user will be an instance of User and stores the content of the table entry with id 1. if such an entry is not defined you will get null
});
```



The methodfindOrCreate can be used to check if a certain element is already existing in the database. If that is the case the method will result in a respective instance. If the element does not yet exist, it will be created.

```
db.user.findOrCreate({ where: { first_name: 'jane' }})
  .then(function(result) {
    console.log("User is: ", result[0]);
    console.log("Was created: ", result[1]); // returns true if the user was created
  });
```

If you don't like that `user#findOrCreate` returns an array you can use `spread`


```
db.user
  .findOrCreate({ where: { first_name: 'jane' }})
  .spread(function(user, creatd) {
    console.log("User is: ", user);
    console.log("Was created: ", created); // returns true if the user was created
  });
```

```
db.user
  .findAll()
  .then(function(users) {
  // users will be an array of all User instances
});
```

### Update


```
// way 1

User.find({ where: { first_name: 'jane' } })
  .then(function(user){
    user.first_name = 'Taco'
    task.save()
      .then(function() {});
})

// way 2
db.user
  .find({ where: { first_name: 'jane' } })
  .then(function(user){
    user.updateAttributes({
      first_name: 'Taco'
    }).then(function() {})
  })

```

### Delete

[destroy](http://sequelizejs.com/docs/latest/instances#destroy)

```
db.user
  .find({ where: { first_name: 'jane' } })
  .then(function(user){
    user.destroy().then(function() {})
  })
```

## Older Listeners + Callbacks

When you make a request

These are all the same for success handling

```
// each one is valid
Model.findAll().on('success', function(data) {})
Model.findAll().success(function(data) { })
Model.findAll().ok(function(data) { })
```

These are all the same for error handling

```
Model.findAll().on('error', function(err) { })
Model.findAll().error(function(err) { })
Model.findAll().failure(function(err) {  })
Model.findAll().fail(function(err) {  })
```

These are all the same when you want one event to contain both the error and success information.

```
Model.findAll().complete(function(err, result) { /* bar */ })
Model.findAll().done(function(err, result) { /* bar */ })
```