var bg;
function preload(){
    bg = loadImage("bg.jpg");
}
function setup() {
    createCanvas(600,400);
    angleMode(DEGREES);
}
function draw() {
    background(bg);

    translate(300,200)
    rotate (-90);

    let hr = hour();
    let mn = minute();
    let sc = second();
    noFill();
    strokeWeight(8);
    stroke("pink");
    let end = map(sc,0,60,0,360);
    arc(0,0,300,300,0,end);
      
    stroke(255,102,102);
    let end2 = map(mn,0,60,0,360);
    arc(0,0,280,280,0,end2);
      
    stroke(255);
    let end3 = map(hr%12,0,12,-0,360);
    arc(0,0,260,260,0,end3);
      
    push();
    rotate(end);
    stroke("pink");
    line(0,0,100,0);
    pop();
      
    push();
    rotate(end2);
    stroke(255,102,102);
    line(0,0,75,0);
    pop();
      
    push();
    rotate(end3);
    stroke(255);
    line(0,0,50,0);
    pop();
      
    stroke("red");
    point (0,0);
}