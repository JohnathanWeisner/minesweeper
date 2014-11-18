describe("MinesweeperView", function() {
  var view;

  beforeEach(function() {
    view = new MinesweeperView();
  });

  it("should have default board option", function() {
    expect(view.options.board).toEqual([[0,0,0],[0,0,0],[0,0,0]]);
  });

  it("should be able to accept custom options", function() {
    custom = new MinesweeperView({ board: [[0,0],[0,0],[0,0]] });
    expect(custom.options.board).toEqual([[0,0],[0,0],[0,0]]);
  });

});
