//var currentPos = 0;
//var intervalHandle;
//
//function beginAnimate() {
//    document.getElementById("join").style.position = "absolute";
//    document.getElementById("join").style.left = "0px";
//    document.getElementById("join").style.top = "100px";
//    cause the animateBox function to be called
//    intervalHandle = setInterval(animateBox,50);
//}
//
//function animateBox() {
//    // set new position
//    currentPos += 5;
//    document.getElementById("join").style.left = currentPos + "px";
//    // 
//    if (currentPos > 900) {
//        // clear interval
//        clearInterval(intervalHandle);
//        // reset custom inline styles
//        document.getElementById("join").style.position = "";
//        document.getElementById("join").style.left = "";
//        document.getElementById("join").style.top = "";
//    }
//}
//
//window.onload = function() {
//    setTimeout(beginAnimate, 5000);
//};
//

//UserExercise
var currentPosition = 0;
var intervalControl;
function bannerFly() {
    flyingTrivia = document.getElementById("trivia");
    flyingTrivia.style.position = "fixed";
    flyingTrivia.style.bottom = "0px";
    flyingTrivia.style.right = "0px";
    intervalControl = setInterval(animatingBanner, 50);
}

function animatingBanner() {
    currentPosition += 1;
    document.getElementById("trivia").style.right = currentPosition + "px";
    if (currentPosition > 900) {
        clearInterval(intervalControl);
        flyingTrivia.style.position = "";
        flyingTrivia.style.bottom = "";
        flyingTrivia.style.right = "";

    }
}

window.onclick = function() {
    setTimeout(bannerFly, 2000);
}; 

