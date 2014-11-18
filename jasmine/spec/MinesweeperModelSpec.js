describe("MinesweeperModel", function() {
  var game;

  beforeEach(function() {
    game = new MinesweeperModel();
  });

  it("should have default width option", function() {
    expect(game.options.width).toEqual(10);
  });

  it("should have default width option", function() {
    expect(game.options.height).toEqual(10);
  });

  it("should be able to accept custom options", function() {
    custom = new MinesweeperModel({ width: 99 });
    expect(custom.options.width).toEqual(99)
  });

  
});
