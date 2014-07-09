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
 var currentTag = document.querySelectorAll("p");
 alert(currentTag.length);
 var createTag = document.createElement("p");
 var appendTag = document.body.appendChild(createTag);
 alert(currentTag.length);
 */


/*
 //Create and Add a Tag Element.
 (function(){
 var el = document.createElement("p");
 alert(document.getElementsByTagName("p").length);
 document.body.appendChild(el);
 alert(document.getElementsByTagName("p").length);
 }());
 */



/*
 //Create and Adding Tag Elements.
 (function(){
    var newTag = document.createElement("h3");
    document.body.appendChild(newTag);
    newTag.textContent = "This is New Tag Adding by Js Create Element";
 
    var newTag2 = document.createElement("p");
    document.body.appendChild(newTag2);
    newTag2.innerHTML = "This is a <strong> Peragraph Tag </strong>Adding by CreateElement";
 }());
 */



/*
 //Adding Content by InnerHtml.
 (function(){
 var addHtml = document.getElementById("foo");
 var htmlContent;
 htmlContent = "<br>This is InnerHTML Content One";
 htmlContent = htmlContent + "<br>This is InnerHTML Content Two";
 htmlContent = htmlContent + "<br>This is InnerHTML Content Three";
 
 addHtml.innerHTML = htmlContent;
 }());
 */


/*
 //Create and Adding Element by querySelector.
(function() {
    var pElement = document.querySelectorAll("p");
    alert(pElement.length);
    var crtElement = document.createElement("p");
    document.body.appendChild(crtElement);
    pElement = document.querySelectorAll("p");
    alert(pElement.length);
}());
 */

/*
 //Create Element, Append Element, Create Text Node, Append Text Node , Set Attribute,set ID, Set Class, Replace Child.
(function() {
    var newElement = document.createElement("p");                            //Create a Elemnt P Tag.
    document.body.appendChild(newElement);                                  //Append this Element as a Child of Document > Body
    var content = document.createTextNode("This is a Example Text Node"); //Create A Text Node.
    var content2 = document.createTextNode("This is a Example Text Node2"); //Create A Text Node.
    newElement.appendChild(content);                                      //Append This Text Node as a Child Node of p Element
    newElement.setAttribute("align","right");                             // Set A attribute align.
    newElement.id = "myID";                                               // Set A New ID Named myID.
    newElement.className = "myClass";                                       // Set A new Class Name Color.
    newElement.replaceChild(content2,content);                            // Replace Text node content to content2.
}());
 */
//Exercise Create Element, Append Element, Create Text Node, Append Text Node , Set Attribute,set ID, Set Class, Replace Child.
(function() {
    
    var doc = document;
    var pElement = doc.createElement("p");
    var hElement = doc.createElement("h1");
    var idElement = doc.getElementById("bar");
    
    doc.body.appendChild(pElement);
    doc.body.appendChild(hElement);
    
    var content0 = doc.createTextNode("This is simple Exercise0 Text Node");
    var content1 = doc.createTextNode("This is simple Exercise1 Text Node");
    var content2 = doc.createTextNode("This is simple Exercise2 Text Node");
    var content3 = doc.createTextNode("This is simple Exercise3 Text Node");
    
    pElement.appendChild(content0);
    pElement.id = "myID";
    pElement.className = "myClass";
    pElement.setAttribute("align","right");
    
    hElement.innerHTML = "This is h1 Element <i>InnerHtml</i> Content<br>";
    hElement.className = "myClass";
    hElement.appendChild(content1);
    hElement.replaceChild(content2,content1);
    
    idElement.parentNode.appendChild(content3);
    idElement.parentNode.insertBefore(hElement,idElement);
    
}());

