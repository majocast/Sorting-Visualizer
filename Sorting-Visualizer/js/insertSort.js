function merge() {
  console.log("merge sort running");
  let bars = document.querySelectorAll('.element-test');

  mergeSort(array);
}

async function mergeSort() {
  let bars = document.querySelectorAll('.element-test');

  var half = array.length/2;

 // Base case or terminating case
 if(array.length < 2){
   return array;
 }

 var left = array.splice(0, half);
 return mergeSorter(mergeSort(left),mergeSort(array));
}

function mergeSorter(left, right){
  let arr = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
