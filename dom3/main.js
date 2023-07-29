var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

var filter = document.getElementById("filter");
//form submit event
form.addEventListener("submit", addItem);

//del event
itemList.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filterItems);

//add event
function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById("item").value;
  var newItem1 = document.getElementById("item1").value;

  //create new li element
  var li = document.createElement("li");
  li.className = "list-group-item";

  //apend the text at the end of the list
  li.appendChild(document.createTextNode(newItem));

  li.appendChild(document.createTextNode(newItem1));

  //create delete button
  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");

  //add classes to del btn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  editBtn.className = "btn btn-info btn-sm float-right";
  //apend txt node
  deleteBtn.appendChild(document.createTextNode("X"));
  editBtn.appendChild(document.createTextNode("EDIT"));

  //apend del btn
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  //append li to list
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement; //clicking on the element we want parent li
      itemList.removeChild(li);
    }
  }
}

//filter items
function filterItems(e) {
  //covert txt to lowercase
  var text = e.target.value.toLowerCase();

  var items = itemList.querySelectorAll("li");

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    var item2 = item.childNodes[1].textContent;
    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      item2.toLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
      item1.style.display = "block";
    } else {
      item.style.display = "none";
      item1.style.display = "none";
    }
  });
}
