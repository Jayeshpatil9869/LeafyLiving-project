function toggleMenu() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("show");
}
var navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    toggleMenu(); // Hide the navigation when a link is clicked
  });
});

$(document).ready(function () {
  $('.example5').click(function () {
    $('.example5').toggleClass("active");
    event.stopPropagation();
    // $('.menu-drop').slideToggle(600);
    // do stuff with menu here
  });
  $(document).click(function (e) {
    $('.example5').removeClass("active");
    // $('.menu-drop').slideUp(600);
    // undo stuff with menu here
  });
});


VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});




$(function () {
		
  var filterList = {
  
      init: function () {
      
          // https://mixitup.kunkalabs.com/
          $('#gallery').mixItUp({
              selectors: {
              target: '.gallery-item',
              filter: '.filter'	
          },
          load: {
            filter: '.print, .strategy, .logo, .web' // show all items on page load.
          }     
          });								
      
      }

  };
  
  // Filter ALL the things
  filterList.init();
  
});



function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Navbar click event listeners
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSectionId = this.getAttribute('href').substring(1); // Remove the '#' symbol
    scrollToSection(targetSectionId);
  });
});
