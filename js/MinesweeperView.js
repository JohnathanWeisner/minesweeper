var MinesweeperView = function (options) {
  var defaultOpts = { board: [[0,0,0],[0,0,0],[0,0,0]], cellSize: 50 };
  this.options = $.extend(defaultOpts, options);
  this.board = this.options.board
  this.cellSize = this.options.cellSize
};

MinesweeperView.prototype.render = function(){
  var width = this.board[0].length * this.cellSize
  var height = this.board.length * this.cellSize
  $('#minesweeper').width(width);
  $('#minesweeper').height(height);
  for( var x = 0; x < this.board.length ; x++ ) {
    $('#minesweeper').append("<ul class='row' data-row='" + x + "'></div>");
    for( var y = 0; y < this.board[0].length; y++) {
      $("#minesweeper .row[data-row='" + x + "']").append("<li class='cell' data-col='" + y + "'></div>");
    }
  }
};

MinesweeperView.prototype.updateCell = function(x, y, value) {
  $("#minesweeper .row[data-row='" + x + "'] .cell[data-col='" + y + "']").text(value);
};
