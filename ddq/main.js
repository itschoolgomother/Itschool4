var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.style.backgroundColor ='red';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillRect(50,50,100,100);

var cx =   innerWidth/2;
var cy = innerHeight/2;

ctx.fillRect(cx-50, cy-50, 100,100   );
ctx.beginPath( );
ctx.fillstyle = "green";
ctx.arc( 50,50,50,0,Math.PI*2, );

ctx.beginPath(  );
ctx.fillstyle = "white";
ctx.arc( 400,400,50,Math.PI* Math.PI*2,true );
ctx.fill( );
ctx.closePath( );

ctx.beginPath( );
