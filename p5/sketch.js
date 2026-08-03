let minSize = 30;
let maxSize = 120;

let currentSize;
let shrinking = true;

let palette = [
  "#ff4d00","#ffcc00","#0077b6","#023047",
  "#2a9d8f","rgb(24,225,228)","#8ecae6","#90be6d",
  "#f94144","#f3722c","#F3F1E1","#F8F7E8"
];

function setup() {
  createCanvas(1920,1080
              );
  currentSize = maxSize;
}

function draw() {
  background(245);

  let cols = floor(width / currentSize);
  let rows = floor(height / currentSize);

  let density = map(currentSize, maxSize, minSize, 0.15, 0.9);

  for(let i=0;i<cols;i++){
    for(let j=0;j<rows;j++){

      stroke(220);
      noFill();
      rect(i*currentSize, j*currentSize, currentSize, currentSize);

      if(random() < density){
        fill(random(palette));
        noStroke();
        rect(i*currentSize, j*currentSize, mouseX, mouseX);
      }

    }
  }

  // animate size
  frameRate(20)
  if(shrinking){
    currentSize -= 0.1;
    if(currentSize <= minSize){
      shrinking = false;
    }
  } else {
    currentSize += 0.3;
    if(currentSize >= maxSize){
      shrinking = true;
    }
  }
}