let hamburger = document.querySelector('.hamburger')
let nav = document.querySelector('.top-container nav')

hamburger.addEventListener('click', function() {
  nav.classList.toggle('show-nav')
});