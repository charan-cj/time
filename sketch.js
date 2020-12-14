var hr;
var min;
var sec;



function setup() {
  createCanvas(720, 400);
  noStroke();
  let hr = hour();
  let min = minute();
  let sec = second();

}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(0, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(sec, 0, 60,0, 360);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
}
