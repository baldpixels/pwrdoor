$(document).ready(function() {
  var hamburgerState = true;

  function animateToX() {
    TweenMax.to('#hamburger-top', .15, {y: 11});
    TweenMax.to('#hamburger-bottom', .15, {y: -11});

    TweenMax.to('#hamburger-mid', .01, {delay: .15, scaleX: 0});
    TweenMax.to('#hamburger-top', .15, {delay: .15, transformOrigin:"50% 50%", rotation: 45});
    TweenMax.to('#hamburger-bottom', .15, {delay: .15, transformOrigin:"50% 50%", rotation: -45});
  }

  function animateToHamburger() {
    TweenMax.to('#hamburger-top', .15, {rotation: 0});
    TweenMax.to('#hamburger-bottom', .15, {rotation: 0});

    TweenMax.to('#hamburger-mid', .01, {delay: .15, scaleX: 1});
    TweenMax.to('#hamburger-top', .15, {delay: .15, y: 0});
    TweenMax.to('#hamburger-bottom', .15, {delay: .15, y: 0});
  }

  function animateNavIn() {
    TweenMax.to('nav', .5, {x: "0%"});
  }

  function animateNavOut() {
    TweenMax.to('nav', .5, {x: "100%"});
  }

  function toggleNav() {
    if(hamburgerState) {
      animateToX();
      animateNavIn();
      hamburgerState = false;
    } else {
      animateToHamburger();
      animateNavOut();
      hamburgerState = true;
    }
  }

  $('#hamburger').on('click', function() {
    toggleNav();
  });

  $('.nav-item').on('click', function() {
    toggleNav();
  });

});
