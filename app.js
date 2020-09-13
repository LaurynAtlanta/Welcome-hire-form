let password = document.getElementById("password");
let confirm = document.getElementById("confirm");
let form = document.querySelector('form');
let email = document.querySelector('#email');

function validatePassword(){
  if(password.value != confirm.value) {
    confirm.setCustomValidity("Passwords dont match");
  } else {
    confirm.setCustomValidity('');
  }
}


form.addEventListener('change', function(e){
    e.preventDefault();
    validatePassword();

});

