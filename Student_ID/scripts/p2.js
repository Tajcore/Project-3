
function validate(){
    var e_mail_regex = /^\w+([\.-]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/i;
    var yos = document.getElementById("yos_");
    var input_arr = document.querySelectorAll("input");
    var password = document.getElementById("password_").value, confirm_password = document.getElementById("confirm_pass").value;
    console.log(password)
    console.log(confirm_password)
    for (i = 0; i < input_arr.length ; i++){        
        if (input_arr[i].value == ""){       
            input_arr[i].style.backgroundColor = "red";
            input_arr[i].className += " white_"
            input_arr[i].setCustomValidity("This field is required")
            
    }
    if (e_mail_regex.test(document.getElementById("email_").value) == false){
        document.getElementById("email_").style.backgroundColor = "red";
        document.getElementById("email_").style.color = "white";
        document.getElementById("email_").className += " white_"
    }
    if (!(yos.value > 0) || !(yos.value < 50)){
        yos.style.backgroundColor = "red"
        yos.style.color = "white";
        yos.className += " white_"
        yos.setCustomValidity("Value has to be between 0-50")
    }
    if (password != confirm_password){
        document.getElementById("password_").style.backgroundColor = "red";
        document.getElementById("password_").style.color = "white";
        document.getElementById("password_").className += " white_"
        document.getElementById("confirm_pass").style.backgroundColor = "red";
        document.getElementById("confirm_pass").style.color = "white";
        document.getElementById("confirm_pass").className += " white_";
        document.getElementById("confirm_pass").setCustomValidity("Passwords do not match")
    }

}
}