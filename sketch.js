class Grid {
  constructor() {
    this.colours = [[[0, 0, 0], [0, 0, 255], [0, 255, 0], [255, 0, 0], [255, 255, 255]],
                   [[255, 255, 255], [0, 0, 0], [0, 0, 255], [0, 255, 0], [255, 0, 0]],
                   [[255, 0, 0], [255, 255, 255], [0, 0, 0], [0, 0, 255], [0, 255, 0]],
                   [[0, 255, 0], [255, 0, 0], [255, 255, 255], [0, 0, 0], [0, 0, 255]],
                   [[0, 0, 255], [0, 255, 0], [255, 0, 0], [255, 255, 255], [0, 0, 0]]];
  }

  changeColour(i, j) {
    let cell = JSON.stringify(this.colours[i][j])
    if (cell == JSON.stringify([0, 0, 0])) {
      this.colours[i][j] = [0, 0, 255];
    } else if (cell == JSON.stringify([0, 0, 255])) {
      this.colours[i][j] = [0, 255, 0];
    } else if (cell == JSON.stringify([0, 255, 0])) {
      this.colours[i][j] = [255, 0, 0];
    } else if (cell == JSON.stringify([255, 0, 0])) {
      this.colours[i][j] = [255, 255, 255];
    } else if (cell == JSON.stringify([255, 255, 255])) {
      this.colours[i][j] = [0, 0, 0];
    }
  }

  getColour(i, j) {
    return this.colours[i][j];
  }
}

function setup() {
  //setup canvas
  createCanvas(600, 600);
  //set the background
  background(0, 255, 0);
  let i;
  for (i = 1; i < 6; i++) {
    line(i * 100, 0, i * 100, 600);
    line(0, i * 100, 600, i * 100);
    line(0,0,0,600);
    line(0,0,600,0);
    line(600,0,600,600);
    line(0,600,600,600);
  }
}

var grid = new Grid()
function draw() {
  for (let i = 1; i < 6; i++) {
    let x = i * 100;
    for (let j = 1; j < 6; j++) {
      let y = j * 100;
      if (mouseIsPressed && x < mouseX && mouseX < x + 100 && y < mouseY && mouseY < y + 100) {
        grid.changeColour(i - 1, j - 1);
      }
      fill(grid.getColour(i - 1, j - 1));
      rect(x, y, 100, 100);
    }
  }
}
