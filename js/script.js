$(function(){
  // ハンバーガーメニュー
  $('#drawer-btn , .drawer-menu__hidden').on('click',function(){
  $('#drawer-btn').toggleClass('active');

  if ($(this).hasClass('active')){
    $('body , #drawer-btn').addClass('active');
  } else {
    $('body , #drawer-btn').removeClass('active');
  }

  $('#drawer-menu').slideToggle();
});
})