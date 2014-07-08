var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align","right");
mainContent.setAttribute("align","left");

mainTitle = document.getElementById("mainTitle");
console.log(mainTitle.innerHTML);


var sidebar = document.getElementById("sidebar");
console.log(sidebar.childElementCount);
//console.log(sidebar.innerHTML);

var arrayOfH1s = mainContent.getElementsByTagName("h1");
//arrayOfH1s[1].innerHTML="JavaScript Control Title";
arrayOfH1s[0].innerHTML = "This is a New Title control by JavaScript!";

var homeNav = document.getElementById("homeNav");
var navLi = homeNav.getElementsByTagName("li");

alert(navLi[1]);