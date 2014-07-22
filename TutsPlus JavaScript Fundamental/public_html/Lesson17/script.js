function exercise170() {

    var buttons = document.getElementsByTagName("a");

    for (var i = 0, len = buttons.length; i < len; i = i + 1) {
        /*buttons[i].onclick = function() {
         var className = this.innerHTML.toLowerCase();
         
         document.body.className = className;
         };*/

        buttons[i].addEventListener("click", function(evt) {
            var className = this.innerHTML.toLowerCase();

            evt.preventDefault();

            document.body.className = className;
        }, false);
    }

}// End exercise 170----------------------------------------------
function exercise171() {
    var link = document.getElementsByTagName("a");
    var len = link.length;
    var myFunction = function() {
        var change = this.innerHTML.toLowerCase();
        document.body.className = change;
        alert("Hello JavaScript Developer!");
    };
    for (var i = 0; i < len; i++) {
        link[i].addEventListener("click", myFunction, false);
        link[i].addEventListener("click", function(typ) {
//            alert(typeof typ);    //display type of data.
            alert(typ.target);      //display target Site.
            typ.preventDefault();  //Prevent go target site. 
        }, false);
//        link[i].removeEventListener("click",myFunction,false);  //remove first EventListener.
    }

}// End exercise 170----------------------------------------------
function exercise172() {
        var massage = document.getElementById("cnt");
    var changeMassage = function() {
        if (massage.firstChild.nodeValue === "Bangaldesh") {
            massage.firstChild.nodeValue = "Welcome to our beautyful Bangladesh";
            massage.className = changed;
        }
        else {
            massage.firstChild.nodeValue = "Welcome to our beautyful country!";
        }
    };
    var background = function(){
        document.body.className = "changed";
    };
    
    massage.addEventListener("click",changeMassage,false);
    massage.addEventListener("click",background,false);


}
//exercise170();
//exercise171();
exercise172();