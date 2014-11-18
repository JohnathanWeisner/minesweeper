var MinesweeperView = function (options) {
  var defaultOpts = { board: [[0,0,0],[0,0,0],[0,0,0]] };
  this.options = $.extend(defaultOpts, options);
};