describe("Board", function() {
  var game;

  beforeEach(function() {
    game = new Board();
  });

  it("should have default width option", function() {
    expect(game.length).toEqual(10);
  });

  it("should have default width option", function() {
    expect(game[0].length).toEqual(10);
  });

  it("should be able to accept custom options", function() {
    custom = new Board({ width: 99 });
    expect(custom[0].length).toEqual(99)
  });

  
});
