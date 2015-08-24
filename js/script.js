$(document).ready(function() {

var tankChecker;
var tankHealth1 = [10];//for assigning a health value to 1st tank
var tankHealth2 = [10];//for assigning a health value to 2nd tank
var attack = function(){
	return Math.round(Math.random()*5)
}
// what happens when tank 1 is attacked
var tank1Attacked = function(){
	var attacked = tankHealth1[0]-attack();
    tankHealth1.unshift(attacked);
    console.log(tankHealth1[0])
}
// what happens when tank 2 is attacked
var tank2Attacked = function(){
	var attacked = tankHealth2[0]-attack();
    tankHealth2.unshift(attacked);
    console.log(tankHealth1[0])
}



console.log("hello");
// colission detection for the two tanks and get them to stop
var colided = function(){
	if ($('.team1').position().left >= $('.team2').position().left){
		console.log('tanks have colided');
		clearInterval(tankChecker);
		$('.team1').stop();
		$('.team2').stop();
	}
}


// getting shit to do shit
$('body').on('keypress', function(e){
	console.log(e.keyCode);
	switch(e.keyCode){
	case 119:
	console.log('w has been clicked');
	$('body').append('<img class="team1" src="images/king_tiger.gif">');
    tankTeam1Right();
    // tankChecker = setInterval(colided, 50);
    break;
    case 108:
    console.log('L has been clicked');
    $('body').append('<img class="team2" src="images/tank_2.gif">');
    tankTeam2Right();
   tankChecker = setInterval(colided, 10);
    break;
    default:
    console.log('press the right button');
   }
  });
// to make tank left to move right
function tankTeam1Right() {
    $(".team1").animate({left: "+=1100"}, 5000, "swing");
}

// to make tank right to move left
function tankTeam2Right() {
    $(".team2").animate({right: "+=1100"}, 5000, "swing");
}











})