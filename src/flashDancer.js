var FlashDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.step();
};

FlashDancer.prototype = Object.create(makeDancer.prototype);

FlashDancer.prototype.step = function() {
  
};