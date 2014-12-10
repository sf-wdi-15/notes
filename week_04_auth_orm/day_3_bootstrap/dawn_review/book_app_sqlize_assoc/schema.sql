DROP DATABASE IF EXISTS book_app;
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