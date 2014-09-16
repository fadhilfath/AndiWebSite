// problem: we wanna create a large image when the user clicked the image, instead of going to 
// another page
// solution: when the user clicked an image it will pop out and highligh the image right in that page
// we are creating simple lightbox
// 1. when user clicked image

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")

// add image to overlay
$overlay.append($image);

// caption
$overlay.append($caption);

$("body").append($overlay);

$(".gallery  a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");

	// update the image
	$image.attr("src", imageLocation);

	$overlay.show();

	$(this).children("img").attr("alt")


});

$overlay.click(function(){
	// hide the overlay
	$overlay.hide();
});