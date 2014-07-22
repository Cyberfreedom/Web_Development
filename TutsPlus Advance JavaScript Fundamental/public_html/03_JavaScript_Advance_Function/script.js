//This is an anonymous function.
function active01() {

//    functionName00(); // work any where of this function.
//functionName01(); // Error it is not work if Call befor declaration.

    function functionName00() {
        alert("This is Function declaration syntax");
    }

    var functionName01 = function() {
        alert("This is nonanonymous function expression syntax");
    };
//    functionName01(); // it work after declaration.

} // End of  function Active01;

function active02() {

    functionName00("Golam Rabbaney", 25); // work any where of this function.

    function functionName00() {
        var length = arguments.length;
        alert("arguments Length :" + length);
        alert("Argument :" + arguments[0]);
    }

    functionName00("Golam Rabbaney", 25); // work any where of this function.

//    functionName01("Hello World", "Welcome Bangladesh");

    var functionName01 = function() {
        var length = arguments.length;
        alert("arguments lenght :" + length);
        alert("argument : " + arguments[1]);
    };
    functionName01("Hello World", "Welcome Bangladesh");
} // End of  function Active02;

function active03() {

    function functionName00() {
        var callee = arguments.callee;
        alert(callee);
    }
    functionName00();
} // End of  function Active03;

function active04() {

    function functionName00(arg) {
        return function() {
            alert(arg);
        };
    }

    var fu = functionName00("Hello, closer");
    var fu2 = functionName00("Hello, Bangledesh");
    fu();
    fu2();
    fu();
    fu = null;
} // End of  function Active04;

var active05 = function() {
    var i = 0;
    var emailGenerator = function() {
        var email = "eMailID" + i;
        i = i + 1;
        return email;
    };
    var eID01 = emailGenerator();
    var eID02 = emailGenerator();
    var eID03 = emailGenerator();
    var eID04 = emailGenerator();
    console.log(eID01, eID02, eID03, eID04);
}; // End of  function Active05;
var active06 = function() {
    var utility = (function() {
        var i = 0;
        return {
            iDGen: function() {
                var uniqueID = "idQ" + i;
                i = i + 1;
                return uniqueID;
            }
        };
    }());

    var iD1 = utility.iDGen();
    var iD2 = utility.iDGen();
    var iD3 = utility.iDGen();
    alert(iD1 + " " + iD2 + " " + iD3);
}; // End of  function Active05;
var active07 = function() {
    var utility = (function() {
        var i = 0;
        return{
            idGen: function() {
                var uniqueID = "NameID" + i;
                i = i + 1;
                return uniqueID;
            }
        };

    }());

    var ID1 = utility.idGen();
    var ID2 = utility.idGen();
    var ID3 = utility.idGen();
    var ID4 = utility.idGen();
    alert(ID1 + "  " + ID2 + "  " + ID3 + "  " + ID4);
};







//Call function.
//active01();
//active02();
//active03();
//active04();
//active05();
//active06();
active07();
