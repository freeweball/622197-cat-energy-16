var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');

if (navToggle.classList.contains('page-header__toggle--close')) {
  navToggle.classList.remove('page-header__toggle--close');
  navToggle.classList.add('page-header__toggle--open');
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--open')) {
    navMain.classList.toggle('main-nav--closed');
    navToggle.classList.toggle('page-header__toggle--close');

  } else {
    navMain.classList.toggle('main-nav--closed');
    navToggle.classList.toggle('page-header__toggle--close');
  }
});
