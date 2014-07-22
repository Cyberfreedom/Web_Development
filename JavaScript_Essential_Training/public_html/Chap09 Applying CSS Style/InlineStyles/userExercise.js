/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//function prepareWindow(){
//    var mainArticle = document.getElementById("mainArticle");
//    mainArticle.style.backgroundColor = "yellow";
//    mainArticle.style.fontSize = "1.2em";
//    document.getElementById("trivia").className = "testClass";
//}

function prepareWindow(){
    document.getElementById("mainArticle").onclick = function(){
        if (document.getElementById("mainArticle").className === ""){
            document.getElementById("mainArticle").className = "testClass";
        }
        else{
           document.getElementById("mainArticle").className = ""; 
        }
    };
}

window.onload = function (){
    prepareWindow();
};