// themes
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var body = document.querySelector("body");
var toggle = document.getElementById("circle");

one.addEventListener("click", function () {
  toggle.style.left = "0";
  body.classList.add("active1");
  body.classList.remove("active2");
  body.classList.remove("active3");
});

two.addEventListener("click", function () {
  toggle.style.left = "20px";
  body.classList.add("active2");
  body.classList.remove("active1");
  body.classList.remove("active3");
});

three.addEventListener("click", function () {
  toggle.style.left = "42px";
  body.classList.remove("active1");
  body.classList.remove("active2");
  body.classList.add("active3");
});

// functions
let buttons = document.querySelectorAll(".body .btn button");
buttons.forEach((button, index) => {
  document.getElementById("screen").value = "";
  button.onclick = function () {
    var text = button.textContent;
    document.getElementById("screen").value += text;
  };
});

let del = document.querySelector(".body .btn button.del");
del.onclick = function () {
  var dele = document.getElementById("screen").value;
  document.getElementById("screen").value = dele.substr(0, dele.length - 1);
};

let reset = document.querySelector(".body .btn button.reset");
reset.onclick = function () {
  document.getElementById("screen").value = "";
};

let equal = document.querySelector(".body .btn button.equal");
equal.onclick = function () {
  var equ = document.getElementById("screen").value;
  if (equ == "") {
    document.getElementById("screen").value = "";
  } else {
    document.getElementById("screen").value = eval(equ);
  }
};
