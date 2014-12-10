# Concepts Review

We've thrown a lot of new information at you this week. So let's take a moment to review.

## Sequelize

Sequelize is an ORM **(Object Relational Mapper)**.
  - What's the basic function of Sequelize (or any ORM?)
  - What are the benefits of using an ORM in your applications?

### ORM Structure

**Object oriented application** <=> ORM <=> **Relational Database**

So, Sequelize is just a piece of *middleware* that helps map objects to tables in a relational database. This allows us to think and code in terms of objects, rather than writing complex SQL queries, while making persistence possible.

### Sequelize Functions
  - Represent object oriented data as models
  - Represent associations between those models
  - Validate (AKA *check*) data before it is stored in the database
  - Perform database operations in an object-oriented fashion


## Sequelize Terms

### Models

What's a model? Why is it called a model?

  - A model is a blueprint for a particular class of objects.
  - A model **maps** the data in your database to objects in your application

### Migrations

AKA *schema evolution* or *mutation*

  - A migration provides the means by which to update the structure of your objects and their associated database tables from one version into another.
  - A migration does not really act on specific instances of a class. Rather, it:
    * Defines the structure of an object and its associated database tables
    * Modifies (updates) the structure of an object and its associated database tables
    * Deletes a class from your database and application


## Review: CRUD Using Sequelize

Let's go over the following actions together:
  - **C**reate
  - **R**ead
  - **U**pdate
  - **D**elete

## Creating Associations with Sequelize

Before we discuss how to create associations in Sequelize, we should discuss what associations actually are.

So what does it mean to say that two tables are "associated?"

As we've discussed, databases should follow the same D.R.Y. principles as code. A process we call database normalization allows us to eliminate redundancies, and reduce the chances of our DB containing incomplete, orphaned, or corrupted data.

The process of "normalizing" a database often leads to the creation of associations between database tables. The most common associations are:
  - One-toOne (1:1): In a "one-to-one" relationship, a child table is associated with **exactly one** parent, and that parent will have zero or one children. A good example would be a social media profile. Each user is entitled to one profile, but you might still separate your user authentication table from that users profile information.
  - One-to-Many (1:N): In a "one-to-many" relationship between two objects, one object may have many "children", while the children have, at most, one "parent". For example, at many companies, a manager may manage zero or more employees, but each employee will only have 1 manager.
  - Many-to-Many (N:M): In a many to many relationship between two objects, each object may be associated with 0 or more instances of the other. For example, in a relationship between books and authors, a book may have many authors, and an author may write many books.

### Creating One-To-Many Associations Using Sequelize

We're going to modify our books app to use a One-To-Many association for authors-to-books.

What does this relationship signify in this app?

#### Making the Changes

First, let's recreate our database with two different models. One for `book` and one for `author`

```
$ createdb book_app_sqlize_assoc
$ sequelize init
$ sequelize model:create --name book --attributes "title:string, synopsis:text"
$ sequelize model:create --name author --attributes "firstname:string, lastname:string, age:integer"
```

Let's not to update `config/config.json` before moving on.

Next, we'll modify the `associate` section of our models:

We'll change our `book.js` model so that it contains:
```js
classMethods: {
      associate: function(models) {
        this.belongsTo(models.author);
      }
    }
```

And we're going to change our `author.js` model so that it contains:
```js
    classMethods: {
      associate: function(models) {
        this.hasMany(models.book);
      }
    }
```

Finally, we want sequelize to take care of making these changes to our database for us, so we're going to make a small change to `app.js` that will have sequelize check our models on each run and make any necessary changes.

```js
db.sequelize.sync().then(function() {
  var server = app.listen(3000, function() {
    console.log(new Array(51).join("*"));
    console.log("\t LISTENING ON: \n\t\t localhost:3000");
    console.log(new Array(51).join("*")); 
  });
});
```

Now, if all has gone well, when we run our app using...
```
$ nodemon
```
...our database should be automatically updated with the appropriate foreign keys automatically. But we can check to make sure using `psql` in our terminal.

#### Fixing the Routes to Work with Our 'authors' Table

So, we've now changed the structure of our database. It's a good change, because if the same author wrote many books, that author's name wouldn't appear in the "books" table over and over again. But we still need to change our app to accomodate. 

But don't worry, it's a very small change.

Here's our new `/books` route. Can you spot the difference?
```js
app.get("/books", function (req, res) {
  db.book.findAll(
    {include: [db.author]}
    ).then(function(books) {
    console.log("Showing all books:",books);

    res.render("books/index", {bookList: books});
  });
  
});
```

It's just one extra line: `{include: [db.author]}`

Basically, this tells Sequelize, "Hey! Remember that association we set up between `book` and `author`, for each book that you grab from the database, figure out the author using the `authorId` foreign key, and add that author's information to the information returned with each book.