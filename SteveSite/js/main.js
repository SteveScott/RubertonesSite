
var originalText = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat lacus, vehicula ac velit a, finibus euismod tellus. Pellentesque pulvinar risus quis consectetur sagittis. Sed pharetra efficitur lobortis. Aliquam erat volutpat. Vivamus blandit libero vel sodales eleifend. Vestibulum eget purus id libero malesuada vulputate posuere ut augue. Aenean fringilla ex sed pharetra blandit. Phasellus vitae erat quis lorem elementum congue vel in turpis. Sed sollicitudin enim a vulputate sodales. Vestibulum sit amet aliquam eros.</p>';

$(document).ready(function(){
	$('.jcarousel').jcarousel({
		center: false,
		animation: 'fast',
		wrap: 'circular',
		
	});

$('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
	});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
	});

originalText = document.getElementById('testText');
});




$(function(){
	
});

$('.NavOptions').hover(function(){
	$(this).css("background-color", "#E0E0E0");
	}, function() {
		$(this).css("background-color", "white");
	});



var castingText = "here is some information about casting.";
var cadText = "<p> Here is more information about CAD</p>";

$(CADdiv).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/pop_04.gif' style='width:304px;height:228px;opacity:1.0;'>";

	textColumn.innerHTML = "<p>This is new text added by Javascript about CAD.</p>";
	
	
	imageColumn.innerHTML = image;
	$('div#Column3of3').fadeOut(0).fadeIn(1000);

	
	},
	function(){
		textColumn.innerHTML = originalText;
		$('div#Column3of3').fadeOut(0);
	}
	);

$(threeDPrint_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/pop_05.gif' style='width:304px;height:228px;opacity:1.0;'>";
	textColumn.innerHTML = "<p>This is new text added about 3d printing.</p>";

	imageColumn.innerHTML = image;
	$('div#Column3of3').fadeOut(0).fadeIn(1000);
	
	},
	function(){
		textColumn.innerHTML = originalText;
		$('div#Column3of3').fadeOut(0);
		});


                        "CADdiv"// class="NavOptions"><a href="CAD.html"><h2>CAD Modeling and Design</h2></a></div></tr>
                        "3dPrint_div"// class="NavOptions"><a href="3dPrinting.html"><h2>3D Printing</h2></a></div></tr>
                        "Casting_div" //class="NavOptions"><a href="casting.html"><h2>Casting</h2></a></div></tr>
                        "Repairs_div" //class="NavOptions"><a href="repairs.html"><h2>Repairs</h2></a></div></tr>
                        "Finishing_div" //class="NavOptions"><a href="finishSet.html"><h2>Finishing and Setting</h2></a></div></tr>
                        "Gallery_div" //class="NavOptions"><a href="gallery.html"><h2>Gallery</h2></a></div></tr>
                        "About_div" //class="NavOptions"><a href="about.html"><h2>About Us</h2></a></div></tr>
                        "Contact_div"