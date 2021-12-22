@@include('./swiper-bundle.min.js');
@@include('./sending-form.js');

let catalogSlides = 3;

function checkWidth() {
  if (window.outerWidth <= 768)
    catalogSlides = 1;
}

window.addEventListener('onresize', checkWidth());

// Слайдер со скидками. Первый слайдер
const stockSwiper = new Swiper('.stock-swiper', {
  // параметры слайдера
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
   el: '.swiper-pagination',
   clickable: true
 },
 slidesPerView: 1,
});

// Сладер - каталог товаров. Второй слайдер
const productSwiper = new Swiper('.product-swiper', {
  // параметры слайдера
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
   el: '.swiper-pagination',
   clickable: true
 },
 slidesPerView: catalogSlides,
});
