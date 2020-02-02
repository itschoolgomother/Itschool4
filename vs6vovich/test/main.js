
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.backgroundColor = "black"
var halfW = window.innerWidth/2
var halfH = window.innerHeight/2

for(var i=0;i<500; i+=25){
	
ctx.strokeStyle = "rgb("+i/4+","+i+","+i*1.2+")"
var w = 300+i
var h = 500-i
ctx.strokeRect(halfW-w/2, halfH-h/2,w,h)
}
ctx.beginPath()
ctx.fillStyle="orange"
ctx.arc(100,100,90,0,Math.PI*2)
ctx.fill()
ctx.beginPath()
