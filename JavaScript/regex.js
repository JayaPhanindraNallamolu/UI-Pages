// var emailreg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
// var passwordreg = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/;

// function validateemail(emailv) {
//   var result = emailv.match(emailreg);
//   if (result) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function validatepassword(passwordv) {
//   var result = passwordv.match(passwordreg);
//   if (result) {
//     return true;
//   } else {
//     return false;
//   }
// }

var namereg = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/;
var emailreg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var mobilereg = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
var webreg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
var addressreg = /^([a-zA-z0-9\/\\''(),.\-\s]{2,255})$/;
var datereg =
  /^(1[0-2]|0?[1-9]).(3[01]|[12][0-9]|0?[1-9]).(?:[0-9]{2})?[0-9]{2}$/;
var pancardreg = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/;
var numberreg = /^-?[0-9][0-9,\.]+$/;
var postalcodereg = /^[1-9][0-9]{5}$/;
var passwordreg = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/;

function validatename(name) {
  var result = name.match(namereg);
  if (result) {
    return true;
  } else {
    return false;
  }
}
function validatemobile(phone) {
  var result = phone.match(mobilereg);
  if (result) {
    return true;
  } else {
    return false;
  }
}

function validateemail(gmail) {
  var result = gmail.match(emailreg);
  if (result) {
    return true;
  } else {
    return false;
  }
}

function validatepassword(pass) {
  var result = pass.match(passwordreg);
  if (result) {
    return true;
  } else {
    return false;
  }
}

function validateaddress(addr) {
  var result = addr.match(addressreg);
  if (result) {
    return true;
  } else {
    return false;
  }
}
function validatepostalcode(post) {
  var result = post.match(postalcodereg);
  if (result) {
    return true;
  } else {
    return false;
  }
}
function validateweburl(web) {
  var result = web.match(webreg);
  if (result) {
    return true;
  } else {
    return false;
  }
}
function validatepancard(pan) {
  var result = pan.match(pancardreg);
  if (result) {
    return true;
  } else {
    return false;
  }
}
function validatenumber(num) {
  var result = num.match(numberreg);
  if (result) {
    return true;
  } else {
    return false;
  }
}
function validatedate(day) {
  var result = day.match(datereg);
  if (result) {
    return true;
  } else {
    return false;
  }
}
