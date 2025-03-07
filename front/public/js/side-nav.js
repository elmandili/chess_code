const sidenav = document.getElementById('sidenav');
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.querySelectorAll('.sidenav a');

// Toggle sidebar
toggleBtn.addEventListener('click', () => {
    sidenav.classList.toggle('collapsed');
    if (sidenav.classList.contains('collapsed')) {
        sidenav.style.width = '60px';
        document.querySelector('.main').style.marginLeft = '60px';
        toggleBtn.style.left = '70px';
    } else {
        sidenav.style.width = '250px';
        document.querySelector('.main').style.marginLeft = '250px';
        toggleBtn.style.left = '260px';
    }
});

// Handle active state for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked link
        this.classList.add('active');
    });
});