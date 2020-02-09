var line = document.getElementById("line-m");
var time = new Date ();
var min = time.getMinutes()*6;
line.style.transform = "rotate("+min+"deg)";
setInterval(function(){
	alert("hi")
}, 8000); 