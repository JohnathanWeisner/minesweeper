var MinesweeperView = function (options) {
  var defaultOpts = { board: [[0,0,0],[0,0,0],[0,0,0]], cellSize: 50 };
  this.options = $.extend(defaultOpts, options);
  this.initEventHandlers();
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
};

MinesweeperView.prototype.initEventHandlers = function() {
  this.clickCell();
};

MinesweeperView.prototype.clickCell = function() {
  var board = this.options.board;
  $("#minesweeper").on("click", ".row .cell", function(e){
    target = e.target;
    e.preventDefault();
    var row = parseInt($(target).parent().data("row"))
    var col = parseInt($(target).data("col"))
    this.updateCell(row, col, board[row][row]);
  }.bind(this));
};