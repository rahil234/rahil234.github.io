const navbar = document.querySelector('.navclass');


// Get all navbar links
var navLinks = document.querySelectorAll('.navclass li a');

// Function to check which section is currently in view
function checkSectionInView() {
  var sections = document.querySelectorAll('section');
  var scrollPosition = window.scrollY;

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // If the section is in view, add the 'active' class to the corresponding navbar link
      var id = section.getAttribute('id');
      navLinks.forEach(function(link) {
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}

// Call the function when the page is loaded and when scrolling
window.addEventListener('load', checkSectionInView);
window.addEventListener('scroll', checkSectionInView);

// Listen for the scroll event
window.addEventListener('scroll', function() {
  console.log(this.window.scrollY);
  console.log(this.window.screen.availHeight);
});

// Listen for the click event on each link
document.querySelectorAll('.navclass li a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Remove the active class from all links
    document.querySelectorAll('.navclass li a').forEach(function(link) {
      link.classList.remove('active');
    });

    // Add the active class to the clicked link
    event.target.classList.add('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
