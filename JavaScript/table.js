let data = [];
fetch("http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/get_all_profiles")
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    var heading_row = document.createElement("tr");
    for (var k in json[0]) {
      if (
        k == "primary_skill" ||
        k == "comments" ||
        k == "job_details" ||
        k == "secondary_skill" ||
        k == "interviewer" ||
        k == "jd_chat" ||
        k == "jd_id" ||
        k == "jd_name" ||
        k == "interview_date" ||
        k == "round" ||
        k == "stage_id" ||
        k == "source"
      ) {
        continue;
      }
      var heading = document.createElement("th");
      heading.innerHTML = k;
      heading_row.appendChild(heading);
    }
    document.getElementById("table_heading_row").appendChild(heading_row);

    for (let i = 0; i < json.length; i++) {
      var body_row = document.createElement("tr");
      for (let k in json[i]) {
        if (
          k == "primary_skill" ||
          k == "comments" ||
          k == "job_details" ||
          k == "secondary_skill" ||
          k == "interviewer" ||
          k == "jd_chat" ||
          k == "jd_id" ||
          k == "jd_name" ||
          k == "interview_date" ||
          k == "round" ||
          k == "stage_id" ||
          k == "source"
        ) {
          continue;
        } else {
          var table_data = document.createElement("td");
          table_data.innerHTML = json[i][k];
        }
        body_row.appendChild(table_data);
      }
      document.getElementById("table-body").appendChild(body_row);
    }
  })
  .catch((err) => {
    console.log(err);
  });
