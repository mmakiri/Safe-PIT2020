document.getElementById("navbar").addEventListener("click", function() {
	alert("Hello World!");
});

function navbar() {
	var x = document.getElementById("navbar");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }