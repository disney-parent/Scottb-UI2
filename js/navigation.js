// Mobile Menu Toggle Button//
let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');


navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');

});