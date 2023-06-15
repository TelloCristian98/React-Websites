var button = document.getElementById("enter");
// var deleteBtn = document.getElementById("delete");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  var btn = document.createElement("button");
  div.classList.add("wrapper");
  ul.appendChild(div);
  div.appendChild(li);
  div.appendChild(btn);
  li.classList.add("taskClass");
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
  btn.classList.add("delClass");
  btn.innerHTML = "Del";
}

function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLenght() > 0 && event.which === 13) {
    createListElement();
  }
}

function deleteListElement(element) {
  if (element.target.className === "delClass") {
    element.target.parentElement.remove();
  }
}

function handleUlClick(element) {
  deleteListElement(element);
}

ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
