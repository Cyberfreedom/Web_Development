/*
var doSomething = function(parmOne, paramTwo, fn) {
    parmOne = parmOne + 3;
    parmOne = parmOne + 1;
    parmOne = parmOne * 8;
    return fn(parmOne, paramTwo);
};

function sum(paramOne, paramTwo) {
    return paramOne + paramTwo;
}

// set one
var foo = doSomething(2, 2, sum); // 96

// set two
var bar = doSomething(3, 2, function(paramOne, paramTwo) {
    return paramOne * paramTwo;
}); // 112

alert(foo);
alert(bar);

*/
//Users Exercise
/*
var foo = 8;
var bar = 3;

var myResult = function (one,two,sumFu){
    one = one + 5;
    one = one - 2;
    one = one / 2;
    one = one * two;
    return sumFu(one,two);
};

function sumFu(par1,par2){
    return par1 + par2;
}

var output = myResult(foo,bar,sumFu);

alert(output);

*/

function sum(val1,val2){
    return val1 + val2;
}
function sub(val1,val2){
    return val1 - val2;
}
function mul(val1,val2){
    return val1 * val2;
}
function div (val1,val2){
    return val1 / val2;
}

mainFunction = function (par1,par2,par3){

    return par3(par1,par2);
};

var foosum = mainFunction(9,3,sum);
var foosub = mainFunction(9,3,sub);
var foomul = mainFunction(9,3,mul);
var foodiv = mainFunction(9,3,div);
console.log("SUM :"+foosum+"    SUB :"+foosub+"     MUL :"+foomul+"     DIV :"+foodiv);