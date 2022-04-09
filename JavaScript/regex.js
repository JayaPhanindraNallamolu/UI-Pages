var emailreg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var passwordreg = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/;

function validateemail(emailv) {
  var result = emailv.match(emailreg);
  if (result) {
    return true;
  } else {
    return false;
  }
}
function validatepassword(passwordv) {
  var result = passwordv.match(passwordreg);
  if (result) {
    return true;
  } else {
    return false;
  }
}
