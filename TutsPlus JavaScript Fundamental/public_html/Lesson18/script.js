function exercise180() {

    var buttons = document.getElementsByTagName("a");

    var buttonClick = function(evt) {
        var className = event.srcElement.innerHTML.toLowerCase();

        event.returnValue = false;

        document.body.className = className;
    };

    for (var i = 0, len = buttons.length; i < len; i = i + 1) {
        /*buttons[i].onclick = function() {
         var className = this.innerHTML.toLowerCase();
         
         document.body.className = className;
         };*/

        buttons[i].attachEvent("onclick", buttonClick);
//        buttons[i].detachEvent("onclick", buttonClick);

    }

}// End exercise 180---------------------------------------------

function exercise181() {

    var urlLink = document.getElementsByTagName("a");
    var len = urlLink.length;

    for (var i = 0; i < len; i++) {
        urlLink[i].onclick = function(pr) {
            var bgChange = this.innerHTML.toLowerCase();
            document.body.className = bgChange;
            pr.preventDefault();
        };
    }
} // End exercise 181---------------------------------------------

function exercise182() {

    var urlLink = document.getElementsByTagName("a");
    var len = urlLink.length;
    var change = function() {
//        var bgChange = this.innerHTML.toLowerCase();     // for IE 9 & Next Letest Browser.
        var bgChange = event.srcElement.innerHTML.toLowerCase(); //for IE 8 & Old xBrowser.

        document.body.className = bgChange;
        event.returnValue = false; // for IE 8 & Old xBrowser
        //pr.preventDefault();     // for IE 9 & Next Letest Browser.
    };

    for (var i = 0; i < len; i++) {
//        urlLink[i].addEventListener("click",change,false); // for IE 9 & Next Letest Browser.
        urlLink[i].attachEvent("onclick", change); //for IE 8 & Old xBrowser.


    }
} // End exercise 182---------------------------------------------

function exercise183() {

    var urlLink = document.getElementsByTagName("a");
    var len = urlLink.length;
    var change = function(pr) {
        var bgChange = this.innerHTML.toLowerCase();     // for IE 9 & Next Letest Browser.
//        var bgChange = event.srcElement.innerHTML.toLowerCase(); //for IE 8 & Old xBrowser.

        document.body.className = bgChange;
        pr.preventDefault();     // for IE 9 & Next Letest Browser.
//        event.returnValue = false; // for IE 8 & Old xBrowser
    };

    for (var i = 0; i < len; i++) {
        urlLink[i].addEventListener("click", change, false); // for IE 9 & Next Letest Browser.
//        urlLink[i].attachEvent("onclick", change); //for IE 8 & Old xBrowser.


    }
} // End exercise 183---------------------------------------------

//Run Exercise.
//exercise180();
//exercise181();
//exercise182();
exercise183();

