

// use the commented-out code for reference, or just write your own. 

//document.onclick = function() {
//	alert("You clicked somewhere in the document");
//};

//function prepareEventHandlers() {	
//	var myImage = document.getElementById("mainImage");
//	myImage.onclick =  function() {
//		alert("You clicked the image");
//	}
//}

//window.onload = function() {
// prep anything we need to
//	prepareEventHandlers();
//};
//______________________User Exercise _____________________

//document.onclick = function (){
//    alert("Hello World!");
//};

function radeyWindow() {

    var mainImage = document.getElementById("mainImage");
    mainImage.onclick = function() {
        alert("Checkd Image Onclick Script");
    };
}

window.onload = function() {
    radeyWindow();
};