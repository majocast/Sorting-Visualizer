function bubbleSort() {
  console.log("bubble sort function");
  let bars = document.querySelectorAll('element-test');
  let length = array.length;
  let checked;
  do {
    checked = false;
    for(let i = 0; i<length; i++) {
      if(array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;

        checked = true;
      }
    }
  } while(checked);
  let swap1 = document.getElementById('0');
  let swap2 = document.getElementById('1');
  var tmp = swap1.style.height;
  swap1.style.height = swap2.style.height;
  swap2.style.height = tmp;
  console.log("array sorted");
}
/*
let length = array.length;
let checked;
do {
  checked = false;
  for(let i = 0; i<length; i++) {

    }
  }
} while(checked) {
  console.log(array);
  console.log("array sorted");
}
*/
