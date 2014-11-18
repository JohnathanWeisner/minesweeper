Array.prototype.repeat= function(default_value, length){
 while(length) this[--length]= default_value;
 return this;
}

var MinesweeperModel = function (options) {
  var defaultOpts = { width: 10, height: 10 };
  this.options = $.extend(defaultOpts, options);
  this.board = [].repeat([].repeat(new Cell(0),this.options.width), this.options.height);
};

var Cell = function(value) {
  this.clicked = false;
  this.value = 0;
}