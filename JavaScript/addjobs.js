document.addEventListener("DOMContentLoaded", () => {
  let access = localStorage.getItem("Access_Token");
  // console.log("Access token :", access);

  if (access == null) {
    window.location.href = "./login.html";
  }

  // CK editor code:

  CKEDITOR.replace("editor1", {
    extraPlugins: "editorplaceholder",
    editorplaceholder: "Job description",
  });

  //Datepicker code:

  $(function () {
    $(".datepicker").datepicker({
      format: "yyyy/mm/dd",
      autoclose: true,
      showOnFocus: false,
    });
  });

  // Number of requirements code:

  let selectmen = document.getElementById("selectNumber");
  let output = `<option>Number of requirements</option>`;

  for (let i = 1; i <= 100; i++) {
    output += `<option vlaue="${i}">${i}</option>`;
  }
  selectmen.innerHTML = output;

  //Clientlist API

  const selectdrop = document.getElementById("selectclient");
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
  const clientid = document.getElementById("selectclient").value;
  alert(clientid);
  // For location
  const city = document.getElementById("selectlocation");
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

  const select = document.getElementById("selecthrmanager");
  fetch("http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/hiringmanager")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      let output = `<option>Choose Hiring Manager</option>`;
      for (let i = 0; i < data.length; i++) {
        if (data[i].client_id == clientid) {
          output += `<option value = "${data[i].id}">${data[i].name}</option>`;
        }
      }
      select.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
};

// multirange selector content

// var inputLeft = document.getElementById("input-left");
// var inputRight = document.getElementById("input-right");

// var thumbLeft = document.querySelector(".slider > .thumb.left");
// var thumbRight = document.querySelector(".slider > .thumb.right");
// var range = document.querySelector(".slider > .range");

// function setLeftValue() {
//   var _this = inputLeft,
//     min = parseInt(_this.min),
//     max = parseInt(_this.max),
//     _thisvalue = Math.min(parseInt(_thisvalue), parseInt(inputRight.value) - 1);
//   var percent = ((_thisvalue - min) / (max - min)) * 100;

//   thumbLeft.style.left = percent + "%";
//   thumbRight.style.right = percent + "%";
// }
// setLeftValue();
// inputLeft.addEventListener("input", setLeftValue);

function savejdinfo() {
  var title = document.getElementById("Inputjobtitle").value;
  // var description = document.getElementById("editor2").value;
  var description = CKEDITOR.instances["editor1"].getData();
  // alert(description);
  var clientid = document.getElementById("selectclient").value;
  var city = document.getElementById("selectlocation").value;
  var hiringmanager = document.getElementById("selecthrmanager").value;
  var technologies = document.getElementById("Inputtechtitle").value;
  // console.log("'" + technologies + "'");
  var arr = technologies.split(",");
  // console.log(arr);
  var joiningdate = document.getElementById("datepicker1").value;
  var expirydate = document.getElementById("datepicker2").value;
  // alert(joiningdate + " :: " + expirydate);
  var requirement = document.getElementById("selectNumber").value;
  var salarymin = document.getElementById("minrange").value;
  var salarymin = parseInt(salarymin, 10);
  var salarymax = document.getElementById("maxrange").value;
  var salarymax = parseInt(salarymax, 10);
  var experiencemin = document.getElementById("minexrange").value;
  var experiencemin = parseInt(experiencemin, 10);
  var experiencemax = document.getElementById("maxexrange").value;
  var experiencemax = parseInt(experiencemax, 10);

  let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/create_jd";

  data = {
    client_id: clientid,
    description: description,
    experience_range: [experiencemin, experiencemax],
    expiry_date: expirydate,
    hiringmanager_id: hiringmanager,
    hrmanager_id: "0",
    id: 0,
    joining_date: joiningdate,
    location: city,
    salary_range: [salarymin, salarymax],
    technologies: arr,
    title: title,
    total_requirement: requirement,
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
      if (jsonData.status === "Success") {
        window.location.href = "./dashboard.html";
      }
      console.log(jsonData.status);
    });
}
