const container = document.querySelector('.cell-2');

window.onload = function generateArray() {
  var parameter = document.getElementById('myRange').value;
  var array = new Array();
  for(var i = 0; i<parameter; i++) {
    var length = randomInt(5, 100);
    console.log(length);
    var newElement = document.createElement('div');
    newElement.className = "element-test";
    newElement.style.height = length + "px";
    container.appendChild(newElement);
    array.push(length);
  }
  console.log("array generation complete");
  console.log(array);
}

function newArray() {
  var parameter = document.getElementById('myRange').value;
  container.innerHTML = "";
  var array = new Array();
  for(var i = 0; i<parameter; i++) {
    var length = randomInt(5, 100);
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
  var int = Math.floor(Math.random() * (max-min));
  console.log(int);
  return int;
}
