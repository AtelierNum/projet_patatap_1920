
//Introduction des sons
let sound01;
let sound02;
let sound03;
let sound03FFT;
let sound04;
let sound05;
let sound06;
let sound07;
let sound07FFT;
let sound08;
let sound09;
let sound10;
let sound10FFT;
let sound11;
let sound12;
let sound12FFT
let sound13;
let sound14;
let sound15;  
let sound16;
let sound17;
let sound18;
let sound19;
let sound20;
let sound20FFT;
let sound21; 
let sound22;
let sound23;
let sound24;
let sound25;
let sound25FFT;
let sound26;
let sound26FFT



function preload() { 
//Chargement des sons
sound01 = loadSound("../assets/kick.wav")
sound02 = loadSound("../assets/808Bass.wav")
sound03 = loadSound("../assets/Tag.mp3")
sound04 = loadSound("../assets/Spin.wav")
sound05 = loadSound("../assets/Snare.wav")
sound06 = loadSound("../assets/Clap.wav")
sound07 = loadSound("../assets/Guitare.wav")
sound08 = loadSound("../assets/Piano.mp3")
sound09 = loadSound("../assets/Skurt.mp3")
sound10 = loadSound("../assets/hihat.wav")
sound11 = loadSound("../assets/Cymbal.flac")
sound12 = loadSound("../assets/Trap.wav")
sound13 = loadSound("../assets/808Tom.wav")
sound14 = loadSound("../assets/Cowbell.mp3")
sound15 = loadSound("../assets/Son15.mp3")
sound16 = loadSound("../assets/trompette.mp3")
sound17 = loadSound("../assets/Scratch.wav")
sound18 = loadSound("../assets/Basspsy.mp3")
sound19 = loadSound("../assets/fx.mp3")
sound20 = loadSound("../assets/click of water.wav")
sound21 = loadSound("../assets/clappowa.mp3")
sound22 = loadSound("../assets/Attackkick.wav")
sound23 = loadSound("../assets/rim.mp3")
sound24 = loadSound("../assets/gun.mp3")
sound25 = loadSound("../assets/vhs.mp3")
sound26 = loadSound("../assets/pluck.wav")

}


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
 // on prend la wave forme des sons choisit
    sound03FFT = new p5.FFT()
    sound03FFT.setInput(sound03)

    sound07FFT = new p5.FFT()
    sound07FFT.setInput(sound07)

    sound10FFT = new p5.FFT()
    sound10FFT.setInput(sound10)

    sound12FFT = new p5.FFT()
    sound12FFT.setInput(sound12)

    sound13FFT = new p5.FFT()
    sound13FFT.setInput(sound13)

    sound20FFT = new p5.FFT()
    sound20FFT.setInput(sound20)

    sound25FFT = new p5.FFT()
    sound25FFT.setInput(sound25)

    sound26FFT = new p5.FFT()
    sound26FFT.setInput(sound26)



}

function draw() {

  background(0);
    
    // A
    playSound(sound01, 65)//A
    if(sound01.isPlaying()== true) {
        //création d'une variable pour le grandissement du cercle
        var r = map(sound01.currentTime(), 0, sound01.duration()*4, 0, width) 
        fill(255, 255, 255)
        stroke(255, 255, 255)
        //coordonnée x,y puis la grosseur en x,y
        ellipse(width , height * 0.5, r, r)
        ellipse(width*0.6, height*0.5, r, r)
        ellipse(0, height*0.5, r, r)
        ellipse(width*0.2, height*0.5, r, r)
        ellipse(width*0.4, height*0.5, r, r)
        ellipse(width*0.8, height*0.5, r, r)
        
    }
    
    // Z
    playSound(sound02, 90)
    if(sound02.isPlaying()== true) {
        var r = map(sound02.currentTime(), 0, sound02.duration(), 0, width)
       noFill() 
        ellipse(width * 0.5, height * 0.5, r, r)
       stroke(255, 255, 255)
       strokeWeight(10 )

    }
    // E
    playSound(sound03, 69)
    if (sound03.isPlaying() == true) {
        //On prend la wave forme
      let wave = sound03FFT.waveform()
      noFill()
      strokeWeight(10)
      stroke(255, 255, 255)
      //Création de la forme, wave form
      beginShape()
      for (let i = 0 ; i < wave.length ; i++){
          let x = map(i, 0, wave.length, 0, width) //Définir les coordonnées
          let y = map(wave[i], -1, 1, height, 0)
          curveVertex(x, y)
    }
    endShape()
    }

    // R
    playSound(sound04, 82)

if (sound04.isPlaying() == true) {
    //Définir la rotation
    let angle = map(sound04.currentTime(), 0, sound04.duration(), 0, HALF_PI)
    rectMode(CENTER)
    noFill()
    stroke(255, 255, 255)
    strokeWeight(15)
    push()
    translate(width*0.5, height*0.5)
    rotate(angle)
    rect(0,0, height*0.25, height*0.25 )
    pop()
    
}
// T
playSound(sound05, 84)
if (sound05.isPlaying() == true) {
    var r = map(sound05.currentTime(), 0, sound05.duration()*0.3, width*0.2, height * 0.2)
fill(255)
noStroke()
    ellipse(0, 0, r, r)
    ellipse(0, height * 0.2, r, r)
    ellipse(0, height * 0.4, r, r)
    ellipse(0, height * 0.6, r, r)
    ellipse(0, height * 0.8, r, r)
    ellipse(0, height, r, r)
    

    ellipse(width * 0.2, 0, r, r)
    ellipse(width * 0.2, height * 0.2, r, r)
    ellipse(width * 0.2, height * 0.4, r, r)
    ellipse(width * 0.2, height * 0.6, r, r)
    ellipse(width * 0.2, height * 0.8, r, r)
    ellipse(width * 0.2, height, r, r)

    ellipse(width * 0.4, 0, r, r)
    ellipse(width * 0.4, height * 0.2, r, r)
    ellipse(width * 0.4, height * 0.4, r, r)
    ellipse(width * 0.4, height * 0.6, r, r)
    ellipse(width * 0.4, height * 0.8, r, r)
    ellipse(width * 0.4, height, r, r)

    ellipse(width * 0.6, 0, r, r)
    ellipse(width * 0.6, height * 0.2, r, r)
    ellipse(width * 0.6, height * 0.4, r, r)
    ellipse(width * 0.6, height * 0.6, r, r)
    ellipse(width * 0.6, height * 0.8, r, r)
    ellipse(width * 0.6, height, r, r)

    ellipse(width* 0.8, 0, r, r)
    ellipse(width * 0.8, height * 0.2, r, r)
    ellipse(width * 0.8, height * 0.4, r, r)
    ellipse(width * 0.8, height * 0.6, r, r)
    ellipse(width * 0.8, height * 0.8, r, r)
    ellipse(width * 0.8, height, r, r)
    
    ellipse(width, 0, r, r)
    ellipse(width, height * 0.2, r, r)
    ellipse(width, height * 0.4, r, r)
    ellipse(width, height * 0.6, r, r)
    ellipse(width, height * 0.8, r, r)
    ellipse(width, height, r, r)
            
    
    
        
}
// Y
playSound(sound06, 89)

if (sound06.isPlaying() == true) {
    push()
    translate(width * 0.5, height * 0.5)
    //Définir la rotation
    var ang = map(sound06.currentTime()*0.5, 0, sound06.duration()*0.5, 0, PI*1.5)
    rectMode(CENTER)
    stroke(0);
    strokeWeight(0)
    rotate(ang)
    fill(255, 255, 255)
    rect(0, 0, width * 2, height * 0.2)
   
    pop()
}

// U
playSound(sound07, 85)

if (sound07.isPlaying() == true) {
    push();
    //Définir la wave form
    let waveform = sound07FFT.waveform();
    stroke(300)
    strokeWeight(2)
    noFill()
   // Création de la forme de la Wave form
    beginShape()
    for (var i = 0; i < waveform.length; i++) {
    var angle = map(i, 0, waveform.length, 0, TWO_PI);// définir l'angle 
    var rad = map(waveform[i], -1, 1, 0, height);//Définir le radiant
    var x = width * 0.5 + rad * cos(angle) //Définir les coordonnées
    var y = height * 0.5 + rad * sin(angle)
    curveVertex(x, y);
    }
    endShape(CLOSE);
    pop()

    }

    // I
    playSound(sound08, 73)

if (sound08.isPlaying() == true) {
    //Définir l'agrandissement
    var r = map(sound08.currentTime(), 0, sound08.duration()*0.29 , width*0.2, height*0.2)
    push()
    stroke(255)
    strokeWeight(20)
  noFill()
    rectMode(CENTER)
    ellipse(width*0.5 , height*0.5, r, r)
    rect(width*0.7, height*0.6, r, r)
    rect(width*0.3, height*0.4, r, r)
    rect(width*0.3, height*0.6, r, r)
    rect(width*0.7, height*0.4, r, r)

    pop()
}

// O
playSound(sound09, 79)

 if (sound09.isPlaying() == true) {

    //Définir la réduction du cercle
    var r = map(sound09.currentTime(), 0, sound09.duration()*0.45, width*0.55, height*0.5)
    noFill()
    stroke(255)
    strokeWeight(30)
    ellipse(0, height*0.5, r, r)
    ellipse(width, height*0.5, r, r)
    ellipse(width*0.5, 0, r, r)
    ellipse(width*0.5, height, r, r)
 } 

 // P
 playSound(sound10, 80)

 if (sound10.isPlaying() == true) {
     push();
     //On prend la wave form
    let waveform = sound10FFT.waveform();
    stroke(300)
    strokeWeight(2)
    noFill()
    //Création de la forme de la wave form
    beginShape()
    for (var i = 0; i < waveform.length; i++) {
    var angle = map(i, 0, waveform.length, 0, TWO_PI);
    var rad = map(waveform[i], -1, 1, 0, height); 
    var x = width * 0.5 + rad * cos(angle)  
    var y = height * 0.5 + rad * sin(angle)
   curveVertex(x, y);
    }
    endShape(CLOSE);
    beginShape()
    for (var i = 0; i < waveform.length; i++) {
    var angle = map(i, 0, waveform.length, 0, TWO_PI);
    var rad = map(waveform[i], -1, 1, 0, height*0.5);
    var x = width * 0.75 + rad * cos(angle)
    var y = height * 0.5 + rad * sin(angle)
   curveVertex(x, y);
    }
    endShape(CLOSE);
    beginShape()
    for (var i = 0; i < waveform.length; i++) {
    var angle = map(i, 0, waveform.length, 0, TWO_PI);
    var rad = map(waveform[i], -1, 1, 0, height*0.5);
    var x = width * 0.25 + rad * cos(angle)
    var y = height * 0.5 + rad * sin(angle)
   curveVertex(x, y);
    }
    endShape(CLOSE);

    pop()

}

// Q
playSound(sound11, 81)
if (sound11.isPlaying() == true) {
    //Définir le déplacement 
    var r = map(sound11.currentTime(), 0, sound11.duration(), 0, height )
    fill(255, 255, 255)
    rect(r, height*0.5, height*0.25, height*0.25 )
}

// S
playSound(sound12, 83)
if (sound12.isPlaying() == true) {
     var r = map(sound12.currentTime(), 0, sound12.duration()*0.95, 0, height )
    noFill()
    stroke(255, 255, 255)
    strokeWeight(5)
    rect(width*0.5, r, height*0.25, height*0.25 )
     rectMode(CENTER)
     

     push();
     let waveform = sound12FFT.waveform();
     stroke(300)
     strokeWeight(2)
     noFill()
     beginShape()
     for (var i = 0; i < waveform.length; i++) {
     var angle = map(i, 0, waveform.length, 0, TWO_PI);
     var rad = map(waveform[i], -1, 1, 0, height*0.5);
     var x = width * 0.8  + rad * cos(angle)
     var y = height * 0.5 + rad * sin(angle)
    curveVertex(x, y);
     }
     endShape(CLOSE);
     beginShape()
     for (var i = 0; i < waveform.length; i++) {
     var angle = map(i, 0, waveform.length, 0, TWO_PI);
     var rad = map(waveform[i], -1, 1, 0, height*0.5);
     var x = width * 0.2  + rad * cos(angle)
     var y = height * 0.5 + rad * sin(angle)
    curveVertex(x, y);
     }
     endShape(CLOSE);
     pop()
}

// D
playSound(sound13, 68)
if (sound13.isPlaying() == true) {
   
    rectMode(CENTER)
    push()
    translate(width*0.5, height*0.5)
    var r = map(sound13.currentTime(), 0, sound13.duration()*6, 0, width)
    var angle = map(sound13.currentTime()*0.2, 0, sound13.duration(), 0, HALF_PI)
    rotate(angle) 
    //Définir les coordonnées de la forme drawTarget
    drawTarget(0, 0, 500, r*0.05);
    pop()
}

// F
    playSound(sound14, 70)
if (sound14.isPlaying() == true) {
    
    
    var r = map(sound14.currentTime(), 0, sound14.duration()*6, 0, width)
    push()
    drawTarget(0, 0, height, r*0.05);
    drawTarget(0, height, height, r*0.05);
    drawTarget(width, height, height, r*0.05);
    drawTarget(width, 0, height, r*0.05);
  pop()
}

// G
playSound(sound15, 71)
if (sound15.isPlaying() == true) {
    fill(255)   
    strokeWeight(2)
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50);
    star(0, 0, 10, 10000, 20);
    pop();
}

// H
playSound(sound16, 72)
if (sound16.isPlaying() == true) {
fill(255, 255, 255)
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  //Définir les coordonnées de la forme star
  star(0, 0, 80, 200, 3);
  pop();
}

// J
playSound(sound17, 74)
if (sound17.isPlaying() == true) {

    push()
    noStroke()
    fill(255, 255, 255)
    translate(width * 0.5, height * 0.5);
    //Vitesse de rotation
    rotate(frameCount / 20.0);
    //Définir les coordonnées de la forme
    polygon(0, 0, 150, 10);
    fill(0, 0, 0)
    noStroke()
    polygon(0, 0, 80, 10);
     pop();

}

// K
playSound(sound18, 75)
if (sound18.isPlaying() == true) {
    //Définir les différentes variables pour chaque cercle
    var r = map(sound18.currentTime(), 0, sound18.duration(), 0, height)
    var r1 = map(sound18.currentTime(), 0, sound18.duration(), 0, height*1.2)
    var r2 = map(sound18.currentTime(), 0, sound18.duration(), 0, height*1.4)
    var r3 = map(sound18.currentTime(), 0, sound18.duration(), 0, height*1.6)
    var r4 = map(sound18.currentTime(), 0, sound18.duration(), 0, height*1.8)
    var r5 = map(sound18.currentTime(), 0, sound18.duration(), 0, height*2)
    
    noFill()
    stroke(255, 255, 255)
    strokeWeight(10 )
 push()
    ellipse(width * 0.5, height * 0.5, r5, r5)
    ellipse(width * 0.5, height * 0.5, r4, r4)
    ellipse(width * 0.5, height * 0.5, r3, r3)
    ellipse(width * 0.5, height * 0.5, r2, r2)
     ellipse(width * 0.5, height * 0.5, r1, r1)
     ellipse(width * 0.5, height * 0.5, r, r)
     ellipse(width * 0.5, height * 0.5, r*0.2, r)
     ellipse(width * 0.5, height * 0.5, r, r*0.2)

     pop()
}

// L

playSound(sound19, 76)
if (sound19.isPlaying() == true) {
    fill(255, 255, 255)
    strokeWeight(3)
    stroke(255, 255, 255)
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 100);
    star(-width*0.5, 0, 10, 1000, 400);
    pop();
}

// M
playSound(sound20, 77)
if (sound20.isPlaying() == true) {
    var r = map(sound20.currentTime(), 0, sound20.duration()*0.5, 0, height*0.5)
    rectMode(CENTER)
  fill(255)
rect(width*0.5, 0, width, r)
}

// W
playSound(sound21, 87)
if (sound21.isPlaying() == true) {
    
    var r = map(sound21.currentTime(), 0, sound21.duration(), 0, height*2.5)
    var r2 = map(sound21.currentTime(), 0, sound21.duration(), 0, width*2.5)
    rectMode(CENTER)
    fill(255, 255, 255)
    noStroke()
    rect(width*0.3, 0, height*0.1, r)
    rect(width*0.4, 0, height*0.1, r)
    rect(width*0.5, 0, height*0.1, r)
    rect(width*0.6, 0, height*0.1, r)
    rect(width*0.7, 0, height*0.1, r)
    
    rect(0, height*0.3, r2, height*0.1)
    rect(0, height*0.5, r2, height*0.1)
    rect(0, height*0.7, r2, height*0.1)
}

// X
playSound(sound22, 88)
if (sound22.isPlaying() == true) {
//Définir la couleur avec une variable : random
var x = random(255, 0)
//Définir les coordonnées avec une variable : random
var y = random(width)
fill(x)
noStroke()

ellipse (y, height*0.5, height*0.25, height*0.25)
ellipse (y, height*0.2, height*0.25, height*0.25)
ellipse (y, height*0.8, height*0.25, height*0.25)

}

// C
playSound(sound23, 67)
if (sound23.isPlaying() == true) {
    
    push()
    var x = random(width)
    var y = random(height)
    
   
    fill(255)
    ellipse (x, y, height*0.1, height*0.1)
    ellipse (x, y, height*0.1, height*0.1)
pop()

}

// V
playSound(sound24, 86)
if (sound24.isPlaying() == true) {
    var r = map(sound24.currentTime(), 0, sound24.duration()*0.4, 0, height )
    fill(255)
    star(0, height*0.5, 80, 200, 7);
    fill(255, 255, 255)
    ellipse(r, height*0.5, 30, 30 )

}

// B
playSound(sound25, 66)
if (sound25.isPlaying() == true) {
    
    push()
    
    let waveform = sound25FFT.waveform();
    noStroke()
    fill(255)
    beginShape()
    for (var i = 0; i < waveform.length; i++) {
    var angle = map(i, 0, waveform.length, 0, TWO_PI);
    var rad = map(waveform[i], -1, 1, 0, height*0.5);
    var x = width * 0.5 + rad * cos(angle)
    var y = height * 0.5 + rad * sin(angle)
   curveVertex(x, y);
    }
    endShape(CLOSE);
 fill(0)
triangle(width*0.45, height*0.35, width*0.45, height*0.65, width*0.6, height*0.5)
pop()
}

// N
playSound(sound26, 78)
if (sound26.isPlaying() == true) {

    let wave = sound26FFT.waveform()
    noFill()
    strokeWeight(10)
    stroke(255, 255, 255)
    push()
    beginShape()
    
    for (let i = 0 ; i < wave.length ; i++){
        let x = map(i, 0, wave.length*0.5, 0, width)
        let y = map(wave[i], -1, 0, height, 0)
        curveVertex(x, y)
  }
  endShape()

  beginShape()
    
    for (let i = 0 ; i < wave.length ; i++){
        let x = map(i, 0, wave.length*0.5, 0, width)
        let y = map(wave[i], 0, 1, height, 0)
        curveVertex(x, y)
  }
  endShape()
pop()


}
}


//Réduction de la function keyisdown pour éviter les répétitions
    
function playSound(sound, keyID) {
    if (keyIsDown(keyID)==  true && sound.isPlaying()== false) 
        sound.play()
        
      
}

//Définir la fênêtre
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(0, 0 ,0) 
}

//Création de la forme drawtarget
function drawTarget(xloc, yloc, size, num) {
    const grayvalues = 255 / num;
    const steps = size / num;
    for (let i = 0; i < num; i++) {
        noStroke()
      fill(i * grayvalues);
      ellipse(xloc, yloc, size - i * steps, size - i * steps);
    }
  }

  // Création de la fonction star
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE); 

}

 //Création de la fonction polygon
function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

