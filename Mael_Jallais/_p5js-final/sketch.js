/* 
 ___        _          _               
| _ \ __ _ | |_  __ _ | |_  __ _  _ __ 
|  _// _` ||  _|/ _` ||  _|/ _` || '_ \
|_|  \__,_| \__|\__,_| \__|\__,_|| .__/
                                 |_|   


// INFO        
// Module:           Projet final p5js (Code créatif)
// Date:            octobre 2019
// Auteur:           Maël Jallais
// Portfolio:        maeljallais.com

// LICENSE
// Effets sonores sont sous license Creative Commons venant du site notificationsounds.com
// sound12 - "This isn't you" par Kyle Dixon & Michael Stein remixé avec Ocenaudio
// sound15 - "Eleven" - Stranger Things par Kyle Dixon & Michael Stein remixé avec Ocenaudio
// sound20 - "Stock Still Going Down" - Valley of the Boom par Kyle Dixon & Michael Stein

// SOURCES D'AIDES
// https://github.com/b2renger/Introduction_p5js
// https://github.com/b2renger/p5js_codecreatif
// https://www.openprocessing.org/user/15033
// https://ateliernum.github.io/projet_patatap_1819/

// Made with love 

// READ ME
// Le sujet de mon Patatap est autour de l'abstration grâce a diverses formes géometriques tout en gardant une cohérence au niveau des couleurs. 
// Pour les effets sonores je me suis en grande partie inspiré des sons de notifications et interactifs.
*/

// Variables des sons
let sound01
let sound02
let sound03, sound03FFT
let sound04
let sound05, sound05FFT
let sound07
let sound08, sound08FFT
let sound09, xpos = [], ypos = [], xtarget = [], ytarget = []
let sound10, sound10FFT
let sound11
let sound12
let sound13
let sound14, sound14FFT
let sound15
let sound16, sound16FFT
let sound17, sound17FFT
let sound18
let sound19, sound19FFT
let sound20, sound20FFT
let sound21, sound21FFT, sound211, sound211FFT
let sound22, sound22Amp
let sound23, sound23FFT
let sound24, sound24FTT, sound241, sound241FTT
let sound25
let sound26

// Autres variables
let yoff = 0;
let yoff2 = 0;
let time = 0;
let xstart = 0
let ystart = 0
let slotSize = 300;
let marginX;
let marginY;
let rot, col, circle = 1000, freq = 1.00000, cont = 4; // Touche Y


// Chargement des sons (Touche: A - N)
function preload() {
    sound01 = loadSound("assets/beyond-doubt.wav") // A
    sound02 = loadSound("assets/bubbling-up.wav") // Z
    sound03 = loadSound("assets/la-chut.wav") // E
    sound04 = loadSound("assets/dropped-spinner.wav") // R
    sound05 = loadSound("assets/insight.wav") // T
    sound06 = loadSound("assets/out-of-space-dog.wav") // Y
    sound07 = loadSound("assets/decay.wav") // U 
    sound08 = loadSound("assets/engine.wav") // I
    sound09 = loadSound("assets/serious-strike.wav") // O
    sound10 = loadSound("assets/oringz-w447.wav") // P 
    sound11 = loadSound("assets/oringz-w446.wav") // Q
    sound12 = loadSound("assets/strang.wav") // S
    sound13 = loadSound("assets/fast-action.wav") // D 
    sound14 = loadSound("assets/happy-ending.wav") // F
    sound15 = loadSound("assets/eleven.wav") // G 
    sound16 = loadSound("assets/time-is-now.wav") // H 
    sound17 = loadSound("assets/oh-finally.wav") // J
    sound18 = loadSound("assets/oh-really.wav") // K
    sound19 = loadSound("assets/oringz-w424.wav") // L
    sound20 = loadSound("assets/dodoum.wav") // M
    sound21 = loadSound("assets/what-friends-are-for.wav") // W
    sound22 = loadSound("assets/sunny.wav") // X
    sound23 = loadSound("assets/you-have-new-message.wav") // C 
    sound24 = loadSound("assets/munchausen.wav") // V
    sound25 = loadSound("assets/hell-yeah-somewhat-calmer.wav") // B 
    sound26 = loadSound("assets/eventually.wav") // N 
}


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)

    // Variable des sons
    sound03FFT = new p5.FFT()
    sound03FFT.setInput(sound03);

    sound05FFT = new p5.FFT(0.90, 4096)
    sound05FFT.setInput(sound05);

    sound08FFT = new p5.FFT(0.8, 2048);
    sound08FFT.setInput(sound08);

    sound10FFT = new p5.FFT(0.90, 4096)
    sound10FFT.setInput(sound10);

    sound14FFT = new p5.FFT(0.90, 4096)
    sound14FFT.setInput(sound14);

    sound16FFT = new p5.FFT(0.8, 16)
    sound16FFT.setInput(sound13);

    sound17FFT = new p5.FFT()
    sound17FFT.setInput(sound17);

    sound19FFT = new p5.FFT()
    sound19FFT.setInput(sound19);

    sound21FFT = new p5.FFT(0.90, 4096)
    sound21FFT.setInput(sound21)
    sound211FFT = new p5.FFT(0.90, 4096)
    sound211FFT.setInput(sound211)

    sound22Amp = new p5.Amplitude()
	sound22Amp.setInput(sound22);
	sound22Amp.toggleNormalize();

    sound23FFT = new p5.FFT(0.8, 1024)
    sound23FFT.setInput(sound23);

    sound24FFT = new p5.FFT(0.90, 4096)
    sound24FFT.setInput(sound24);
    sound241FFT = new p5.FFT(0.90, 4096)
    sound241FFT.setInput(sound241);

    analyzer = new p5.Amplitude();



    // Boucle qui permet de définir des points d'arrivées et de départs d'éléments
    //coin en haut à gauche
    for (let i = 0; i < 50; i++) {
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        xtarget.push(random(width))
        ytarget.push(random(height))
    }
}

function draw() {
    background(226, 226, 240);

    // touche A
    playSound(sound01, 65)
    if (sound01.isPlaying() == true) {
        let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)
        fill(79, 0, 184)
        noStroke()
        ellipse(width * 0.5, height * 0.5, r, r)
    }


    // Touche Z
    playSound(sound02, 90)
    if (sound02.isPlaying() == true) {
        let r = map(sound02.currentTime(),
            0, sound02.duration() * 0.1,
            0, height * 0.1)
        r = constrain(r, 9, height * 0.5)

        let c = map(sound02.currentTime(),
            sound02.duration() * 0.3, sound02.duration(),
            0, height * 0.5
        )
        c = constrain(c, 0, height * 0.5)

        rectMode(CENTER)
        fill(255, 27, 130)
        noStroke() // noBorder
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
    }


    // Touche E
    playSound(sound03, 69)
    if (sound03.isPlaying() == true) {
        let wave = sound03FFT.waveform()
        noFill()
        strokeWeight(2)
        stroke(220, 21, 105); 
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -9, 9, height, 2)
            curveVertex(x, y)
        }
        endShape()
    }


    // Touche R
    playSound(sound04, 82)
    if (sound04.isPlaying() == true) {
        push()
        let angle = map(sound04.currentTime(),
            0, sound04.duration(),
            0, TWO_PI)
        rectMode(CENTER)
        noFill()
        strokeWeight(1);
        stroke(79, 141, 245); 
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, height * 0.25, height * 0.25)
        pop()
    }


    // Touche T
    playSound(sound05, 84)
    if (sound05.isPlaying() == true) {
        push()
        noFill()
        stroke(0, 166, 126)
        let wave = sound05FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1, 1, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)
        pop()
    }

    // Touche Y
    playSound(sound06, 89)
    if (sound06.isPlaying() == true) {
        push()
        translate(870, 500); // position
        rotate(radians(rot));
        ellipseMode(RADIUS);
        for (let i = 30; i < 500; i++) {
            circle = 450 + 50 * sin(millis()  * i);
            col = map(circle, 10, 250, 120, 60); // couleur
            r = map(circle, 20, 392, 5, 1.6);
            fill(2, 39, 290);
            noStroke();
            ellipse(circle * cos(i), circle * sin(i), r, r);
        }
        pop()
    }
        playSound(sound06, 89)
        if (sound06.isPlaying() == true) {
            push()
            translate(870, 500); // position
            rotate(radians(rot));
            ellipseMode(RADIUS);
            for (let i = 30; i < 500; i++) {
                circle = 450 + 50 * sin(millis()  * i);
                col = map(circle, 110, 220, 90, 30); // couleur
                r = map(circle, 120, 392, 5, 1.6);
                fill(2, 39, 290);
                noStroke();
                ellipse(circle * cos(i), circle * sin(i), r, r);
            }
            pop()
        }

    // Touche U
    playSound(sound07, 85)
    if (sound07.isPlaying() == true) {
        push()
        fill(2, random(02, 145), random(203, 231)) // couleur du fond aléatoire
        noStroke(); // Pas de bordure
        rect(0, 0, windowWidth / 2, windowHeight)
        pop()
    }


    // Touche I // 
    playSound(sound08, 73);
    if (sound08.isPlaying() == true) {
        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound08.currentTime(), 0, sound08.duration(), width, 50);
        fill(0);
        stroke(0);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.2, height * 0.3);
        var longueur = map(sound08.currentTime(), 0, sound08.duration(), width, 100);
        fill(0, 0);
        stroke(0, 0, 0);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.3, height * 0.4);
        var longueur = map(sound08.currentTime(), 0, sound08.duration(), width, 200);
        fill(0, 0);
        stroke(81, 91, 218);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.4, height * 0.5);
        var longueur = map(sound08.currentTime(), 0, sound08.duration(), width, 300);
        fill(0, 0);
        stroke(251, 0, 145);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.5, height * 0.6);
        var longueur = map(sound08.currentTime(), 0, sound08.duration(), width, 400);
        fill(0, 0);
        stroke(59, 171, 71);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.5, height * 0.7);
        var longueur = map(sound08.currentTime(), 0, sound08.duration(), width, 500);
        fill(0, 0);
        stroke(251, 178, 0);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.5, height * 0.8);
        var longueur = map(sound08.currentTime(), 0, sound08.duration(), width, 600);
        fill(0, 0);
        stroke(255, 99, 99);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.6, height * 0.2);
        var longueur = map(sound08.currentTime(), 0, sound08.duration(), width, 200);
        fill(0, 0);
        stroke(255, 170, 295);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();
    }


    // Touche O 
    playSound(sound09, 79)
    if (sound09.isPlaying() == true) {
        var t = map(sound09.currentTime(), 0, sound09.duration() * 1.60, 0, 1)
        var grey = map(sound09.currentTime(), sound09.duration() * 1.15, sound09.duration(), 1, 1)
        t = constrain(t, 1, 40, random(x), random(y))
        push()
        noFill()
        stroke(120, 175, 222);
        strokeWeight(3)
        for (var i = 0; i < 10; i++) {
            for (var i = 1; i < 20; i++) {
                var x = lerp(xpos[i], xtarget[i], t)
                var y = lerp(ypos[i], ytarget[i], t)
                rect(x, y, random(x), random(y))
            }
        }
        pop()
    }

    // Touche P
    playSound(sound10, 80);
    if (sound10.isPlaying() == true) {
       endShape(CLOSE)
       noFill()
       stroke(2, random(191, 145), random(145, 231)); 
       let wave = sound10FFT.waveform();
       beginShape()
       for (let i = 0; i < wave.length; i++) {
           let angle = map(i, 0, wave.length, 0, TWO_PI)
           let rad = map(wave[i], -.9, 3, 0, height)
           let x = width * 0.5 + rad * cos(angle)
           let y = height * 0.5 + rad * sin(angle)
           curveVertex(x, y)
       }
       endShape(CLOSE)
       pop()
    }

    // Touche Q
    playSound(sound11, 81) 
    if (sound11.isPlaying() == true) {
        push()
        translate(width*0.5, height*0.5)
        var rms = analyzer.getLevel()

        push();
        
        fill(255, 99, 99);
        noStroke(0);
        ellipse(width *0.25, height *0.25, 10 + rms * 1000, 10 + rms * 1000);
        pop();

        push();
        fill(255, 218, 145);
        noStroke(0);
        ellipse(-width *0.25, height *0.25, 10 + rms * 1000, 10 + rms * 1000);
        pop();

        push()
        fill(111, 231, 221);
        noStroke(0);
        ellipse(-   width*0.25 , -height *0.25, 10 + rms * 1000, 10 + rms * 1000);
        pop();

        push();
        fill(255, 186, 146);
        noStroke(0);
        ellipse(width *0.25, -height *0.25  , 10 + rms * 1000, 10 + rms * 1000);
        pop()
                
        pop()
    }


    // Touche S
    playSound(sound12, 83) 
    if (sound12.isPlaying() == true) {
        time += 0.005
        push()
        translate(width / 2, height / 2);
        let radius = 200;
        beginShape();
        noStroke()
        let xoff = 1;
        
        curveTightness(0.5)
        for (let a = 0; a <= TWO_PI; a = a+ PI * 0.05) {
            let offset = map(noise(time + xoff + yoff, cos(a) + 1, sin(a) + 1), 0, 1, -0, 200);

            let r3 = radius + offset;
            let x3 = r3 * cos(a);
            let y3 = r3 * sin(a);
            fill(2, random(100, 150), random(100, 150));
            curveVertex(x3, y3); // ou alors 20, 39

            if (a == 0) {

                xstart = x3
                ystart = y3
                //console.log(x3, y3)
            }
            xoff += 0.11;
            //ellipse(x3, y3, 10, 12);
        }
        curveVertex(xstart, ystart)

        endShape();
        yoff += .01;
        pop()
    }
    
    // Touche D
    playSound(sound13, 68) 
    if (sound13.isPlaying() == true) {
        push()
        var waveform = sound16FFT.waveform();
        fill(254, 89, 75);
        beginShape();
        stroke(120, 120, 255);
        strokeWeight(2);
        for (var i = 2; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 2, width);
            var y = map(waveform[i], -1, 1, 12, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }

    // Touche F
    playSound(sound14, 70) 
    if (sound14.isPlaying() == true) {
        endShape(CLOSE)
        noFill()
        stroke(2, random(191, 145), random(145, 231)); 
        let wave = sound14FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -.9, 3, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)
        pop()

    }

    // Touche G
    playSound(sound15, 71) 
    if (sound15.isPlaying() == true) {

        var radius = map(sound15.currentTime(), 0, sound15.duration(), 20, width);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        stroke(255, 73, 115);
        strokeWeight(1)
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius); // * equivaut à multiplié
        pop();

        var radius = map(sound15.currentTime(), 0, sound15.duration(), 25, width);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        stroke(255, 73, 115);
        strokeWeight(1)
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius); // * equivaut à multiplié
        pop();

        var radius = map(sound15.currentTime(), 0, sound15.duration(), width, 10);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        stroke(255, 73, 115);
        noFill();
        strokeWeight(1)
        // 2, random(90, 150), random(130, 20)
        ellipse(width * 0.5, height * 0.5, radius, radius); // * equivaut à multiplié
        pop();

        var radius = map(sound15.currentTime(), 0, sound15.duration(), height, 10);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        stroke(255, 73, 115);
        noFill();
        strokeWeight(1)
        // 2, random(90, 150), random(130, 20)
        ellipse(width * 0.5, height * 0.5, radius, radius); // * equivaut à multiplié
        pop();

        var radius = map(sound15.currentTime(), 0, sound15.duration(), height, 10);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        stroke(255, 73, 115);
        noFill();
        strokeWeight(1)
        // 2, random(90, 150), random(130, 20)
        ellipse(width * 0.2, height * 0.2, radius, radius); // * equivaut à multiplié
        pop();

        var radius = map(sound15.currentTime(), 0, sound15.duration(), height, 10);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        stroke(255, 73, 115);
        noFill();
        strokeWeight(1)
        // 2, random(90, 150), random(130, 20)
        ellipse(width * 0.4, height * 0.9, radius, radius); // * equivaut à multiplié
        pop();

        var radius = map(sound15.currentTime(), 0, sound15.duration(), height, 10);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        stroke(255, 73, 115);
        noFill();
        strokeWeight(1)
        // 2, random(90, 150), random(130, 20)
        ellipse(width * 0.71, height * 0.24, radius, radius); // * equivaut à multiplié
        pop();
    }

    // Touche H 
    playSound(sound16, 72) 
    if (sound16.isPlaying() == true) {
        push();
        var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        stroke(255, 73, 115);
        strokeWeight(2);
        noFill();
        // 2, random(90, 150), random(130, 20)
        ellipse(width * 0.5, height * 0.5, radius, radius); // * equivaut à multiplié
        pop();

        push();
        var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width * 0.9);
        stroke(255, 73, 115);
        strokeWeight(2);
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width * .8);
        stroke(255, 73, 115);
        noFill();
        strokeWeight(2);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        
        push();
        var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width * .7);
        stroke(255, 73, 115);
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width * .6);
        stroke(255, 73, 115);
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width * .5);
        stroke(255, 73, 115);
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width * .4);
        stroke(255, 73, 115);
        noFill();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        
        push();
        var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width * .1);
        stroke(255, 73, 115);
        fill(255, 73, 115, 50);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
    }

    // Touche J
    playSound(sound17, 74) 
    if (sound17.isPlaying() == true) {
        let wave = sound17FFT.waveform()
        noFill()
        strokeWeight(3)
        stroke(251, 158, 145)
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -9, 9, height, 2)
            curveVertex(x*1000, y)
        }
        endShape(CLOSE)
    }

    // Touche K
    playSound(sound18, 75) 
    if (sound18.isPlaying() == true) {
        push()
        stroke(2, random(120, 160), random(100, 233));
        strokeWeight(2)
        line(random(10, width), random(20*PI, height), random(10*2/20, width), random(100*200)) 
        pop()
    }

    // Touche L - Vague
    playSound(sound19, 76) 
    if (sound19.isPlaying() == true) {
        let wave = sound19FFT.waveform()
        noFill()
        strokeWeight(3)
        stroke(251, 158, 145)
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -23, 9, width, 2)
            curveVertex(x*1000, y)
        }
        endShape(CLOSE)
    }    
        playSound(sound19, 76) 
        if (sound19.isPlaying() == true) {
            let wave = sound19FFT.waveform()
            noFill()
            strokeWeight(3)
            stroke(171, 146, 255)
            beginShape()
            for (let i = 0; i < wave.length; i++) {
                let x = map(i, 0, wave.length, 0, width)
                let y = map(wave[i], -3*2, 9, height, 1*23)
                curveVertex(x*100, y)
            }
            endShape(CLOSE)
        }
        playSound(sound19, 76) 
        if (sound19.isPlaying() == true) {
            let wave = sound19FFT.waveform()
            noFill()
            strokeWeight(3)
            stroke(2, random(200, 210), random(180, 200));
            beginShape()
            for (let i = 0; i < wave.length; i++) {
                let x = map(i, 0, wave.length, 0, width)
                let y = map(wave[i], -2*1, 9, height, 1*23)
                curveVertex(x*100, y)
            }
            endShape(CLOSE)
        }
        playSound(sound19, 76) 
        if (sound19.isPlaying() == true) {
            let wave = sound19FFT.waveform()
            noFill()
            strokeWeight(3)
            stroke(2, random(130, 180), random(200, 230));
            beginShape()
            for (let i = 0; i < wave.length; i++) {
                let x = map(i, 0, wave.length, 0, width)
                let y = map(wave[i], -2*2, 9, height, 1*23)
                curveVertex(x*100, y)
            }
            endShape(CLOSE)
        }
        playSound(sound19, 76) 
        if (sound19.isPlaying() == true) {
            let wave = sound19FFT.waveform()
            noFill()
            strokeWeight(3)
            stroke(80, 91, 218);
            beginShape()
            for (let i = 0; i < wave.length; i++) {
                let x = map(i, 0, wave.length, 0, width)
                let y = map(wave[i], .01, 9, height, 1*23)
                curveVertex(x*100, y)
            }
            endShape(CLOSE)
        }

    // Touche M
    playSound(sound20, 77) 
    if (sound20.isPlaying() == true) {
        push();
        translate(width * 0.3, height * 0.2);
        var longueur = map(sound20.currentTime(), 0, sound20.duration(), width, 50);
        fill(80, 91, 218);
        stroke(80, 91, 218); 
        strokeWeight(2)
        rect(150, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.4, height * 0.2);
        var longueur = map(sound20.currentTime(), 0, sound20.duration(), width, 70);
        fill(237, 12, 238);
        stroke(80, 91, 218);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.5, height * 0.2);
        var longueur = map(sound20.currentTime(), 0, sound20.duration(), width, 80);
        noFill();
        stroke(181, 191, 218);
        strokeWeight(2)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.5, height * 0.2);
        var longueur = map(sound20.currentTime(), 0, sound20.duration(), width, 90);
        fill(0, 0);
        stroke(81, 91, 218);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

    }

    // Touche W  
    playSound(sound21, 87) 
    if (sound21.isPlaying() == true) {
    endShape(CLOSE)
       noFill()
       stroke(129, 5, 216) 
       let wave = sound21FFT.waveform();
       beginShape()
       for (let i = 0; i < wave.length; i++) {
           let angle = map(i, 0, wave.length, 0, TWO_PI)
           let rad = map(wave[i], -1, 3, 8, height)
           let x = width * 0.5 + rad * cos(angle)
           let y = height * 0.5 + rad * sin(angle)
           curveVertex(x, y)
       }
       endShape(CLOSE)
       pop()
    }

        playSound(sound21, 87) 
        if (sound21.isPlaying() == true) {
            endShape(CLOSE)
        noFill()
        stroke(129, 5, 216);
        let wave = sound211FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -.6, 3, 0, height)
            let x = width * 0.2 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)
        pop()
        }

        playSound(sound21, 87) 
        if (sound21.isPlaying() == true) {
            endShape(CLOSE)
        noFill()
        stroke(129, 5, 216) // add random color? 
        let wave = sound211FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -.6, 3, 0, height)
            let x = width * 0.8 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)
        pop()
        }

    // Touche X
    playSound(sound22, 88) 
    if (sound22.isPlaying() == true) {
        push();
		var lvl = sound22Amp.getLevel() * 400;
		var nsegment = 1000 // le nombre de segements
		var ncurrentsegment = (map(sound22.currentTime(), 0, sound22.duration(), 0, nsegment + 180))
		strokeWeight(4)
		for (var i = 0; i < ncurrentsegment; i++) {
			var h = map(i, 1, nsegment, 0, 145)
			stroke(h, 251, 180, lvl + 40)
			var angle = map(i, 0, nsegment, 0, TWO_PI);
			var x = width * 0.5 + height * 0.95 * cos(angle)
			var y = height * 0.5 + height * 0.95 * sin(angle)
			line(width * 0.5, height * 0.5, x, y)
		}
		pop()
    }

    // Touche C
    playSound(sound23, 67) 
    if (sound23.isPlaying() == true) {
        push()
        let waveform = sound23FFT.waveform();
        noFill();
        beginShape();
        stroke(180, 91, 218);
        strokeWeight(1.4);
        for (let i = 12; i < waveform.length; i++) {
            let x = map(i, 14, waveform.length, 9, width);
            let y = map(waveform[i], -1, 1, 3, height);
            curveVertex(x, y);
        }
        endShape();

        push();
        fill(80, 91, 218);
        triangle(340, 240, 80, 180);
        fill(180, 91, 218);
        triangle(340, 800, 80, 80);
        fill(180, 91, 218);
        triangle(380, 800, 880, 80);
        fill(180, 91, 218);
        strokeWeight(3);
        triangle(1380, 800, 129, 80);

        pop()
        

    }

     // Touche V
     playSound(sound24, 86) 
     if (sound24.isPlaying() == true) {
        endShape(CLOSE)
        noFill()
        stroke(251, 0, 145) 
        let wave = sound24FFT.waveform();
        beginShape()
        for (let i = 1; i < wave.length; i++) {
            let angle = map(i, 4, wave.length, 3, TWO_PI)
            let rad = map(wave[i], 1, -2, 1, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.65 + rad * sin(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)
        pop()
     }

    // Touche B
    playSound(sound25, 66) 
    if (sound25.isPlaying() == true) {
        push()
        let angle = map(sound25.currentTime(),
            0, sound25.duration(),
            10, TWO_PI)
        rectMode(CENTER)
        noFill()
        stroke(79, 141, 245)
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(100, 200, height * 0.25, height * 0.25)
        pop()
    }

    playSound(sound25, 66) 
    if (sound25.isPlaying() == true) {
        push()
        let angle = map(sound25.currentTime(),
            height, sound25.duration(),
            width, TWO_PI)
        rectMode(CENTER)
        noFill()
        stroke(79, 141, 245)
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(800, 100, height * 0.25, height * 0.25)
        pop()
    }

    playSound(sound25, 66) 
    if (sound25.isPlaying() == true) {
        push()
        let angle = map(sound25.currentTime(),
            height, sound25.duration(),
            width, TWO_PI)
        rectMode(CENTER)
        noFill()
        stroke(79, 141, 245)
        translate(width * 0.3, height * 0.3)
        rotate(angle)
        rect(800, 100, height * 0.15, height * 0.25)
        pop()
    }

    // Touche N
    playSound(sound26, 78) 
    if (sound26.isPlaying() == true) {
        push()
        let nsegment = 1000
        let ncurrentsegment = (map(sound26.currentTime(), 0, sound26.duration(), 0, nsegment + 1))
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke(111,231, 221);
            strokeWeight(1)
            let angle = map(i*20, height*39, nsegment, width*49, TWO_PI);
            let x = width * 0.130 + height * 0.45 * cos(angle);
            let y = height * 0.95 + height * 0.145 * sin(angle);
            line(width * 0.75, height * 0.25, x, y);
        }
        pop()
    }


    function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

    function windowResized() {
        resizeCanvas(windowWidth, windowHeight)
    }
}