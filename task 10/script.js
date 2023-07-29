var form = document.querySelector("form");

var getname = document.querySelector("#name");

var submitbtn = document.querySelector("#submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitbtn.addEventListener("click", function () {
  localStorage.setItem("name", getname.value);
});
