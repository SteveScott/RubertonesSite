


$(document).ready(function(){
	console.log("ready!");
	$("#Headline").fadeOut(0).fadeIn(5000);
});



$(function(){
	

$('.NavOptions').hover(function(){
	$(this).css("background-color", "#E0E0E0")
	}, function() {
		$(this).css("background-color", "white");
	});

$(Collections).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/rubertonesCounter.jpg' style='width:100%;opacity:1.0;'>";

	textColumn.innerHTML = "<p>Click to veiw our original collections of rings, pendants, earrings, and other findings.  Many of these items are pre-molded, ready for 24-hour turnaround.</p>";
		
	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);

	
	},
	function(){
	
	}
	);




$(Process).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/rubertonesCounter.jpg' style='width:100%;opacity:1.0;'>";

	textColumn.innerHTML = "<p>Stop by, email, or call with your ideas, and one the owners will guide you through the process.</p><p>After receiving instructions and reference materials, our designers will then create a CAD model.  We will send you photorealistic renderings of the piece for you for feedback and review, and the CAD designer will make adjustments if necessary.</p><p>Once approved, we will create a wax model and cast in any metal of your choosing.</p><p>After the piece has been cast, our jewelers will polish, set, and hand-engrave the piece as desired.</p>";
		
	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);

	
	},
	function(){
	
	}
	);


$(About_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/philadelphiaSkyline.jpg' style='width:100%;opacity:1.0;'>";
	textColumn.innerHTML = "<p>Rubertone's is a full-service jewelry design and manufacturing company located in the heart of Philadelphia's historic Jeweler's Row.  At Rubertone's, we are committed to exceptional customer service and we promise to exceed your expectations.  It is our goal to provie you and your customers with the best in quality at a reasonable price and fast turnaround time.</p>";
	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);
	
	},
	function(){

		});

$(Contact_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/rubertonesFront.jpg' style='width:100%;opacity:1.0;'>";
	textColumn.innerHTML = "<ul><h3>Rubertone's CAD and Casting</h3><li>730 Sansom Street</li><li>Philadelphia, PA 19106</li></ul><ul><li>Telelphone: 215.923.5948</li><li>Fax: 		215.923.3667</li><li>Email:      CAD@rubertones.com</li></ul><ul><h3>Business Hours:</h3><li>Monday - Friday</li><li>9AM - 6PM</li></ul>";
	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);
	
	},
	function(){

		});

$(Gallery_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/jewelryRenders/CA0239/1.jpg' style='width:100%;opacity:1.0;'>";
	textColumn.innerHTML = "<p>Click to see examples of our work</p>"
	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);
	
	},
	function(){

		});
});
                        "CADdiv"// class="NavOptions"><a href="CAD.html"><h2>CAD Modeling and Design</h2></a></div></tr>
                        "3dPrint_div"// class="NavOptions"><a href="3dPrinting.html"><h2>3D Printing</h2></a></div></tr>
                        "Casting_div" //class="NavOptions"><a href="casting.html"><h2>Casting</h2></a></div></tr>
                        "Repairs_div" //class="NavOptions"><a href="repairs.html"><h2>Repairs</h2></a></div></tr>
                        "Finishing_div" //class="NavOptions"><a href="finishSet.html"><h2>Finishing and Setting</h2></a></div></tr>
                        "Gallery_div" //class="NavOptions"><a href="gallery.html"><h2>Gallery</h2></a></div></tr>
                        "About_div" //class="NavOptions"><a href="about.html"><h2>About Us</h2></a></div></tr>
                        "Contact_div"