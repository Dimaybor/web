$(document).ready(function() {

  link         = $('.menu-open');
  openNav     = $('.open-nav')
  nav_link     = $('.open-nav a')
  link.click(function() {
    link.toggleClass('menu-open--active');
    openNav.toggleClass('open-nav--active');
  });
  nav_link.click(function() {
    link.toggleClass('menu-open--active');
    openNav.toggleClass('open-nav--active');
  });
  
  $(".main-menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });

});