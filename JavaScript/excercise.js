fetch("https://mocki.io/v1/46351079-0933-4329-978b-8d1fc3ec6c69", {
  //   headers: {
  //     authorization:
  //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1MDM3NDIzOCwianRpIjoiZWFkM2ZkZTItMWE0Ny00NzViLWJhZDItYWIwNjkxNjQ4Njc0IiwibmJmIjoxNjUwMzc0MjM4LCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoie1wibmFtZVwiOiBcIktpcmFuXCIsIFwicHJvZmlsZV91cmxcIjogbnVsbCwgXCJyb2xlXCI6IHtcIm5hbWVcIjogXCJIUiBNYW5hZ2VyXCIsIFwiaXNva2V5XCI6IFwiSFJNQU5BR0VSXCIsIFwicHJpdmlsZWdlXCI6IDEwNDg1NzUsIFwiaWRcIjogMX0sIFwidXNlcm5hbWVcIjogXCJraXJhbnNhaXBhbGlrYUBtb2JpZ2VzdHVyZS5jb21cIiwgXCJjb21wYW55XCI6IG51bGwsIFwiaWRcIjogN30iLCJleHAiOjE2NTAzNzY2Mzh9.OfT-gBUyKJQUSORWO80zBRrpvElxzbnLiutyDDSn3YU",
  //   },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("DATA", data);
    for (let j = 1; j <= data.length; j++) {
      for (let i = 0; i < j; i++) {
        // console.log(data[i].product_image);
        // console.log(data[i].company_name);
        document.getElementById(
          "card" + j
        ).innerHTML = `<img src = "${data[i].product_image}" class = "card-img-top"/>`;
        // console.log("card" + j);

        document.getElementById("companyname" + j).innerHTML =
          data[i].company_name;

        document.getElementById("productdescription" + j).innerHTML =
          data[i].product_desc;

        document.getElementById("productprice" + j).innerHTML =
          data[i].product_price;

        document.getElementById("productrating" + j).innerHTML =
          data[i].product_average_rating;

        document.getElementById("productreviews" + j).innerHTML =
          data[i].product_reviews_count;
      }
    }
    // ram.innerHTML = `<img src = "${data[0].product_image}" class = "card-img-top img-fluid"/>`;
    // document.getElementById("company").innerHTML = data[0].company_name;
  });
