var SpazDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 300);
  this.$node = $('<span class="spaz"></span>');

};

SpazDancer.prototype = Object.create(Dancer.prototype);
SpazDancer.prototype.constructor=SpazDancer

SpazDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  for (var i=0; i<window.dancers.length;i++){
    if (window.dancers[i] instanceof SexyMario){
      var mario = window.dancers[i];
      var spazOffset=this.$node.offset()
      var marioOffset=mario.$node.offset()
      var distance = calculateDistance(marioOffset, spazOffset)
      if ( distance < 250 ) {
        mario.$node.css('background', 'url("img/flipmario.png") no-repeat');
        var dead = new Audio('mario-dies.m4a');
        dead.play();
        mario.$node.animate({
          top: "-=100px"
        },
        {
          easing: 'swing',
          duration: 300,
          step: function(){ mario.$node.animate({top: 5000}, 300)}
        });
      }
    }
  }

  function calculateDistance(marioOffset, spazOffset) {
    var a = (marioOffset.top+50) - spazOffset.top;
    var b = (marioOffset.left+25) - spazOffset.left;
    return Math.sqrt(a * a + b * b)
  };

  this.$node.css({
    top: Math.random() * $("body").height(),
    left: Math.random() * $("body").width()
  });
};

