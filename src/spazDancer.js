var SpazDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 100);
  this.$node = $('<span class="spaz"></span>');

};

SpazDancer.prototype = Object.create(Dancer.prototype);
SpazDancer.prototype.constructor=SpazDancer

SpazDancer.prototype.step = function() {
	Dancer.prototype.step.call(this);
  // this.$node.animate({
  // 	top: -10px,
  // }, 2000, );
// var styleSettings = {
//     top: top,
//     left: left
//   };
  this.$node.css({
  	top: Math.random() * $("body").height(),
  	left: Math.random() * $("body").width()
  });
};

