/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function () { //when document(DOM) loads completely
    checkScroll(); //check if page is scrolled
    $(window).scroll(checkScroll); //get scroll position of window
});

function checkScroll() { //check if page is scrolled
if ($(window).scrollTop() >= 300) { //if window is scrolled 300px or more
    $('.navbar').addClass('solid'); //add class 'solid' to element with class 'navbar'
} else { //if page is not scrolled 300px from top
    $('.navbar').removeClass('solid'); //remove class 'solid' from navbar element
}
}

/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/

$('.navbar-toggler').click(function () { //when navbar-toggler is clicked
    if ($(window).scrollTop() <= 300) { //if window scrolled 300px or less from top
    $("nav.navbar").toggleClass("solid-toggle"); //add the solid class to navbar
    }
});




/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK ==========*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('.navbar-toggler').addClass('collapsed');
    $('#navbarResponsive').removeClass('show');

    setTimeout(function () {
        $('nav.navbar').removeClass('solid-toggle');
    }, 300);

        $('nav.navbar').removeClass('solid-toggle');

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
})



/*========== BOUNCING DOWN ARROW ==========*/

$(document).ready(function () {
    $(window).scroll(function () {
        $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
          
    });
});

/*========== BOUNCING DOWN ARROW ==========*/

/*========== LIGHTBOX IMAGE GALLERY ==========*/

$(document).ready(function () {
    lightbox.option({
        'resizeDuration': 600.,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
        'imageFadeDuration': 400.,
    });
});


/*========== MEET THE TEAM CAROUSEL ==========*/

$(document).ready(function () {
    $('#team-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        autoplayTimeout: 6500,
        smartSpeed: 1200,
        dotsSpeed: 1000,
        responsive: {
            0: {
              items: 1  
            },
            768: {
                items: 2  
            },
            992: {
                items: 3  
              },
        }
    });
});

/*========== SKILLS COUNTER ==========*/

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 3200,
        beginAt:0
    });
});

/*========== CLIENTS CAROUSEL ==========*/

$(document).ready(function () {
    $('#clients-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        autoplayTimeout: 6500,
        smartSpeed: 1750,
        dotsSpeed: 1000,
        responsive: {
            0: {
              items: 1  
            },
            768: {
                items: 2  
            },
        }
    });
});

/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    });
});


/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () {
    if ($(window).width() < 768) {
        $('div').attr('data-animation', 'fadeInUp');
    }
});


/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function () { // a self calling function
  function onScrollInit(items, trigger) { // a custom made function
      items.each(function () { //for every element in items run function
          var osElement = $(this), //set osElement to the current
              osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
              osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

          osElement.css({ //change css of element
              '-webkit-animation-delay': osAnimationDelay, //for safari browsers
              '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
              'animation-delay': osAnimationDelay //normal
          });

          var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

          osTrigger.waypoint(function () { //scroll upwards and downwards
              osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
          }, {
                  triggerOnce: true, //only once this animation should happen
                  offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
              });
      });
  }

  onScrollInit($('.os-animation')); //function call with only items
  onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});


/*========== CONTACT FORM INPUT VALIDATION ==========*/
//Original Resource: https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form
$(function () {

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $('#contact-form').validator();


  // when the form is submitted
  $('#contact-form').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
          var url = "contact/contact.php";

          // POST values in the background the the script URL
          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data) {
                  // data = JSON object that contact.php returns

                  // we recieve the type of the message: success x danger and apply it to the
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  // let's compose Bootstrap alert box HTML
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                  // If we have messageAlert and messageText
                  if (messageAlert && messageText) {
                      // inject the alert to .messages div in our form
                      $('#contact-form').find('.messages').html(alertBox);
                      // empty the form
                      $('#contact-form')[0].reset();
                  }
              }
          });
          return false;
      }
  })
});

/*========== Dark Mode Button On Scroll ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.custom-control-switch').fadeIn(1750);
        } else {
            $('.custom-control-switch').fadeOut(1500);
        }
    });
});

