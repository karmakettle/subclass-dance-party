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

  for (var i=0; i<window.dancers.length;i++){
    if (window.dancers[i] instanceof SpazDancer){
      var marioOffset=this.$node.offset()
      var spazOffset=window.dancers[i].$node.offset()
      var distance = calculateDistance(marioOffset, spazOffset)
      var context = this;
      if ( distance < 250 ) {
        this.$node.css('background', 'url("img/flipmario.png") no-repeat');
        this.$node.animate({
          top: "-=100px"
        },
        {
          easing: 'swing',
          duration: 300,
          step: function(){ context.$node.animate({top: 5000}, 300)}
        });
      }
    }
  }

  function calculateDistance(marioOffset, spazOffset) {
    var a = (marioOffset.top+50) - spazOffset.top;
    var b = (marioOffset.left+25) - spazOffset.left;
    return Math.sqrt(a * a + b * b)
  };

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
