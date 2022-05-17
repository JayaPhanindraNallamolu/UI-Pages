let reqid = window.location.search.substr(1); //window.location.search ---> url //substr means ----> after ? only.
// console.log(reqid, "hai this is the id");

// var token = localStorage.getItem("Access_Token");
let url = `http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/job_detail?job_id=${reqid}`;
let jobdescription = document.getElementById("jobdescription");
let jobtitle = document.getElementById("jobtitle");
let recruitfield = document.getElementById("recruit");
let statusfield = document.getElementById("status");
let expiryfield = document.getElementById("expireddays");
let requirement = document.getElementById("requirement");
let offered = document.getElementById("offered");
let descriptionfield = document.getElementById("descriptionfield");
let joiningdate = document.getElementById("joiningdate");
let experiencefield = document.getElementById("experiencerange");
let ctcfield = document.getElementById("ctcrange");
let joiningdate1 = document.getElementById("joiningdate1");
let expirydate = document.getElementById("expireson");
let placement = document.getElementById("placements");
let assignee = document.getElementById("assignee");
let clientname = document.getElementById("clientname");
let clientname1 = document.getElementById("clientname1");
let clientlocation = document.getElementById("clientlocation");
let city = document.getElementById("location");
let hrname = document.getElementById("hrname");
let hrnumber = document.getElementById("hrnumber");
let hremail = document.getElementById("hremail");
fetch(url, {})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("DATA", data);
    jobdescription.innerHTML = data.title;
    jobtitle.innerHTML = data.title;
    const recruit = data.recruiters.length > 0 ? "S" : "";
    if (recruit == "S") {
      recruitfield.innerHTML = recruit;
      recruitfield.classList.add("recruit-element");
      document.getElementById("icon-element").classList.add("iconDisplay");
      assignee.innerHTML = data.recruiters[0].profile_name;
      assignee.classList.add("assignee-element");
    } else {
      assignee.innerHTML = "Unassigned";
      assignee.classList.add("assignee-element");
    }
    statusfield.innerHTML = data.status;

    expiryfield.innerHTML = dateconvert(data.expiry_date) + " Days";
    requirement.innerHTML = data.total_requirement;
    offered.innerHTML = data.hired_positions;
    descriptionfield.innerHTML = data.description;
    joiningdate.innerHTML = data.joining_date;
    experiencefield.innerHTML = convert(data.experience_range) + " Years";
    ctcfield.innerHTML = convert(data.experience_range) + " CTC";
    joiningdate1.innerHTML = data.joining_date;
    expirydate.innerHTML = data.expiry_date;
    placement.innerHTML = data.total_requirement;
    clientname.innerHTML = data.client.name;
    clientname1.innerHTML = data.client.name;
    clientlocation.innerHTML = data.location;
    city.innerHTML = data.location;
    hrname.innerHTML = data.hiring_manager.name;
    hrnumber.innerHTML = data.hiring_manager.phone;
    hremail.innerHTML = data.hiring_manager.email;
  });

function dateconvert(data) {
  const date1 = new Date();
  const date2 = new Date(data);
  const diffTime = Math.abs(date1 - date2);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function convert(num) {
  let date = num.toString().replace(",", "-");
  return date;
}

function redirectto() {
  window.location.href = "./dashboard.html";
}
