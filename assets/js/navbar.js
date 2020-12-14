window.addEventListener('mouseup', function(event){
	var box = document.getElementById('navbar');
	if (event.target != box && event.target.parentNode != box){
        box.style.display = 'none';
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