function showOneTab(xvw, sf1, sf2, sf3, sf4) {

	var w = document.getElementById('lft').children;
	var i;
	var e = null;
	for (i = 0; i < w.length; i++) {
		if (w[i].className == 'selectedftab') {
			e = w[i];
			break;
		}
	}

	e.classList.remove("selectedftab");

	document.getElementById(xvw).classList.add("selectedftab");

	var c = document.getElementById('fct');
	var f = c.querySelectorAll("#fct > .factiveflag");
	var i;

	for (i = 0; i < f.length; i++) {    
		f[i].classList.add("hideforum");
		f[i].classList.remove("factiveflag");
	}

	document.getElementById(sf1).classList.remove("hideforum");
	document.getElementById(sf1).classList.add("factiveflag");

  
	if (sf2 !== undefined) {
		document.getElementById(sf2).classList.remove("hideforum");
		document.getElementById(sf2).classList.add("factiveflag");
	}
  
	if (sf3 !== undefined) {
		document.getElementById(sf3).classList.remove("hideforum");
		document.getElementById(sf3).classList.add("factiveflag");
	}
  
	if (sf4 !== undefined) {
		document.getElementById(sf4).classList.remove("hideforum");
		document.getElementById(sf4).classList.add("factiveflag");
	}
}