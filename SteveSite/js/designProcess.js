


$(document).ready(function(){
	console.log("ready!");
	$("#Headline").fadeOut(0).fadeIn(0);
});



$(function(){
	

$('.NavOptions').hover(function(){
	$(this).css("background-color", "#E0E0E0")
	}, function() {
		$(this).css("background-color", "white");
	});

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
	textColumn.innerHTML = "<p>24-hour turnaround on casting</p><h3>Available Metal Types:</h3><ul><li>Platinum</li><li>Palladium</li><li>White Gold: 10, 14, or 18k</li><li>Yellow Gold: 10, 14, or 18k</li><li>Sterling silver (de-ox)</li><li>Bronze</li><li>Brass</li></ul><h3>Molds Available:</h3><ul><li>Rubber</li><li>Silicon</li><li>Metal (for larger Quantities)</li>";

	imageColumn.innerHTML = image;
	$('div#Column3of3').stop(true, true).fadeOut(0).fadeIn(1000);
	
	},
	function(){
		
		});

$(Repairs_div).hover(function(){
	var textColumn = document.getElementById('testText');
	var imageColumn = document.getElementById('Column3of3');
	var image = "<img src='img/jewelryRepair.jpg' style='width:100%;opacity:1.0;'>";
	textColumn.innerHTML = "<p>Our talented jewelers can restore and bring back to life your favorite jewelry.  We offer complete repairs, including advanced laser soldering services.</p>";
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






});
                        "CADdiv"// class="NavOptions"><a href="CAD.html"><h2>CAD Modeling and Design</h2></a></div></tr>
                        "3dPrint_div"// class="NavOptions"><a href="3dPrinting.html"><h2>3D Printing</h2></a></div></tr>
                        "Casting_div" //class="NavOptions"><a href="casting.html"><h2>Casting</h2></a></div></tr>
                        "Repairs_div" //class="NavOptions"><a href="repairs.html"><h2>Repairs</h2></a></div></tr>
                        "Finishing_div" //class="NavOptions"><a href="finishSet.html"><h2>Finishing and Setting</h2></a></div></tr>
                        "Gallery_div" //class="NavOptions"><a href="gallery.html"><h2>Gallery</h2></a></div></tr>
                        "About_div" //class="NavOptions"><a href="about.html"><h2>About Us</h2></a></div></tr>
                        "Contact_div"