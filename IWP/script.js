// validate brand form
function validateForm(){
    

    
    // validate username using regex pattern
    var name = document.getElementById("name").value;
    var pattern = /^[a-zA-Z0-9]{6,12}$/;
    if(!pattern.test(name)){
        alert("Username must be 6-12 characters and only contain letters and numbers");
        return false;
    }
    
    var name = document.getElementById("registrationNumber").value;
    var pattern = /^[0-9](2}[A-Za-z]{3}[0-9]{4}$/;
    if(!pattern.test(registrationNumber)){
        alert("Only 2022 batch can register");
        return false;
    }


     // validate VIT email using regex pattern
     var email = document.getElementById("email").value;
     var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(!pattern.test(email)){
         alert("Email must be in the format");
         return false;
     }

     // validate phone number using regex pattern
    var phone = document.getElementById("mobile").value;
    var pattern = /^[0-9]{10}$/;
    if(!pattern.test(mobile)){
        alert("Phone number must be 10 digits");
        return false;
    }

    // validate strong password using regex pattern
    var password = document.getElementById("password").value;
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(!pattern.test(password)){
        alert("Password must be at least 8 characters and contain at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character");
        return false;
    }
   
   
    
}





