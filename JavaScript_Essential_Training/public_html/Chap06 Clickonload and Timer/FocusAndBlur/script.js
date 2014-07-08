//
//var emailField = document.getElementById("email");
//
//emailField.onfocus = function() {
//	if ( emailField.value === "your email") {
//		emailField.value = "";
//	}
//};
//
//emailField.onblur = function() {
//	if ( emailField.value === "") {
//		emailField.value = "your email";
//	}
//};
////_____________________User Exercise_______________________
//
//var emailFild = document.getElementById("email");
//
//emailFild.onfocus = function (){
//    if (emailFild.value === "Enter Your Email"){
//        emailFild.value = "";
//    }
//} ;
//emailFild.onblur = function (){
//    if (emailFild.value === ""){
//        emailFild.value = "Enter Your Email";
//    }
//}; 


var emailFild = document.getElementById("email");

emailFild.onfocus = function() {
    if (emailFild.value === "Enter Your Email") {
        emailFild.value = "";
    }
};
emailFild.onblur = function() {
    if (emailFild.value === "") {
        emailFild.value = "Enter Your Email";
    }
};

var nameFild = document.getElementById("name2");

nameFild.onfocus = function() {
    if (nameFild.value === "Enter Your Name"){
        nameFild.value = "";
    }
};
nameFild.onblur = function() {
    if (nameFild.value === ""){
        nameFild.value = "Enter Your Name"; 
    }
};


var emailFild2 = document.getElementById("email2");

emailFild2.onfocus = function() {
    emailFild2.value = "";
//    if (emailFild2.value === ""){
//        emailFild2.value = "";
//    }
};
emailFild2.onblur = function() {
    if (emailFild2.value === ""){
        emailFild2.value = "Enter Your Email"; 
    }
};