function exercise150() {

    var speed = 16;
    var incValue = 5;

    moveBox = function(moveBy) {
        var el = document.getElementById("box"),
                left = el.offsetLeft;

        el.innerHTML = left;
        if ((moveBy > 0 && left > 999) || (moveBy < 0 && left < 51)) {
            clearTimeout(timer);
            timer = setInterval(function() {
                moveBox(moveBy * -1);
            }, speed);
        }

        el.style.left = left + moveBy + "px";

    };

    var timer = setInterval(function() {
        moveBox(incValue);
    }, speed);
}//End Exercise 150-------------------------------

function exercise151() {
    var i = 0;

    var active = function() {
        console.log("Start function time : " + i);
        i = i + 1;
        if (i > 10) {
            clearInterval(timeHandle);
        }
    };
    var timeHandle = setInterval(active, 1000);


}//End Exercise 151-------------------------------

function exercise152() {
    var i = 0;
    var active = function() {
        i = i + 1;
        document.getElementById("box").innerHTML = i;
//        console.log("Time count : " + i);
        if (i < 10) {
            setTimeout(active, 2000);
        }
    };
    active();
}//End Exercise 152 ------------------------------

function exercise153() {
    var speed = 16;
    var incValue = 1;
    var movBox = function() {
        var idElement = document.getElementById("box");
        left = idElement.offsetLeft;

        idElement.style.left = left + incValue + "px";

        idElement.innerHTML = left;
        if (left >= 800) {
            clearInterval(controlTime);
        }
    };
    var controlTime = setInterval(movBox, speed);
}//End Exercise 153-------------------------------

function exercise154() {
    var speed = 16;
    var incValue = 1;
    var moveBox = function(moveBy) {
        var box = document.getElementById("box");
        left = box.offsetLeft;
        box.innerHTML = left;
        if ((moveBy > 0 && left > 799) || (moveBy < 0 && left < 51)) {
            clearInterval(timeCtrl);
            timeCtrl = setInterval(function() {
                moveBox(moveBy * -1);
            }, speed);
        }
        box.style.left = left + moveBy + "px";
    };
    var timeCtrl = setInterval(function() {
        moveBox(incValue);
    }, speed);
}//End Exercise 154-------------------------------

function exercise155() {
    var speed = 1;
    var stap = 1;
    var moveBox = function(stap) {
        var box = document.getElementById("box");
        movD = box.offsetTop;
        box.innerHTML = movD;
        if (stap > 0 && movD > 499 || stap < 0 && movD < 51) {
            clearInterval(time);
            time = setInterval(function() {
                moveBox(stap * -1);
            }, speed);
        }
        
        box.style.top = movD + stap + "px";
    };
    var time = setInterval(function() {
        moveBox(stap);
    }, speed);
}//End Exercise 155-------------------------------



// Call Exercise project below this comment area.
 exercise150();
// exercise151();
// exercise152();
// exercise153();
// exercise154();
// exercise154();

