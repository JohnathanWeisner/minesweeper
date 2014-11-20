$(function() {
  var board = new Board();
  var view = new MinesweeperView({board: board});
  var controller = new MinesweeperController({board: board, view: view});
  controller.run();
});