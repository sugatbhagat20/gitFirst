let obj = {
  fname: "Sugat",
  lname: "bhagat",
  age: 23,
};

let serialized = JSON.stringify(obj);

localStorage.setItem("obj", serialized);
