
//Given a path and an object of parameters
//render will return a compile the template
//specified through path, with the parameters
//provided.

//Build a string template that we'll build a template out of
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

var viewRoutes = {
  "/name": nameDivTemplate,
  '/items': itemsTemplate
};

var render = function(path,obj){
  var route = viewRoutes[path];
  var $body = $('body');
  $body.append(route(obj));
};

render('/name', {name: "Mike"});
render('/items', {items: ["Baseball", "Basketball", "Ballet"]});
