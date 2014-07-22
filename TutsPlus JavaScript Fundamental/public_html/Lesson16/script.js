window.onload = function() {

    function exercise160() {
        var buttons = document.getElementsByTagName("button");

        for (var i = 0, len = buttons.length; i < len; i = i + 1) {
            buttons[i].onclick = function() {
                var className = this.innerHTML.toLowerCase();

                document.body.className = className;
            };

//            buttons[i].onclick = function() {
//                var className = this.innerHTML.toLowerCase();
//                document.body.className = className;
//            };
        }

    } //End of Exercise 160-------------------------------------------- 
    function exercise161() {
        var box = document.getElementById("box");
        box.className = "box";
        box.innerHTML = "Readey";
        box.onclick = function() {
            if (box.className === "box") {
                this.className = "box active";
                box.innerHTML = "ON";
            } else {
                this.className = "box";
                box.innerHTML = "OFF";
            }
        };

    } //End of Exercise 161--------------------------------------------
    function exercise162() {
        var button = document.getElementsByTagName("button");
        var len = button.length;
        for (var i = 0; i < len; i++) {
            button[i].onclick = function() {
                var caseChange = this.innerHTML.toLowerCase();
                document.body.className = caseChange;
            };
        }
    } //End of Exercise 160-------------------------------------------- 

//    exercise160();
    exercise161();
    exercise162();

}; // End Window Onload function-------------------------------------