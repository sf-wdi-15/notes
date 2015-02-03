// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//Given a path and an object of parameters
//render will return a compile the template
//specified through path, with the parameters
//provided.

//Build a string template that we'll build a template out of
$(window).ready(function() {
var nameDiv = "<div>" +
                "Name: <%= name %>" +
              "</div>";

//Construct the template using _.template
var nameDivTemplate = _.template(nameDiv);

//Build a string template that we'll build a iterator template out of
var itemsDiv = "<div style='color:red;'>" +
                 "<% items.forEach(function(item) { %>" +
                   "<div><%= item %></div>" +
                 "<% }); %>" +
               "</div>";

//Construct the tempalte using underscore
var itemsTemplate = _.template(itemsDiv);

var todosList = "<ul style='color:blue;'>" +
                 "<% todos.forEach(function(todo) { %>" +
                   "<li><%= todo['content'] %>" +
                    "<input class='checkbox' id=<%= todo['id'] %> type='checkbox'" +
                      "<%= todo['complete'] ? 'checked' : ' ' %>" + 
                    "/></li>" +
                 "<% }); %>" +
               "</ul>";

var todosTemplate = _.template(todosList);

var viewRoutes = {
  "/name": nameDivTemplate,
  '/items': itemsTemplate,
  '/todos': todosTemplate
};

var render = function(path,obj){
  var route = viewRoutes[path];
  var $body = $('body');
  $body.append(route(obj));
};

//render('/name', {name: "Mike"});
//render('/items', {items: ["Baseball", "Basketball", "Ballet"]});

$.get("/todos.json", function(data) {
  console.log(data);
  render("/todos", {todos: data})
  $(".checkbox").click(function(e) {
    var el = e.toElement;
    var url = "/todos/" + el.id + ".json";
    var obj = { type: "PATCH", url: url, data: {todo: {complete: el.checked}} };
    $.ajax(obj).done(function(msg) {
      console.log("Data Saved: " + msg);
    });

  });
    //$.post("/todos/ });
});

});
