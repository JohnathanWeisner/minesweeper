$(function() {
  var model = new MinesweeperModel();
  var view = new MinesweeperView({board: model.board});
  var controller = new MinesweeperController({model: model, view: view});
  controller.run();
  
});