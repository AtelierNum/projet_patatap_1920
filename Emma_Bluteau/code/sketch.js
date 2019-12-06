var sound1
var sound1FFT
var sound2
var sound3
var sound4
var sound1
var sound5
var sound5FFT
var sound6
var sound7
var sound7FFT
var sound8
var sound9
var sound9FFT
var sound10
var sound10FFT
var sound11FFT
var sound11
var sound11Amp
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
var sound23
var sound24
var sound25
var sound26


var a1;


var xpos = []
var ypos = []
var xtarget = []
var ytarget = []


function preload() {

    sound1 = loadSound('assets/3.wav');
    sound2 = loadSound('assets/4.wav');
    sound3 = loadSound('assets/5.wav');
    sound4 =loadSound('assets/6.wav');
    sound5 =loadSound('assets/7.wav');
    sound6 =loadSound('assets/8.wav');
    sound7 =loadSound('assets/9.wav');
    sound8 =loadSound('assets/10.wav');
    sound9 =loadSound('assets/11.wav');
    sound10 =loadSound('assets/12.wav');
    sound11 =loadSound('assets/13.wav');
    sound12 =loadSound('assets/14.wav');
    sound13 =loadSound('assets/15.wav');
    sound14 = loadSound('assets/16.wav');
    sound15 = loadSound('assets/17.wav');
    sound16 = loadSound('assets/18.wav');
    sound17 =loadSound('assets/19.wav');
    sound18 =loadSound('assets/20.wav');
    sound19 =loadSound('assets/21.wav');
    sound20 =loadSound('assets/22.wav');
    sound21 =loadSound('assets/23.wav');
    sound22 =loadSound('assets/24.wav');
    sound23 =loadSound('assets/8.wav');
    sound24 =loadSound('assets/1.wav');
    sound25 =loadSound('assets/2.wav');
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
    sound1FFT = new p5.FFT(0.8, 1024)
    sound1FFT.setInput(sound1)

    sound7FFT = new p5.FFT(0.8, 1024); // analyse de notre son
    sound7FFT.setInput(sound7);

    sound9FFT = new p5.FFT(0.8, 1024)
    sound9FFT.setInput(sound9)
    
    sound10Amp = new p5.Amplitude();
    sound10Amp.setInput(sound10);


    song11Amp = new p5.Amplitude()
    song11Amp.setInput(sound11)
    song11Amp.toggleNormalize()

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


}


    function draw(){
background(8, 2, 32 )


    //touche  a  
    playsound(sound1,65)
    if (sound1.isPlaying()==true){
        let waveform = sound1FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 255, 255);
        strokeWeight(4);
        for (let i = 0; i < waveform.length; i++) {
            let x = map(i, 0, waveform.length, 0, width);
            let y = map(waveform[i], -1, 1, 0, height, 0);
            curveVertex(x, y);
        }
        endShape();

    }



    //touche z
    playsound(sound2,90)
    if (sound2.isPlaying()==true){ 
        push();
        var rad = map(sound2.currentTime(), 0, sound2.duration(), 10, width);
        stroke(90, 153, 255)
        strokeWeight(50)
        noFill();
        ellipse(width * 0.8, height * 0.1, rad, rad);
        pop();
    

    }



    //touche e
    playsound(sound3,69)
    if (sound3.isPlaying()==true){
        push();
        var rad = map(sound3.currentTime(), 0, sound3.duration(), 10, width);
        stroke(245, 11, 50)
        strokeWeight(50)
        noFill();
        ellipse(width * 0.8, height * 0.1, rad, rad);
        pop();
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
        fill(158, 240, 243  )
        rect(2, 2, width * 0.05, width * 0.05)
        pop()
    }

    //touche t
    playsound(sound5,84)
    if (sound5.isPlaying()==true){
        push();
        var rad = map(sound5.currentTime(), 0, sound5.duration(), 10, width * 3);
        stroke(245, 11, 50)
        strokeWeight(100)
        noFill();
        rectMode(CENTER)
        rect(height * -0.5, height * 0.5, rad, rad);
        pop();

    }

    //touche y
    playsound(sound6,89)
    if (sound6.isPlaying()==true){
            push();
            translate(width * 0.5, height * 0.5);
            var ang = map(sound6.currentTime(), 0, sound6.duration(), 0, 2 * PI);
            rectMode(CENTER);
            rotate(ang);
            noStroke(50)
            fill(255, 255, 255 );
            rect(0, 0, width * 0.003, height * 0.5);
            pop();
        
    }

    //touche u
    playsound(sound7,85)
    if (sound7.isPlaying()==true){
        push()


        var nsegment = 1000
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3) // déterminel'épaisseur du contour de la forme
        var angle = map(i, 0, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 180 * cos(angle);
        var y = height * 1 + height * 0.70 * sin(angle);
        line(width * 1, height * 30, x, y); //donnes le point d'émission de l'animation, ici ca part du centre de l'écran

        var nsegment = 1000
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(255, 255, 255); // détermine la couleur du contour de la forme selon l'ordre (rouge,vert,bleu)
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 5, TWO_PI);
        var x = width * 0.5 + height * 5 * cos(angle);
        var y = height * 0.5 + height * 8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        var nsegment = 1000
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 10, TWO_PI);
        var x = width * 0.5 + height * 10 * cos(angle);
        var y = height * 1 + height * 0.8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(255, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 1 * cos(angle);
        var y = height * 0.5 + height * 20 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        var nsegment = 1000
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 5, TWO_PI);
        var x = width * 0.5 + height * 5 * cos(angle);
        var y = height * 0.5 + height * 60 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        var nsegment = 1000
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(255, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 30 * cos(angle);
        var y = height * 0.5 + height * 18 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 10, TWO_PI);
        var x = width * 0.5 + height * 45 * cos(angle);
        var y = height * 1 + height * 0.5 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        var nsegment = 1000
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(255, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 10 * cos(angle);
        var y = height * 0.5 + height * 0.8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 30, TWO_PI);
        var x = width * 0.5 + height * 30 * cos(angle);
        var y = height * 1 + height * 50 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        pop();

       
    }

    //touche i
    playsound(sound8,73)
    if (sound8.isPlaying()==true){
        push();
        var rad = map(sound8.currentTime(), 0, sound8.duration(), 10, width);
        stroke(158, 240, 243)
        strokeWeight(50)
        noFill();
        ellipse(width * 0.2, height * 0.7, rad, rad);
        pop();

    }

    //touche o
    playsound(sound9,79)
    if (sound9.isPlaying()==true){

        var nsegment = 270
        var ncurrentsegment = map(sound9.currentTime(), 0, sound9.duration(), 0, nsegment + 1)

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(158, 240, 243 );
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * .5 + height * .5 * cos(angle);
            var y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0,5, height * 20, x, y);
        }
        pop()
    }

       
    

    //touche p
    playsound(sound10,80)
    if (sound10.isPlaying()==true){
        push();
        var amplitude = sound10Amp.getLevel();
        var whiteLevel = map(amplitude, 0, 0.4, 0, 255); 
        noStroke();
        fill(whiteLevel, whiteLevel, whiteLevel, 50);
        rect(0, 0, width, height);
        pop();

    }

    //touche q
    playsound(sound11,81)
    if (sound11.isPlaying()==true){
        push()


        var nsegment = 1000
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3) // déterminel'épaisseur du contour de la forme
        var angle = map(i, 0, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 180 * cos(angle);
        var y = height * 1 + height * 0.45 * sin(angle);
        line(width * 0.5, height * 0.5, x, y); //donnes le point d'émission de l'animation, ici ca part du centre de l'écran

        var nsegment = 1000
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243); // détermine la couleur du contour de la forme selon l'ordre (rouge,vert,bleu)
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 5, TWO_PI);
        var x = width * 0.5 + height * 5 * cos(angle);
        var y = height * 0.5 + height * 8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        var nsegment = 1000
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 10, TWO_PI);
        var x = width * 0.5 + height * 10 * cos(angle);
        var y = height * 1 + height * 0.8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 1 * cos(angle);
        var y = height * 0.5 + height * 20 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        var nsegment = 1000
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 5, TWO_PI);
        var x = width * 0.5 + height * 5 * cos(angle);
        var y = height * 0.5 + height * 60 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        var nsegment = 1000
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 30 * cos(angle);
        var y = height * 0.5 + height * 18 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 10, TWO_PI);
        var x = width * 0.5 + height * 45 * cos(angle);
        var y = height * 1 + height * 0.5 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        var nsegment = 1000
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 10 * cos(angle);
        var y = height * 0.5 + height * 0.8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(158, 240, 243);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 30, TWO_PI);
        var x = width * 0.5 + height * 30 * cos(angle);
        var y = height * 1 + height * 50 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);

        pop();

    }

    //touche s
    playsound(sound12,83)
    if (sound12.isPlaying()==true){

        push();
        var rand = 0;
        stroke(360)
        strokeWeight(15);
        for (var i = 1; i < steps; i++) {
            point((width / steps) * i, (height / 5) + random(-rand, rand));
            rand += random(-100,100);
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
        fill(255, 255, 255)

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

        push();
        var nsegment = 96
        var ncurrentsegment = (map(sound14.currentTime(), 0, sound14.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(245, 11, 50);
            strokeWeight(10);
            
            push();
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            point(x, y);
            pop();

            push();
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

    //touche g
    playsound(sound15,71)
    if (sound15.isPlaying()==true){

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(sound15.currentTime(), 0, sound15.duration(), 0, 2 * PI);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(255, 249, 158 );
        rect(0, 0, width * 0.003, height * 0.5);
        pop();
    
    }

    //touche h
    playsound(sound16,72)
    if (sound16.isPlaying()==true){
        push();
        var amplitude = sound16Amp.getLevel();
        var whiteLevel = map(amplitude, 0, 0.4, 0, 255); 
        noStroke();
        fill(whiteLevel, whiteLevel, whiteLevel, 50);
        rect(0, 0, width, height);
        pop();

    }

    //touche j
    playsound(sound17,74)
    if (sound17.isPlaying()==true){
        push()
        noStroke()
        var rms = analyzer.getLevel();
        var ellipseSize = map(rms, 0, 1, height * 0.01, height * 0.8); 
        fill(245, 11, 50);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize); 
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

        fill(255, 255, 255);
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

        var nsegment = 270
        var ncurrentsegment = map(sound19.currentTime(), 0, sound19.duration(), 0, nsegment + 1)

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255, 255, 255 );
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * .5 + height * .5 * cos(angle);
            var y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 2, height * 1, x, y);
        }
        pop()
    


    }

    //touche m
    playsound(sound20,77)
    if (sound20.isPlaying()==true){
        push();
        var rad = map(sound20.currentTime(), 0, sound20.duration(), width, 1)
        noFill()
        stroke(90, 153, 255);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound20.currentTime(), 2, sound20.duration(), width, 1) //le chiffre apres le currentTime correspond à l'arrivée de l'animation sur l'écran apres un certain lapse de temps
        noFill()
        stroke(245, 11, 50);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound20.currentTime(), 4, sound20.duration(), width, 1)
        noFill()
        stroke(90, 153, 255);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)

        pop();
        push();
        var rad = map(sound20.currentTime(), 6, sound20.duration(), width, 1)
        noFill()
        stroke(245, 11, 50);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound20.currentTime(), 8, sound20.duration(), width, 1)
        noFill()
        stroke(90, 153, 255);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound20.currentTime(), 10, sound20.duration(), width, 1)
        noFill()
        stroke(245, 11, 50);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound20.currentTime(), 12, sound20.duration(), width, 1)
        noFill()
        stroke(90, 153, 255);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound20.currentTime(), 14, sound20.duration(), width, 1)
        noFill()
        stroke(245, 11, 50);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound20.currentTime(), 16, sound20.duration(), width, 1)
        noFill()
        stroke(90, 153, 255);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(sound20.currentTime(), 18, sound20.duration(), width, 1)
        noFill()
        stroke(245, 11, 50);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();

        
    }

    //touche w
    playsound(sound21,87)
    if (sound21.isPlaying()==true){
        push();
        var rad = map(sound21.currentTime(), 0, sound21.duration(), 10, width * 3);
        stroke(245, 11, 50)
        strokeWeight(100)
        noFill();
        rectMode(CENTER)
        rect(height * -0.5, height * 0.5, rad, rad);
        pop();

    }

    //touche x
    playsound(sound22,88)
    if (sound22.isPlaying()==true){

        push();
        var rad = map(sound22.currentTime(), 0, sound22.duration(), 10, width);
        noStroke()
        fill(90, 153, 255);
        rect(width * 0.5, height * 0.5, rad, 10);
        pop();

        var rad = map(sound22.currentTime(), 0, sound22.duration(), 1, width);
        noStroke()
        fill(90, 153, 255);
        rect(width * 0.5, height * 0.5, rad * -1, 10);
        pop(); 

    }

    //touche c
    playsound(sound23,67)
    if (sound23.isPlaying()==true){

        
        push();
        var rad = map(sound23.currentTime(), 0, sound23.duration(), 10, width * 3);
        stroke(90, 153, 255)
        strokeWeight(100)
        noFill();
        rectMode(CENTER)
        rect(height * -0.5, height * 0.5, rad, rad);
        pop();

    }

    //touche v
    playsound(sound24,86)
    if (sound24.isPlaying()==true){

        push();
        var rad = map(sound24.currentTime(), 0, sound24.duration(), 50, width)
        fill(158, 240, 243)
        ellipse(width * 0.5, height * 0.5, rad, rad)

        pop();

    }

    //touche b
    playsound(sound25,66)
    if (sound25.isPlaying()==true){

        var nsegment = 270
        var ncurrentsegment = map(sound25.currentTime(), 0, sound25.duration(), 0, nsegment + 1)

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255, 255, 255);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * .5 + height * .5 * cos(angle);
            var y = height * 10 + height * 0.5 * sin(angle);
            line(width * 0,5, height * 1, x, y);
        }
        pop()
    }

    //touche n
    playsound(sound26,78)
    if (sound26.isPlaying()==true){
        
        push();
        var nsegment = 96
        var ncurrentsegment = (map(sound26.currentTime(), 0, sound26.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(90, 153, 255);
            strokeWeight(10);
            
            push();
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            point(x, y);
            pop();

            push();
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

