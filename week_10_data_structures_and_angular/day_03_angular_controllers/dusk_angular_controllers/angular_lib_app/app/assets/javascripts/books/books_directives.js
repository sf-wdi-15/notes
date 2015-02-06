var BookDirs = angular.module("BookDirs", []);

BookDirs.directive("greeter", function () {
  return  {
    scope: {
      greeting: "=type"
    },
    template: "<h1>{{greeting}}</h1>"
  };
});

BookDirs.directive("book", function () {

  var randColor = function (){
    var randColors =[];
    for (var i = 0; i < 3;  i+=1) {
      randColors.push(Math.round(255*Math.random()))
    }
    return "rgb(" + randColors.join(", ") + ")";
  };
  var getAngle = function () {
    return Math.round(Math.random()*180);
  }
  return {
    restrict: "EAC",
    templateUrl: "book_template.html",
    link: function (scope, element, attrs) {
      console.log(element);
      console.log(scope.book);
      console.log(randColor())
      var angle = 0;
      var left = 0;
      var num = 0;
      setInterval(function () {
        element[0].style.backgroundColor = randColor(); 
        element[0].style.left = left + "px";
        element[0].style.height = angle*.2 + "px";
        element[0].style.width = angle + "px";
        if (num % 3 == 0) {

        element[0].style["-webkit-transform"] = "rotateZ(" +angle+"deg)";
        } else if (num % 3 ==1) {
        element[0].style["-webkit-transform"] = "rotateX(" +angle+"deg)";
        } else if (num % 3 == 2) {
           element[0].style["-webkit-transform"] = "rotateY(" +angle+"deg)";
        }
        angle = (angle + 10) % 360;
        num += angle == 0 ? 1: 0;
      }, 30)

    }
  }
});

