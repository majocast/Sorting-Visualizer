/*
$.fn.animatePrependTo = function(sel, speed) {
    var $this = this,
        newEle = $this.clone(true).prependTo(sel),
        newPos = newEle.position();
    newEle.hide();
    $this.css('position', 'absolute').animate(newPos, speed, function() {
        newEle.show();
        $this.remove();
    });
    return newEle;
};

$('#bubbleSort').on("click", function() {
	var tmp = $('#0').parent();
  $('#0').animatePrependTo($("#1").parent(),1000);
	$('#1').animatePrependTo(tmp,1000);
});
*/
/*
function swapDivs(element1, element2) {
  console.log("swap function runniing");
	var tmp = element1;
  element1.animatePrependTo(element2, 1000);
	element2.animatePrependTo(tmp,1000);
}

function swapNums(element1, element2) {
  var tmp = element1;
  element1 = element2;
  element2 = tmp;
}
*/
