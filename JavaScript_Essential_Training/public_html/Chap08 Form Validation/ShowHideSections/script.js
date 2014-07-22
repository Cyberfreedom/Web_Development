//// show and hide sections of a form
//function preparePage() {
//	document.getElementById("brochures").onclick = function() {
//		if (document.getElementById("brochures").checked) {
//			// use CSS style to show it
//			document.getElementById("tourSelection").style.display = "block";
//		} else {
//			// hide the div
//			document.getElementById("tourSelection").style.display = "none";
//		}
//	};
//	// now hide it on the initial page load.
//	document.getElementById("tourSelection").style.display = "none";
//}
//
//window.onload =  function() {
//	preparePage();
//};
//
    function displayCnt(x,y){
    document.getElementById(x).onclick = function (){
      if (document.getElementById(x).checked){  
          document.getElementById(y).style.display = "block";
        }
      else{
          document.getElementById(y).style.display = "none";
      }  
    };
    document.getElementById(y).style.display = "none";
}



displayCnt("brochures","tourSelection");
displayCnt("checkeOut","contact");