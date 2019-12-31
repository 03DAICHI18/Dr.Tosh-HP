$(function(){
// ハンバーガーメニュー====================================
  $('#drawer-btn , .drawer-menu__hidden').on('click',function(){
  $('#drawer-btn').toggleClass('active');

  if ($(this).hasClass('active')){
    $('body , #drawer-btn').addClass('active');
  } else {
    $('body , #drawer-btn').removeClass('active');
  }

  $('#drawer-menu').slideToggle();

var movefun = function( event ){
	event.preventDefault();
}
  // スクロール停止の処理
  window.addEventListener( 'touchmove' , movefun , { passive: false } );
  // スクロール停止することを停止する処理
  window.removeEventListener( 'touchmove' , movefun, { passive: false } );
  });

    // スライドショー（Swiper.js）====================================
      var mySwiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        slidesPerView: 2,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          reverseDirection: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
});