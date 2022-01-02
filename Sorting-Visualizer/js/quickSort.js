async function quickSort(delay = 50) {
    console.log('quick sort function');
    var bars = document.querySelectorAll('.element-test');
    console.log(bars);

    //determine the pivot and set the color to yellow
    var pivot = bars[bars.length - 1];
    bars[pivot].style.backgroundColor = "yellow";

    //determine the left and right pointers and set their colors to orange
    var left = bars[0];
    var right = bars[bars.length - 1];
    left.style.backgroundColor = "orange";
    right.style.backgroundColor = "orange";
    console.log(left.style.height + " " + right.style.height);

    //perform sorting
    if(bars.length > 1) {
      for(let i = 0; i<bars.length; i++) {

      }
    }
    console.log('array sorted');
}

async function partition(arr, start, end) {
  const pivotValue = arr[end].style.height;
  let pivotIndex = start;
  for(let i = start; i < end; i++) {
    if(arr[i] < pivotValue) {

    }
  }
}
