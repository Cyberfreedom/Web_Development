
 //This Code Develope By TutsPlus JavaScript Fundamental Tutorial.
 function activeA(){
 var divFoo = document.getElementById("foo"),
 style = divFoo.style;
 
 divFoo.className = "css-class css-class2";
 
 //var color = window.getComputedStyle(divFoo, null).getPropertyValue("color");
 
 
 var getStyle = function(el, cssProperty) {
 if (typeof getComputedStyle !== "undefined") {
 return window.getComputedStyle(el, null).getPropertyValue(cssProperty);
 } else {
 return el.currentStyle[cssProperty];
 }
 };
 
 var color = getStyle(divFoo, "color");
 
 
 alert(color);
 
 //alert(style.color);
 
 }


//Call this functon For Active this active1();
function active1() {
    var userfoo = document.getElementById("foo");
    userfoo.style.color = "red";
    userfoo.className = "css-class";
    userfoo.id = "foo";
}



//JavaScript Css Selector .
function active2() {
    var pElement = document.createElement("p");
    document.body.appendChild(pElement);
    var content = document.createTextNode("This is tipical TextNode for Test Exercise");
    pElement.appendChild(content);

    pElement.className = " css-class  css-class2 ";
    //pElement.className = ""; //remove prvious classess.
    pElement.className = pElement.className.replace(" css-class ", " newCss "); //replace Css selector.

    var myStyle = pElement.style;
    myStyle.fontSize = "2em";
    myStyle.boxShadow = "-1px -1px 10px black";
}


//JavaScript Class List
function active3() {
    var pElement = document.createElement("h2");
    document.body.appendChild(pElement);
    pElement.innerHTML = "This is JavaScript <strong> Css Class list </strong> Exercise";
    pElement.classList.add("css-class");
    pElement.classList.add("css-class2");
    pElement.classList.add("newCss");
    pElement.classList.toggle("newCss"); //toggle on newCss
    pElement.classList.toggle("newCss"); // toggle off newCss.
//      pElement.classList.remove("css-class2"); //remove class form lisr
    var check = pElement.classList.contains("newcss");
    alert(check);
}


/*
 Window.getComputedStyle Reference Exercise.
 */
function active4() {
    /*
     Window.getComputedStyle Reference Exercise.
     */
    var myElement = document.getElementById("styleId");
    var colorValue = window.getComputedStyle(myElement, null).getPropertyValue("color");
    var background = window.getComputedStyle(myElement, null).getPropertyValue("background-color");
    var fontFamily = window.getComputedStyle(myElement, null).getPropertyValue("font-family");
    var paddingLeft = window.getComputedStyle(myElement, null).getPropertyValue("padding-left");
    var paddingTop = window.getComputedStyle(myElement, null).getPropertyValue("padding-top");
    var marignTop = window.getComputedStyle(myElement, null).getPropertyValue("margin-top");
    var fontSize = window.getComputedStyle(myElement, null).getPropertyValue("font-size");

    var massage = document.defaultView.getComputedStyle(myElement, null);

    var result = "Css color Value : " + colorValue + "<br>" +
            "Css Background  : " + background + "<br>" +
            "Css font Family : " + fontFamily + "<br>" +
            "Css Padding Left: " + paddingLeft + "<br>" +
            "Css Padding top : " + paddingTop + "<br>" +
            "Css Margin top  : " + marignTop + "<br>" +
            "Css font-Size   : " + fontSize + "<br>";

    document.getElementById("result").innerHTML = result;
}
/*
 Example css CurrentStyle[];
 */
function active5() {
    //currentStyle[] Work Only for IE Browser. 
    var idElement = document.getElementById("styleId");
    var styleValue = idElement.currentStyle["color"];
    alert(styleValue);
}
// X brouwser IE with getComputedStyle & currentStyle.
function active6() {
    // Letest Browser support
    var idElement = document.getElementById("styleId");

    if (typeof getComputedStyle !== "undefined") {
        var color = window.getComputedStyle(idElement, null).getPropertyValue("color");
        alert(color);
    } else {
        var background = idElement.currentStyle["background-color"];
        alert(background);
    }
}
function active7() {

    var idElement = document.getElementById("styleId");

    function xBrowser(pr1, pr2) {
        if (typeof getComputedStyle !== "undefined") {
            return window.getComputedStyle(pr1, null).getPropertyValue(pr2);
        }
        else {
            return pr1.currentStyle[pr2];
        }
    }

    var color = xBrowser(idElement, "background-color"); //call and value pass of function.
    alert(color);
}

active7();
