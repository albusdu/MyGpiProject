const owlCarouselInit = () => {
  var promoSlider = new Swiper('.owl-promo1', {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: false,
      breakpoints: {
          1200: {
              centeredSlides: false,
              allowTouchMove: false,
          }
      }
  })
}
let termsTopbar = document.querySelector('.terms-js')
termsTopbar.addEventListener('click', (e) => {
e.target.parentNode.classList.toggle('open')
})
let owlContainers = document.querySelectorAll('.owl-group__container')
if (window.innerWidth < 992) {
for (let i = 0; i < owlContainers.length; i++) {
for (let j = 0; j < owlContainers[i].children.length; j++) {
  let games = owlContainers[i].children[j]
  owlContainers[i].remove()
  document.querySelector('.owl-promo1 .swiper-wrapper').append(games)
  }
}
owlCarouselInit()
}
owlCarouselInit()