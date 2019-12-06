let soundO1;
let sound02;
let sound03;
let sound03FFT;
let sound04;
let sound05;
let sound06;
let sound06FFT;
let sound07;
let sound07FFT;
let sound08;
let sound09;
let sound10;
let sound11;
let sound12;
let sound12FFT;
let sound13;
let sound14;
var sound15;
var sound15Amp;
let sound16;
let sound17;
let sound18;
let sound19;
let sound20;
let sound20FFT;
let sound21;
let sound22;
let sound23;
let sound24;
let sound25;
let sound26;

//N
var xpos = []
var ypos = []
var xtarget = []
var ytarget = []






function preload() {

    sound01 = loadSound("assets/sound01.wav") // A
    sound02 = loadSound("assets/sound02.wav") // B 
    sound03 = loadSound("assets/sound03.wav") // C
    sound04 = loadSound("assets/sound04.wav") // D
    sound05 = loadSound("assets/sound05.wav") // E
    sound06 = loadSound("assets/sound06.wav") // F
    sound07 = loadSound("assets/sound07.wav") // G
    sound08 = loadSound("assets/sound08.wav") // H
    sound09 = loadSound("assets/sound09.wav") // I
    sound10 = loadSound("assets/sound10.wav") // J
    sound11 = loadSound("assets/sound11.wav") // K
    sound12 = loadSound("assets/sound12.wav") // L
    sound13 = loadSound("assets/sound13.wav") // M
    sound14 = loadSound("assets/sound14.wav") // N
    sound15 = loadSound("assets/sound15.wav") // O
    sound16 = loadSound("assets/sound16.wav") // P
    sound17 = loadSound("assets/sound17.wav") // Q
    sound18 = loadSound("assets/sound18.wav") // R
    sound19 = loadSound("assets/sound19.wav") // S
    sound20 = loadSound("assets/sound20.wav") // T
    sound21 = loadSound("assets/sound21.wav") // U
    sound22 = loadSound("assets/sound22.wav") // V
    sound23 = loadSound("assets/sound23.wav") // W
    sound24 = loadSound("assets/sound24.wav") // X
    sound25 = loadSound("assets/sound25.wav") // Y
    sound26 = loadSound("assets/sound26.wav") // Z
    
   


}


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0)


    sound03FFT = new p5.FFT(0.8, 1024);
    sound03FFT.setInput(sound03);

    sound06FFT = new p5.FFT(0.8, 16);
    sound06FFT.setInput(sound06)


    sound07FFT = new p5.FFT(0.8, 1024);
    sound07FFT.setInput(sound07);

    for (var i = 0; i < 50; i++) {
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    sound20FFT = new p5.FFT(0.8, 1024);
    sound20FFT.setInput(sound20);

    sound12FFT = new p5.FFT(0.8, 1024);
    sound12FFT.setInput(sound12);


  //O
    sound15Amp = new p5.Amplitude()
    sound15Amp.setInput(sound15)

}
    






function draw() {

   
    background(80, 28, 67);
    
    //touche A
    playSound(sound01, 65)
    if (sound01.isPlaying() == true) {
        push();
       
        let r = map(sound01.currentTime(), 0, sound01.duration(), 50, width); // animation qui dire le temps du son joué
        fill(245, 197, 67); // couleur 
       
        ellipse(width * 0.5, height * 0.5, r, r); 
        noStroke(); // sans contour
        pop();
    }

    
    //touche B 
    playSound(sound02, 66);
    if (sound02.isPlaying() == true) {
        push();
       
        let r = map(sound02.currentTime(), 0, sound02.duration(), 0, width);
        fill('#841D3E');
        noStroke();
        ellipse(width * 0.5, height * 0.5, r, r);

        pop();

    }

    //touche C 
    playSound(sound03, 67)
    if (sound03.isPlaying() == true) {
        push();
        var waveform = sound03FFT.waveform();
        noFill();
        beginShape();
        stroke('#B7263D');
        strokeWeight(0.5);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0.9, waveform.length, 0.9, width);
            var y = map(waveform[i], -1, 1, 0, height);
            ellipse(width * 0.5, height * 0.5, x, y);
        }
        endShape();
        pop();
    }
    


    //touche D
    playSound(sound04, 68);
    if (sound04.isPlaying() == true) {
        push();

        let r = map(sound04.currentTime(), 0, sound04.duration() * 0.33, 0, height * 0.5);
        r = constrain(r, 0, height * 0.5);

        let c = map(sound04.currentTime(), sound04.duration() * 0.33, sound04.duration(), 0, height * 0.5);
        c = constrain(c, 0, height * 0.5);

        rectMode(CENTER);
        fill(236, 100, 66);
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c);

        pop();

    }


    //touche E
    playSound(sound05, 69);
    if (sound05.isPlaying() == true) {
        
        push();
        var rotation = map(sound05.currentTime(), 0, sound05.duration(), 0, PI);

        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        noStroke();
        fill('#841D3E');
        rect(0, 0, width * 0.5, width * 0.05);
        pop();
    }


    //touche F
    playSound(sound06, 70); // 'e' == drone1
    if (sound06.isPlaying() == true) {
        
        push()
        sound06FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound06FFT.getEnergy("bass")

        push()
        noStroke();
        fill(236, 100, 66, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        noStroke();
        fill(245, 197, 67, 100)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke();
        fill(236, 100, 66, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()
    }


    

    //touche G
    playSound(sound07, 71);
    if (sound07.isPlaying() == true) {
        push();
        var waveform = sound07FFT.waveform();
        noFill();
        beginShape();
        stroke('#F5C543');
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);

        }
    
        endShape();
        pop();
    }

    if (sound07.isPlaying() == true) {
        push();
        var waveform = sound07FFT.waveform();
        noFill();
        beginShape();
        stroke('#F841D3E');
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 10, waveform.length, 2, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);

        }
    
        endShape();
        pop();
    }




    //touche H
    playSound(sound08, 72);
    if (sound08.isPlaying() == true) {

        push();
        let nsegment = 70;
        let ncurrentsegment = (map(sound08.currentTime(), 0, sound08.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#EC6442');
            fill('#501C43')
            strokeWeight(2);
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.45 * cos(angle);
            let y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(width * 0.5, height * 0.5, x, y);

            pop();
        }

        

    }
    if (sound08.isPlaying() == true) {

        push();
        let nsegment = 70;
        let ncurrentsegment = (map(sound08.currentTime(), 0, sound08.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#B7263D');
            fill('#501C43')
            strokeWeight(2);
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.2 + height * 0.1 * cos(angle);
            let y = height * 0.2+ height * 0.1 * sin(angle);
            ellipse(width * 0.8, height * 0.8, x, y);

            pop();
        }
    

      

    }
    if (sound08.isPlaying() == true) {

        push();
        let nsegment = 70;
        let ncurrentsegment = (map(sound08.currentTime(), 0, sound08.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#F5C543');
            fill('#501C43')
            strokeWeight(2);
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.2 + height * 0.1 * cos(angle);
            let y = height * 0.2+ height * 0.1 * sin(angle);
            ellipse(width * 0.2, height * 0.2, x, y);
    
            pop();
        }
    }

    //touche I
    playSound(sound09, 73);
    if (sound09.isPlaying() == true) {
        push();
        let angle = map(sound09.currentTime(),
            0, sound09.duration(),
            0, TWO_PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(angle);
        noFill();
        strokeWeight(13);
        stroke(223, 154, 136);


        rect(2, 0, height * 0.25, height * 0.25);
        pop();


    }

    //touche J
    playSound(sound10, 74);
    if (sound10.isPlaying() == true) {

        push();
        let nsegment = 96;
        let ncurrentsegment = (map(sound10.currentTime(), 0, sound10.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#B7263D');
            strokeWeight(2)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.45 * cos(angle);
            let y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            
        }
        
        pop();

    }

    //touche K
    playSound(sound11, 75);
    if (sound11.isPlaying() == true) {
       
        push();
        let nsegment = 70;
        let ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#B7263D');
            strokeWeight(2);
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.45 * cos(angle);
            let y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(width * 0.5, height * 0.5, x, y);

            pop();
        }

        

    }

    // touche 
    playSound(sound12, 76);
    if (sound12.isPlaying() == true) {
        push();
        var waveform = sound12FFT.waveform();
        noFill();
        beginShape();
        stroke('#F5C543');
        strokeWeight(4);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 9, height);
            curveVertex(x, y);

        }
    
        endShape();
        pop();
    }
    
    


    // M 
    playSound(sound13, 77);
    if (sound13.isPlaying() == true) {
        var t = map(sound13.currentTime(), 0, sound13.duration() * 0.5, 0, 1)
        var grey = map(sound13.currentTime(), sound13.duration() * 0.5, sound13.duration(), 255, 180)
        t = constrain(t, 0, 10)
        grey = constrain('#841D3E')
        push()
        noStroke();
        fill('#B7263D')
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 10, 10)
        }
        pop()
    }
    


    //N
    playSound(sound14, 78) // 'u' == stab3 / animation 7
    if (sound14.isPlaying() == true) {
        var t = map(sound14.currentTime(), 0, sound14.duration() * 0.5, 0, 1)
        var grey = map(sound14.currentTime(), sound14.duration() * 0.5, sound14.duration(), 255, 180)
        t = constrain(t, 0, 10)
        grey = constrain('#841D3E')
        push()
        noStroke();
        fill('#F5C543')
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 10, 10)
        }
        pop()
    }

   

    //O
    playSound(sound15, 79);
    if (sound15.isPlaying() == true) { 
        push(); 
        var amp = sound15Amp.getLevel(); 
        var whiteLevel = map(amp, 0, 1, 210, 255); 
        noStroke();
        fill(whiteLevel);
        rect(0, 0, width, height);
        pop();
    }


    //P
    playSound(sound16, 80);
    if (sound16.isPlaying() == true){
        push();
        let angle = map(sound16.currentTime(), 0, sound16.duration(), 0, TWO_PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(angle);
        noFill();
        strokeWeight(13);
        stroke(223, 154, 136);


        rect(2, 0, height * 0.25, height * 0.25);
        pop();


    }
    if (sound16.isPlaying() == true) {

        push();
        let nsegment = 96;
        let ncurrentsegment = (map(sound16.currentTime(), 0, sound16.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#D65F48');
            strokeWeight(2)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.45 * cos(angle);
            let y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);

        }
        
        pop();

    }

    //Q 81
    playSound(sound17, 81);
    if (sound17.isPlaying() == true){
        push();
        let angle = map(sound17.currentTime(), 0, sound17.duration(), 0, TWO_PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(angle);
        noFill();
        strokeWeight(13);
        stroke(223, 154, 136);


        rect(2, 0, height * 0.25, height * 0.25);
        pop();


    }
    
    
    


    //R 82
    playSound(sound18, 82);
    if (sound18.isPlaying() == true){
            push();
            let nsegment = 1000;
            let ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), 0, nsegment + 1));
            for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#EC6442');
            strokeWeight(1)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 1.5 * cos(angle);
            let y = height * 1 + height * 1.5* sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            }
            pop();
    }

    //S 83
    playSound(sound19, 83);
    if (sound19.isPlaying() == true){
        push();
        let nsegment = 1000;
        let ncurrentsegment = (map(sound19.currentTime(), 0, sound19.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
        stroke('#F5C543');
        strokeWeight(1)
        let angle = map(i, 0, nsegment, 0, TWO_PI);
        let x = width * 0.5 + height * 1.5 * cos(angle);
        let y = height * 1 + height * 1.5* sin(angle);
        line(width * 0.5, height * 0.5, x, y);
        }
        pop();
    }

    
    //T 84
    playSound(sound20, 84);
    if (sound20.isPlaying() == true){
        push();
        var waveform = sound20FFT.waveform();
        noFill();
        beginShape();
        stroke('#F5C543');
        strokeWeight(0.5);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0.9, waveform.length, 0.9, width);
            var y = map(waveform[i], -1, 1, 0, height);
            ellipse(width * 0.5, height * 0.5, x, y);
        }
        endShape();
        pop();
    }
    
    //U 85
    playSound(sound21, 85);
    if (sound21.isPlaying() == true){
            push();
            let nsegment = 1000;
            let ncurrentsegment = (map(sound21.currentTime(), 0, sound21.duration(), 0, nsegment + 1));
            for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#B7263D');
            strokeWeight(1)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 1.5 * cos(angle);
            let y = height * 1 + height * 1.5* sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            }
            pop();
    }

    //V 86
    playSound(sound22, 86);
    if (sound22.isPlaying() == true){
        push();
       
        let r = map(sound22.currentTime(), 0, sound22.duration(), 50, width);
        fill('#B7263D');
        noStroke();
        ellipse(width * 0.5, height * 0.5, r, r);
        pop();
    }
    if (sound22.isPlaying() == true) {

        push();
        let nsegment = 96;
        let ncurrentsegment = (map(sound22.currentTime(), 0, sound22.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#F5C543');
            strokeWeight(2)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 1.5 * cos(angle);
            let y = height * 1 + height * 1.5 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);

            
        }
        
        pop();

    }
  

    
    //W 87
    playSound(sound23, 87);
    if (sound23.isPlaying() == true){

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound23.currentTime(), 0, sound23.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#FFFFFF');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            
        }
        
        pop();

    }
    if (sound23.isPlaying() == true) {

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound23.currentTime(), 0, sound23.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#B7263D');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.3, height * 0.3, x, y);
            
        }
        
        pop();

    }
    if (sound23.isPlaying() == true) {

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound23.currentTime(), 0, sound23.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#EC6442');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.7, height * 0.7, x, y);
            
        }
        
        pop();

    }
    if (sound23.isPlaying() == true) {

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound23.currentTime(), 0, sound23.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#F5C543');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.9, height * 0.9, x, y);
            
        }
        
        pop();

    }
    if (sound23.isPlaying() == true) {

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound23.currentTime(), 0, sound23.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#841D3E');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.1, height * 0.1, x, y);
            
        }
        
        pop();

    }

    //X 88
    playSound(sound24, 88);
    if (sound24.isPlaying() == true){

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound24.currentTime(), 0, sound24.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#EC6442');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            
        }
        
        pop();

    }
    if (sound24.isPlaying() == true) {

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound24.currentTime(), 0, sound24.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#B7263D');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.3, height * 0.3, x, y);
            
        }
        
        pop();

    }
    if (sound24.isPlaying() == true) {

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound24.currentTime(), 0, sound24.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#F5C543');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.7, height * 0.7, x, y);
            
        }
        
        pop();

    }


    //Y 89
    playSound(sound25, 89);
    if (sound25.isPlaying() == true){

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound25.currentTime(), 0, sound25.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#EC6442');
            strokeWeight(0.5);
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 1.5 * cos(angle);
            let y = height * 1 + height * 1.5 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            
        }
        
        pop();

    }
    
    //Z 90
    playSound(sound26, 90 );
    if (sound26.isPlaying() == true) {

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound26.currentTime(), 0, sound26.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#F5C543');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            
        }
        
        pop();

    }
    if (sound26.isPlaying() == true) {

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound26.currentTime(), 0, sound26.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#F5C543');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.3, height * 0.3, x, y);
            
        }
        
        pop();

    }
    if (sound26.isPlaying() == true) {

        push();
        let nsegment = 76;
        let ncurrentsegment = (map(sound26.currentTime(), 0, sound26.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke('#F5C543');
            strokeWeight(0.5)
            let angle = map(i, 0, nsegment, 0, TWO_PI);
            let x = width * 0.5 + height * 0.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.7, height * 0.7, x, y);
            
        }
        
        pop();

    }

    
}

function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();

    }
}

function windowResized() {
        marginX = windowWidth - int((windowWidth / rectSize)) * rectSize;
        marginY = windowHeight - int((windowHeight / rectSize)) * rectSize;
    
    }