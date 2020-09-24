// var leftBuffer;
// var rightBuffer;

function setup() {
    createCanvas(600, 600);
}

function draw() {
  background(0, 255, 0);

  var i;
  for (i = 1; i < 6; i++) {
    line(i * 100, 0, i * 100, 600)
    line(0, i * 100, 600, i * 100)
  }
}