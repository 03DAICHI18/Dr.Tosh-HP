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
      $('#drawer-btn').css('background-color', 'rgba(0,0,0,0)');
    } else {
      $("body , #drawer-btn").removeClass("open");
      $('#drawer-btn').css('background-color', 'rgba(0,0,0,0.5)');
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
});

// ↓load関数
// ローディング制御（1）====================================
$(window).on("load", function () {
  $(".load").delay(300).fadeOut(1000);
  $(".load__animation").delay(300).fadeOut(1000);
  $("#wrap").css("display", "block"); // ページ読み込みが終わったらメインコンテンツを表示する
});

