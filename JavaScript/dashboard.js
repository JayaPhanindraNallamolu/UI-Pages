let access = JSON.parse(localStorage.getItem("Access Token"));
console.log("Access token :", access);

if (access == null) {
  window.location.href = "./login.html";
}
function signout() {
  window.location.href = "./login.html";
  localStorage.clear();
}
