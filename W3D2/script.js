window.onload = function () {
let password = document.getElementById("password"),
    repassword = document.getElementById("repassword");
 let passw = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  //this is for page redirect
  function getData() {
    //gettting the values
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;

    //saving the values in local storage
    localStorage.setItem("txtValue", email);
    localStorage.setItem("txtValue1", password);
    localStorage.setItem("txtValue2", mobile);
    localStorage.setItem("txtValue3", telephone);
  }

  function validatTheInput() {
    if (!password.value.match(passw) || !repassword.value.match(passw)) {
      alert("enter vaild password please");
    }
  }

  document.getElementById("form").onsubmit = function () {
    validatTheInput();
    validatePassword();
    getData();
  };

  function validatePassword() {
    if (password.value != repassword.value) {
      repassword.setCustomValidity("Your Passwords Don't Match");
    } else {
      repassword.setCustomValidity("");
    }
  }

  password.onchange = validatePassword;
  repassword.onkeyup = validatePassword;
};
