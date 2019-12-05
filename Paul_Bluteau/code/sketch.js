let sound01
let sound02
let sound03
let sound04
let sound05
let sound06
let sound07
let sound08
let sound09
let sound10
let sound11
let sound12
let sound13
let sound14
let sound15
let sound16
let sound17
let sound18
let sound19
let sound20
let sound21
let sound22
let sound23
let sound24
let sound25
let sound26

let L=0;
let W=0
let X=0
let V=0
let N=0
let C=0
let U=0
let Q=0.03

var inc = 0.01;
var scl = 50;
var cols, rows;


function preload() {

  sound01 = loadSound("../asset/maj1.wav")
  sound02 = loadSound("../asset/maj2.wav")
  sound03 = loadSound("../asset/maj3.wav")
  sound04 = loadSound("../asset/maj4.wav")
  sound05 = loadSound("../asset/maj5.wav")
  sound06 = loadSound("../asset/maj6.wav")
  sound07 = loadSound("../asset/maj7.wav")
  sound08 = loadSound("../asset/maj8.wav")
  sound09 = loadSound("../asset/maj9.wav")
  sound10 = loadSound("../asset/maj10.wav")
  sound11 = loadSound("../asset/maj11.wav")
  sound12 = loadSound("../asset/maj12.wav")
  sound13 = loadSound("../asset/min1.wav")
  sound14 = loadSound("../asset/min2.wav")
  sound15 = loadSound("../asset/min3.wav")
  sound16 = loadSound("../asset/min4.wav")
  sound17 = loadSound("../asset/min5.wav")
  sound18 = loadSound("../asset/min6.wav")
  sound19 = loadSound("../asset/min8.wav")
  sound20 = loadSound("../asset/min9.wav")
  sound21 = loadSound("../asset/min10.wav")
  sound22 = loadSound("../asset/min11.wav")
  sound23 = loadSound("../asset/min12.wav")
  sound24 = loadSound("../asset/min13.wav")
  sound25 = loadSound("../asset/min14.wav")
  sound26 = loadSound("../asset/243701__ertfelda__correct.wav")



}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  cols = floor(width / scl);
  rows = floor(height / scl);

  
}

function draw() {

  background(29, 8, 44);
 



  //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

  playSound(sound01, 65)
  if (sound01.isPlaying() == true) {
    push()
    //translate(0,0,1500);
    pointLight(253,173,207, -200, -200, 100);
    pointLight(255,162,0, 200, 200, 100);
   
    noStroke();
    fill(255,255,255);
    ellipsoid(15, 15);
    fill(255,255,255, 200);
    noStroke();
  
    rotate(frameCount * 5);

    rotateZ(-90);
    torus(90, 40, 3, 3);
    fill(255,200,255, 200);
    rotateZ(90);
    torus(90, 40, 3, 3);
    fill(255,150,200, 200);
    rotateZ(135);
    torus(90, 40, 3, 3);
    fill(255,100,170, 200);
    rotateZ(270);
    torus(90, 40, 3, 3);

  

    noFill()
    stroke(200);
    strokeWeight(10);
    rotateX(-5000);

    pop()
  }

  //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

  playSound(sound02, 90)
  if (sound02.isPlaying() == true) {




    push()
    pointLight(38, 169,155 ,-200,-200,200);
    pointLight(38, 169,155,-200,-200,200);
    pointLight(38, 169,155,-200,-200,200);
  
    pointLight(255,162,0,200,200,200);
    pointLight(255,162,0,200,200,200);
  noStroke();
 fill(0,75,255);
 //ellipsoid(15,15);
  fill(200,200,255,200);
  noStroke();
  rotateZ(frameCount *70);
  rotateX(frameCount *20);
  //noFill()
  //stroke(255)
box (270,10,5,5);
  
  rotateX(frameCount *-50);
   rotateZ(frameCount *-30);
box (270,10,5,5);

pop()


  }


  
    //EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE



    playSound(sound03, 69)
    if (sound03.isPlaying() == true) {


      push()
      translate(0,0,-1000)
      stroke(38, 169, 155);
      strokeWeight(1);
      noFill();
      rotate(frameCount * -1);
      torus(600,375 , 12, 16);
      pop()

      push()
      strokeWeight(12);
       translate(0,0,-1500)
      stroke(38, 169, 155);
      rotate(frameCount * 1);
      fill(0, 0, 0, 0);
      torus(2000, 2000, 12, 16);
      pop()

      push()
      rotateZ(1);
      strokeWeight(1);
       translate(0,0,-1500)
      stroke(38, 169, 155) ;
      rotate(frameCount * 1);
      fill(0, 0, 0, 0);
      torus(2000, 2000, 12, 16);
      pop()
    }
  //RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
    playSound(sound04, 82)
    if (sound04.isPlaying() == true) {

      push()
      //translate(0,0,1500);
      pointLight(253,173,207, -200, -200, 100);
      pointLight(255,162,0, 200, 200, 100);
     
      stroke(255,0,0 )
      fill(255,255,255);
      ellipsoid(15, 15);
      fill(0,0,0, 200);
      noStroke();
    
      rotateY(frameCount * 5);
  
      rotateZ(-90);
     // torus(90, 40, 6, 30);
  
      rotateX(90);
     // torus(90, 40, 6, 30);
      fill(255,255,255, 250);
      rotateX(135);
     torus(90, 40, 6, 3);
  
      rotateX(270);
      torus(90, 40, 6, 3);
  
    
  
      noFill()
      stroke(200);
      strokeWeight(10);
      rotateX(-5000);
  
      pop()
}
//TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
playSound(sound05, 84)
  if (sound05.isPlaying() == true) {
    

    push();
    let p = map ( sin(V), -1,1,80,300);
          noFill();
          stroke(255,162,0);
          strokeWeight(15);
          let n = 380-p
rotateX(frameCount*1);
rotateY(frameCount*1);
          ellipse(0,0,p,p);
          push();
          //translate(p,p,0)
          ellipsoid(10,10,10);
          pop();

          push();
          rotateX(90);
          ellipse(0,0,p,p);
          pop();
          push();
          rotateY(90);
          ellipse(0,0,p,p);
          pop();


          strokeWeight(4);
push();

rotateZ(45);
rotateX(45);
rotateY(45);
stroke(38, 169, 155);
ellipse(0,0,p,p);
         
push();
 rotateX(90);
ellipse(0,0,p,p);
pop();
          
push();
rotateY(90);
 ellipse(0,0,p,p);
 pop();
          

 pop();

 strokeWeight(15);

push();
 rotateZ(90);
 rotateX(90);
 rotateY(90);        
stroke(253,173,207);

ellipse(0,0,p,p);

push();
rotateX(90);
ellipse(0,0,p,p);
pop();

push();
rotateY(90);
ellipse(0,0,p,p);
pop();


pop();
          
         
  
          V+=4
 pop();
     
  }
//YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
playSound(sound06, 89)
  if (sound06.isPlaying() == true) {
    push();

    pointLight(253,173,207, -200, -200, 100);
    pointLight(255,162,0, 200, 200, 100);
  
  rotateY(180);
      let h = map ( sin(L), -1,1,170,275);
      fill(38, 169, 155);
      stroke(253,173,207);
      strokeWeight(4)
    
        push()
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
  
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        pop()
  
        rotateY(45);
  
        push();
        fill(253,173,207);
        stroke(38, 169, 155);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
  
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        pop()
  
   
        L+=3
  pop();
  }
//UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
playSound(sound07, 85)
  if (sound07.isPlaying() == true) {

    push();
    translate(0,0,300);
   
      let h = map ( noise(U,100)*5, -1,1,20,80);
      fill(255,162,0 ,100      );
      stroke(253,173,207);
      strokeWeight(4)
      rotateX(-20);
        rotateY(50)
       
        rotateX(frameCount*1);
        rotateY(frameCount*1);
        push()
        box(50,h,50);
        rotateX(45);
        box(50,h,50);
        rotateX(45);
        box(50,h,50);
        rotateX(45);
        box(50,h,50);
        rotateX(45);
    
        rotateZ(45);
        box(50,h,50);
        rotateZ(45);
        box(50,h,50);
        rotateZ(45);
        box(50,h,50);
        rotateZ(45);
        box(50,h,50);
        pop()
  
        rotateY(45);
  
        push();
        fill(255,162,0 ,100 );
        stroke(38, 169, 155);
        box(50,h,50);
        rotateX(45);
        box(50,h,50);
        rotateX(45);
        box(50,h,50);
        rotateX(45);
        box(50,h,50);
        rotateX(45);
  
        rotateZ(45);
        box(50,h,50);
        rotateZ(45);
        box(50,h,50);
        rotateZ(45);
        box(50,h,50);
        rotateZ(45);
        box(50,h,50);
        pop()
  
   
        U+=0.01
  pop();
    

  }
//IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
playSound(sound08, 73)
  if (sound08.isPlaying() == true) {
push();
fill(253,173,207,100 );
stroke(38, 169, 155    );
strokeWeight(15);


translate(0,-300,-500)

push()
rotateY(frameCount*5);
rotateX(75);
rotateZ(75);
ellipse(0,0,200,200);
pop();

translate(0,75,0)
push()
rotateY(frameCount*-5)
rotateX(-75);
rotateZ(-75);
ellipse(0,0,200,200);
pop()

translate(0,75,0)

push()

rotateY(frameCount*5);
rotateX(75);
rotateZ(75);
ellipse(0,0,200,200);
pop();

translate(0,75,0)
push()
rotateY(frameCount*-5)
rotateX(-75);
rotateZ(-75);
ellipse(0,0,200,200);
pop()

translate(0,75,0)

push()

rotateY(frameCount*5);
rotateX(75);
rotateZ(75);
ellipse(0,0,200,200);
pop();

translate(0,75,0)
push()
rotateY(frameCount*-5)
rotateX(-75);
rotateZ(-75);
ellipse(0,0,200,200);
pop()

translate(0,75,0)
rotateY(frameCount*5);
push()
rotateX(75);
rotateZ(75);
ellipse(0,0,200,200);
pop();

translate(0,75,0)
push()
rotateY(frameCount*-5)
rotateX(-75);
rotateZ(-75);
ellipse(0,0,200,200);
pop()
pop();


  }
//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
playSound(sound09, 79)
  if (sound09.isPlaying() == true) {
    push();


    translate(width/-2,height/-2,0);
    translate(40,40,0)
    
    
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = (x + y * width) * 4;
        var zoff = 0;
        var ang = noise(xoff, yoff, zoff) * TWO_PI;
        var v = p5.Vector.fromAngle(ang);
    
    
    
        xoff += inc;
        strokeWeight(1);
        stroke(random(200, 255),150, 150,150);
        push();
      
        translate(x * scl, y * scl);
        //rotate(degrees(v.heading()));
       
       push();
        angleMode(DEGREES)
        let l = map ( sin(C), -1,1,1,5);
        translate(0,0,l*50),
        
    
        cone(20,20, 5);
        C += 5;
        pop()
       
        pop();
        zoff += 0.001;
      }
      yoff += inc;
     
    }
    pop();

  }
//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP

playSound(sound10, 80)
  if (sound10.isPlaying() == true) {

    push();

    pointLight(253,173,207, -200, -200, 100);
    pointLight(255,162,0, 200, 200, 100);
  
  
      let h = map ( sin(L), -1,1,200,800);
      fill(29, 8, 44);
      stroke(253,173,207);
      strokeWeight(4)
    push();
    noStroke();
    fill(253,173,207     );
    translate(0,0,50)
      ellipse(0,0,800,800);
       pop(); 
        push()
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
  
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        pop()
  
        rotateY(45);
  
        push();
        fill(253,173,207);
        stroke(38, 169, 155);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
        cone(50,h,50);
        rotateX(45);
  
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        rotateZ(45);
        cone(50,h,50);
        pop()
  
   
        L+=3
  pop();

  }

//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
playSound(sound11, 81)
  if (sound11.isPlaying() == true) {

push();


translate(width/-2,height/-2,0);
translate(40,40,0)


var yoff = 0;
for (var y = 0; y < rows; y++) {
  var xoff = 0;
  for (var x = 0; x < cols; x++) {
    var index = (x + y * width) * 4;
    var zoff = 0;
    var ang = noise(xoff, yoff, zoff) * TWO_PI;
    var v = p5.Vector.fromAngle(ang);



    xoff += inc;
    strokeWeight(1);
    stroke(random(200, 255),150, 150,150);
    push();
  
    translate(x * scl, y * scl);
    //rotate(degrees(v.heading()));
   
   push();
    angleMode(DEGREES)
    let l = map ( sin(C), -1,1,1,5);
    translate(0,0,l*50),
    

    torus(20,10, 5);
    C += 5;
    pop()
   
    pop();
    zoff += 0.001;
  }
  yoff += inc;
 
}
pop();
  }

  
//SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
playSound(sound12, 83)
  if (sound12.isPlaying() == true) {

    push()

    graphics= createGraphics(200,200);
    graphics.strokeWeight(5);
    graphics.stroke(253,173,207);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);
    
    graphics.stroke(38, 169, 155);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(255,162,0);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(253,173,207);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);
    
    graphics.stroke(38, 169, 155);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(255,162,0);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(253,173,207);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);
    
    graphics.stroke(38, 169, 155);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(255,162,0);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(253,173,207);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);
    
    graphics.stroke(38, 169, 155);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(255,162,0);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

        graphics.stroke(253,173,207);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);
    
    graphics.stroke(38, 169, 155);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(255,162,0);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(253,173,207);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);
    
    graphics.stroke(38, 169, 155);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(255,162,0);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(253,173,207);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);
    
    graphics.stroke(38, 169, 155);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(255,162,0);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(253,173,207);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);
    
    graphics.stroke(38, 169, 155);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    graphics.stroke(255,162,0);
    graphics.noFill();
    graphics.rect(random(200),random(200),30,30);

    
    
    
       
    
   

   
   
  
   
  ambientLight(100);
  directionalLight(255,255,255,0,0,-1)
  fill(38, 169, 155);
  //strokeWeight(30);
 
  texture(graphics);
  rotateX(frameCount*1)
  rotateY(frameCount*1)
  torus(200,50,50);
     
    pop();
  }

//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
playSound(sound13, 68)
  if (sound13.isPlaying() == true) {
    push()
    graphics= createGraphics(200,200);
    graphics.fill(255,162,0,50);
    graphics.ellipse(random(95,105),random(95,105),70);
    graphics.fill(255,162,0,50);
    graphics.ellipse(random(95,105),random(95,105),100);
    graphics.fill(255,162,0,50);
    graphics.ellipse(random(95,105),random(95,105),130);
    graphics.fill(255,162,0,50);
    graphics.ellipse(random(95,105),random(95,105),160);
    graphics.fill(255,162,0,50,50);
    graphics.ellipse(random(95,105),random(95,105),190);
  
 
  ambientLight(100);
  directionalLight(255,255,255,0,0,-1)
  stroke(253,173,207);
  strokeWeight(25);
 
  texture(graphics);
  rotateX(frameCount*1)
  rotateY(frameCount*1)
  box(200,200,200);
  pop()
     
  }
  
//FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
playSound(sound14, 70)
  if (sound14.isPlaying() == true) {
    push()
    fill(253,173,207,100 );
 stroke(255,162,0       )
    push();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.5);
    push();
    translate(300,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    pop();
    
    fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();  fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();  fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();  fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();  fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();  fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();  fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
    fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();  fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();  fill(38, 169, 155,100    )
    rotate(frameCount*0.85);
    push();
    translate(100,0,0)
    rotateZ(75);
    rotateX(35);
    cone(60,120,10)
    pop();
      
    pop()
  }
//GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
playSound(sound15, 71)
  if (sound15.isPlaying() == true) {

push();
    fill(250,250,250,75);
    noStroke();
    pointLight(38, 169, 155,0,-500,500);   
    //pointLight(255,162,0,0,500,-500);   
    translate(-610, -290)
    push()
    pointLight(38, 169, 155,0,0,0)
      rotateX(frameCount *001);
      rotateY(frameCount *001);
    torus (40,15,12,8);
    noStroke()
   
    
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *01)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *01)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()
//change
    translate(-1100,150)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

   translate(200,0)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()
//change
    translate(-1100,150)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
    rotateX(frameCount *001)
    rotateY(frameCount *001)
    torus (40,15,12,8);
    pop()
    
    translate(200,0)
    push()
    rotateX(frameCount *001)
    rotateY(frameCount *001)
    torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
    rotateX(frameCount *001)
    rotateY(frameCount *001)
    torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
    rotateX(frameCount *001)
    rotateY(frameCount *001)
    torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
    rotateX(frameCount *001)
    rotateY(frameCount *001)
    torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
    rotateX(frameCount *01)
    rotateY(frameCount *001)
    torus (40,15,12,8);
      torus (40,15,12,8);
    pop()
//change
     translate(-1100,150)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    translate(200,00)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    translate(200,00)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    translate(200,00)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    translate(200,00)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    translate(200,00)
    push()
      rotateX(frameCount *-001)
      rotateY(frameCount *-001)
      torus (40,15,12,8);
    pop()

    //change
    translate(-1100,150)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()

    translate(200,0)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()
    
    translate(200,0)
    push()
      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()
    
    translate(200,0)
    push()
      rotateX(frameCount *01)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()
    
    translate(200,0)
    push()
  

      rotateX(frameCount *001)
      rotateY(frameCount *001)
      torus (40,15,12,8);
    pop()
pop();
  }
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
playSound(sound16, 72)
  if (sound16.isPlaying() == true) {

    push()
    translate(0,0,-1000)
    stroke(253,173,207);
    strokeWeight(1);
    noFill();
    rotate(frameCount * -1);
    torus(600,375 , 5, 16);
    pop()

    

    push()
    rotateZ(1);
    strokeWeight(1);
     translate(0,0,-1500)
    stroke(253,173,207) ;
    rotate(frameCount * 1);
    fill(0, 0, 0, 0);
    torus(2000, 2000, 20, 16);
    pop()

  }
//JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
playSound(sound17, 74)
  if (sound17.isPlaying() == true) {

    push();

    fill(253,173,207,100 );
    stroke(253,173,207         );
    strokeWeight(15);
  
   rotateY(frameCount*23)
    translate(0,-300,0)
    push()
    rotateX(75);
    rotateZ(75);
    ellipse(0,0,200,200);
    pop();
    
    translate(0,75,0)
    push()
    rotateX(-75);
    rotateZ(-75);
    ellipse(0,0,200,200);
    pop()
    
    translate(0,75,0)
    push()
    rotateX(75);
    rotateZ(75);
    ellipse(0,0,200,200);
    pop();
    
    translate(0,75,0)
    push()
    rotateX(-75);
    rotateZ(-75);
    ellipse(0,0,200,200);
    pop()
  
    translate(0,75,0)
    push()
    rotateX(75);
    rotateZ(75);
    ellipse(0,0,200,200);
    pop();
    
    translate(0,75,0)
    push()
    rotateX(-75);
    rotateZ(-75);
    ellipse(0,0,200,200);
    pop()
  
    translate(0,75,0)
    push()
    rotateX(75);
    rotateZ(75);
    ellipse(0,0,200,200);
    pop();
    
    translate(0,75,0)
    push()
    rotateX(-75);
    rotateZ(-75);
    ellipse(0,0,200,200);
    pop()
  
    translate(0,75,0)
    push()
    rotateX(75);
    rotateZ(75);
    ellipse(0,0,200,200);
    pop();
    
    translate(0,75,0)
    push()
    rotateX(-75);
    rotateZ(-75);
    ellipse(0,0,200,200);
    pop()

    pop();

  }
//KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
playSound(sound18, 75)
  if (sound18.isPlaying() == true) {

push();
fill(253,173,207);
stroke(38, 169, 155);


translate(0,0,-500);
rotateX(-10);
rotateY(-10);
rotateY(frameCount*100);


push();
translate(20,250);
ellipsoid(70,70);
pop();

push();
translate(50,150);
  ellipsoid(70,70);
pop();



push();
translate,(50,130);
  ellipsoid(70,70);

  box(200,0,200);
rotateZ(45)
  box(200,0,200);
  rotateZ(45)
  box(200,0,200);
  rotateZ(45)
  box(200,0,200);
  rotateZ(45)
  box(200,0,200);

pop();

push();
translate(50,-150)
  ellipsoid(70,70);
pop();

push();
translate(20,-250)
  ellipsoid(70,70,70);
pop();
pop();

  }
//LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
playSound(sound19, 76)
  if (sound19.isPlaying() == true) {
    push();
    let h = map ( sin(L), -1,1,200,800);
    fill(38, 169, 155);
    stroke(253,173,207);
    strokeWeight(4)
    rotateX(-20);
      rotateY(50)
     
      rotateX(frameCount*1);
      rotateY(frameCount*1);
      push()
      box(50,h,50);
      rotateX(45);
      box(50,h,50);
      rotateX(45);
      box(50,h,50);
      rotateX(45);
      box(50,h,50);
      rotateX(45);

      rotateZ(45);
      box(50,h,50);
      rotateZ(45);
      box(50,h,50);
      rotateZ(45);
      box(50,h,50);
      rotateZ(45);
      box(50,h,50);
      pop()

      rotateY(45);

      push();
      fill(253,173,207);
      stroke(38, 169, 155);
      box(50,h,50);
      rotateX(45);
      box(50,h,50);
      rotateX(45);
      box(50,h,50);
      rotateX(45);
      box(50,h,50);
      rotateX(45);

      rotateZ(45);
      box(50,h,50);
      rotateZ(45);
      box(50,h,50);
      rotateZ(45);
      box(50,h,50);
      rotateZ(45);
      box(50,h,50);
      pop()

 
      L+=3
pop();
  }
//MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
playSound(sound20, 77)
  if (sound20.isPlaying() == true) {

    push();
    fill(255,162,0       );
    noStroke();
rotateY(frameCount*60)
rotateX(frameCount*60)
push()
rotateZ(frameCount*3)
box(50,50,50);
pop()
rotateZ(frameCount*-3)
rotateZ(45)
box(50,50,50);

fill(38, 169, 155, 100);
stroke(253,173,207     );
push();
rotateZ(frameCount *4)
translate(0,-250,0)
rotateY(frameCount *20)
ellipse(0,0,50,50)
pop();

push();
rotateZ(frameCount *-5)
translate(0,-150,0)
ellipsoid(20,20,20,5,)
pop();


push();
rotateZ(frameCount *-1)
translate(0,-400,0)
ellipsoid(20,20,20,5,)
translate(0,800,0)
rotateZ(frameCount *-2)
torus(20,20,20,5,)


rotateZ(frameCount *-5)
translate(0,-150,0)
ellipsoid(20,20,20,5,)
rotateZ(frameCount *-5)
translate(0,-150,0)
ellipsoid(20,20,20,5,)
pop();

push();
rotateZ(frameCount *-5)
translate(0,-300,0)
ellipsoid(10,10,10,5,)
translate(35,-20,10)
ellipsoid(10,10,10,5,)
translate(35,-20,10)
ellipsoid(10,10,10,5,)
translate(35,-20,10)
ellipsoid(10,10,10,5,)
pop();

push();
rotateZ(frameCount *-5)
translate(20,400,3)
torus(50,100,120,5,)
push();
rotateZ(frameCount *-5)
translate(0,-300,0)
ellipsoid(10,10,10,5,)
translate(35,-20,10)
ellipsoid(10,10,10,5,)
translate(35,-20,10)
ellipsoid(10,10,10,5,)
translate(35,-20,10)
ellipsoid(10,10,10,5,)
pop();
pop();
pop();

  }
//WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
playSound(sound21, 87)
  if (sound21.isPlaying() == true) {
    push();
      
        let m = map ( sin(W), -1,1,0,100);
        fill(38, 169, 155,100);
        stroke(255,162,0);
        strokeWeight(4)
        rotateX(-20);
          rotateY(50)
        box(100,m,100);

      translate(100,0,0);
      box(100,m*1.5,100);
      translate(-100,0,-100);
      box(100,m*3,100);
      translate(100,0,0);
      box(100,m*5,100);

          W+=4
pop();
push()
rotateX(-20);
rotateY(50);
rotateY(frameCount*5);
fill(253,173,207     );
noStroke();
   translate(0,0,175);
ellipsoid(20,20,20);
pop()
  }
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
playSound(sound22, 88)
  if (sound22.isPlaying() == true) {

    push();
    
    let m = map ( sin(X), -1,1,80,300);
    noFill();
    stroke(255,162,0);
    strokeWeight(15);
    let n = m
rotateX(frameCount*1);
rotateY(frameCount*1);
    ellipse(0,0,m,m);
    push();
    rotateX(90);
    ellipse(0,0,m,m);
    pop();
    push();
    rotateY(90);
    ellipse(0,0,m,m);
    pop();



push();
rotateZ(45);
rotateX(45);
rotateY(45);
stroke(38, 169, 155);
ellipse(0,0,m,m);
   
    push();
    rotateX(90);
    ellipse(0,0,m,m);
    pop();
    
    push();
    rotateY(90);
    ellipse(0,0,m,m);
    pop();
    

    pop();
    
   

    X+=4

  


}
   
  

  

    pop();
    

//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
playSound(sound23, 67)
  if (sound23.isPlaying() == true) {
    push()
    pointLight(253,173,207      ,-200,-200,200);
    pointLight(253,173,207     ,-200,-200,200);
    pointLight(253,173,207     ,-200,-200,200);
  
    pointLight(255,162,0,200,200,200);
    pointLight(255,162,0,200,200,200);
  noStroke();
 fill(0,75,255);
 //ellipsoid(15,15);
  fill(200,200,255,200);
  noStroke();
  rotateZ(frameCount *70);
  rotateX(frameCount *20);
  //noFill()
  //stroke(255)
box (270,10,5,5);
  
  rotateX(frameCount *-50);
   rotateZ(frameCount *-30);
box (270,10,5,5);

pop()

  }
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
playSound(sound24, 86)
  if (sound24.isPlaying() == true) {
Q = 25;
rotateX(-45);
rotateY(frameCount*1);
rotateZ(frameCount*0,1);
    push();
    fill(255,100,0,25);
   stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;

fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;   fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;

fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;
fill(255,100,0,25);
stroke(255,100,0,25);
ellipsoid(Q,Q,Q,5);
Q +=15;

    pop();



  }
//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
playSound(sound25,66)
  if (sound25.isPlaying() == true) {
  push();
  stroke(253,173,207     );
  fill(253,173,random(120,240),100     )
  rotateZ(frameCount *3)
  push()
  rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
  rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
  translate(30,30,0);
   ellipsoid(20,20);
   pop();
 push()
 rotateZ(frameCount *-3 )
 translate(-30,30,0);
  ellipsoid(20,20);
  rotateZ(frameCount *-3 )
  translate(-30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *-3 )
   translate(-30,30,0);
    ellipsoid(20,20);
    rotateZ(frameCount *-3 )
    translate(-30,30,0);
     ellipsoid(20,20);
     rotateZ(frameCount *-3 )
     translate(-30,30,0);
      ellipsoid(20,20);
      rotateZ(frameCount *-3 )
      translate(-30,30,0);
       ellipsoid(20,20);
   rotateZ(frameCount *-3 )
  translate(-30,30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *-3 )
   translate(-30,30,0);
    ellipsoid(20,20);
    rotateZ(frameCount *-3 )
    translate(-30,30,0);
     ellipsoid(20,20);
     rotateZ(frameCount *-3 )
     translate(-30,30,0);
      ellipsoid(20,20);
      rotateZ(frameCount *-3 )
      translate(-30,30,0);
       ellipsoid(20,20);
       rotateZ(frameCount *-3 )
       translate(-30,30,0);
        ellipsoid(20,20);
        pop();
 
       push()
       rotateZ(frameCount *3 )
  translate(-30,-30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
   translate(-30,-30,0);
    ellipsoid(20,20);
    rotateZ(frameCount *3 )
    translate(-30,-30,0);
     ellipsoid(20,20);
     rotateZ(frameCount *3 )
     translate(-30,-30,0);
      ellipsoid(20,20);
      rotateZ(frameCount *3 )
      translate(-30,-30,0);
       ellipsoid(20,20);
       rotateZ(frameCount *3 )
       translate(-30,-30,0);
        ellipsoid(20,20);
       rotateZ(frameCount *3 )
  translate(-30,-30,0);
   ellipsoid(20,20);
   rotateZ(frameCount *3 )
   translate(-30,-30,0);
    ellipsoid(20,20);
    rotateZ(frameCount *3 )
    translate(-30,-30,0);
     ellipsoid(20,20);
     rotateZ(frameCount *3 )
     translate(-30,-30,0);
      ellipsoid(20,20);
      rotateZ(frameCount *3 )
      translate(-30,-30,0);
       ellipsoid(20,20);
       rotateZ(frameCount *3 )
       translate(-30,-30,0);
        ellipsoid(20,20); 
  pop();
  pop();
  }
//NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN

playSound(sound26, 78)
  if (sound26.isPlaying() == true) {

    push();
    translate(width/-2,height/-2,0);
  translate(40,40,0)

  
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * width) * 4;
      var zoff = 0;
      var ang = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(ang);



      xoff += inc;
      strokeWeight(1);
      stroke(random(200, 255),150, 150,150);
      push();
    
      translate(x * scl, y * scl);
      //rotate(degrees(v.heading()));
     
     push();
      angleMode(DEGREES)
      let a = map ( sin(N), -1,1,1,5);
      translate(0,0,a*50),
      

      ellipsoid(5, 5);
      N += 3;
      pop()
     
      pop();
      zoff += 0.001;
    }
    yoff += inc;
   
  }
  

    pop();
    
  }
//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
playSound(sound23, 67)
  if (sound23.isPlaying() == true) {


}

}


function playSound(sound, keyId) {
  if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
    sound.play();
  }
}
