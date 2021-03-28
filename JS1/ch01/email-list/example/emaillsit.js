var $ = function (id) {
    return document.getElementById(id);
  };
  
  var handleJoinList = function () {
    // get value
    var email1 = $("email1").value;
    var email2 = $("email2").value;
    var firstName = $("firstName").value;
    var isValid = true;
  
    // data validation
    if (email1 == "") {
      $("email1_error").firstChild.nodeValue = "This field is required";
      isValid = false;
    } else {
      $("email1_error").firstChild.nodeValue = "";
    }
  
    if (email2 == "") {
      $("email2_error").firstChild.nodeValue = "This field is required";
      isValid = false;
    } else {
      if (email2 != email1) {
        $("email2_error").firstChild.nodeValue = "Re-enter email must to match with email";
        isValid = false;
      } else {
        $("email2_error").firstChild.nodeValue = "";
      }
    }
  
    if (firstName == "") {
      $("firstName_error").firstChild.nodeValue = "This field is required";
      isValid = false;
    } else {
      $("firstName_error").firstChild.nodeValue = "";
    }
  
    if (isValid == true) {
      $("emailList").submit();
    }
  };
  
  window.onload = function () {
    $("Join_our_list").onclick = handleJoinList;
  };
  
