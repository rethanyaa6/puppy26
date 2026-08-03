function setup() {
  createCanvas(800, 900);
}

function draw() {
  background(map(mouseX,0,600,35,100));
  fill(50)
  noStroke();
  
  textSize(random(145,135));
  
  
  text("🛂",map(mouseY,0,600,0,300),100)
  text("🔠",map(mouseX,0,600,600,0),800)
  text("🚯",map(mouseY,0,600,600,0),200)
  text("🚡",200,map(mouseY,0,600,0,600))
  text("🚱",300,map(mouseX,0,600,0,400))
  text("📟",400,map(mouseX,600,0,0,300))
  text("🚞",500,map(mouseX,600,0,0,500))
  text("🔣",map(mouseX,600,0,0,400),400)
  text("🔏",map(mouseX,0,600,600,300),100)
  text("📇",map(mouseX,600,0,0,200),500)
  text("📬",map(mouseX,600,0,0,400),600)
  text("🚱",map(mouseX,0,600,600,300),500)
  
  
}
