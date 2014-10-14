


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

$(CADdiv).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/pop_04.gif' style='width:100%;opacity:1.0;'>";

	textColumn.innerHTML = "<p> Our talented CAD designers can replicate any sketch, image, or idea.  We will work with you through the design process and create a perfect model to fit your customer's needs.</p><p>We pride ourselves in keeping up with the latest technological advances.  We use Rhino with Matrix, the highest standard in jewelry modeling software.  For more organic shapes we have ZBrush, a digital sculpting program used by the film industry to create high-resolution sculpted meshes.  If you can imagine it, we can realize it.</p><p>We also accept .STL and .3dm files for model building on any of our rapid prototyping machines.</p><h3>Software</h3><ul><li>Rhinoceros 5</li><li>Matrix 7.5</li><li>ZBrush 4r6</li><li>Magics 16.2</li></ul>";
		
	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);

	
	},
	function(){
	
	}
	);

$(threeDPrint_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/EnvisionTEC.jpg' style='width:100%;opacity:1.0;'>";
	textColumn.innerHTML = "<p>We use the latest in 3d printing technology from Solidscape, Projet, and EnvisionTEC 3d printers, as well as the Revo and Roland mills.</p><p> Each machine has its strengths and limitations, so we select the best machine based on level of detail, fragility of the part, complexity of the geometry, and size of the part.  We are capable of creating any jewelry, down to 25 micron resolution for the finest detail, to the largest pendants.</p><h3>Rapid Prototype Machinery</h3><ul><li>Solidscape 3Z Max</li><li>Projet CPX 3000</li><li>EnvisionTEC Perfactory Apollo</li><li>Revo C</li></ul>";

	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);
	
	},
	function(){
	
		});

$(Casting_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/casting720.jpg' style='width:100%;opacity:1.0;'>";
	textColumn.innerHTML = "<p>24-hour turnaround on casting</p><h3>Alloys Available:</h3><ul><li>Platinum</li><li>Palladium</li><li>White Gold: 10, 14, or 18k</li><li>Yellow Gold: 10, 14, or 18k</li><li>Sterling silver (de-ox)</li><li>Bronze</li><li>Brass</li></ul><h3>Molds Available:</h3><ul><li>Rubber</li><li>Silicon</li><li>Metal (for larger Quantities)</li>";

	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);
	
	},
	function(){
		
		});

$(Repairs_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/jewelryRepair.jpg' style='width:100%;opacity:1.0;'>";
	textColumn.innerHTML = "<p>Our talented jewelers can restore and bring back to life your favorite jewelry.</p><h3>Repairs avaliable</h3><ul><li>Clean and inspect</li><li>Ring resize</li><li>Clasp replace</li><li>Chain solder</li></ul>";
	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);
	
	},
	function(){
	
		});

$(Finishing_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/grinder.jpg' style='width:100%;opacity:1.0;'>";
	textColumn.innerHTML = "<p>Our talented jewelers will complete the custom process by setting and finishing your jewelry pieces as needed.</p><h3>Finishes Available:</h3><ul>	<li>High Polish</li><li>Satin</li><li>Sandblast</li><li>Stone</li><li>Brush</li><li>Stipple or Hammer</li><li>Florentine</li><li>Antique</li><li>Milgrain</li></ul><h3>We also offer custom hand engraving</h3>";
	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);
	
	},
	function(){

		});

$(About_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/philadelphiaSkyline.jpg' style='width:100%;opacity:1.0;'>";
	textColumn.innerHTML = "<p>Rubertone's is a full-service jewelry design and manufacturing company located in the heart of Philadelphia's historic Jeweler's Row.  At Rubertone's, we aer committed to exceptional customer service and we promise to exceed your expectations.  It is our goal to provie you and your customers with the best in quality at a reasonable price and fast turnaround time.</p>";
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
	textColumn.innerHTML = "<h3>Click to see examples of our work</h3>"
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