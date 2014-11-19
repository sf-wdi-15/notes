    var shoppingLists = [
                            ["apples", "oranges", "carrots"],
                            ["ham", "turkey", "cheese"],
                            ["fruits", "vegetables", "meat"]
                        ];
    // iterate here

    for (var j = 0; j < shoppingLists.length; j += 1) {
      var list = shoppingLists[j];
      for (var i = 0; i < list.length; i += 1) {
        console.log(list[i]);
      }
    }