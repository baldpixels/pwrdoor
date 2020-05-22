$( document ).ready( function() {

  var ocean = $("#ocean");
  var title = $("h1");
  var arrow = $("#arrow");
  var titleOn = false;
  var fadeInTime = 600;

// Scroll Animation Variables
  var precision = 10000;
  var initialHeight = 30;
  var scrollPercent = 0;
  var overshoot = 600;

// FUNCTIONS
  function calcScrollPercent() {
    return Math.round( precision * $('body').scrollTop() / ($(document).height() - $(window).height() - overshoot) ) / precision;
  }

  function seaLevelChange() {
    scrollPercent = calcScrollPercent();

    if(titleOn) {
      if(scrollPercent >= (100 / precision)) {
        title.stop();
        title.fadeOut(fadeInTime / 2);
        titleOn = false;
      }
    } else {
      if(scrollPercent < (100 / precision)) {
        title.stop();
        title.fadeIn(fadeInTime);
        titleOn = true;
      }
    }

    let riseHeight = initialHeight + scrollPercent * $(window).height();
    ocean.css('height', riseHeight);
  }

  function introAnimation() {
    title.fadeIn(fadeInTime*2, function(){
      ocean.animate({
        height: '+=' + initialHeight
      }, { duration: fadeInTime * 1.5, queue: false });
    });

    arrow.fadeIn(fadeInTime);

    titleOn = true;
  }

// EVENT LISTENERS
  $('body').scroll(function() {
    setTimeout(function() {
      title.removeClass('fade-in');
      title.addClass('fade-out');
    }, 450);

    arrow.removeClass('fade-in');
    arrow.addClass('fade-out');
  });

  title.addClass('fade-in');
  title.removeClass('invisible');

  setTimeout(function() {
    arrow.addClass('fade-in');
    arrow.removeClass('invisible');
  }, 600);
});
