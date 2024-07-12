const navbar = document.querySelector('.navclass');


// Get all navbar links
var navLinks = document.querySelectorAll('.navclass li a');

// Function to check which section is currently in view
function checkSectionInView() {
  var sections = document.querySelectorAll('section');
  var scrollPosition = window.scrollY;
  var windowBottom = scrollPosition + window.innerHeight;

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionBottom = sectionTop + sectionHeight;

    if (
      (scrollPosition >= sectionTop && scrollPosition < sectionBottom) ||
      (windowBottom >= document.documentElement.scrollHeight && section.id === 'contact')
    ) {
      // If the section is in view or we're at the bottom of the page and it's the last section
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

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("loaded succesfully");
  
  const name = document.getElementById('formname').value;
  const email = document.getElementById('formmail').value;
  const budget = document.getElementById('formbudget').value;
  const message = document.getElementById('formmessage').value;

  // Encode URI components to ensure special characters are handled correctly
  const mailtoLink = `mailto:rahilsardarwork@gmail.com?subject=${encodeURIComponent('Contact from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message)}`;
  
  window.location.href = mailtoLink;
});
