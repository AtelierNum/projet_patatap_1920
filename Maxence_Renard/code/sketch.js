let sound01;
let sound02
let sound03
let sound03FFT
let sound04
let sound05
let sound06
let sound07
let sound08
let sound09
var sound10
var sound10FFT
let sound11
var sound11FFT
let sound12
var sound12FFT
let sound13
let sound14
var sound14amp
let sound15
let sound16
let sound17
let sound18
let sound18FFT
let sound19
let sound20
let sound21
let sound22
let sound22amp
let sound23
let sound24
let sound25
let sound26
// E
let message = 'AAAAAAAAAAAAAAAAAAAAAAHHHH', // Message pour la lettre "E"
    font,
    bounds,
    fontsize = 150; // parametrage de la Font pour "E"
let t = 0; // variable de temps
var analyzer;






function preload() { // On charge les sons et on leur attribut un nom

    sound01 = loadSound("Son/A.wav") // OK
    sound02 = loadSound("Son/B.wav") // OK
    sound03 = loadSound("Son/C.wav") // OK 
    sound04 = loadSound("Son/D.wav") // OK 
    sound05 = loadSound("Son/E.wav") // OK
    sound06 = loadSound("Son/F.wav") // OK
    sound07 = loadSound("Son/G.wav") // OK 
    sound08 = loadSound("Son/H.wav") // OK
    sound09 = loadSound("Son/I.wav") // OK
    sound10 = loadSound("Son/J.wav") // OK 
    sound11 = loadSound("Son/K.wav") // OK 
    sound12 = loadSound("Son/L.wav") // OK
    sound13 = loadSound("Son/M.wav") // OK
    sound14 = loadSound("Son/N.wav") // OK
    sound15 = loadSound("Son/O.wav") // OK
    sound16 = loadSound("Son/P.wav") // OK
    sound17 = loadSound("Son/Q.wav") // OK
    sound18 = loadSound("Son/R.wav") // OK
    sound19 = loadSound("Son/S.wav") // OK
    sound20 = loadSound("Son/T.wav") // OK
    sound21 = loadSound("Son/U.wav") // OK
    sound22 = loadSound("Son/V.wav") // OK
    sound23 = loadSound("Son/W.wav") // OK
    sound24 = loadSound("Son/X.wav") // OK
    sound25 = loadSound("Son/Y.wav") // OK
    sound26 = loadSound("Son/Z.wav") // OK
    //  font = loadFont("../police/Beurk___.ttf")

}
// F
function polygon(x, y, radius, npoints) { // On creer la fonction qui permet de creer des polygones
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}



function playSound(sound, KeyID) { //Fonction qui attribut un son joué pour une touche définie
    if (keyIsDown(KeyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

function setup() {

    background(0)

    createCanvas(windowWidth, windowHeight)

    //C
    sound03FFT = new p5.FFT() //Analyse Audio
    sound03FFT.setInput(sound03)

    //E
    //textFont(font);
    //textSize(fontsize);
    //bounds = font.textBounds(message, 0, 0, fontsize);
    x = width / 2 /*- bounds.w / 2;*/
    y = height / 2 /*- bounds.h / 2;*/

    //J
    sound10FFT = new p5.FFT(0.8, 16) //Analyse Audio
    sound10FFT.setInput(sound10)

    //K
    sound11FFT = new p5.FFT(0.8, 16) //Analyse Audio
    sound11FFT.setInput(sound11)

    //L
    sound12FFT = new p5.FFT(0.8, 16) //Analyse Audio
    sound12FFT.setInput(sound12)

    // N
    sound14Amp = new p5.Amplitude(); // Analyse de l'amplitude
    sound14Amp.setInput(sound14);

    // R
    sound18FFT = new p5.FFT(0.8, 128); //Analyse Audio
    sound18FFT.setInput(sound18);

    // V

    sound22Amp = new p5.Amplitude() // Analyse de l'amplitude
    sound22Amp.setInput(sound22);


}

function draw() {

    background(0)

    playSound(sound01, 65) // A //
    if (sound01.isPlaying() == true) {
        push()
        var r = map(sound01.currentTime(), //Faire varier
            0, sound01.duration(),
            0, width)
        noFill()
        stroke(255, 255, 255)
        strokeWeight(50)
        ellipse(width * 0.5, height * 0.5, r, r)
        pop()
    }


    playSound(sound02, 66) //B //
    if (sound02.isPlaying() == true) {
        push()
        var r = map(sound02.currentTime(),
            0, sound02.duration() * 0.33,
            0, height * 0.5)
        r = constrain(r, 0, height * 0.5)
        let c = map(sound02.currentTime(), // Permet aux bords du carré de devenir rond
            sound02.duration() * 0.33, sound02.duration(),
            0, height)
        c = constrain(c, 0, height * 0.5)
        stroke(255, 255, 255)
        strokeWeight(10)
        rectMode(CENTER)

        noFill()
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
        pop()
    }


    playSound(sound03, 67) //C //
    if (sound03.isPlaying() == true) {
        push()
        let wave = sound03FFT.waveform() // Permet de creer une vague qui prend la forme du son
        noFill()
        strokeWeight(2)
        stroke(255, 255, 255)
        beginShape()
        // console.log(wave)
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }

    playSound(sound04, 68) //D //
    if (sound04.isPlaying() == true) {
        push()
        var r = map(sound04.currentTime(), // Fait osciller les demi-cercle selon le son son
            0, sound04.duration(),
            0, width)
        noFill()
        stroke(255, 255, 255)
        strokeWeight(25)
        arc(500, 500, 280, 280, r, r)
        arc(1350, 500, 280, 280, r, r)
        pop()
    }

    playSound(sound05, 69) //E//
    if (sound05.isPlaying() == true) {
        push()
        fill(0);
        stroke(255, 255, 255)
        strokeWeight(25)
        text(message, x, y);
       // bounds = font.textBounds(message, x, y, fontsize); //Fait osciller le texte
        /*if (
            keyIsPressed, 69 >= bounds.x &&
            keyIsPressed, 69 <= bounds.x + bounds.w &&
            keyIsPressed, 69 >= bounds.y &&
            keyIsPressed, 69 <= bounds.y + bounds.h
        ) {*/
            x += random(-10, 10); //Défini l'amplitude d'oscillation
            y += random(-10, 10);
            pop()
      //  }


    }

    playSound(sound06, 70) //F//
    if (sound06.isPlaying() == true) {
        push()
        background(255, 0, 0, 90); //change la couleur du fond d'écran
        pop()
    }


    playSound(sound07, 71) //G//
    if (sound07.isPlaying() == true) {
        push()

        translate(width * 0.2, height * 0.5);
        rotate(frameCount / 50.0);
        polygon(50, 0, 850, 3);
        polygon(550, 0, 500, 3);
        stroke(255, 255, 255)
        strokeWeight(10)
        noFill();
        pop()

    }

    playSound(sound08, 72) //H//
    if (sound08.isPlaying() == true) {
        push();
        translate(width * 0.2, height * 0.5);
        rotate(frameCount / 50.0);
        polygon(0, -600, 850, 6);
        polygon(50, -600, 500, 6);
        stroke(255)
        strokeWeight(3)
        noFill()
    }

    playSound(sound09, 73) //I//
    if (sound09.isPlaying() == true) {
        push();
        var rotation = map(sound09.currentTime(), 0, //Faire tourner la forme
            sound09.duration(), 0, PI);
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5),
            rotate(rotation)
        noFill()
        strokeWeight(10)
        stroke(255, 255, 255)
        rect(0, 0, width * 0.5, width * 0.15)
        pop()
    }
    playSound(sound10, 74) //J//
    if (sound10.isPlaying() == true) {
        push()
        sound10FFT.analyze();
        var nrj2 = sound10FFT.getEnergy("bass") //fait clignotter l'ecran selon le son
        push()
        fill(255, 255, 255, nrj2)
        noStroke()
        rect(0, 0, width, 0.5 * height)
        pop()

    }

    playSound(sound11, 75) //K//
    if (sound11.isPlaying() == true) {
        push()
        sound11FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound11FFT.getEnergy("bass") //fait clignotter le carré selon le son

        push()
        fill(255, 255, 255, nrj1)
        noStroke()
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        noStroke()
        fill(255, 0, 0, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke()
        fill(255, 255, 255, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()
    }

    playSound(sound12, 76) //L//
    if (sound12.isPlaying() == true) {
        push()
        sound12FFT.analyze();
        var nrj3 = sound12FFT.getEnergy("bass") //fait clignotter l'ecran selon le son
        push()
        fill(255, 255, 255, nrj3)
        noStroke()
        rect(0, height * 0.5, width, 0.5 * height)
        pop()

    }
    playSound(sound13, 77); //M//
    if (sound13.isPlaying() == true) {
        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width); //Fait croitre le cercle durant le son

        strokeWeight(22);
        stroke(255, 0, 0, 90);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.9);
        strokeWeight(20);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.8);
        strokeWeight(18);
        stroke(255, 0, 0, 90);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.7);
        strokeWeight(16);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.6);
        strokeWeight(12);
        stroke(255, 0, 0, 90);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.5);
        strokeWeight(8);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.4);
        strokeWeight(4);
        stroke(255, 0, 0, 90);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.3);
        strokeWeight(2);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.2);
        strokeWeight(1);
        stroke(255, 0, 0, 90);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.1);
        strokeWeight(0.8);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.05);
        strokeWeight(0.6);
        stroke(255, 0, 0, 90);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.025);
        strokeWeight(0.4);
        stroke(255, 0, 0, 90);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.020);
        strokeWeight(0.3);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, width * 0.010);
        strokeWeight(0.2);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
    }

    playSound(sound16, 80) // P //
    if (sound16.isPlaying() == true) {

        push()
        var nsegment = 150 // nombre de segment
        var ncurrentsegment = (map(sound16.currentTime(), 0, sound16.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255, 0, 0, 90);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x1 = width * 0.5 + height * 0.45 * cos(angle);
            var y1 = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.75, height * 5, x1, y1);
        }
        pop()

    }

    playSound(sound14, 78); // N //
    if (sound14.isPlaying() == true) {
        push();
        var rms = sound14Amp.getLevel(); //Fait varier l'ellipse selont le son
        var ellipseSize = map(rms, 0, 0.5, 100, 300);
        stroke(250, 250, 250);
        strokeWeight(5);
        fill(255, 255, 255);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize)
        pop();
        push();
        var rms = sound14Amp.getLevel(); //Fait varier l'ellipse selont le son
        var ellipseSize = map(rms, 10, 0.25, 100, 300);
        stroke(250, 250, 250);
        strokeWeight(10);
        fill(0, 0, 0, 0);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize)
        pop();
    }

    playSound(sound15, 79) // O //  
    if (sound15.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 1.0);
        star(0, 0, 2000, 40, 100);
        pop();

        function star(x, y, radius1, radius2, npoints) {
            var angle = TWO_PI / npoints; //Fait varier l'angle de l'etoile
            var halfAngle = angle / 2.0;
            beginShape();
            for (var a = 0; a < TWO_PI; a += angle) {
                var sx = x + cos(a) * radius2;
                var sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
            endShape(CLOSE);
        }
    }

    playSound(sound17, 81); // Q //
    if (sound17.isPlaying() == true) {
        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0, // Fait varier la longueur du rectangle en fonction de la durée du son
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(0, 0, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(10, 10, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(20, 20, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(30, 30, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(40, 40, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(50, 50, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(60, 60, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(70, 70, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(80, 80, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(90, 90, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(100, 100, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(110, 110, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(120, 120, longueur, 350);
        pop();

        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound17.currentTime(2), 0,
            sound17.duration(), width, 50);
        fill(0, 0);
        stroke(255);
        strokeWeight(5)
        rect(130, 130, longueur, 350);
        pop();
    }


    playSound(sound18, 82) // R //
    if (sound18.isPlaying() == true) {
        push();
        var waveform = sound18FFT.waveform(); // Permet de creer une vague qui prend la forme du son
        noFill();
        beginShape();
        stroke(255, 0, 0, 90);
        strokeWeight(500);
        for (var i = 0; i < waveform.length; i++) {
            var x3 = map(i, 0, waveform.length, 0, width);
            var y3 = map(waveform[i], -1, 1, 0, height);
            curveVertex(x3, y3);
        }
        endShape();
        pop();
        push();
        var wave = sound18FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 0, 0, );
        strokeWeight(100);
        for (var i = 0; i < wave.length; i++) {
            var x3 = map(i, 0, wave.length, 0, width);
            var y3 = map(wave[i], -1, 1, 0, height);
            curveVertex(x3, y3);
        }
        endShape();
        pop();
        endShape();
        pop();
        push();
        var waveform = sound18FFT.waveform();
        noFill();
        beginShape();
        stroke(255);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x3 = map(i, 0, waveform.length, 0, width);
            var y3 = map(waveform[i], -1, 1, 0, height);
            curveVertex(x3, y3);
        }
        endShape();
        pop();
    }

    playSound(sound19, 83) // S //  
    if (sound19.isPlaying() == true) {
        push();
        translate(width * 0.9, height * 0.9);
        rotate(frameCount / 1.0);
        star(0, 0, 200, 40, 100);
        pop();

        function star(x, y, radius1, radius2, npoints) {
            var angle = TWO_PI / npoints; // Fait tourner l'etoile
            var halfAngle = angle / 2.0;
            beginShape();
            for (var a = 0; a < TWO_PI; a += angle) {
                var sx = x + cos(a) * radius2;
                var sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
            endShape(CLOSE);
        }
        push();
        translate(width * 0.8, height * 0.1);
        rotate(frameCount / 1.0);
        star(0, 0, 200, 50, 100);
        pop();

        function star(x, y, radius1, radius2, npoints) {
            var angle = TWO_PI / npoints;
            var halfAngle = angle / 2.0;
            beginShape();
            for (var a = 0; a < TWO_PI; a += angle) {
                var sx = x + cos(a) * radius2;
                var sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
            endShape(CLOSE);
        }
        push();
        translate(width * 0.5, height * 0.3);
        rotate(frameCount / 1.0);
        star(0, 0, 200, 100, 100);
        pop();

        function star(x, y, radius1, radius2, npoints) {
            var angle = TWO_PI / npoints;
            var halfAngle = angle / 2.0;
            beginShape();
            for (var a = 0; a < TWO_PI; a += angle) {
                var sx = x + cos(a) * radius2;
                var sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
            endShape(CLOSE);
        }
        push();
        translate(width * 0.1, height * 0.4);
        rotate(frameCount / 1.0);
        star(0, 0, 200, 40, 100);
        pop();

        function star(x, y, radius1, radius2, npoints) {
            var angle = TWO_PI / npoints;
            var halfAngle = angle / 2.0;
            beginShape();
            for (var a = 0; a < TWO_PI; a += angle) {
                var sx = x + cos(a) * radius2;
                var sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
            endShape(CLOSE);
        }
        push();
        translate(width * 0.3, height * 0.9);
        rotate(frameCount / 1.0);
        star(0, 0, 200, 500, 100);
        pop();

        function star(x, y, radius1, radius2, npoints) {
            var angle = TWO_PI / npoints;
            var halfAngle = angle / 2.0;
            beginShape();
            for (var a = 0; a < TWO_PI; a += angle) {
                var sx = x + cos(a) * radius2;
                var sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
            endShape(CLOSE);
        }
        push();
        translate(width * 0.7, height * 0.7);
        rotate(frameCount / 1.0);
        star(0, 0, 200, 150, 100);
        pop();

        function star(x, y, radius1, radius2, npoints) {
            var angle = TWO_PI / npoints;
            var halfAngle = angle / 2.0;
            beginShape();
            for (var a = 0; a < TWO_PI; a += angle) {
                var sx = x + cos(a) * radius2;
                var sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
            endShape(CLOSE);
        }
    }



    playSound(sound23, 87) // W //  
    if (sound23.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 0.1);
        ellipse(100, 100, 850, 50, 200);
        pop();
    }

    playSound(sound20, 84) // T //
    if (sound20.isPlaying() == true) {
        push()
        fill(255, 0, 0, 35)
        stroke(255, 0, 0)
        ellipse(width * 0.8, height * 0.7, 2.5 * r, 2.5 * r)
        pop()

        push()
        fill(255, 0, 0, 35)
        stroke(255, 0, 0)
        ellipse(width * 0.5, height * 0.5, r, r)
        pop()


        push()
        fill(255, 0, 0, 35)
        stroke(255, 0, 0)
        ellipse(width * 0.3, height * 0.3, 1.5 * r, 1.5 * r)
        pop()


        push()
        fill(255, 0, 0, 35)
        stroke(255, 0, 0)
        ellipse(width * 0.4, height * 0.9, 2 * r, 2 * r)
        pop()

    }
    playSound(sound21, 85); // U //
    if (sound21.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var longueur = map(sound21.currentTime(2), 0, // fait varier la longueur de la forme
            sound21.duration(), width, 50);
        fill(0);
        stroke(255)
        strokeWeight(10)
        rect(0, 0, 0.5 * width - longueur, height * 0.5);
        pop()

        push();
        translate(width * 0, height * 0);
        var longueur = map(sound21.currentTime(2), 0,
            sound21.duration(), width, 50);
        fill(0);
        stroke(255)
        strokeWeight(10)
        rect(0, 0, 0.5 * width - longueur, height * 0.5);
        pop()

        push();
        translate(width * 0, height * 0);
        var longueur = map(sound21.currentTime(2), 0,
            sound21.duration(), width, 50);
        fill(0);
        stroke(255)
        strokeWeight(10)
        rect(0, 0, longueur - 0.5 * width, height - 0.5 * height);
        pop()
    }
    playSound(sound22, 86); // V //
    if (sound22.isPlaying() == true) {
        push();
        var rms2 = sound22Amp.getLevel(); //Fait varier la taille de l'elipse selon l'amplitude du son
        var ellipseSize = map(rms2, 0, 0.5, 100, 300);
        stroke(255, 0, 0, 100);
        strokeWeight(10);
        fill(255, 255, 255);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize)
        pop();
        push();
        var rms2 = sound22Amp.getLevel();
        var ellipseSize = map(rms2, 10, 0.25, 100, 300);
        stroke(250, 250, 250, 50);
        strokeWeight(1200);
        fill(0, 0, 0, 0);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize)
        pop();
        push();
        var rms2 = sound22Amp.getLevel();
        var ellipseSize = map(rms2, 10, 0.25, 100, 300);
        stroke(255, 0, 0);
        strokeWeight(2000);
        fill(0, 0, 0, 0);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize)
        pop();
    }
    playSound(sound24, 88); // X //
    if (sound24.isPlaying() == true) {
        push();
        rect(60, 60, 300, 500)
        fill(0)
        stroke(255)
        pop()
        push();
        rect(800, 300, 500, 300)
        fill(0)
        stroke(255)
        pop()
        push();
        rect(350, 500, 500, 500)
        fill(0)
        stroke(255)
        pop()
        push();
        rect(1500, 100, 500, 300)
        fill(0)
        stroke(255)
        pop()
        push()
        rect(350, 500, 300, 300)
        fill(0)
        stroke(255)
        pop()
        push();
        rect(1700, 0, 200, 300)
        fill(0)
        stroke(255)
        pop()

    }
    playSound(sound25, 89); // Y //
    if (sound25.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 0.5);
        ellipse(20, 50, 50, 50, 1200);
        pop();
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 0.5);
        ellipse(200, 500, 50, 50, 1200);
        pop();
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 0.5);
        ellipse(70, 200, 50, 50, 1200);
        pop();
    }
    playSound(sound26, 90); // Z //
    if (sound26.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5)
        fill(255)
        rotate(frameCount / 1)
        rect(-15, -15, height * 0.3243, height * 0.3243);


        pop();
    }


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(0)
}