describe("flashMob", function() {

  var flashMob;
  var timeBetweenSteps = 500;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flashMob = new FlashMob(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(flashMob.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(flashMob.$node, 'toggle');
    flashMob.step();
    expect(flashMob.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(flashMob, "step");
      expect(flashMob.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(flashMob.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(flashMob.step.callCount).to.be.equal(2);
    });
  });
});
