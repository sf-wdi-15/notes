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


// wait for the window to load
$(function () {
  
  // grab the is element
  var $todosCon = $("#todos-con");

  // get all todos
  $.get("/todos.json")
    .done(function (todos) {

      console.log("Todos:", todos);
      
      // looping through each todo
      todos.forEach(function (todo) {
        // append each todo.content
        $todosCon.append("<div>" + todo.content + "</div>")
      });
    });

  var $todoForm = $("#new_todo");

  // we are waiting for a submit 
  //  on the #new_todo form
  $todoForm.on("submit", function (event) {
    // prevent the page reload!
    event.preventDefault();
    // console.log the form
    console.log($(this).serialize());

    // view the page source for the form
    //  you can see that the input for 
    //  content has id of "todo_content"

    // here we are grabbing the text from the
    //  todo_content input
    var content = $("#todo_content").val(); 

    $.post("/todos.json", {
      todo:  {
        content: content// where is the data????
      }
    })
    // receive the createdTodo 
    .done(function (createdTodo) {
      // console.log the createdTodo
      console.log("CREATED:", createdTodo);

      // append the createdTodo
    });

  });

});
