
const navElements = document.querySelectorAll('a[href^="#"');
const navbar = document.querySelector('.navbar');
const buttons = document.querySelectorAll('button');
const itemHasMenuEls = document.querySelectorAll('.noclick');
const navMenuItems = document.querySelectorAll('.nav-menu-item');

//animation smooth
navElements.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});

//fixed navbar when scrolling
document.addEventListener('DOMContentLoaded', function () {
  const navbarHeight = navbar.clientHeight;
  const position = navbar.clientTop + navbar.clientHeight + 150;

  window.addEventListener('scroll', function () {
    if (window.scrollY > position) {
      navbar.classList.add('fixed');
      navbar.style.height = '10%';
    } else if (window.scrollY < position) {
      navbar.classList.remove('fixed');
      navbar.style.height = navbarHeight + 'px';
    }
  })
});


// navigate to /none.html for buttons has no functionality
buttons.forEach(function (button) {
  let noneURL = document.URL + 'none.html';

  button.addEventListener('click', function (e) {
    e.preventDefault();
    window.open(noneURL);
  })
});


//remove default animation of nav-item has list
itemHasMenuEls.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
  })
});

//fix scope nav-item in nav-menu
navMenuItems.forEach(function (item) {
  const navigatedURL = 
  item.querySelector('a').href;

  item.addEventListener('click', function (e) {
    e.preventDefault();
    window.open(navigatedURL);
  })
});