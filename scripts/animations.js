$(document).ready(function() {
  var path = window.location.pathname;
  var page = path.split("/").pop();

  var viewportHeight = $(window).height();
  var controller = new ScrollMagic.Controller();

  var loopStarted = false;

  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
  });

// FUNCTIONS
//
//
  var diamondRotation = 0;
  function diamondLoop() {
    var diamondCanvas = "#diamond-loop";
    var diamondLeft = "#diamond-loop-left";
    var diamondRight = "#diamond-loop-right";

    diamondRotation = diamondRotation + 180;

    TweenMax.to(diamondCanvas, 1, { rotation: diamondRotation });
  }

  function introHome() {
    TweenMax.from('#diamond', .75, {x: 150, rotation: -90});
    TweenMax.to('#diamond', .75, {opacity: 1});
    TweenMax.to('#category', .75, {delay: .5, opacity: 1})

    TweenMax.to('#intro-word01', .5, {delay: 1, opacity: 1});
    TweenMax.to('#intro-word02', .5, {delay: 1.15, opacity: 1});
    TweenMax.to('#intro-word03', .5, {delay: 1.3, opacity: 1});

    TweenMax.to('#diamond-loop', .6, {delay: 1.5, y: "-50%", opacity: 1});
  }

  function introProject() {
    TweenMax.to('#diamond-right', .5, {scaleX: 0});
    TweenMax.fromTo('#category', .5, {delay: .15, x: 90}, {opacity: 1, x: 0});
  }

  function hideCategory() {
    TweenMax.to("#category", 0.33, {opacity: 0});
  }

  function showCategory() {
    TweenMax.to("#category", 0.33, {opacity: 1});
  }

  function updateCategoryTo(name) {
    hideCategory();
    $('#category').html(name);
    showCategory();
  }

  function diamondClickHome() {
    TweenMax.from('#diamond', .5, {rotation: -90});
  }

  function diamondClickProject() {

  }

  function showMore(text) {
    textID = "more"
    TweenMax.to()
  }

//
//
//

// EVENT LISTENERS
//
//
  $(window).resize(function() {
    viewportHeight = $(window).height();
  });

  $(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// trigger scroll
			controller.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});

  $('.button-internal').hover(function() {
    var button = '#' + this.id;
    var buttonFill = button + ' .button-fill';

    TweenMax.to(buttonFill, .5, {width: "100%"});
    TweenMax.to(button, .5, {color: "#f5f5f5"});
    }, function() {
    var button = '#' + this.id;
    var buttonFill = button + ' .button-fill';

    TweenMax.to(buttonFill, .33, {width: "0%"});
    TweenMax.to(button, .5, {color: "#0700ff"});
  });

  $('.icon').hover(function() {
    var element = '#' + this.id;
    TweenMax.to(element, .15, {x: 15, fill: "#fffff"});
  }, function() {
    var element = '#' + this.id;
    TweenMax.to(element, .33, {x: 0, fill: "#0700ff"});
  });

  $('#diamond').on('click', function() {
    if(page == "index.html" || page == "") {
      diamondClickHome();
    } else {
      diamondClickProject();
    }
  });

  $('.read-more').on('click', function() {
    showMore(this);
  });

  $(window).on('scroll', function() {
    if(!loopStarted) {
      diamondLoop();
      loopStarted = true;
    }
  });
//
//
//
  if(page == "index.html" || page == "") {
    introHome();
  } else {
    introProject();
    $("#diamond").css('opacity', '1');
  }

});
