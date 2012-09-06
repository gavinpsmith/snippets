$(document).ready(function(){
$(".tabs li").click(function(){
  if (!$(this).hasClass("selected")) {
    $(".tabs li").removeClass("selected");
    $(this).addClass("selected");
    var $selectionId = $(this).attr("id");
    $(".content").fadeOut("slow",function(){
      $(".page").hide(); // .hide() is the same as .css("display","none");
      $(".page#" + $selectionId).show();
    }).fadeIn("slow"); // by chaining fadeIn right to fadeOut, you save a selector
  }  
});
});