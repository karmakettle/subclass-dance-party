var SexyMario = function(top, left, timeBetweenSteps) {
  // top = top || Math.random() * $("body").height();
  // left = left || 500;

  Dancer.call(this, top, left, 100);
  // this.$node = $('<span class="mario"></span>');
  this.$node.removeClass('dancer').addClass('mario');
  this.direction = 10;

};

SexyMario.prototype = Object.create(Dancer.prototype);
SexyMario.prototype.constructor=SexyMario

SexyMario.prototype.step = function() {
  Dancer.prototype.step.call(this);


  var currentPos = this.$node.offset();
  var width = $("body").width();
  // if ( currentPos.left < 10 || currentPos.left > ( width - 10 ) ) {
  //   this.direction = -this.direction;
  // }

  this.$node.css({
    left: currentPos.left += this.direction
  });
};

//marioOffset=this.$node.offset()
// marioOffest={
//   top: - some number of pixels
//   left: - some number of pixels
// }
