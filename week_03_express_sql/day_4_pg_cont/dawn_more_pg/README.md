# Postgres
## Continued



### Setup

We want to be able to use all the postgres app tools in our terminal. To be able to do this we need to add the postgres app binary folder to our path.


```
$ export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.3/bin
```

Now this allows us to open postgres from our terminal by typing

```
$ psql
```

However, if we close our terminal the `psql` command stops working. We should really add this to our bash profile.


```
$ subl ~/.bash_profile
```
and add the following line somewhere


```
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.3/bin
```

then save and close the file. Finally, just be sure to source the changes

```
$ source ~/.bash_profile
```

## Using a SQL file

We can tell postgres to do things using a set of instructions written into a `.sql` file.


`example.sql`

```
CREATE DATABASE example_app;

\c example_app

CREATE TABLE person (
      id serial primary key,
      name text,
      age integer
    );
    
INSERT INTO person ( name, age)
      VALUES ('Zed', 37);
\d+ person
```

Now if we want this to re-create the database from scratch each time we can just use


```
DROP DATABASE IF EXISTS example_app;
CREATE DATABASE example_app;

\c example_app

CREATE TABLE person (
      id serial primary key,
      name text,
      age integer
    );
    
INSERT INTO person ( name, age)
      VALUES ('Zed', 37);
\d+ person
```



## Resources


[helpful commands](http://www.chesnok.com/daily/2013/11/06/top-10-psql-commands-i-use/)