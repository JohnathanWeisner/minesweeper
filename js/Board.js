var Board = function (opts) {
  var defaultOpts = { width: 9, height: 9 };
  this.opts = $.extend(defaultOpts, opts);
  this.opts.mines = (this.opts.width * this.opts.height) / 8
  return this.randomBoard();
};

Board.prototype.randomBoard = function() {
  var board = [];
  var coords = this.mineCoords();
  for(var x = 0; x < this.opts.height; x++){
    board.push([]);
    for(var y = 0; y < this.opts.width; y++){
      var value = 0;
      var index = this.coordIn([x,y], coords)
      if(index != -1){
        value = 9;
      };
      board[x].push(new Cell(value));
    } 
  }
  return board;
}

Board.prototype.randomCoord = function() {
  var x = Math.floor((Math.random() * this.opts.height));
  var y = Math.floor((Math.random() * this.opts.width));
  return [x, y];
}

Board.prototype.mineCoords = function() {
  var coord = this.randomCoord();
  var coords = [];
  for(var i = 0; i < this.opts.mines; i++){
    while(this.coordIn(coord, coords) != -1){
      coord = this.randomCoord();
    }
    coords.push(coord);
  }
  return coords;
}

Board.prototype.compareCoords = function(a,b) {
  return a[0] === b[0] && a[1] === b[1]
}

Board.prototype.coordIn = function(coord, array) {
  for(var x = 0; x < array.length; x++) {
    if(this.compareCoords(coord, array[x])) {
      return x;
    }
  }
  return -1;
}

var Cell = function(value) {
  this.clicked = false;
  this.value = value;
}
