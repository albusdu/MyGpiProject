//WidgetSWITCH func
if(window.location.hash == '#buyBtc'){
    $('.wallet__purchase__item__button').click()
}

function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}
$('.widget-qr__address').click(function(){
    CopyToClipboard('btc-address')
    $('.successfull-copied').addClass('show')
    setTimeout(function(){
        $('.successfull-copied').removeClass('show')
    },1500)
})
function widgetSwitch() {
    let blocks = $('.deposit-widget__bonus__dropdown').children()
    let checked = $('.widgetAmount-switch:checked').length
    if(checked == 0){
        $('.widgetAmount-switch').parent().next().removeClass('active')
        $('.widgetAmount-switch').parent().prev().addClass('active')
        $('.deposit-widget__amount__input').css('padding', '2.5px 125px 2.5px 27px')
        $('.push-deposit__amount__input').css('padding', '10px 110px 2.5px 27px');
        $('.deposit-widget__amount__input,.push-deposit__amount__input').val('100')
        $('.deposit-widget__amount__valute,.push-deposit__amount__valute').text('€')
        $('.deposit-widget__btn').attr('for', 'widget-payments')
        blocks.each(function(){
            if ($(this).index() == 0){
                $(this).attr('data-btn','play with 100€')
                
            }else if ($(this).index() == 1){
                $(this).attr('data-btn','play with 100€ + 300 freespins')
            }else if ($(this).index() == 2){
                $(this).attr('data-btn','play with 100€ + 100 freespins')
            }
            $('.deposit-widget__btn').text($(this).attr('data-btn'))
        })
    }else{
        $('.widgetAmount-switch').parent().prev().removeClass('active')
        $('.widgetAmount-switch').parent().next().addClass('active')
        $('.deposit-widget__amount__input,.push-deposit__amount__input').css('padding', '2.5px 125px 2.5px 0')
        $('.push-deposit__amount__input').css('padding', '10px 110px 2.5px 10px');
        $('.deposit-widget__amount__input,.push-deposit__amount__input').val('0.008')
        $('.deposit-widget__amount__valute,.push-deposit__amount__valute').text('')
        $('.deposit-widget__btn').attr('for', 'widget-qr')
        blocks.each(function(){
            if ($(this).index() == 0){
                $(this).attr('data-btn','play with 0.008btc')
            }else if ($(this).index() == 1){
                $(this).attr('data-btn','play with 0.008btc + 300 freespins')
            }else if ($(this).index() == 2){
                $(this).attr('data-btn','play with 0.008btc + 100 freespins')
            }
            $('.deposit-widget__btn').text($(this).attr('data-btn'))
        })
    }
   }
   $('.widgetAmount-switch').click(function(){
    widgetSwitch()
   })
   $('.deposit-widget__amount__switch__valute,.push-deposit__amount__switch__valute').click(function(){
    $('.widgetAmount-switch').click()
    widgetSwitch()
   })
   widgetSwitch()
   $('.deposit-widget__bonus__clickable-box').click(function(){
    $(this).parent().toggleClass('open')
   })
   $('.deposit-widget__bonus__dropdown').children().click(function(){
    $('.deposit-widget__bonus__dropdown').children().removeClass('is-active')
    $(this).addClass('is-active')
    $('.deposit-widget__bonus__clickable-box').html('')
    $(this).clone().appendTo('.deposit-widget__bonus__clickable-box')
    $(this).parent().parent().removeClass('open')
    $('.deposit-widget__btn').text($(this).attr('data-btn'))
   })
   $('.deposit-widget .deposit-widget__bonus__block__info').click(function(e){
    e.stopPropagation();
    let left = $('.deposit-widget').offset().left + $('.deposit-widget').width() + 30
    let top = $('.deposit-widget').offset().top
    $('.bonus-info').removeClass('fixedWidget')
    $('.bonus-info').toggleClass('show')
    $('.bonus-info').css({
        'left': `${left}px`,
        'top': `${top}px`,
    })
   })
   $('.steps__container .deposit-widget__bonus__block__info,.bonus-list__item__details').click(function(e){
    e.stopPropagation();
    let left = $('.bonus-list').offset().left
    let top = $('.bonus-list').offset().top + $('.bonus-list').height() + $('.bonus-termsCond').height() - $('.bonus-info--welcome').height()
    let width = $('.bonus-list').width()
    $('.bonus-info').removeClass('fixedWidget')
    $('.bonus-info').toggleClass('show')
    $('.bonus-info').css({
        'left': `${left}px`,
        'top': `${top}px`,
        'width': `${width}px`,
    })
   })
   $('.deposit-widget-sm .deposit-widget__bonus__block__info').click(function(e){
    e.stopPropagation();
    $('.bonus-info').toggleClass('show')
   })
   $('.push-deposit .deposit-widget__bonus__block__info').click(function(e){
    e.stopPropagation();
    let left = $('.push-deposit .deposit-widget__bonus').offset().left + $('.push-deposit .deposit-widget__bonus').width() / 2 - $('.bonus-info').width() / 2; 
    $('.bonus-info').toggleClass('show fixedWidget')
    $('.bonus-info').css({
        'left': `${left}px`,
    })
   })
   $('.bonus-info__top__close').click(function(){
    $('.bonus-info').removeClass('show')
   })
   $('.push-deposit-sm__switch__item').click(function(){
    $('.push-deposit-sm__switch__item').removeClass('active')
    $(this).addClass('active')
    if($('.push-deposit-sm__switch__item--eur').hasClass('active')){
        $('.push-deposit-sm__amount__valute').show()
        $('.push-deposit-sm__amount__input').css('padding', '15px 0 0 15px');
        $('.push-deposit-sm__amount__input').val('50')
    }else if($('.push-deposit-sm__switch__item--btc').hasClass('active')){
        $('.push-deposit-sm__amount__input').val('0.008')
        $('.push-deposit-sm__amount__input').css('padding', '15px 0 0 0px');
        $('.push-deposit-sm__amount__valute').hide()
    }
   })
   //widgetClicks
$('.widget-link').click(function(){
    let attr = $(this).attr('for');
    let depositLeft = $('.deposit-widget').offset().left
    let depositTop = $('.deposit-widget').offset().top
    if($(window).width() > 768 && attr != 'deposit-widget'){
        $(`.${attr}`).css({
            'top': depositTop,
            'left': depositLeft
        })
    }
    $('.widget-item').removeClass('show');
    $(`.${attr}`).addClass('show');
})
$('.bonus-info .bg-overlay').click(function(){
    $(this).parent().removeClass('show')
})
$('.push-deposit__close').click(function(){
    $('.push-deposit').hide()
})
$('.push-deposit-sm__close').click(function(){
    $('.push-deposit-sm').hide()
})
//WidgetSWITCH func
//AFFiliate landing
//affTermsAndConditions
$('.bonus-termsCond__title').click(function(){
    $('.bonus-termsCond__content').show()
})
$('.bonus-termsCond__content__close').click(function(){
    $('.bonus-termsCond__content').hide()
})
$('.steps__container__faq__dropdown__title').click(function(){
    if($(this).parent().hasClass('open')){
        $(this).parent().removeClass('open')
    }else{
        $('.steps__container__faq__dropdown').removeClass('open')
        $(this).parent().toggleClass('open')
    }
})
$('.deposit-link').click(function(){
    let attr = $(this).attr('for')
    $('.deposit-item').hide()
    $(`.${attr}`).show();
})
$('#currencyList .dropdown__item').click(function(e){
    checkCurrency(e)
})
function checkCurrency(e){
    let el = e.target
    if(el.innerText == 'EURO'){
        $('.steps__container__navigation__complete').hide()
        $('.steps__container__navigation__next').show()
    }else if(el.innerText == 'BITCOIN'){
        $('.steps__container__navigation__next').hide()
        $('.steps__container__navigation__complete').show()
        $('.steps__container__navigation__complete').attr('href', './welcome-deposit.html#crypto-payment')
    }
}
console.log(window.location.hash)
if(window.location.hash == '#crypto-payment'){
    $('.deposit-item').hide()
    $(`.crypto-payment`).show();
}
//affTermsAndConditions
//AFFiliate landing
//buttons ripple effect
function createRipple(event,left,top,ePY,ePX) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${ePX - left - radius}px`;
    circle.style.top = `${ePY - top - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
}
$('.btn-ripple').click(function(e){
    let left = $(this).offset().left
    let top = $(this).offset().top
    let ePX = e.pageX
    let ePY = e.pageY
    createRipple(e,left,top,ePY,ePX)
})

$('.promo_full-section_terms_title').click(function(){
    $(this).children('.icon').toggleClass('open')
    $(this).next('.promo_full-section_terms_body').slideToggle()
   })
//showGames Dropdwon
$('.showGames-dropdown__header').click(function(){
    $(this).parent().toggleClass('open')
})
//showGames Dropdwon
//registerBtn 
$('.register-btn').click(function(){
    $('.signUp-body').fadeOut(0)
    $('.signUp-body--success').fadeIn()
})
//registerBtn
var bannerSlider = new Swiper('#bannerSlider', {
    navigation: {
        nextEl: '.bannerSliderNext',
        prevEl: '.bannerSliderPrev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    clickable: true,
});

var mainPagebannerSlider = new Swiper('#mainPagebannerSlider', {
    navigation: {
        nextEl: '.mainPagebannerSliderNext',
        prevEl: '.mainPagebannerSliderPrev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    clickable: true,
});
if($(window).width() > 768){
    mainPagebannerSlider.on('slideChange', function (swiper) {
        if(swiper.activeIndex == 0){
            $('.deposit-widget').addClass('show')
        }else{
            $('.deposit-widget').removeClass('show')
        }
    });
}
//navigation currency dropdown
$('.currency-btn .bt-disabled-b').click(function(){
    $(this).parent().toggleClass('open')
})
//navigation currency dropdown
//Categories
$('.gCategories-container__item').click(function(e){
    e.stopPropagation();
    $(this).toggleClass('active')
})
$('.open-providers').click(function(){
    $('.open-categories').removeClass('active')
    $('.categories-nav').removeClass('open')
    $(this).parent().find('.a-providers').toggleClass('open')
})
$('.open-categories').click(function(){
    $('.open-providers').removeClass('active')
    $('.a-providers').removeClass('open')
    $(this).parent().find('.categories-nav').toggleClass('open')
})
let totalWidth = 0;
$('.gCategoris-top li').each(function(){
    totalWidth += $(this).width()
    if(totalWidth > $('.gCategoris-top').width()){
        $('.a-providers').prepend($(this))
    }
})
if($(window).width() < 1200){
    $($(".gCategoris-top li").get().reverse()).each(function(){
        // $('.a-providers').prepend($(this))
        $('.a-providers').prepend($(this))
    })
}
//Categories
var trendingSlider = new Swiper('#trendingSlider', {
    slidesPerView: 'auto',
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.trendingSliderNext',
        prevEl: '.trendingSliderPrev',
    },
})
var recentlyPlayedSlider = new Swiper('#recentlyPlayedSlider', {
    slidesPerView: 'auto',
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.recentlyPlayedNext',
        prevEl: '.recentlyPlayedPrev',
    },
})
var slotsSlider = new Swiper('#slotsSlider', {
    slidesPerView: 'auto',
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.slotsSliderNext',
        prevEl: '.slotsSliderPrev',
    },
})
var newSlider = new Swiper('#newSlider', {
    slidesPerView: 'auto',
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.newSliderNext',
        prevEl: '.newSliderPrev',
    },
})
var baccaratSlider = new Swiper('#baccaratSlider', {
    slidesPerView: 'auto',
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.baccaratSliderNext',
        prevEl: '.baccaratSliderPrev',
    },
})
var blackjackSlider = new Swiper('#blackjackSlider', {
    slidesPerView: 'auto',
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.blackjackSliderNext',
        prevEl: '.blackjackSliderPrev',
    },
})

var juicyStakesSlider = new Swiper('#singlePromoSlider', {
    slidesPerView: 2.3,
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.singlePromoSliderNext',
        prevEl: '.singlePromoSliderPrev',
    },
    breakpoints: {
        767: {
          slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1480: {
            slidesPerView: 5,
        }
    }
})

var easterPromoSlider = new Swiper('#singlePromoSlider2', {
    slidesPerView: 2.3,
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.singlePromoSliderNext',
        prevEl: '.singlePromoSliderPrev',
    },
    breakpoints: {
        767: {
          slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1480: {
            slidesPerView: 5,
        }
    }
})

var aprilQuestPromoSlider = new Swiper('#aprilQuestPromoSlider', {
    slidesPerView: 2.3,
    draggable: true,
    freeMode: true,
    loop: false,
    breakpoints: {
        576: {
          slidesPerView: 3.4,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        }
    }
})

var clashOfBooksPromoSlider = new Swiper('#clashOfBooksPromoSlider', {
    slidesPerView: 2.3,
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.singlePromoSliderNext',
        prevEl: '.singlePromoSliderPrev',
    },
    breakpoints: {
        767: {
          slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1480: {
            slidesPerView: 5,
        }
    }
})

var catSlider = new Swiper('#catSlider', {
    slidesPerView: 'auto',
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.categoriesSliderNext',
        prevEl: '.categoriesSliderPrev',
    },
    // breakpoints: {
    //     321: {
    //       slidesPerView: 3.5,
    //     },
    //     576: {
    //       slidesPerView: 4,
    //     },
    //     767: {
    //       slidesPerView: 5,
    //     },
    //     991: {
    //         slidesPerView: 6,
    //     },
    //     1400: {
    //         slidesPerView: 7,
    //     },
    //     1600: {
    //         slidesPerView: 8,
    //     }
    // }
})
var gameProvidersSlider = new Swiper('#gameProvidersSlider', {
    slidesPerView: 2.5,
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.gameProvidersSliderNext',
        prevEl: '.gameProvidersSliderPrev',
    },
    breakpoints: {
        321: {
          slidesPerView: 1.8,
        },
        576: {
          slidesPerView: 2.5,
        },
        767: {
          slidesPerView: 3.5,
        },
        991: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        }
    }
})
var bannerSlider2 = new Swiper('#bannerSlider2', {
    slidesPerView: 1.3,
    spaceBetween: 30,
    draggable: true,
    freeMode: true,
    arrows: false,
    loop: false,
    // navigation: {
    //     nextEl: '.bannerNext',
    //     prevEl: '.bannerPrev',
    // },
    breakpoints: {
        768: {
            slidesPerView: 1.8,
        },
        991: {
            slidesPerView: 2.2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
})
var rtpSlider = new Swiper('#rtpSlider', {
    slidesPerView: 1,
    spaceBetween: 15,
    draggable: true,
    freeMode: true,
    loop: false,
    navigation: {
        nextEl: '.rtpSliderNext',
        prevEl: '.rtpSliderPrev',
    },
    breakpoints: {
        300: {
          slidesPerView: 1.2,
        },
        767: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
})
var promoCarousel = new Swiper('.promo-carousel', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: false,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            centeredSlides: false,
            allowTouchMove: false,
        }
    }
})
var nonDepositStepsSwiper = new Swiper('.non-deposit-steps-swiper', {
    width: 204,
    centeredSlides: true,
    freeMode: true,
    spaceBetween: 85,
    loop: false,
    breakpoints: {
        992: {
            centeredSlides: false,
            allowTouchMove: false,
        }
    }
})

if(document.querySelector('.promotion-landing') != null || document.querySelector('.non-deposit-bonus') != null){
    let terms = document.querySelector('.terms-js')
    terms.addEventListener('click', (e)=>{
        e.target.parentNode.classList.toggle('open')
    })
}

var coinSplashSlider = new Swiper('.coinsSplash-promo-slider__swiper', {
    // slidesPerView: 'auto',
    slidesPerView: 2.7,
    // centeredSlides: true,
    spaceBetween: 5,
    draggable: true,
    freeMode: true,
    grabCursor: true,
    loop: false,
    navigation: {
        nextEl: '.coinsSplash-promo-slider__swiper-next',
        prevEl: '.coinsSplash-promo-slider__swiper-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 3.7,
          },
          576: {
            slidesPerView: 4.2,
          },
          767: {
            slidesPerView: 5,
          }
        //   991: {
        //       slidesPerView: 5,
        //   }
        // 1200: {
        //     centeredSlides: false,
        // }
    }
})

var lovecarnavalSlider = new Swiper('.loveCarnaval-promo-slider__swiper', {
    slidesPerView: 2.7,
    spaceBetween: 5,
    draggable: true,
    freeMode: true,
    grabCursor: true,
    loop: false,
    navigation: {
        nextEl: '.loveCarnaval-promo-slider__swiper-next',
        prevEl: '.loveCarnaval-promo-slider__swiper-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 3.7,
          },
          576: {
            slidesPerView: 4.2,
          },
          767: {
            slidesPerView: 5,
          }
    }
})

var emperorsWealthSlider = new Swiper('.emperorsWealth-promo-slider__swiper', {
    slidesPerView: 2.7,
    spaceBetween: 5,
    draggable: true,
    freeMode: true,
    grabCursor: true,
    loop: false,
    navigation: {
        nextEl: '.emperorsWealth-promo-slider__swiper-next',
        prevEl: '.emperorsWealth-promo-slider__swiper-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 3.7,
          },
          576: {
            slidesPerView: 4.2,
          },
          767: {
            slidesPerView: 5,
          }
    }
})

var emperorsWealthStepsSlider = new Swiper('.main__container__emperorsWealth-promo__steps', {
    slidesPerView: 2.3,
    // spaceBetween: 5,
    draggable: true,
    freeMode: true,
    grabCursor: true,
    loop: false,
    breakpoints: {
        //   480: {
        //     slidesPerView: 3.7,
        //   },
        //   576: {
        //     slidesPerView: 4.2,
        //   },
        576: {
            slidesPerView: 3,
            draggable: false,
            freeMode: false,
            grabCursor: false,
          }
    }
})

// function slideemperorsWealthSteps(){
//     var width = $(window).width();
//     $(window).resize(function () {
//         if (width <= 720) {
//             $('.steps-swiper-wrapper').addClass('swiper-wrapper');
//             $('.main__container__emperorsWealth-promo__steps__step').addClass('swiper-slide');
//         }
//     });
// }

// slideemperorsWealthSteps();

var leaderBoardSlider = new Swiper('.loveCarnaval__leaderboard_slider', {
    slidesPerView: 3,
    spaceBetween: 5,
    draggable: true,
    freeMode: true,
    grabCursor: true,
    loop: false,
    navigation: {
        nextEl: '.loveCarnaval__leaderboard_slider-next',
        prevEl: '.loveCarnaval__leaderboard_slider-prev',
    },
    breakpoints: {
          769: {
            slidesPerView: 4,
          }
    }
})

var leaderBoardSlider2 = new Swiper('.landing__leaderboard_slider', {
    slidesPerView: 3,
    spaceBetween: 5,
    draggable: true,
    freeMode: true,
    grabCursor: true,
    loop: false,
    navigation: {
        nextEl: '.landing__leaderboard_slider-next',
        prevEl: '.landing__leaderboard_slider-prev',
    },
    breakpoints: {
          769: {
            slidesPerView: 4,
          }
    }
})

$('.main__container__coinsSplash-promo__terms__topbar').click(function(){
    $(this).parent().toggleClass('open')
})

$('.promo__terms__topbar').click(function(){
    $(this).parent().toggleClass('open')
})

function setScrollbars() {
    $('.search__result-container').overlayScrollbars({
        className: "os-theme-dark",
        paddingAbsolute: true,
        scrollbars: {
            clickScrolling: true
        }
    });
    $('.filter-scroller').overlayScrollbars({
        className: "os-theme-dark",
        paddingAbsolute: true,
        scrollbars: {
            clickScrolling: true
        }
    });
    $('.tbl').overlayScrollbars({
        className: "os-theme-dark",
        paddingAbsolute: true,
        scrollbars: {
            clickScrolling: true
        }
    });
}

//flip
$('.flip-card').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    }else{
        $('.flip-card').removeClass('active')
        $(this).addClass('active')
    }
})

//depositAmountWidget
$('.widget-form__body__deposit-cont__item').click(function(){
    $('.widget-form__body__deposit-cont__item').removeClass('active')
    $(this).addClass('active')
})
//depositAmountWidget

function intTel() {
    var accInput = document.querySelector("#accMobileNumber");
    var depositInput = document.querySelector("#depositMobileNumber");
    var modalInput = document.querySelector("#modalMobileNumber");
    var widgetInput = document.querySelector("#widgetMobileNumber");

    if (accInput) {
        window.intlTelInput(accInput, {
            autoPlaceholder: "on",
            formatOnDisplay: false,
            placeholderNumberType: "MOBILE",
            separateDialCode: true,
            utilsScript: "assets/vendors/js/utils.js",
        });
    }

    if (widgetInput) {
        window.intlTelInput(widgetInput, {
            autoPlaceholder: "on",
            formatOnDisplay: false,
            placeholderNumberType: "MOBILE",
            separateDialCode: true,
            utilsScript: "assets/vendors/js/utils.js",
        });
    }

    if (depositInput) {
        window.intlTelInput(depositInput, {
            autoPlaceholder: "on",
            formatOnDisplay: false,
            placeholderNumberType: "MOBILE",
            separateDialCode: true,
            utilsScript: "assets/vendors/js/utils.js",
        });
    }

    if (modalInput) {
        window.intlTelInput(modalInput, {
            autoPlaceholder: "on",
            formatOnDisplay: false,
            placeholderNumberType: "MOBILE",
            separateDialCode: true,
            utilsScript: "assets/vendors/js/utils.js",
        });
    }
}

//gigi
const dropdownToggler = () => {
    let toggler = document.querySelectorAll('.dropdown--toggler')
    toggler.forEach((item) => {
        item.addEventListener('click', () => {
            let dropdowns = document.querySelectorAll('.dropdown')
            item.parentElement.classList.toggle('open')
            dropdowns.forEach((elem) => {
                if (
                item.parentElement.getAttribute('id') ===
                elem.getAttribute('data-for')
                ) {
                    elem.classList.toggle('open')
                }
            })

        })
    })
    $(document).on("click", function (e) {
        if ($(e.target).is(".dropdown--toggler") === false) {
            $(".dropdown__elem").removeClass("open");
            $(".dropdown__elem .dropdown").removeClass("open");
        }
    });
}
dropdownToggler()
const selectDropdown = () => {
    let dropdownItems = document.querySelectorAll('.dropdown__item')
    dropdownItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        let items = e.target.parentElement.children
        for (let i = 0; i < items.length; i++) {
          if (items[i].classList.contains('dropdown__item--active')) {
            items[i].classList.remove('dropdown__item--active')
          }
        }
        let dropdownElems = document.querySelectorAll('.dropdown__elem')
        dropdownElems.forEach((elem) => {
          if (
            elem.getAttribute('id') ===
            item.parentElement.parentElement.getAttribute('data-for')
          ) {
            e.target.classList.add('dropdown__item--active')
            let selectedInfo = elem.children[0].children[0]
            selectedInfo.innerHTML = e.target.innerHTML
            selectedInfo.setAttribute('value', e.target.innerHTML)
            elem.classList.remove('open')
            e.target.parentElement.parentElement.classList.remove('open')
          }
        })
      })
    })
}
selectDropdown()
//jetx terms
$('.jetx .open-terms').click(function(){
    $(this).toggleClass('open')
    $('.jetx .terms').slideToggle(500)
})
const swipeWallet = () =>{
    document.getElementById('walletSlider').addEventListener('touchstart', handleTouchStart, false);        
    document.getElementById('walletSlider').addEventListener('touchmove', handleTouchMove, false);
    var xDown = null;                                                        
    var yDown = null;
    function getTouches(evt) {
      return evt.touches ||           
             evt.originalEvent.touches;
    }                                                     
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }
        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                document.getElementById('walletSlider').classList.add('left')
                document.querySelector('.choose-wallet__right__item--btc').classList.remove('active')
                document.querySelector('.choose-wallet__right__item--euro').classList.add('active')
            } else {
                document.getElementById('walletSlider').classList.remove('left')
                document.querySelector('.choose-wallet__right__item--euro').classList.remove('active')
                document.querySelector('.choose-wallet__right__item--btc').classList.add('active')
            }                       
        }
        xDown = null;
        yDown = null;                                             
    };
}
if(document.getElementById('walletSlider') != null){
    if(window.innerWidth < 768){
        swipeWallet();
    }
    window.addEventListener('resize', ()=>{
        if(window.innerWidth < 768){
            setTimeout(()=>{
                swipeWallet();
            },300)
        }
    })
}
const toggleMore = () =>{
    let togglers = document.querySelectorAll('.tr-wallet__content__table__content__row__header')
    togglers.forEach(i=>{
        i.addEventListener('click', ()=>{
            i.parentElement.classList.toggle('tr-wallet__content__table__content__row--open')
        })
    })
}
toggleMore()
const toggleWallet = ()=>{
    document.querySelector('.choose-wallet__right__item--btc').addEventListener('click', ()=>{
        document.querySelector('.euro-wallet').classList.remove('show')
        document.querySelector('.btc-wallet').classList.add('show')
        document.querySelector('.choose-wallet__right__item--euro').classList.remove('active')
        document.querySelector('.choose-wallet__right__item--btc').classList.add('active')
    })
    document.querySelector('.choose-wallet__right__item--euro').addEventListener('click', ()=>{
        document.querySelector('.btc-wallet').classList.remove('show')
        document.querySelector('.euro-wallet').classList.add('show')
        document.querySelector('.choose-wallet__right__item--btc').classList.remove('active')
        document.querySelector('.choose-wallet__right__item--euro').classList.add('active')
    })
    let switches = document.querySelectorAll('.choose-wallet__right__item__switch')
    switches.forEach(i=>{
        i.addEventListener('click',(e)=>{
            e.stopPropagation()
        })
    })
}
if(document.querySelector('.choose-wallet__right__item--btc') != null){
    if(window.innerWidth > 768){
        toggleWallet();
    }
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 768){
            setTimeout(()=>{
                toggleWallet();
            },300)
        }
    })
}
//giig

function bsModalBodyFix() { //prevent body scroll on modal show
    $('.modal').on('hidden.bs.modal', function() {
        if ($(".modal:visible").length > 0) {
            setTimeout(function() {
                $('body').addClass('modal-open');
            }, 200)
        }
    });
}

function favouriteStars() {
    $('.cards__item-favourite').click(function() {
        $(this).toggleClass('active')
    })
}

function sidebar() {
    $('.sidebar__list-li a').click(function() {
        $('.sidebar__list-li a').removeClass('active')
        $(this).addClass('active');
    })

    function close() {
        $('.page').removeClass('active');
        $('.navbar .logo').show();
    }

    function open() {
        $('.page').addClass('active');
        $('.navbar .logo').hide();
    }

    $('.navbar .logo__btn').click(function() {
        open();
        setTimeout(()=>{
            mainPagebannerSlider.update()
        },250)
    })
    $('.sidebar .logo__btn').click(function() {
        close();
        setTimeout(()=>{
            mainPagebannerSlider.update()
        }, 250)
    })

    $('.sidebar-overlay').click(function() {
        close();
    })

    function checkWidth() {
        let windowSize = $(window).width();

        if (windowSize <= 1200) {
            close();
        } else {
            // open();
        }
    }

    checkWidth();
    $(window).resize(checkWidth);

    $('.sidebar__btn').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().parent().find('.sidebar__list-li').stop().slideToggle('fast');
    })

    $('.theme').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('dark');
        if ($(this).hasClass('dark')) {
            $(this).find('label').text('AM');
            $('body').removeClass('dark-mode');
        } else {
            $(this).find('label').text('PM');
            $('body').addClass('dark-mode');
        }
    })

    $('.lang').click(function() {
        $(this).toggleClass('active');
        $(this).find('.sidebar__btn').toggleClass('active');
        $(this).closest('.sidebar').find('.lang-container').slideToggle('fast');
    })
}

function navbar() {
    $('.user__nav-btn').click(function(e) {
        e.preventDefault();
        $(this).parent().find('.user__nav-dropdown-top').toggle();
    })
    $('.user__nav-notifications-btn').click(function(e) {
        e.preventDefault();
        $(this).parent().find('.user__nav-notifications-dropdown').toggle();
    })
    $('.user__nav-lang-btn').click(function(e) {
        e.preventDefault();
        $(this).parent().find('.user__nav-lang-dropdown-list').toggle();
    })
    $('.user__nav-lang-dropdown-list-item').click(function() {
        $('.user__nav-lang-dropdown-list-item').removeClass('active')
        $(this).addClass('active');
    })
    
    $(".userside-dropdown").click(function(e) {
        e.stopPropagation();
    })
    $(".funds-dropdown").click(function(e) {
        e.stopPropagation();
    })
    $('.search__result').click(function(e) {
        e.stopPropagation();
    })

    $('.filter__btn-placeholder').click(function() {
        let selector = $(this).closest('.filter__btn');

        if (selector.hasClass('active')) {
            selector.removeClass('active');
        } else {
            $('.filter__btn-placeholder').each(function(index, item) {
                $(item).closest('.filter__btn').removeClass('active');
            });
            selector.addClass('active');
        }
    })

    $('.search__result-navbar .cls').click(function(e) {
        e.preventDefault();
        $(this).parent().parent().hide();
    })
    $('.search__input input').on("focus", function(e) {
        e.stopPropagation();
        $(this).parent().parent().find('.search__result').show();
    })

    $('body', 'html').click(function(event) {
        function hider(btn, element) {
            if (btn !== event.target && !btn.has(event.target).length) {
                element.hide();
            }
        }


        hider($(".user__nav-btn"), $(".userside-dropdown"));
        hider($(".user__nav-funds_btn"), $(".funds-dropdown"));
        hider($('.search__input'), $('.search__result'));
    })

    $('#search-sm').click(function(e) {
        e.preventDefault();
        $('.search-sm').toggleClass('active');
    })

    $('.search-sm__header .back-btn').click(function(e) {
        e.preventDefault();
        $('.search-sm').removeClass('active');
    })

    $('.user__nav-search-btn').click(function(e) {
        e.preventDefault();
        $('.search-sm').toggleClass('active');
    })

    $('.bottom__navbar-notifications-item').click(function(e) {
        e.preventDefault();
        $('.bottom__navbar-notifications-content').toggleClass('active');
    })
    $('.cards__info-icon').click(function(e) {
        e.preventDefault();
        $('.cards__info_game-content').toggleClass('active');
    })
    $('.cards__info_game-header .cards__info_game-close').click(function(e) {
        e.preventDefault();
        $('.cards__info_game-content').removeClass('active');
    })
    $('.widget-form_info-header-close-bg').click(function(e) {
        e.preventDefault();
        $('.widget-form_info-container').removeClass('active');
    })
}

function clickers() {
    $('.payments__card-body_choose-item-btn').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('selected');
    })
    $('.section_rtp-select_btn-categories').click(function(e) {
        e.preventDefault();
        $('.section_rtp-select_btn-categories-container').toggleClass('active');
    })
    $('.section_rtp-select_btn-RTP').click(function(e) {
        e.preventDefault();
        $('.section_rtp-select_btn-RTP-container').toggleClass('active');
    })
    $('.section_rtp-select_btn-providers').click(function(e) {
        e.preventDefault();
        $('.section_rtp-select_btn-providers-container').toggleClass('active');
    })
    $('.section_rtp-select_btn-orderBy').click(function(e) {
        e.preventDefault();
        $('.section_rtp-select_btn-orderBy-container').toggleClass('active');
    })

    $('.section_rtp-select_btn-icon-bg').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('selected');
    })
    $('.kyc_verification-info-btn').mouseover(function(e) {
        e.preventDefault();
        $('.kyc_verification-info').addClass('active');
    })
    $('.kyc_verification-info-btn').mouseout(function(e) {
        e.preventDefault();
        $('.kyc_verification-info').removeClass('active');
    })

    $('.b-form__drag-uploaded__card-close').click(function(e) {
        e.preventDefault();
        $('.b-form__drag-uploaded__card-pending').toggleClass('remove');
    })
    $('.register_terms-link').click(function(e) {
        e.preventDefault();
        $('.banner__registration').toggleClass('terms-active');
        $('.banner__registration_modal-lg').toggleClass('terms-active');
    })
    $('.withdrawModal_body_payment-visa').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).removeClass('notActive');
        $('.withdrawModal_body-right-first').addClass('active');
        $('.withdrawModal_body-right-first').removeClass('notActive');
        $('.withdrawModal').addClass('active');
    })
    $('.withdrawModal_body_payment-ecopayz').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.withdrawModal_body-right-first').removeClass('active');
        $('.withdrawModal_body-right-first').addClass('notActive');
        $('.withdrawModal_body-right-second').addClass('active');
        $('.withdrawModal').addClass('active');
    })
    $('.withdrawModal_body_btn-next').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.withdrawModal_body-right').addClass('active');
        $('.withdrawModal').addClass('active');
    })
    $('.withdrawModal_body_header-arrow').click(function(e) {
        e.preventDefault();
        $('.withdrawModal_body-right').removeClass('active');
        $('.withdrawModal').removeClass('active');
    })
    $('.withdrawModal_body_payment_change_btn').click(function(e) {
        e.preventDefault();
        $('.withdrawModal_body-right').removeClass('active');
        $('.withdrawModal').removeClass('active');
    })
    $('.banner__registration-btn').click(function(e) {
        e.preventDefault();
        $('.banner__registration').removeClass('terms-active');
        $('.banner__registration_modal-lg').removeClass('terms-active');
    })
    $('#oldPromoBtn').click(function() {
        $(this).parent().addClass('loaded');
        $(this).remove();
        $('.promotions-body__old').fadeIn();
    })

    $('.faq-list__header').click(function() {
        let selector = $(this).parent();

        if (selector.hasClass('active')) {
            selector.removeClass('active');
        } else {
            $('.notify__header').each(function(index, item) {
                $(item).parent().removeClass('active');
            });
            selector.addClass('active');
        }
    })

    $('.provider-btn').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    })

    $('.cards-header__btn').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).closest('.cards-header').find('.cards-header__dropdown').slideDown('fast');
        } else {
            $(this).closest('.cards-header').find('.cards-header__dropdown').slideUp('fast');
        }
    })

    $('.confirm').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().parent().find('.b-form__sms').fadeIn('fast');

        $('.b-form__sms').click(function(e) {
            e.stopPropagation();
        })

        $('body', 'html').click(function() {
            $('.b-form__sms').fadeOut('fast');
        })
    });

    $('.b-form__eye').mousedown(function() {
        $(this).parent().find('input').attr('type', 'text');
        $(this).html('');
        $(this).append('<svg class="icon">\n' + '<use xlink:href="#eye-hidden"></use>\n' + '</svg>')
    }).mouseup(function() {
        $(this).parent().find('input').attr('type', 'password');
        $(this).html('');
        $(this).append('<svg class="icon">\n' + '<use xlink:href="#eye"></use>\n' + '</svg>')
    });
    $(".b-form__eye").bind('touchstart', function(){
        $(this).parent().find('input').attr('type', 'text');
        $(this).html('');
        $(this).append('<svg class="icon">\n' + '<use xlink:href="#eye-hidden"></use>\n' + '</svg>')
    }).bind('touchend', function(){
        $(this).parent().find('input').attr('type', 'password');
        $(this).html('');
        $(this).append('<svg class="icon">\n' + '<use xlink:href="#eye"></use>\n' + '</svg>')
    });

    $('#signUp-password').focusin(function() {
        $(this).parent().parent().find('.password-must').addClass('active');
    }).focusout(function() {
        if ($(this).val().length <= 0) {
            $(this).parent().parent().find('.password-must').removeClass('active');
        }
    })

    $('#change-password').focusin(function() {
        $(this).parent().parent().find('.password-must').addClass('active');
    }).focusout(function() {
        if ($(this).val().length <= 0) {
            $(this).parent().parent().find('.password-must').removeClass('active');
        }
    })
    $('#confirm-password').focusin(function() {
        $(this).parent().parent().find('.password-must').addClass('active');
    }).focusout(function() {
        if ($(this).val().length <= 0) {
            $(this).parent().parent().find('.password-must').removeClass('active');
        }
    })
    $('#newPassword').focusin(function() {
        $(this).parent().parent().find('.password-must').addClass('active');
    }).focusout(function() {
        if ($(this).val().length <= 0) {
            $(this).parent().parent().find('.password-must').removeClass('active');
        }
    })

    var myInput = document.getElementById("newPassword");
    var myInput = document.getElementById("confirm-password");
    var myInput = document.getElementById("change-password");
    var myInput = document.getElementById("signUp-password");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    myInput.onkeyup = (function() {
        var lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate length
        if (myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    })

    $('#widget-signUp-password').focusin(function() {
        $(this).parent().parent().find('.password-must').addClass('active');
    }).focusout(function() {
        if ($(this).val().length <= 0) {
            $(this).parent().parent().find('.password-must').removeClass('active');
        }
    })


    $('.tip-btn').click(function(e) {
        e.stopPropagation();
        $(this).closest('.tip').find('.tip-container').fadeIn('fast');
    });
    $('.tip-container').click(function(e) {
        e.stopPropagation();
    })
    $('body', 'html').click(function() {
        $('.tip-container').fadeOut('fast');
    });

    $('.b-form__amount-btn').click(function() {
        $('.b-form__amount-btn').removeClass('active');
        $(this).addClass('active');
        let amount = $(this).text();
        let amountInt = parseInt(amount, 10);
        $(this).closest('.payment-form').find('input[type=number]').val(amountInt);
    })


    $('.payments__card-header').click(function() {
        let selector = $(this).closest('.payments__card');

        if (selector.hasClass('active')) {
            selector.removeClass('active');
        } else {
            $('.payments__card-header').each(function(index, item) {
                $(item).closest('.payments__card').removeClass('active');
            });
            selector.addClass('active');
        }
    })
}



function userProfile() {
    function tabLocation() { //redirect url to current tab
        let url = location.href.replace(/\/$/, "");

        if (location.hash) {
            const hash = url.split("#");
            $('#profile-tabs a[href="#' + hash[1] + '"]').tab("show");
            url = location.href.replace(/\/#/, "#");
            history.replaceState(null, null, url);
            setTimeout(() => {
                $(window).scrollTop(0);
            }, 400);
        }

        $('a[data-toggle="tab"]').on("click", function() {
            let newUrl;
            const hash = $(this).attr("href");
            if (hash == "#balance") {
                newUrl = url.split("#")[0];
            } else {
                newUrl = url.split("#")[0] + hash;
            }
            newUrl += " ";
            history.replaceState(null, null, newUrl);
        });
    };

    tabLocation();

    $(window).on('hashchange', function() {
        tabLocation();
        if (window.location.hash == '#deposit-now') {
            $('#depositModal').modal('toggle');
        }
        // if (window.location.hash == '#verification') {
        // 	$('#kycNeededModal').modal('toggle');
        // }
    });

}



function notifications() {
    let delBtn = $('#notifyDelete');


    delBtn.click(function() {
        $('.notify__check input:checked').parent().parent().parent().remove();
        if ($(this).is(":checked") && $('input:checked').length != 0) {
            delBtn.show();
        } else if ($('input:checked').length <= 0) {
            delBtn.hide();
        }
    })
    $('.notify__check input').change(function() {
        if ($(this).is(":checked") && $('input:checked').length != 0) {
            delBtn.show();
        } else if ($('input:checked').length <= 0) {
            delBtn.hide();
        }
    });

    $('.notify__header').click(function() {
        let selector = $(this).parent();
        if (selector.hasClass('active')) {
            selector.removeClass('active');
        } else {
            $('.notify__header').each(function(index, item) {
                $(item).parent().removeClass('active');
            });
            selector.addClass('active');
        }
    })
}

function drag() {
    $('.b-form__drag-btn').click(function(e) {
        e.preventDefault();
        $(this).closest('.b-form__drag').find('.b-form__drag-container').click();
    })

    document.querySelectorAll(".b-form__drag-input").forEach((inputElement) => {
        const dropZoneElement = inputElement.closest(".b-form__drag-container");

        dropZoneElement.addEventListener("click", (e) => {
            inputElement.click();
        });

        inputElement.addEventListener("change", (e) => {
            if (inputElement.files.length) {
                updateThumbnail(dropZoneElement, inputElement.files[0]);
            }
        });

        dropZoneElement.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZoneElement.classList.add("dragging");
        });

        ["dragleave", "dragend"].forEach((type) => {
            dropZoneElement.addEventListener(type, (e) => {
                dropZoneElement.classList.remove("dragging");
            });
        });

        dropZoneElement.addEventListener("drop", (e) => {
            e.preventDefault();

            if (e.dataTransfer.files.length) {
                inputElement.files = e.dataTransfer.files;
                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
            }

            dropZoneElement.classList.remove("dragging");
            dropZoneElement.classList.add("dragged");
        });

    });
}

function modalTabs() {
    $("*[data-tabbtn]").click(function(e) {
        e.preventDefault();
        let attr = $(this).attr('data-tabbtn');
        $('.b-modal__tab').hide();
        $('.b-modal__tab[data-tab=' + attr + ']').show();

        if (attr === "kyc-verification") {
            $('.b-modal__tab-progress').removeClass('step-1');
            $('.b-modal__tab-progress').addClass('step-2');
        } else if (attr === "cashout") {
            $('.b-modal__tab-progress').removeClass('step-2');
            $('.b-modal__tab-progress').addClass('step-3');
        }
    });
}

function infoTips() {
    $('.infotip').each(function(index, item) {
        $(this).mousemove(function() {
            $(item).find('.infotip-container').fadeIn('fast');
        }).mouseleave(function() {
            $(item).find('.infotip-container').fadeOut('fast');
        })
    });
}

function fullscreen() {
    function startFullscreen() {
        $('.fullscreen-btn').html('');
        $('.fullscreen-btn').append('<svg class="icon">\n' + '<use xlink:href="#fullscreen-close"></use>\n' + '</svg>')
        setTimeout(function() {
            $('.page').removeClass('active');
        }, 200)
        $('.page__content').addClass('game-fullscreen');
    }

    function endFullscreen() {
        $('.fullscreen-btn').html('');
        $('.fullscreen-btn').append('<svg class="icon">\n' + '<use xlink:href="#fullscreen"></use>\n' + '</svg>')
        setTimeout(function() {
            $('.page').addClass('active');
        }, 200)
        $('.page__content').removeClass('game-fullscreen');
    }

    $('.fullscreen-btn').click(function(e) {
        e.preventDefault();
        toggleFullScreen();
    })

    function checkWidth() {
        let windowSize = $(window).width();
        let path = window.location.pathname;
        if (windowSize <= 991 && path === '/game.html') {
            toggleFullScreen();
        }
    }

    checkWidth();

    function toggleFullScreen() {
        if (!document.fullscreenElement && // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
                startFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
                startFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
                startFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                startFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                endFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
                endFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                endFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
                endFullscreen();
            }
        }
    }
}

function widgets() {
    let input = $('#widgetAmount');
    let btn = $('.widget-form__span i');

    let value = input.val();
    btn.text(value);

    input.on("input propertychange", function() {
        if ($(this).val() <= 0) {
            btn.text('0$');
        } else {
            btn.text($(this).val() + '$');
        }
    });

    function showWidget() {
        function showFirstStep() {
            $('.widget-form').hide();
            $('.widget-form').eq(0).show();
            $('.page').removeClass('locked');
        }
        showFirstStep();

        $('*[show-widget]').click(function() {
            let attr = $(this).attr('show-widget');
            $('.widget-form').hide();
            $('.widget-form[data-widget=' + attr + ']').show();

            if ($('.widget-form[data-widget=' + attr + ']').index() >= 0) {
                $('.page').addClass('locked');
            }
        });

        $('.widget-form__cls').click(function() {
            showFirstStep();
        })

    }

    showWidget();


}

function gameInfoTip() {
    let btn = $('.cards__tip');
    let infoTip = $('.gameTip');
    
    btn.click(function(e) {
        
        e.stopPropagation();
        let x = $(this).offset().left;
        let y = $(this).offset().top - 8;
        // console.log(x)
        
        let cardWidth = $('.cards__container').outerWidth() - 20;
        let cardHeight = $('.cards__container').height()

        let xOffset = x - cardWidth + 29
        

        var responsiveScreen = window.matchMedia("(max-width: 768px)");
        if (responsiveScreen.matches) { // If media query matches
            infoTip.css({
                'display': 'block',
                'top': y,
                'left': '50%',
            })
        } else {
            infoTip.css({
                'display': 'flex',
                'top': y,
                'left': xOffset,
                'width': cardWidth,
                'height': cardHeight,
            })
        }

        // infoTip.css({
        // 	'display': 'block',
        // 	'top': y,
        // 	'left': xOffset,
        // })
        $('body', 'html').click(function(event) {
            infoTip.fadeOut();
        })
    
    });
}
$('.gameTip__favourite').click(function(){
    $(this).children('.icon').toggleClass('active')
})

function inputChecked() {
    $("#togBtn").on('change', function() {
        if ($(this).is(':checked')) {
            $('.widget-form__wrapper-slider').addClass('active');
        } else {
            $('.widget-form__wrapper-slider').removeClass('active');
        }
    });
}

function rulesDropdown() {
    $('.rules-menu__list-link.toggle').click(function() {
        let selector = $(this).parent().find('.rules-menu__list-sub');
        if (selector.hasClass('active')) {
            selector.removeClass('active');
            selector.stop().slideUp('fast');
        } else {
            $('.rules-menu__list-link.toggle').each(function(index, item) {
                $(item).parent().find('.rules-menu__list-sub').removeClass('active')
                $(item).parent().find('.rules-menu__list-sub').stop().slideUp('fast');
            });
            selector.addClass('active');
            selector.stop().slideDown('fast');
        }
    })
}

var rellax = new Rellax('.rellax');

$(window).load(function() {
    $('.loader').fadeOut();
})



$(function() {
    setScrollbars();
    intTel();
    bsModalBodyFix();
    favouriteStars();
    sidebar();
    navbar();
    clickers();
    userProfile();
    notifications();
    drag();
    modalTabs();
    infoTips();
    fullscreen();
    widgets();
    gameInfoTip();
    rulesDropdown();
    inputChecked();
})
setTimeout(() => {
    let div = $('#bannerSlider2 .banner__container-small')
    div.css('height', div.innerWidth() * 1.12)
}, 500)

$('.switch-bottom-widget .widget-form-checkbox').click(function() {
    if ($(this).is(":checked")) {
        $('.change-text-on-off-desktop').text('Play with 50$ + 300 freespins')
    } else {
        $('.change-text-on-off-desktop').text('Play with 50 $')
    }
})
// if ($(window).width() < 768) {
//     $('.change-text-on-off').text('Play with 50 $')
//     $('.change-text-on-off').attr('href', 'widget-popup.html')
// }

$('.switch-top-widget-js .widget-form-checkbox').click(function() {
    if ($(this).is(":checked")) {
        $('.widget-form-bottom-btn-link').addClass('disabled-promo')
    } else {
        $('.widget-form-bottom-btn-link').removeClass('disabled-promo')
    }
})

$('.switch-top-widget-js .widget-form-checkbox').click(function() {
    if ($(this).is(":checked")) {
        $('.widget-form__wrapper-btn-text-change').text('PLAY WITH 300€ + 300 FREESPINS')
    } else {
        $('.widget-form__wrapper-btn-text-change').text('PLAY WITH 50€')
    }
})

//welcome
let welcome = $('.welcome').length
if(welcome != 0){
   //steps
const initSteps = () => {
    if (document.querySelectorAll('.steps__container__content__step').length == 0)
      return false
    let currentStep = 0
    const showStep = (n) => {
      let steps = document.querySelectorAll('.steps__container__content__step')
      steps[n].style.display = 'flex'
      //pageTitle change
      //buttons
      if (n == 0) {
        document.querySelector('.step-active-line-js').style.width = '0'
        //pageTitle change
        //mobile
        document.querySelector('.register .page__semiTitle__h2').innerHTML =
          'We are Happy<br>To See You'
        document.querySelector('.register .page__semiTitle__h2--mobile').innerHTML =
          'We are Happy To See You'
        //desktop
        document.querySelector('.page__title__h1').innerHTML =
          'Registration'
        //pageTitle change
        document.querySelector(
          '.steps__container__navigation__prev'
        ).style.display = 'none'
        document.querySelector('.main__container__back').style.display = 'flex'
      } else {
        document.querySelector('.main__container__back').style.display = 'none'
        document.querySelector(
          '.steps__container__navigation__prev'
        ).style.display = 'flex'
      }
      //pageTitle change
      if (n == 1) {
        document.querySelector(
          '.steps__container__navigation__next'
        ).style.cssText = 'display:flex !important'
        //mobile
        document.querySelector('.register .page__semiTitle__h2').innerHTML =
          'You are almost<br>there!'
        //desktop
        document.querySelector('.page__title__h1').innerHTML =
          'Personal information'
        //stepLine
        document.querySelector('.step-active-line-js').style.width =
          'calc(50% - 5px)'
        //stepLine
        //gift animation
        document.querySelector('.gift').style.animation = 'h 1s infinite'
        //gift animation
      } else if (n == 2) {
        document.querySelector(
          '.steps__container__navigation__next'
        ).style.cssText = 'display:none !important'
        //gift animation
        document.querySelector('.gift').style.animation =
          'h .5s infinite'
        //gift animation
        //mobile
        document.querySelector('.register .page__semiTitle__h2').innerHTML =
          'User One more step &<br>the bonus is yours'
        //desktop
        document.querySelector('.page__title__h1').innerHTML =
          'Personal information'
        //stepLine
        document.querySelector('.step-active-line-js').style.width =
          'calc(100% - 25px)'
        //stepLine
      }
      if (n == steps.length - 1) {
        document.querySelector(
          '.steps__container__navigation__complete'
        ).style.display = 'flex'
      } else {
        document.querySelector(
          '.steps__container__navigation__complete'
        ).style.display = 'none'
      }
      //buttons
      stepsPagination(n)
    }
    const nextPrev = (i) => {
      let steps = document.querySelectorAll('.steps__container__content__step')
      steps[currentStep].style.display = 'none'
      currentStep = currentStep + i
      showStep(currentStep)
    }
    const stepsPagination = (n) => {
      let items = document.querySelectorAll('.steps__container__pagination__item')
      for (let i = 0; i < items.length; i++) {
        if (n < i) {
          items[i].classList.remove('colored')
          items[i].classList.remove('active')
        } else {
          items[i].classList.remove('active')
          items[i].classList.add('colored')
        }
      }
      items[n].className += ' active'
    }
    showStep(currentStep)
    document
      .querySelector('.steps__container__navigation__next')
      .addEventListener('click', () => {
        nextPrev(1)
      })
    document
      .querySelector('.steps__container__navigation__prev')
      .addEventListener('click', () => nextPrev(-1))
    //password toggle Visible
    document.querySelector('.eye').addEventListener('click', (e) => {
      let attr = document
        .querySelector('.password__container input')
        .getAttribute('type')
      if (attr === 'text') {
        document
          .querySelector('.password__container input')
          .setAttribute('type', 'password')
        document.querySelector('.eye use').setAttribute('xlink:href', '#eye')
      } else {
        document
          .querySelector('.password__container input')
          .setAttribute('type', 'text')
        document
          .querySelector('.eye use')
          .setAttribute('xlink:href', '#eye-hidden')
      }
    })
    //password toggle Visible
    //gender choose
    document.querySelector('.male__container').addEventListener('click', (e) => {
      document
        .querySelector('.female__container input')
        .classList.remove('checked')
      e.target.classList.add('checked')
    })
    document
      .querySelector('.female__container')
      .addEventListener('click', (e) => {
        document
          .querySelector('.male__container input')
          .classList.remove('checked')
        e.target.classList.add('checked')
      })
    //gender choose
    //modal eventlisteners
    document.querySelector('.open-privacy').addEventListener('click', () => {
      document.querySelector('.privacy__modal').classList.add('open')
    })
    document
      .querySelector('.continue-registration')
      .addEventListener('click', () => {
        document.querySelector('.privacy__modal').classList.remove('open')
        document.documentElement.scrollTop = 0
      })
    document
      .querySelector('.privacy__modal__close')
      .addEventListener('click', () => {
        document.querySelector('.privacy__modal').classList.remove('open')
        document.documentElement.scrollTop = 0
      })
    //modal eventlisteners
  }
  initSteps()
  const initDeposit = () => {
    if (
      document.querySelectorAll('.deposit__content__fixed-deposit__item')
        .length == 0
    )
      return false
    //plus minus deposit
    document
      .querySelector('.deposit__content__enter__minus')
      .addEventListener('click', (e) => {
        let value = e.target.parentElement.children[1].value
        value = parseInt(value, 10) - 5
        if (value > 0) {
          e.target.parentElement.children[1].value = `${value}$`
        }
        document
          .querySelectorAll('.deposit__content__fixed-deposit__item')
          .forEach((i) => {
            let iValue = parseInt(i.innerHTML, 10)
            if (iValue == value) {
              i.classList.add('active')
            } else {
              i.classList.remove('active')
            }
          })
      })
    document
      .querySelector('.deposit__content__enter__plus')
      .addEventListener('click', (e) => {
        let value = e.target.parentElement.children[1].value
        value = parseInt(value, 10) + 5
        e.target.parentElement.children[1].value = `${value}$`
        document
          .querySelectorAll('.deposit__content__fixed-deposit__item')
          .forEach((i) => {
            let iValue = parseInt(i.innerHTML, 10)
            if (iValue == value) {
              i.classList.add('active')
            } else {
              i.classList.remove('active')
            }
          })
      })
    //click fixed deposit
    document
      .querySelectorAll('.deposit__content__fixed-deposit__item')
      .forEach((i) => {
        i.addEventListener('click', (e) => {
          if (
            document.querySelector(
              '.deposit__content__fixed-deposit__item.active'
            ) !== null
          ) {
            document
              .querySelector('.deposit__content__fixed-deposit__item.active')
              .classList.remove('active')
          }
          e.target.classList.add('active')
          let iValue = parseInt(e.target.innerHTML, 10)
          document.querySelector(
            '.deposit__content__enter__input'
          ).value = `${iValue}$`
        })
      })
    //input change
    document
      .querySelector('.deposit__content__enter__input')
      .addEventListener('change', (e) => {
        let inputValue = parseInt(e.target.value, 10)
        document
          .querySelectorAll('.deposit__content__fixed-deposit__item')
          .forEach((i) => {
            let iValue = parseInt(i.innerHTML, 10)
            if (iValue == inputValue) {
              i.classList.add('active')
            } else {
              i.classList.remove('active')
            }
          })
      })
  }
  initDeposit()
  //modal eventlisteners
  let openModal = document.querySelectorAll('.open-modal')
  openModal.forEach((i) => {
    i.addEventListener('click', () => {
      document.querySelector('.cancellation__modal').classList.add('open')
    })
  })
  document
    .querySelector('.cancellation__modal__container__close')
    .addEventListener('click', () => {
      document.querySelector('.cancellation__modal').classList.remove('open')
      document.documentElement.scrollTop = 0
    })
  document
    .querySelector('.cancellation__modal__container__continue')
    .addEventListener('click', () => {
      document.querySelector('.cancellation__modal').classList.remove('open')
      document.documentElement.scrollTop = 0
    })
  //modal eventlisteners
  
}
const fixedBottomPos = () =>{
    let height = 2000;
    let bottomHeight = $('.bottom').height()

    let widget;
    if($(window).width() > 768){
        widget = $('.push-deposit')
    }else{
        widget = $('.push-deposit-sm')
    }
    let widgetHeight = widget.height()
    let bottomP = widgetHeight + bottomHeight
    $('.scroll-up').css('bottom', '-55px');
    if ($('.bottom') != 0){
        $('.fake-chat').css('bottom', `${bottomP}px`)
    }
    if($('.first-section').length == 0){
        widget.css('display','flex')
    }else{
        $('.fake-chat').css('bottom', `10px`)
    }
    if($(window).width() > 768){
        $('.fake-chat').css('bottom', `10px`)
    }
    (function(height,bottomHeight,widgetHeight,bottomP) {
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if (height <= scroll) {
                $('.fake-chat').css('bottom', `${bottomHeight + widgetHeight + 60}px`)
                $('.scroll-up').css('bottom', `${bottomP}px`)
            }else{
                $('.scroll-up').css('bottom', `-55px`)
                $('.fake-chat').css('bottom', `${bottomP}px`)
            }
            if($('.first-section').length != 0){
                let firstSectionHeight = $('.first-section').height()
                if (firstSectionHeight / 1.5 <= scroll) {
                    widget.css('display','flex')
                }else{
                    $('.fake-chat').css('bottom', '10px')
                    widget.css('display','none')
                }
            }
            if($(window).width() > 768){
                if (height <= scroll) {
                    $('.fake-chat').css('bottom', '70px')
                    $('.scroll-up').css('bottom', '10px')
                }else{
                    $('.fake-chat').css('bottom', '10px')
                    $('.scroll-up').css('bottom', '-55px')
                }
            }
            // $('.fake-chat').css('bottom', `10px`)
        })
    })(height,bottomHeight,widgetHeight,bottomP)
    $('.scroll-up').click(function(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
}
fixedBottomPos()