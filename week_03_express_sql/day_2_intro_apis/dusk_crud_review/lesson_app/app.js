var express = require("express"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// look for stylesheets and js in public
app.use(express.static(__dirname + "/public"));

var books = [];

app.get("/books", function (req, res) {
  res.render("books/index", {bookList: books});
});

app.get("/books/new", function (req, res) {
  res.render("books/new");
});

app.get("/books/:index", function (req, res) {
  var index = req.params.index;
  var book = books[index];
  res.render("books/show", {book: book});
});


app.post("/books", function (req, res) {
  console.log(req.body);
  books.push(req.body.book);
  res.redirect("/books");
});


app.delete("/books/:index", function (req, res) {
  var index = req.params.index;
  books.splice(index, 1);
  res.redirect("/books");
}); 







// the root route
// tell app to match GET / to this function
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3000, function () {
  console.log("Visit localhost:3000");
});