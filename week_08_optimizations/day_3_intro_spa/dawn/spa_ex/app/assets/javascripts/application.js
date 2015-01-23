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
        var $todo = $("<div class=\"todo\" data-id=" + todo.id + ">" + 
                            todo.content + 
                            "<input type=\"checkbox\" class=\"completed\">" +
                            "<button class=\"delete\">Delete</button></div>");

        $todo.find(".completed").attr("checked", todo.completed);

        if (todo.completed) {
          $todo.toggleClass("todo-complete")
        }


        $todosCon.append($todo); 

      });
    });

  var $todoForm = $("#new_todo");

  // we are waiting for a submit 
  //  on the #new_todo form
  $todoForm.on("submit", function (event) {
    // prevent the page reload!
    event.preventDefault();
    // console.log the form
    console.log(this);

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

      var $todo = $("<div class=\"todo\" data-id=" + createdTodo.id + ">" + 
                          createdTodo.content + 
                          "<input type=\"checkbox\" class=\"completed\">" +
                          "<button class=\"delete\">Delete</button></div>");

      $todo.find(".completed").attr("checked", createdTodo.completed)
      $todosCon.append($todo);   

    });

  });

  // setup a click handler that only
  //  handle clicks from an element
  //  with the `.delete` className
  //  that is inside the $todosCon
  $todosCon.on("click", ".delete", function (event) {
    alert("I was clicked!");

    // grab the entire todo
    var $todo = $(this).closest(".todo");

    // send our delete request
    $.ajax({
      // grab the data-id attribute
      url: "/todos/" + $todo.data("id") + ".json",
      type: "DELETE"
    }).done(function (){
      // once we completed the delete
      $todo.remove();
    })
  });


  // we waiting for  a click on a checkbox
  $todosCon.on("click", ".completed", function () {
    // grab the todo 
    var $todo = $(this).closest(".todo");

    // send the update on the completed field
    $.ajax({
      // use the data-id to make the URL
      url: "/todos/" + $todo.data("id") + ".json",
      type: "PATCH",
      data: {
        todo: {
          completed: this.checked
        }
      }
    }).done(function (data) {
      // console.log the data
      console.log("UPDATED: ", data);
      // update the styling of our todo
      console.log($todo)
      $todo.toggleClass("todo-complete");
    })
  });

});


