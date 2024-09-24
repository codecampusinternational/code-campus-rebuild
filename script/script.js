function web1() {
	document.getElementById("web1").style.display = "flex";
	document.getElementById("web2").style.display = "none";
	document.getElementById("web3").style.display = "none";
	document.getElementById("web4").style.display = "none";
}

function web2() {
	document.getElementById("web1").style.display = "none";
	document.getElementById("web2").style.display = "flex";
	document.getElementById("web3").style.display = "none";
	document.getElementById("web4").style.display = "none";
}

function web3() {
	document.getElementById("web1").style.display = "none";
	document.getElementById("web2").style.display = "none";
	document.getElementById("web3").style.display = "flex";
	document.getElementById("web4").style.display = "none";
}

function web4() {
	document.getElementById("web1").style.display = "none";
	document.getElementById("web2").style.display = "none";
	document.getElementById("web3").style.display = "none";
	document.getElementById("web4").style.display = "flex";
}


// course-periods

function bootCamps(){
	document.getElementById("short-course").style.display = "none";
	document.getElementById("bootCamps").style.display = "flex";

}
function shortCourse(){
	document.getElementById("bootCamps").style.display = "none";
	document.getElementById("short-course").style.display = "flex";

}