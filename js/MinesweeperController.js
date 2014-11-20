var MinesweeperController = function (options) {
  var defaultOpts = { board: new Board, view: new MinesweeperView };
  this.opts = $.extend(defaultOpts, options);
  this.board = this.opts.board
  this.view = this.opts.view
  this.cellClicked();
};

MinesweeperController.prototype.run = function(){
  this.view.render();
};

MinesweeperController.prototype.cellClicked = function() {
  $("#minesweeper").on("click", ".row .cell", function(e){
    e.preventDefault();
    target = e.target;
    var row = parseInt($(target).parent().data("row"));
    var col = parseInt($(target).data("col"));
    var cell = this.board[row][row];

    if(cell.clicked === false && cell.value === 0) {
      this.openCellsAround(row,col);
    } else {
      this.updateCell(row, col);
    }
  }.bind(this));
};

MinesweeperController.prototype.openCellsAround = function(x,y) {
  console.log("cells around " + x + ", " + y)
  var startCell = this.board[x][y];
  if(startCell.clicked === true) return;

  this.updateCell(x, y, startCell.value);
  if(startCell.value != 9 && startCell.value != 0) return;
  
  for( var x_i = -1; x_i <= 1 ; x_i++) {
    for( var y_i = -1; y_i <= 1; y_i++) {
      var new_x = x + x_i;
      var new_y = y + y_i;
      if( this.inBounds(new_x, new_y) ) {
        var cell = this.board[new_x][new_y];
        if ( this.inBounds(new_x, new_y) && cell.value === 0 && cell.clicked === false) {
          this.view.updateCell(new_x, new_y);
          this.openCellsAround(new_x, new_y);
        }
      }
    }
  }
}

MinesweeperController.prototype.updateCell = function(x, y) {
  this.board[x][y].clicked = true;
  this.view.updateCell(x, y, this.board[x][y].value);
}

MinesweeperController.prototype.inBounds = function(x,y) {
  var width = this.board.length
  var height = this.board[0].length
  return (x < height && x > -1 && y < width && y > -1)
}