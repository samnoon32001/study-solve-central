// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all university links
    const uniLinks = document.querySelectorAll('.uni-box');

    // Add click event listeners to each university link
    uniLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // Get the target ID from the data-target attribute
            const targetId = link.getAttribute('data-target');
            // Get the corresponding services div
            const targetServices = document.getElementById(targetId);
            // Toggle the display of the services div
            if (targetServices) {
                if (targetServices.style.display === 'none') {
                    // If hidden, show the services
                    targetServices.style.display = 'block';
                } else {
                    // If visible, hide the services
                    targetServices.style.display = 'none';
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const topNav = document.querySelector('.topnav');
  
    // Toggle active class on click
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      topNav.classList.toggle('active');
    });
  });
  