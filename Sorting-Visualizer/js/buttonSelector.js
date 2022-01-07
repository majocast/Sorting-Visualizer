function selectedSort() {
  let value = event.target.name;
  console.log(value);
  switch(value) {
    case "Bubble Sort":
      console.log('running bubble sort');
      bubble();
      break;
    case "Quick Sort":
      console.log('running quick sort');
      quick();
      break;
    case "Merge Sort":
      console.log('running merge sort');
      merge();
      break;
    default:
      console.log('error selector');
  }
}
