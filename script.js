
var input1 = prompt("Please input a password length between 8 and 128");
    alert ("You chose " + input1 + " for the length of your new password");

if (isNaN(length)===true){
    alert("Password Length must be a number");
}

if (input1<6){
    alert("Length must be Min of 68")
}

function generate() {

    let pwcv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let pw = "";


    for(var i=0; i <= input1; i++) {
       pw = pw + pwcv.charAt(Math.floor(Math.random() * Math.floor(pwcv.length - 1)));
       console.log(pw);
    }

    document.getElementById("generate").value = pw;

    document.getElementByPlaceholder("Your Secure Pasword").addEventListener("click", addpw) = document.getElementById(pw); 
    function addpw() {
        alert ("generate");
    }
    
    
    

}
