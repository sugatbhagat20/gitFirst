var form = document.querySelector("form");
var nameItem = document.querySelector("#name");
var emailItem = document.querySelector("#email");
var phoneItem = document.querySelector("#phone");
var submitbtn = document.querySelector("#submit");
var itemList = document.getElementById("items");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitbtn.addEventListener("click", function () {
  let obj = {
    name: nameItem.value,
    email: emailItem.value,
    Phone: phoneItem.value,
  };

  let serialized = JSON.stringify(obj);
  localStorage.setItem("email", serialized);
  var newItem = document.getElementById("name").value;
  var newItem1 = document.getElementById("email").value;
  var newItem2 = document.getElementById("phone").value;
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem1));
  li.appendChild(document.createTextNode(newItem2));
  itemList.appendChild(li);
});
