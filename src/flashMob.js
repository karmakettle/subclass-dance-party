var FlashMob = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 500);
  this.$node = $('<span class="flashmob"></span>');
};

FlashMob.prototype = Object.create(Dancer.prototype);
FlashMob.prototype.constructor=FlashMob

FlashMob.prototype.step = function() {
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

