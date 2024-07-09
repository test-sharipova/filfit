// menu
const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    body = document.querySelector('body'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        body.classList.toggle('body_fixed');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            if(window.innerWidth < 767) {
              body.classList.toggle('body_fixed');
            }
        });
    });



//слайдер до и после
$('.result__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    
   
  ]

});

//слайдер отзывы
$('.rew__slider').slick({
  infinite: true,
  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        
        arrows: false,
        dots: true
      }
    },
    
   
  ]

});

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '+0 000-000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}


//модальное окно
$('.consult').on('click', function(){
  $('.overlay, .modal').fadeIn();
});
$('.modal__close').on('click', function(){
  $('.overlay, .modal').fadeOut();
});

//подсчет суммы в корзине
var total = 0;
  $('.cart-site__inner__price span').each(function() {
    var price = parseFloat($(this).text().replace(' ', '')); 
    total += price;
  });
  
  $('.cart-site__result').text(total);