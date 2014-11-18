var MinesweeperView = function (options) {
  var defaultOpts = { board: [[0,0,0],[0,0,0],[0,0,0]], cellSize: 50 };
  this.options = $.extend(defaultOpts, options);
};

MinesweeperView.prototype.render = function(){
  var width = this.options.board[0].length * this.options.cellSize
  var height = this.options.board.length * this.options.cellSize
  $('#minesweeper').width(width);
  $('#minesweeper').height(height);
  for( var x = 0; x < this.options.board.length ; x++ ) {
    $('#minesweeper').append("<ul class='row' data-row='" + x + "'></div>");
    for( var y = 0; y < this.options.board[0].length; y++) {
      $("#minesweeper .row[data-row='" + x + "']").append("<li class='cell' data-col='" + y + "'></div>");
    }
  }
};

MinesweeperView.prototype.updateCell = function(x, y, value) {
  $("#minesweeper .row[data-row='" + x + "'] .cell[data-col='" + y + "']").text(value);
}