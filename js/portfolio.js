  /////portfolio


$('.gallery__grid-item a').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('gallery__img__active');
})

$('.gallery__grid-item').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('gallery__img__active');
  $('.gallery__grid-item').toggleClass('gallery__item__active');
  $('.gallery__blur').toggleClass('gallery__active');
  $('.entrails').toggleClass('entrails__active');
  $('.gallery__img').toggleClass('active__background');
  $('.portfolio').toggleClass('active__background2');
})



$('.entrails').on('click', function(e){
  e.preventDefault;
  $(this).removeClass('entrails__active');
  $('.gallery__grid-item a').removeClass('gallery__img__active');
  $('.gallery__active').removeClass('gallery__active');
  $('.gallery__grid-item').removeClass('gallery__item__active');
  $('.gallery__grid-item').removeClass('gallery__img__active');
  $('.gallery__img').removeClass('active__background');
  $('.portfolio').removeClass('active__background2');
})

///mobile menu swip
$('.gallery__button').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('gallery__button-active');
  $('.swip').toggleClass('swip__active')
})