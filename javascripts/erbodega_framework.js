function showOneTab(xvw, sf1, sf2, sf3, sf4) {

	var w = document.getElementById('lft').children;
	var i;
	var e = null;
	for (i = 0; i < w.length; i++) {
		if (w[i].className == 'selectedtab') {
			e = w[i];
			break;
		}
	}

	e.classList.remove("selectedtab");

	document.getElementById(xvw).classList.add("selectedtab");

	var c = document.getElementById('fct');
	var f = c.querySelectorAll("#fct > .activeflag");
	var i;

	for (i = 0; i < f.length; i++) {    
		f[i].classList.add("hidediv");
		f[i].classList.remove("activeflag");
	}

	document.getElementById(sf1).classList.remove("hidediv");
	document.getElementById(sf1).classList.add("activeflag");

  
	if (sf2 !== undefined) {
		document.getElementById(sf2).classList.remove("hidediv");
		document.getElementById(sf2).classList.add("activeflag");
	}
  
	if (sf3 !== undefined) {
		document.getElementById(sf3).classList.remove("hidediv");
		document.getElementById(sf3).classList.add("activeflag");
	}
  
	if (sf4 !== undefined) {
		document.getElementById(sf4).classList.remove("hidediv");
		document.getElementById(sf4).classList.add("activeflag");
	}
}