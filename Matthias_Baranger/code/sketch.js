var sound;
var sound_effect;

var sound1;
var sound1FFT;

var sound2;
var sound2FFT;

var sound4;
var sound4FFT;

var sound6;
var sound6Amp;

var sound26;
var sound26FFT;

var sound7;
var sound7FFT;

var sound3;
var sound3Amp;

var sound9;
var sound9FFT;

var sound10;
var sound10FFT;

var sound11;
var sound11FFT;

var sound13;
var sound13Amp;

var sound15;
var sound15FFT;

var sound16;
var sound16FFT;

var sound20;

var sound22;
var sound22FFT;

var sound23;
var sound23FFT;

var sound24;
var sound24FFT;

var sound26;

var xpos = []
var ypos = []
var xtarget = []
var ytarget = []
var pg;

var slotSize = 200;
var marginX
var marginY
let col = ["#fa86be",  "#9aebed", "#f6f5f5", "#3bb4c1"]
let n = 10
let seed

var diameter;
var angle1 = 0;
var angle2 = 0;

var a = 0.0;
var s = 0.0;





function preload() {
    soundFormats('wav')
    sound1 = loadSound('assets/The_Hookup_Plan_Plan_Coeur_Jules_music_for_Elsa_-_Close_To_Me_no_spoilers2.wav')
    sound2 = loadSound('assets/younotus-janieck-senex-narcotic3.wav')
    sound3 = loadSound('assets/486943__mattix__aah.wav')
    sound4 = loadSound('assets/96001__gunnbladez__100-phunkd-drums-01.wav')
    sound5 = loadSound('assets/98988__gunnbladez__100-crisp-classic-drums-01.wav')
    sound6 = loadSound('assets/383902__deleted-user-7146007__reverse-splash-cymbal.wav')
    sound7 = loadSound('assets/486660__thepodcastdoctor__diesel-horn-02.wav')
    sound8 = loadSound('assets/888_-_CREEPERS2.wav')
    sound9 = loadSound('assets/younotus-janieck-senex-narcotic1.wav')
    sound10 = loadSound('assets/190613__goup-1__drums.wav')
    sound17 = loadSound('assets/237607__jacksonmiller0__glitch-01.wav')
    sound12 = loadSound('assets/343931__reitanna__sing-hoo.wav')
    sound13 = loadSound('assets/888_-_CREEPERS1.wav')
    sound14 = loadSound('assets/The_SIDH_-_Iridium5.wav')
    sound15 = loadSound('assets/332711__harleyglitch__glitch.wav')
    sound16 = loadSound('assets/164833__tim-kahn__d-train.wav')
    sound11 = loadSound('assets/The_Hookup_Plan_Plan_Coeur_Jules_music_for_Elsa_-_Close_To_Me_no_spoilers1.wav')
    sound18 = loadSound('assets/The_SIDH_-_Iridium1.wav')
    sound19 = loadSound('assets/333360__harlack__oh-my-god.wav')
    sound20 = loadSound('assets/The_SIDH_-_Iridium2.wav')
    sound21 = loadSound('assets/456779__spaciecat__glitch-6-spindown.wav')
    sound22 = loadSound('assets/459895__anarkya__sh01a-bass-drum-004.wav')
    sound23 = loadSound('assets/The_SIDH_-_Iridium3.wav')
    sound24 = loadSound('assets/The_SIDH_-_Iridium4.wav')
    sound25 = loadSound('assets/888_-_CREEPERS2.wav')
    sound26 = loadSound('assets/younotus-janieck-senex-narcotic2.wav')
    
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    
    sound_effect = new p5.Amplitude();
    sound_effect.setInput(sound);
    
    var amp = sound_effect.getLevel();

    sound1FFT = new p5.FFT(0.8, 16);
    sound1FFT.setInput(sound1);

    sound2FFT = new p5.FFT(0.8, 16);
    sound2FFT.setInput(sound2);

    sound4FFT = new p5.FFT(0.8, 16);
    sound4FFT.setInput(sound4);

    sound6Amp = new p5.Amplitude();
    sound6Amp.setInput(sound6);
    
    sound26FFT = new p5.FFT(0.8, 16);
    sound26FFT.setInput(sound26);

    sound7FFT = new p5.FFT(0.8, 16);
    sound7FFT.setInput(sound7);

    sound3Amp = new p5.Amplitude();
    sound3Amp.setInput(sound3);

    sound9FFT = new p5.FFT(0.8, 16);
    sound9FFT.setInput(sound9);

    sound10FFT = new p5.FFT(0.8, 1024);
    sound10FFT.setInput(sound10);

    sound11FFT = new p5.FFT(0.8, 1024);
    sound11FFT.setInput(sound11);

    sound13Amp = new p5.Amplitude();
    sound13Amp.setInput(sound13);

    sound15FFT = new p5.FFT(0.8, 1024);
    sound15FFT.setInput(sound15);
    
    sound16FFT = new p5.FFT(0.8, 1024);
    sound16FFT.setInput(sound16);

    sound24FFT = new p5.FFT(0.8, 1024);
    sound24FFT.setInput(sound24);

    sound23FFT = new p5.FFT(0.8, 1024);
    sound23FFT.setInput(sound23);

    sound22FFT = new p5.FFT(0.8, 1024);
    sound22FFT.setInput(sound22);
    
    for (var i = 0; i < 50; i++) {
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        xtarget.push(random(width))
        ytarget.push(random(height))
    }
    pixelDensity(1)
    pg = createGraphics(windowWidth, windowHeight)
    pg.pixelDensity(1)
    
}

function draw() {
    background(0);

    //Touche A
    playSound(sound1, 65)
    if (sound1.isPlaying() == true) {
        push()
        phase = 6;
        speed = 0.1;
        maxCircleSize = 100;
        numRows = 40;
        numCols = 40;
        numStrands = 15;
        noStroke();

        colorA = color(70, 150, 255, 80);
        colorB = color(09, 226, 212, 80);
        phase = frameCount * speed;

        for (var strand = 10; strand < numStrands; strand += 1) {
            var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

            for (var col = 0; col < numCols; col += 1) {
                var colOffset = map(col, 0, numCols, 0, TWO_PI);
                var x = map(col, 0, numCols, 10, width - 50);

                for (var row = 0; row < numRows; row += 1) {
                    var y = height / 1.5 + row * 10 + sin(strandPhase + colOffset) * 50;
                    var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
                    var circleSize = sizeOffset * maxCircleSize;

                    fill(lerpColor(colorA, colorB, row / numRows));
                    noStroke();

                    ellipse(x, y, circleSize, circleSize);

                }
            }
        }

        pop()
        
    }

    //Touche B
    playSound(sound2, 66);
    if (sound2.isPlaying() == true) {

        sound2FFT.analyze();
        rectMode(CENTER);
        var long = map(sound2.currentTime(), 0, sound2.duration(), 0, width)

        push()
        noFill();
        stroke(0, 253, 255)
        rect(200, 800, 150, long, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(700, -50, 200, long, 3);

        pop();

        push()
        noFill();
        stroke(0, 253, 255)
        rect(1300, -450, 80, long, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(long, 450, 160, 100, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(1100, long, 160, 100, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(0, 200, long, 100, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(300, long, 200, 200, 3);

        pop();
        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(1500, 550, long, 200, 3);
        noStroke();
        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(500, -250, long, 200, 3);

        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(900, 850, 200, long, 3);

        pop();
        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(long, -350, 200, 350, 3);
        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(400, long, 240, long, 3);
        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(800, long, long, 100, 3);
        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(800, 200, long, long, 3);
        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(1400, long, 200, 350, 3);
        pop();
        
        
    }
    
     //Touche C
    playSound(sound3, 67)
    if (sound3.isPlaying() == true) {
        push();
        var amplitude = sound3Amp.getLevel();
        var whiteLevel = map(amplitude, 0, 0.4, 0, 255); 
        noStroke();
        fill(whiteLevel, whiteLevel, whiteLevel);
        rect(0, 0, width, height);
        pop();
    }

    //Touche D
    playSound(sound4, 68)
    if (sound4.isPlaying() == true) { 
        push()
        var waveform = sound4FFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(245, 198, 8);
        strokeWeight(50);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        push()
        var waveform = sound4FFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(229, 19, 12);
        strokeWeight(40);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -2, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        push()
        var waveform = sound4FFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(243, 11, 116);
        strokeWeight(20);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -3, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        push()
        var waveform = sound4FFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(243, 11, 215);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -4, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();
    }

    //Touche E
    playSound(sound5, 69)
    if (sound5.isPlaying() == true) {  
        push()
        diameter = height - 5

        var d1 = 10 + (sin(angle2) * diameter / 2) + diameter / 2;
        var d2 = 10 + (sin(angle2 + PI / 2) * diameter / 2) + diameter / 2;
        var d3 = 10 + (sin(angle2 + PI) * diameter / 2) + diameter / 2;
        // crée 3 variable d1, d2, d3, augmenter/diviser son diamètre
        noStroke();
        fill(255, 208, 81)
        
        noStroke()
        fill(255, 208, 81)
        ellipse(0, height / 2, d1, d1);

        noStroke()
        fill(255, 208, 81)
        ellipse(width / 2, height / 2, d2, d2);

        noStroke()
        fill(255, 208, 81)
        ellipse(width, height / 2, d3, d3);

        angle2 += 10;
        pop()
     
    }

    //Touche F
    playSound(sound6, 70)
    if (sound6.isPlaying() == true) {
        push();
        var rad = map(sound6.currentTime(), 0, sound6.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound6.currentTime(), 2, sound6.duration(), width, 1) //le chiffre apres le currentTime correspond à l'arrivée de l'animation sur l'écran apres un certain lapse de temps
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound6.currentTime(), 4, sound6.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound6.currentTime(), 6, sound6.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound6.currentTime(), 8, sound6.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound6.currentTime(), 10, sound6.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound6.currentTime(), 12, sound6.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound6.currentTime(), 14, sound6.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound6.currentTime(), 16, sound6.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound6.currentTime(), 18, sound6.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
    }

    //Touche G
    playSound(sound7, 71)
    if (sound7.isPlaying() == true) {
        push()
        var waveform = sound7FFT.waveform();
        noFill();
        beginShape();
        stroke(183, 53, 236); // waveform is mint
        strokeWeight(10);
         for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop()
        
    }

    //Touche H
    playSound(sound8, 72)
    if (sound8.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 1.0);
        star(0, 0, 2000, 40, 100);
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

    //Touche I
    playSound(sound9, 73)
    if (sound9.isPlaying() == true) {

        push()
        sound9FFT.analyze();
        var nrj1 = sound9FFT.getEnergy("bass")
        push()
        var taille = map(nrj1, 0, 210, 0, 30)
        noStroke()
        //La couleur évolue du rouge au vert
        fill(frameCount % 255, 255 - frameCount % 255, 0)
        //On affiche 100 cerlces allignés en lignes/colonnes
        for (var i = 0; i < 100; i++) {
            var xpos1 = (i % 10) * width * 0.10 + width * 0.05
            var ypos1 = int(i / 10) * height * 0.10 + height * 0.05
            ellipse(xpos1, ypos1, taille, taille)

        }
        pop()
        pop()
       
        


    }

    //Touche J
    playSound(sound10, 74)
    if (sound10.isPlaying() == true) {
        push();
        sound10FFT.analyze();
        ellipseMode(CENTER);
        var nrj2 = sound10FFT.getEnergy("bass");

        push();
        noStroke();
        fill(80, 200, 150, nrj2);
        translate(width * 0.5, height * 0.5);
        ellipse(0, 0, nrj2 * 3, nrj2 * 3); 
        pop();

        push();
        strokeWeight(nrj2);
        stroke(80, 255, 250, 200); 
        noFill();
        translate(width * 0.25, height * 0.25);
        ellipse(0, 0, width * 0.1, width * 0.1);
        pop();

        push();
        strokeWeight(nrj2);
        stroke(80, 255, 250, 200);
        noFill(); 
        translate(width * 0.75, height * 0.75);
        ellipse(0, 0, width * 0.1, width * 0.1);
        pop();
    }

    //Touche K
    playSound(sound11, 75)
    if (sound11.isPlaying() == true) {
        push();
        var angle = map(sound11.currentTime(), 0, sound11.duration(), 9, PI);
        translate(width * 0.2, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        stroke(183, 14, 251);
        noFill()
        strokeWeight(50);
        rect(0, 0, width * 2, height * 2);
        pop();

        push();
        var angle = map(sound11.currentTime(), 0, sound11.duration(), 9, PI);
        translate(width * 0.7, height * 0.2);
        rotate(angle);
        rectMode(CENTER);
        stroke(183, 14, 251);
        noFill();
        strokeWeight(50);
        rect(0, 0, width * 2, height * 2);
        pop();
        
    }

    //Touche L
    playSound(sound12, 76)
    if (sound12.isPlaying() == true) {
        push()
        var amp = sound_effect.getLevel()
        var whiteLevel = map(amp, 0, 1, 210, 255)

        noStroke()
        fill(whiteLevel)
        rect(0, 0, width, height)
        pop()
    }

    //Touche M
    playSound(sound13, 77)
    if (sound13.isPlaying() == true) {
        push()
        var amp18 = sound13Amp.getLevel();
        var rad18 = map(amp18, 0, 1, 120, height * 0.5)
        translate(width * 0.5, height * 0.5)
        var ang7 = map(sound13.currentTime(), 0, sound13.duration(), 0, PI)
        rectMode(CENTER)
        var xpos = width * 0.40 * cos(ang7)
        var ypos = height * 0.4 * sin(ang7)
        translate(xpos, ypos)
        rotate(ang7)
        stroke(255)
        fill(0,0,0,0)
        strokeWeight(5)
        rect(0, 0, rad18, rad18)
        pop()

        push()
        var amp18 = sound13Amp.getLevel();
        var rad18 = map(amp18, 0, 3, 80, height * 0.9)
        translate(width * 0.2, height * 0.3)
        var ang7 = map(sound13.currentTime(), 0, sound13.duration(), 0, PI)
        rectMode(CENTER)
        var xpos = width * 0.-70 * cos(ang7)
        var ypos = height * 0.8 * sin(ang7)
        translate(xpos, ypos)
        rotate(ang7)
        stroke(255)
        fill(0,0,0,0)
        strokeWeight(5)
        rect(0, 0, rad18, rad18)
        pop()

        push()
        var amp18 = sound13Amp.getLevel();
        var rad18 = map(amp18, 0, 7, 40, height * 0.6)
        translate(width * 0.7, height * 0.1)
        var ang7 = map(sound13.currentTime(), 0, sound13.duration(), 0, PI)
        rectMode(CENTER)
        var xpos = width * -0.1 * cos(ang7)
        var ypos = height * 0.4 * sin(ang7)
        translate(xpos, ypos)
        rotate(ang7)
        stroke(255)
        fill(0,0,0,0)
        strokeWeight(5)
        rect(0, 0, rad18, rad18)
        pop()

        push()
        var amp18 = sound13Amp.getLevel();
        var rad18 = map(amp18, 0, 1, 70, height * 0.6)
        translate(width * 0.7, height * 0.1)
        var ang7 = map(sound13.currentTime(), 0, sound13.duration(), 0, PI)
        rectMode(CENTER)
        var xpos = width * -0.4 * cos(ang7)
        var ypos = height * 0.6 * sin(ang7)
        translate(xpos, ypos)
        rotate(ang7)
        stroke(255)
        fill(0)
        strokeWeight(5)
        rect(0, 0, rad18, rad18)
        pop()
    }

    //Touche N
    playSound(sound14, 78)
    if (sound14.isPlaying() == true) {
        push();
        var ntri = 35;
        var ncurrenttri = (map(sound14.currentTime(), 0, sound14.duration(), 0, ntri + 1));
        for (var i = 0; i < ncurrenttri; i++) {
            fill(203, 2, 200);
            noStroke();
            var angle = map(i, 0, ntri, 0, TWO_PI);
            var x = 189 + height * 0.3 * cos(angle);
            var y = 200 + height * 0.3 * sin(angle);
            var x2 = 189 + height * 0.3 * cos(angle + PI / 24);
            var y2 = 200 + height * 0.3 * sin(angle + PI / 24);
            triangle(width * 0.5, height * 0.5, x, y, x2, y2);
        }
        pop();

        push();
        var ntri = 35;
        var ncurrenttri = (map(sound14.currentTime(), 0, sound14.duration(), 0, ntri + 1));
        for (var i = 0; i < ncurrenttri; i++) {
            fill(203, 2, 200);
            var angle = map(i, 0, ntri, 0, TWO_PI);
            var x = 1200 + height * 0.3 * cos(angle);
            var y = 200 + height * 0.3 * sin(angle);
            var x2 = 1200 + height * 0.3 * cos(angle + PI / 24);
            var y2 = 200 + height * 0.3 * sin(angle + PI / 24);
            triangle(width * 0.5, height * 0.5, x, y, x2, y2);
        }
        pop();
        push();
        var ntri = 35;
        var ncurrenttri = (map(sound14.currentTime(), 0, sound14.duration(), 0, ntri + 1));
        for (var i = 0; i < ncurrenttri; i++) {
            fill(249, 29, 175);
            var angle = map(i, 0, ntri, 0, TWO_PI);
            var x = 500 + height * 0.3 * cos(angle);
            var y = 200 + height * 0.3 * sin(angle);
            var x2 = 500 + height * 0.3 * cos(angle + PI / 24);
            var y2 = 200 + height * 0.3 * sin(angle + PI / 24);
            triangle(width * 0.5, height * 0.5, x, y, x2, y2);
        }
        pop();

        push();
        var ntri = 35;
        var ncurrenttri = (map(sound14.currentTime(), 0, sound14.duration(), 0, ntri + 1));
        for (var i = 0; i < ncurrenttri; i++) {
            fill(249, 29, 175);
            var angle = map(i, 0, ntri, 0, TWO_PI);
            var x = 900 + height * 0.3 * cos(angle);
            var y = 200 + height * 0.3 * sin(angle);
            var x2 = 900 + height * 0.3 * cos(angle + PI / 24);
            var y2 = 200 + height * 0.3 * sin(angle + PI / 24);
            triangle(width * 0.5, height * 0.5, x, y, x2, y2);
        }
        pop();

        pop();
        push();
        var ntri = 35;
        var ncurrenttri = (map(sound14.currentTime(), 0, sound14.duration(), 0, ntri + 1));
        for (var i = 0; i < ncurrenttri; i++) {
            fill(200, 0, 60);
            var angle = map(i, 0, ntri, 0, TWO_PI);
            var x = 700 + height * 0.3 * cos(angle);
            var y = 200 + height * 0.3 * sin(angle);
            var x2 = 700 + height * 0.3 * cos(angle + PI / 24);
            var y2 = 200 + height * 0.3 * sin(angle + PI / 24);
            triangle(width * 0.5, height * 0.5, x, y, x2, y2);
        }
        pop();
        
    }

    //Touche O
    playSound(sound15, 79)
    if (sound15.isPlaying() == true) {
        push()
        var waveform = sound15FFT.waveform();
        noFill();
        beginShape();
        stroke(130, 200, 200); // waveform is mint
        strokeWeight(5);
         for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop()
        
    }

    //Touche P
    playSound(sound16, 80)
    if (sound16.isPlaying() == true) {
        push()
        var waveform = sound16FFT.waveform();
        noFill();
        beginShape();
        stroke(183, 53, 236); // waveform is mint
        strokeWeight(10);
         for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop()
    }

    //Touche Q
    playSound(sound17, 81)
    if (sound17.isPlaying() == true) {
       
        push();
        var nsegment = 96
        var ncurrentsegment = (map(sound17.currentTime(), 0, sound17.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(139, 0, 0);
            strokeWeight(10);
            
            push();
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            point(x, y);
            pop();

            stroke(189);
            strokeWeight(5)
            push();
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.3 * cos(angle) / 2;
            var y = height * 0.5 + height * 0.3 * sin(angle) / 2;
            point(x, y);
            pop();

        }
        pop();
        
    }

    //Touche R
    playSound(sound18, 82)
    if (sound18.isPlaying() == true) {
        push()


        var nsegment = 1000
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(247, 174, 18);
        strokeWeight(3) // déterminel'épaisseur du contour de la forme
        var angle = map(i, 0, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 180 * cos(angle);
        var y = height * 1 + height * 0.45 * sin(angle);
        line(width * 0.5, height * 0.5, x, y); //donnes le point d'émission de l'animation, ici ca part du centre de l'écran


        var nsegment = 1000
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(247, 174, 18); // détermine la couleur du contour de la forme selon l'ordre (rouge,vert,bleu)
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 5, TWO_PI);
        var x = width * 0.5 + height * 5 * cos(angle);
        var y = height * 0.5 + height * 8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(247, 174, 18);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 10, TWO_PI);
        var x = width * 0.5 + height * 10 * cos(angle);
        var y = height * 1 + height * 0.8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(247, 174, 18);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 1 * cos(angle);
        var y = height * 0.5 + height * 20 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(247, 174, 18);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 5, TWO_PI);
        var x = width * 0.5 + height * 5 * cos(angle);
        var y = height * 0.5 + height * 60 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(247, 174, 18);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 30 * cos(angle);
        var y = height * 0.5 + height * 18 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(247, 174, 18);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 10, TWO_PI);
        var x = width * 0.5 + height * 45 * cos(angle);
        var y = height * 1 + height * 0.5 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(247, 174, 18);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 10 * cos(angle);
        var y = height * 0.5 + height * 0.8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(247, 174, 18);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 30, TWO_PI);
        var x = width * 0.5 + height * 30 * cos(angle);
        var y = height * 1 + height * 50 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        pop();

    }

    //Touche S
    playSound(sound19, 83)
    if (sound19.isPlaying() == true) {
        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        strokeWeight(22);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius); // * equivaut à multiplié
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.9);
        strokeWeight(20);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.8);
        strokeWeight(18);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.7);
        strokeWeight(16);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.6);
        strokeWeight(12);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.5);
        strokeWeight(8);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.4);
        strokeWeight(4);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.3);
        strokeWeight(2);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.2);
        strokeWeight(1);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.1);
        strokeWeight(0.5);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.05);
        strokeWeight(0.4);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.025);
        strokeWeight(0.3);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.020);
        strokeWeight(0.2);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound19.currentTime(), 0, sound19.duration(), 50, width * 0.010);
        strokeWeight(0.1);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
    
    }

    //Touche T
    playSound(sound20, 84)
    if (sound20.isPlaying() == true) {
        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound20.currentTime(), 0, sound20.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(240, 90,0);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.7 * cos(angle);
            var y = height * 0.5 + height * 0.7 * sin(angle);
            line(width * 0.1, height * 0.1, x, y);
        }
        pop()

    }

    //Touche U
    playSound(sound21, 85)
    if (sound21.isPlaying() == true) {
        push()
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 50, width) 
        noStroke();
        fill(251, 14, 57, 70)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop()   
    }

    //Touche V
    playSound(sound22, 86)
    if (sound22.isPlaying() == true) {
        push()
        sound22FFT.analyze(); // analyse : analyseur de volume

        rectMode(CENTER);
        var nrj3 = sound22FFT.getEnergy("bass")
        var long = map(sound22.currentTime(), 500, sound22.duration(), 500, width)
        rectMode(CENTER)
        noStroke();
        fill(255, 99, 105)
        rect(100, 700, nrj3, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        noStroke();
        fill(255, 99, 105)
        rect(300, 700, nrj3, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        noStroke();
        fill(255, 99, 105)
        rect(500, 700, nrj3, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        noStroke();
        fill(255, 99, 105)
        rect(700, 700, nrj3, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        noStroke();
        fill(255, 99, 105)
        rect(900, 700, nrj3, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        noStroke();
        fill(255, 99, 105)
        rect(1100, 700, nrj3, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        noStroke();
        fill(255, 99, 105)
        rect(1300, 700, nrj3, long, 200)
        noStroke()
        pop();

        push();
        rectMode(CENTER);
        noStroke();
        fill(255, 99, 105);
        rect(1500, 700, nrj3, long, 200);
        noStroke();
        pop();

    }

    //Touche W
    playSound(sound23, 87)
    if (sound23.isPlaying() == true) {
        push()
        sound23FFT.analyze();
        rectMode(CENTER)
        var nrj20 = sound23FFT.getEnergy("bass")
        var long20 = (map(sound23.currentTime(), 0, sound23.duration(), 0, width))
        rectMode(CENTER)
        push()
        fill(251, 147, 14)
        rect(width * 0.20, 800, nrj20, long20, 5);
        noStroke();
        pop()

        push()
        fill(125, 14, 251)
        rect(width * 0.5, 100, nrj20, long20, 5);
        noStroke();
        pop()

        push()
        fill(251, 147, 14)
        rect(width * 0.80, 800, nrj20, long20, 5);
        noStroke();
        pop()
        pop()
    }

    //Touche X
    playSound(sound24, 88)
    if (sound24.isPlaying() == true) {
        push()
        var waveform = sound24FFT.waveform();
        noFill();
        beginShape();
        stroke(0, 50, 225); // waveform is mint
        strokeWeight(30);
         for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop()
    }

    //Touche Y
    playSound(sound25, 89)
    if (sound25.isPlaying() == true) {  
        push();
        var rotation = map(sound25.currentTime(), 0, sound25.duration(), 0, PI);
    
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);
                                
        fill(240, 90,0);
        noStroke();
        rect(0, 0, width * 0.5, width * 0.05);
        pop();

        push();
        var nsegment = 96
        var ncurrentsegment = (map(sound25.currentTime(), 0, sound25.duration(), 0, nsegment + 1));
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(240, 90,0);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.3 + height * 0.2 * cos(angle);
            var y = height * 0.3 + height * 0.2 * sin(angle);
            line(width * 0.2, height * 0.2, x, y);
        }
        pop()

        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound25.currentTime(), 0, sound25.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(240, 90,0);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.8 + height * 0.2 * cos(angle);
            var y = height * 0.8 + height * 0.2 * sin(angle);
            line(width * 0.9, height * 0.9, x, y);
        }
        pop()
    }

    //Touche Z
    playSound(sound26, 90)
    if (sound26.isPlaying() == true) {
        push()
        sound26FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound26FFT.getEnergy("bass")

        push()
        fill(7, 234, 155, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        fill(7, 234, 155, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        fill(18, 163, 247)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        pop()
        
      }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        //sound.playMode('restart');
        sound.play()
    }
}