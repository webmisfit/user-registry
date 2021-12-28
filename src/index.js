// import "./styles.css";

let name;
let $welcome = document.querySelector(".name");
let $logout = document.querySelector(".logout");

function getUserInfo() {
  name = localStorage.getItem("current-user") || "???";
  if (name === "???") {
    document.querySelector(".menu").style.visibility = "hidden";
    document.querySelector(".contacts").style.visibility = "hidden";
    document.querySelector(".logout").style.visibility = "hidden";
  } else{
    document.querySelector(".lock").style.visibility = "hidden";
    document.querySelector(".lock-txt").style.visibility = "hidden";
  }
}

function welcome() {
  $welcome.textContent = name;
}


function logout(){
  localStorage.removeItem("current-user");
  setTimeout(e=>location.href = "index.html", 1000)
}


$logout.addEventListener("click", logout);


getUserInfo();
welcome();
