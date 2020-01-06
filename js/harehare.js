$(window).on('load', function () {
      $('body').css('opacity' , 0);
      $('#hare-wrap').css('opacity' , 0);
      $('body').animate({opacity: 1},2000);
      $('#hare-wrap').animate({opacity: 1},2000);
      return false;
});


