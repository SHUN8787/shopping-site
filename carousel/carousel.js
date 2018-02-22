$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        });
});

$(window).load(function(){
  $("#thumbnails img").click(function(){
    var img_src = $(this).attr("src");
    $("#mainimg1 img").attr("src", img_src);
  });
});


$(document).ready(function(){
  $(".sp_navi_menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});