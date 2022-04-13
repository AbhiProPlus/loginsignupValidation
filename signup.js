/

function phonenumber(inputtxt)
{
  var phonenumber = /^\d{10}$/;
  if((inputtxt.value.match(phonenumber))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}

function phonenumber(inputtxt)
{
  var phonenumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((inputtxt.value.match(phonenumber))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}


// if(phonenumber.value!="/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/"){
//   alert("phone number should be of the form xxx-xxx-xxxx,xxx.xxx.xxxx,xxx xxx xxxx")
//   document.signup.phonenumber.focus();
//   return false;
// }

function validate() {
  var password = document.getElementById('Password').value,
      errors = [];
  if (password.length < 8) {
      errors.push("Your password must be at least 8 characters"); 
  }
  if (password.search(/[a-z]/i) < 0) {
      errors.push("Your password must contain at least one lower case letter.");
  }
  if (password.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit."); 
  }
  if (password.search(/[A-Z]/i) < 0) {
    errors.push("Your password must contain at least one upper case letter."); 
}
if (password.search(/[!@#$%^&*]/) < 0) {
  errors.push("Your password must contain at least one special character."); 
}
  if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
  }
  // return true;
}




  






