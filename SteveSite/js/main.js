$(document).ready(function(){
	$('.jcarousel').jcarousel({
		center: false,
		animation: 'fast',
		wrap: 'circular'

	});

$('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
	});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
	});

});


$(function(){
	
});

$('.NavOptions').hover(function(){
	$(this).css("background-color", "#E0E0E0");
	}, function() {
		$(this).css("background-color", "white");
	}
	);