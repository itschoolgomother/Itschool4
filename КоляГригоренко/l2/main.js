var box = document.getElementById("box")



window.addEventListener('scroll', function(e) {
	box.style.top = pageYOffset+"px"
	box.style.width = pageYOffset/2+"px" 
	box.style.height = pageYOffset/2+"px" 


	console.log(pageYOffset)
})

if (1000<pageYOffset) {
	box.style.backgroundColor = "green"
}else if(2000>pageYOffset){
	box.style.backgroundColor = "red"
}


