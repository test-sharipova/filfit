//menu
// const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.menu__item'),
//     body = document.querySelector('body'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active');
//         menu.classList.toggle('menu_active');
//         body.classList.toggle('body_fixed');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger_active');
//             menu.classList.toggle('menu_active');
//         });
//     });



//слайдер порядок поступления
$('.result__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    
   
  ]

});


//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '000-000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}


//модальное окно
$('.consult').on('click', function(){
  $('.overlay, .modal-consult').fadeIn();
});
$('.modal__close').on('click', function(){
  $('.overlay, .modal').fadeOut();
});