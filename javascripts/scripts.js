$(function(){
  var landingPgHeader = $("#landing-pg-header")
  var landingPgSubtitle =   $("#landing-pg-subtitle")
  landingPgHeader.animate({ 
      top: "+=190px",
    }, 1000 );   
  
  landingPgSubtitle.animate({
      top: "+=300px",
    }, 1400 );

  var width = $(".fade-in-left").width()  
  $(".fade-in-left").css({
    right: "-" + (width + 200) + "px"})

  var width = $(".fade-in-right").width()  
  $(".fade-in-right").css({
    left: "-" + (width+ 200) + "px"})

  function slideElementSideways(id, way, speed, offset) {
    var elm = document.getElementById(id)
    var jelm = $(elm)
    if (way === "right") {
      jelm.waypoint(function(direction){
        var width = jelm.width();
        jelm.animate({right: 0 + "px"}, speed);
      }, {
        offset: offset
      });      
    }
    if (way === "left") {
      jelm.waypoint(function(direction){
        var width = jelm.width();
        jelm.animate({left: 0 + "px"}, speed);
      }, {
        offset: offset
      });
    }
  };

  slideElementSideways("isul-kim-summary-div", 
    "right", 1000, 400);
  slideElementSideways("MusicMap", 
    "right", 1000, 400);
  slideElementSideways("GlemurGames", 
    "right", 1000, 400);
  slideElementSideways("PerSee", 
    "left", 1000, 400);
  slideElementSideways("Globetrotters", 
    "left", 1000, 400);


});