// MENU

const toggleMenu = () => {
    document.body.classList.toggle("open");
};

// WAYPOINT

$(document).ready(function() {
  $('.js--features').waypoint(function(direction) {
    console.log('waypoint called'); // add this to check if waypoint is being called
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '160px'
  });
});

// SCROLL ACTIVE

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();
    console.log('scrollPosition: ' + scrollPosition);
    
    $('section').each(function() {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();
      console.log('sectionTop: ' + sectionTop + ', sectionBottom: ' + sectionBottom);
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        var navItemId = $(this).attr('id') + '-link';
        console.log('highlighting ' + navItemId);
        $('#' + navItemId).addClass('active');
      } else {
        var navItemId = $(this).attr('id') + '-link';
        console.log('unhighlighting ' + navItemId);
        $('#' + navItemId).removeClass('active');
      }
    });
  });
});



// SCROLL

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;

    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

$('body').scrollspy({ target: '.navbar-menu' })