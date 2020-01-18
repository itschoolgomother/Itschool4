var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "green";

var cx = innerWidth/2;
var cy = innerHeight/2;

// ctx.fillStyle = "red";
// ctx.fillRect(cx-100,cy-100,200,200);


// ctx.beginPath();
// ctx.moveTo(200,200);
// ctx.lineTo(300,300);
// ctx.lineTo(600,275);
// ctx.lineTo(200,200);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(400,400);
// ctx.lineTo(300,300);
// ctx.lineTo(600,275);
// ctx.lineTo(400,400);
// ctx.stroke();
// ctx.closePath();

function circle(r,line){
	ctx.beginPath ();
	ctx.strokeStyle = "red"
	ctx.arc(cx,cy,r,0,Math.PI*2);
	ctx.lineWidth = line;
	ctx.stroke();
}
for (var i = 50; i < 500; i+=25){
	circle(i,i/50)
}
