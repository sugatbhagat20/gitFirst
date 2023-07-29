var form = document.querySelector("form");
var nameItem = document.querySelector("#name");
var emailItem = document.querySelector("#email");
var phoneItem = document.querySelector("#phone");
var submitbtn = document.querySelector("#submit");
var itemList = document.getElementById("items");
var deletebtn = document.querySelector("#delete");

var editbtn = document.querySelector("#edit");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

itemList.addEventListener("click", del);
itemList.addEventListener("click", editt);
let obj = {};

submitbtn.addEventListener("click", function () {
  obj = {
    name: nameItem.value,
    email: emailItem.value,
    Phone: phoneItem.value,
  };

  serialized = JSON.stringify(obj);
  localStorage.setItem("email", serialized);
  var newItem = document.getElementById("name").value;
  var newItem1 = document.getElementById("email").value;
  var newItem2 = document.getElementById("phone").value;

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem1));
  li.appendChild(document.createTextNode(newItem2));

  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");
  deleteBtn.className = "delete";
  editBtn.className = "edit";
  deleteBtn.appendChild(document.createTextNode("Delete"));
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  itemList.appendChild(li);
});

function del(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    itemList.removeChild(li);
    localStorage.removeItem("email");
  }
}

function editt(e) {
  if (e.target.classList.contains("edit")) {
    document.getElementById("name").value = obj.name;
    document.getElementById("email").value = obj.email;
    document.getElementById("phone").value = obj.Phone;
    var li = e.target.parentElement;
    itemList.removeChild(li);
    localStorage.removeItem("email");
  }
}
