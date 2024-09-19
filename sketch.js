function setup() {
    createCanvas(600, 600);
  background("black")
  }
  
  function draw() {
    stroke("purple");
    fill("blue");
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 21, 32);
  }
    
  }