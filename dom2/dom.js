// headerTitle.textContent = "SUG";

// headerTitle.style.border = "3px solid black";
// var titl = document.getElementsByClassName("title");

// titl.style.color = "green";
// titl.style.fontWeight = "bold";

var items = document.getElementsByClassName("list-group-item");

console.log(items);
items[2].style.background = "#00ff00"; //change item 3 bg to green
for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
