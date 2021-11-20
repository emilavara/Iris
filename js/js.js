function reloadFrame() {
  document.getElementById('phone-frame').src += '';
}

function homeButton() {
  document.getElementById('phone-frame').src = 'placeholder.html';
}

document.getElementById("home-btn").onclick = homeButton;

var input = document.getElementById("text");
input.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});