
//Protected Function
(function() {
    var example = function() {
//        var myArray = [10, 12, 16, 19, 18, 111, 5555];

        var pr01 = 10;
        var pr02 = 11;
        var pr03 = 9;
        var pr04 = 17;
        var minvalue = Math.min(pr01, pr02, pr03, pr04);

        var maxvalue = Math.max(pr01, pr02, pr03, pr04);

        document.getElementById("massage").innerHTML = Math.pow(3, 3);
        document.getElementById("massage1").innerHTML = Math.sqrt(3, 3);
        document.getElementById("massage2").innerHTML = Math.min(minvalue);
        document.getElementById("massage3").innerHTML = Math.max(maxvalue);
        document.getElementById("massage4").innerHTML = Math.PI;
        document.getElementById("massage5").innerHTML = Math.random();  //rendom code generat by 
        document.getElementById("massage6").innerHTML = Math.random() * 50 + 1; //random code generator 1 to 50;
        document.getElementById("massage7").innerHTML = Math.abs(-7.23);
        document.getElementById("massage8").innerHTML = Math.round(9.31);
        document.getElementById("massage9").innerHTML = Math.ceil(9.99);
        console.log(Math.sin(3));
    };
    example();

}());