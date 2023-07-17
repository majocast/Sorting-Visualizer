async function bubble(delay = 30) {
  console.log("bubble sort function");
  let bars = document.querySelectorAll('.element');
  console.log(bars);
  var min_idx = 0;
  for(let i = 0; i<bars.length; i++) {
    bars[i].style.backgroundColor = "orange";
    min_idx = i;
    for(let j = i+1; j<bars.length; j++) {
      bars[j].style.backgroundColor = "red";

      //pauses the execution for 50 ms
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 30)
      );
      // To store the integer value of jth bar to var1
      var val1 = parseInt(bars[j].style.height);
      console.log(val1);
      // To store the integer value of (min_idx)th bar to var2
      var val2 = parseInt(bars[min_idx].style.height);
      console.log(val2);

      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {

          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
      }
    }
    var temp1 = bars[min_idx].style.height;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 30)
    );

    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";

    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " black";
  }
  console.log("array sorted");
}
