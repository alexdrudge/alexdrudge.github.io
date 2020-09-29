function setup() {
  //setup canvas
  createCanvas(600, 600);
  //set the background
  background(0, 255, 0);
  let i;
  for (i = 1; i < 6; i++) {
    line(i * 100, 0, i * 100, 600)
    line(0, i * 100, 600, i * 100)
    line(0,0,0,600)
    line(0,0,600,0)
    line(600,0,600,600)
    line(0,600,600,600)
  }
}

function draw() {
  let i;
  let j;
  let x;
  let y;
  for (i=1; i< 6; i++) {
    x = i * 100
    for (j=1; j < 6; j++) {
      y = j * 100
      if (mouseIsPressed && x < mouseX && mouseX < x + 100 && y < mouseY && mouseY < y + 100) {
        fill(3, 252, 236)
        rect(x, y, 100, 100)
      } else {
        fill(255, 255, 255)
        rect(x, y, 100, 100)
      }
    }
  }
}