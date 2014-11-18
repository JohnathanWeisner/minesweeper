var MinesweeperController = function (options) {
  var defaultOpts = { model: new MinesweeperModel, view: new MinesweeperView };
  this.opts = $.extend(defaultOpts, options);
  this.cellClicked();
};

MinesweeperController.prototype.run = function(){
  this.opts.view.render();
};

MinesweeperController.prototype.cellClicked = function() {
  $("#minesweeper").on("click", ".row .cell", function(e){
    target = e.target;
    console.log(target);
    e.preventDefault();
    var row = parseInt($(target).parent().data("row"));
    var col = parseInt($(target).data("col"));
    var cell = this.opts.model.board[row][row];
    console.log(cell);
    if(cell.clicked === false) {
      this.opts.view.updateCell(row, col, cell.value);
      if(cell.value == 0){
        this.openCellsAround(row,col)
      }
    }
  }.bind(this));
};

MinesweeperController.prototype.openCellsAround = function(x,y) {
  console.log("cells around " + x + ", " + y)
  var width = this.opts.model.board.length
  var height = this.opts.model.board[0].length
  if(this.opts.model.board[x][y].clicked === true) return;
  this.opts.model.board[x][y].clicked = true;
  console.log(this.opts.model.board);
  for( var x_i = -1; x_i < 2; x_i++) {
    for( var y_i = -1; y_i < 2; y_i++) {
      var new_x = x + x_i, new_y = y + y_i;
      console.log("cells around " + new_x + ", " + new_y)
      if (new_x < height && new_x > 0 && new_y < width && new_y > 0) {
        var clicked = this.opts.model.board[new_x][new_y].clicked;
        var value = this.opts.model.board[new_x][new_y].value;
        this.opts.view.updateCell(new_x, new_y, 0);
        console.log(clicked);
        console.log(value);
        if (value === 0 && clicked === false) {
          this.cellsAround(new_x, new_y)
        }
      }
    }
  }
}