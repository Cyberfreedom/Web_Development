/*
 var names = ["Jeremy", "Jeffrey"],
 names2 = ["Jennifer", "Jackie"];
 var people = names.concat(names2);
 var joined = people.join(", ");
 var reversed = people.reverse();
 var sorted = people.sort();
 
 alert(sorted);

 */
//User Exercise
var newArray = ["jQuery","JavaScript","John"];
newArray[4] = "jQueryNew";

newArray[newArray.length] = "Add New Array1";
newArray[newArray.length] = "Add New Array2";
newArray[newArray.length] = "Add New Array3";
var ArrayLength = newArray.length;

console.log("Arrays Lenght  :"+ArrayLength);
console.log("Arrays Value :"+newArray[1]);
document.getElementById("massage").innerHTML = newArray;