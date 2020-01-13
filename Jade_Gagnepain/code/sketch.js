// son A
let sound01
let sound01FFT

// son Z
let sound02

// son E
let sound03

// son R
let sound04

// son T
let sound05

// son Y
let sound06

// son U
let sound07
let sound07FFT

// son I
let sound08

// son O 
let sound09
let sound09FFT

// son P
let sound10

// son Q
let sound11
let sound11FFT

// son S
let sound12
let sound12Amp

// son D
let sound13
var xos = []
var yos = []
var xtarget = []
var ytarget = []

// son F
let sound14

// son G
let sound15
let sound15FFT

// son H
let sound16
let sound16FFT

// son J
let sound17

// son K
let sound18

//son L 
let sound19

// son M
let sound20

// son W
let sound21
let sound21FFT

// son X
let sound22
let sound22FFT

//son C
let sound23

// son V
let sound24
let sound24FFT

// son B 
let sound25

// son N 
let sound26





var slotSize = 100;
var marginX
var marginY
var nb = 1
var rounded = 0

function preload() {
  soundFormats('mp3', 'ogg');
  sound01 = loadSound('Assets/female voice.wav');
  sound02 = loadSound('Assets/musique1.mp3');
  sound03 = loadSound('Assets/shortbeam.wav');
  sound04 = loadSound('Assets/411643__inspectorj__pop-low-a-h6-ms.wav');
  sound05 = loadSound('Assets/whoosh.wav');
  sound06 = loadSound('Assets/osy.wav');
  sound07 = loadSound('Assets/male voice.wav');
  sound08 = loadSound('Assets/shortbass.wav');
  sound09 = loadSound('Assets/shot-sound.wav');
  sound10 = loadSound('Assets/bass1.wav');
  sound11 = loadSound('Assets/male voice.wav'); //changer son//
  sound12 = loadSound('Assets/beep.wav');
  sound13 = loadSound('Assets/cry.wav');
  sound14 = loadSound('Assets/bubble-big.wav');
  sound15 = loadSound('Assets/male answer.wav');
  sound16 = loadSound('Assets/phone beep.wav');
  sound17 = loadSound('Assets/laser gun.wav');
  sound18 = loadSound('Assets/bass2.wav');
  sound19 = loadSound('Assets/musique-2.mp3');
  sound20 = loadSound('Assets/laugh.wav');
  sound21 = loadSound('Assets/string.mp3');
  sound22 = loadSound('Assets/bubble.wav');
  sound23 = loadSound('Assets/upanddown.wav');
  sound24 = loadSound('Assets/254386__jagadamba__male-voice-oh-no.wav');
  sound25 = loadSound('Assets/riseandfall.wav');
  sound26 = loadSound('Assets/musique-3.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  //setup A
  sound01FFT = new p5.FFT()
  sound01FFT.setInput(sound01)

  // setup Z //
  pixelDensity(1)
  rectMode(CENTER)
  marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
  marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;


  // setup U //
  sound07FFT = new p5.FFT()
  sound07FFT.setInput(sound07)

  // setup O //
  sound09FFT = new p5.FFT()
  sound09FFT.setInput(sound09)

  // setup Q //
  sound11FFT = new p5.FFT()
  sound11FFT.setInput(sound11)

  // setup D //
  for (var i = 0; i < 50; i++) {
    xos.push(random(0, width))
    yos.push(random(0, -height))
    xtarget.push(random(width))
    ytarget.push(random(height))

  }
  // setup G //
  sound15FFT = new p5.FFT();
  sound15FFT.setInput(sound15);

  // setup H //
  sound16FFT = new p5.FFT(0.8, 16);
  sound16FFT.setInput(sound16);

  // setup W //
  sound21FFT = new p5.FFT(0.8, 16);
  sound21FFT.setInput(sound21);

  // setup X //
  sound22FFT = new p5.FFT(0.8, 16);
  sound22FFT.setInput(sound22);

  // setup V //
  sound24FFT = new p5.FFT(0.8, 16);
  sound24FFT.setInput(sound24);




}

function draw() {
  background(1, 49, 180)

  // touche A
  playSound(sound01, 65)
  if (sound01.isPlaying() == true) {
    push()
    let waveform = sound01FFT.waveform();
    noFill()
    stroke(254, 191, 210)
    strokeWeight(5)
    beginShape()
    for (let i = 0; i < waveform.length; i++) {

      let x = map(i, 0, waveform.length, 0, width)
      let y = map(waveform[i], -1, 1, height, 0)

      curveVertex(x, y);
    }
    endShape();
    pop()
  }

  // touche Z
  playSound(sound02, 90)
  if (sound02.isPlaying() == true) {
    for (var x = marginX / 2 + slotSize / 2; x < width - marginX / 2; x += slotSize) {
      for (var y = marginY / 2 + slotSize / 2; y < height - marginY / 2; y += slotSize) {

        push()
        var rotation = map(sound02.currentTime(), 0, sound02.duration(), 0, PI)
        translate(x, y)
        rotate(rotation)
        noFill()

        stroke(255, 255, 0)
        //noStroke()
        //fill(255,50)

        rect(0, 0, slotSize, slotSize, rounded)
        if (nb > 1) rect(0, 0, slotSize / 1.25, slotSize / 1.25, rounded)
        if (nb > 2) rect(0, 0, slotSize / 1.5, slotSize / 1.5, rounded)
        if (nb > 3) rect(0, 0, slotSize / 2, slotSize / 2, rounded)
        if (nb > 4) rect(0, 0, slotSize / 3, slotSize / 3, rounded)
        if (nb > 5) rect(0, 0, slotSize / 4, slotSize / 4, rounded)
        pop()
      }
    }
  }

  // touche E 
  playSound(sound03, 69)
  if (sound03.isPlaying() == true) {
    push()


    var nsegment = 1000
    var ncurrentsegment = (map(sound03.currentTime(), 0, sound03.duration(), 0, nsegment + 1))
    for (var i = 0; i < ncurrentsegment; i++)
      stroke(0, 255, 255);
    strokeWeight(3) // déterminel'épaisseur du contour de la forme
    var angle = map(i, 0, nsegment, 0, TWO_PI);
    var x = width * 0.5 + height * 180 * cos(angle);
    var y = height * 1 + height * 0.45 * sin(angle);
    line(width * 0.5, height * 0.5, x, y); //donnes le point d'émission de l'animation, ici ca part du centre de l'écran


    var nsegment = 1000
    var ncurrentsegment = (map(sound03.currentTime(), 0, sound03.duration(), nsegment + 1, 0))
    for (var i = 0; i < ncurrentsegment; i++)
      stroke(0, 255, 255); // détermine la couleur du contour de la forme selon l'ordre (rouge,vert,bleu)
    strokeWeight(3)
    var angle = map(i, 45, nsegment, 5, TWO_PI);
    var x = width * 0.5 + height * 5 * cos(angle);
    var y = height * 0.5 + height * 8 * sin(angle);
    line(width * 0.5, height * 0.5, x, y);


    var nsegment = 1000
    var ncurrentsegment = (map(sound03.currentTime(), 0, sound03.duration(), 0, nsegment + 1))
    for (var i = 0; i < ncurrentsegment; i++)
      stroke(0, 255, 255);
    strokeWeight(3)
    var angle = map(i, 45, nsegment, 10, TWO_PI);
    var x = width * 0.5 + height * 10 * cos(angle);
    var y = height * 1 + height * 0.8 * sin(angle);
    line(width * 0.5, height * 0.5, x, y);


    var nsegment = 1000
    var ncurrentsegment = (map(sound03.currentTime(), 0, sound03.duration(), nsegment + 1, 0))
    for (var i = 0; i < ncurrentsegment; i++)
      stroke(0, 255, 255);
    strokeWeight(3)
    var angle = map(i, 45, nsegment, 0, TWO_PI);
    var x = width * 0.5 + height * 1 * cos(angle);
    var y = height * 0.5 + height * 20 * sin(angle);
    line(width * 0.5, height * 0.5, x, y);






    pop();
  }

  //touche R
  playSound(sound04, 82)
  if (sound04.isPlaying() == true) {
    push();
    var rad = map(sound04.currentTime(), 0, sound04.duration(), 50, width)
    noFill()
    stroke(254, 191, 210)
    strokeWeight(10)
    ellipse(width * 0.5, height * 0.5, rad, rad)

    pop();
  }

  //touche T
  playSound(sound05, 84)
  if (sound05.isPlaying() == true) {
    var radius = map(sound05.currentTime(), 0, sound05.duration(), 50, width)
    push()

    noFill()
    stroke(255, 255, 0)
    strokeWeight(2.5)
    ellipse(width * 0.5, height * 0.5, radius * 0.2, radius * 0.2)

    stroke(254, 191, 210)
    ellipse(width * 0.5, height * 0.5, radius * 0.4, radius * 0.4)

    stroke(128, 208, 208)
    ellipse(width * 0.5, height * 0.5, radius * 0.6, radius * 0.6)

    stroke(255, 255, 0)
    ellipse(width * 0.5, height * 0.5, radius * 0.8, radius * 0.8)

    stroke(254, 191, 210)
    ellipse(width * 0.5, height * 0.5, radius * 1, radius * 1)

    stroke(128, 208, 208)
    ellipse(width * 0.5, height * 0.5, radius * 1.2, radius * 1.2)


    pop()
  }

  //touche Y
  playSound(sound06, 89)
  if (sound06.isPlaying() == true) {
    var rotation = map(sound06.currentTime(), 0, sound06.duration(), 0, PI)
    push()
    rectMode(CENTER)
    translate(width * 0.5, height * 0.5)
    rotate(rotation)

    fill(255, 180, 180)
    rect(0, 0, width * 0.5, width * 0.05)
    pop()
  }

  // touche U --> changer animation
  playSound(sound07, 85)
  if (sound07.isPlaying() == true) {
    push()
    let waveform = sound07FFT.waveform();
    noFill()
    stroke(121, 248, 248)
    strokeWeight(5)
    beginShape()
    for (let i = 0; i < waveform.length; i++) {

      let x = map(i, 0, waveform.length, 0, width)
      let y = map(waveform[i], -1, 1, height, 0)

      curveVertex(x, y);
    }
    endShape();
    pop()
  }

  // touche I
  playSound(sound08, 73)
  if (sound08.isPlaying() == true) {
    push()
    rectMode(CENTER)
    let angle = map(sound08.currentTime(), 0, sound08.duration(), 0, TWO_PI)
    noFill();
    stroke(255, 203, 96)
    strokeWeight(5)
    translate(width * 0.5, height * 0.5)
    rotate(angle)
    rect(0, 0, height * 0.25, height * 0.25)
    pop()
  }

  // touche O
  playSound(sound09, 79)
  if (sound09.isPlaying() == true) {
    push();


    push();
    var wavef = sound09FFT.waveform();
    noFill();
    beginShape();
    stroke(255, 255, 0);
    strokeWeight(10);
    for (var i = 0; i < wavef.length; i++) {
      var x = map(i, 0, wavef.length, 0, width);
      var y = map(wavef[i], -0.6, 0.6, 0, height);
      curveVertex(x, y);
    }
    endShape();
    pop();


    push();
    var wavef = sound09FFT.waveform();
    noFill();
    beginShape();
    stroke(121, 248, 248);
    strokeWeight(5);
    for (var i = 0; i < wavef.length; i++) {
      var x = map(i, 0, wavef.length, width * 0.20, width * 0.80);
      var y = map(wavef[i], -0.8, 0.8, 0, height);
      curveVertex(x, y);
      
      

      
    }
    endShape();
    pop();
    pop();
  }

  // touche P
  playSound(sound10, 80)
  if (sound10.isPlaying() == true) {
    push();
    var rad = map(sound10.currentTime(), 0, sound10.duration(), 50, width)
    fill(185, 240, 219)
    ellipse(width * 0.5, height * 0.5, rad, rad)

    pop();
  }


  // touche Q
  playSound(sound11, 81)
  if (sound11.isPlaying() == true) {
    push()
    let waveform = sound11FFT.waveform();
    noFill()
    stroke(255, 255, 0)
    strokeWeight(5)
    beginShape()
    for (let i = 0; i < waveform.length; i++) {

      let x = map(i, 0, waveform.length, 0, width)
      let y = map(waveform[i], -1, 1, height, 0)

      curveVertex(x, y);
    }
    endShape();
    pop()
  }


  // touche S 
  playSound(sound12, 83)
  if (sound12.isPlaying() == true) {
    push();
    var radius = map(sound12.currentTime(), 0.99, sound12.duration(), 600, width * 0.01);
    noStroke();
    background(1, 49, 180);
    noFill();
    stroke(254, 248, 108)
    strokeWeight(5)
    ellipse(width * 0.5, height * 0.5, radius * 0.5, radius * 0.5);
    pop();
  }

  // touche D 
  playSound(sound13, 68)
  if (sound13.isPlaying() == true) {
    push()
    var t = map(sound13.currentTime(), 0, sound13.duration() * 1, 0, 1)
    noStroke()
    fill(0, 255, 255)
    for (var i = 0; i < 50; i++) {
      var x = lerp(xos[i], xtarget[i], t)
      var y = lerp(yos[i], ytarget[i], t)
      ellipse(x, y, 10, 10)
    }
    pop()

  }

  // touche F 
  playSound(sound14, 70)
  if (sound14.isPlaying() == true) {
    noStroke()
    fill(254, 248, 108)
    ellipse(width * 0.5, height * 0.5, 50, 50)
  }

  // touche G 
  playSound(sound15, 71)
  if (sound15.isPlaying() == true) {
    push()
    let waveform = sound15FFT.waveform();
    noFill()
    stroke(255, 255, 0)
    strokeWeight(5)
    beginShape()
    for (let i = 0; i < waveform.length; i++) {

      let x = map(i, 0, waveform.length, 0, width)
      let y = map(waveform[i], -1, 1, height, 0)

      curveVertex(x, y);
    }
    endShape();
    pop()
  }

  // touche H
  playSound(sound16, 72)
  if (sound16.isPlaying() == true) {
    push();
    sound16FFT.analyze();
    var nrj1 = sound16FFT.getEnergy("bass")
    background(0, 255, 255, nrj1);
    pop();

  }

  // touche J --> taches apparaissent à la suite
  playSound(sound17, 74)
  if (sound17.isPlaying() == true) {
    push();
    var angle = map(sound17.currentTime(), 0, sound17.duration(), 10, PI * 50);
    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.2, height * 0.3)
    stroke(253, 108, 158);
    strokeWeight(3);
    noFill(253, 108, 158);
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.5, height * 0.6)
    stroke(253, 108, 158);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.8, height * 0.9)
    stroke(253, 108, 158);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();


  }

  // touche K --> bop
  playSound(sound18, 75)
  if (sound18.isPlaying() == true) {
    fill(253, 108, 158)
    ellipse(width * 0.5, height * 0.5, 50, 50)
  }

  // touche L
  playSound(sound19, 76)
  if (sound19.isPlaying() == true) {
    for (var x = marginX / 2 + slotSize / 2; x < width - marginX / 2; x += slotSize) {
      for (var y = marginY / 2 + slotSize / 2; y < height - marginY / 2; y += slotSize) {

        push()
        var rotation = map(sound19.currentTime(), 0, sound19.duration(), 0, PI)
        translate(x, y)
        rotate(rotation)
        noFill()

        stroke(255, 255, 0)
        //noStroke()
        //fill(255,50)

        rect(0, 0, slotSize, slotSize, rounded)
        if (nb > 1) rect(0, 0, slotSize / 1.25, slotSize / 1.25, rounded)
        if (nb > 2) rect(0, 0, slotSize / 2, slotSize / 2, rounded)
        if (nb > 3) rect(0, 0, slotSize / 4, slotSize / 4, rounded)
        pop()
      }
    }

  }

  // touche M --> laughs
  playSound(sound20, 77)
  if (sound20.isPlaying() == true) {
    push()


    var nsegment = 1000
    var ncurrentsegment = (map(sound20.currentTime(), 0, sound20.duration(), 0, nsegment + 1))
    for (var i = 0; i < ncurrentsegment; i++)
      stroke(253, 108, 158);
    strokeWeight(3) // déterminel'épaisseur du contour de la forme
    var angle = map(i, 0, nsegment, 0, TWO_PI);
    var x = width * 0.5 + height * 180 * cos(angle);
    var y = height * 1 + height * 0.45 * sin(angle);
    line(width * 0.5, height * 0.5, x, y); //donnes le point d'émission de l'animation, ici ca part du centre de l'écran


    var nsegment = 1000
    var ncurrentsegment = (map(sound20.currentTime(), 0, sound20.duration(), nsegment + 1, 0))
    for (var i = 0; i < ncurrentsegment; i++)
      stroke(253, 108, 158); // détermine la couleur du contour de la forme selon l'ordre (rouge,vert,bleu)
    strokeWeight(3)
    var angle = map(i, 45, nsegment, 5, TWO_PI);
    var x = width * 0.5 + height * 5 * cos(angle);
    var y = height * 0.5 + height * 8 * sin(angle);
    line(width * 0.5, height * 0.5, x, y);


    var nsegment = 1000
    var ncurrentsegment = (map(sound20.currentTime(), 0, sound20.duration(), 0, nsegment + 1))
    for (var i = 0; i < ncurrentsegment; i++)
      stroke(253, 108, 158);
    strokeWeight(3)
    var angle = map(i, 45, nsegment, 10, TWO_PI);
    var x = width * 0.5 + height * 10 * cos(angle);
    var y = height * 1 + height * 0.8 * sin(angle);
    line(width * 0.5, height * 0.5, x, y);


    var nsegment = 1000
    var ncurrentsegment = (map(sound20.currentTime(), 0, sound20.duration(), nsegment + 1, 0))
    for (var i = 0; i < ncurrentsegment; i++)
      stroke(253, 108, 158);
    strokeWeight(3)
    var angle = map(i, 45, nsegment, 0, TWO_PI);
    var x = width * 0.5 + height * 1 * cos(angle);
    var y = height * 0.5 + height * 20 * sin(angle);
    line(width * 0.5, height * 0.5, x, y);
    
    pop();
  }

  // touche W 
  playSound(sound21, 87)
  if (sound21.isPlaying() == true) {
    push()
    let waveform = sound21FFT.waveform();
    noFill()
    stroke(254, 191, 210)
    strokeWeight(5)
    beginShape()
    for (let i = 0; i < waveform.length; i++) {

      let x = map(i, 0, waveform.length, 0, width)
      let y = map(waveform[i], -1, 1, height, 0)

      curveVertex(x, y);
    }
    endShape();
    pop()
  }

  // touche X --> bubble
  playSound(sound22, 88)
  if (sound22.isPlaying() == true) {
    push()
    sound22FFT.analyze();
    rectMode(CENTER)
    var nrj3 = sound22FFT.getEnergy("bass")
    push()
    fill(253, 108, 158)
    noStroke ()
    translate(width * 0.5, height * 0.5)
    rotate(PI / 6)
    ellipse(0, 0, nrj3, nrj3)
    pop()
  }

  // touche C --> rebondissemnt 
  playSound(sound23, 67)
  if (sound23.isPlaying() == true) {
    push();
    var rad = map(sound23.currentTime(), 0, sound23.duration(), 10, width)
    noFill()
    stroke(255, 255, 0)
    strokeWeight(3)
    ellipse(width * 1, height * 0.5, rad, rad)
    pop();

    push();
    var rad = map(sound23.currentTime(), 0, sound23.duration(), 10, width)
    noFill()
    stroke(255, 255, 0)
    strokeWeight(3)
    ellipse(width * 0, height * 0.5, rad, rad)
    pop();
  }

  // touche V --> oh  no
  playSound(sound24, 86)
  if (sound24.isPlaying() == true) {
    push()
        sound24FFT.analyze();
        rectMode(CENTER)
        var nrj3 = sound24FFT.getEnergy("bass")
        push()
        noFill()
        stroke (0, 255, 255)
        strokeWeight(10)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 6)
        rect(0, 0, nrj3, nrj3)
        pop()
  }

  // touche B --> grand / petit en suivant le son 
  playSound(sound25, 66)
  if (sound25.isPlaying() == true) {
    push();
    var rad = map(sound25.currentTime(), 0, sound25.duration(), 50, width)
    rectMode(CENTER)
    noFill()
    stroke(253, 108, 158)
    strokeWeight(2);
    rect(width * 0.5, height * 0.5, rad, rad)

    pop();


  }

  // touche N 
  playSound(sound26, 78)
  if (sound26.isPlaying() == true) {

    var angle = map(sound26.currentTime(), 0, sound26.duration(), 10, PI * 50);


    push(); // rangé 1
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.1, height * 0.2)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill(253, 108, 158);
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.1, height * 0.4)
    stroke(254, 191, 210);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.1, height * 0.6)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill(253, 108, 158);
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.1, height * 0.8)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill(253, 108, 158);
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.1, height * 1)
    stroke(255, 255, 0);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();



    push(); // rangé 2
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.3, height * 0.2)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.3, height * 0.4)
    stroke(255, 255, 0);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.3, height * 0.6)
    stroke(254, 191, 210);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.3, height * 0.8)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.3, height * 1)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();


    push(); // rangé 3
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.5, height * 0.2)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.5, height * 0.4)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.5, height * 0.6)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.5, height * 0.8)
    stroke(255, 255, 0);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.5, height * 1)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push(); // rangé 4
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.7, height * 0.2)
    stroke(255, 255, 0);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.7, height * 0.4)
    stroke(254, 191, 210);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.7, height * 0.6)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.7, height * 0.8)
    stroke(254, 191, 210);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.7, height * 1)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push(); // rangé 5
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.9, height * 0.2)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.9, height * 0.4)
    stroke(255, 255, 0);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.9, height * 0.6)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.9, height * 0.8)
    stroke(0, 255, 255);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

    push();
    ellipseMode(CENTER);
    rotate(rotation);
    translate(width * 0.9, height * 1)
    stroke(254, 191, 210);
    strokeWeight(3);
    noFill();
    ellipse(0, -60, angle, angle);
    pop();

  }




}




function playSound(sound, keyID) {
  if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
    sound.play();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}