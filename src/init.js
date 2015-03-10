$(document).ready(function(){
  window.dancers = [];

  $(".lineUp").on("click", function(event){

    var numDancers = window.dancers.length;
    var space = $("body").height()/numDancers
    var top = numDancers < 2 ? 100 : space;

    for (var i=0; i<window.dancers.length;i++){
      var dancer = window.dancers[i]
      dancer.setPosition(top,50)
      top += space;
    }
  })

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var generateDancer=function(dancerMakerFunction, top, left){
      
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      window.dancers.push(dancer)
    }

    // if ( danceMakerFcnName === "FlashMob" ) then
      // call generateDancer multiple times
    if (dancerMakerFunctionName==="FlashMob"){
      var counter = 0;
      
      var hamsterFest = setInterval(function() { 
        generateDancer(dancerMakerFunction);
        counter++;
        if ( counter === 20 ) {
          clearInterval(hamsterFest);
        }
      }, 400);
    }
    else if ( dancerMakerFunctionName === "SexyMario" ) {
      generateDancer(dancerMakerFunction);
    }
    else {
      generateDancer(dancerMakerFunction)
    }
  });
});

