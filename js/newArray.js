const container = document.getElementById('array-cont');
var array = new Array();

window.onload = function generateArray() {
  var parameter = document.getElementById('myRange').value;
  for(var i = 0; i<parameter; i++) {
    var length = randomInt(20, 100);
    console.log(length);
    var newElement = document.createElement('div');
    newElement.className = "element";
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
    var length = randomInt(20, 100);
    var newElement = document.createElement('div');
    newElement.className = "element";
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
