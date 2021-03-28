"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var registerHandler = function () {
    // get value from form
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var contact = "text";
    if ($("email").checked) {
        contact = "email";
    } else if ($("none").checked) {
        contact = "none";
    };
    var term = $("terms").checked;
    var isValid= true;
    // validate date on form
    if (email == "") {
        isValid == false;
        $("email_address ").nextElementSibling
    }
    // submit form
};

var resetHandler = function () {

};
 
window.onload = function () {
    $("register").onclick= registerHandler;
    $("reset_form").onclick =
}
