
// on annonce les sons et les variables

let soundA
let soundAAmp

let soundB

let soundC
let soundCAmp

let soundD
let soundE
let soundF

let soundG
let soundGFFT

let soundH
let soundI

let soundJ
let soundJFFT
let soundJAmp

let soundK
let soundKFFT

let soundL

let soundM
let soundMFFT

let soundN

let soundO
var soundOFFT

let soundP

let soundQ
let soundQAmp

let soundR
let soundS
let soundT
let soundU
let soundV
let soundW
let soundX
let soundY

let soundZ
let soundZFFT

//Les variables
//Les variables sont associés a la lettre pour laquelle elles sont utilisées, on note xd la variable X de la lettre D par exemple.

var angle = 0;

var diameter = 1.5;

//Lettre D
var xd = 0;
var dnums = [0, 0, 0, 0, 0];    //liste de valeurs que peut prendre la variable
let dimd = 80.0;

// Lettre E 
var xpos = 1;
var ypos = 1;

var xspeed = 1;

// Lettre F 
let af = 0.0;
let sf = 0.0;

// Lettre I
let dimi = 1;

// Lettre K
xk = 100;
yk = 5; 

//Lettre P
let circle = [];
let square = [];

let morph = [];

let state = false;

// Lettre Q
var qxnums = [25, 50, 75, 100, 125];        
var qynums = [25, 50, 75, 100, 125]; 

// Lettre R 
let xr = 15;
let yr = 10;

// Lettre T
let yt = 0;
let anglet = 0;
let anglet2 = 0;

// Lettre U 
var unums = [0, 50, 100, 150, 200];
var angleOffset = 0

//Lettre V 
var t = 0;

// Lettre X
var spot = {
    x: 100,
    y: 200
}


//On fait charger tout les sons.
function preload() {
    soundA = loadSound("./assets/soundA.wav")
    soundB = loadSound("./assets/soundB.wav")
    soundC = loadSound("./assets/soundC.wav")
    soundD = loadSound("./assets/soundD.wav")
    soundE = loadSound("./assets/soundE.wav")
    soundF = loadSound("./assets/soundF.wav")
    soundG = loadSound("./assets/soundG.wav")
    soundH = loadSound("./assets/soundH.wav")
    soundI = loadSound("./assets/soundI.wav")
    soundJ = loadSound("./assets/soundJ.wav")
    soundK = loadSound("./assets/soundK.ogg")
    soundL = loadSound("./assets/soundL.ogg")
    soundM = loadSound("./assets/soundM.wav")
    soundN = loadSound("./assets/soundN.ogg")
    soundO = loadSound("./assets/soundO.wav")
    soundP = loadSound("./assets/soundP.wav")
    soundQ = loadSound("./assets/soundQ.wav")
    soundR = loadSound("./assets/soundR.wav")
    soundS = loadSound("./assets/soundS.wav")
    soundT = loadSound("./assets/soundT.mp3")
    soundU = loadSound("./assets/soundU.wav")
    soundV = loadSound("./assets/soundV.wav")
    soundW = loadSound("./assets/soundW.wav")
    soundX = loadSound("./assets/soundX.wav")
    soundY = loadSound("./assets/soundY.wav")
    soundZ = loadSound("./assets/soundZ.wav")
}



function setup() { // initialiser les valeurs ou créer des éléments de page
    createCanvas(windowWidth, windowHeight) //Dimension
    background(250, 220, 0) //couleur du background.
    noStroke();

    // lettre A 
  
    soundAAmp = new p5.Amplitude(0.15);     //analyse du volume notre son
    soundAAmp.setInput(soundA);       // On branche un analyzer au son
    soundAAmp.toggleNormalize();

    // lettre C 
    soundCAmp = new p5.Amplitude();
    soundCAmp.setInput(soundC);
    soundCAmp.toggleNormalize();

    // lettre E 
    xpos = 50;
    ypos = windowHeight / 2;

    xspeed = random(2, 10) * cos(random(TWO_PI))
    yspeed = random(2, 10) * sin(random(TWO_PI))

    // lettre F
    rectMode(CENTER);

    // lettre J 
    soundJFFT = new p5.FFT(0.8, 16);
    soundJFFT.setInput(soundJ);

    soundJAmp = new p5.Amplitude(0.8);
    soundJAmp.setInput(soundJ);
    soundJAmp.toggleNormalize();

    // lettre K
    soundKFFT = new p5.FFT(0.8, 16);
    soundKFFT.setInput(soundK);

    // lettre M
    soundMFFT = new p5.FFT(0.8, 16);
    soundMFFT.setInput(soundM);

    // lettre O 
    soundOFFT = new p5.FFT(0.8, 1024);
    soundOFFT.setInput(soundO);

    // lettre P
    for (let angle = 0; angle < 360; angle += 9) {

        let v = p5.Vector.fromAngle(radians(angle - 135));
        v.mult(100);
        circle.push(v);

        morph.push(createVector());
    }
    for (let x = -50; x < 50; x += 10) {
        square.push(createVector(x, -50));
    }
    for (let y = -50; y < 50; y += 10) {
        square.push(createVector(50, y));
    }
    for (let x = 50; x > -50; x -= 10) {
        square.push(createVector(x, 50));
    }
    for (let y = 50; y > -50; y -= 10) {
        square.push(createVector(-50, y));
    }


    // lettre Q
    soundQAmp = new p5.Amplitude(0.2);
    soundQAmp.setInput(soundQ);
    soundQAmp.toggleNormalize();

    // lettre T 
    yt = height;

    //lettre Z 
    soundZFFT = new p5.FFT(0.8, 16);
    soundZFFT.setInput(soundZ)

}



function draw() {
    background(250, 220, 0, 97)
    noStroke();

    // touche R
    playSound(soundR, 82)      // si la touche est pressée
    if (soundR.isPlaying() == true) {
        push()
        background(0);      //Change la couleur du fond

        xr = xr * 1.4;      //Augmente la surface du rectangle 
        yr = yr * 1.4;

        fill(250, 220, 0);
        noStroke();
        rect(width / 2, height / 2, xr, yr);
        pop()
    }
    else {      // On réinitialise les valeurs pour que l'animation se lance au début chaque fois que la touche est pressée
        xr = 15;
        yr = 10;
    }

    // touche V
    playSound(soundV, 86)
    if (soundV.isPlaying() == true) {
        push()
        for (let x = 0; x <= width; x = x + 30) {
            for (let y = 0; y <= height; y = y + 30) {

                const xAngle = map(1, 0, width, -4 * PI, 4 * PI, true);
                const yAngle = map(1, 0, height, -4 * PI, 4 * PI, true);

                const angle = xAngle * (x / width) + yAngle * (y / height);


                const myX = x + 20 * cos(2 * PI * t + angle);
                const myY = y + 20 * sin(2 * PI * t + angle);

                fill(230, 175, 0)
                rect(myX, myY, 100, 5)
            }
        }
        t = t + 0.01;
        pop()
    }
    
   // touche H
   // trace des lignes aves des coordonnées aléatoires
   playSound(soundH, 72)
   if (soundH.isPlaying() == true) {
       push()
       
       fill(0);
       stroke(0);
       strokeWeight(4);
       line(random(0, windowWidth), 0, random(windowWidth, 0), height);
       line(random(windowWidth, 0), 0, random(0, windowWidth), height);

       line(0, random(0, windowHeight), width, random(windowHeight, 10));
       line(0, random(windowHeight, 0), width, random(0, windowHeight));

       fill(250, 220, 0);
       noStroke();
       rect(width/2, height/2, 350, 350);

       pop()
   }
    

    // touche M
    playSound(soundM, 77)
    if (soundM.isPlaying() == true) {
        push()
        soundMFFT.analyze();

        var nrj2 = soundMFFT.getEnergy("bass")
        var long = map(soundM.currentTime(), 500, soundM.duration(), 500, width);

        rectMode(CENTER);
        fill(150, 0, 0)
        rect(0, 700, nrj2, long, 200)
        noStroke()
        push()
        fill(150, 0, 0)
        rect(width / 6, 700, nrj2, long, 200)
        noStroke()
        push()
        fill(150, 0, 0)
        rect(width / 6 * 2, 700, nrj2, long, 200)
        noStroke()
        pop()
        push()
        fill(150, 0, 0)
        rect(width / 6 * 3, 700, nrj2, long, 200)
        noStroke()
        pop()
        push()
        fill(150, 0, 0)
        rect(width / 6 * 4, 700, nrj2, long, 200)
        noStroke()
        pop()
        push()
        fill(150, 0, 0)
        rect(width / 6 * 5, 700, nrj2, long, 200)
        noStroke()
        pop()
        push()
        fill(150, 0, 0)
        rect(width, 700, nrj2, long, 200)
        noStroke()
        pop()

        pop()
    }

    // touche A
    // l'analyzer fais varier le diamètre des ellipses en fonction du son.
    playSound(soundA, 65)
    if (soundA.isPlaying() == true) {
        push()
        var rms = soundAAmp.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 320);

        fill(255)
        strokeWeight(10);
        stroke(150, 0, 0);
        ellipse(width * 0.40, height * 0.25, ellipseSize, ellipseSize)

        fill(255)
        strokeWeight(10);
        stroke(150, 0, 0);
        ellipse(width * 0.60, height * 0.25, ellipseSize, ellipseSize)

        fill(255)
        strokeWeight(10);
        stroke(150, 0, 0);
        ellipse(width * 0.40, height * 0.75, ellipseSize, ellipseSize)

        fill(255)
        strokeWeight(10);
        stroke(150, 0, 0);
        ellipse(width * 0.60, height * 0.75, ellipseSize, ellipseSize)
        pop()
    }

    // touche C
    playSound(soundC, 67)
    if (soundC.isPlaying() == true) {
        push()
        noStroke()
        fill(0);
        var lvl = soundCAmp.getLevel() * 200;
        var nsegment = 40;
        var ncurrentsegment = (map(soundC.currentTime(), 0, soundC.duration(), 0, nsegment + 4))
        strokeWeight(4)
        for (var i = 0; i < ncurrentsegment; i++) {
            var h = map(i, 0, nsegment, 0, 150)

            stroke(h, 0, 0, lvl + 55);
            strokeWeight(15);

            var angleC = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angleC)
            var y = height * 0.5 + height * 0.45 * sin(angleC)
            line(width * 0.5, height * 0.5, x, y)
        }
        pop()
    }

    // touche D
    playSound(soundD, 68)
    if (soundD.isPlaying() == true) {
        push()

        if (soundD.currentTime() > 0) {
            dnums[0] = dnums[0]  * 1.35 + 0.8;
            if (dnums[0]  > width + dimd) {
                dnums[0]  = -dimd;
            }
            push();
            translate(dnums[0] , height / 4 - dimd / 2);
            fill(0);
            rect(-dimd / 2, -dimd / 2, dimd, dimd);
            pop();
        }

        if (soundD.currentTime() > soundD.duration() * 0.05) {
            dnums[1] = dnums[1]  * 1.35 + 0.8;
            if (dnums[1]  > width + dimd) {
                dnums[1]  = -dimd;
            }
            push();
            translate(dnums[1] , height / 2 - dimd / 2);
            fill(0);
            rect(-dimd / 2, -dimd / 2, dimd, dimd);
            pop();
        }

        if (soundD.currentTime() > soundD.duration() * 0.1) {
            dnums[2] = dnums[2]  * 1.25 + 0.8;
            if (dnums[2]  > width + dimd) {
                dnums[2]  = -dimd;
            }
        push();
        translate(dnums[2] , height / 4 * 3 - dimd / 2);
        fill(0);
        rect(-dimd / 2, -dimd / 2, dimd, dimd);
        pop();
        }

        if (soundD.currentTime() > soundD.duration() * 0.15) {
            dnums[3] = dnums[3]  * 1.15 + 0.8;
            if (dnums[3]  > width + dimd) {
                dnums[3]  = -dimd;
            }
        push();
        translate(dnums[3] , height - dimd / 2);
        fill(150, 0, 0);
        rect(-dimd / 2, -dimd / 2, dimd, dimd);
        pop();
        }

        pop();
    }
    else {
        xd = 0;
        dnums = [0, 0, 0, 0, 0];
        dimd = 80.0;
    }

    // touche E 
    // l'ellipse se déplace à une vitesse qui augmente en fonction de sa position
    playSound(soundE, 69)
    if (soundE.isPlaying() == true) {
        push();
        noFill();
        stroke(0);
        strokeWeight(8);
        ellipseMode(CENTER);

        xpos = xpos + xspeed;
        xspeed = xspeed * 1.15;

        ellipse(xpos, height / 2, 175, 170);
        pop();
    }
    else {
        xpos = 50;
        xspeed = 1;

    }

    // touche F
    playSound(soundF, 70)
    if (soundF.isPlaying() == true) {
        push();
        af = af + 0.04;
        sf = cos(af) * 3;

        translate(width / 2, height / 2);
        scale(sf);
        fill(0);
        noStroke();
        rect(0, 0, 50, 50);

        translate(75, 0);
        fill(150, 0, 0);
        noStroke();
        scale(sf);
        rect(0, 0, 50, 50);
        pop();
    }

    // touche G
    playSound(soundG, 71)
    if (soundG.isPlaying() == true) {
        push()
        var radius = map(soundG.currentTime(), 0, soundG.duration(), 50, width);
        strokeWeight(22);
        stroke(255);
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop()

        push()
        var radius = map(soundG.currentTime(), 0, soundG.duration(), 50, width * 0.9);
        strokeWeight(20);
        stroke(255);
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(soundG.currentTime(), 0, soundG.duration(), 50, width * 0.8);
        strokeWeight(20);
        stroke(255);
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop()
    }

    // touche I
    playSound(soundI, 73)
    if (soundI.isPlaying() == true) {
        push();
        dimi = dimi + 5;

        fill(0)
        noStroke()
        ellipse(width / 2, height / 2, dimi, dimi)
        fill(255)
        noStroke()
        ellipse(width / 2, height / 2, dimi * 0.5, dimi * 0.5)

        fill(0)
        noStroke()
        ellipse(width * 0.2, height / 2, dimi * 0.5, dimi * 0.5)
        fill(255)
        noStroke()
        ellipse(width * 0.2, height / 2, dimi * 0.25, dimi * 0.25)

        fill(0)
        noStroke()
        ellipse(width * 0.8, height / 2, dimi * 0.5, dimi * 0.5)
        fill(255)
        noStroke()
        ellipse(width * 0.8, height / 2, dimi / 4, dimi / 4)


        pop();
    }
    else {
        dimi = dimi - dimi;
    }


    // touche J
    playSound(soundJ, 74)
    if (soundJ.isPlaying() == true) {
        push();
        soundJFFT.analyze();
        rectMode(CENTER);
        var nrj1 = soundJFFT.getEnergy("highMid")       // la couleur change d'opacité en fonction du son 

        let rms = soundJAmp.getLevel();                 // les rectangles grossissent en fonction du son


        push()
        fill(255, nrj1)
        noStroke();
        translate(width * 0.30, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, 300 + rms * 75, 300 + rms * 75)
        pop()

        push()
        fill(255, nrj1)
        noStroke();
        translate(width * 0.70, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, 300 + rms * 75, 300 + rms * 75)
        pop()

        push()
        fill(150, 0, 0, nrj1)
        noStroke();
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, 350 + rms * 150, 350 + rms * 150)
        pop()
        pop()
    }

    // touche L
    playSound(soundL, 76)

    if (soundL.isPlaying() == true) {
        push()
        var arcL = PI / 5

        translate(width / 2, height / 2);
        rotate(frameCount * 0.05);
        noFill();

        stroke(255);
        strokeWeight(8);
        for (let i = 0; i < 10; i++) {
            ellipse(0, 30, 200, 800);
            rotate(arcL);
        }
        pop()
    }

    // touche N
    playSound(soundN, 78)
    if (soundN.isPlaying() == true) {
        push()
        fill(150, 0, 0);
        rectMode(CENTER);

        translate(width / 2, height / 2);
        rotate(frameCount * 0.1);
        rect(0, 0, 250, 250);

        rotate(PI / 2);
        rect(175, 175, 50, 50);
        rotate(PI / 2);
        rect(175, 175, 50, 50);
        rotate(PI / 2);
        rect(175, 175, 50, 50);
        rotate(PI / 2);
        rect(175, 175, 50, 50);
        pop()
    }


    // touche O 
    playSound(soundO, 79)
    if (soundO.isPlaying() == true) {
        push()
        var waveform = soundOFFT.waveform();

        noFill();
        beginShape();
        stroke(150, 0, 0);
        strokeWeight(5);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }

        endShape();
        pop()
    }


    // touche P 
    playSound(soundP, 80)
    if (soundP.isPlaying() == true) {
        push()
        let totalDistance = 0;

        for (let i = 0; i < circle.length; i++) {
            let v1;

            if (state) {
                v1 = circle[i];
            } else {
                v1 = square[i];
            }

            let v2 = morph[i];

            v2.lerp(v1, 0.2);

            totalDistance += p5.Vector.dist(v1, v2);
        }
        if (totalDistance < 0.1) {
            state = !state;
        }

        translate(width / 2, height / 2);
        strokeWeight(10);

        beginShape();
        fill(0);
        stroke(150, 0, 0);

        morph.forEach(v => {
            vertex(v.x, v.y);
        });

        endShape(CLOSE);
        pop()
    }


    // touche Q
    playSound(soundQ, 81)
    if (soundQ.isPlaying() == true) {
        push()
    
        fill(150, 0, 0);
        noStroke();

        let x1 = map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.9, width*0.1)
        x1 = constrain(x1, width*0.1, width*0.9);
        let x2 = map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.9, width*0.3)
        x2 = constrain(x2, width*0.3, width*0.9);
        let x3 = map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.9, width*0.5)
        x3 = constrain(x3, width*0.5, width*0.9);
        let x4= map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.9, width*0.7)
        x4= constrain(x4, width*0.7, width*0.9);
        let x5 = map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.9, width*0.9)
        x5 = constrain(x5, width*0.9, width*0.9);

        let x6 = map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.1, width*0.1)
        x6 = constrain(x6, width*0.1, width*0.1);
        let x7= map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.1, width*0.3)
        x7= constrain(x7, width*0.1, width*0.3);
        let x8 = map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.1, width*0.5)
        x8 = constrain(x8, width*0.1, width*0.5);
        let x9 = map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.1, width*0.7)
        x9 = constrain(x9, width*0.1, width*0.7);
        let x10 = map(pow(soundQ.currentTime(), 0.6), 0, pow(soundQ.duration() * 0.8, 0.5), width*0.1, width*0.9)
        x10 = constrain(x10, width*0.1, width*0.9);
        
        
        ellipse(x1, height * 0.5, qxnums[0], qynums[0])
        ellipse(x2, height * 0.5, qxnums[1], qynums[1])
        ellipse(x3, height * 0.5, qxnums[2], qynums[2])
        ellipse(x4, height * 0.5, qxnums[3], qynums[3])
        ellipse(x5, height * 0.5, qxnums[4], qynums[4])

        ellipse(x6, height * 0.25, qxnums[4], qynums[4])
        ellipse(x7, height * 0.25, qxnums[3], qynums[3])
        ellipse(x8, height * 0.25, qxnums[2], qynums[2])
        ellipse(x9, height * 0.25, qxnums[1], qynums[1])
        ellipse(x10, height * 0.25, qxnums[0], qynums[0])

        ellipse(x6, height * 0.75, qxnums[4], qynums[4])
        ellipse(x7, height * 0.75, qxnums[3], qynums[3])
        ellipse(x8, height * 0.75, qxnums[2], qynums[2])
        ellipse(x9, height * 0.75, qxnums[1], qynums[1])
        ellipse(x10, height * 0.75, qxnums[0], qynums[0])
        
        pop()
    }

    // touche S
    playSound(soundS, 83)
    if (soundS.isPlaying() == true) {
        push()
        push()
        translate(1 + width / 2, 1 + height / 2);
        rotate(angle);

        strokeWeight(40);
        stroke(150, 0, 0);
        line(50, 50, 980, 0);
        rotate(PI / 2);
        stroke(150, 0, 0);
        line(50, 50, 980, 0);
        rotate(PI / 2);
        stroke(150, 0, 0);
        line(50, 50, 980, 0);
        rotate(PI / 2);
        stroke(150, 0, 0);
        line(50, 50, 980, 0);

        angle += 0.1;
        pop()

        fill(150, 0, 0);
        ellipse(width / 2, height / 2, 75, 75)
        pop()
    }

    // touche T
    // Plus de le rectangle est haut sur l'écran, plus ses angles s'arrondissent jusqu'à donner un cercle
    playSound(soundT, 84)
    if (soundT.isPlaying() == true) {
        push()
        anglet2 = map(soundT.currentTime(), 0, soundT.duration() * 0.50, 0, PI);  

        yt = height - (sin(anglet2) * height);
        anglet = anglet - 0.15;
        let radiust = map(pow(yt, 0.2),pow (0,0.2), pow(height,0.2), 200, 0)
        radiust = constrain(radiust, 0, 100)
       
        translate(width / 2, yt + 100);
        rotate(anglet);

        fill(0);
        rectMode(CENTER);
        rect(0, 0, 200, 200, radiust);
        pop()
    }

    // touche U
    playSound(soundU, 85)
    if (soundU.isPlaying() == true) {
        push()

        noFill();
        strokeWeight(8);
        stroke(150, 0, 0);

        arc(width / 2, height / 2, unums[1], unums[1], 0 + angleOffset, HALF_PI + angleOffset);
        arc(width / 2, height / 2, unums[2], unums[2], HALF_PI + angleOffset, PI + angleOffset);
        arc(width / 2, height / 2, unums[3], unums[3], PI + angleOffset, PI + HALF_PI + angleOffset);
        arc(width / 2, height / 2, unums[4], unums[4], PI + HALF_PI + angleOffset, TWO_PI + angleOffset);
        pop()
        unums[1] = unums[1] + 2
        unums[2] = unums[2] + 4
        unums[3] = unums[3] + 6
        unums[4] = unums[4] + 8
        angleOffset += 0.05

    }
    else {
        unums = [0, 50, 100, 150, 200];
        angleOffset = 0;
    }

    // touche W
    playSound(soundW, 87)
    if (soundW.isPlaying() == true) {
        push()
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / -30.0);
        fill(0)
        stroke(0)
        strokeWeight(5)
        helice(width, height, 50, 10000, 100);
        pop()
    }

    // touche X
    playSound(soundX, 88)
    if (soundX.isPlaying() == true) {
        push()
        spot.x = random(0, width);
        spot.y = random(0, height);

        fill(255, 45, 65);
        noStroke();
        ellipse(spot.x, spot.y, 500, 500);
        pop()
    }

    // touche Y
    playSound(soundY, 89)
    if (soundY.isPlaying() == true) {
        push()
        push()
        fill(255, 45, 65, 99);
        noStroke();
        ellipse(width / 2, height / 2, diameter, diameter);

        diameter = diameter * 2;
        pop()
        pop()
    }
    else {
        diameter = 1.5;
    }

     // touche B
     playSound(soundB, 66)
     if (soundB.isPlaying() == true) {
         push()
         push()
         var rad = map(soundB.currentTime(), 0, soundB.duration(), 10, width);
         stroke(0)
         strokeWeight(5)
         noFill();
         rectMode(CENTER)
         rect(width * 0.5, 0, rad, rad);
         pop();
 
         push();
         var rad = map(soundB.currentTime(), 0, soundB.duration(), -10, width);
         stroke(0)
         strokeWeight(5)
         noFill();
         rectMode(CENTER)
         rect(width * 0.5, height, rad, rad);
         pop()
         pop()
     }


    // touche Z
    playSound(soundZ, 90)
    if (soundZ.isPlaying() == true) {
        push()
        var waveform = soundZFFT.waveform();
        noFill();
        beginShape();
        stroke(0);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }

     // touche K
     playSound(soundK, 75)
     if (soundK.isPlaying() == true) {
         push()
 
         xk = xk + 100;
 
         if ( xk > windowWidth){
             yk = yk + 0.5;
         }
         
         fill(0);
         rect(0, height / 2, xk, yk);
 
         pop()
     }
     else {
         xk = 100;
         yk = 5;
     }
}


function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(56, 120, 219, 45);
}


function helice(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 5.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var wx = x + cos(a) * radius2;
        var wy = y + sin(a) * radius2;
        vertex(wx, wy);
        wx = x + cos(a + halfAngle) * radius1;
        wy = y + sin(a + halfAngle) * radius1;
        vertex(wx, wy);
    }
    endShape(CLOSE);
}