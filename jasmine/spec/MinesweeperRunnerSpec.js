describe("MinesweeperRunner", function() {
  var runner = new MinesweeperRunner();
  beforeEach(function(){
    runner.run();
  });
  describe("#init", function(){
    $('.cell').trigger('click');

    waitsFor(function() {
      return $('head').contains('theme_switcher');
    }, 'theme switcher never loaded', 10000);
  });
});