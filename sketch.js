function star(x, y, w, c) {
  let r = w / 2;
  //x = x position, y = y position, w = width?, c = corner
  push();
  translate(x, y); //translate to x y and then draw the rest of the star
  line(-c, -c, 0, -r);
  line(0, -r, c, -c);

  line(-c, c, 0, r);
  line(0, r, c, c);

  line(c, -c, r, 0);
  line(r, 0, c, c);

  line(-c, -c, -r, -0);
  line(-r, 0, -c, c);

  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225, 225, 225);

  strokeWeight(1);

  //draw stars that are 100 pixels wide and go all the way to the end

  //drawing a column of stars
  for (let y = 50; y < height; y += 100) {
    star(50, y, 100, 5);
  }

  //drawing a row of stars
  for (let x = 50; x < width; x += 100) {
    star(x, 50, 100, 5);
  }

  //drawing a column of rows
  for (let y = 50; y < height; y += 100) {
    star(50, y, 100, 5);

    //drawing a row of stars
    for (let x = 50; x < width; x += 100) {
      star(x, y, 100, 15);
    }
  }
}
