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

  star(200, 200, 100, 5)
  star(300, 250, 200, 10)
  star(250, 250, 50, 4)

  
push();
noFill();

translate(500, 300);
for(let d = 20; d < 1220; d+= 20){
  print(d); //asking javascript to print the value of d everytime it runs the code
  ellipse(0, 0, d);
}

translate(-15, 0);
for(let d = 20; d < 1220; d += 20){
  ellipse(0, 0, d);
}

}
