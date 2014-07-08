//document.getElementById("frmContact").onsubmit = function() {
//    // prevent a form from submitting if no email.
//    if (document.getElementById("email").value === "") {
//        document.getElementById("errorMessage").innerHTML = "Please provide at least an email address!";
//        // to STOP the form from submitting
//        return false;
//    } else {
//        // reset and allow the form to submit
//        document.getElementById("errorMessage").innerHTML = "";
//        return true;
//    }
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//};

var myForm = document.getElementById("frmContact");

myForm.onsubmit = function() {
    if (document.getElementById("email").value === "") {
        document.getElementById("errorMessage").innerHTML = "Please Enter Your Email Address ";
        return false;
    } 
    else {
        document.getElementById("errorMessage").innerHTML = "";
        return true;
    }
};
