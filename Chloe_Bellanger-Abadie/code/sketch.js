let sound01
let sound01FFT
let sound02
let sound02FFT
let sound03
let sound04
let sound04FFT
let sound05
let sound06
var sound06Amp
let sound07
let sound08
let t = 0
let sound09
let sound10
let sound10FFT
let sound11
var circle = [];
var state = false;
var square = [];
var morph = [];
let sound12
let sound12FFT
let sound13
let sound14
let sound15
let sound15FFT
let sound16
let sound17
let sound17FFT
let sound18
let sound18FFT
let sound19
let sound20
let sound21
let sound22
let sound23
let sound24
let sound25
var totalPts = 300;
var steps = totalPts + 1;
let sound26



function preload() {
    soundFormats('mp3', 'ogg');
    sound01 = loadSound('../assets/hihat-dams.wav');
    sound02 = loadSound('../assets/kick-dams.wav')
    sound03 = loadSound('../assets/shaker-dams.wav')
    sound04 = loadSound('../assets/synth-dams.wav')
    sound05 = loadSound('../assets/synth-drake.wav')
    sound06 = loadSound('../assets/test 2 bass.wav')
    sound07 = loadSound('../assets/test 2 beat.wav')
    sound08 = loadSound('../assets/test 2 flute aigu.wav')
    sound09 = loadSound('../assets/test 2 flute grv.wav')
    sound10 = loadSound('../assets/test 2 piano.wav')
    sound11 = loadSound('../assets/test 2 rythme pianp.wav')
    sound12 = loadSound('../assets/test 2 tititi.wav')
    sound13 = loadSound('../assets/test 1 melody.wav')
    sound14 = loadSound('../assets/test 1 boum.wav')
    sound15 = loadSound('../assets/test 1 boum tch.wav')
    sound16 = loadSound('../assets/test 1 bass 16-30-42-022.wav')
    sound17 = loadSound('../assets/touche Y.wav')
    sound18 = loadSound('../assets/touche U.wav')
    sound19 = loadSound('../assets/touche i.wav')
    sound20 = loadSound('../assets/touche o.wav')
    sound21 = loadSound('../assets/touche P.wav')
    sound22 = loadSound('../assets/touche k.wav')
    sound23 = loadSound('../assets/touche L.wav')
    sound24 = loadSound('../assets/touche M.wav')
    sound25 = loadSound('../assets/touche B.wav')
    sound26 = loadSound('../assets/touche N.wav')
}


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    //sound01.setVolume(0.1);
    //sound01.play();

   
    // on créee un objet de type FFT (fast fourier transform) pour obtenir une représentation sous forme de waveform.
    sound04FFT = new p5.FFT(0.8, 1024)
    sound04FFT.setInput(sound04) // on 'branche' cet analyseur à notre son 

    sound02FFT = new p5.FFT(0.8, 1024)
    sound02FFT.setInput(sound02)

    sound01FFT = new p5.FFT(0.8, 1024)
    sound01FFT.setInput(sound01)

    sound06Amp = new p5.Amplitude();
    sound06Amp.setInput(sound06)

    sound10FFT = new p5.FFT(0.8, 1024)
    sound10FFT.setInput(sound10)

    for (var angle = 0; angle < 360; angle += 9) {

        var v = p5.Vector.fromAngle(radians(angle - 90));
        v.mult(100);
        circle.push(v);
        morph.push(createVector());
    }
    //haut du carré
    for (var x = -50; x < 50; x += 10) {
        square.push(createVector(x, -50));
    }
    //coté droit
    for (var y = -50; y < 50; y += 10) {
        square.push(createVector(50, y));
    }
    //en bas
    for (var x = 50; x > -50; x -= 10) {
        square.push(createVector(x, 50));
    }
    //coté gauche
    for (var y = 50; y > -50; y -= 10) {
        square.push(createVector(-50, y));
    }

    sound12FFT = new p5.FFT(0.8, 1024)
    sound12FFT.setInput(sound12)

    sound15FFT = new p5.FFT(0.8, 1024)
    sound15FFT.setInput(sound15)

    sound17FFT = new p5.FFT(0.8, 1024)
    sound17FFT.setInput(sound17)

    sound18FFT = new p5.FFT(0.8, 1024)
    sound18FFT.setInput(sound18)
}







function draw() {

    background(0)
    
    // touche A
    playsound(sound01,65)
    if(sound01.isPlaying() == true){
        let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)
        fill(63, 20, 23)
        stroke(247, 170,170)
        ellipse(width*0.5, height*0.5, r, r)

        push()
        stroke(255)
        fill(0)
        let wave = sound01FFT.waveform();
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i],-1,1,0, 200)
            let x = width*0.5 + rad*cos(angle)
            let y = height*0.5 + rad*sin(angle)
            curveVertex(x,y)
            

        }
        endShape(CLOSE)

        pop()
    }

    //touche Z
    playsound(sound02,90)
    if(sound02.isPlaying() == true){
        push()
        //fill(255,0,0)
        stroke(255,255,0)
        noFill()
        let wave = sound02FFT.waveform();
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i],-1,1,0, height)
            let x = width*0.5 + rad*cos(angle)
            let y = height*0.5 + rad*sin(angle)
            //ellipse(x, y, 5, 5)
            curveVertex(x,y)

        }
        endShape(CLOSE)

        pop()
    }

    



     // touche E
    playsound(sound05,69)
    if(sound05.isPlaying() == true) {
    push()
    rectMode(CENTER)
    let angle = map (sound05.currentTime(), 0, sound05.duration(), 0, TWO_PI)
    fill(252, 190, 210)
    noStroke()
    translate(width*0.9, height*0.25)
    rotate(angle)
    rect(0, 0, height*3, height*0.01)

    translate(width*0.25, height*0.25)
    rotate(angle)
    rect(0, 0, height*3, height*0.01)
    
    translate(width*0.5, height*0.5)
    rotate(angle)
    rect(0, 0, height*3, height*0.01)
    pop()
    }


     // touche R
    playsound(sound04,82)
    if (sound04.isPlaying() == true) {
        let wave = sound04FFT.waveform();
        noFill()
        stroke(89, 10, 50)
        strokeWeight(5)
        beginShape()
        for(let i = 0 ; i < wave.length ; i ++){
        let x = map(i , 0, wave.length, 0, width)
        let y = map( wave[i], -1, 1, height, 0)
        curveVertex(x, y)
        }
        endShape()
    
    }

    // touche T
    playsound(sound03,84)
    if (sound03.isPlaying() == true) {
        //map = règle de proportionnalité
        // x est compris entre 0 et 255, je veux qu'il devienne x' entre 10 et 3000 donc
        // x'=map(x, 0, 255, 10, 3000)
        // map (le temps du son que je veux adapter, de 0, à la durée du son, en 0, à la fin de la forme à atteindre)
        let r = map(sound03.currentTime(),
                    0, sound03.duration()*0.33,
                    0, width*0.25)
        r = constrain((r), 0, width*0.25)
        fill(249, 105, 153, 90) 
        noStroke()  

        let c = map(sound03.currentTime(),
                    sound03.duration()*0.33, sound03.duration(),
                    0, width*0.25)
        c = constrain(c, 0, width*0.25)


        rectMode(CENTER)
        rect(width*0.75, height*0.6, r, r, c,c,c,c)
        fill(249, 105, 153, 50)
        rect(width*0.25, height*0.6, r, r, c,c,c,c)
        
        fill(249, 105, 153, 70)
        rect(width*0.5, height*0.3, r, r, c,c,c,c)

    }

    // touche Q beat grave sound 
    playsound(sound06,81)
    if (sound06.isPlaying() == true) {
        sound06.setVolume(0.6);
        push();
        let rms06 = sound06.getLevel();
        let timer06 = map(sound06.currentTime(), 0, sound06.duration(), 0, windowWidth * 2);
        let Back06lvl = map(rms06, 0, 0.15, 0, 255);
        translate(windowWidth * 0.5, windowHeight * 0.5)
        noFill();
        stroke(255, 255, 255);
        strokeWeight(10);
        ellipse(0, 0, timer06, timer06);
        pop();
    }

    // touche S
    playsound(sound07,83)
    if (sound07.isPlaying() == true) {
        push();
        var rad = map(sound07.currentTime(), 1, sound07.duration(), 0, width);
        stroke(178, 112, 139)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.8, height * 0.4, rad, rad);
        pop();

        push();
        var rad = map(sound07.currentTime(), 1, sound07.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.7, height, rad, rad);
        pop();

        push();
        var rad = map(sound07.currentTime(), 1, sound07.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.3, height * 0.1, rad, rad);
        pop();

        push();
        var rad = map(sound07.currentTime(), 1, sound07.duration(), 0, width);
        stroke(178, 112, 139)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.1, height * 0.9, rad, rad);
        pop();

        push();
        var rad = map(sound07.currentTime(), 0, sound07.duration(), 10, width);
        stroke(89, 10, 50)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.5, height * 0.5, rad, rad);
        pop();
    }

    //touche D
    playsound(sound08,68)
    if (sound08.isPlaying() == true) {
        push();
        for (let x = 0; x <= width; x = x + 30) {
            for (let y = 0; y <= height; y = y + 30) {
                let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true); 
                let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);

                let angle = xAngle * (x / width) + yAngle * (y / height);


                let myX = x + 20 * cos(2 * PI * t + angle);
                let myY = y + 20 * sin(2 * PI * t + angle);

                ellipse(myX, myY, 10);
                noStroke();
                fill(107, 71, 91);


            }
        }
        t = t + 0.01;

        pop();

    }

    //touche F
    playsound(sound09,70)
    if (sound09.isPlaying() == true) {
        push();
        for (let x = 0; x <= width; x = x + 30) {
            for (let y = 0; y <= height; y = y + 30) {
                let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true); 
                let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);

                let angle = xAngle * (x / width) + yAngle * (y / height);


                let myX = x + 20 * cos(2 * PI * t + angle);
                let myY = y + 20 * sin(2 * PI * t + angle);

                rect(myX, myY, 5, 10)
                noStroke();
                fill(240, 230, 40);


            }
        }
        t = t + 0.01;

        pop();

    }

    //touche G
    playsound(sound10,71)
    if (sound10.isPlaying() == true) {
        push()
        sound10FFT.analyze();
        var nrj1 = sound10FFT.getEnergy("bass")
        push()
        noFill();
        rectMode(CENTER);
        strokeWeight(5);
        stroke(255)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj1, nrj1)
        pop();

        push()
        noFill();
        rectMode(CENTER);
        strokeWeight(5);
        stroke(249, 25, 111)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj1 / 2, nrj1 / 2)
        pop();

        push()
        noFill();
        rectMode(CENTER);
        strokeWeight(5);
        stroke(255)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj1 / 4, nrj1 / 4)
        pop();

        push()
        noFill();
        rectMode(CENTER);
        strokeWeight(5);
        stroke(249, 25, 111)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj1 * 2, nrj1 * 2)
        pop();

        pop();
    }

    
    //touche H
    push();
    playsound(sound11,72)
    if (sound11.isPlaying() == true) {
        var totalDistance = 0;

        for (var i = 0; i < circle.length; i++) {
            var v1;

            if (state) {
                v1 = circle[i];
            } else {
                v1 = square[i];
            }

            var v2 = morph[i];

            v2.lerp(v1, 0.8);

            totalDistance += p5.Vector.dist(v1, v2);
        }


        if (totalDistance < 0.1) {
            state = !state;
        }


        translate(width / 2, height / 2);
        strokeWeight(10);

        beginShape();
        noFill();
        stroke(random(245,255), random(25,255), random(0,110));

        morph.forEach(v => {
            vertex(v.x, v.y);
        });
        endShape(CLOSE);
    }
    pop();

    //touche J
    playsound(sound12,74)
    if (sound12.isPlaying() == true) {
        push()

        var waveform = sound12FFT.waveform();
        noFill();
        beginShape();
        stroke(249, 105, 153);
        strokeWeight(4);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 2, 0, height);
            curveVertex(x, y);
        }
        endShape();

        pop()

        push()

        var waveform = sound12FFT.waveform();
        noFill();
        beginShape();
        stroke(178, 112, 139);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();

        pop()

        push()
        var waveform = sound12FFT.waveform();
        noFill();
        beginShape();
        stroke(89, 10, 50);
        strokeWeight(4);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 0.5, 0, height);
            curveVertex(x, y);
        }
        endShape();

        pop()
    }

    if (keyIsDown(73) == true) {
        choose = random(1, 4);
        if (choose < 2) {
            r = random(0, 100);
            v = random(0, 255);
            b = 255;
        }
        if (choose >= 2 && choose < 3) {
            b = random(0, 100);
            v = 255;
            r = random(0, 255);
        }
        if (choose >= 3) {
            v = random(0, 100);
            r = 255;
            b = random(0, 255);
        }
    }

    //touche W
    playsound(sound13,87)
    if (sound13.isPlaying() == true) {

        push();
        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 130, 800);
        fill(170, 45, 102);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 110, 700);
        fill(0);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 90, 600);
        fill(170, 45, 102);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 70, 500);
        fill(0);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 50, 400);
        fill(170, 45, 102);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 300, 40);
        fill(232, 135, 167);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 10, 120);
        fill(0);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;
        pop();
    }

    //touche X
    playsound(sound14,88)
    if (sound14.isPlaying() == true) {

        push();
        var radius = map(sound14.currentTime(), 0, sound14.duration(), 50, width); // pour faire marcher la forme avec la musique
         fill(107, 71, 91, 95);
         noStroke();
         rectMode(CENTER)
        rect(width * 0.5, height * 0.5, radius, radius);
         pop();
    }



    
    //touche C
    playsound(sound15,67)
    if(sound15.isPlaying() == true){
        push()
        stroke(232, 135, 167)
        noFill()
        let wave = sound15FFT.waveform();
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i],-1,1,0, height)
            let x = width*0.25 + rad*cos(angle)
            let y = height*0.5 + rad*sin(angle)
            //ellipse(x, y, 5, 5)
            curveVertex(x,y)

        }
        endShape(CLOSE)

        pop()

        push()
        fill(255,0,0)
        stroke(232, 135, 167)
        noFill()
        beginShape()
        for (let i = 0 ; i < wave.length; i++){
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i],-1,1,0, height)
            let x = width*0.75 + rad*cos(angle)
            let y = height*0.5 + rad*sin(angle)
            //ellipse(x, y, 5, 5)
            curveVertex(x,y)

        }
        endShape(CLOSE)

        pop()
    }

    //touche V
    playsound(sound16,86)
    if (sound16.isPlaying() == true) {
         push()
            noStroke();
            fill(255, 255, 0)
            var theta = map(sound16.currentTime(), 0, sound16.duration(), 0, PI);
            var ypos1 = height - sin(theta) * height * 0.8;
            ellipse(width * 0.5, ypos1, 100, 100);
            pop()
            push()
            noStroke();
            fill(250,210,40)
            var theta = map(sound16.currentTime(), 0, sound16.duration(), 0, PI);
            var ypos1 = height - sin(theta) * height * 0.5;
            ellipse(width * 0.8, ypos1, 100, 100);
            pop()
            push()
            noStroke();
            fill(250,210,40)
            var theta = map(sound16.currentTime(), 0, sound16.duration(), 0, PI);
            var ypos1 = height - sin(theta) * height * 0.4;
            ellipse(width * 0.2, ypos1, 100, 100);
            pop()
    }

    //touche Y
    playsound(sound17,89)
    if (sound17.isPlaying() == true) {

        sound17FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound17FFT.getEnergy("bass")
        var radius = map(nrj1, 0, 255, 0, 450) //permet de changer la limite de 255 à 450 pour notre cas.

        push()
        noStroke();
        fill(250, random(255), 200, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, radius * 2, radius * 2)
        pop()

        push()
        noStroke();
        fill(255, random(255), 200, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, radius * 1.5, radius * 1.5)
        pop()

        push()
        noStroke();
        fill(255, random(255), 150, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, radius, radius)
        pop()

        push()
        noStroke();
        fill(255, random(255), 255, 50)
        translate(width * 0.5, height * 0.5)
        ellipse(0, 0, nrj1 * 1.5, nrj1 * 1.5)
        pop()

        push()
        noStroke();
        fill(240, random(255), 150, 50)
        translate(width * 0.5, height * 0.5)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke();
        fill(255, random(255), 200, 50)
        translate(width * 0.5, height * 0.5)
        ellipse(0, 0, nrj1 * 0.75, nrj1 * 0.75)
        pop()


    }

    //touche U
    playsound(sound18,85)
    if (sound18.isPlaying() == true) {
        push()
        var nsegment = 50
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound22.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(249, 25, 111);
            strokeWeight(4)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);

        }
        pop()


    }

    //touche I
    playsound(sound19,73)
    if(sound19.isPlaying() == true) {
        push()
        rectMode(CENTER)
        let angle = map (sound19.currentTime(), 0, sound19.duration(), 0, TWO_PI)
        fill(249, 25, 111)
        stroke(255)
        translate(width*0.5, height*0.5)
        rotate(angle)
        triangle(60, 10, 90, 70, 110, 40)
        
        fill(255)
        stroke(255,255,0)
        translate(width*0.1, height*0.1)
        rotate(angle)
        triangle(60, 10, 90, 70, 110, 40)
        
        fill(255,255,0)
        stroke(249, 25, 111)
        translate(width*0.1, height*0.1)
        rotate(angle)
        triangle(60, 10, 90, 70, 110, 40)
        pop()
    }

    //touche O
    playsound(sound20,79)
    if(sound20.isPlaying() == true){
        push()
        let r = map(sound20.currentTime(), 0, sound20.duration(), 0, width)
        fill(63, 20, 23, 70)
        stroke(247, 170,170)
        ellipse(width*0.5, height*0.5, r, r)
        pop()
        
    }

    //touche P
    playsound(sound21,80)
    if(sound21.isPlaying() == true) {
    push()
    rectMode(CENTER)
    let angle = map (sound21.currentTime(), 0, sound21.duration(), 0, TWO_PI)
    fill(255,255,255,95)
    noStroke()
    translate(width*0.5, height*0.5)
    rotate(angle)
    rect(0, 0, height*1, height*1)
    pop()

    }

    //touche K
    playsound(sound22,75)
    if (sound22.isPlaying() == true) {
        push()
        var nsegment = 80
        var ncurrentsegment = (map(sound22.currentTime(), 0, sound22.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(252, 190, 210);
            strokeWeight(4)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.9, x, y);

        }
        pop()
    
    }

    //touche L
    playsound(sound23,76)
    if (sound23.isPlaying() == true) {
        push()
        let r = map(sound23.currentTime(),
                    0, sound23.duration()*0.33,
                    0, width*0.25)
        r = constrain((r), 0, width*0.1)
        fill(0, 255, 0) 
        noStroke()  

        let c = map(sound23.currentTime(),
                    sound23.duration()*0.33, sound23.duration(),
                    0, width*0.25)
        c = constrain(c, 0, width*0.8)


        rectMode(CENTER)
        fill(249, 105, 153)
        rect(width*0.1, height*0.5, r, r, c,c,c,c)

        fill(89, 10, 50)
        rect(width*0.2, height*0.5, r, r, c,c,c,c)
        
        noFill()
        stroke(255, 255, 0)
        rect(width*0.3, height*0.5, r, r, c,c,c,c)

        fill(178, 112, 139)
        noStroke()
        rect(width*0.4, height*0.5, r, r, c,c,c,c)

        fill(170, 45, 102)
        noStroke()
        rect(width*0.5, height*0.5, r, r, c,c,c,c)

        fill(249, 105, 153,60)
        stroke(170, 45, 102)
        strokeWeight(3)
        rect(width*0.6, height*0.5, r, r, c,c,c,c)

        fill(255,255,0)
        noStroke()
        rect(width*0.7, height*0.5, r, r, c,c,c,c)

        fill(89, 10, 50)
        rect(width*0.8, height*0.5, r, r, c,c,c,c)

        fill(252, 190, 210)
        stroke(255,255,0)
        rect(width*0.9, height*0.5, r, r, c,c,c,c)

        pop()

    }

    //touche M
    playsound(sound24,77)
    if (sound24.isPlaying() == true) {
        push()
        var long = map(sound24.currentTime(), 0, sound24.duration(), 250, width)
        rectMode(CENTER)
        stroke(255)
        fill(0,0,0,0)
        strokeWeight(5)
        rect(width / 2, height / 2, long, 20);
        noStroke();
        pop();
    }


    //touche B
    playsound(sound25, 66)
    if (sound25.isPlaying() == true) {
        push()
        var rand = 0;
        stroke(222, 49, 99)
        strokeWeight(10);
        for (var i = 1; i < steps; i++) {
            point((width / steps) * i, (height / 2) + random(-rand, rand));
            rand += random(-5, 5);
        }
        pop()
    }

    //touche N
    playsound(sound26,78)
    if (sound26.isPlaying() == true) {
        push();
        background(232, 135, 167, 40);
        var timer = map(sound26.currentTime(), 0, 0.9, 10, height * 0.5);

        push();
        stroke(89, 10, 50);
        strokeWeight(3);
        translate(width * 0.2, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();


        push();
        stroke(232, 135, 167);
        strokeWeight(3);
        translate(width * 0.3, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(89, 10, 50);
        strokeWeight(3);
        translate(width * 0.4, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(232, 135, 167);
        strokeWeight(3);
        translate(width * 0.5, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(89, 10, 50);
        strokeWeight(3);
        translate(width * 0.6, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(232, 135, 167);
        strokeWeight(3);
        translate(width * 0.7, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(89, 10, 50);
        strokeWeight(3);
        translate(width * 0.8, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(232, 135, 167);
        strokeWeight(3);
        translate(width * 0.9, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(89, 10, 50)
        strokeWeight(3);
        translate(width * 0.99, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();


        push();
        stroke(89, 10, 50);
        strokeWeight(3);
        translate(width * 0.99, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();


        push();
        stroke(232, 135, 167);
        strokeWeight(3);
        translate(width * 0.9, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();


        push();
        stroke(89, 10, 50);
        strokeWeight(3);
        translate(width * 0.8, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();


        push();
        stroke(232, 135, 167);
        strokeWeight(3);
        translate(width * 0.7, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(89, 10, 50);
        strokeWeight(3);
        translate(width * 0.6, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(232, 135, 167);
        strokeWeight(3);
        translate(width * 0.5, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(89, 10, 50);
        strokeWeight(3);
        translate(width * 0.4, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(232, 135, 167);
        strokeWeight(3);
        translate(width * 0.3, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(89, 10, 50);
        strokeWeight(3);
        translate(width * 0.2, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        
    }












    


   


}


// pour les prochains copier cette base : playsound(sound06, 70)
//if(sound05.isPlaying() == true) {
 //   push()


//pop()
//}


function playsound(sound,keyID){
    if(keyIsDown(keyID) == true && sound.isPlaying()==false){
        sound.play();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(55, 100, 40)
}