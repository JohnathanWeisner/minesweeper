Array.prototype.repeat= function(default_value, length){
 while(length) this[--length]= default_value;
 return this;
}

var Game = function (options) {
  var defaultOpts = { width: 10, height: 10 };
  this.options = $.extend(defaultOpts, options);
  this.board = [].repeat([].repeat(0,this.options.width), this.options.height);
};
