//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

function openModal(type) {
  document.getElementById("modal").style.display = "block";
  
  // Show login or signup form
  if (type === "login") {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
  } else {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal if user clicks outside
window.onclick = function(event) {
  let modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
