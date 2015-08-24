$(document).ready(function() {

console.log("hello");

// getting shit to do shit
$('body').on('keypress', function(e){
	console.log(e.keyCode);
	switch(e.keyCode){
	case 119:
	$('body').append('<img class="team1" src="images/king_tiger.gif">');
    tankTeam1Right();
    break;
    case 108:
    console.log('L has been clicked');
    $('body').append('<img class="team2" src="images/tank_2.gif">');
    tankTeam2Right();
    break;
    default:
    console.log('press the right button');
   }
  });
// getting second shit to do shit
// $('#l').on('l', function(){
	
// });


// to make tank left to move right
function tankTeam1Left() {
    $(".team1").animate({left: "-=500"}, 2000, "swing", tankTeam1Right);
}
function tankTeam1Right() {
    $(".team1").animate({left: "+=500"}, 2000, "swing", tankTeam1Left);
}


// to make tank right to move left
function tankTeam2Left() {
    $(".team2").animate({right: "-=500"}, 2000, "swing", tankTeam2Right);
}
function tankTeam2Right() {
    $(".team2").animate({right: "+=500"}, 2000, "swing", tankTeam2Left);
}



})