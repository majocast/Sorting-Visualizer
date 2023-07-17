async function quick(delay = 50) {
  let bars = document.querySelectorAll('.element');
  console.log("quick sort running");

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 200)
  );

  quickSorter(array, 0, array.length-1);

}

async function quickSorter(array, start, end) {
  let bars = document.querySelectorAll('.element');
  if(start >= end) {
    return;
  }
  //assign orange to all the elements that are being tested
  console.log('running function');
  index = await partition(array, start, end);

  await Promise.all([
    quickSorter(array, start, index-1),
    quickSorter(array, index+1, end)
  ]);

}

async function partition(array, start, end) {
  console.log('running partition');

  let pivotValue = array[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      await swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(array, pivotIndex, end);

  return pivotIndex;
}

async function swap(array, a, b) {
  console.log("swapping");
  let bars = document.querySelectorAll('.element');
  await sleep(30);
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;


  bars[a].style.backgroundColor = "orange";
  bars[b].style.backgroundColor = "orange";
  await sleep(30);

  let temp2 = bars[a].style.height;
  bars[a].style.height = bars[b].style.height;
  bars[b].style.height = temp2;

  await sleep(30);
  bars[a].style.backgroundColor = "royalblue";
  bars[b].style.backgroundColor = "royalblue";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
