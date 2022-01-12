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
    case "Insertion Sort":
      console.log('running insertion sort');
      insertion();
      break;
    case "Heap Sort":
      console.log('running heap sort');
      heap();
      break;
    default:
      console.log('error selector');
  }
}
