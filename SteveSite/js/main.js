$(document).ready(function(){
});

$('.NavOptions').hover(function(){
	console.log("It's hitting!")
	$(this).css("background-color", "#E0E0E0");
	}, function() {
		$(this).css("background-color", "white");
	}
	);