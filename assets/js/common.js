/* -------------------------------------------------------
 nav
------------------------------------------------------- */


$(".menu-trigger").click(function () {
  $(this).toggleClass('active');
  $(".global-nav").toggleClass('active');
  
  if ($('.global-nav').hasClass('active')) {
  $('html').css('overflow', 'hidden');
  }else{
    $('html').css('overflow', 'auto');
  }
});


/* SP */
$(document).ready(function() {
  
  if (window.matchMedia("(max-width: 768px)").matches) {
    
    $(".nav-item").on("click", function () {
      $(this).children(".nav-item_sub").slideToggle();
      $(".nav-item").not($(this)).children(".nav-item_sub").slideUp();
      if ($('.nav-item_sub').hasClass('active')) {
        $(this).removeClass('active');
        $('.nav-item_sub').removeClass('active');
      } else{
        $(this).addClass('active');
        $('.nav-item_sub').addClass('active');
      }
    });
    
    $("header > .inner > .contact").appendTo(".global-nav");
    
    $("header > .inner > .language").wrap("<div class='nav-bottom'></div>");
    $("header > .inner > .nav-bottom").appendTo(".global-nav");
    
    /* header内のnavにfooterの「ポリシー&サイトマップ」のリンクを複製*/
    $("footer .inner nav ul").clone().appendTo(".nav-bottom");
  }

});

/* -------------------------------------------------------
 scroll
------------------------------------------------------- */
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;    
  });
});

/* -------------------------------------------------------
 page-top
------------------------------------------------------- */
$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });
});

$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  var footerHeight = $("footer").innerHeight();
  if ( scrollHeight - scrollPosition  <= footerHeight ) {
    $("#page-top").addClass("fixed");
  } else {
    $("#page-top").removeClass("fixed");
  }
});
