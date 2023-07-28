// headerTitle.textContent = "SUG";

// headerTitle.style.border = "3px solid black";
// var titl = document.getElementsByClassName("title");

// titl.style.color = "green";
// titl.style.fontWeight = "bold";

// var li = document.getElementsByTagName("li");
// console.log(last);

// var li = document.getElementsByTagName("li");

// console.log(li);
// li[2].style.background = "#00ff00"; //change item 3 bg to green

// li[4].style.fontWeight = "bold";
// li[4].style.fontFamily = "Helvetica Neue";

// li[4].style.backgroundColor = "#yellow";

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "5px solid red";

// var input = document.querySelector("input");
// input.value = "SUG";

// var submit = document.querySelector("input[type=submit]");
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var titles = document.querySelectorAll(".title");
// titles[0].style.color = "orange";

//TASK-6
// var odd = document.querySelectorAll("li:nth-child(odd)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }

// var secItem = document.querySelector(".list-group-item:nth-child(2)");
// secItem.style.backgroundColor = "lightgreen";
// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display = "none";

// var second = document.querySelectorAll("li");
// second[1].style.color = "green";

//TASK-7
var itemList = document.querySelector("#items");

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "pink";

var itemList = document.querySelector("#items");

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "pink";

console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

console.log(itemList.firstElementChild);
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

var newDiv = document.createElement("div");
newDiv.className = "hello";
newDiv.id = "hello1";
newDiv.setAttribute("title", "Hello div");
console.log(newDiv);

var newDivText = document.createTextNode("Hello world");
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);
container.insertBefore(newDiv, h1);
