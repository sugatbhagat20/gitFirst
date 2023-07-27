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
var odd = document.querySelectorAll("li:nth-child(odd)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}

var secItem = document.querySelector(".list-group-item:nth-child(2)");
secItem.style.backgroundColor = "lightgreen";
var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.display = "none";

var second = document.querySelectorAll("li");
second[1].style.color = "green";
