
var mainTitle = document.getElementById("mainTitle");
console.log("Node Type :",mainTitle.nodeType);
console.log("Inner HTML :",mainTitle.innerHTML);
console.log("Entity Node :",mainTitle.ENTITY_NODE);
console.log("Child Node :",mainTitle.childNodes);
console.log("Child Node length :",mainTitle.childNodes.length);
console.log("Attrivute Node :",mainTitle.ATTRIBUTE_NODE);
console.log("Comment Node :",mainTitle.COMMENT_NODE);
console.log("Document Node",mainTitle.DOCUMENT_NODE);

var homeNav = document.getElementsByTagName("li");
console.log("Home Nav Lenght :",homeNav.length);

var header = document.getElementById("header");
var linkTag = header.getElementsByTagName("a");
console.log("Link Tag :",linkTag.length);
console.log("Link Tag Inner HTML :",linkTag.innerHTML);
