var colors = ['#ed1e7f','#ee1d45','#ed2024','#ed2024','#e93f25','#ec6225','#f57f20','#f49a23','#f6a91f','#febf10','#f4cf19','#f3de12','#f3de12','#f7ec13','#e1e31a','#bfd730','#94c83e','#75c043','#6abd45','#70c16a','#70c6a7','#70c9be','#6fccdd','#50c8ec','#40baec','#4378bc','#3d5ba9','#3953a4','#4b53a3','#6b52a2','#7a51a1','#9051a0','#a4509f','#b9529f','#b8538c','#da4398'];
var pickedColor;
var count;

function setup() {
 	 // put setup code here
   count = -1;

  	var canvas = createCanvas(windowWidth,windowHeight);

  	canvas.parent('sketch-holder');
}

function draw() {
  	// put drawing code here
  	background('rgba(255,255,255, 0.2)');
  	
  	frameRate(10);
}

function mouseMoved(){
  if(count < 35){
    count++;
   }
   else if(count == 35){
    count = 0;
   }
  
	 //pickedColor = random(colors);
   pickedColor = colors[count]
	 noStroke();
	 fill(pickedColor);
	 ellipse(mouseX, mouseY, 8, 8);
	 frameRate(10);

 }