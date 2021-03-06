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

  $('.team-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});