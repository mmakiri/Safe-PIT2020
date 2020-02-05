$(document).click(function(event) { 
	$target = $(event.target);
	if(!$target.closest('navbar').length && 
	$('navbar').is(":visible")) {
	  $('navbar').hide();
	}        
});

function navbar() {
	var x = document.getElementById("navbar");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }