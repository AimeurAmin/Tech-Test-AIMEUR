

function formValidation() {
  // DOM elements
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var birthdate = document.getElementById("birthdate");
  var phone = document.getElementById("phone");

  // verify if elements are not empty
  var notEmptyName = verifyNotEmpty(username); // called to apply css if there's a mistake made by user and stored in a variable to proceed later
  var notEmptyEmail = verifyNotEmpty(email);
  var notEmptyDate = verifyNotEmpty(birthdate);
  var notEmptyPhone = verifyNotEmpty(phone);

  // after checking if not empty phone and email needs to be checked again to confirm the right format.
  if(notEmptyEmail) {
    // called to apply css if there's a mistake made by user
    // and stored in a variable to proceed later
    var emailFormat = verifyEmail(email);
  }
  if(notEmptyPhone) {
    var phoneFormat = verifyPhone(phone);
  }
  
  if(notEmptyName && notEmptyEmail && notEmptyDate && notEmptyPhone) {
    // verify that email & phone number formats are correct
    if (emailFormat && phoneFormat) {
      // success
      document.getElementById('thanks-msg').style.display = 'block';
      document.getElementById('name').innerHTML = username.value;
      document.getElementById('user-form').style.display = 'none';
    }
  }

}

function verifyPhone(phone) {

  // reg exp to check if phone is valid 
  var phoneRegExOne = /^[+(1-9){1-3}]+[0-9]{9}$/;
  var phoneRegExTwo = /^[0]+[0-9]{9}$/;

  if(!phone.value.match(phoneRegExOne) && !phone.value.match(phoneRegExTwo)){
    // if not valid show warning
    phone.style.borderColor = 'red';
    document.getElementById('wrong-phone').style.display = 'block';
    return false;
  }
  else {
    // if not valid remove warning
    phone.style.borderColor = 'grey';
    document.getElementById('wrong-phone').style.display = 'none';
    return true;
  }
}

function verifyEmail(email) {

  var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  alert(email.value);
  if(!email.value.match(emailRegEx)){
    // if not valid show warning
    email.style.borderColor = 'red';
    document.getElementById('wrong-email').style.display = 'block';
    return false;
  }
  else {
    // if not valid show warning
    email.style.borderColor = 'grey';
    document.getElementById('wrong-email').style.display = 'none';
    return true;
  }
  
}

// check if an element is empty
function verifyNotEmpty(param) {
  if(param.value === '') {
    // if empty show required warning
    param.style.borderColor = 'red';
    document.getElementById('required-'+param.id).style.display = 'block';

    return false;
  } else {
    // if not empty remove required warning
    document.getElementById('required-'+param.id).style.display = 'none';
    param.style.borderColor = 'grey';
    return true;
  }
}