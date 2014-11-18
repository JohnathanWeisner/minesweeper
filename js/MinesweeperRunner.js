$(function() {
  var model = new MinesweeperModel();
  var view = new MinesweeperView(model.board);

  view.render();
});