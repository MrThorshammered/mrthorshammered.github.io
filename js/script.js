$(document).ready(function() {

console.log("hello");

function tankTeam1Left() {
    $("#team1").animate({left: "-=500"}, 2000, "swing", tankTeam1Right);
}
function tankTeam1Right() {
    $("#team1").animate({left: "+=500"}, 2000, "swing", tankTeam1Left);
}

tankTeam1Right();

function tankTeam2Left() {
    $("#team2").animate({right: "-=500"}, 2000, "swing", tankTeam2Right);
}
function tankTeam2Right() {
    $("#team2").animate({right: "+=500"}, 2000, "swing", tankTeam2Left);
}

tankTeam2Right();

})