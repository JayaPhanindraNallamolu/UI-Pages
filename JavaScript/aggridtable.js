function loading() {
  let access = localStorage.getItem("Access_Token");
  // console.log("Access token :", access);

  if (access == null) {
    window.location.href = "./login.html";
  }
  function signout() {
    localStorage.clear();
    window.location.href = "./login.html";
  }

  window.location.href = "./addjobs.html";
}
