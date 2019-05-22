var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');

if (navMain.classList.contains('main-nav--open')) {
  navMain.classList.remove('main-nav--open');
  navMain.classList.add('main-nav--closed');
  navToggle.classList.remove('page-header__toggle--close');
  navToggle.classList.add('page-header__toggle--open');
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.toggle('main-nav--closed');
    navToggle.classList.toggle('page-header__toggle--open');
    navToggle.classList.add('page-header__toggle--close');
  } else {
    navMain.classList.toggle('main-nav--closed');
    navToggle.classList.toggle('page-header__toggle--close');
    navToggle.classList.add('page-header__toggle--open');
  }
});
