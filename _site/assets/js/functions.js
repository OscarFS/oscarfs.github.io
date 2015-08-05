$( document ).ready(function() {

workBelt();
mail();


  //

});


function workBelt() {

	$('.thumb-unit').click(function() {
		$('.work-belt').css('left','-100%')
		$('.work-container').show();
	});
	
	$('.thumb-unit2').click(function() {
		$('.work-belt').css('left','-100%')
		$('.work-container').show();
	});

	

	$('.work-return').click(function() {
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});
	$('.h4').click(function() {
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});

}

	

