document.addEventListener("DOMContentLoaded", () => {
  let access = localStorage.getItem("Access_Token");
  // console.log("Access token :", access);

  if (access == null) {
    window.location.href = "./login.html";
  }

  //Clientlist API

  const selectdrop = document.getElementById("hmclientlist");
  fetch("http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/client")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = `<option>Choose Client</option>`;
      for (let i = 0; i < data.length; i++) {
        output += `<option value = "${data[i].id}">${data[i].name}</option>`;
      }
      selectdrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});

const getclientname = () => {
  const clientid = document.getElementById("hmclientlist").value;
  // console.log(clientid);
  // For location
  const city = document.getElementById("hmclientcity");
  fetch("http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/client")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = `<option>Choose Location</option>`;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == clientid) {
          output += `<option value = "${data[i].city}">${data[i].city}</option>`;
        }
      }
      city.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
};

function saveclientinfo() {
  var hm_name = document.getElementById("hmname").value;
  var hm_mobile = document.getElementById("hmmobile").value;
  var hm_email = document.getElementById("hmemail").value;
  var hm_clientid = document.getElementById("hmclientlist").value;

  let url =
    "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/hiringmanager";

  data = {
    cell: hm_mobile,
    client_id: hm_clientid,
    email: hm_email,
    name: hm_name,
    phone: hm_mobile,
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
