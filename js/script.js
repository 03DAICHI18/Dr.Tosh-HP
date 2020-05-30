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
});

// アコーディオンインナーを画面サイズで表示切替====================================
// scrollTop取得元の設定
var userAgent = window.navigator.userAgent.toLowerCase()
var scrollBody = 'body';
if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1 || userAgent.indexOf("firefox") > -1) { /*IE8.9.10.31*/
  var scrollBody = 'html';
}
$(function () {
  $window = $(window);
  //アコーディオンメニューの実装
  $(".js-talk-trigger").click(function () {
    var $thisElm = $(this),
      $activeElm = $(".js-talk-trigger.open"),
      currentScrollTop = $window.scrollTop(),
      posTop = $thisElm.offset().top,
      currentPosTop = posTop;

    if (!($thisElm.hasClass("open"))) {
      $thisElm.addClass("open");
      $thisElm.next().slideDown({
        step: function () { //各ステップごとに、移動分スクロールさせる
          currentPosTop = $thisElm.offset().top;
          $(scrollBody).animate({
            "scrollTop": currentScrollTop - (posTop - currentPosTop - 50) //スクロールを実行
          }, 0);
        }
      });
    }
    $activeElm.removeClass("open");
    $activeElm.next().slideUp();
  });

  $('.js-talk-close').click(function () {
    // クリックされてないjs-talk-triggerの直下にあるインナーはスライドアップで非表示
    $('.js-talk-trigger').not($(this)).next('.js-talk__inner').slideUp();
    return false;
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

