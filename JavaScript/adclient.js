document.addEventListener("DOMContentLoaded", () => {
  let access = localStorage.getItem("Access_Token");
  // console.log("Access token :", access);

  if (access == null) {
    window.location.href = "./login.html";
  }
});

function saveclientinfo() {
  var client_name = document.getElementById("clientname").value;
  var client_city = document.getElementById("clientcity").value;
  var client_num = document.getElementById("clientnum").value;
  var client_ext = document.getElementById("clientext").value;
  var client_address = document.getElementById("clientaddress").value;
  var client_website = document.getElementById("clientwebsite").value;

  let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/client";

  data = {
    address: [client_address],
    city: [client_city],
    name: client_name,
    phone: client_num,
    website: client_website,
    ext: client_ext,
  };
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };
  console.log(data);
  fetch(url, options)
    .then(function (res) {
      return res.json();
    })
    .then(function (jsonData) {
      if (jsonData.status === "A") {
        window.location.href = "./addjobs.html";
      }
      console.log(jsonData);
    });
}
