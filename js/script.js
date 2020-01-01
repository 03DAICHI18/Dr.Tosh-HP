// ↓ready関数
$(function(){
// ローディンング制御（2）====================================
  var h = $(window).height(); //ブラウザウィンドウの高さを取得
  $('#wrap').css('display','none'); //初期状態ではメインコンテンツを非表示
  $('.load , .load__animation').height(h).css('display','block'); //ウィンドウの高さに合わせでローディング画面を表示


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

// liveスライドイメージ====================================
  var page=0;
  var lastPage =parseInt($("#slideshow img").length-1);
  $("#slideshow img").css("display","none");
  $("#slideshow img").eq(page).css("display","block");

  function changePage(){
    $("#slideshow img").fadeOut(1000);
    $("#slideshow img").eq(page).fadeIn(2000);
  };

  var Timer;
  function startTimer(){
  Timer =setInterval(function(){  
    if(page === lastPage){
      page = 0;
      changePage();
      } else {
        page ++;
        changePage();
          };
            },3000);
  }  startTimer();


});

// ↓load関数
// ローディング制御（1）====================================
$(window).on('load', function () {
  $('.load').delay(1000).fadeOut(1000); 
  $('.load__animation').delay(1000).fadeOut(1000); 
  $('#wrap').css('display', 'block'); // ページ読み込みが終わったらメインコンテンツを表示する
});

