#What we'll need
1. We need to make a get request to "/todos.json"
2. We need to template out the responses
3. Make a patch request to update todo's

#Method's we'll need
##jQuery's append method
```javascript
$(document).append(some_html_element)
```
##jQuerys get method
```javascript
$.get("/todos.json", function(data) {
  console.log(data);
});
```
##jQuerys ajax method
```javascript
var req_obj = {type: "PATCH", url: "/the_path_to_the_element",
                data: {todo: {complete: value_of_todo_on_page}}};
$.ajax(req_obj).done(function(res) {
  console.log(res);
});
```

##jQuerys click method
```javascript
$(".some_class").click(function(e) {
  console.log(e);
});
```
