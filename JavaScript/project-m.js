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

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        console.log(Object.values(data)[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
