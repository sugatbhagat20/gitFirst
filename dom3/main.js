var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

//form submit event
form.addEventListener("submit", addItem);

//del event
itemList.addEventListener("click", removeItem);

//add event
function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById("item").value;

  //create new li element
  var li = document.createElement("li");
  li.className = "list-group-item";

  //apend the text at the end of the list
  li.appendChild(document.createTextNode(newItem));

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
