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
};

var removeEvent = function(ev, type, fu) {
    if (typeof removeEventListener !== "undefined") {
        ev.removeEventListener(type, fu, false);
    }
    else if (typeof detachEvent !== "undefined") {
        ev.detachEvent("on" + type, fu);
    }
    else {
        el["on" + type] = null;
    }
};

var getTarget = function(evtp) {
    if (typeof evtp.target !== "undefined") {
        return evtp.target;
    }
    else {
        return evtp.srcElement;
    }
};

var preventDiefault = function(evt) {
    if (typeof evt.preventDefault !== "undefined") {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }
};



function exercise190() {
    var buttons = document.getElementsByTagName("a");

    var buttonClick = function(evt) {
        var target = eventUtility.getTarget(evt),
                className = target.innerHTML.toLowerCase();

        eventUtility.preventDefault(evt);

        document.body.className = className;
    };

    for (var i = 0, len = buttons.length; i < len; i = i + 1) {
        eventUtility.addEvent(buttons[i], "click", buttonClick);
        //removeEvent(buttons[i], "click", buttonClick);    

    }

} //End of exercise190------------------------------------------------- 
function exercise191() {
    var link = document.getElementsByTagName("a");
    var len = link.length;

    var userCtrl = function(pm) {
        var targetLink = getTarget(pm);
        alert("it's work");
        var change = targetLink.innerHTML.toLowerCase();
        document.body.className = change;
        preventDiefault(pm);

        //pm.preventDefault();
    };
    for (var i = 0; i < len; i++) {
        addEvent(link[i], "click", userCtrl);
//        removeEvent(link[i],"click",userCtrl);   // Remove Event.
        //link[i].addEventListener("click",userCtrl,false);
    }
}//End of exercise191------------------------------------------------- 
function exercise192() {
    var link = document.getElementsByTagName("a");
    var len = link.length;

    var userCtrl = function(pm) {
        var targetLink = eventUtilitys.getTarget(pm);
        alert("it's work");
        var change = targetLink.innerHTML.toLowerCase();
        document.body.className = change;
        eventUtilitys.preventDiefault(pm);

        //pm.preventDefault();
    };
    for (var i = 0; i < len; i++) {
        eventUtilitys.addEvent(link[i], "click", userCtrl);
//        removeEvent(link[i],"click",userCtrl);   // Remove Event.
        //link[i].addEventListener("click",userCtrl,false);
    }
}//End of exercise192------------------------------------------------- 

//exercise190();
//exercise191();
exercise192();