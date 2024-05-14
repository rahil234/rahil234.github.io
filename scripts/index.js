// window.onload = function () {
//     window.scrollTo(0, 0);
//   }
const navbar = document.querySelector('.navclass');
// Listen for the scroll event
window.addEventListener('scroll', function() {
  if (window.scrollY > 10) { // adjust this value based on when you want the color to change
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
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
