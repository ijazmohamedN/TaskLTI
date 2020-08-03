function validateForm() {
    let UserName = document.getElementById("emailField");
    let PassWord = document.getElementById("passWord");
    
    if (UserName.value=="Admin@gmail.com" && PassWord.value=="Admin123" ) {
        return true;
    }
    else {
        //document.getElementById("errorMessages").innerHTML="Invalid Credentials,Please tryagain!!";
        alert ("Invalid Credentials,Please tryagain!!");
        // document.getElementById("emailField").style.borderColor = "red";
        // document.getElementById("passWord").style.borderColor = "red";
        return false;
    }
}