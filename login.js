let Email = document.getElementById("Email")
let Password = document.getElementById("Password")

function validate (){
    if(Email.value.trim()==""||Password.value.trim()==""){
        alert ("Fields cannot be empty");
        return false;
    }
    else{
        return true;
        alert("validation is proper");
    }
}

