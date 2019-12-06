let sound01
let sound02
let sound02FFT
let sound03
let sound03FFT
let sound04
let sound4FFT
let sound05
let sound05FFT
let sound06
let sound07
let sound08
let sound08FFT
let sound09
let sound10
let sound11
let sound12
let sound12FFT
let sound13
let sound14
let sound14FFT
let sound15
let sound16
let sound17
let sound18
let sound19
let sound20
let sound20FFT
let sound21
let sound22
let sound23
let sound24
let sound25
let sound26

var a = 0.0;

var a1;
var totalPts = 300;
var steps = totalPts + 1;
var xpos = [] 
var ypos = [] 
var xtarget = [] 
var ytarget = []
var sound17Amp
var sound25Amp



function preload() { //mettre les sons
    soundFormats('mp3', 'ogg');
    // sound01 = loadSound("assets/fichier.wav ou .mp3");
    sound01 = loadSound("assets/sound01.mp3");
    sound02 = loadSound("assets/sound02.mp3");
    sound03 = loadSound("assets/sound03.mp3");
    sound04 = loadSound("assets/sound04.mp3");
    sound05 = loadSound("assets/sound05.mp3");
    sound06 = loadSound("assets/sound06.mp3");
    sound07 = loadSound("assets/sound07.mp3");
    sound08 = loadSound("assets/sound08.mp3");
    sound09 = loadSound("assets/sound09.mp3");
    sound10 = loadSound("assets/sound10.mp3");
    sound11 = loadSound("assets/sound11.mp3");
    sound12 = loadSound("assets/sound12.mp3");
    sound13 = loadSound("assets/sound13.mp3");
    sound14 = loadSound("assets/sound14.mp3");
    sound15 = loadSound("assets/sound15.mp3");
    sound16 = loadSound("assets/sound16.mp3");
    sound17 = loadSound("assets/sound17.mp3");
    sound18 = loadSound("assets/sound18.mp3");
    sound19 = loadSound("assets/sound19.mp3");
    sound20 = loadSound("assets/sound20.mp3");
    sound21 = loadSound("assets/sound21.mp3");
    sound22 = loadSound("assets/sound22.mp3");
    sound23 = loadSound("assets/sound23.mp3");
    sound24 = loadSound("assets/sound24.mp3");
    sound25 = loadSound("assets/sound25.mp3");
    sound26 = loadSound("assets/sound26.mp3");
    


}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0);
    sound02FFT = new p5.FFT(0.8, 1024);
    sound02FFT.setInput(sound02);
    sound03FFT = new p5.FFT(0.8, 1024);
    sound03FFT.setInput(sound04);
    sound04FFT = new p5.FFT(0.8, 1024);
    sound04FFT.setInput(sound04);
    sound05FFT = new p5.FFT(0.8, 1024);
    sound05FFT.setInput(sound05);
    sound06FFT = new p5.FFT(0.8, 1024);
    sound06FFT.setInput(sound06);
    sound07FFT = new p5.FFT(0.8, 1024);
    sound07FFT.setInput(sound07);
    sound12FFT =new p5.FFT(0.8, 1024);
    sound12FFT.setInput(sound12);
    sound14FFT = new p5.FFT(0.8, 1024);
    sound14FFT.setInput(sound14);
    sound20FFT = new p5.FFT (0.8, 1024);
    sound20FFT.setInput(sound20);
    sound22FFT = new p5.FFT (0.8, 1024);
    sound22FFT.setInput(sound22);

    sound17Amp = new p5.Amplitude();
    sound17Amp.setInput(sound17);
    
    sound25Amp = new p5.Amplitude();
    sound25Amp.setInput(sound25);

}

function draw() {

    background(200, 100, 0);

    //touche A
    // faire un carré qui se transforme en cercle
    playSound(sound01, 65)
    if (sound01.isPlaying() == true) {
        let r = map(sound01.currentTime(),
            0, sound01.duration(),
            0, width * 0.25)
        r = constrain(r, 0, width * 0.25)
        fill(255, 155, 0)


        // c pour corner, r pour rayon (variables)
        let c = map(sound01.currentTime(),
                    sound01.duration()*0.33, sound01.duration(),
                    0, width*0.25)
        c = constrain(c, 0, width*0.25)
            
            rectMode(CENTER)
            rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
            noStroke();

        r = constrain(r, 0, width * 0.5)
        fill(255, 140, 0)
            
            rectMode(CENTER)
            rect(width * 0.25, height * 0.25, r, r, c, c, c, c)
            noStroke();

        r = constrain(r, 0, width * 0.5)
        fill(255, 140, 0)
            
            rectMode(CENTER)
            rect(width * 0.75, height * 0.75, r, r, c, c, c, c)
            noStroke();

        r = constrain(r, 0, width * 0.5)
        fill(255, 140, 0)
                
            rectMode(CENTER)
            rect(width * 0.75, height * 0.25, r, r, c, c, c, c)
            noStroke();
    
        r = constrain(r, 0, width * 0.5)
        fill(255, 140, 0)
            
            rectMode(CENTER)
            rect(width * 0.25, height * 0.75, r, r, c, c, c, c)
            noStroke();
            
    }

    //touche B
    playSound(sound02,66);
    if(sound02.isPlaying() == true){
        rectMode(CENTER)

        push()
        let angle = map (sound02.currentTime(), 0, sound02.duration(), 0, TWO_PI)
        fill(255, 200, 200)
        translate(width*0.5, height*0.5)
        rotate(angle)
        noStroke();
        rect(0, 0, height*0.25, width*0.25)
        pop()

        push()
        fill(255, 200, 200)
        translate(width*0.25, height*0.5)
        rotate(angle)
        noStroke();
        rect(0, 0, height*0.25, width*0.25)
        pop()

        push()
        fill(255, 200, 200)
        translate(width*0.75, height*0.5)
        rotate(angle)
        noStroke();
        rect(0, 0, height*0.25, width*0.25)
        pop()
        
    }


    //touche C
    //pour faire cercle qui grandit
    playSound(sound03,67)
if (sound03.isPlaying() == true) {
    var rad = map(sound03.currentTime(), 0, sound03.duration(), 50, width)
    push();

    noFill()
    stroke(250, 240, 219)
    strokeWeight(3)
    ellipse(width * 0.5, height * 0.5, rad * 0.2, rad * 0.2)

    stroke(250, 240, 219)
    strokeWeight(3)
    ellipse(width * 0.5, height * 0.5, rad * 0.25, rad * 0.25)

    stroke(250, 240, 219)
    strokeWeight(3)
    ellipse(width * 0.5, height * 0.5, rad * 0.3, rad * 0.3)

    stroke(250, 240, 219)
    strokeWeight(3)
    ellipse(width * 0.5, height * 0.5, rad * 0.35, rad * 0.35)

    stroke(250, 240, 219)
    strokeWeight(3)
    ellipse(width * 0.5, height * 0.5, rad * 0.4, rad * 0.4)

    stroke(250, 240, 219)
    strokeWeight(3)
    ellipse(width * 0.5, height * 0.5, rad * 0.45, rad * 0.45)

    stroke(250, 240, 219)
    strokeWeight(3)
    ellipse(width * 0.5, height * 0.5, rad * 0.5, rad * 0.5)

    pop();
}

   //touche D
   playSound(sound04,68)
    if(sound04.isPlaying() == true){
       let wave = sound04FFT.waveform();
        console.log(wave)
        noFill()
        stroke(255,100,30)
        strokeWeight(5)
        beginShape()
        for (let i = 0 ; i < wave.length ; i ++) {
            let x =map(i , 0 , wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x,y)
        }
        endShape()

}

    //touche E
    playSound(sound05,69)
    if (sound05.isPlaying() == true){
        push()
        noFill()
        stroke(255,160,0)
        strokeWeight(5)
        let wave = sound05FFT.waveform();
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1,1, 0, height)
            let y = height*0.5 + rad*sin(angle)
            let x = width*0.5 + rad*cos(angle)
            curveVertex(x, y)

        }
        endShape(CLOSE)
        pop()
    }

    //touche F
    playSound(sound06, 70) 
    if (sound06.isPlaying() == true) {
        //ligne
        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound06.currentTime(), 0, sound06.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noStroke()
        fill(255, 220, 230)
        rect(0, 0, width * 25, height * 0.004)
        pop()

        //ligne
        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound06.currentTime(), 0, sound06.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noStroke()
        fill(255, 220, 230)
        rect(0, 0, width * 0.002, height * 25)
        pop()


        push()
        sound06FFT.analyze();
        rectMode(CENTER); 
        var nrj1 = sound06FFT.getEnergy("mid")

        
        //losange
        push()
        fill(255, 140, 0)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        noStroke()
        rect(0, 0, nrj1, nrj1)
        pop()
        
        //petit cercle gauche
        push()
        fill(255, 220, 230, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        noStroke() 
        ellipse(0, 0, width * 0.04, width * 0.04) 
        pop()

        //petit cercle droite
        push()
        fill(255, 220, 230, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.04, width * 0.04)
        pop()

        //grand cercle droite
        push()
        fill(255, 140, 0, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.25, width * 0.25)
        pop()

        //grand cercle gauche
        push()
        fill(255, 140, 0, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.25, width * 0.25)
        pop()
    }

    //touche G
    playSound(sound07, 71) 
    if (sound07.isPlaying() == true) {
        push()
        sound07FFT.analyze();

        rectMode(CENTER);
        var nrj1 = sound07FFT.getEnergy("bass")
        var long = map(sound07.currentTime(), 500, sound07.duration(), 500, width)
        noStroke()
        rectMode(CENTER)
        fill(255, 200, 200)
        rect(100, 200, nrj1, long, 50)
        pop();

        push()
        noStroke()
        rectMode(CENTER)
        fill(255, 200, 200)
        rect(300, 200, nrj1, long, 50)
        pop();


        push()
        noStroke()
        rectMode(CENTER)
        fill(255, 200, 200)
        rect(500, 200, nrj1, long, 50)
        pop();

        push()
        noStroke()
        rectMode(CENTER)
        fill(255, 200, 200)
        rect(700, 200, nrj1, long, 50)
        pop();

    
        push()
        noStroke()
        rectMode(CENTER)
        fill(255, 200, 200)
        rect(900, 200, nrj1, long, 50)
        pop();

  
        push()
        noStroke()
        rectMode(CENTER)
        fill(255, 200, 200)
        rect(1100, 200, nrj1, long, 50)
        pop();


        push()
        noStroke()
        rectMode(CENTER)
        fill(255, 200, 200)
        rect(1300, 200, nrj1, long, 50)
        pop();


        push()
        noStroke()
        rectMode(CENTER)
        fill(255, 200, 200)
        rect(1500, 200, nrj1, long, 50)
        pop();
        }

        // touche H
        playSound(sound08, 72) 
        if (sound08.isPlaying() == true) {
            push();
            var rand = 0;
            stroke(255, 120, 200)
            strokeWeight(30);
            for (var i = 2; i < steps; i++) {
                point((width / steps) * i, (height / 2) + random(-rand, rand));
                rand += random(-900, 900);
            }
            pop();
    
            push();
            var rand = 0;
            stroke(255, 255, 253)
            strokeWeight(50);
            for (var i = 2; i < steps; i++) {
                point((width / steps) * i, (height / 2) + random(-rand, rand));
                rand += random(-900, 900);
            }
            pop();
        }



        //touche I
        playSound(sound09, 73)
    if (sound09.isPlaying() == true) {
        push();
        var rad = map(sound09.currentTime(), 1, sound09.duration(), 10, width)
        noFill()
        stroke(255, 165, 208)
        strokeWeight(3) // taille du contour
        ellipse(width * 0.5, height * 0.5, rad, rad) // dessin d'une ellipse
        pop();

        push();
        var rad = map(sound09.currentTime(), 1, sound09.duration(), 300, width)
        noFill()
        stroke(255, 165, 208)
        strokeWeight(3) // taille du contour
        ellipse(width * 0.5, height * 0.5, rad, rad) // dessin d'une ellipse
        pop();

        push();
        var rad = map(sound09.currentTime(), 1, sound09.duration(), 600, width)
        noFill()
        stroke(255, 165, 208)
        strokeWeight(3) // taille du contour
        ellipse(width * 0.5, height * 0.5, rad, rad) // dessin d'une ellipse
        pop();

    }

    // touche J
    playSound(sound10, 74) 
    if (sound10.isPlaying() == true) {
        push();
        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(5)
        ellipse(width * 1, height * 0.5, rad, rad)
        pop();

        push();
        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(5)
        ellipse(width * 0, height * 0.5, rad, rad)
        pop();

        push();
        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(5)
        ellipse(width * 1, height * 0, rad, rad)
        pop();

        push();
        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(5)
        ellipse(width * 0, height * 0, rad, rad)
        pop();

        push();
        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(5)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();

        push();
        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(5)
        ellipse(width * 0, height * 1, rad, rad)
        pop();

        push();
        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(5)
        ellipse(width * 1, height * 1, rad, rad)
        pop();

        push();
        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(5)
        ellipse(width * 0.5, height * 0, rad, rad)
        pop();

        push();
        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(5)
        ellipse(width * 0.5, height * 1, rad, rad)
        pop();
    }

    //touche K
    playSound(sound11, 75) 
    if (sound11.isPlaying() == true) {
        push();
        background(255, 210, 150);
        pop();
    }

    //touche L
    playSound(sound12, 76) 
    if (sound12.isPlaying() == true) {
        push()
        var waveform = sound12FFT.waveform();
        noFill();
        beginShape();
        stroke(255);
        strokeWeight(3);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], 0, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()

        push()
        var waveform = sound12FFT.waveform();
        noFill();
        beginShape();
        stroke(255);
        strokeWeight(3);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], 1, 0, 1, height);
            curveVertex(x, y);
        }
        endShape();
        pop()

    }
//touche M
playSound(sound13, 77);
if (sound13.isPlaying() == true) {
    push();
    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 205);
    strokeWeight(1)
    ellipse(width * 0, height * 0, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0, height * 0.2, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 205);
    strokeWeight(1)
    ellipse(width * 0, height * 0.4, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0, height * 0.6, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 205);
    strokeWeight(1)
    ellipse(width * 0, height * 0.8, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0, height * 1, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.2, height * 0, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.2, height * 0.2, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.2, height * 0.4, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.2, height * 0.6, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.2, height * 0.8, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.2, height * 1, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.4, height * 0, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.4, height * 0.2, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.4, height * 0.4, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.4, height * 0.6, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.4, height * 0.8, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.4, height * 1, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.6, height * 0, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.6, height * 0.2, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.6, height * 0.4, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.6, height * 0.6, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.6, height * 0.8, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.6, height * 1, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.8, height * 0, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.8, height * 0.2, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.8, height * 0.4, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.8, height * 0.6, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.8, height * 0.8, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 0.8, height * 1, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 1, height * 1, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 1, height * 0.2, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 1, height * 0.4, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 1, height * 0.6, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 1, height * 0.8, radius, radius)
    pop();

    push();
    var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, 500);
    noFill();
    stroke(255, 135, 172);
    strokeWeight(1)
    ellipse(width * 1, height * 0, radius, radius)
    pop();
}

//touche N
playSound(sound14,78)
    if (sound14.isPlaying() == true){
        push()
        noFill()
        stroke(255,160,160)
        strokeWeight(1)
        let wave = sound14FFT.waveform();
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], 0,4, 0, height)
            let y = height*0.8 + rad*sin(angle)
            let x = width*0.5 + rad*cos(angle)
            curveVertex(x, y)

        }
        endShape(CLOSE)
        pop()

        push()
        noFill()
        stroke(255,160,160)
        strokeWeight(1)
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], 0,4, 0, height)
            let y = height*0.2 + rad*sin(angle)
            let x = width*0.5 + rad*cos(angle)
            curveVertex(x, y)

        }
        endShape(CLOSE)
        pop()

        push()
        noFill()
        stroke(255,160,160)
        strokeWeight(1)
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1,1, 0, height)
            let y = height*0.5 + rad*sin(angle)
            let x = width*0.8 + rad*cos(angle)
            curveVertex(x, y)

        }
        endShape(CLOSE)
        pop()

        push()
        noFill()
        stroke(255,160,160)
        strokeWeight(1)
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1,1, 0, height)
            let y = height*0.5 + rad*sin(angle)
            let x = width*0.2 + rad*cos(angle)
            curveVertex(x, y)

        }
        endShape(CLOSE)
        pop()
    }

    // touche O
    playSound(sound15, 79) 
    if (sound15.isPlaying() == true) {
        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 50, width)
        fill(255, 120, 0);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        fill(255, 140, 0);
        noStroke();
        ellipse(width * 0.5, height * 0.5, 20, 20);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 40, 40);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 60, 60);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 80, 80);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 100, 100);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 120, 120);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 140, 140);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 160, 160);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 180, 180);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 200, 200);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 220, 220);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        fill(255, 140, 0);
        noStroke();
        ellipse(width * 0.5, height * 0.5, 240, 240);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 260, 260);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 280, 280);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 300, 300);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 320, 320);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 320, 320);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 340, 340);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 360, 360);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 380, 380);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 400, 400);
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 100, width)
        noFill();
        stroke(255, 140, 0);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, 420, 420);
        pop();
    }

    //touche P
    playSound(sound16, 80)
    if (sound16.isPlaying() == true) {

        push()
        var nsegment16 = 1000
        var ncurrentsegment16 = (map(sound16.currentTime(), 0, sound16.duration(), 0, nsegment16 + 1))
        for (var i = 0; i < ncurrentsegment16; i++) {
            stroke(255, 160, 15);
            strokeWeight(2)
            var angle16 = map(i, 0, nsegment16, 0, TWO_PI);
            var x16 = width * 0.5 + height * 180 * cos(angle16);
            var y16 = height * 1 + height * 0.45 * sin(angle16);
            line(width * 0.5, height * 0.5, x16, y16);

        }
        pop()
    }

    // touche Q
    playSound(sound17, 81);
    if (sound17.isPlaying() == true) {
        push();
        var amp17 = sound17Amp.getLevel();
        var rad17 = map(amp17, 0, 1, 210, 255)
        fill(255, 120, 99, 127);
        translate(width * 0.5, height * 0.5);
        noStroke();
        for (var i = 0; i < 10; i++) {
            ellipse(0, 150, rad17, 200);
            rotate(PI / 5);
        }
        pop()
    }
    

    //touche R
    playSound(sound18, 82)
    if (sound18.isPlaying() == true) {
        push();
        var rad = map(sound18.currentTime(), 0, sound18.duration(), 0, width)
        noFill()
        stroke(255, 250, 208)
        strokeWeight(300)
        ellipse(width * 0.5, height * 0.5, rad, rad) 
        pop();
    }

    // touche S
    playSound(sound19, 83)
    if (sound19.isPlaying() == true) {
        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound19.currentTime(), 0, sound19.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(129, 0, 26);
            strokeWeight(4)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);

        }
        pop()
    }

    // touche T
    playSound(sound20,84)
    if(sound20.isPlaying() == true){
       let wave = sound20FFT.waveform();
        console.log(wave)
        noFill()
        stroke(255,255,255)
        strokeWeight(2)
        beginShape()
        for (let i = 0 ; i < wave.length ; i ++) {
            let x =map(i , 0 , wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x,y)
        }
        endShape()
        
        console.log(wave)
        noFill()
        stroke(255,100,30)
        strokeWeight(2)
        beginShape()
        for (let i = 0 ; i < wave.length ; i ++) {
            let x =map(i , 0 , wave.length, 0, width)
            let y = map(wave[i], -1, 1, height * 0.5, 0)
            curveVertex(x,y)
        }
        endShape()

        console.log(wave)
        noFill()
        stroke(255,100,30)
        strokeWeight(2)
        beginShape()
        for (let i = 0 ; i < wave.length ; i ++) {
            let x =map(i , 0 , wave.length, 0, width)
            let y = map(wave[i], -1, 1, height * 1.5, 0)
            curveVertex(x,y)
        }
        endShape()
}

    // touche U
    playSound(sound21, 85);
    if (sound21.isPlaying()) {//supperposition de deux rectangle fin le deuxieme vient "manger le premier"
        push();
        var x, y1 = height * 0.35, y2 = height * 0.65, first = 0.33, duration = sound21.duration() * 0.85,
            hauteur = height * 0.05, largeur;
        if (sound21.currentTime() < first) {
            fill(255, 221, 233);
            x = width - sound21.currentTime() * width / first;
            largeur = width - x;
            rect(x, y1, largeur, hauteur);
            fill(255, 221, 233);
            rect(x, y2, largeur, hauteur);
        }
        else {
            x = width - (sound21.currentTime() - first) * width / (duration - first);
            largeur = width - x;
            fill(255, 221, 233);
            rect(0, y1, width, hauteur);
            fill(255, 221, 233);
            rect(0, y2, width, hauteur);
            fill(0, 0, 0);
            rect(x, y1, largeur, hauteur);
            fill(0, 0, 0);
            rect(x, y2, largeur, hauteur);
        }
        pop();

    }

    // touche V
    playSound(sound22,86)
    if (sound22.isPlaying() == true){
        push()
        noFill()
        stroke(255,160,0)
        strokeWeight(10)
        let wave = sound22FFT.waveform();
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1,1, 0, height)
            let y = height*0.5 + rad*sin(angle)
            let x = width*0.5 + rad*cos(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)

        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1,1, 0, height)
            let y = height*0.25 + rad*sin(angle)
            let x = width*0.5 + rad*cos(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)

        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1,1, 0, height)
            let y = height*0.75 + rad*sin(angle)
            let x = width*0.5 + rad*cos(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)

        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1,1, 0, height)
            let y = height*0.5 + rad*sin(angle)
            let x = width*0.25 + rad*cos(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)

        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1,1, 0, height)
            let y = height*0.5 + rad*sin(angle)
            let x = width*0.75 + rad*cos(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE)
        pop()
    }
    
    // touche W
    playSound(sound23, 87);
    if (sound23.isPlaying()) {
        push();
        let x = 0, y, radius = 0.08 * width;
        y = height / 2;
        fill(255, 186, 206);
        noStroke();
        let first = 0, second = 0.1, third = 0.2, fourth = 0.3, duration = sound23.duration();
        if (sound23.currentTime() < first) {
            x = sound23.currentTime() * width / first;
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else if (sound23.currentTime() < second) {
            x = width - (sound23.currentTime() - first) * width * 0.5 / (second - first);
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else if (sound23.currentTime() < third) {
            x = width / 2 - (sound23.currentTime() - second) * width * 0.5 / (third - second);
            y = height / 2 + (sound23.currentTime() - second) * height * 0.5 / (third - second);
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else if (sound23.currentTime() < fourth) {
            x = width / 2;
            y = height / 2 + (sound23.currentTime() - third) * height * 0.5 / (fourth - third);
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else {
            x = width / 2 + (sound23.currentTime() - fourth) * width * 0.5 / (duration - fourth);
            y = height / 2 + (sound23.currentTime() - fourth) * height * 0.5 / (duration - fourth);
            translate(x, y);
            ellipse(0, 0, radius, radius);

        }
        pop();

        push();

        fill(255, 186, 206);
        noStroke();
        if (sound23.currentTime() < first) {
            x = sound23.currentTime() * width / first;
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else if (sound23.currentTime() < second) {
            x = width - (sound23.currentTime() - first) * width * 1.5 / (second - first);
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else if (sound23.currentTime() < third) {
            x = width / 2 - (sound23.currentTime() - second) * width * 1.5 / (third - second);
            y = height / 2 + (sound23.currentTime() - second) * height * 0.5 / (third - second);
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else if (sound23.currentTime() < fourth) {
            x = width / 2;
            y = height / 2 + (sound23.currentTime() - third) * height * 0.5 / (fourth - third);
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else {
            x = width / 2 + (sound23.currentTime() - fourth) * width * 1.5 / (duration - fourth);
            y = height / 2 + (sound23.currentTime() - fourth) * height * 0.5 / (duration - fourth);
            translate(x, y);
            ellipse(0, 0, radius, radius);

        }
        pop();
    }

    //touche X

    playSound(sound24, 88); 
    if (sound24.isPlaying() == true) { 
        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width);
        strokeWeight(22);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius); 
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.9);
        strokeWeight(20);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.8);
        strokeWeight(18);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.7);
        strokeWeight(16);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.6);
        strokeWeight(12);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.5);
        strokeWeight(8);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.4);
        strokeWeight(4);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.3);
        strokeWeight(2);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.2);
        strokeWeight(1);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.1);
        strokeWeight(0.5);
        stroke(250, 250, 250);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.05);
        strokeWeight(0.4);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.025);
        strokeWeight(0.3);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.020);
        strokeWeight(0.2);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 50, width * 0.010);
        strokeWeight(0.1);
        stroke(255, 200, 200);
        fill(127, 26, 26);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
    }

//touche Y
playSound(sound25, 89); 
if (sound25.isPlaying() == true) {
    push();

    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 800);
    var ellipseAlpha = map(rms, 0, 1, 90, 600); 
    noStroke();
    fill(114, 6, 6);
    ellipse(width * 0.8, height * 0.5, ellipseSize, ellipseSize);

    pop();

    push();
    
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 1500);
    var ellipseAlpha = map(rms, 0, 1, 90, 600); 
    noFill();
    stroke(222, 154,204);
    strokeWeight(1);
    ellipse(width * 0.8, height * 0.5, ellipseSize, ellipseSize);

    pop();

    push();
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 100, 800);
    var ellipseAlpha = map(rms, 0, 1, 450, 1000); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
    noStroke();
    fill(222, 154,204);
    ellipse(width * 0.3, height * 0.5, ellipseSize, ellipseSize);
    pop();

    push();
    
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 1500);
    var ellipseAlpha = map(rms, 0, 1, 90, 600); 
    noFill();
    stroke(114, 6, 6);
    strokeWeight(1);
    ellipse(width * 0.3, height * 0.5, ellipseSize, ellipseSize);

    pop();

    push();
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 900);
    var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
    noStroke();
    fill(114, 6, 6);
    ellipse(width * 0.1, height * 0.75, ellipseSize, ellipseSize);
    pop();

    push();
    
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 1500);
    var ellipseAlpha = map(rms, 0, 1, 90, 600); 
    noFill();
    stroke(222, 154,204);
    strokeWeight(1);
    ellipse(width * 0.1, height * 0.75, ellipseSize, ellipseSize);

    pop();

    push();
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 900);
    var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
    noStroke();
    fill(222, 154,204);
    ellipse(1200, 700, ellipseSize, ellipseSize);
    pop();

    push();
    
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 1500);
    var ellipseAlpha = map(rms, 0, 1, 90, 600); 
    noFill();
    stroke(114, 6, 6);
    strokeWeight(1);
    ellipse(1200, 700, ellipseSize, ellipseSize);

    pop();

    push();
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 900);
    var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
    noStroke();
    fill(114, 6, 6);
    ellipse(800, 200, ellipseSize, ellipseSize);
    pop();

    push();
    
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 1500);
    var ellipseAlpha = map(rms, 0, 1, 90, 600); 
    noFill();
    stroke(222, 154,204);
    strokeWeight(1);
    ellipse(800, 200, ellipseSize, ellipseSize);

    pop();

    push();
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 900);
    var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
    noStroke();
    fill(222, 154,204);
    ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize);
    pop();

    push();
    
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 1500);
    var ellipseAlpha = map(rms, 0, 1, 90, 600); 
    noFill();
    stroke(114, 6, 6);
    strokeWeight(1);
    ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize);

    pop();

    push();
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 900);
    var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
    noStroke();
    fill(114, 6, 6);
    ellipse(200, height * 200, ellipseSize, ellipseSize);
    pop();

    push();
    
    var rms = sound25Amp.getLevel();
    var ellipseSize = map(rms, 0, 1, 50, 1500);
    var ellipseAlpha = map(rms, 0, 1, 90, 600); 
    noFill();
    stroke(222, 154,204);
    strokeWeight(1);
    ellipse(200, height * 200, ellipseSize, ellipseSize);

    pop();
}


//touche Z
playSound(sound26, 90); 
if (sound26.isPlaying() == true) {
    push();
    var angle = map(sound26.currentTime(), 0, sound26.duration(), 9, PI);
    translate(width * 0.2, height * 0.8);
    rotate(angle);
    rectMode(CENTER);
    stroke(250, 250, 250);
    strokeWeight(30);
    fill(0, 0, 0, 0);
    rect(0, 0, width * 2, height * 2);
    pop();

    push();
    var angle = map(sound26.currentTime(), 0, sound26.duration(), 9, PI);
    translate(width * 0.8, height * 0.2);
    rotate(angle);
    rectMode(CENTER);
    stroke(250, 250, 250);
    strokeWeight(30);
    fill(0, 0, 0, 0);
    rect(0, 0, width * 2, height * 2);
    pop();

    push();
    var angle = map(sound26.currentTime(), 0, sound26.duration(), 9, PI);
    translate(width * 0.2, height * 0.2);
    rotate(angle);
    rectMode(CENTER);
    stroke(250, 250, 250);
    strokeWeight(20);
    fill(0, 0, 0, 0);
    rect(0, 0, width * 2, height * 2);
    pop();

    push();
    var angle = map(sound26.currentTime(), 0, sound26.duration(), 9, PI);
    translate(width * 0.8, height * 0.8);
    rotate(angle);
    rectMode(CENTER);
    stroke(250, 250, 250);
    strokeWeight(20);
    fill(0, 0, 0, 0);
    rect(0, 0, width * 2, height * 2);
    pop();

    push();
    var angle = map(sound26.currentTime(), 0, sound26.duration(), 9, PI);
    translate(width * 1.5, height * 0.8);
    rotate(angle);
    rectMode(CENTER);
    stroke(250, 250, 250);
    strokeWeight(20);
    fill(0, 0, 0, 0);
    rect(0, 0, width * 2, height * 2);
    pop();

    push();
    var angle = map(sound26.currentTime(), 0, sound26.duration(), 9, PI);
    translate(width * 0.8, height * 1.5);
    rotate(angle);
    rectMode(CENTER);
    stroke(250, 250, 250);
    strokeWeight(20);
    fill(0, 0, 0, 0);
    rect(0, 0, width * 2, height * 2);
    pop();

    push();
    var angle = map(sound26.currentTime(), 0, sound26.duration(), 9, PI);
    translate(width * 1.5, height * 0.8);
    rotate(angle);
    rectMode(CENTER);
    stroke(250, 250, 250);
    strokeWeight(20);
    fill(0, 0, 0, 0);
    rect(0, 0, width * 2, height * 2);
    pop();

    push();
    var angle = map(sound26.currentTime(), 0, sound26.duration(), 9, PI);
    translate(width * 0.8, height * 1.5);
    rotate(angle);
    rectMode(CENTER);
    stroke(250, 250, 250);
    strokeWeight(20);
    fill(0, 0, 0, 0);
    rect(0, 0, width * 2, height * 2);
    pop();
}

}

function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play()
    }
}
