let sound01
let sound02
let sound03
let sound03FFT
let sound04
let sound05
let sound05FFT
let sound06
let sound07
let sound07FFT
let sound08
let sound09
let totalPts = 300;
let steps = totalPts + 1;
let sound10
let sound11
let sound11FFT

let sound12
var w;
var theta = 0.0;
var amplitude = 75.0;
var period = 500.0;
var dx;
var yvalues;
var xspacing = 30;


let sound13
let sound13FFT

let sound14
let xpos = []
let ypos = []
let xtarget = []
let ytarget = []
let nellipse = 50;


let sound15
let sound16
let sound16FFT
let sound17

let pg
let xposA = 0
let yposA = 0
let xdirA = 5
let ydirA = 5

let sound18
let sound18FFT

let sound19
let sound20
let sound21
let sound21FFT

let sound22
let a;

let sound23
let sound24
let sound24FFT
let sound25
let sound26

let totalPts1 = 300;
let steps1 = totalPts1 + 1;


function preload() {
    soundFormats('wav');
    sound01 = loadSound('assets2/71_FingerSnap_SP_194_01.wav');
    sound02 = loadSound('assets2/71_HatOpenDigi_SP_194_01.wav');
    sound03 = loadSound('assets2/71_KickFX_SP_194_01.wav');
    sound04 = loadSound('assets2/71_SubSlide_SP_194_01.wav');
    sound05 = loadSound('assets2/90_Bbm_EvlvSynth_SP_194_01.wav');
    sound06 = loadSound('assets2/Kick_03_665.wav');
    sound07 = loadSound('assets2/115_MiraRehBeat_02_665.wav');
    sound08 = loadSound('assets2/115_MiraRehBeat_03_665.wav');
    sound09 = loadSound('assets2/120_D_D7SpaceArp_01_665.wav');
    sound10 = loadSound('assets2/120_D_DsusSweepArp_02_665.wav');
    sound11 = loadSound('assets2/120_D_PikeBass_01_665.wav');
    sound12 = loadSound('assets2/120_F_ObPad_01_665.wav');
    sound13 = loadSound('assets2/125_DrumLoop_SP_194_01.wav');
    sound14 = loadSound('assets2/128_Am_HypeSoftArp_01_665.wav');
    sound15 = loadSound('assets2/128_Am_SubtleChords_02_665.wav');
    sound16 = loadSound('assets2/142_F_FilteredPad_SP_194_02.wav');
    sound17 = loadSound('assets2/142_G_RhythmcSynth_194_02.wav');
    sound18 = loadSound('assets2/142_Gm_ChoppyPizz_SP_194_01.wav');
    sound19 = loadSound('assets2/D_DroneShortBass_01_665.wav');
    sound20 = loadSound('assets2/D_FastEnvT1LongBass_01_665.wav');
    sound21 = loadSound('assets2/D_SmoothEnvShortBass_01_665.wav');
    sound22 = loadSound('assets2/D_SwellSusPortaUpFX_01_665.wav');
    sound23 = loadSound('assets2/Dm_Dm7MemoryChorusChrd_01_665.wav');
    sound24 = loadSound('assets2/FrenchManglerFX_01_665.wav');
    sound25 = loadSound('assets2/ReversePhaseFX_01_665.wav');
    sound26 = loadSound('assets2/128_D_StickyBass_01_665.wav')

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0, 255, 255)

    pixelDensity(1)
    pg = createGraphics(windowWidth, windowHeight)
    pg.pixelDensity(1)

    sound03FFT = new p5.FFT()
    sound03FFT.setInput(sound03)

    sound05FFT = new p5.FFT(0.8, 16)
    sound05FFT.setInput(sound05)

    sound06FFT = new p5.FFT(0.8, 16)
    sound06FFT.setInput(sound06)

    sound07FFT = new p5.FFT()
    sound07FFT.setInput(sound07)



    for (var i = 0; i < nellipse; i++) {
        // ajouter des éléments au dessus de notre canvas
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    analyzer = new p5.Amplitude(0.15); // analyse : analyseur de volume
    analyzer.setInput(sound07);
    analyzer.toggleNormalize();

    sound11FFT = new p5.FFT()
    sound11FFT.setInput(sound11)

    w = width + 12;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));

    a = height * 0.25;
    b = height * 0.75;

    sound13FFT = new p5.FFT()
    sound13FFT.setInput(sound13)

    sound15Amp = new p5.Amplitude();
    sound15Amp.setInput(sound15);

    sound18FFT = new p5.FFT(0.8, 16)
    sound18FFT.setInput(sound18)

    sound16FTT = new p5.FFT()
    sound16FTT.setInput(sound16)

    sound21FFT = new p5.FFT()
    sound21FFT.setInput(sound21)

    sound24FFT = new p5.FFT()
    sound24FFT.setInput(sound24)



}

function draw() {
    background(0, 255, 255)

    //touche A
    playSound(sound01, 65)
    if (sound01.isPlaying() == true) {

        push()
        rectMode(CENTER)

        push()
        noStroke()
        fill(255, 0, 255, 51)
        rect(width * 0.5, height * 0.5, width, height)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 102)
        rect(width * 0.5, height * 0.5, width * 0.8, height * 0.8)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 153)
        rect(width * 0.5, height * 0.5, width * 0.6, height * 0.6)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 204)
        rect(width * 0.5, height * 0.5, width * 0.4, height * 0.4)
        pop()

        push()
        noStroke()
        fill(255, 0, 255)
        rect(width * 0.5, height * 0.5, width * 0.2, height * 0.2)
        pop()

        pop()
    }

    //touche Z
    playSound(sound02, 90)
    if (sound02.isPlaying() == true) {
        push()
        rectMode(CENTER)
        let angle = map(sound02.currentTime(), 0, sound02.duration(), 0, TWO_PI)
        fill(255, 0, 255)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, width * 0.25, height * 0.25)
        pop()
    }

    //touche E
    playSound(sound03, 69)
    if (sound03.isPlaying() == true) {
        push()
        noStroke()
        noFill()
        stroke(255, 0, 255)
        strokeWeight(10)
        let wave = sound03FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1, 1, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)
    }

    //touche R
    playSound(sound04, 82)
    if (sound04.isPlaying() == true) {
        push()
        var radius = map(sound04.currentTime(), 0, sound04.duration(), 50, width)
        fill(255, 0, 255, 150)
        noStroke()
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop()
    }

    //touche T
    playSound(sound05, 84)
    if (sound05.isPlaying() == true) {
        push()
        sound05FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound05FFT.getEnergy("bass")

        push()
        fill(255, 0, 255, nrj1)
        noStroke()
        translate(0, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.5, width * 0.5)
        pop()

        push()
        fill(255, 0, 255, 50)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 1.25, nrj1 * 1.25)
        pop()

        push()
        fill(255, 0, 255, nrj1)
        noStroke()
        translate(width, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.5, width * 0.5)
        pop()

        pop()
    }
    //touche Y
    playSound(sound06, 89)
    if (sound06.isPlaying() == true) {


        push();
        var rad = map(sound06.currentTime(), 0, sound06.duration(), 20, width)
        noFill()
        stroke(255, 0, 255)
        strokeWeight(15)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();

        noStroke()
        fill(255, 0, 255)
        ellipse(width * 0.5, height * 0.5, 80, 80);
    }
    //touche U
    playSound(sound07, 85)
    if (sound07.isPlaying() == true) {
        push()
        sound07FFT.analyze();
        rectMode(CENTER);
        var nrj4 = sound07FFT.getEnergy("bass");

        noFill()
        stroke(255, 0, 255)
        strokeWeight(7)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj4 * 2, nrj4 * 2)

        pop()

    }

    //touche I
    playSound(sound08, 73)
    if (sound08.isPlaying() == true) {
        push();
        from = color(255, 0, 255);
        to = color(255, 0, 255);
        stroke(255, 0, 255); //couleur de notre contour
        strokeWeight(1) // taille de notre contour
        for (var i = 0; i < 2; i++) {

            fill(to);
            quad(random(500, 750), random(height),
                random(500, 750), random(height),
                random(500, 750), random(height),
                random(500, 750), random(height));
        }
        frameRate(50);
        pop();

    }

    //touche O
    playSound(sound09, 79)
    if (sound09.isPlaying() == true) {
        push();
        var rand = 0;
        stroke(255, 0, 255)
        strokeWeight(15);
        for (var i = 1; i < steps; i++) {
            point((width / steps) * i, (height / 2) + random(-rand, rand));
            rand += random(-5, 5);
        }
        pop();
    }

    //touche P
    playSound(sound10, 80)
    if (sound10.isPlaying() == true) {
        var nsegment = 96
        var ncurrentsegment = (map(sound10.currentTime(), 0, sound10.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255, 0, 255, 100);
            strokeWeight(10)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.4 * cos(angle);
            var y = height * 0.5 + height * 0.4 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }

        for (var i = 0; i < ncurrentsegment; i++) {
            fill(255, 0, 255, 100);
            noStroke();
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(x, y, 30, 30);
        }

    }

    //touche Q
    playSound(sound11, 81)
    if (sound11.isPlaying() == true) {

        push()
        sound11FFT.analyze();
        rectMode(CENTER);
        let nrj5 = sound11FFT.getEnergy("bass")

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(0, 0)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(width * 0.25, 0)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(width * 0.5, 0)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(width * 0.75, 0)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(width, 0)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(0, height)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(width * 0.25, height)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(width * 0.5, height)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(width * 0.75, height)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()

        push()
        noStroke()
        fill(255, 0, 255, 180)
        translate(width, height)
        rect(0, 0, nrj5 * 2.5, nrj5 * 2.5)
        pop()
        pop()
    }



    //touche S
    playSound(sound12, 83)
    if (sound12.isPlaying() == true) {

        calcWave();
        renderWave();


    }



    //touche D
    playSound(sound13, 68)
    if (sound13.isPlaying() == true) {

        push()
        sound13FFT.analyze();
        let nrj6 = sound13FFT.getEnergy("bass")

        push()
        rectMode(CENTER)
        push()
        fill(255, 0, 255)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj6 * 4, nrj6 * 0.25)
        pop()


        push()
        fill(255, 0, 255)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj6 * 0.25, nrj6 * 4)
        pop()
        pop()

        push()
        fill(255, 0, 255)
        noStroke()
        ellipse(width * 0.5, height * 0.5, nrj6, nrj6)
        pop()

        pop()
    }


    //touche F
    playSound(sound14, 70)
    if (sound14.isPlaying() == true) {
        push()
        var t = map(sound14.currentTime(), 0, sound14.duration(), 0, 1)
        //var grey = map(sound14.currentTime(), sound14.duration() * 0.75, sound14.duration(), 255, 180)
        t = constrain(t, 0, 1)
        //grey = constrain(grey, 180, 255)
        fill(255, 0, 255, 175)
        noStroke()
        for (var i = 0; i < nellipse; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 100, 100)
        }
        pop()
    }
    //touche G

    playSound(sound15, 71)
    push()
    if (sound15.isPlaying() == true) {
        push();
        var amplitude = sound15Amp.getLevel();
        var whiteLevel = map(amplitude, 0, 1, 155, 255); // map(valeur à transformer, sa valeur min, sa valeur max, la valeur min à lui attribuer, sa valeur max à lui attribuer)
        //la couleur dépend du niveau sonore du son
        noStroke();
        fill(255, 0, 255, whiteLevel);
        rect(0, 0, width, height);
        pop();
    }
    pop()

    //touche H
    push()
    playSound(sound16, 72)
    if (sound16.isPlaying() == true) {
        let wave = sound16FTT.waveform();
        noFill()
        stroke(255, 0, 255)
        strokeWeight(10)
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape()

    }
    pop()

    //touche J
    playSound(sound17, 74)
    if (sound17.isPlaying() == true) {
        push()
        xposA += xdirA
        yposA += ydirA
        if (xposA > width || xposA < 0) {
            xdirA *= -1
        }
        if (yposA > height || yposA < 0) {
            ydirA *= -1
        }

        pg.noStroke()
        pg.fill(255, 0, 255)
        pg.ellipse(xposA, yposA, 50, 50)
        image(pg, 0, 0, width, height)
        pop()
        push()

    } else {

        pg = createGraphics(windowWidth, windowHeight)
        pg.pixelDensity(1)

        xposA = random(width)
        yposA = random(height)
        xdirA = random(1, 200)
        ydirA = random(1, 200)
        pop()
    }

    //touche K
    playSound(sound18, 75)
    if (sound18.isPlaying() == true) {
        push()
        sound18FFT.analyze();
        var nrj3 = sound18FFT.getEnergy("treble")
        var alpha = map(nrj3, 140, 190, 150, 255)
        noStroke()
        fill(255, 0, 255, alpha)
        rect(0, 0, width / 2, height / 2)
        rect(width / 2, height / 2, width / 2, height / 2)
        pop()
    }

    //touche L
    playSound(sound19, 76)
    if (sound19.isPlaying() == true) {

        push();
        var rad = map(sound19.currentTime(), 0, sound19.duration(), 50, width)
        rectMode(CENTER)

        push()
        noFill()
        stroke(255, 0, 255)
        strokeWeight(25);
        rect(0, 0, rad, rad)
        pop()

        push()
        noFill()
        stroke(255, 0, 255)
        strokeWeight(25);
        rect(width, 0, rad, rad)
        pop()

        push()
        noFill()
        stroke(255, 0, 255)
        strokeWeight(25);
        rect(0, height, rad, rad)
        pop()

        push()
        noFill()
        stroke(255, 0, 255)
        strokeWeight(25);
        rect(width, height, rad, rad)
        pop()



        pop();


    }
    //touche M
    playSound(sound20, 77)
    if (sound20.isPlaying() == true) {
        noStroke()
        push();
        var long = map(sound20.currentTime(), 0, sound20.duration(), 25, width)



        rectMode(CENTER)
        fill(255, 0, 213)
        rect(width / 2, height / 2, long, 5);
        noStroke();

        fill(255, 0, 213, 175)
        rect(width / 2, height / 3, long, 5);
        noStroke();

        fill(255, 0, 213, 175)
        rect(width / 2, height / 1.5, long, 5);
        noStroke();



        pop();
    }
    //touche W
    playSound(sound21, 87)

    if (sound21.isPlaying() == true) {
        push()
        sound21FFT.analyze();
        var nrj2 = sound21FFT.getEnergy("bass")

        push()
        fill(255, 0, 255)
        noStroke()
        translate(width * 0.30, height * 0.5)
        ellipse(0, 0, nrj2, nrj2)
        pop()

        push()
        fill(255, 0, 255)
        noStroke()
        translate(width * 0.7, height * 0.5)
        ellipse(0, 0, nrj2, nrj2)
        pop()

        push()
        fill(255, 0, 255)
        noStroke()
        translate(width * 0.5, height * 0.15)
        ellipse(0, 0, nrj2, nrj2)
        pop()

        push()
        fill(255, 0, 255)
        noStroke()
        translate(width * 0.5, height * 0.85)
        ellipse(0, 0, nrj2, nrj2)
        pop()
    }

    //touche X
    playSound(sound22, 88)
    if (sound22.isPlaying() == true) {
        push()
        stroke(255, 0, 255);
        strokeWeight(10);

        //background(51);
        line(0, a, width, a);
        a = a - 1;
        if (a < 0) {
            a = height;
        }

        line(0, b, width, b);
        b = b + 1;
        if (b > height) {
            b = 0;
        }
        pop()
    }

    //touche C
    playSound(sound23, 67)
    if (sound23.isPlaying() == true) {
        push()
        rectMode(CENTER)
        let angle1 = map(sound23.currentTime(), 0, sound23.duration(), 0, TWO_PI)
        let move = map(sound23.currentTime(), 0, sound23.duration(), 0, width * 1.75)
        fill(255, 0, 255)
        noStroke()
        translate(move, height * 0.5)
        rotate(angle1)
        rect(0, 0, width * 0.1, height * 0.25)
        pop()
    }

    //touche V
    playSound(sound24, 86)
    if (sound24.isPlaying() == true) {
        push()
        sound24FFT.analyze();
        rectMode(CENTER)
        var nrj7 = sound24FFT.getEnergy("bass")

        push()
        noStroke()
        fill(255, 0, 255, nrj7)
        translate(width * 0.5, height)
        rect(0, 0, width, nrj7 * 5)
        pop()

        pop()
    }

    //touche B
    playSound(sound25, 66)
    if (sound25.isPlaying() == true) {
        let nsegment1 = 300
        let ncurrentsegment1 = (map(sound25.currentTime(), 0, sound25.duration(), 0, nsegment1 + 1))

        push()
        for (let i = 0; i < ncurrentsegment1; i++) {
            stroke(255, 0, 255, 50);
            strokeWeight(10)
            let angle1 = map(i, 1, nsegment1, 0, PI);
            let x = width + height * 18.5 * cos(angle1);
            let y = height * 0.5 + height * 0.5 * sin(angle1);
            line(0, 0, x, y);
        }
        pop()
    }

    //touche N
    playSound(sound26, 78)
    if (sound26.isPlaying() == true) {
        push();
        var rand = 0;
        stroke(255, 0, 255)
        strokeWeight(15);
        for (var i = 2; i < steps1; i++) {
            point((width / steps1) * i, (height / 2) + random(-rand, rand));
            rand += random(-900, 900);
        }
        pop();
    }
}

function calcWave() {

    theta += 0.02;


    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}

function renderWave() {
    noStroke();
    fill(255, 0, 255);

    for (var x = 0; x < yvalues.length; x++) {
        ellipse(x * xspacing, height / 2 + yvalues[x], 25, 25);

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