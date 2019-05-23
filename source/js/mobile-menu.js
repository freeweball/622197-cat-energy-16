var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
  navToggle.classList.toggle('page-header__toggle--close');
});
