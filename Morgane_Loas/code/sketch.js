var sound1
var sound2
var sound3
var sound4
var sound5
var sound5FFT
var sound6
var sound7
var sound7FFT
var sound8
var sound9
var sound9FFT
var sound10
var sound11
var sound12
var totalPts = 300;
var steps = totalPts + 1;
var sound13
var sound13;
var xpos13 = []
var ypos13 = []
var xtarget13 = []
var ytarget13 = []
var sound14
var sound15
var sound16
var sound17
var sound18
var sound19
var sound20
var sound21
var sound21FFT
var sound22
var swoosh, sound22xpos = [],
    sound22ypos = [],
    sound22xtarget = [],
    sound22ytarget = [];
var sound23
var sound24
var sound25
var sound26

var stab5
var angle1 = 0;
var angle2 = 0;
var scalar = 300;


var a1;


var xpos = []
var ypos = []
var xtarget = []
var ytarget = []


function preload() {

    sound1 =loadSound('assets/118581__vann-westfold__daduda1.m4a');
    sound2 =loadSound('assets/54217__kaponja__guitar-arrpegio-2.wav');
    sound3 =loadSound('assets/401168__hap__gests4-1.mp3');
    sound4 =loadSound('assets/427307__bigmanjoe__old-piano-somber-chords1.m4a');
    sound5 =loadSound('assets/54210__kaponja__guitar-abstract-melody32.m4a');
    sound6 =loadSound('assets/387170__rdaly95__single-shot-gun.wav');
    sound7 =loadSound('assets/414357__korolkoff__finger-snapping.wav');
    sound8 =loadSound('assets/49658__sub-d__more-jazz-guitar1.wav');
    sound9 =loadSound('assets/261100__frankyboomer__jazz-loop1.wav');
    sound10 =loadSound('assets/118581__vann-westfold__daduda2.m4a');
    sound11 =loadSound('assets/177507__snapper4298__snap-6.wav');
    sound12 =loadSound('assets/91794__zinzan-101__soft-snare.wav');
    sound13 =loadSound('assets/54210__kaponja__guitar-abstract-melody31.m4a');
    sound14 =loadSound('assets/427307__bigmanjoe__old-piano-somber-chords3.m4a');
    sound15 =loadSound('assets/128306__dxe10__bass-slide.wav');
    sound16 =loadSound('assets/457490__tc630__5.wav');
    sound17 =loadSound('assets/317076__shpira__cymbal-big4-low.m4a');
    sound18 =loadSound('assets/261100__frankyboomer__jazz-loop2.wav');
    sound19 =loadSound('assets/46698__uauaua__9903132.wav');
    sound20 =loadSound('assets/118581__vann-westfold__daduda3.m4a');
    sound21 =loadSound('assets/54227__kaponja__guitar-chromatic-2.wav');
    sound22 =loadSound('assets/459305__soneproject__hat4d.flac');
    sound23 =loadSound('assets/118581__vann-westfold__daduda4.wav');
    sound24 =loadSound('assets/49658__sub-d__more-jazz-guitar2.wav');
    sound25 =loadSound('assets/54240__kaponja__guitar-jazz2.wav');
    sound26 =loadSound('assets/427307__bigmanjoe__old-piano-somber-chords2.m4a');
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    for (var i = 0; i < 50; i++) {

        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        xtarget.push(random(width))
        ytarget.push(random(height))
    }
    sound5FFT = new p5.FFT(0.8, 1024)
    sound5FFT.setInput(sound5)

    sound7FFT = new p5.FFT(0.8, 1024); // analyse de notre son
    sound7FFT.setInput(sound7);

    sound9FFT = new p5.FFT(0.8, 1024)
    sound9FFT.setInput(sound9)
    
    for (var i = 0; i < 50; i++) {
        xpos13.push(random(width))
        ypos13.push(random(-height))
        xtarget13.push(random(width))
        ytarget13.push(random(height))
    }

    sound16Amp = new p5.Amplitude();
    sound16Amp.setInput(sound16);

    analyzer = new p5.Amplitude();
    analyzer.setInput(sound17);

    sound21FFT = new p5.FFT(0.8, 16);
    sound21FFT.setInput(sound21);

    
    a1 = height / 2;

    sound22xpos.push(width)
    sound22ypos.push(height * 0.5)
    sound22xtarget.push(0)
    sound22ytarget.push(height * 0.5)


}


    function draw(){
background(191, 215, 255)


    //touche  a  
    playsound(sound1,65)
    if (sound1.isPlaying()==true){
        push()
        var t = map(sound1.currentTime(), 0, sound1.duration() * 0.75, 0, 1)
        var grey = map(sound1.currentTime(), sound1.duration() * 0.75, sound1.duration(), 255, 180)
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



    //touche z
    playsound(sound2,90)
    if (sound2.isPlaying()==true){ 
        push()
        var nsegment = 270
        var ncurrentsegment = map(sound2.currentTime(), 0, sound2.duration(), 0, nsegment + 1)

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(90, 153, 255);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * .3 + height * .3 * cos(angle);
            var y = height * 0.3 + height * 0.3 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop()

    }



    //touche e
    playsound(sound3,69)
    if (sound3.isPlaying()==true){
        push()
        var rotation = map(sound3.currentTime(), 0, sound3.duration(), 0, PI)
        
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        
        noStroke()
        fill(255)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()
    }
    
    //touche r
    playsound(sound4,82)
    if (sound4.isPlaying()==true){
        push()
        var rotation = map(sound4.currentTime(), 0, sound4.duration(), 0, PI)
        
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        noStroke()                            
        fill(255, 249, 158 )
        rect(0, 0, width * 0.05, width * 0.05)
        pop()
    }

    //touche t
    playsound(sound5,84)
    if (sound5.isPlaying()==true){
        let waveform = sound5FFT.waveform();
        noFill();
        beginShape();
        stroke(90, 153, 255);
        strokeWeight(5);
        for (let i = 0; i < waveform.length; i++) {
            let x = map(i, 0, waveform.length, 0, width);
            let y = map(waveform[i], -1, 1, 0, height, 0);
            curveVertex(x, y);
        }
        endShape();
    }

    //touche y
    playsound(sound6,89)
    if (sound6.isPlaying()==true){
            push();
            translate(width * 0.5, height * 0.5);
            var ang = map(sound6.currentTime(), 0, sound6.duration(), 0, 2 * PI);
            rectMode(CENTER);
            rotate(ang);
            noStroke()
            fill(255, 249, 158 );
            rect(0, 0, width * 0.003, height * 0.5);
            pop();
        
    }

    //touche u
    playsound(sound7,85)
    if (sound7.isPlaying()==true){

        push()
        var waveform = sound7FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 249, 158);
        strokeWeight(3);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(waveform[i], -1, 1, 0, height);
            var y = map(i, 0, waveform.length, 0, width);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }

    //touche i
    playsound(sound8,73)
    if (sound8.isPlaying()==true){
        var nsegment = 270
        var ncurrentsegment = map(sound8.currentTime(), 0, sound8.duration(), 0, nsegment + 1)

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255, 175, 211);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * .5 + height * .5 * cos(angle);
            var y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 20, height * 20, x, y);
        }
        pop()

    }

    //touche o
    playsound(sound9,79)
    if (sound9.isPlaying()==true){

        let waveform = sound9FFT.waveform();
        noFill();
        beginShape();
        stroke(255,175,211);
        strokeWeight(5);
        for (let i = 0; i < waveform.length; i++) {
            let x = map(i, 1, waveform.length, 1, width);
            let y = map(waveform[i], -1, 0.5, 0, height, 0);
            curveVertex(x, y);
        }
        endShape();

    }

    //touche p
    playsound(sound10,80)
    if (sound10.isPlaying()==true){

        push()
        var length = map(sound10.currentTime(), 0, sound10.duration(), 30, width)
        push()
        noStroke()
        rectMode(CENTER);
        fill(255, 175, 211)
        rect(0, height / 4, length, 20)
        pop()

    }

    //touche q
    playsound(sound11,81)
    if (sound11.isPlaying()==true){
        fill(255, 249, 158)
        noStroke()
        ellipse(width*0.5, height*0.80, 100, 100)
    }

    //touche s
    playsound(sound12,83)
    if (sound12.isPlaying()==true){

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

    //touche d
    playsound(sound13,68)
    if (sound13.isPlaying()==true){
        push()
        var t = map(sound13.currentTime(), -30, sound13.duration() * 0.9, 0, 01)

        t = constrain(t, 0, 1)

        noStroke()
        fill(255,175,211)

        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos13[i], xtarget13[i], t)
            var y = lerp(ypos13[i], ytarget13[i], t)
            ellipse(x, y, 30, 30)
        }
        pop()
    }

    //touche f
    playsound(sound14,70)
    if (sound14.isPlaying()==true){

        push()
        var length = map(sound14.currentTime(), 0, sound14.duration(), 30, width)
        push()
        noStroke()
        rectMode(CENTER);
        fill(255, 175, 211)
        rect(width, height * (3 / 4), length, 20)
        pop()
    }

    //touche g
    playsound(sound15,71)
    if (sound15.isPlaying()==true){

        push()
        translate(width * 0.5, height * 0.9)
        noStroke()                            
        fill(90, 153, 255 )
        rect(0, 0, width * 0.05, width * 0.05)
        pop()

    }

    //touche h
    playsound(sound16,72)
    if (sound16.isPlaying()==true){
        push();
        var lvl = sound16Amp.getLevel();
        var whiteLvl = map(lvl, 0, 0.75, 0, 255);
        noStroke();
        fill(360);
        rect(0, 0, width, height);
        pop();

    }

    //touche j
    playsound(sound17,74)
    if (sound17.isPlaying()==true){
        fill(90, 153, 255)
        noStroke()
        for (var i = 0; i < 9; i++) { 

            var y = int(i / 3) * height * 0.25 + height * 0.25 
            var x = (i % 3) * width * 0.25 + width * 0.25 
            ellipse(x, y, 50, 50); 

        }

        pop()

    }

    //touche k
    playsound(sound18,75)
    if (sound18.isPlaying()==true){

        push()
        noStroke();
        var rotation = map(sound18.currentTime(), 0, sound18.duration(), 0, PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(255, 249, 158);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        push()
        noStroke();
        var rotation = map(sound18.currentTime(), 0, sound18.duration(), 0, PI * 0.2);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(255, 249, 158, 50);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

    }

    //touche l
    playsound(sound19,76)
    if (sound19.isPlaying()==true){

        push();
        var angle = map(sound19.currentTime(), 0, sound19.duration(), 10, PI * 100);
        rectMode(CENTER);
        background(191, 215, 255)
        noFill();
        stroke(255, 249, 158);
        strokeWeight(3);
        rect(width * 0.5, height * 0.5, angle, angle);
        rect(width * 0.5, height * 0.3, angle, angle);
        rect(width * 0.5, height * 0.7, angle, angle);
        pop();


    }

    //touche m
    playsound(sound20,77)
    if (sound20.isPlaying()==true){

        push()
        noStroke();
        var rotation = map(sound20.currentTime(), 0, sound20.duration(), 0, PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(360);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        push()
        noStroke();
        var rotation = map(sound20.currentTime(), 0, sound20.duration(), 0, PI * 0.2);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(360, 50);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

    }

    //touche w
    playsound(sound21,87)
    if (sound21.isPlaying()==true){

        push()
        sound21FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound21FFT.getEnergy("bass")
    
        push()
        noStroke()
        fill(255, 249, 158, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()
    
        push()
        noStroke()
        fill(255, 175, 211, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()
    i
        push()
        noStroke()
        fill(255, 249, 158, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()
    
        pop()

    }

    //touche x
    playsound(sound22,88)
    if (sound22.isPlaying()==true){

        push()
        var t = map(sound22.currentTime(), 0, sound22.duration(), 0, 1)
        fill(255, 249, 158)
        noStroke()
        for (var i = 0; i < 50; i++) {
            var x = lerp(sound22xpos[i], sound22xtarget[i], t)
            var y = height * 0.5
            rectMode(CENTER)
            rect(x, y, 200, 100)
        }
        pop()

    }

    //touche c
    playsound(sound23,67)
    if (sound23.isPlaying()==true){

        push()
        noStroke();
        var rotation = map(sound23.currentTime(), 0, sound23.duration(), 0, PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(255, 175, 211);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        push()
        noStroke();
        var rotation = map(sound23.currentTime(), 0, sound23.duration(), 0, PI * 0.2);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(255, 175, 211, 50);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

    }

    //touche v
    playsound(sound24,86)
    if (sound24.isPlaying()==true){

        push()

        stroke(255)
        strokeWeight(25)
        line(0, a1, width, a1);
        a1 = a1 - 5;
        if (a1 < 0) {
            a1 = height;
        }
        pop()

    }

    //touche b
    playsound(sound25,66)
    if (sound25.isPlaying()==true){

        push();
        var rad = map(sound25.currentTime(), 0, sound25.duration(), width, 1)
        noFill()
        stroke(360);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();

    }

    //touche n
    playsound(sound26,78)
    if (sound26.isPlaying()==true){
        
        push()

        noStroke();
        rectMode(CENTER);

        let ang1 = radians(angle1);
        let ang2 = radians(angle2);

        let x1 = width / 2 + scalar * cos(ang1);
        let x2 = width / 2 + scalar * cos(ang2);

        let y1 = height / 2 + scalar * sin(ang1);
        let y2 = height / 2 + scalar * sin(ang2);

        fill(360);
        ellipse(width * 0.5 - 120, y1, scalar / 10, scalar / 10);
        ellipse(width * 0.5 + 120, y2, scalar / 10, scalar / 10); 

        angle1 += 2;
        angle2 += 3;
        pop()

    }

}
function playsound(sound, keyID){
    if (keyIsDown(keyID) == true && sound.isPlaying()==false){
      sound.play()
    }
    function playSound(sound, keyId) {
        if (keyIsDown(keyId) == true) {
            if (sound.isPlaying() == false) {
                sound.play();
            }
        }
    
    }
    
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
