//JavaScript Math Object
(function() {
    var example01 = function() {
        var currentDate = new Date();
        alert("Current Date :" + currentDate);
        var castomDate = new Date(1988, 7, 20);
        alert("Castom Date :" + castomDate);
        var castomDateTime = new Date(1988, 7, 20, 0, 1, 5);
        alert("Castom Date and Time :" + castomDateTime);
        alert(date.getFullYear());
    };
    var example02 = function() {
        var date = new Date();
        var currentMonth = date.getMonth();
        var monthDisplay = currentMonth + 1;
        // Future 15 years.
        var fullTime = date.getTime();
        var futureTime = fullTime + 473040000000;
        var futureDate = new Date(futureTime);
        
        
        var monthArray = [
            "Janualry",
            "February",
            "March",
            "Aril",
            "May",
            "Jun",
            "July",
            "August",
            "Septembar",
            "Octobar",
            "NovemBar",
            "Decembar"
        ];
        alert(date);
        alert(fullTime);
        alert(futureDate);
        alert(monthArray[monthDisplay]);

    };
//    example01();
    example02();

}());