document.addEventListener("click", navbar);
function navbar() {
	var x = document.getElementById("navbar");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
	if (event.target.classList.contains('icon')){
        dropdown.classList.toggle('show');
    } else {
        dropdown.classList.remove('show');
    }
  }