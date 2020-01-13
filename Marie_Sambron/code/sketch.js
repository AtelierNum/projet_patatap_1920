let sound01
let sound02
let sound03
let sound04
let sound05
let sound06
let sound07
let sound08
let sound09
let sound09FFT 
let sound10
let sound10FFT
let sound11
let sound11FFT
let sound12
let sound13
var totalPts = 300;
var steps = totalPts + 1;
let sound14
let sound15
let sound16
let sound16FFT
let sound17
let sound18
let sound19
let sound20
let sound21
let sound22
let sound23
let snowflakes = [];
let sound24
let sound24FFT
let sound25
let sound25FFT
let sound26
// let sound : lauching sounds

// all the sounds 
function preload() {

    sound01 = loadSound('assets/sound01.wav');
    sound02 = loadSound('assets/sound02.wav');
    sound03 = loadSound('assets/sound03.mp3');
    sound04 = loadSound('assets/sound04.wav');
    sound05 = loadSound('assets/sound05.wav');
    sound06 = loadSound('assets/sound06.wav');
    sound07 = loadSound('assets/sound07.wav');
    sound08 = loadSound('assets/sound08.mp3');
    sound09 = loadSound('assets/sound09.wav');
    sound10 = loadSound('assets/sound10.wav');
    sound11 = loadSound('assets/sound11.wav');
    sound12 = loadSound('assets/sound12.mp3');
    sound13 = loadSound('assets/sound13.wav');
    sound14 = loadSound('assets/sound14.mp3');
    sound15 = loadSound('assets/sound15.wav');
    sound16 = loadSound('assets/sound16.mp3');
    sound17 = loadSound('assets/sound17.mp3');
    sound18 = loadSound('assets/sound18.mp3');
    sound19 = loadSound('assets/sound19.wav');
    sound20 = loadSound('assets/sound20.wav');
    sound21 = loadSound('assets/sound21.wav');
    sound22 = loadSound('assets/sound22.wav');
    sound23 = loadSound('assets/sound23.wav');
    sound24 = loadSound('assets/sound24.wav');
    sound25 = loadSound('assets/sound25.wav');
    sound26 = loadSound('assets/sound26.wav');

}

var xpos = []
var ypos = []
var xtarget = []
var ytarget = []


function setup() {

    createCanvas(windowWidth, windowHeight)
    
    sound09FFT = new p5.FFT(0.8, 1024)
    sound09FFT.setInput(sound09)

    
    sound10FFT = new p5.FFT(0.8, 1024)
    sound10FFT.setInput(sound10)

    sound11FFT = new p5.FFT(0.8, 1024)
    sound11FFT.setInput(sound11)


    sound16FFT = new p5.FFT(0.8, 1024)
    sound16FFT.setInput(sound16)

    for (var i = 0; i < 50; i++) {
        // ajouter des éléments au dessus du canvas
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        // ajouter des éléments à l'intérieur du canvas
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    sound24FFT = new p5.FFT(0.8, 16);
    sound24FFT.setInput(sound24);
    background(0);

    sound25FFT = new p5.FFT(0.8, 16);
    sound25FFT.setInput(sound25);

}

// snowflake class
function snowflake() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(0, height);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);
  
    // radius snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));
  
    this.update = function(time) {
      // x position follows a circle
      let w = 0.6; // angular speed
      let angle = w * time + this.initialangle;
      this.posX = width / 2 + this.radius * sin(angle);
  
      // different size snowflakes fall at slightly different y speeds
      this.posY += pow(this.size, 0.5);
  
      // delete snowflake if past end of screen
      if (this.posY > height) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
      }
    };
  
    this.display = function() {
        push()
        fill(249, 66, 158)
      ellipse(this.posX, this.posY, this.size);
      pop()
    };

}



function draw() {
    background(0,40)  // light effect, soft effect 

      // touche C
    // cherry blossoms fall - sound: falling leaves 
    playSound(sound23, 67)
    if (sound23.isPlaying() == true) {
        push()
        background('black');
        let t = frameCount / 60; // update time
      
        // create a random number of snowflakes each frame
        for (let i = 0; i < random(5); i++) {
          snowflakes.push(new snowflake()); // append snowflake object
        }
      
        
        for (let flake of snowflakes) {
          flake.update(t); // update snowflake position
          flake.display(); // draw snowflake
        }

      pop()
    }

    // touche A 
    // circle expands - sound: bird
    playSound(sound01, 65)
    if (sound01.isPlaying() == true) {
        let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)
        fill(198, 8, 0)
        noStroke()
        ellipse(width * 0.5, height * 0.5, r, r)
    }

    

    // touche Z
    // circle shrinks - sound: traditional Asian percussion
    playSound(sound02, 90)
    if (sound02.isPlaying() == true) {
    push()
    let rad = map(sound02.currentTime(), 0, sound02.duration(), width, 50)
    stroke(255, 255, 255)
    strokeWeight(6)
    noFill()
    ellipse(width * 0.5, height * 0.5, rad, rad)

    pop()

    }
   

    // touche E
    // circle in the center - sound: katana
    playSound(sound03, 69)
    if (sound03.isPlaying() == true) {
        fill(231, 62, 1)
        stroke(255, 255, 255)
        ellipse(width * 0.5, height * 0.5, 150, 150)

    }

    // touche R 
    // ellipse in stick - sound: Tokyo narita
    playSound(sound04, 82)

    if (sound04.isPlaying() == true) {
        push()
        
        pop()
        var nsegment = 96
        var ncurrentsegment = (map(sound04.currentTime(), 0, sound04.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(254, 191, 210);
            strokeWeight(2)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }

    }

    // touche T
    // square that becomes round - sound: Japan school bell
    playSound(sound05, 84)
    if (sound05.isPlaying() == true) {
        let r = map(sound05.currentTime(), 0, sound05.duration() * 0.33, 0, width * 0.25)

        r = constrain(r, 0, width * 0.25)
        fill(255, 255, 255)
        noStroke()

        let c = map(sound05.currentTime(),
            sound05.duration() * 0.33, sound05.duration(),
            0, width * 0.25)
        c = constrain(c, 0, width * 0.25)

        rectMode(CENTER)
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)

    }


    //touche Y
    // horizontal lines - sound: train door beeps
    playSound(sound06, 89)
    if (sound06.isPlaying() == true) {
        push();
        translate(width * 0, height * 0.2);
        var longueur = map(sound06.currentTime(), 0, sound06.duration(), 20, width * 1, 5);
        var hauteur = map(sound06.currentTime(), 0, sound06.duration(), height, height * 1, 5);
        fill(33, 23, 125);
        noStroke();
        rect(0, 150, longueur, height * 0.01);
        rect(0, 200, longueur, height * 0.01);
        rect(0, 250, longueur, height * 0.01);
        rect(0, 300, longueur, height * 0.01);
        rect(0, 350, longueur, height * 0.01);
        pop();
  
    } 



    // touche U
    // circles that extend - sound: wave close coast small 
    playSound(sound07, 85)
    if (sound07.isPlaying() == true) {
        push();
        var rad = map(sound07.currentTime(), 0, sound07.duration(), 1, width * 2);
        stroke(253, 108, 158)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.25, height * 0.25, rad, rad);
        pop();
   
        push();
        var rad = map(sound07.currentTime(), 0, sound07.duration(), 10, width);
        stroke(255, 255, 255)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.25, height * 0.25, rad, rad);
        pop();
   
        push();
        var rad = map(sound07.currentTime(), 0, sound07.duration(), 100, width);
        stroke(254, 150, 160)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.25, height * 0.25, rad, rad);
        pop();


        

    }
  

   
    // touche I
    // square that extend - sound: temple Kyoto bell 
    playSound(sound08, 73)
    if (sound08.isPlaying() == true) {
        push();
        var rad = map(sound08.currentTime(), 0, sound08.duration(), 50, width)
        rectMode(CENTER)
        noFill()
        stroke(198, 8, 0)
        strokeWeight(10);
        rect(width * 0.5, height * 0.5, rad, rad)
    
        pop();
    
 
    }
 



    // touche O
    // rythmic line wave - sound: Japanese musical instrument 1
    playSound(sound09, 79)
    if (sound09.isPlaying() == true) {
        push()
        let waveform = sound09FFT.waveform();
        
        noFill();
        beginShape();
        stroke(231, 62, 1); 
        strokeWeight(4);

        for (let i = 0; i < waveform.length; i++) {
            let x = map(i, 0, waveform.length, 0, width);
            let y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }


    // touche P 
    // rythmic circle wave - sound: Japanese hello
    playSound(sound10, 80)
    if (sound10.isPlaying() == true) {
        push()
    
        noFill()
      //fill (255,255,255)
        stroke(255, 255, 255)
        let wave = sound10FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
          let angle = map(i, 0, wave.length, 0, TWO_PI)
          let rad = map(wave[i], -1, 1, 0, height)
                let x = width * 0.5 + rad * cos(angle)
                let y = height * 0.5 + rad * sin(angle)
                //ellipse(x,y,5,5)
                curveVertex(x, y)
    
            }
       endShape(CLOSE)
    
     pop()
   
    

    }


    // touche Q
    // rythmic line and circles 1 - sound: water drop 1
    playSound(sound11, 81)
    if (sound11.isPlaying() == true) {
        push()
        noFill()
        stroke(254, 150, 160);
        let wave = sound11FFT.waveform();
        /*beginShape()
        for (let i = 0 ; i < wave.length; i++) { 
            let angle = map(i,0,wave.length,0,TWO_PI)
            let rad = map(wave[i],-1,1,0,height)
            let x = width*0.5 + rad*cos(angle)
            let y = height*0.5 + rad*sin(angle)
            //ellipse(x,y, 5, 5)
            curveVertex(x, y)
        }
        
        endShape(CLOSE)*/

        for (let i = 0 ; i < wave.length; i++) { 
            let x =map(i, 0,wave.length, 0 , width)
            let y = map(wave[i],-0.25,0.25,0,height)
            ellipse(x,y,10,10)
            }
        pop()
        
    }

    // touche S
    // distorded ellipse - sound: frogs
    playSound(sound12, 83)
    if (sound12.isPlaying() == true) {
        push()
        let nsegment = 100;
        let ncurrentsegment = (map(sound12.currentTime(), 0, sound12.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            fill(46, 0, 108);

            strokeWeight(3);
            let angle = map(i, 0, nsegment * 1.5, 0, TWO_PI);
            let x = width * 0.5 + height * 0.45 * cos(angle);
            let y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(width / 2, height / 2, x, y);
        }
        pop()
    }

    // touche D
    // rythmic line and circles 2 - sound: cicadas
    playSound(sound13, 68)
    if (sound13.isPlaying() == true) {
        push()
        let rand = 0;
        stroke(222, 49, 99)
        strokeWeight(10);
        for (let i = 1; i < steps; i++) {
            point((width / steps) * i, (height / 2) + random(-rand, rand));
            rand += random(-5, 5);

        }
        pop()
    }



    // touche F
    // square that turns - sound: nature, wind bell 
    playSound(sound14, 70)
    if (sound14.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5); // coordonnée point arrivée
        let ang = map(sound14.currentTime(), 0, sound14.duration(), 0, PI) 
        rectMode(CENTER) // rectangle qui tourne au centre
        rotate(ang) // rotation 
        fill(217, 1, 21)

        noStroke()
        rect(0, 0, width * 0.25, height * 0.5)

    
        pop()
    }


    // touche G
    // cross and symmetrical ellipses - sound: water drop 2
    playSound(sound15, 71)
    if (sound15.isPlaying() == true) {

        // ellipse 1 
        push()
        var ang = map(sound15.currentTime(), 0, sound15.duration(), 0, width)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 0, height * 0, ang, ang)
        pop()

        // ellipse 2
        push()
        var ang = map(sound15.currentTime(), 0, sound15.duration(), 0, width)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 1, height * 0, ang, ang)
        pop()

        // ellipse 3
        push()
        var ang = map(sound15.currentTime(), 0, sound15.duration(), 0, width)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 1, height * 1, ang, ang)
        pop()

        // ellipse 4
        push()
        var ang = map(sound15.currentTime(), 0, sound15.duration(), 0, width)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 0, height * 1, ang, ang)
        pop()

        // ellipse 5
        push()
        var ang = map(sound15.currentTime(), 0, sound15.duration(), width, 0)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width /2, height/2, ang, ang)
        pop()
        pop()

    }

    
    // touche H
    // 3 diamonds and one that moves in rhythm - sound: Japanese words, yoroshiku 

    playSound(sound16, 72)
    if (sound16.isPlaying() == true) {
        push()
        sound16FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound16FFT.getEnergy("bass")

        // diamond 1
        push()
    
        stroke(255, 255, 255)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        // diamond 2 (center)
        push()
        fill(198, 8, 0)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        // diamond 3
        push()
    
        stroke(255, 255, 255)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()
    }


    // touche J 
    // progressive circle - sound: open close fusuma 
    playSound(sound17, 74)
    if (sound17.isPlaying() == true) {
        push();
        var nsegment = 50;
        var ncurrentsegment = (map(sound17.currentTime(), 0, sound17.duration(), 0, nsegment + 1));

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(231, 62, 1);
            strokeWeight(random(50));
            var angle = map(i, 0, nsegment, 0, -TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            var xx = width * 0.5 + height * 0.45 * cos(angle);
            var yy = height * 0.5 + height * 0.45 * sin(angle);
            line(xx, yy, x, y);
        }

        pop();
    }


    // touche K
    // rotating bar - sound: Okinawa Japan clogs  
    playSound(sound18, 75)
    if (sound18.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        let ang = map(sound18.currentTime(), 0, sound18.duration(), 0, 2 * PI);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(43, 0, 154);
        rect(0, 0, width * 0.003, height * 0.5);
        pop();
    }


    // touche L
    // range of lines - sound: impact shatter 
    playSound(sound19, 76)
    if (sound19.isPlaying() == true) {

        let nsegment = 696
        let ncurrentsegment = map(sound19.currentTime(), 0, sound19.duration(), 0, nsegment + 1)
        push()
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke(254, 195, 172);
            strokeWeight(0.7)
            let angle = map(i, 1, nsegment, 0, PI);
            let x = width * 0 + height * 18.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 1, height * 0, x, y);
        }

        pop()
    }





//touche M 
// thick circle with vibrating interior - sound: train station 

playSound(sound20, 77)
if (sound20.isPlaying() == true) {
    push()
    var phase = 0
        speed = 0.03; 

    var x = width / 2;
    var y = height / 2 + sin(phase) * 50;
    phase = frameCount * speed; 
    fill(50, 50, 50, 1)
    stroke(250, 50, 50);
    strokeWeight(80);
    ellipse(x, y, 400, 400);
    var sizeOffset = (cos(phase) + 1) * 0.5; 
    var circleSize = sizeOffset ;
    fill(0)
    stroke(149, 50, 255);
    strokeWeight(300);
    ellipse(x, y, circleSize, circleSize);
    pop()

}


    // touche W
    // superimposed squares that rotate - sound: Japanese musical instrument 2
    playSound(sound21, 87)
    if (sound21.isPlaying() == true) {

        // square 1
        push()
        var tourne = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 7)
        rectMode(CENTER) // les rectangles au centre
        translate(width * 0.5, height * 0.5)
        rotate(tourne)
        var bb = random(255)
        fill(198, 8, 0)
        noStroke()
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        // square 2
        push()
        var tourne1 = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 2)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne1)
        var bbb = random(255)
        fill(255, 255, 255)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        // square 3
        push()
        var tourne2 = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 5)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne1)
        var bbbb = random(255)
        fill(198, 8, 0)
        noStroke()
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        // square 4
        push()
        var tourne2 = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 3)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne2)
        var bbbbb = random(255)
        fill(255, 255, 255)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        // square 5
        push()
        var tourne3 = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 2)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne3)
        var bbbbbb = random(255)
        fill(198, 8, 0)
        noStroke()
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        // square 6
        push()
        var tourne4 = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 6)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne4)
        var bbbbbbb = random(255)
        fill(255, 255, 255)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        // square 7
        push()
        var tourne5 = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 4)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne5)
        var bbbbbbbb = random(255)
        fill(198, 8, 0)
        noStroke()
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        // square 8
        push()
        var tourne6 = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 8)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne6)
        var bbbbbbbbb = random(255)
        fill(255, 255, 255)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        // square 10
        push()
        var tourne7 = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 9)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne7)
        var bbbbbbbbbb = random(255)
        fill(198, 8, 0)
        noStroke()
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        // square 11
        push()
        var tourne8 = map(sound21.currentTime(), 0, sound21.duration(), 0, PI / 10)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne8)
        var bbbbbbbbbbb = random(255)
        fill(255, 255, 255)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()
    }
    pop()


    // touche X
    // big star turning - open umbrella 
    playSound(sound22, 88)
    if (sound22.isPlaying() == true) {
        push();
         translate(width * 0.5, height * 0.5);
        rotate(frameCount / 50.0);
        star(0, 0, 80, 100, 40);
        stroke(0, 0, 0)

        pop();

        function star(x, y, radius1, radius2, npoints) {
            let angle = TWO_PI / npoints;
            let halfAngle = angle / 2.0;
            beginShape();
            for (let a = 0; a < TWO_PI; a += angle) {
              let sx = x + cos(a) * radius2;
              let sy = y + sin(a) * radius2;
              vertex(sx, sy);
              sx = x + cos(a + halfAngle) * radius1;
              sy = y + sin(a + halfAngle) * radius1;
              vertex(sx, sy);
            }
            endShape(CLOSE);
          }

    }

    

(pop)
          



(pop)


  



    // touche V 
    // moving blue wave - sound: sea rocks and water 
    playSound(sound24, 86)
    if (sound24.isPlaying() == true) {
        push()
        var waveform = sound24FFT.waveform();
        noFill();
        beginShape();
        stroke(0, 0, 255);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }



    // touche B 
    // big red flower - sound: chimes
    playSound(sound25, 66)
    if (sound25.isPlaying() == true) {
        push();
        sound25FFT.analyze();
        rectMode(CENTER);
        noStroke();
        var nrj1 = sound25FFT.getEnergy("bass");
        push();
        fill(139, 0, 0, nrj1);
        translate(width * 0.5, height * 0.5);
        rotate(PI / 4);
        noStroke();
        for (let i = 0; i < 10; i++) {
            ellipse(0, 30, width / 3, height / 6);
            rotate(PI / 5);

        }
        pop();
        pop();
    }


    // touche N
    // circles falling everywhere - sound: festival fireworks 
    playSound(sound26, 78)
    if (sound26.isPlaying() == true) {
        push()
        var t = map(sound26.currentTime(), 0, sound26.duration() * 0.75, 0, 1)
        var grey = map(sound26.currentTime(), sound26.duration() * 0.75, sound26.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        fill(grey)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 40, 40)
        }
        pop()
    }
}




function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

// THE END !
// PATATAP REALIZED BY MARIE SAMBRON - I2B