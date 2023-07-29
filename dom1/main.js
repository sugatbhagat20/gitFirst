// // const btn = document.querySelector(".btn");

// // btn.addEventListener("click", (e) => {
// //   e.preventDefault();
// //   const form = document.querySelector("#my-form");
// //   form.style.background = "#ccc";
// // });

// // btn.addEventListener("mouseover", (e) => {
// //   e.preventDefault();
// //   const form = document.querySelector("#my-form");
// //   form.style.background = "yellow";
// // });

// // btn.addEventListener("mouseout", (e) => {
// //   e.preventDefault();
// //   const form = document.querySelector("#my-form");
// //   form.style.background = "red";
// // });

// const myform = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");

// myform.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   if (nameInput.value === "" || emailInput.value === "") {
//     msg.innerHTML = "Please enter both the fields";
//   } else {
//     console.log(nameInput.value, emailInput.value);
//   }
// }

var d = new Date(2000, 30, 1);
console.log(d.toDateString());
