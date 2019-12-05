let sound01;
let sound02;
let sound03;
let sound04;
let sound05;
let sound06;
let sound07;
let sound08;
let sound08FFT;
let sound09;
let sound10;
let sound11;
let sound12;
let sound12FFT;
let sound13;
let sound13FFT;
let sound14;
let sound15;
let sound16;
let sound17;
let sound18;
let sound19;
let sound20;
let sound21;
let sound22;
let sound23;
let sound24;
let sound25;
let sound26;
let sound27;



let xpos = []
let ypos = []
let xtarget = []
let ytarget = []

let xpos1 = []
let ypos1 = []
let xtarget1 = []
let ytarget1 = []
let t5 = 0;
let t6 = 0;
let angle8;

let calque
let angle1 = 0;
let angle2 = 0;

let xpos3 = []
let ypos3 = []
let xpos4 = []
let ypos4 = []

let numDots = 200;
let radius = 300;
let cx, cy;
let dotx = [];
let doty = [];




let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx;
let yvalues;
let n;
let circle = 200;
let rot;
let col;
let freq = 0.000005;
let cont = 0;
let r;





let analyzer;

function playSound(sound, keyId) {
  if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
    sound.play()
  }
}


function preload() {

  sound01 = loadSound("../assets/son_06.wav");
  sound02 = loadSound("../assets/son_02.wav");
  
  
  sound05 = loadSound("../assets/son_13.wav");
  sound06 = loadSound("../assets/son_03.wav");
  
  sound08 = loadSound("../assets/son_05.wav");
  sound09 = loadSound("../assets/electro03.mp3");
  sound10 = loadSound("../assets/son_20.wav");
  sound11 = loadSound("../assets/son_07.wav");
  sound12 = loadSound("../assets/son_08.wav");
  sound13 = loadSound("../assets/son_23.wav");
  sound14 = loadSound("../assets/son_09.wav");
  sound15 = loadSound("../assets/son_10.wav");
  sound16 = loadSound("../assets/son_01.wav");
  sound17 = loadSound("../assets/son_14.wav");
  sound18 = loadSound("../assets/tech.wav");
  sound19 = loadSound("../assets/son_24.wav");
  sound20 = loadSound("../assets/son_12.wav");
  
  sound22 = loadSound("../assets/son_15.wav");
  sound23 = loadSound("../assets/son_16.wav");
  sound24 = loadSound("../assets/son_17.wav");
  sound25 = loadSound("../assets/son_18.wav");
  sound26 = loadSound("../assets/son_19.wav");

  sound28 = loadSound("../assets/son_21.wav");
  sound29 = loadSound("../assets/son_04.wav");
  sound30 = loadSound("../assets/electro02.mp3");
  sound31 = loadSound("../assets/son_19.wav");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(22, 31, 48);
  pixelDensity(1);

  cx = cy = 0;

  sound08FFT = new p5.FFT(0.8, 1024)
  sound08FFT.setInput(sound08)

  sound12FFT = new p5.FFT(0.8, 2048)
  sound12FFT.setInput(sound12)

  sound13FFT = new p5.FFT(0.8, 2048);
  sound13FFT.setInput(sound13);



  analyzer = new p5.Amplitude(0, 20);
  analyzer.setInput(sound01);
  analyzer.toggleNormalize();

  analyzer = new p5.Amplitude(0, 20);
  analyzer.setInput(sound02);
  analyzer.toggleNormalize();


  for (let i = 0; i < 1000; i++) {
    // ajouter des éléments au dessus de notre canvas
    xpos.push(random(0, width))
    ypos.push(random(0, -height))
    // ajouter des éléments à l'intérieur de notra canvas
    xtarget.push(random(width))
    ytarget.push(random(height))
  }
  for (let i = 0; i < 1000; i++) {
    // ajouter des éléments au dessus de notre canvas
    xpos1.push(random(10, width))
    ypos1.push(random(0, height))
    // ajouter des éléments à l'intérieur de notra canvas
    xtarget1.push(random(width))
    ytarget1.push(random(height))
  }

  sound21Amp = new p5.Amplitude()
  sound21Amp.setInput(sound21)
  sound21Amp.toggleNormalize()

  //COULEURS 
  // -  bleu (106, 210, 255)
  // -  vert(125, 255, 192)
  // -  vert (0, 193, 175)


  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));

  calque = createGraphics(windowWidth, windowHeight)
  calque.pixelDensity(1)

}





function draw() {
  background(22, 31, 48);


  //toucheQ
  playSound(sound01, 81)
  if (sound01.isPlaying() == true) {
    push()
    
    let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width);
    noStroke();
    fill(106, 210, 255);
    ellipse(width * 0.5, height * 0.5, r, r);
  }
  playSound(sound01, 81)
  if (sound01.isPlaying() == true) {
    push()
    let r = map(sound01.currentTime(), 0, sound01.duration(), -500, width);
    noStroke();
    fill(0, 193, 175, 100);
    ellipse(width * 0.5, height * 0.5, r, r);

    pop()
  }


  //toucheA
  playSound(sound02, 65)
  if (sound02.isPlaying() == true) {
    push()
    let r = map(sound02.duration(), -1, sound02.currentTime(), 4, height);
    stroke(0, 193, 175);

    strokeWeight(15);
    noFill();
    ellipse(width * 0.7, height * 0.7, r, r);

    pop()
  }


  //toucheZ
  playSound(sound30, 90)
  if (sound30.isPlaying() == true) {
    push()
    let r = map(sound30.currentTime(), 0, sound30.duration(), 0, height);
    stroke(125, 255, 192);
    rectMode(CORNER)
    strokeWeight(5);
    fill(125, 255, 192, 12);
    rect(width * 0.5, height * 0.5, r, r);


    stroke(125, 255, 192);
    rectMode(CORNER)
    strokeWeight(5);
    fill(125, 255, 192, 12);
    rect(width * 0.45, height * 0.5, r, r);


    stroke(125, 255, 192);
    rectMode(CORNER)
    strokeWeight(5);
    fill(125, 255, 192, 12);
    rect(width * 0.475, height * 0.5, r, r);


    stroke(125, 255, 192);
    rectMode(CORNER)
    strokeWeight(5);
    fill(125, 255, 192, 12);
    rect(width * 0.475, height * 0.475, r, r);


    stroke(125, 255, 192);
    rectMode(CORNER)
    strokeWeight(5);
    fill(125, 255, 192, 12);
    rect(width * 0.45, height * 0.52, r, r);


    pop()
  }



  //toucheX
  playSound(sound31, 88)
  if (sound31.isPlaying() == true) {
    push()
    let r = map(sound31.currentTime(), 0, sound31.duration(), 0, height);
    rectMode(CORNER)
    noStroke()
    fill(106, 210, 255, 40)
    rect(0.475 * width, 0.5 * height, -r, -r);

    rectMode(CORNER)
    noStroke()
    fill(106, 210, 255, 40)
    rect(0.475 * width, 0.55 * height, -r, -r);


    rectMode(CORNER)
    noStroke()
    fill(106, 210, 255, 40)
    rect(0.45 * width, 0.575 * height, -r, -r);


    rectMode(CORNER)
    noStroke()
    fill(106, 210, 255, 40)
    rect(0.425 * width, 0.55 * height, -r, -r);


    rectMode(CORNER)
    noStroke()
    fill(106, 210, 255, 40)
    rect(0.475 * width, 0.525 * height, -r, -r);

    pop()
  }



  //toucheW
  playSound(sound05, 87)
  if (sound05.isPlaying() == true) {
    push()
    let r = map(sound05.duration(), 0, sound05.currentTime(), 4, height);
    noStroke();
    fill(125, 255, 192);
    ellipse(height * 0.5, r, width * 0.5, r);
    pop()
  }





  //toucheE 
  playSound(sound10, 69);
  if (sound10.isPlaying() == true) {
    push()

    let r = map(sound10.currentTime(), 0, sound10.duration() * 0.70, 0, height * 0.5);
    r = constrain(r, 0, height * 0.5);
    let c = map(sound10.currentTime(), sound10.duration() * 0.70, sound10.duration(),
      3, height * 0.5);

    c = constrain(c, 3, height * 0.5);

    rectMode(CENTER);
    noStroke();
    fill(0, 193, 175);
    rect(width * 0.5, height * 0.5, r, r, c, c, c, c);
    pop()
  }



  //ToucheR
  playSound(sound09, 82);
  if (sound09.isPlaying() == true) {
    push()
    let rotation = map(sound09.currentTime(), 0, sound09.duration(), 0, PI)

    rectMode(CENTER)
    translate(width * 0.5, height * 0.5)
    rotate(rotation)

    noStroke()
    fill(106, 210, 255)
    rect(0, 0, width * 0.5, width * 0.05)
    pop()
  }


  //ToucheD
  playSound(sound08, 68)
  if (sound08.isPlaying() == true) {
    push()
    let waveform = sound08FFT.waveform();
    // console.log(waveform)
    noFill();
    beginShape();
    stroke(106, 210, 255);
    strokeWeight(10);
    for (let i = 0; i < waveform.length; i++) {
      let x = map(i, 0, waveform.length, 0, width);
      let y = map(waveform[i], -1, 1, 0, height);
      curveVertex(x, y);
    }
    endShape();
    pop()
  }


  //ToucheS
  playSound(sound11, 83)
  if (sound11.isPlaying() == true) {
    push()
    let angle = map(sound11.currentTime(), 0, sound11.duration(), 0, TWO_PI)
    rectMode(CENTER)
    translate(width * 0.5, height * 0.5)
    rotate(angle)
    stroke(106, 210, 255)
    strokeWeight(13)
    noFill()
    rect(0, 0, height * 1.5, height * 1.5);

  }

  playSound(sound11, 83)
  if (sound11.isPlaying() == true) {

    let angle = map(sound11.currentTime(), 0, sound11.duration(), 0, TWO_PI)
    rectMode(CENTER)
    translate(width * 0.5, height * 0.5)
    rotate(angle)
    noStroke()
    fill(0, 193, 175)
    rect(5, 0, height * 1.4, height * 1.4);

    pop()
  }


  //ToucheF
  playSound(sound12, 70)
  if (sound12.isPlaying() == true) {
    push();
    fill(125, 255, 192);
    noStroke();

    let waveform = sound12FFT.waveform();
    beginShape()
    for (let i = 10; i < waveform.length; i++) {
      let angle = map(i, 0, waveform.length, 0, TWO_PI);
      let rad = map(waveform[i], -1, 1, 0, height * 0.5);

      let x = width * 0.5 + rad * cos(angle)
      let y = height * 0.5 + rad * sin(angle)

      curveVertex(x, y);
    }
    endShape(CLOSE);
    pop()
  }


  //ToucheC
  playSound(sound13, 67)
  if (sound13.isPlaying() == true) {
    push();
    fill(0, 193, 175, 230);
    noStroke();


    let waveform = sound13FFT.waveform();
    beginShape()
    for (let i = 0; i < waveform.length; i++) {
      let angle = map(i, 60, waveform.length, 60, TWO_PI);
      let rad = map(waveform[i], -1, 1, 0, height * 0.5);

      let x = width * 0.1 + rad * cos(angle)
      let y = height * 0.1 + rad * sin(angle)

      curveVertex(x, y);
    }
    endShape(CLOSE);

    beginShape()
    for (let i = 10; i < waveform.length; i++) {
      let angle = map(i, 0, waveform.length, 60, TWO_PI);
      let rad = map(waveform[i], -1, 1, 0, height * 0.5);

      let x = width * 0.9 + rad * cos(angle)
      let y = height * 0.9 + rad * sin(angle)

      curveVertex(x, y);
    }
    endShape(CLOSE);
    pop()
  }





  //toucheu
  playSound(sound16, 85)
  if (sound16.isPlaying() == true) {
    push()
    let nsegment = 120
    let ncurrentsegment = map(sound16.currentTime(), 0, sound16.duration(), 0, nsegment + 1)

    for (let i = 0; i < ncurrentsegment; i++) {
      stroke(0, 193, 175);
      strokeWeight(19)
      noFill()
      let angle = map(i, 0, nsegment, 0, TWO_PI);
      let x = width * .5 + height * .5 * cos(angle);
      let y = height * 0.5 + height * 0.5 * sin(angle);
      ellipse(width * 0.5, height * 0.5, x, y, );

    }
    pop()

  }

  //ToucheJ
  playSound(sound06, 74);
  if (sound06.isPlaying() == true) {
    push()

    let rotation = map(sound06.currentTime(), 0, sound06.duration(), 0, PI)

    rectMode(CENTER)
    translate(width * 0.5, height * 0.5)
    rotate(rotation)

    stroke(106, 210, 255);
    strokeWeight(40);
    noFill();

    rect(0, 0, width * 0.2, width * 0.50)
    pop()
  }









  //toucheB
  playSound(sound15, 66)
  if (sound15.isPlaying() == true) {
    //console.log(frameRate())
    push()

    let nsegment = 100;
    let ncurrentsegment = map(sound15.currentTime(), 0, sound15.duration(), 0, nsegment + 1)

    for (let i = 0; i < ncurrentsegment; i++) {
      stroke(0, 193, 175);
      strokeWeight(12)
      noFill();
      background(22, 31, 48, 13);
      let angle = map(0, i, nsegment, 0, TWO_PI);
      let x = width * 0.5 + height * 0.5 * cos(angle);
      let y = height * 0.5 + height * 0.5 * sin(angle);
      line(width * 0.5, height * 0.5, x, y, );

    }
    pop()
  }


  //toucheV 
  playSound(sound14, 86)
  if (sound14.isPlaying() == true) {
    push()
    let nsegment = 290
    let ncurrentsegment = map(sound14.currentTime(), 0, sound14.duration(), 0, nsegment + 500)

    for (let i = 30; i < ncurrentsegment; i++) {
      stroke(125, 255, 192, 50);
      strokeWeight(5)
      let angle = map(i, 0, nsegment, 30, TWO_PI * 0.5);
      let x = width * .5 + height * .5 * cos(angle * 0.5);
      let y = height * 0.5 + height * 0.5 * sin(angle);
      line(width * 0.5, height * 0.5, x, y);

    }
    pop()

  }



  //ToucheT
  playSound(sound17, 84)
  if (sound17.isPlaying() == true) {

    push()
    let t = map(sound17.currentTime(), 0, sound17.duration() * 0.5, 0, 1)
    let grey = map(sound17.currentTime(), sound17.duration() * 0.95, sound17.duration(), 30, 500)
    t = constrain(t, 0, 5)
    grey = constrain(300, grey, 0)

    fill(125, 255, 192)
    noStroke()

    for (let i = 0; i < 500; i++) {
      let x = lerp(xpos[i], xtarget[i], t)
      let y = lerp(ypos[i], ytarget[i], t)
      ellipse(x, y, 25, 25)

    }
    pop()

  }



  //ToucheN
  playSound(sound28, 78)
  if (sound28.isPlaying() == true) {
    push()
    let nsegment = 290
    let ncurrentsegment = map(sound28.currentTime(), 0, sound28.duration(), 0, nsegment + 500)

    for (let i = 30; i < ncurrentsegment; i++) {
      stroke(106, 210, 255);
      strokeWeight(1)
      let angle = map(i, 0, nsegment, 30, TWO_PI * 0.5);
      let x = width * .5 + height * .5 * cos(angle);
      let y = height * 0.5 + height * 0.5 * sin(angle);
      line(width * 0.5, height * 0.5, x, y);

    }
    pop()
  }


  // ToucheG
  playSound(sound18, 71)
  if (sound18.isPlaying() == true) {
    background(0, 193, 175, 70)
    push()
    let t = map(sound18.currentTime(), 0, sound18.duration() * 0.5, 0, 1)
    let grey = map(sound18.currentTime(), sound18.duration() * 0.75, sound18.duration(), 0, 500)
    t = constrain(t, 0, 5)
    grey = constrain(300, grey, 0)
    fill(22, 31, 48, )
    noStroke()
    for (let i = 0; i < 1000; i++) {
      let x = lerp(xpos1[i], xtarget1[i], t)
      let y = lerp(ypos1[i], ytarget1[i], t)
      ellipse(x, y, 15, 15)
    }
    pop()
  }


  //toucheY
  playSound(sound19, 89)
  if (sound19.isPlaying() == true) {
    push()
    fill(0, 193, 175);
    noStroke();

    for (let x = 0; x <= width; x = x + 50) {
      for (let y = 0; y <= height; y = y + 70) {

        let xAngle = map(width / 9, 0, width, -4 * PI, 4 * PI, true);
        let yAngle = map(height, 0, height, -4 * PI, 4 * PI, true);

        let angle = xAngle * (x / width) + yAngle * (y / height);

        let myX = x + 20 * cos(2 * PI * t5 + angle);
        let myY = y + 20 * sin(2 * PI * t5 + angle);
        ellipse(myX, myY, 20);
      }
    }
    t5 = t5 + 0.01;
    pop()
  }


  //toucheh
  playSound(sound20, 72);
  if (sound20.isPlaying() == true) {
    push()
    fill(106, 210, 255);
    noStroke();
    for (let x = 0; x <= width; x = x + 50) {
      for (let y = 0; y <= height; y = y + 50) {

        let xAngle = map(width / 5, 0, width, -4 * PI, 4 * PI, true);
        let yAngle = map(height, 0, height, -4 * PI, 4 * PI, true);

        let angle = xAngle * (x / width) + yAngle * (y / height);

        let myX = x + 50 * cos(2 * PI * t6 + angle);
        let myY = y + 50 * sin(2 * PI * t6 + angle);
        rect(myX, myY, 20, 10);
      }
    }
    t6 = t6 + 0.01;
    pop()
  }


  //ToucheM
  playSound(sound22, 77)
  if (sound22.isPlaying() == true) {
    background(106, 210, 255, 120);

  }


  //toucheL
  playSound(sound29, 76)
  if (sound29.isPlaying() == true) {
    push()
    translate(730, 400);

    rotate(radians(rot));

    ellipseMode(RADIUS);
    for (var i = 0; i < 390; i++) {
      circle = 20 + 780 * sin(millis() * freq * i);
      r = map(circle, 5, 5, 2, 2);
      noFill()
      stroke(106, 210, 255, 150);
      strokeWeight(22)
      point(circle * -cos(i), circle * sin(i));
      rot = rot + 0.00001;

    }

    pop()

  }




  //ToucheI
  playSound(sound23, 73)
  if (sound23.isPlaying() == true) {
    background(125, 255, 192, 120);


  }


  //ToucheK
  playSound(sound24, 75)
  if (sound24.isPlaying() == true) {
    background(0, 193, 175, 120);


  }


  //ToucheO
  playSound(sound25, 79)
  if (sound25.isPlaying() == true) {
    push()


    calcWave();
    calcWave01();
    renderWave();
    renderWave1();


    pop()
  }




  //ToucheP  
  playSound(sound26, 80)
  if (sound26.isPlaying() == true) {
    push()
    calque.stroke(106, 210, 255, 75);
    randomChord15();
    image(calque, 0, 0, width, height)

    pop()
  }
  else{
    calque.clear();
  }

  //spacebar 









}






function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = -10; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}





function calcWave01() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = -10; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}




function renderWave() {
  stroke(106, 210, 255);

  noFill();
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 1.5 + yvalues[x], 10, 80);
  }
}




function renderWave1() {
  stroke(125, 255, 192);
  strokeWeight(9)
  noFill();
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    point(x * xspacing, height / 3.5 + yvalues[x], 10, 80);
  }
}




function randomChord15() {
  let angle1 = (0, 5 * PI);
  let xpos3 = width * 0.6 + height * 0.4 * cos(angle1);
  let ypos3 = height * 0.6 + height * 0.4 * sin(angle1);

  // find another random point on the circle
  let angle2 = random(0, 2 * PI);
  let xpos4 = width * 0.5 + height * 0.4 * cos(angle2);
  let ypos4 = height * 0.5 + height * 0.4 * sin(angle2);

  // draw a line between them
  calque.line(xpos3, ypos3, xpos4, ypos4);
}




function getCircleDots(numDots, radius, cx, cy) {

  angleFactor = 2 * Math.PI / numDots;
  for (i = 0; i < numDots + 2; i++) {
    angle = i * angleFactor;
    x = cx + radius * cos(angle);
    y = cy + radius * sin(angle);
    dotx[i] = x;
    doty[i] = y;
    ellipse(x, y, 2);

  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(22, 31, 48)
  //calque.clear()

}