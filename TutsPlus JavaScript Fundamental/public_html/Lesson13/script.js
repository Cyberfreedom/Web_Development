/*
(function() {

    var doc = document,
            pFoo = doc.getElementById("foo");


    var html = pFoo.innerHTML;

    html = html + "<br/>This was, too";
    html = html + "<br/>This was, too 2";
    html = html + "<br/>This was, too 3";

    pFoo.innerHTML = "";


//doc.body.appendChild(el);


}());

*/
/*
var taglist = document.getElementsByTagName("p"); 
alert(taglist.length); //5

var apTag = document.createElement("p");
document.body.appendChild(apTag);

alert(taglist.length); //6

*/
/*
 * This is Exercise File for Test Git hub push.
 */
var currentTag = document.querySelectorAll("p");
alert(currentTag.length);

var createTag = document.createElement("p");
var appendTag = document.body.appendChild(createTag);

alert(currentTag.length);