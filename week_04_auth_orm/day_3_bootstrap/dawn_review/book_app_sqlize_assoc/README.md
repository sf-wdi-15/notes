# Postgres
## Node Postgres


### Setup

We already have a working application on external repository. We are going to refactor to add postgres.

see [book_app_in_class](https://github.com/sf-wdi-15/book_app_in_class)

Let's setup a database to persist our books so we can save records to it instead of an array.

`schema.sql`

```
CREATE DATABASE book_app;

\c book_app

CREATE TABLE books (
		id serial primary key,
		title text,
		author text
	);

INSERT INTO books (title, author)
	VALUES ('The Great Gatsby', 'F.S. Fitzgerald');

INSERT INTO books (title, author)
	VALUES ('The Giver', 'Lois Lowry');
```

If we run this

```
$ psql -f schema.sql
```

We have now setup our database with the same info we had in the array with book objects. We are now ready to refactor our application.


### Playing with node postgres

Let's first insall the `node-postgres` lib.

```
$ npm install --save pg
```

Now startup a node repl and create an object that represents the information about our database.


```
> config =  {
    database: "book_app",
    port: 5432,
    host: "localhost"
};

```

Next we want to load the `pg` lib and establish a connection and then select all the books.

```
> pg = require("pg");
> pg.connect(config, function(err, client, done){
        if (err) {
             console.error("OOOPS!!! SOMETHING WENT WRONG!", err);
        }
        client.query("SELECT * FROM books", function (err, result) {
		 	done(); 
		 	console.log(result.rows);       	
        });

    });

```

Let's try selecting a single book

```
> pg.connect(config, function(err, client, done){
        if (err) {
             console.error("OOOPS!!! SOMETHING WENT WRONG!", err);
        }
        client.query("SELECT * FROM books WHERE title=$1", ["The Great Gatsby"], function (err, result) {
		 	done(); 
		 	console.log(result.rows);       	
        });

    });

```


