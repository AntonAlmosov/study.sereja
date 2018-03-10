$(document).ready(function(){
  $(".headerMobileBurger").click(function(){
    $(".headerMobileBurger").hide();
    $("section").hide();
    $("footer").hide();
    $(".headerMobileClose").show();
    $(".headerMobileLinks").show();
    $(".headerMobileSocial").show();
  });

  $(".headerMobileClose").click(function(){
    $(".headerMobileClose").hide();
    $(".headerMobileLinks").hide();
    $(".headerMobileSocial").hide();
    $(".headerMobileBurger").show();
    $("section").show();
    $("footer").show();
  });

});
