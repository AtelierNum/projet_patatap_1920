let sound1
let sound2
let sound3
let sound4
let sound4FFT
let sound5
let sound6
let sound7
let sound8
let c = 0.0
let d = 0.0
let sound9
let sound10
let sound10Amp
let sound11
let sound11Amp
let sound12
let sound13
let sound14
let sound14FFT
let sound15
let sound15FFT
let sound16
let sound16FFT
let sound17
let sound17FFT
let sound18
let sound18FFT
let sound19
let sound19Amp
let sound20
let sound21
let sound21Amp
let sound22
let sound22FFT
let sound22Amp
let sound23
let sound23Amp
let xpos23 = []
let ypos23 = []
let xtarget23 = []
let ytarget23 = []
let sound24
let sound24Amp
let sound25
let sound26
let sound26Amp
let z = 0.0;
let y = 0.0;


// Tout les Assets
function preload() {
    sound1 = loadSound('assets/audio1.mp3');
    sound2 = loadSound('assets/audio2.mp3');
    sound3 = loadSound('assets/audio3.mp3');
    sound4 = loadSound('assets/audio4.mp3');
    sound5 = loadSound('assets/audio5.mp3');
    sound6 = loadSound('assets/audio6.mp3');
    sound7 = loadSound('assets/audio7.mp3');
    sound8 = loadSound('assets/audio8.mp3');
    sound9 = loadSound('assets/audio9.mp3');
    sound10 = loadSound('assets/audio10.wav');
    sound11 = loadSound('assets/audio11.wav');
    sound12 = loadSound('assets/audio12.wav');
    sound13 = loadSound('assets/audio13.wav');
    sound14 = loadSound('assets/audio14.wav');
    sound15 = loadSound('assets/audio15.wav');
    sound16 = loadSound('assets/audio16.mp3');
    font = loadFont('assets/Championship.ttf');
    sound17 = loadSound('assets/audio17.mp3');
    sound18 = loadSound('assets/audio18.mp3');
    sound19 = loadSound('assets/audio19.mp3');
    sound20 = loadSound('assets/audio20.wav');
    sound21 = loadSound('assets/audio21.wav');
    sound22 = loadSound('assets/audio22.wav');
    sound23 = loadSound('assets/audio23.mp3');
    sound24 = loadSound('assets/audio24.wav');
    sound25 = loadSound('assets/audio25.wav');
    sound26 = loadSound('assets/audio26.wav');
}

//var analyzer
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0, random([0], [100]));

    sound4FFT = new p5.FFT(0.8, 1024)
    sound4FFT.setInput(sound4)

    sound7Amp = new p5.Amplitude();
    sound7Amp.setInput(sound7);

    sound10Amp = new p5.Amplitude();
    sound10Amp.setInput(sound10);

    sound11Amp = new p5.Amplitude();
    sound11Amp.setInput(sound11);

    sound14FFT = new p5.FFT(0.8, 1024)
    sound14FFT.setInput(sound14)

    sound15FFT = new p5.FFT(0.8, 1024)
    sound15FFT.setInput(sound15)

    sound16FFT = new p5.FFT(0.8, 1024);
    sound16FFT.setInput(sound16);
    textFont(font);
    textSize(130);
    textAlign(CENTER, CENTER);

    sound17FFT = new p5.FFT(0.8, 1024)
    sound17FFT.setInput(sound17)

    sound18FFT = new p5.FFT(0.8, 1024)
    sound18FFT.setInput(sound18)

    sound19Amp = new p5.Amplitude();
    sound19Amp.setInput(sound19);

    sound20Amp = new p5.Amplitude();
    sound20Amp.setInput(sound20);

    sound21Amp = new p5.Amplitude();
    sound21Amp.setInput(sound21);

    sound22FFT = new p5.FFT(0.8, 1024)
    sound22FFT.setInput(sound22)
    sound22Amp = new p5.Amplitude();
    sound22Amp.setInput(sound22);

    sound23Amp = new p5.Amplitude();
    sound23Amp.setInput(sound23);
    for (let ad = 0; ad < 50; ad++) {

        xpos23.push(random(0, width))
        ypos23.push(random(0, -height))
        xtarget23.push(random(width))
        ytarget23.push(random(height))
    }

    sound24Amp = new p5.Amplitude();
    sound24Amp.setInput(sound24);

    sound25Amp = new p5.Amplitude();
    sound25Amp.setInput(sound25);

    sound26Amp = new p5.Amplitude();
    sound26Amp.setInput(sound25);


    
}

function draw() {
    var speed = (abs(pmouseX - mouseX) + abs(pmouseY - mouseY)) / 2
    background(0, 0, 0, 25)
    fill(random([0], [255]),0,random([0], [255]), )
    noStroke()
    ellipse(mouseX, mouseY, speed, speed);
    ellipse(windowWidth - mouseX, windowHeight - mouseY, speed, speed);
    

    //Touche A
    playSound(sound1, 65)
    if (sound1.isPlaying() == true) {
        push();

        var a = map(sound1.currentTime(), 0, sound1.duration(), windowWidth, -windowWidth * 0.2);
        translate(a, 0);
        rectMode(CORNER);
        fill(0, 255, 0);
        rect(0, 0, width * 2, height * 0.2);
        fill(0, 255, 0);
        rect(0, windowHeight * 0.40, width * 2, height * 0.2);
        rect(0, windowHeight * 0.80, width * 2, height * 0.2);

        pop()
        push()
        var a = map(sound1.currentTime(), 0, sound1.duration(), 0, -windowHeight * 0.2);
            translate( 0, a);
            rectMode(CORNER);
            fill(255, 0, 255);
            rect(0, 0, width * 4, height * 0.2);
            fill(255, 0, 255);
            rect(0, windowHeight * 0.40, width * 2, height * 0.2);
            rect(0, windowHeight * 0.80, width * 2, height * 0.2);
    
            pop()
    
    }

    //Touche B
    playSound(sound2, 66)
    if (sound2.isPlaying() == true) {
            push();

        var diam = map(sound2.currentTime(), 0, sound2.duration(), 50, width);

        noFill();
        stroke(0, 255, 0);
        strokeWeight(5);
        ellipse(width * 0.1, height * 0.1, diam, diam);

        stroke(255, 0, 255);
        ellipse(width * 0.2, height * 0.2, diam, diam);

        stroke(0, 255, 0);
        ellipse(width * 0.3, height * 0.3, diam, diam);

        stroke(255, 0, 255);
        ellipse(width * 0.4, height * 0.4, diam, diam);

        stroke(0, 255, 0);
        ellipse(width * 0.5, height * 0.5, diam, diam);

        stroke(255, 0, 255);
        ellipse(width * 0.6, height * 0.6, diam, diam);

        stroke(0, 255, 0);
        ellipse(width * 0.7, height * 0.7, diam, diam);

        stroke(255, 0, 255);
        ellipse(width * 0.8, height * 0.8, diam, diam);

        stroke(0, 255, 0);
        ellipse(width * 0.9, height * 0.9, diam, diam);

        pop()
    }

    // Touche C
    playSound(sound4, 67)
    if (sound4.isPlaying() == true) {
        push()
        var waveform = sound4FFT.waveform();
        console.log(waveform)

        noFill();
        beginShape();
        stroke(255, 0, 225); 
        strokeWeight(3);
        for (let i = 0; i < waveform.length; i++) {
            let x = map(i, 0, waveform.length, 0, width);
            let y = map(waveform[i], -1, 1, 0, height);

            curveVertex(x, y);
           
        }
        
        endShape()
         pop()
    }

    //Touche D

    playSound(sound5, 68)
    if (sound5.isPlaying() == true) {
        push()
        c = c + 0.04 
        d = cos(c) * 2.5
        rectMode(CENTER)
        fill(0,150,0)
        translate(width * 0.5, height * 0.5)
        rotate(frameCount)
        scale(d);
        rect(0, 0, height * 0.25, height * 0.25)
        pop()
    }

    //Touche E
    playSound(sound8, 69)
    if (sound8.isPlaying() == true) {

    push()
    var rotation = map(sound8.currentTime(), 0, sound8.duration(), 0, PI)
        c = c + 0.04 
        d = cos(c) * 2.5
        translate(width / 2, height / 2)
        rotate(frameCount) 
        scale(d);
        fill(255, 0, 255)
        rect(0, 0, 50, 50)
        translate(75, 0)
        fill(255)
        scale(d) 
        rect(0, 0, 50, 50)
        pop()
    }

 //Touche F
 playSound(sound9, 70)
 if (sound9.isPlaying() == true) {
 push();
 
 var b = 96;
 var e = (map(sound9.currentTime(), 0, sound9.duration(), 0, b + 1));
 for (var i = 0; i < e; i++){
     
     stroke(246, 0, 180, 300);
     strokeWeight(random([1], [5]));
     noFill();
      
     var angle = map(i, 0, b, 0, TWO_PI); 
     var x = width * 0.4 + height * 0.80 * cos(angle);
     var y = height * 0.5 + height * 0.10 * sin(angle);
     ellipse(width * 0.5, height * 0.5, x, y);
     rotate (angle) }
     pop();
    
}

    //Touche G
    playSound(sound10, 71)
    if (sound10.isPlaying() == true) {
    var amplitude = sound10Amp.getLevel();
    var f = map(amplitude, 0, 0.1, 20, 255);
    
    push();
    


    push();
    noStroke();
    fill(f, 0, f,255); 
    ellipse(0, 0, width, width);
    pop();

    push();
    noStroke();
    fill(f, 0, f, 255); 
    ellipse(width, height, width, width);
    pop();

    pop();

}

    // Touche H

    playSound(sound11, 72)
    if (sound11.isPlaying() == true) {
        push()
        var g = map(sound11.currentTime(), 0, sound11.duration(), 0, 1)
        var h = lerp(0, width, g)
        var i = width / 7
        var j = -(((h * h) / i) + h / i)
    
        rectMode(CENTER)
        noFill()
        strokeWeight(3)
        stroke(155, 0, 200)
        push()
        translate(width / 3 + h, height + j)
        rotate(frameCount / 15)
        rect(200, 200, 100, 100)
        pop()
        pop()
    
    }

    // Touche I

    playSound(sound12, 73)
    if (sound12.isPlaying() == true) {
        push()

        var diam = map(sound12.currentTime(), 0, sound12.duration(), 0.5, width)

        noFill()
        stroke(255, 0, 255)
        strokeWeight(100)
        ellipse(width * 1, height * 1, 100, 100)

        noFill()
        stroke(255)
        strokeWeight(50)
        ellipse(width * 1, height * 1, diam, diam)
        pop()
    }

    // Touche J
    playSound(sound13, 74); 
    if (sound13.isPlaying() == true) {
    push()

        for (let io = 0; io < 150; io += 20) {
            bezier(windowHeight - io / 2.0, 40 + io, 410, 20, 440, 300, 240 - io / 16.0, 300 + io / 8.0);
            translate(width * 0.5, height * 0.5)
            rotate(frameCount)
        }
            pop()

    }

    // Touche K
    playSound(sound14, 75); 
    if (sound14.isPlaying() == true) {
    sound14FFT.analyze();
    var ab = sound14FFT.getEnergy("mid")
    push()
        fill(255, 0, 110)
        var ac = map(sound14.currentTime(), 0, sound14.duration(), 0, PI);
        var ad = height - sin(ac) * height * 0.5;
        ellipse(width / 3, ad, ab, ab);

        fill(110, 255, 0)
        var ac = map(sound14.currentTime(), 0, sound14.duration(), 0, PI);
        var ad = height - sin(ac) * height * 0.5;
        ellipse(width * (20 / 30), ad, ab, ab);
        pop()
        pop()
}

    // Touche L
    playSound(sound15, 76); 
    if (sound15.isPlaying() == true) {
        
        sound15FFT.analyze();
        var ab = sound15FFT.getEnergy("mid")
        push();
        

        var npoint = ab
        var ncurrentpoint = (map(sound15.currentTime(), 0, sound15.duration(), 0, npoint + ab))
        for (var i = 0; i < ncurrentpoint; i++) {
            stroke(ab, 0, ab);
            strokeWeight(ab);;
            var angle = map(i, 0, npoint, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            point(x, y);
        

            

            stroke(0,ab,0);
            strokeWeight(ab)
            var angle = map(i, 0, npoint, 0, TWO_PI);
            var x = width * 0.5 + height * 0.3 * cos(angle) / 2;
            var y = height * 0.5 + height * 0.3 * sin(angle) / 2;
            point(x, y);
            

        }
        endShape()
        pop();
    }

    //Touche M 
    playSound(sound16, 77); 
    if (sound16.isPlaying() == true) {
        sound16FFT.analyze();
        var ab = sound16FFT.getEnergy('mid')
            push()
            textAlign(CENTER);
            drawWords(width * 0.5);

            function drawWords(x) {
                fill(0, ab, 0);
                text('COUCOU', 738, 320);
            }
            pop();
        
  }

    //Touche N
    playSound(sound17, 78); 
    if (sound17.isPlaying() == true) {
        push()
        sound17FFT.analyze();
        var ab = sound17FFT.getEnergy("mid")
        


        var nsegment = ab
        var ncurrentsegment = (map(sound17.currentTime(), 0, sound17.duration(), 0, nsegment + ab))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(random(ab), 0, random(ab));
            strokeWeight(3)
            var angle = map(i, 45, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * ab * cos(angle);
            var y = height * 0.5 + height * ab * sin(angle);
            line(width * 1, height * 0.5, x, y);

        }

        pop();

    }

    //Touche O
    playSound(sound18, 79); 
    if (sound18.isPlaying() == true) {
        push()
        sound18FFT.analyze();
        var ab = sound18FFT.getEnergy("mid")
        


        var nsegment = ab
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), 0, nsegment + ab))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(0, random(ab), 0);
            strokeWeight(3)
            var angle = map(i, 45, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * ab * cos(angle);
            var y = height * 0.5 + height * ab * sin(angle);
            line(width * 0, height * 0.5, x, y);

        }

        pop();

    }

    //Touche P
    playSound(sound19, 80); 
    if (sound19.isPlaying() == true) {
        var amplitude = sound19Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);

        push()
        var nsegment = 1000
        var ncurrentsegment = (map(sound19.currentTime(), 0, sound19.duration(), 0, nsegment + f))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(f,f,f,f);
            strokeWeight(f)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 180 * cos(angle);
            var y = height * 0.4 + height * 0.90 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }

        pop();
    }

        // Touche Q
        playSound(sound20, 81); 
    if (sound20.isPlaying() == true) {
        var amplitude = sound20Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);

        push()
        noStroke();
        push()
        rectMode(CENTER);
        fill(0, f, 0)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        noStroke();
        pop()
        
        push()
        rectMode(CENTER);
        fill(f, 0, f,f)
        translate(width * 0.40, height * 0.5)
        rotate(f) 
        rect(0, 0, width * 0.1, width * 0.1) 
        noStroke();
        pop()

        

        push()
        rectMode(CENTER);
        fill(f, 0, f,f)
        translate(width * 0.60, height * 0.5)
        rotate(f)
        rect(0, 0, width * 0.1, width * 0.1)
        noStroke();

        pop()

        push()
        rectMode(CENTER);
        fill(f, 0, f,f)
        translate(width * 0.50, height * 0.2)
        rotate(f) 
        rect(0, 0, width * 0.1, width * 0.1) 
        noStroke();
        pop()

        

        push()
        rectMode(CENTER);
        fill(f, 0, f,f)
        translate(width * 0.50, height * 0.8)
        rotate(f)
        rect(0, 0, width * 0.1, width * 0.1)
        noStroke();

        pop()


        pop()
    }

    // Touche R
    playSound(sound21, 82); 
    if (sound21.isPlaying() == true) {
        var amplitude = sound21Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);

        push();
        stroke(0, 230, f,f)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(f, height * 0.5, f, f);
        pop();

        push();
        stroke(0, 230, f,f)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(width*0.5, height*0.5, f, f);
        
        
        pop();
    }

    // Touche S
    playSound(sound22, 83); 
    if (sound22.isPlaying() == true) {
        
        
        
        var waveform = sound22FFT.waveform();
        console.log(waveform)
        var amplitude = sound22Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);
        push()

        noFill()
        stroke(random(f),0,random(f),random(f))
        strokeWeight(0.1)
        for (let i = 0; i < waveform.length; i++) {
            let x = map(i, 0, waveform.length, 0, width);
            let y = map(waveform[i], -1, 1, 0, height);
            ellipse (width / 2, height / 2, x, y)
            
        }
        endShape()
        pop()
    }

    // Touche T
    playSound(sound23, 84); 
    if (sound23.isPlaying() == true) {
        var amplitude = sound23Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);

        push()
        let t = map(sound23.currentTime(), 0, sound23.duration() * 0.75, 0, 1)
        let grey = map(sound23.currentTime(), sound23.duration() * 0.75, sound23.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(255, 255, 0)
        fill(255*f,0,f,100*f)
        noStroke()
        for (let ad = 0; ad < f; ad++) {
            let x = lerp(xpos23[ad], xtarget23[ad], t)
            let y = lerp(ypos23[ad], ytarget23[ad], t)
            ellipse(x, y, random([10], [500]), random([10], [500]))
            rotate(f)
        }
        pop()
    }

    // Touche U
    playSound(sound24, 85); 
    if (sound24.isPlaying() == true) {
        var amplitude = sound23Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);
        push()
        var ang = map(sound24.currentTime(), 0, sound24.duration(), 0, width)
        var amplitude = sound23Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);
        noFill()
        stroke(255)
        strokeWeight(f)
        ellipseMode(CENTER);
        ellipse(width * 0, height * 0, ang, ang)
        pop()

        push()
        var ang = map(sound24.currentTime(), 0, sound24.duration(), 0, width)
        var amplitude = sound23Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);
        noFill()
        stroke(255)
        strokeWeight(f)
        ellipseMode(CENTER);
        ellipse(width * 1, height * 0, ang, ang)
        pop()

        push()
        var ang = map(sound24.currentTime(), 0, sound24.duration(), 0, width)
        var amplitude = sound23Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);
        noFill()
        stroke(255)
        strokeWeight(f)
        ellipseMode(CENTER);
        ellipse(width * 1, height * 1, ang, ang)
        pop()

        push()
        var ang = map(sound24.currentTime(), 0, sound24.duration(), 0, width)
        var amplitude = sound23Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);
        noFill()
        stroke(255)
        strokeWeight(f)
        ellipseMode(CENTER);
        ellipse(width * 0, height * 1, ang, ang)
        pop()

        push()
        var ang = map(sound24.currentTime(), 0, sound24.duration(), width, 0)
        var amplitude = sound23Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);
        noFill()
        stroke(0, 255, 0)
        strokeWeight(f)
        ellipseMode(CENTER);
        ellipse(width /2, height/2, ang, ang)
        pop()
        pop()
    }
    
    // Touche V
    playSound(sound25, 86); 
    if (sound25.isPlaying() == true) {
        var amplitude = sound20Amp.getLevel();
        var f = map(amplitude, 0, 0.1, 20, 255);

        push();
        var ac = map(sound25.currentTime(), 0, sound25.duration(), width , 0);
        translate(windowWidth * 0.5, windowHeight * 0.5)
        noFill();
        stroke(0, 200, 0,f);
        strokeWeight(f);
        ellipse(0, 0, ac, ac);
        pop();

    } 
    // Touche W
    playSound(sound3, 87); 
    if (sound3.isPlaying() == true) {
        push();
        var rayon = map(sound3.currentTime(), 0, sound3.duration(), 50, width); 

        noFill();
        stroke(255,0,255);
        ellipse(width * 0.5, height * 0.5, rayon, rayon);
        pop();
    }

    // Touche X
    playSound(sound7, 88); 
    if (sound7.isPlaying() == true) {
        push()
        var amplitude = sound7Amp.getLevel();
        var f = map(amplitude, 0, 0.4, 100, 255); 
        
        noStroke()
        fill(f, f, f,f)
        rect(0, 0, width, height)
        pop()
    }
    
    // Touche Y
    playSound(sound26, 89); 
    if (sound26.isPlaying() == true) {
        var f = map(sound26.currentTime(), 0, sound26.duration(), 0, width)
        var amplitude = sound26Amp.getLevel();
        push()
        stroke(f, 0, f,f)
        strokeWeight(f)

        z = z + .5;
        y = cos(z) * 2;

        translate(width / 2, height / 2);
        scale(y);

        translate(f, 0);
        noFill()
        scale(y);
        ellipse(0, 0, 50, 50);
        pop()
    }

    //Touche Z
    playSound(sound6, 90);
    if (sound6.isPlaying() == true) {
        var diam = map(sound6.currentTime(), 0, sound6.duration(), 50, width);
        push()

        noFill();
        stroke(0, 255, 0);
        strokeWeight(2.5);
        ellipse(width * 0.5, height * 0.5, diam * 0.2, diam * 0.2);

        stroke(255, 0, 255);
        ellipse(width * 0.5, height * 0.5, diam * 0.4, diam * 0.4);

        stroke(0, 255, 0);
        ellipse(width * 0.5, height * 0.5, diam * 0.6, diam * 0.6);

        stroke(255, 0, 255);
        ellipse(width * 0.5, height * 0.5, diam * 0.8, diam * 0.8);

        stroke(0, 255, 0);
        ellipse(width * 0.5, height * 0.5, diam * 1, diam * 1);

        stroke(255, 0, 255);
        ellipse(width * 0.5, height * 0.5, diam * 1.2, diam * 1.2);

        stroke(0, 255, 0);
        ellipse(width * 0.5, height * 0.5, diam * 1.4, diam * 1.4);

        stroke(255, 0, 255);
        ellipse(width * 0.5, height * 0.5, diam * 1.6, diam * 1.6);

        stroke(0, 255, 0);
        ellipse(width * 0.5, height * 0.5, diam * 1.8, diam * 1.8);

        stroke(255, 0, 255);
        ellipse(width * 0.5, height * 0.5, diam * 2, diam * 2);

        stroke(0, 255, 0);
        ellipse(width * 0.5, height * 0.5, diam * 2.2, diam * 2.2);

        stroke(255, 0, 255);
        ellipse(width * 0.5, height * 0.5, diam * 2.4, diam * 2.4);

        pop()
    }
}

function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play();
    }
}
