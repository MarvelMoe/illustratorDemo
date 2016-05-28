
   // Main canvas and context references
    var canvas;
    var ctx;
    // Frames per second
    var fps = 60.0;

    // Animations
    var animations = [ new iconPath() ];

    function iconPath() {
      // Control and anchor points
      this.points = [
                    [ [1431.9, 380.9], [1431.9, 380.9], [1191.9, 616.9], [1015.9, 372.9] ],
                    [ [1015.9, 372.9], [839.9, 128.9], [463.9, 178.9], [337.9, 206.9] ],
                    [ [337.9, 206.9], [211.9, 234.9], [47.9, 610.9], [267.9, 466.9] ],
                    [ [267.9, 466.9], [487.9, 322.9], [709.9, 344.9], [709.9, 344.9] ]
                    ];

      // Linear motion index
      this.linear = [
                    [0, 0.00, 0.00], [0, 0.24, 0.02], [0, 0.36, 0.05], [0, 0.47, 0.07], 
                    [0, 0.56, 0.09], [0, 0.65, 0.12], [0, 0.74, 0.14], [0, 0.82, 0.16], 
                    [0, 0.90, 0.19], [0, 0.96, 0.21], [1, 0.02, 0.23], [1, 0.08, 0.26], 
                    [1, 0.14, 0.28], [1, 0.20, 0.30], [1, 0.26, 0.33], [1, 0.32, 0.35], 
                    [1, 0.38, 0.37], [1, 0.44, 0.40], [1, 0.50, 0.42], [1, 0.57, 0.44], 
                    [1, 0.63, 0.47], [1, 0.70, 0.49], [1, 0.78, 0.51], [1, 0.86, 0.53], 
                    [1, 0.95, 0.56], [2, 0.07, 0.58], [2, 0.18, 0.60], [2, 0.27, 0.63], 
                    [2, 0.35, 0.65], [2, 0.44, 0.67], [2, 0.54, 0.70], [2, 0.66, 0.72], 
                    [2, 0.84, 0.74], [2, 0.95, 0.77], [3, 0.02, 0.79], [3, 0.09, 0.81], 
                    [3, 0.15, 0.84], [3, 0.23, 0.86], [3, 0.30, 0.88], [3, 0.39, 0.91], 
                    [3, 0.48, 0.93], [3, 0.58, 0.95], [3, 0.71, 0.98], [3, 1.00, 1.00]
                    ];

      // Segment T boundaries
      this.segmentT = [0.00, 0.57, 0.78, 1.00];
      this.lastValue = -1.0;
      this.x = 0;
      this.y = 0;
      this.orientation = 0.0;
      this.pathClock = new clock(4.00, 0.00, 1, false, 1, circEaseIn, this.linear.length - 1, 1.00, 0.0000);
      // Update function
      this.update = updatePath;
    }
    (function init() {

      // Set main canvas and context references
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");

      // Initialize animations
     
      text.rotateClock = new clock(3.00, 0.00, 1, false, 1, cubicEaseOut, 2.0 * Math.PI, 1.00, 0.0000);
      text.alphaClock = new clock(2.00, 1.50, 1, false, 1, linear, 1.0, 1.00, 0.0000);

      // Start animation clocks

      animations[0].pathClock.start();
      text.rotateClock.start();
      text.alphaClock.start();

      // Set animation timer
      setInterval(drawFrame, (1000 / fps));
    })()

    function updateAnimations() {

      // Update animation clocks
      updateAllClocks();
      // Update animation paths  
      var animationCount = animations.length;
      for (var i = 0; i < animationCount; i++) {
        animations[i].update();
      }
    }

    function drawFrame() {

      // Update animations
      updateAnimations();

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(animations[0].x, animations[0].y);
      icon(ctx);
      ctx.restore();
      ctx.save();
      ctx.translate(691.3, 322.2);
      ctx.rotate(text.rotateClock.value);
      ctx.globalAlpha = text.alphaClock.value;
      text(ctx);
      ctx.restore();
    }

   
    function icon(ctx) {

      // icon/Linked File
      ctx.save();
      ctx.save();
      ctx.transform(-1.000, -0.022, 0.018, -0.795, 0.0, 0.0);
      ctx.drawImage(document.getElementById("image2"), -128.0, -128.0);
      ctx.restore();
      ctx.restore();
    }

    function text(ctx) {

      // This is the text title that will rotate in
      ctx.save();
      ctx.drawImage(document.getElementById("image3"), -240.5, -122.9);
      ctx.restore();
    }

    $(function() {
                  var pull          = $('#pull');
                        menu        = $('nav ul');
                        menuHeight  = menu.height();

                  $(pull).on('click', function(e) {
                        e.preventDefault();
                        menu.slideToggle();
                  });

                  $(window).resize(function(){
                  var w = $(window).width();
                  if(w > 320 && menu.is(':hidden')) {
                        menu.removeAttr('style');
                  }
            });
       });

  //Banner on top and bottom
 var width = $('.hire-text').width(),
    containerwidth = $('.hire-container').width(),
    left = containerwidth;
$(document).ready(function(e){
      function tick() {
        if(--left < -width){
            left = containerwidth;
        }
        $(".hire-text").css("margin-left", left + "px");
        setTimeout(tick, 15);
      }
      tick();
});
//Appearance of barber spinner
// $(function(){
//  $('.pole').load('file.html',function(){}).hide().fadeIn(7000);

// })

var toggle = $(window).width() < 600;
$(window).on('resize', function (event) {
    if ($(window).width() >= 600 && toggle) {
        $('.pole').hide().fadeIn(5000);
        toggle = false;
    } else if ($(window).width() < 600 && !toggle) {
        $('.pole').hide().fadeOut(1000);
        toggle = true;
    }
});



