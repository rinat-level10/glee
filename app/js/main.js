$(function () {
  $('.trendy__list').slick({
    dots: true,
    arrows: false,
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  var mixer = mixitup('.content__list');
  var mixer = mixitup('.desing-content__list');

  $('.stamp-slider__list').slick({
    dots: false,
    arrows: false,
  });
});