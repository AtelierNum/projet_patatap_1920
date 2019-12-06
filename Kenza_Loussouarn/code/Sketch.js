var sound01;
var sound01FFT;
var sound02;
var sound03;
var totalPts = 300;
var steps = totalPts + 1;
var sound04;
var sound05;
var sound06;
var sound07;
var sound07FFT
var sound08;
var sound09;
var stab5
var angle1 = 0;
var angle2 = 0;
var scalar = 300;
var sound10;
let diameter10;
let angle10 = 0;
var sound11;
var sound11FTT
var sound12;
var sound12Amp;
var sound13;
var sound13Amp
var sound14;
var sound15;
var sound15Amp
var sound16;
var sound17;
var sound17FFT;
var sound18;
var sound19;
var sound20;
var sound21;
var sound22;
var sound23;
var sound23FTT;
var sound24;
var sound24reverse;
var sound25;
var sound26;

var xpos = []
var ypos = []
var xtarget = []
var ytarget = []


function preload() {

    sound01 = loadSound('assets/238363__aleixcm__running-beach.wav');
    sound02 = loadSound('assets/21886__miscellany__a-seal-eats-2.wav');
    sound03 = loadSound('assets/450751__florianreichelt__sound-of-a-seal.wav');
    sound04 = loadSound('assets/342161__ragu21__starling-bird-short-voice-03.mp3');
    sound05 = loadSound('assets/263600__loopudu__onewaveinteluknipah.wav');
    sound06 = loadSound('assets/34207__deleted-user-229898__birds-01.wav');
    sound07 = loadSound('assets/178871__hanbaal__yellow-wattlebird.wav');
    sound08 = loadSound('assets/340311__the-sean__osvaduthdust.wav');
    sound09 = loadSound('assets/326302__wagna__sandfall2.wav');
    sound10 = loadSound('assets/450849__kyles__nylon-rope-string-fishing-line-handling-tying-tie-tense-friction-works-at-low-level.wav');
    sound11 = loadSound('assets/62158__freesound61476__seagull-toy-mix.wav');
    sound12 = loadSound('assets/122314__anillogic__bk-wind-c2.wav');
    sound13 = loadSound('assets/418262__inspectorj__crow-call-single-a.wav');
    sound14 = loadSound('assets/456440__inspectorj__bird-whistling-robin-single-13.wav');
    sound15 = loadSound('assets/389620__silentstrikez__bathtub-wave-2.wav');
    sound16 = loadSound('assets/157184__rbirdwise__wave-on-shore-2.wav');
    sound17 = loadSound('assets/437687__samsterbirdies__loud-boat-horn.wav');
    sound18 = loadSound('assets/467301__xfixy8__sand-slidding-out-of-shovel-slowly.wav');
    sound19 = loadSound('assets/392027__rafaelpicoli__gaivota.wav');
    sound20 = loadSound('assets/234084__ivorybunker__wave-mallorca-13-ibsp2.wav');
    sound21 = loadSound('assets/471907__juanfg__friction-between-clothes.wav');
    sound22 = loadSound('assets/429209__michaelgillighan__09-rozar-papel.wav');
    sound23 = loadSound('assets/320166__arnaud-coutancier__one-wave.wav');
    sound24 = loadSound('assets/58416__darren1979__oceanwaves.wav');
    sound25 = loadSound('assets/471218__worldmaxter__wind-2.wav');
    sound26 = loadSound('assets/408217__ramiro1007__broom-on-sand.wav');
}

function setup() {
    createCanvas(windowWidth, windowHeight)  


sound01FFT= new p5.FFT(0.8, 1024); // analyse de notre son
sound01FFT.setInput(sound01);

pg = createGraphics(windowWidth, windowHeight) 
pg.pixelDensity(1)

for (var i = 0; i < 50; i++) {

    xpos.push(random(0, width))
    ypos.push(random(0, -height))
    xtarget.push(random(width))
    ytarget.push(random(height))
}

sound07FFT= new p5.FFT(0.8, 1024); // analyse de notre son
sound07FFT.setInput(sound07);

diameter10 = height - 10;

sound11FFT = new p5.FFT(0.8, 1024)
sound11FFT.setInput(sound11)

sound12Amp = new p5.Amplitude()
sound12Amp.setInput(sound12)
sound12Amp.toggleNormalize()

sound15Amp = new p5.Amplitude()
sound15Amp.setInput(sound15)

sound17FFT = new p5.FFT(0.8, 16)
sound17FFT.setInput(sound17)

sound23FFT = new p5.FFT(0.8, 1024);
sound23FFT.setInput(sound23);


}


function draw() {
    
background(185, 243, 238)

//a
playSound(sound01, 65)
if (sound01.isPlaying() == true) {
        push()
        var waveform = sound01FFT.waveform();
        noFill();
        beginShape();
        stroke(239, 185, 243);
        strokeWeight(3);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }


    //z
playSound(sound02, 90)
if (sound02.isPlaying() == true) {
    push()
    noStroke()
    var nsegment = 270
    var ncurrentsegment = map(sound02.currentTime(), 0, sound02.duration(), 0, nsegment + 1)

    for (var i = 0; i < ncurrentsegment; i++) {
        stroke(360);
        strokeWeight(1)
        var angle = map(i, 0, nsegment, 0, TWO_PI);
        var x = width * .1 + height * .9 * cos(angle);
        var y = height * 0.8 + height * 0.2 * sin(angle);
        line(width * 0.8, height * 0.2, x, y);
    }
    pop()

}


//e
    playSound(sound03, 69)
    if (sound03.isPlaying() == true) {
        push();
        var rand = 0;
        stroke(360)
        strokeWeight(15);
        for (var i = 1; i < steps; i++) {
            point((width / steps) * i, (height / 2) + random(-rand, rand));
            rand += random(-5, 5);
        }
        pop();
    }
    //r
    playSound(sound04, 82)
    if (sound04.isPlaying() == true) {
        push()

        noStroke()
        rectMode(CENTER)
        let angle = map(sound04.currentTime(), 0, sound04.duration(), 0, TWO_PI)
        fill(219,174,251)
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, height * 0.39, width * 0.41)
        pop()

    
    }
//t
    playSound(sound05, 84)
    if (sound05.isPlaying() == true) {
        push()
        var t = map(sound05.currentTime(), 0, sound05.duration() * 0.75, 0, 1)
        var grey = map(sound05.currentTime(), sound05.duration() * 0.75, sound05.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        fill(grey)
        noStroke()
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }
    
//y
    playSound(sound06, 89)
    if (sound06.isPlaying() == true) {
        push();
        var ntri = 35;
        var ncurrenttri = (map(sound06.currentTime(), 0, sound06.duration(), 0, ntri + 1));
        for (var i = 0; i < ncurrenttri; i++) {
            stroke(251, 174, 180, 240);
            strokeWeight(4);
            noFill();
            var angle = map(i, 0, ntri, 0, TWO_PI);
            var x = width * 0.5 + height * 0.3 * cos(angle);
            var y = height * 0.5 + height * 0.3 * sin(angle);
            var x2 = width * 0.5 + height * 0.3 * cos(angle + PI / 24);
            var y2 = height * 0.5 + height * 0.3 * sin(angle + PI / 24);
            triangle(width * 0.5, height * 0.5, x, y, x2, y2);
        }

        pop();
    
    }

//u
    playSound(sound07,85)
    if (sound07.isPlaying(85) == true) {
        push();
        var wavef = sound07FFT.waveform();
        noFill();
        beginShape(); 
        stroke(2174, 202, 251);
        strokeWeight(3);
        for (var i = 0; i < wavef.length; i++) { 
            var x = map(wavef[i], -0.11, 0.11, 0, height); 
            var y = map(i, 0, wavef.length, 0, width); 
            curveVertex(x, y); 
        }
        endShape();
        pop();

    
    }
//i
    playSound(sound08, 73)
    if (sound08.isPlaying() == true) {
        fill(237, 174, 251)
        ellipse(width * 0.38, height * 0.4, 200, 200)
        noStroke()
    }

//o
    playSound(sound09, 79)
    if (sound09.isPlaying() == true) {
        push()

        noStroke();
        rectMode(CENTER);

        let ang1 = radians(angle1);
        let ang2 = radians(angle2);

        let x1 = width / 2 + scalar * cos(ang1);
        let x2 = width / 2 + scalar * cos(ang2);

        let y1 = height / 2 + scalar * sin(ang1);
        let y2 = height / 2 + scalar * sin(ang2);

        fill(208, 174, 251);
        ellipse(width * 0.5 - 120, y1, scalar / 10, scalar / 10);
        ellipse(width * 0.5 + 120, y2, scalar / 10, scalar / 10); // en divisant par 10 scalar qui gère le mvt mais aussi le diamètre on ne fait aps quelque chose en responsive

        angle1 += 2;
        angle2 += 3;
        pop()
    
    }
//p
    playSound(sound10, 80)
    if (sound10.isPlaying() == true) {
        push()
        noFill();
        stroke(255, 204, 255);
        strokeWeight(4);

        let d1 = 0 + (sin(angle10 + PI) * diameter10) / 2 + diameter10 / 2;
        let d2 = 0 + (sin(angle10 + PI / 2) * diameter10) / 2 + diameter10 / 2;
        let d3 = 0 + (sin(angle10 + PI) * diameter10) / 2 + diameter10 / 2;

        ellipse(0, height / 2, d1, d1);
        ellipse(width / 2, height / 2, d2, d2);
        ellipse(width, height / 2, d3, d3);

        angle10 += 0.05;
        pop()
    }
//q
    playSound(sound11, 81)
    if (sound11.isPlaying() == true) {
        push()
        smooth();
        var waveform = sound11FFT.waveform();
        noFill();
        beginShape();

        stroke(255, 150);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            smooth();
            var x = map(i, 0, waveform.length, 0, width) * 5; 
            var y = map(waveform[i], -2, 2, 0, height); 
            
            curveVertex(x, y);
        }
        endShape();
        pop()
    }
//s
    playSound(sound12, 83)
    if (sound12.isPlaying() == true) {
        push()
        noStroke();
        fill(204, 255, 255);
        var lvl = sound12Amp.getLevel() * 10;
        var nsegment = 500
        var ncurrentsegment = (map(sound12.currentTime(), 0, sound12.duration(), 0, nsegment + 10)) 
        for (var i = 0; i < ncurrentsegment; i++) {
            
            var angle8 = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * sin(angle8)
            var y = height * 0.5 + height * 0.45 * cos(angle8)
        
            ellipse(x, y, 40, 40)
        }
        pop()
    }
//d
    playSound(sound13, 68)
    if (sound13.isPlaying() == true) {
        push()
        noStroke();
        fill(251, 221, 174)
    
        var lvl = sound13.getLevel() * 10;
        var nsegment = 10
        var ncurrentsegment = (map(sound13.currentTime(), 0, sound13.duration(), 0, nsegment + 10))
        for (var i = 0; i < ncurrentsegment; i++) {
       
            var angle8 = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle8)
            var y = height * 0.5 + height * 0.45 * sin(angle8)
            ellipse(x, y, 40, 40)
        }
        pop()
    
    }
//f
    playSound(sound14, 70)
    if (sound14.isPlaying() == true) {
        push()
        var radius = map(sound14.currentTime(), 0, sound14.duration(), 50, width)
        noStroke();
        fill(236, 212, 245 )

        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop()
    }
//g
    playSound(sound15, 71)
    if (sound15.isPlaying() == true) {
        push()
        noStroke()
        fill (245, 212, 238 )
        var amp = sound15Amp.getLevel()
        var rot = map(amp, 0, 1, 0, 3 + PI)
        rectMode(CENTER)
        translate(0.5 * width, 0.5 * height)
        rotate(rot)
        rect(0, 0, height * 0.648, height * 0.1081)
        pop()
        push()
        rectMode(CENTER)
        translate(0.25 * width, 0.25 * height)
        rotate(rot)
        noStroke()
        fill (245, 212, 238 )
        rect(0, 0, height * 0.648, height * 0.1081)
        pop()
        push()
        rectMode(CENTER)
        noStroke()
        fill (245, 212, 238 )
        translate(0.75 * width, 0.75 * height)
        rotate(rot)
        rect(0, 0, height * 0.648, height * 0.1081)
        pop()
    }
//h
    playSound(sound16, 72)
    if (sound16.isPlaying() == true) {
        push()
        fill(212, 222, 245 )
        rotate(frameCount / -80.0);
        noStroke();
        for (let i = 0; i < 20; i++) {
            ellipse(width * 0.5, height * 0.5, 0.2162 * height, 0.2162 * height);
            rotate(PI / 10);
        }

        pop()
    }
//j
    playSound(sound17, 74)
    if (sound17.isPlaying() ==true) {
        var spectrum = sound17FFT.analyze();

        beginShape();
        for (i = 0; i < spectrum.length; i++) {
         fill (176, 173, 241 )
            stroke(255)
            var x = map(i, 0, spectrum.length, 0, width * 1.2)
            var y = map(spectrum[i], 0, 255, height * 1.5, height * 0.05)
            vertex(x, y);
        }
        endShape();
    }

//k
    playSound(sound18, 75)
    if (sound18.isPlaying() == true) {
        push();
        var timer = map(sound18.currentTime(), 0, 0.2, 50, height * 0.001);
        fill(194, 173, 241 );
        noStroke();
        ellipse(width * 0.5, height * 0.5, width / 4.8, width / 4.8);
        fill(212, 173, 241 );
        ellipse(width * 0.5 - timer, height * 0.5 - timer, width / 4.8, width / 4.8);
        pop();  
    }
//l
    playSound(sound19, 76)
    if (sound19.isPlaying() ==true) {
        push()
        noStroke();
        var rotation = map(sound19.currentTime(), 0, sound19.duration(), 0, PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(247, 177, 177);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        push()
        noStroke();
        var rotation = map(sound19.currentTime(), 0, sound19.duration(), 0, PI * 0.2);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(252, 158, 158 );
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        }
//m
    playSound(sound20, 77)
    if (sound20.isPlaying() ==true) {
    push();
    var timer = map(sound20.currentTime(), 0, 0.08, 30, height * 0.01);

    push();
    stroke(237, 121, 223 );
    strokeWeight(40);
    translate(width * 0.5, height * 0.5);
    line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
    pop();


    push();
    stroke(237, 121, 223 );
    strokeWeight(40);
    translate(width * 0.2, height * 0.5);
    line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
    pop();

    push();
    stroke(237, 121, 223 );
    strokeWeight(40);
    translate(width * 0.8, height * 0.5);
    line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
    pop();
    pop();
    }

//w
    playSound(sound21, 87)
    if (sound21.isPlaying() ==true) {
        push()
        fill(249, 196, 174  )
        rotate(frameCount / -40.0);
        noStroke();
        for (let i = 0; i < 10; i++) {
            ellipse(width * 0.8, height * 0.5, 0.4300 * height, 0.4300 * height);
            rotate(PI / 5);
        }

        pop()
    }
//x
    playSound(sound22, 88)
    if (sound22.isPlaying() ==true) {
        push()
        noStroke()
        var nsegment = 270
        var ncurrentsegment = map(sound22.currentTime(), 0, sound22.duration(), 0, nsegment + 1)
    
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(360);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * .7 + height * .3 * cos(angle);
            var y = height * 0.9 + height * 0.7 * sin(angle);
            line(width * 0.2, height * 0.9, x, y);
        }
        pop()
    }
//c
    playSound (sound23, 67)
    if (sound23.isPlaying() ==true) {
        push();
        var waveform = sound23FFT.waveform();
        beginShape();
        stroke(156, 229, 250 );
        strokeWeight(15);
        fill(156, 229, 250 );
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width); // (création ligne parcourue par la boucle for)
            var y = map(0.5 * waveform[i], -1, 1, 0, height * 0.3); //hauteur des ondes en fonction du son
            curveVertex(x, y); //(ajout du point obtenu à la coube)
        }
        endShape();
        pop();
    }
//v
    playSound (sound24, 86)
    if (sound24.isPlaying() ==true) {
        push();
        var rotation = map(sound24.currentTime(), 0, sound24.duration(), 0, PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(244, 255, 136 )
        noStroke()
        beginShape();
        vertex(50, 10);
        vertex(85, 30);
        vertex(85, 70);
        vertex(50, 90);
        vertex(15, 70);
        vertex(15, 30);
        endShape(CLOSE);

        pop();
    }
//b
    playSound (sound25, 66)
    if (sound25.isPlaying() ==true) {
        push();
        var nsegment = 50;
        var ncurrentsegment = (map(sound25.currentTime(), 0, sound25.duration(), 0, nsegment + 1));

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(247, 152, 100);
            strokeWeight(random(50));
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            var xx = width * 0.5 + height * 0.45 * cos(angle);
            var yy = height * 0.5 + height * 0.45 * sin(angle);
            line(xx, yy, x, y);
        }
        pop();
    }

    playSound (sound26, 78)
    if (sound26.isPlaying() ==true) {
        push()
        noStroke()
        rectMode(CENTER)
        let angle = map(sound26.currentTime(), 0, sound26.duration(), 0, TWO_PI)
        fill(206, 160, 239 )
        translate(width * 0.3, height * 0.4)
        rotate(angle)
        rect(0, 0, height * 0.42, width * 0.28)
        pop()
    
    }

}



function windowResized() {
resizeCanvas(windowWidth,windowHeight)

}

function playSound(sound, keyId) {
if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
sound.play();
}
}