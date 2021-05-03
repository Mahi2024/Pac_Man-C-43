

function setup(){
  createCanvas(900,500);
Pac_Man = createSprite(400,450,15,15);

//google
c1 = createSprite(200,115,100,10);
c2 = createSprite(155,210,10,200);
c3 = createSprite(200,315,100,10);
c4 = createSprite(255,275,10,90);
c5 = createSprite(237,230,45,10);
c6 = createSprite(300,275,10,90);
c7 = createSprite(380,275,10,90);
c8 = createSprite(340,230,90,10);
c9 = createSprite(340,320,90,10);
c10 = createSprite(465,320,90,10);
c11 = createSprite(465,230,90,10);
c12 = createSprite(425,275,10,90);
c13 = createSprite(505,275,10,90);
// c14 = createSprite(165,270,125,15);
// c15 = createSprite(100,330,120,15);
// c16 = createSprite(90,365,15,70);
// c17 = createSprite(285,335,15,125);
// c18 = createSprite(315,360,50,15);
// c19 = createSprite(345,218,15,300);
// c20 = createSprite(285,206,30,15);
// c21 = createSprite(332,125,40,15);
// c22 = createSprite(290,25,40,15);

//cornerSprites
c23 = createSprite(400,500,1000,15);
c24 = createSprite(400,0,1000,15);
c25 = createSprite(900,50,15,200);
c26 = createSprite(900,400,15,200);
c27 = createSprite(0,50,15,200);
c28 = createSprite(0,400,15,200);
c29 = createSprite(850,155,100,10);
c30 = createSprite(850,300,100,10);
c31 = createSprite(50,155,100,10);
c32 = createSprite(50,300,100,10);
c33 = createSprite(850,195,100,10);
c34 = createSprite(850,260,100,10);
c35 = createSprite(50,195,100,10);
c36 = createSprite(50,260,100,10);
c37 = createSprite(805,175,10,50);
c38 = createSprite(805,280,10,50);
c39 = createSprite(97,175,10,50);
c40 = createSprite(97,280,10,50);
 
}

function draw(){
  background("black");
  Pac_Man.shapeColor = "pink";
  
  if (keyDown(UP_ARROW)) {
  Pac_Man.velocityX = 0;
  Pac_Man.velocityY = -2;
}
if (keyDown(DOWN_ARROW)) {
  Pac_Man.velocityX = 0;
  Pac_Man.velocityY = 2;
}
if (keyDown(RIGHT_ARROW)) {
  Pac_Man.velocityX = 2;
  Pac_Man.velocityY = 0;
}
if (keyDown(LEFT_ARROW)) {
  Pac_Man.velocityX = -2;
  Pac_Man.velocityY = 0;
}



  
  edges = createEdgeSprites();
  // Pac_Man.bounceOff(edges);
  // Pac_Man.bounceOff(c1||c2||c3||c4||c5||c6||c7||c8||c9||c10||c11||c12||c13||c14||c15||c16||c17||c18||c19||c20||c21||c22);
  // Pac_Man.bounceOff(c2);
  // Pac_Man.bounceOff(c3);
  // Pac_Man.bounceOff(c4);
  // Pac_Man.bounceOff(c5);
  // Pac_Man.bounceOff(c6);
  // Pac_Man.bounceOff(c7);
  // Pac_Man.bounceOff(c8);
  // Pac_Man.bounceOff(c9);
  // Pac_Man.bounceOff(c10);
  // Pac_Man.bounceOff(c11);
  // Pac_Man.bounceOff(c12);
  // Pac_Man.bounceOff(c13);
  // Pac_Man.bounceOff(c14);
  // Pac_Man.bounceOff(c15);
  // Pac_Man.bounceOff(c16);
  // Pac_Man.bounceOff(c17);
  // Pac_Man.bounceOff(c18);
  // Pac_Man.bounceOff(c19);
  // Pac_Man.bounceOff(c20);
  // Pac_Man.bounceOff(c21);
  // Pac_Man.bounceOff(c22);
  
  
  
  drawSprites();
  textSize(20);
fill("white");
text(mouseX+" , "+mouseY,mouseX,mouseY);
}
