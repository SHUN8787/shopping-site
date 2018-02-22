$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        });
});

$(document).ready(function(){
  $(".sp_navi_menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});