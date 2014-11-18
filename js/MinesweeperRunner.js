$(function() {
  var model = new MinesweeperModel();
  var view = new MinesweeperView({board: model.board});

  view.render();
  view.updateCell(0,0,"hello")
});