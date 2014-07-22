//create the elements
//var newHeading = document.createElement("h1");
//var newParagraph = document.createElement("p");

// to add content, either use innerHTML
//newHeading.innerHTML = "Did You Know?";
//newParagraph.innerHTML = "California produces over 17 million gallons of wine each year!";

// OR create child nodes manually
//var h1Text = document.createTextNode("Did You Know?");
//var paraText = document.createTextNode("California produces over 17 million gallons of wine each year!");
// and add them as child nodes to the new elements
//newHeading.appendChild(h1Text);
//newParagraph.appendChild(paraText);

// and we still need to attach them to the document!
//document.getElementById("trivia").appendChild(newHeading);
//document.getElementById("trivia").appendChild(newParagraph);


//var myElement = document.getElementById("homeNav");

//--------------User Exercsie------------------------------
//__________________Create Element___________________________________
//var mainContent = document.getElementById("mainContent");
//console.log(mainContent.innerHTML);

var addContent = document.createElement("h1");
mainContent.appendChild(addContent); 
addContent.innerHTML = "Welcome To JavaScript World!";

//__________________Create Text Node__________________________________
//var footerRightCol = document.getElementById("footerRightCol");
//console.log(footerRightCol.innerHTML);

var addFooterR = document.createTextNode("Hello Js Hunter!");
footerRightCol.appendChild(addFooterR);

//__________________Create Element __________________________________

//var trivia = document.getElementById("trivia");
//console.log(trivia.innerHTML);

var trivaHeading = document.createElement("h1");
var trivaPeragraph = document.createElement("p");

trivia.appendChild(trivaHeading);
trivaHeading.innerHTML = "Did You Know?";
trivia.appendChild(trivaPeragraph);
trivaPeragraph.innerHTML = "Have a Fun for Test JavaScript DOM";
//_____________________Create Before Element__________________________

//var quickNav = document.getElementById("quickNav");
//console.log(quickNav.innerHTML);

var myFirstNav = document.createElement("li");
var mySecondNav = quickNav.getElementsByTagName("li")[2];
quickNav.insertBefore(myFirstNav,mySecondNav);
myFirstNav.innerHTML = "Js New Nav";
//____________________Create Before Element____________________________

var homeNavOne = document.createElement("li");
var homeNavTwo = homeNav.getElementsByTagName("li")[2];
homeNav.insertBefore(homeNavOne,homeNavTwo);
homeNavOne.innerHTML = "JavaScript Karisma";