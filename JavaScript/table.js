let data = [];
fetch("http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/get_all_profiles")
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    //   data.push(json);
    // console.log(json);
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

    console.log(json);

    for (let i = 0; i < json.length; i++) {
      //   console.log(json[i]);
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
          //   console.log(table_data);
        }
        body_row.appendChild(table_data);
      }
      //   console.log(body_row[i].length);
      document.getElementById("table-body").appendChild(body_row);
    }
    console.log(document.getElementById("table-body"));
    // console.log(document.getElementById("table-body"));
    // json.map((values) => {
    //   data += `<tr>
    //     <td>John</td>
    //     <td>${json[i].email}</td>
    //     <td>john@example.com</td>
    // </tr>`;
    // });
    // document.getElementById("table-body").innerHTML = data;
  })
  .catch((err) => {
    console.log(err);
  });
console.log(data);
