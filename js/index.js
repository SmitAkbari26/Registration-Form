const secondContainer = document.getElementById("second-container");

const nextBtn = document.getElementById("next");
const registerBtn = document.getElementById("register");

const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMobileNo = document.getElementById("mobileno").value;
const university = document.getElementById("university").value;
const department = document.getElementById("department").value;
const semester = document.getElementById("semester").value;
const enrollment = document.getElementById("enrollment").value;
const guniStudent = document.getElementById("gunistudent").value;
const stream = document.getElementById("stream").value;
const branch = document.getElementById("branch").value;

nextBtn.addEventListener("click", () => {
  secondContainer.style.display = "grid";
  nextBtn.style.display = "none";
});

registerBtn.addEventListener("click", () => {
  alert("Register");
});
