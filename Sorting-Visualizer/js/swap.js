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

function swap(element1, element2) {
	var tmp = $(element1).parent();
  $(element1).animatePrependTo($(element2).parent(),1000);
	$(element2).animatePrependTo(tmp,1000);
});
