function Matrix(mat) {
  this.n = mat.length;
  this.up = true;
  this.row = 0;
  this.col = 0;
  this.depth = 0;
  this.matrix = mat;
  this.length = this.n;
  this.spiral = [this.matrix[0][0]];

  this.walk = function() {
    var n = this.n;
    if (this.up) {
      if(this.col != n-1-this.depth) {
        this.col = this.col + 1;
        this.spiral.push(this.matrix[this.row][this.col]);
      } else if (this.col == n-1-this.depth && this.row == n-1-this.depth){
        this.up = !this.up;
        this.walk();
      } else {
        this.row = this.row + 1;
        this.spiral.push(this.matrix[this.row][this.col]);
      }
    } else {
      if(this.col != this.depth) {
        this.col = this.col - 1;
        this.spiral.push(this.matrix[this.row][this.col]);
      } else if (this.col == this.depth && this.row == this.depth + 1){
        this.up = !this.up;
        this.depth = this.depth + 1;
        this.walk();
      } else {
        this.row = this.row - 1;
        this.spiral.push(this.matrix[this.row][this.col]);
      }
    }
  };

  return this;

}

Matrix.prototype.print = function() {
  var str = "";
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      str = str + " " + this.matrix[i][j];
    }
    str = str + " \n";
  }

  return str;
}

var genMatrix = function(n) {
  var mat = [];
  for(var i = 0; i<n; i++) {
    var row = [];
    for (var j=0; j<n; j++) {
      row.push(Math.floor(Math.random() * 10));
    }
    mat.push(row);
  }

  var matrix = new Matrix(mat);
  return matrix;
};

//var spiral = new Spiral(4);
//console.log(spiral);
//for(var i = 1; i<16; i++) {
//  spiral.walk();
//  console.log(spiral);
//}
//var n = 5;
//var spiral2 = new Spiral(n);
//console.log(spiral2);

var mat = genMatrix(4);
console.log(mat);
for(var i = 1; i<mat.n*mat.n; i++) {
  mat.walk();
  console.log(mat);
}
