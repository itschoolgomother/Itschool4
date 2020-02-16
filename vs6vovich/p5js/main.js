function setup(){
	createCanvas(innerWidth, innerHeight, WEBGL);
	background(70, 70, 200);
}	
function draw(){
	 background(250, 102, 94);
  rotateX(mouseY / 200);
  rotateY(mouseX / 200);
  normalMaterial();
  torus(50, 10);

}
