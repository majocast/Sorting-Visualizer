function insertion() {
  console.log("insertion sort running");
  let bars = document.querySelectorAll('.element');

  let sortedArray = insertionSort();
  console.log(sortedArray);
}

async function insertionSort() {
  let bars = document.querySelectorAll('.element');
  console.log(array);
  //Start from the second element.
  for(let i = 1; i < array.length;i++){
    await sleep(50);
    bars[i].style.backgroundColor = "#FF6CF1";
    //Go through the elements behind it.
    for(let j = i - 1; j > -1; j--){
      //value comparison using ascending order.
      if(array[j + 1] < array[j]){
        //swap
        [array[j+1],array[j]] = [array[j],array[j + 1]];
        let temp = bars[j+1].style.height;
        bars[j+1].style.height = bars[j].style.height;
        bars[j].style.height = temp;
      }
    }
  }
  for(let i = array.length - 1; i > -1; i--) {
    await sleep(30);
    bars[i].style.backgroundColor = "green";
  }

  console.log("insertion sort complete");
  return array;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
