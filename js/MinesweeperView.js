var MinesweeperView = function (options) {
  var defaultOpts = { board: [[0,0,0],[0,0,0],[0,0,0]] };
  this.options = $.extend(defaultOpts, options);
};

MinesweeperView.prototype.render = function(){
  for( var x = 0; x < this.options.board.length; x++ ) {
    $('#minesweeper').append("<div class='row' data-row='" + x + "'></div>");
    for( var y = 0; y < this.options.board[0].length; y++) {
      $("#minesweeper .row[data-row='" + x + "']").append("<div class='cell' data-col='" + y + "'></div>")
    }
  }
};