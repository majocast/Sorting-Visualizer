function selectedSort() {
  let value = event.target.name;
  console.log(value);
  switch(value) {
    case "Bubble Sort":
      console.log('running bubble sort');
      bubbleSort();
      break;
    case "Quick Sort":
      console.log('running quick sort');
      quickSort();
      break;
    default:
      console.log('error selector');
      break;
  }
}
