var addEvent = function(ev, type, fu) {
    if (typeof addEventListener !== "undefined") {
        ev.addEventListener(type, fu, false);
    }
    else if (typeof attachEvent !== "undefined") {
        ev.attachEvent("on" + type, fu);
    }
    else {
        ev["on" + type] = fu;
    }
};//End of cross Browser addEvent----------------------

var removeEvent = function(ev, type, fu) {
    if (typeof addEventListener !== "undefined") {
        ev.removeEventListener(type, fu, false);
    }
    else if (typeof attachEvent !== "undefined") {
        ev.detouchEvent("on" + type, fu);
    }
    else {
        ev["on" + type] = "";
    }
};//End of cross Browser removeEvent----------------

var preventLink = function(pr) {
    if (typeof pr.preventDefault !== "undefined") {
        pr.preventDefault();
    }
    else {
        pr.returnValue = false;
    }
};//End of cross Browser preventDefault------------------------

var targetSrc = function(pr) {
    if (typeof pr.target !== "undefined") {
        return pr.target;
    }
    else {
        return pr.srcElement;
    }
};//End of cross Browser targetEvent-----------------------------


function exercise01() {
    var button = document.getElementsByTagName("button");
    var len = button.length;

    for (var i = 0; i < len; i++) {
        button[i].onclick = function() {
            var change = this.innerHTML.toLowerCase();
            document.body.className = change;
            alert("Hello Developer!");
        };
    }
}//End of Exercise01--------------------------------------------------

function exercise02() {
    var link = document.getElementsByTagName("a");
    var social = document.getElementById("social");
    var len = link.length;

    var newFunction = function(evt) {
        social.style.background = "red";
        evt.preventDefault();
        alert("Target Location :" + evt.target);
        alert("Src Location :" + location);
        alert("Type Of Event :" + typeof evt);
    };
    for (var i = 0; i < len; i++) {
        link[i].addEventListener("click", newFunction, false);
    }
}//End of Exercise02--------------------------------------------------

function exercise03() {
    var link = document.getElementsByTagName("a");
    var social = document.getElementById("social");
    var len = link.length;

    var newFunction = function(evt) {
        social.style.background = "red";
        evt.returnValue = false;
        alert("target Location :" + evt.srcElement);
        alert("Src Location :" + location);
        alert("Type Of Event :" + typeof evt);
        evt.preventDefault();
    };
    for (var i = 0; i < len; i++) {
        link[i].attachEvent("onclick", newFunction);
    }
}//End of Exercise03---for Old IE Browser----------------------------


function exercise04() {
    var link = document.getElementsByTagName("a");
    var social = document.getElementById("social");
    var len = link.length;

    var newFunction = function(evt) {
        social.style.background = "red";
        preventLink(evt);
//        evt.preventDefault();
//        evt.returnValue = false;
        alert("Target Location :" + targetSrc(evt));
        alert("Src Location :" + location);
        alert("Type Of Event :" + typeof evt);
    };
    for (var i = 0; i < len; i++) {
//      link[i].addEventListener("click", newFunction, false);
        addEvent(link[i], "click", newFunction);
//        removeEvent(link[i], "click", newFunction);
    }
}//End of Exercise04----Cross Browser Support------------------------

function exercise05() {
    var link = document.getElementsByTagName("a");
    var social = document.getElementById("social");
    var len = link.length;

    var newFunction = function(evt) {
        social.style.background = "red";
        crossBrowserUtility.preventLink(evt);
        alert("Target Location :" + crossBrowserUtility.targetSrc(evt));
        alert("Src Location :" + location);
        alert("Type Of Event :" + typeof evt);
    };
    for (var i = 0; i < len; i++) {
        crossBrowserUtility.addEvent(link[i], "click", newFunction);
//        crossBrowserUtility.removeEvent(link[i], "click", newFunction);
    }
}//End of Exercise05----Cross Browser Support with Extranal CrossBrowserUtilitis Script.------------------------

exercise01(); //for new Browser.
//exercise02(); //for new Browser.
//exercise03();  //for old IE Browser.
//exercise04();  //for old IE Browser. local 
exercise05();  //for old IE Browser. extranal script of Cross Browser. 


