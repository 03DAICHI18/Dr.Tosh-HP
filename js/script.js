// ↓ready関数
$(function () {
  // ローディンング制御（2）====================================
  var h = $(window).height(); //ブラウザウィンドウの高さを取得
  $(".load , .load__animation").height(h).css("display", "block"); //ウィンドウの高さに合わせでローディング画面を表示

  // ハンバーガーメニュー====================================
  $("#drawer-btn , .drawer-menu__hidden").on("click", function () {
    $("#drawer-btn").toggleClass("open");

    if ($(this).hasClass("open")) {
      $("body , #drawer-btn").addClass("open");
    } else {
      $("body , #drawer-btn").removeClass("open");
    }

    $("#drawer-menu").slideToggle();

    var movefun = function (event) {
      event.preventDefault();
    };
    // スクロール停止の処理
    window.addEventListener("touchmove", movefun, { passive: false });
    // スクロール停止することを停止する処理
    window.removeEventListener("touchmove", movefun, { passive: false });
  });

  // ページ内スクロール====================================
  $('a[href^="#"]').click(function (event) {
    // クリックした要素のhref属性の値を取得
    var anchor = $(this).attr("href");
    // 表示位置を取得
    var position = $(anchor).offset().top;
    // アニメーションの効果の作成
    $("body,html").animate({ scrollTop: position }, 500);
    return false;
  });

  // アコーディオンインナーを画面サイズで表示切替====================================
  // クリックイベントを設定
  $('.js-talk-trigger').click(function () {
    // activeクラスを付与して三checkをcloseに
    $(this).toggleClass('open');
    // クリックした次の要素のインナーをスライドで表示
    $(this).next().slideToggle();
    // クリックされてないjs-talk-triggerの直下にあるインナーはスライドアップで非表示
    $('.js-talk-trigger').not($(this)).next('.js-talk__inner').slideUp();
    // クリックされてないjs-talk-triggerからactiveクラスを外しcheckの文字を元に戻す
    $('.js-talk-trigger').not($(this)).removeClass('open');
    return false;
  });
  $('.js-talk-close').click(function () {
    // クリックされてないjs-talk-triggerの直下にあるインナーはスライドアップで非表示
    $('.js-talk-trigger').not($(this)).next('.js-talk__inner').slideUp();
  });

});

// ↓load関数
// ローディング制御（1）====================================
$(window).on("load", function () {
  $(".load").delay(1000).fadeOut(1000);
  $(".load__animation").delay(1000).fadeOut(1000);
  // $('.load , .load__animation').height(h).css('display','hidden');
  $("#wrap").css("display", "block"); // ページ読み込みが終わったらメインコンテンツを表示する
});

