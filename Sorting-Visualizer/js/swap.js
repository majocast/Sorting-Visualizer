function swap(bars, item1, item2) {
  //assign red to both elements
  bars[item1].style.backgroundColor = "red";
  bars[item2].style.backgroundColor = "red";

  //perform swap
  let temp = bars[item1].style.height;
  bars[item1].style.height = bars[item2].style.height;
  bars[item2].style.height = temp;

  //set color back
}
