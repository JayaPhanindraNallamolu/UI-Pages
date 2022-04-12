function validatesignin() {
  const emailv = document.getElementById("projectmemail").value;
  emailtext.innerText = " ";
  if (emailv == "") {
    projectmemail.style.border = "2px solid red";
    emailtext.innerText = "Required";
    emailtext.style.color = "red";
  } else {
    var temp = validateemail(emailv);
    if (!temp) {
      projectmemail.style.border = "2px solid red";
      emailtext.innerText = "Invalid Email";
      emailtext.style.color = "red";
    } else {
      projectmemail.style.border = "2px solid green";
    }
  }
  const passwordv = document.getElementById("projectmpassword").value;
  passwordtext.innerText = " ";
  if (passwordv == "") {
    projectmpassword.style.border = "2px solid red";
    passwordtext.innerText = "Required";
    passwordtext.style.color = "red";
  } else {
    var valid = validatepassword(passwordv);
    if (!valid) {
      projectmpassword.style.border = "2px solid red";
      passwordtext.innerText = "Invalid Password";
      passwordtext.style.color = "red";
    } else {
      projectmpassword.style.border = "2px solid green";
    }
  }

  if (temp && valid) {
    let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/login";
    const data = { username: emailv, password: passwordv };

    try {
      fetch(url, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg) {
            console.log(data.msg);
            passwordtext.innerText = "";
            passwordtext.style.color = "red";
            passwordtext.innerText = data.msg;
          } else {
            console.log("Success:", data);
            console.log("Access token : ", Object.values(data)[0]);
            localStorage.setItem(
              "Access Token",
              JSON.stringify(data.access_token)
            );
            window.location.href = "./projectm-step2.html";
            // localStorage.setItem("Refresh Token", JSON.stringify(Object.values(data)[5]));
            // console.log("Refresh token : ", Object.values(data)[5]);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.log(error);
    }
  }
}

function togglepassword() {
  var x = document.getElementById("projectmpassword");
  var y = document.getElementById("togglepassword");
  if (x.type === "password") {
    y.classList.toggle("fa-eye-slash");
    y.classList.toggle("fa-eye");
    x.type = "text";
  } else {
    y.classList.toggle("fa-eye");
    y.classList.toggle("fa-eye-slash");
    x.type = "password";
  }
}
