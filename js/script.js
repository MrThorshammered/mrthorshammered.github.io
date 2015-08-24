$(document).ready(function() {
var $cached_elem1 = $('.team1');
var $cached_elem2 = $('.team2');
var tankOneTimer;
var tankTwoTimer;
var tankChecker1;
var tankChecker2;
var buildingHealth1 = [50];
var buildingHealth2 = [50];
var tankHealth1 = [10];//for assigning a health value to 1st tank
var tankHealth2 = [10];//for assigning a health value to 2nd tank
var attack1 = function(){//how the attack assigns a value to itself
	return Math.round(Math.random()*5);
};
var attack2 = function(){//how the attack assigns a value to itself
    return Math.round(Math.random()*5);
};

// timer to check who's won the battle
var didTankOneWin = function(){
    tankOneTimer = setInterval(tank1Attacked,2000);
};
var didTankTwoWin = function(){
    tankTwoTimer = setInterval(tank2Attacked,2000);
};
// what happens when tank 1 is attacked
var tank1Attacked = function(){
	var attacked = tankHealth1[0]-attack2();
    tankHealth1.unshift(attacked);
    console.log(tankHealth1[0] + " tank ones health");
    if (tankHealth1[0] <= 0){
    	$('.team1').remove();
        tankTeam2Right();
        clearInterval(tankOneTimer);
        clearInterval(tankTwoTimer);
    }//else if($('.team2').remove() === true){
    //     debugger;
    //     tankTeam1Right();
    // }
};
// what happens when tank 2 is attacked
var tank2Attacked = function(){
	var attacked = tankHealth2[0]-attack1();
    tankHealth2.unshift(attacked);
    console.log(tankHealth2[0] + " tank two's health");
    if (tankHealth2[0] <= 0){
    	$('.team2').remove();
        tankTeam1Right();
        clearInterval(tankOneTimer);
        clearInterval(tankTwoTimer);
    }//else if($('.team1').remove() === true){
    //     debugger;
    //     tankTeam2Right();
    //  }
};

// colission detection for the two tanks and get them to stop

var colided = function(){
	if ($('.team1').position().left >= $('.team2').position().left){
		console.log('tanks have colided');
        clearInterval(tankChecker1);
		clearInterval(tankChecker2);
		$('.team1').stop();
		$('.team2').stop();
        didTankOneWin();
        didTankTwoWin();
	}
};

var buildingColide = function(){
    if($('.team2').position().left >= $('#garage1').position().left){
        console.log('tank two is attacking');
        $('.team2').stop();
    }else if($('.team1').postion().left >= $('#garage2').postion().left){
        console.log('tank one is attacking');
        $('.team1').stop();
    }
};


// getting shit to do shit
$('body').on('keypress', function(e){
	console.log(e.keyCode);
	switch(e.keyCode){
	case 119:
	console.log('w has been clicked');
	$('body').append('<img class="team1" src="images/king_tiger.gif">');
    tankTeam1Right();
    tankChecker1 = setInterval(colided, 50);
    break;
    case 108:
    console.log('L has been clicked');
    $('body').append('<img class="team2" src="images/tank_2.gif">');
    tankTeam2Right();
   tankChecker2 = setInterval(colided, 50);
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


});