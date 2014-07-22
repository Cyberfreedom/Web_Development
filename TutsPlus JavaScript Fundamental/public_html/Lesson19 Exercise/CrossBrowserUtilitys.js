var crossBrowserUtility = {
    addEvent: function(ev, type, fu) {
        if (typeof addEventListener !== "undefined") {
            ev.addEventListener(type, fu, false);
        }
        else if (typeof attachEvent !== "undefined") {
            ev.attachEvent("on" + type, fu);
        }
        else {
            ev["on" + type] = fu;
        }
    }, //End of cross Browser addEvent----------------------

    removeEvent: function(ev, type, fu) {
        if (typeof addEventListener !== "undefined") {
            ev.removeEventListener(type, fu, false);
        }
        else if (typeof attachEvent !== "undefined") {
            ev.detouchEvent("on" + type, fu);
        }
        else {
            ev["on" + type] = "";
        }
    }, //End of cross Browser removeEvent----------------

    preventLink: function(pr) {
        if (typeof pr.preventDefault !== "undefined") {
            pr.preventDefault();
        }
        else {
            pr.returnValue = false;
        }
    }, //End of cross Browser preventDefault------------------------

    targetSrc: function(pr) {
        if (typeof pr.target !== "undefined") {
            return pr.target;
        }
        else {
            return pr.srcElement;
        }
    }//End of cross Browser targetEvent-----------------------------
};