function bubbleSort() {
  console.log("bubble sort function");
  let length = array.length;
  let checked;
  do {
    checked = false;
    for(let i = 0; i<len; i++) {
      if (array[i] > array[i + 1]) {
          swap(array[i], array[i+1]);
          checked = true;
      }
    }
  } while(checked) {
    console.log(array);
    console.log("array sorted");
  }
}

let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return inputArr;
