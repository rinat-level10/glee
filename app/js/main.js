$(function () {

  $('.price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },
    onChange: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    }
  });

  $('.trendy__list').slick({
    dots: true,
    arrows: false,
  });

  $('.stamp-slider__list').slick({
    dots: false,
    arrows: false,
  });

  $('.brend-slider__list').slick({
    dots: false,
    arrows: false,
  });

  $('.detalis__input').styler();

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $('.rating').rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "12px",
  });

  var mixer = mixitup('.content__list');
  var mixer = mixitup('.desing-content__list');

});