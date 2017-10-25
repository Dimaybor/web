$(document).ready(function() {

  link         = $('.menu-open');
  link__active = $('.menu-open--active');
  openMenu     = $('.open-nav')
  nav_link     = $('.open-nav a')
  link.click(function() {
    link.toggleClass('menu-open--active');
    openMenu.toggleClass('open-nav--active');
  });
  nav_link.click(function() {
    link.toggleClass('menu-open--active');
    openMenu.toggleClass('open-nav--active');
  });
  
});