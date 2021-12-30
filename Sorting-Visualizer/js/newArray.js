const container = document.querySelector('.cell-2');
var array = new Array();

window.onload = function generateArray() {
  var parameter = document.getElementById('myRange').value;
  for(var i = 0; i<parameter; i++) {
    var length = randomInt(10, 100);
    console.log(length);
    var newElement = document.createElement('div');
    newElement.className = "element-test";
    newElement.style.height = length + "px";
    newElement.name = i;
    container.appendChild(newElement);
    array.push(length);
  }
  console.log("array generation complete");
  console.log(array);
}

function newArray() {
  var parameter = document.getElementById('myRange').value;
  container.innerHTML = "";
  array = new Array();
  for(var i = 0; i<parameter; i++) {
    var length = randomInt(10, 100);
    var newElement = document.createElement('div');
    newElement.className = "element-test";
    newElement.style.height = length + "px";
    container.appendChild(newElement);
    console.log(length);
    array.push(length);
  }
  console.log("array generation complete");
  console.log(array);
}

function randomInt(min, max) {
  var int = Math.floor(Math.random() * (max-min)) + 1;
  console.log(int);
  return int;
}
