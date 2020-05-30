$(function () {
  var $pageTop = $("#pagetop")
  $pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $pageTop.fadeIn(300);
    } else {
      $pageTop.fadeOut(300);
    }
  });

  $("#pagetop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
    return false;
  })
});

$(function () {
  $("ul li a").hover(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    }
  });
});

$(function () {
  $('ul li a').click(function () {
    $(this).addClass('active');
    $("ul li a").removeClass('active');
    return false;
  });
});

$(function () {
  $(".footer-nav-item").hover(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    }
  });
});

$(function () {
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
  });
});

$(function () {
  new WOW().init();
});

$(function () {
  $(".offcanvas-right").hiraku({
    btn: "#offcanvas-btn-right",
    direction: "right"
  });
});

jQuery('a[href^="#"]').click(function () {
  let header = jQuery(".header").innerHeight();
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  let position = jQuery(target).offset().top - header;
  if ("fixed" !== jQuery(".header").css("position")) {
    position = jQuery(target).offset().top;
  }
  if (0 > position) {
    position = 0;
  }
  jQuery("html, body").animate({
    scrollTop: position
  },
    speed
  );
  return false;
});

//  ACORDIOn

$(function () {
  $(".accordion1 li p").click(function () {
    $(this).next(".accordion1 .inner").slideToggle();
    $(".accordion1 p").not($(this)).next(".accordion4 .inner").slideUp();
  });
});

//  MODAL
$(function(){
  $(".modal").hide();
  $(".modal_open").click(function(){
   $(".modal").fadeIn();
   return false;
  });
});
$(function(){
$(".modal-close").click(function(){
$(".modal").fadeOut();
return false;
});
});






