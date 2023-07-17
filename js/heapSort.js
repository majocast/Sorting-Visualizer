// main function to do heap sort
async function heap() {
  let bars = document.querySelectorAll('.element');
  console.log("running heap sort function");
  let n = array.length;
  // Build heap (rearrange array)
  for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
    bars[i].style.backgroundColor = "red";
    maxHeapify(array, n, i);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i >= 0; i--) {
    // Move current root to end
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    await sleep(50);
    let temp2 = bars[0].style.height;
    bars[0].style.height = bars[i].style.height;
    bars[i].style.height = temp2;

    // call max heapify on the reduced heap
    await maxHeapify(array, i, 0);
  }
  console.log("finished heap sort");

  for(let i = 0; i < array.length; i++) {
    await sleep(50);
    bars[i].style.backgroundColor = "green";
  }
}


async function maxHeapify(array, n, i) {
  let bars = document.querySelectorAll('.element');
  let largest = i;
  let left = 2 * i + 1; //left child index
  let right = 2 * i + 2; //right child index

  //If left child is smaller than root
  if (left < n && array[left] > array[largest]) {
    largest = left;
    bars[largest].style.backgroundColor = "#FF6CF1";
  }

  // If right child is smaller than smallest so far
  if (right < n && array[right] > array[largest]) {
    largest = right;
    bars[largest].style.backgroundColor = "#FF6CF1";
  }

   // If smallest is not root
  if (largest != i) {
    let temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    await sleep(50);
    let temp2 = bars[i].style.height;
    bars[i].style.height = bars[largest].style.height;
    bars[largest].style.height = temp2;

    // Recursively heapify the affected sub-tree
    await maxHeapify(array, n, largest);
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
