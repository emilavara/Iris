function choosePhone() {
    document.getElementById("phone-frame").style.width = 375 + "px";
    document.getElementById("phone-frame").style.height = 812 + "px";
    document.getElementById("device-text").innerHTML = "iPhone &ndash; (375 x 812 pixels)<i class='fas fa-angle-down'></i>";
    document.getElementById("devices").style.display = "none";
}

function chooseTablet() {
    document.getElementById("phone-frame").style.width = 768 + "px";
    document.getElementById("phone-frame").style.height = 1024 + "px";
    document.getElementById("device-text").innerHTML = "iPad &ndash; (768 x 1024 pixels)<i class='fas fa-angle-down'></i>";
    document.getElementById("devices").style.display = "none";
}

function dropDown() {
    var x = document.getElementById("devices");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

var input = document.getElementById("text");
input.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});

//   if (openDropdown.classList.contains('show')) {
//     openDropdown.classList.remove('show');