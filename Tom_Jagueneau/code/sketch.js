let sound01
let sound02
let sound03
let sound04
let sound05
let sound06
let sound07
let sound08
let sound09
let sound10
let sound11
let sound12
let sound13
let sound14
let sound15
let sound16
let sound17
let sound18
let sound19
let sound20
let sound21
let sound22
let sound23
let sound24
let sound25
let sound26


let sound08FFT

let sound24FFT
let sound26FFT

let xpos15 = []
let ypos15 = []
let xtarget15 = []
let ytarget15 = []

let xpos16 = []
let ypos16 = []
let xtarget16 = []
let ytarget16 = []

let l1 = 0.0;
let l2 = 0.0;


let b1
let b2
let b3




function preload(){
    sound01 = loadSound("assets/epee1.wav")
    sound02 = loadSound("assets/epee2.wav")
    sound03 = loadSound("assets/epee3.wav")
    sound04 = loadSound("assets/epee4.wav")
    sound05 = loadSound("assets/epee5.wav")
    sound06 = loadSound("assets/arrow1.mp3")
    sound07 = loadSound("assets/arrow2.wav")
    sound08 = loadSound("assets/spear1.wav")
    sound09 = loadSound("assets/shield1.wav")
    sound10 = loadSound("assets/shield2.wav")
    sound11 = loadSound("assets/bell1.wav")
    sound12 = loadSound("assets/harp1.mp3")
    sound13 = loadSound("assets/flute1.wav")
    sound14 = loadSound("assets/flute2.wav")
    sound15 = loadSound("assets/mandolin1.wav")
    sound16 = loadSound("assets/mandolin2.wav")
    sound17 = loadSound("assets/horse1.wav")
    sound18 = loadSound("assets/horse2.wav")
    sound19 = loadSound("assets/march1.wav")
    sound20 = loadSound("assets/door1.wav")
    sound21 = loadSound("assets/ambiance1.wav")
    sound22 = loadSound("assets/ambiance2.wav")
    sound23 = loadSound("assets/ambiance3.wav")
    sound24 = loadSound("assets/ambiance4.wav")
    sound25 = loadSound("assets/ambiance5.wav")
    sound26 = loadSound("assets/ambiance6.wav")

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 50; i++) {

        xpos15.push(random(0, width))
        ypos15.push(random(0, -height))
        xtarget15.push(random(width))
        ytarget15.push(random(height))
    }

    for (let i = 0; i < 50; i++) {

        xpos16.push(random(0, width))
        ypos16.push(random(0, -height))
        xtarget16.push(random(width))
        ytarget16.push(random(height))
    }


    sound06FFT = new p5.FFT(0.8, 1024)
    sound06FFT.setInput(sound06) 

    sound07FFT = new p5.FFT(0.8, 1024)
    sound07FFT.setInput(sound07)

    sound08FFT = new p5.FFT(0.8, 16)
    sound08FFT.setInput(sound08)

    sound24FFT = new p5.FFT(0.8, 16)
    sound24FFT.setInput(sound24)

    sound26FFT = new p5.FFT(0.8, 16)
    sound26FFT.setInput(sound26)

    sound12Amp = new p5.Amplitude();
    sound12Amp.setInput(sound12);


    b1=height/2
    b2=height/3
    b3=height/4

}



function draw() {
    background(15, 5, 107)

    // touche A
    playSound(sound01, 65) //A
    if (sound01.isPlaying()==true){

        push()
        noStroke();
        let a1 = map(sound01.currentTime(), 0, sound01.duration(), 0, PI)
        rectMode();
        translate(width * 0.2, height * 0.15);
        rotate(a1);

        fill( 217,20,0)
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        push()
        noStroke();
        let a2 = map(sound01.currentTime(), 0, sound01.duration(), 0, PI * 0.8);
        rectMode(CENTER);
        translate(width * 0.7, height * 0.8);
        rotate(a2);

        fill(255);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

    }

    // touche Z
    playSound(sound02, 90) //Z    
    if (sound02.isPlaying()==true){

        push()
        noStroke();
        let z1 = map(sound02.currentTime(), 0, sound02.duration(), 0, PI)
        rectMode();
        translate(width * 0.8, height * 0.2);
        rotate(z1);

        fill(255, 255, 0);
        rect(0, 0, width * 1, width * 0.005);
        pop()

        push()
        noStroke();
        let z2 = map(sound02.currentTime(), 0, sound02.duration(), 0, PI * 0.2);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(z2);

        fill(217,20,0);
        rect(0, 0, width * 2, width * 0.005);
        pop()

    }

    // touche E
    playSound(sound03, 69) //E
     if (sound03.isPlaying() == true){
        push()
        noStroke();
        let e1 = map(sound03.currentTime(), 0, sound03.duration(), 0, PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(e1);

        fill( 217,20,0);
        rect(0, 0, width * 0.9, width * 0.005);
        pop()

        push()
        noStroke();
        let e2 = map(sound03.currentTime(), 0, sound03.duration(), 0, PI * 0.9);
        rectMode();
        translate(width * 0.5, height * 0.2);
        rotate(e2);

        fill(243,241,197);
        rect(10, 30, width * 0.5, width * 0.005);
        pop()
     }


    // touche R
    playSound(sound04, 82) //R
    if (sound04.isPlaying() == true){
        push();
        translate(width * 0.5, height * 0.5);
        let r1 = map(sound04.currentTime(), 0, sound04.duration(), 0, 2 * PI);
        rectMode(CENTER);
        rotate(r1);
        noStroke()
        fill( 217,20,0);
        rect(0, 0, width * 0.003, height * 0.5);
        pop();
        
    }       

    

    // touche T
    playSound(sound05, 84) //T
    if (sound05.isPlaying() == true){
        push()
        noStroke();
        let t1 = map(sound05.currentTime(), 0, sound05.duration(), 0, PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(t1);

        fill(255);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        push()
        noStroke();
        let t2 = map(sound05.currentTime(), 0, sound05.duration(), 0, PI * 0.2);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(t2);

        fill(243,241,197);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        
        
    }


    // touche Y
    playSound(sound06, 89) //Y
    if (sound06.isPlaying()==true){

        push()
        let waveform = sound06FFT.waveform();
        noFill();
        beginShape();
        stroke(217,20,0);
        strokeWeight(5);
        for (let i = 0; i < waveform.length; i++) {
            let x = map(i, 1, waveform.length, 1, width);
            let y = map(waveform[i], -0.2, 0.5, 0, height, 0);
            curveVertex(x, y);
        }
        endShape();
        pop()

    }

    // touche U
    playSound(sound07, 85) //U
    if (sound07.isPlaying()==true){

        push()
        let waveform = sound07FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 249, 158);
        strokeWeight(3);
        for (let i = 0; i < waveform.length; i++) {
            let x = map(waveform[i], 3, 1, 0, height);
            let y = map(i, 0, waveform.length, 0, width);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }

    // touche I
    playSound(sound08, 73) //I
    if (sound08.isPlaying() == true) {
        push()
        sound08FFT.analyze()
        rectMode(CENTER)
        let i1 = sound08FFT.getEnergy("bass")

        push()
        fill(255, 255, 0, i1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        noStroke()
        pop()
    
        push()
        fill(217,20,0,70)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, i1, i1)
        noStroke()
        pop()

        push()
        fill(255, 255, 0, i1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        noStroke()
        pop()
    }

    // touche O
    playSound(sound09, 79) //O
    if (sound09.isPlaying() == true){
        let o1 = map(sound09.currentTime(), 0, sound09.duration(), 0, width*0.7)
        fill (255,245,45)
        ellipse(width*0.2, height*0.7, o1, o1)

        let o2 = map(sound09.currentTime(), 0, sound09.duration(), 0, width*0.5)
        fill (243,241,197)
        ellipse(width*0.8, height*0.2, o2, o2)

        let o3 = map(sound09.currentTime(), 0, sound09.duration(), 0, width*0.4)
        fill (15, 5, 107)
        ellipse(width*0.8, height*0.2, o3, o3)
        
    }

    // touche P
    playSound(sound10, 80) //P
    if (sound10.isPlaying() == true){
        let p1 = map(sound10.currentTime(), 0, sound10.duration(), 0, width*0.7)
        fill (243,241,197)
        ellipse(width*0.2, height*0.3, p1, p1)

        let p2 = map(sound10.currentTime(), 0, sound10.duration(), 0, width*0.4)
        fill (255,245,45)
        ellipse(width*0.8, height*0.9, p2, p2)

        let p3 = map(sound10.currentTime(), 0, sound10.duration(), 0, width*0.3)
        fill (15, 5, 107)
        ellipse(width*0.8, height*0.9, p3, p3)

    }

    // touche Q
    playSound(sound11, 81) //Q
    if (sound11.isPlaying() == true){
        let nsegment = 177
        let ncurrentsegment = map(sound11.currentTime(), 0, sound11.duration(), 0, nsegment + 1)
        push()
    
        pop()
    for (let i = 0; i < ncurrentsegment; i++) {
        stroke(0);
        strokeWeight(4)
        let angle = map(i, 0, nsegment, 0, TWO_PI);
        let x = width * 0.5 + height * 0.45 * cos(angle);
        let y = height * 0.5 + height * 0.45 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);
        }
    }

    // touche S
    playSound(sound12, 83) //S
    if (sound12.isPlaying() == true) {
        push();
        let amplitude = sound12Amp.getLevel();
        let whiteLevel = map(amplitude, 0, 0.2, 0, 150); 
        noStroke();
        fill(whiteLevel, 0,0);
        rect(0,0,width, height);
        pop();
    }

    // touche D
    playSound(sound13, 68) //D
    if (sound13.isPlaying() == true) {
        let d1 = map(sound13.currentTime(), 0, sound13.duration(), 50, width)
        push()

        noFill()
        stroke(255)
        strokeWeight(2.5)
        ellipse(width * 0.5, height * 0.5, d1 * 0.2, d1 * 0.2)

        stroke(255, 255, 0)
        ellipse(width * 0.5, height * 0.5, d1 * 0.4, d1 * 0.4)

        stroke(243,241,197)
        ellipse(width * 0.5, height * 0.5, d1 * 0.6, d1 * 0.6)

        stroke(243,241,197,44)
        ellipse(width * 0.5, height * 0.5, d1 * 0.8, d1 * 0.8)

        stroke(217,20,0)
        ellipse(width * 0.5, height * 0.5, d1* 1, d1 * 1)

        stroke(255, 255, 0)
        ellipse(width * 0.5, height * 0.5, d1 * 1.2, d1 * 1.2)

        stroke(0, 255, 255, 60)
        ellipse(width * 0.5, height * 0.5, d1 * 1.4, d1 * 1.4)

        stroke(255, 255, 0)
        ellipse(width * 0.5, height * 0.5, d1 * 1.6, d1 * 1.6)

        stroke(217,20,0)
        ellipse(width * 0.5, height * 0.5, d1 * 1.8, d1 * 1.8)

        stroke(255)
        ellipse(width * 0.5, height * 0.5, d1 * 2, d1 * 2)

        stroke(255, 255, 0)
        ellipse(width * 0.5, height * 0.5, d1 * 2.2, d1 * 2.2)

        stroke(243,241,197)
        ellipse(width * 0.5, height * 0.5, d1 * 2.4, d1 * 2.4)

        pop()
    }


    // touche F
    playSound(sound14, 70) //F
    if (sound14.isPlaying() == true) {

        push()
        let f1 = map(sound14.currentTime(), 0, sound14.duration(), 50, width) //  //

        noFill()
        stroke(243,241,197)
        strokeWeight(5)
        ellipse(width * 0.1, height * 0.1, f1,f1)

        stroke(255, 255, 0)
        ellipse(width * 0.2, height * 0.2, f1,f1)

        stroke(217,20,0)
        ellipse(width * 0.3, height * 0.3, f1,f1)

        stroke(0, 255, 255, 60)
        ellipse(width * 0.4, height * 0.4, f1,f1)

        stroke(255)
        ellipse(width * 0.5, height * 0.5, f1,f1)

        stroke(255, 255, 0)
        ellipse(width * 0.6, height * 0.6, f1,f1)

        stroke(0, 255, 255, 60)
        ellipse(width * 0.7, height * 0.7, f1,f1)

        stroke(255, 255, 0)
        ellipse(width * 0.8, height * 0.8, f1,f1)

        stroke(217,20,0)
        ellipse(width * 0.9, height * 0.9, f1,f1)

        pop()
    }

    // touche G
    playSound(sound15, 71) //G
    if (sound15.isPlaying()==true){
        push()
        let t = map(sound15.currentTime(), 0, sound15.duration() * 0.75, 0, 1)
        let grey = map(sound15.currentTime(), sound15.duration() * 0.75, sound15.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(255, 255, 0)
        fill(grey)
        noStroke()
        for (let i = 0; i < 50; i++) {
            let x = lerp(xpos15[i], xtarget15[i], t)
            let y = lerp(ypos15[i], ytarget15[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }
  

    

    // touche H
    playSound(sound16, 72) //H
    if (sound16.isPlaying()==true){
        push()
        let t = map(sound16.currentTime(), -30, sound16.duration() * 0.9, 0, 01)

        t = constrain(t, 0, 1)

        noStroke()
        fill(255, 255, 0, 70)

        for (let i = 0; i < 100; i++) {
            let x = lerp(xpos16[i], xtarget16[i], t)
            let y = lerp(ypos16[i], ytarget16[i], t)
            ellipse(x, y, 30, 30)
        }
        pop()
    }


    // touche J
    playSound(sound17, 74) //J
    if (sound17.isPlaying() == true) {
        push()
        fill(238, 184, 38, 44)
        noStroke()
        for (let i = 0; i < 9; i++) {

            let y = int(i / 4) * height * 0.25 + height * 0.25
            let x = (i % 3) * width * 0.25 + width * 0.25
            translate(p5.Vector.fromAngle(millis() / 500, 100))
            rect(x, y, 177, 177);

        }
        pop()
    }


    // touche K
    playSound(sound18, 75) //K
    if (sound18.isPlaying() == true) {
        push()
        fill(238, 184, 38, 70)
        noStroke()
        for (let i = 0; i < 9; i++) {

            let y = int(i / 4) * height *0.25 + height * 0.1
            let x = (i % 6) * width * 0.25 + width * 0.3
            translate(p5.Vector.fromAngle(millis() / 500, 100))
            rect(x, y, 100, 100);

        }
        pop()
    }


    // touche L
    playSound(sound19, 76) //L
    if (sound19.isPlaying() == true) {
        push()


        l1 = l1 + 0.04;
        l2 = cos(l1) * 2;
        translate(width / 2, height / 2)
        rectMode(CENTER)
        scale(l2); 
        fill(255,255,0,70);
        noStroke()
        rect(0, 0, 300, 200);

        translate(75, 0);
        fill(255,255,255, 50);
        scale(l2);
        rect(0, 0, 200, 300);
        pop()
    }

    // touche M
    playSound(sound20, 77) //M
    if (sound20.isPlaying() == true) {
        push()
        let m = map(sound20.currentTime(), 0, sound20.duration() / 12, 0, PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(m)
        noStroke()

        fill(255)
        rect(height * 0.4, height * 0.2, width * 0.7, width * 0.05)
        pop()
    }
    


    // touche w
    playSound(sound21, 87) //W
    if (sound21.isPlaying() == true){
        push()
        rectMode(CENTER)
        let w1 = map (sound21.currentTime(), 0, sound21.duration(), 0, TWO_PI)
        fill (255,255,0,77)  
        translate(width*0.5, height*0.5)
        rotate(w1)
        rect(0, 0, height*0.25, height*0.25)
        noStroke()
        pop()

        push()
        rectMode(CENTER)
        let w2 = map (sound21.currentTime(), 0, sound21.duration(), 0, TWO_PI)
        fill (255,255,0, 50)  
        translate(width*0.5, height*0.5)
        rotate(w2)
        rect(0, 0, height*0.5, height*0.5)
        noStroke()
        pop()

        push()
        rectMode(CENTER)
        let w3 = map (sound21.currentTime(), 0, sound21.duration(), 0, TWO_PI)
        fill (255,255,0,77)  
        translate(width*0.5, height*0.5)
        rotate(w3)
        rect(0, 0, height*0.75, height*0.75)
        noStroke()
        pop()

        push()
        rectMode(CENTER)
        let w4 = map (sound21.currentTime(), 0, sound21.duration(), 0, TWO_PI)
        fill (255,255,0, 50)  
        translate(width*0.5, height*0.5)
        rotate(w4)
        rect(0, 0, height*1, height*1)
        noStroke()
        pop()

        push()
        rectMode(CENTER)
        let w5 = map (sound21.currentTime(), 0, sound21.duration(), 0, TWO_PI)
        fill (255,255,0,77)  
        translate(width*0.5, height*0.5)
        rotate(w5)
        rect(0, 0, height*1.25, height*1.25)
        noStroke()
        pop()
        

    }

    // touche X
    playSound(sound22, 88) //X
    if (sound22.isPlaying() == true) {
        push();
        let x1 = map(sound22.currentTime(), 1, sound22.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.8, height * 0.4, x1, x1);
        pop();

        push();
        let x1b = map(sound22.currentTime(), 7, sound22.duration(), 0, width);
        stroke(255,255,0)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.8, height * 0.4, x1b, x1b);
        pop();

        push();
        let x2 = map(sound22.currentTime(), 1, sound22.duration(), 0, width);
        stroke(255,255,0)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.7, height, x2, x2);
        pop();

        push();
        let x2b = map(sound22.currentTime(), 7, sound22.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.7, height, x2b, x2b);
        pop();

        push();
        let x3 = map(sound22.currentTime(), 1, sound22.duration(), 0, width);
        stroke(255,255,0)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.3, height * 0.1, x3, x3);
        pop();

        push();
        let x3b = map(sound22.currentTime(), 7, sound22.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.3, height * 0.1, x3b, x3b);
        pop();

        push();
        let x4 = map(sound22.currentTime(), 1, sound22.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.1, height * 0.9, x4, x4);
        pop();

        push();
        let x4b = map(sound22.currentTime(), 7, sound22.duration(), 0, width);
        stroke(255,255,0)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.1, height * 0.9, x4b, x4b);
        pop();

        
    }
    
    // touche C
    playSound(sound23, 67) //C
    if (sound23.isPlaying() == true) {
        push();
        let c1 = map(sound23.currentTime(), 10, sound23.duration(), 177, PI);
        translate(width, height);
        rotate(c1);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(5);
        fill(0, 0, 0, 0);
        rect(1200, 750, width * 2, height * 2);

        pop();

    }
    

    // touche V
    playSound(sound24, 86) //V
    if (sound24.isPlaying() == true) {
        push()

        sound24FFT.analyze();
        rectMode(CENTER);
        let v1 = sound24FFT.getEnergy("bass")

        push()
        fill(243,241,197, 30)
        noStroke()
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.5, width * 0.5)
        pop()

        push()
        fill(15, 5, 107)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, v1, v1)
        pop()

        push()
        fill(243,241,197, 30)
        noStroke()
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.5, width * 0.5)
        pop()


        pop()
    }
    


    // touche B
    playSound(sound25, 66) //B
    if (sound25.isPlaying()==true){

        push()
        stroke(255,255,255, 50)
        strokeWeight(25)
        line(0, b1, width, b1);
        b1 = b1 - 5;
        if (b1 < 0) {
            b1 = height;
        }
        pop()

        push()
        stroke(255,255,0,50)
        strokeWeight(25)
        line(0, b2, width, b2);
        b2 = b2 - 5;
        if (b2 < 0) {
            b2 = height;
        }
        pop()

        push()
        stroke(255,255,0,80)
        strokeWeight(25)
        line(0, b3, width, b3);
        b3 = b3 - 5;
        if (b3 < 0) {
            b3 = height;
        }
        pop()


    }

    // touche N
    playSound(sound26, 78) //N
    if (sound26.isPlaying() == true) {
        push()
        sound26FFT.analyze();
        let n1 = sound26FFT.getEnergy("mid")

        let nsegment = n1
        let ncurrentsegment = (map(sound26.currentTime(), 0, sound26.duration(), 0, nsegment + n1))
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke(255,255, random(n1),50);
            strokeWeight(3)
            let angle = map(i, 45, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * n1 * cos(angle);
            let y = height * 0.5 + height * n1 * sin(angle);
            line(width * 0, height * 0.5, x, y);

        }

        pop();

    }
}
















function playSound(sound, KeyID){
    if(keyIsDown(KeyID)==true && sound.isPlaying()==false){
        sound.play();

    }

}

