describe("SpazDancer", function() {

  var spazDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spazDancer = new SpazDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(spazDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that sets css properties", function() {
    sinon.spy(spazDancer.$node, 'css');
    spazDancer.step();
    expect(spazDancer.$node.css.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step once per tenth second", function(){
      sinon.spy(spazDancer, "step");
      expect(spazDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spazDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spazDancer.step.callCount).to.be.equal(2);
    });
  });
});
