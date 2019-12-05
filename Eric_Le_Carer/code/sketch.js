let Mur
let Shoes
let plug
let roulette
let green
let ampo
let bell
let monitor
let kick
let iron
let multiprise
let papier
let radia
let scratch
let rideau

var metal
let a22 = 0.0;
let s22 = 0.0;


function preload() {

  Mur = loadSound('assets/mur.wav');
  Shoes = loadSound('assets/chaussure.wav');
  plug = loadSound('assets/prise.wav');
  roulette = loadSound('assets/Rideau_roulette.wav');
  green = loadSound('assets/Font_vert.wav');
  carte = loadSound('assets/Carte son.wav');
  clavier = loadSound('assets/Clavier.wav');
  lingette = loadSound('assets/Lingette.wav');
  metal = loadSound('assets/Bout de metal.wav');
  chaise = loadSound('assets/Chaise.wav');
  enceinte = loadSound('assets/Enceinte int.wav');
  mannette = loadSound('assets/Mannette.wav');
  ballais = loadSound('assets/Ballais.wav');
  kicks = loadSound('assets/Kicks.wav');
  micro = loadSound('assets/Micro.wav');
  onde = loadSound('assets/Ondulation.wav');
  ampo = loadSound('assets/Ampoule.wav');
  bell = loadSound('assets/Cloche.wav');
  monitor = loadSound('assets/Enceinte.wav');
  kick = loadSound('assets/Kick.wav');
  iron = loadSound('assets/Metal.wav');
  multiprise = loadSound('assets/Multiprise.wav');
  papier = loadSound('assets/Papier.wav');
  radia = loadSound('assets/Radiateur.wav');
  scratch = loadSound('assets/Scratch.wav');
  rideau = loadSound('assets/Rideau.wav');


}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(192, 255, 197);

  scratchFFT = new p5.FFT(0.8, 1024)
  scratchFFT.setInput(scratch)

  multipriseFFT = new p5.FFT(0.8, 1024)
  multipriseFFT.setInput(multiprise)

  kicksFFT = new p5.FFT(0.8, 1024)
  kicksFFT.setInput(kicks)

  enceinteFFT = new p5.FFT(0.8, 1024)
  enceinteFFT.setInput(enceinte)

  ondeFFT = new p5.FFT(0.8, 1024)
  ondeFFT.setInput(onde)

  ballaisFFT = new p5.FFT(0.8, 1024)
  ballaisFFT.setInput(ballais)

  greenFFT = new p5.FFT(0.8, 1024)
  greenFFT.setInput(green)

  radiaAmp = new p5.Amplitude();
  radiaAmp.setInput(radia);

  ShoesAmp = new p5.Amplitude();
  ShoesAmp.setInput(Shoes);

  monitorAmp = new p5.Amplitude();
  monitorAmp.setInput(monitor);


}




function draw() {
  background(192, 255, 197)

  //touche A
  playsound(scratch, 65)
  if (scratch.isPlaying() == true) {
    push();
    scratchFFT.analyze();
    rectMode(CENTER);
    var nrj1 = scratchFFT.getEnergy("bass")
    push();
    stroke(0, 230, 255, 90);
    strokeWeight(30);
    noFill();
    translate(width * 0.5, height * 0.5)
    ellipse(0, 0, 6 * nrj1)

    pop();

  }

  //touche Z 
  playsound(rideau, 90);
  if (rideau.isPlaying() == true) {
    push()
    rectMode(CENTER)
    let angle = map(rideau.currentTime(), 0, rideau.duration(), 0, TWO_PI)
    fill(0, 200, 200, 90)
    noStroke()
    translate(width * 0.5, height * 0.5)
    rotate(angle)
    rect(0, 0, 300 * 0.65, 300 * 0.65)
    pop()

  }



  //touche E
  playsound(radia, 69)
  if (radia.isPlaying() == true) {
    push();
    var lvl = radiaAmp.getLevel();
    var whiteLvl = map(lvl, 0, 0.75, 0, 255);
    noStroke();
    fill(0, 255, 0, 90);
    rectMode(CENTER)
    rect(0, 0, 4000 , 4000);
    pop();
  }



  //touche R
  playsound(papier, 82);
  if (papier.isPlaying() == true) {
    let r = map(papier.currentTime(), 0, papier.duration(), 0, width)
    fill(0, 255, 20, 30)
    noStroke()
    ellipse(width * 0.5, height * 0.5, r, r)
  }

  //touche T
  playsound(multiprise, 84);
  if (multiprise.isPlaying() == true) {
    let wav = multipriseFFT.waveform();

    push()
    beginShape()
    noStroke()
    fill(16, 93, 22)
    for (let i = 0; i < wav.length; i++) {
      let angle = map(i, 0, wav.length, 0, TWO_PI)
      let rad = map(wav[i], -1, 1, 0, height)
      let x = width * 0.5 + rad * cos(angle)
      let y = height * 0.5 + rad * sin(angle)
      ellipse(x, y, 5, 5)
      //curveVertex(x, y)

    }
    endShape(CLOSE)

    pop()
  }


  //touche Y
  playsound(iron, 89);
  if (iron.isPlaying() == true) {
    push();
    noStroke();
    fill(255, 0, 0, 50);
    rectMode(CENTER);
    translate(width * 0.25, 0)
    if (iron.currentTime() > 0) {
      push
      rect(height * 0.5, height * 0.2, 80, 80);
    }
    if (iron.currentTime() > 0.3) {
      rect(height * 0.5, height * 0.5, 80, 80);
    }
    if (iron.currentTime() > 0.6) {
      rect(height * 0.5, height * 0.8, 80, 80);
    }


    pop();
  }

  //touche U coeurs
  playsound(kick, 85)
  if (kick.isPlaying() == true) {
    for (x = 0; x < width; x += s) {
      for (y = 0; y < height; y += s) {
        noStroke();
        fill(144 * x / width, 203, 16, 80); //dégradé de couleur
        heart(x, y, s / 2);
      }
    }
  }
  s = 200

  function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape();
  }



  //touche I
  playsound(monitor, 73);
  if (monitor.isPlaying() == true) {
    push();
    var lvl = monitorAmp.getLevel();
    var whiteLvl = map(lvl, 0, 0.75, 0, 255);
    noStroke();
    fill(170, 255, 90, 100);
    rectMode(CENTER)
    rect(0, 0, 4000 , 4000);
    pop();
  }


  //touche O
  playsound(bell, 79);
  if (bell.isPlaying() == true) {
    let r = map(bell.currentTime(), 0, bell.duration(), 0, width)
    beginShape()
    noFill()
    stroke(250, 255, 95);
    strokeWeight(10)
    ellipse(width * 0.08, height * 0.5, r, r)
    endShape()
  }

  //touche P
  playsound(ampo, 80);
  if (ampo.isPlaying() == true) {
    let r = map(ampo.currentTime(), 0, ampo.duration(), 0, width)
    beginShape()
    noFill()
    stroke(255, 147, 0)
    strokeWeight(20)
    ellipse(width * 0.8, height * 0.5, r, r)
    endShape()
  }



  //touche Q
  playsound(onde, 81);
  if (onde.isPlaying() == true) {
    let wave = ondeFFT.waveform();
    noFill()
    beginShape()
    stroke(0, 255, 0)
    strokeWeight(30)

    for (let i = 0; i < wave.length; i++) {
      let x = map(i, 0, wave.length, 0, width);
      let y = map(wave[i], -1, 1, 0, height);
      curveVertex(x, y)
    }
    endShape()
  }


  //touche S
  playsound(micro, 83);
  if (micro.isPlaying() == true) {
    push()
    var nsegment = 270
    var ncurrentsegment = map(micro.currentTime(), 0, micro.duration(), 0, nsegment + 1)

    for (var i = 0; i < ncurrentsegment; i++) {
      stroke(0, 200, 12);
      strokeWeight(1)
      var angle = map(i, 0, nsegment, 0, TWO_PI);
      var x = width * .2 + height * .2 * cos(angle);
      var y = height * 0.2 + height * 0.2 * sin(angle);
      line(width * 2, height * 2, x, y);
    }
    pop()
  }


  //touche D 
  playsound(kicks, 68);
  if (kicks.isPlaying() == true) {
    let wav = kicksFFT.waveform();

    push()
    beginShape()
    stroke(255, 255, 255);
    strokeWeight(2);
    fill(0, 255, 0, 50);

    for (let i = 0; i < wav.length; i++) {
      let angle = map(i, 0, wav.length, 0, TWO_PI)
      let rad = map(wav[i], -1, 1, 0, height)
      let x = width * 0.5 + rad * cos(angle)
      let y = height * 0.5 + rad * sin(angle)
      ellipse(x, y, 5, 5);
      curveVertex(x, y);
    }

    endShape(CLOSE)
    pop()
  }


  //touche F
  playsound(ballais, 70);
  if (ballais.isPlaying() == true) {
    push();
    ballaisFFT.analyze();
    rectMode(CENTER);
    var nrj1 = ballaisFFT.getEnergy("bass")
    push();
    stroke(0, 0, 230, 80);
    strokeWeight(30);
    noFill();
    translate(width * 0.5, height * 0.5)

    rectMode(CENTER);
    rect(0, 0, 6 * nrj1, nrj1 / 7)
    pop();


  }



  //touche G
  playsound(mannette, 71);
  if (mannette.isPlaying() == true) {
    push()
    rectMode(CENTER);
    stroke(58, 255, 0)
    strokeWeight(70)

    a22 = a22 + .5;
    s22 = cos(a22) * 2;

    translate(width / 2, height / 2);
    scale(s22);

    translate(110, 0);
    noFill()
    scale(s22);
    rect(0, 0, 700, 700);
    pop()

  }



  //touche H
  playsound(enceinte, 72);
  if (enceinte.isPlaying() == true) {
    push();
    enceinteFFT.analyze();
    rectMode(CENTER);
    var nrj1 = enceinteFFT.getEnergy("bass")
    push(); //gauche
    noStroke();
    fill(255, 243, 0, nrj1);
    translate(width * 0.25, height * 0.5);
    rotate(PI / 4);
    rect(0, 0, width * 0.2, width * 0.2);
    pop();

    push(); //droite
    noStroke();
    fill(255, 243, 0, nrj1);
    translate(width * 0.75, height * 0.5)
    rotate(PI / 4)
    rect(0, 0, width * 0.2, width * 0.2)
    pop();

    push(); //centre
    stroke(230, 255, 230);
    strokeWeight(500);
    noFill();
    translate(width * 0.5, height * 0.5)
    rotate(PI / 4)
    rectMode(CENTER);
    rect(0, 0, nrj1, nrj1)
    pop();


  }



  //touche J
  playsound(chaise, 74);
  if (chaise.isPlaying() == true) {
    push()
    var radius = map(chaise.currentTime(), 0, chaise.duration(), 50, width)
    noStroke()
    fill(0, 160, 73)
    rectMode(CENTER);
    rect(width * 0.5, height * 0.9, radius, 50);
    pop()

    push()
    var radius = map(chaise.currentTime(), 0, chaise.duration(), width, 50)
    noStroke()
    fill(0, 160, 73)
    rectMode(CENTER);
    rect(width * 0.5, height * 0.1, radius, 20);
    pop()

  }

  //touche K
  playsound(metal, 75);
  if (metal.isPlaying() == true) {
    push()
    stroke(80, 255, 236)
    strokeWeight(10)

    a22 = a22 + .5;
    s22 = cos(a22) * 2;

    translate(width / 2, height / 2);
    scale(s22);

    translate(110, 0);
    noFill()
    scale(s22);
    ellipse(0, 0, 50, 50);
    pop()
  }


  //touche L
  playsound(lingette, 76);
  if (lingette.isPlaying() == true) {
    push();
    noStroke();
    fill(0, 0, 255, 50);
    rectMode(CENTER);
    translate(width * 0.25, 0)
    if (lingette.currentTime() > 0) {

      ellipse(100, 2, 1900, 1900);
    }
    if (lingette.currentTime() > 0.3) {
      ellipse(height * 0.5, height * 0.5, 1900, 1900);
    }

    pop();
  }




  //touche M  rond en barre
  playsound(clavier, 77);
  if (clavier.isPlaying() == true) {
    push()
    var nsegment = 270
    var ncurrentsegment = map(clavier.currentTime(), 0, clavier.duration(), 0, nsegment + 1)

    for (var i = 0; i < ncurrentsegment; i++) {
      stroke(255, 186, 80);
      strokeWeight(1)
      var angle = map(i, 0, nsegment, 0, TWO_PI);
      var x = width * .5 + height * .5 * cos(angle);
      var y = height * 0.5 + height * 0.5 * sin(angle);
      line(width * 0.5, height * 0.5, x, y);
    }
    pop()
  }


  //touche W
  playsound(carte, 87);
  if (carte.isPlaying() == true) {
    push()
    var nsegment = 270
    var ncurrentsegment = map(carte.currentTime(), 0, carte.duration(), 0, nsegment + 1)

    for (var i = 0; i < ncurrentsegment; i++) {
      stroke(0, 200, 200);
      strokeWeight(1)
      var angle = map(i, 0, nsegment, 0, TWO_PI);
      var x = width * .2 + height * .2 * cos(angle);
      var y = height * 0.5 + height * 0.5 * sin(angle);
      line(width * 0.2, height * 0.2, x, y);
    }
    pop()
  }


  //touche X
  playsound(green, 88);
  if (green.isPlaying() == true) {
    push()
    greenFFT.analyze();

    var nrj1 = greenFFT.getEnergy("mid")
    var length = map(green.currentTime(), 0, green.duration(), 0, width * 0.6)
    push()
    rectMode(CENTER);
    fill(93, 255, 0, nrj1)
    stroke(93, 255, 0, nrj1);
    strokeWeight(70)
    rect(0, height / 2, nrj1, nrj1 * 2 + length)
    rect(width, height / 2, nrj1, nrj1 * 2 + length)
    pop()

  }


  //touche C
  playsound(Shoes, 67);
  if (Shoes.isPlaying() == true) {

    push()
    var amp = ShoesAmp.getLevel()
    var rot = map(amp, 0, 1, 0, 3 + PI)
    fill(0, 255, 20, 80);
    noStroke();
    rectMode(CENTER)
    translate(0.5 * width, 0.5 * height)
    rotate(rot)
    rect(0, 0, 1000, height * 0.1081)
    pop()
    push()
    fill(100, 255, 115, 80);
    noStroke();
    rectMode(CENTER)
    translate(0.5 * width, 0.25 * height)
    rotate(rot)
    rect(0, 0, 300, 80)
    pop()
    push()
    fill(100, 255, 115, 80);
    noStroke();
    rectMode(CENTER)
    translate(0.5 * width, 0.75 * height)
    rotate(rot)
    rect(0, 0, 300, 80)
    pop()

  }

  //touche V
  playsound(plug, 86);
  if (plug.isPlaying() == true) {
    push();
    var rad = map(plug.currentTime(), 0, plug.duration(), 10, width)
    stroke(255, 0, 0, 70);
    strokeWeight(15)
    fill(255, 0, 0, 50);
    ellipse(width * 0, height * 0.5, rad, rad)
    ellipse(width * 1, height * 0.5, rad, rad)
    pop();
  }

  //touche B 
  playsound(roulette, 66);
  if (roulette.isPlaying()) {
    push();
    beginShape()
    var x, y1 = height * 0.35,
      y2 = height * 0.65,
      first = 0.33,
      duration = roulette.duration() * 0.85,
      hauteur = height * 0.05,
      largeur;
    if (roulette.currentTime() < first) {
      noStroke();
      fill(0, 200, 160);
      x = width - roulette.currentTime() * width / first;
      largeur = width - x;
      rect(x, y1, largeur, hauteur);
      fill(0, 200, 160);
      rect(x, y2, largeur, hauteur);
    }
    endShape(CLOSE)
  }





  //touche N
  playsound(Mur, 78);
  if (Mur.isPlaying() == true) {
    push();
    var angle = map(Mur.currentTime(), 10, Mur.duration(), 350, PI);
    translate(width, height);
    rotate(angle);
    rectMode(CENTER);
    stroke(0, 255, 220)
    strokeWeight(30);
    fill(0, 0, 0, 0);
    rect(50, 750, width * 2, height * 2);

    pop();

  }

}

  function playsound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
      sound.play();
    }
  }



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }