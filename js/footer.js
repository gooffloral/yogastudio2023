let slides = 4;
if(innerWidth <= 1445 && innerWidth > 1230) // 
{
  slides = 3;
}else if(innerWidth <= 1230 && innerWidth > 827)
{
  slides = 2;
}
else
{
  slides = 1;
}
if(document.querySelector('.mySwiper'))
{
    const swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        slidesPerView: slides,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        spaceBetween: 25,
        navigation: {
          nextEl: ".teachers__next",
          prevEl: ".teachers__prev",
        },
      });
}
if(document.querySelector('.event__slider'))
{
    const swiper1 = new Swiper(".event__slider", {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        slidesPerView: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
}
