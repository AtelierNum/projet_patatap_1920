/* Thème: Paprika/cirque*/

/*INTRODUCTION DU NOM DES SONS */
let sound00
let sound01
let sound02
let sound03
let sound03FFT
let sound04
let sound05
let sound06
let sound07
let sound07Amp
let sound08
let sound09
let sound09Amp
let sound10
let sound11
let sound12
let sound12FFT
let sound13
let sound13FFT
let sound14
let sound15
let sound15FFT
let sound16
let sound17
let sound18
let sound19
let sound19FFT
let sound20FFT
let sound21
let sound22
let sound23
let sound24
let sound25
let sound26

var pg // une variable pour créer un calque dans lequel on va pouvoir dessiner


let x1
let y1
let a
// quelques variables pour créer une animation de balle qui rebondit sur les bords de la fenêtre mais dont la trace restera affichée.
var xpos = 0
var ypos = 0
var xdir = 5
var ydir = 5
//son 22
let outsideRadius = 150;
let insideRadius = 100;

let k = 0.0;
let s = 0.0;



function preload() {
    sound00 = loadSound("assets/Sound00.mp3")
    sound01 = loadSound("assets/Sound01.wav")
    sound02 = loadSound("assets/Sound02.wav")
    sound03 = loadSound("assets/Sound03.wav")
    sound04 = loadSound("assets/Sound04.wav")
    sound05 = loadSound("assets/Sound05.wav")
    sound06 = loadSound("assets/Sound06.wav")
    sound07 = loadSound("assets/Sound07.wav")
    sound08 = loadSound("assets/Sound08.wav")
    sound09 = loadSound("assets/Sound09.wav")
    sound10 = loadSound("assets/Sound10.wav")
    sound11 = loadSound("assets/Sound11.wav")
    sound12 = loadSound("assets/Sound12.wav")
    sound13 = loadSound("assets/Sound13.wav")
    sound14 = loadSound("assets/Sound14.wav")
    sound15 = loadSound("assets/Sound15.wav")
    sound16 = loadSound("assets/Sound16.wav")
    sound17 = loadSound("assets/Sound17.wav")
    sound18 = loadSound("assets/Sound18.wav")
    sound19 = loadSound("assets/Sound19.mp3")
    sound20 = loadSound("assets/Sound20.mp3")
    sound21 = loadSound("assets/Sound21.mp3")
    sound22 = loadSound("assets/Sound22.mp3")
    sound23 = loadSound("assets/Sound23.mp3")
    sound24 = loadSound("assets/Sound24.mp3")
    sound25 = loadSound("assets/Sound25.mp3")
    sound26 = loadSound("assets/Sound26.mp3")

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)

    sound03FFT = new p5.FFT()
    sound03FFT.setInput(sound03)
    background(0);

// on créée un objet de type Amplitude pour analyser le niveau sonore de notre son
    sound07Amp = new p5.Amplitude()
    sound07Amp.setInput(sound07)// on 'branche' cet analyseur à notre son sound07.

    // on créée un objet de type Amplitude pour analyser le niveau sonore de notre son
    sound09Amp = new p5.Amplitude()
    sound09Amp.setInput(sound09) // on 'branche' cet analyseur à notre son sound09.

    sound12FFT = new p5.FFT()
    sound12FFT.setInput(sound12)
    background(0);

    sound13FFT = new p5.FFT()
    sound13FFT.setInput(sound13)
    background(0);

    sound15FFT = new p5.FFT()
    sound15FFT.setInput(sound15)
    background(0);

    sound19FFT = new p5.FFT()
    sound19FFT.setInput(sound19)
    background(0);

    sound20FFT = new p5.FFT()
    sound20FFT.setInput(sound20)
    background(0);


    createCanvas(windowWidth, windowHeight);
    pixelDensity(1)

    // créer le calque à la taille de la fenêtre
    pg = createGraphics(windowWidth, windowHeight)
    pg.pixelDensity(1)

    background(0);

    
    stroke(255);
    a = height / 2;
    createCanvas(windowWidth, windowHeight)
    background(0)

  /*  //son 23
  noStroke();
  //Draw all rectangles from their center as opposed to
  // the default upper left corner
  rectMode(CENTER);
background (0)*/}

/*balle qui arrive vers soi */
function draw() {
    background(0)
    PlaySound(sound00, 32)
    if (sound00.isPlaying() == true) {
        let r = map(sound00.currentTime(), 0, sound00.duration(), 0, width)
    }
    PlaySound(sound01, 65)
    if (sound01.isPlaying() == true) {
        let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)
        fill(255, 0, 0)
        ellipse(width * 0.5, height * 0.5, r, r)
    }

/* */
    PlaySound(sound02, 90)
    if (sound02.isPlaying() == true) {
        let r = map(sound02.currentTime(),
            0, sound02.duration() * 0.33,
            0, height * 0.5)
        r = constrain(r, 0, height * 0.5)

        let c = map(sound02.currentTime(),
            sound02.duration() * 0.33, sound02.duration(),
            0, height * 0.5)
        c = constrain(c, 0, height * 0.5)

        rectMode(CENTER)
        fill(255, 0, 0)
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
    }


    PlaySound(sound03, 69)
    if (sound03.isPlaying() == true) {
        let wave = sound03FFT.waveform()
        noFill()
        strokeWeight(5)
        stroke(255, 0, 0)
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape()

    }

    PlaySound(sound04, 82)
    if (sound04.isPlaying() == true) {
        push()
        let nsegment = 1000
        let ncurrentsegment = (map(sound04.currentTime(), 0, sound04.duration(), 0, nsegment + 1))
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke(255);
            strokeWeight(1)
            let angle = map(i * 6, height * 3, nsegment * 500, width, TWO_PI);
            random; {
                let x = width * 0.250 + height * 1.750 * cos(angle);
                let y = height * 0.750 + height * -0.250 * sin(angle);
                line(width * 0.5, height * 0.5, x, y);
            }
        }
        pop()
    }



    PlaySound(sound05, 84)
    if (sound05.isPlaying() == true) {
        let r = map(sound05.currentTime(), 0, sound05.duration(), 0, width)
        var element = ellipse(width * 0.5, height * 0.5, 300, 300)
        rectMode(CENTER)
        stroke(100)
        fill(255)

        function Clignotant() {

            var random = Math.round(Math.random() * 5);

            switch (random) {
                case 0:
                    element.style.color = "White";
                    break;

                case 1:
                    element.style.color = "red";
                    break;

                case 2:
                    element.style.color = "yellow";
                    break;
            }
        }

        window.onload = function () {
            setInterval(textClignotant, 1000);
        };
    }


    PlaySound(sound06, 89)
    if (sound06.isPlaying() == true) {

    noStroke();
       for (let i = 0; i < height; i += 200) {
    fill(129, 206, 15);
    rect(0, i, width, 10);
        }
        pop()
    } 


    PlaySound(sound07, 85)
    if (sound07.isPlaying() == true) {
        push()
        colorMode(HSB, 360, 100, 100, 100)
        var lvl = sound07Amp.getLevel() * 200;
        var nsegment = 96
        var ncurrentsegment = (map(sound07.currentTime(), 0, sound07.duration(), 0, nsegment + 10))
        strokeWeight(4)
        for (var i = 0; i < ncurrentsegment; i++) {
            var h = map(i, 0, nsegment, 0, 320)
            stroke(h, 45, 100, lvl + 55)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle)
            var y = height * 0.5 + height * 0.45 * sin(angle)
            line(width * 0.5, height * 0.5, x, y)
        }

        pop()
    }
/*allumage des projecteurs */
    PlaySound(sound08, 73)
    if (sound08.isPlaying() == true) {
        
        let r = map(sound08.currentTime(), 0, sound08.duration(), 0, width);
        fill(235,50,50)
        var x = random([1], [800])
        var y = random([1], [800])
        var d = random([600], [1240])
       // var C = random([1], [600])
       // var e = random([1], [600])
        ellipse(x, y, 100, 100, d);
    }



/*allumage des projecteurs: aveuglement */
    PlaySound(sound09, 79)
    if (sound09.isPlaying() == true) {
        let r = map(sound09.currentTime(), 0, sound09.duration(), 0, width)
        push() // pousser un nouveau référentiel de coordonnées et de style (pour éviter que nos changements n'affectent le reste de nos dessin)
        var amp = sound09Amp.getLevel() // obtenir le niveau sonore à l'aide de notre analyseur et le stocker dans une variable nommée amp
        var whiteLevel = map(amp, 0, 1, 10, 35) // transformer 'amp' qui est comprise entre 0 et 1 en une nouvelle valeur entre 0 et 255
        // dessiner un carré blanc de la taille de notre fenêtre dont la teinte est contrôllé par whiteLevel qui dépend elle même du 
        // niveau sonore de notre son en train de jouer.
        noStroke()
        fill(whiteLevel)
        rect(0, 0, width, height)
        pop()
        background(180)
        noStroke()
    }


    PlaySound(sound10, 80)
    if (sound10.isPlaying() == true) {
        background(frameCount % 255, 255 - frameCount % 255, 0)

        // on créé l'animation en augmentant des variables de position à l'aide des variables de direction
        xpos += xdir
        ypos += ydir
        // si une de nos coordonnées s'apprête à sortir de la fenêtre on inverse sa direction
        if (xpos > width || xpos < 0) {
            xdir *= -1
        }
        if (ypos > height || ypos < 0) {
            ydir *= -1
        }
        // on dessine dans notre calque
        pg.noStroke()
        pg.fill(255)
        pg.ellipse(xpos, ypos, 20, 20)

        // on affiche notre calque à l'aide de la fonction 'image' de p5js
        image(pg, 0, 0, width, height)

    } else {
        // on reset notre animation  :
        // en réinitialisant le calque
        pg = createGraphics(windowWidth, windowHeight)
        pg.pixelDensity(1)
        // et en réinitialisant les positions
        xpos = random(width)
        ypos = random(height)
        xdir = random(1, 7)
        ydir = random(1, 7)
    }



/* */
    PlaySound(sound11, 81)
    if (sound11.isPlaying() == true) {
        let r = map(sound11.currentTime(), 0, sound11.duration(), 0, width)
        var rotation = map(sound11.currentTime(), 0, sound11.duration(), 0, PI)

        rectMode(CENTER)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(255, 180, 180)
        rect(0, 0, 100, 100)
        pop()

    }
    /*noeud de clown */
    PlaySound(sound12, 83)
    if (sound12.isPlaying() == true) {
        let r = map(sound12.currentTime(), 0, sound12.duration(), 0, width)
        push()
        sound12FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound12FFT.getEnergy("bass")

        push()
        fill(235,50,50,nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        fill(235,50,50,50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(235,50,50,nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()
    }
    /*Paprika */
    PlaySound(sound13, 68)
    if (sound13.isPlaying() == true) {
        let r = map(sound13.currentTime(), 0, sound13.duration(), 0, width)
        push()
        push()
    
        let nsegment = 1000
        let ncurrentsegment = (map(sound13.currentTime(), 0, sound13.duration(), 0, nsegment + 1))
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke(9,106,9);
            strokeWeight(1)
            let angle = map(i * 6, height * 3, nsegment * 500, width, TWO_PI);
            random; {
                let x1 = width * 1.750 + height * 1.250 * cos(angle);
                let y1 = height * 1.750 + height * 1.250 * sin(angle);
                line(width * 0.5, height * 0.5, x1, y1);
            }
        }
    
        
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke(235,50,50);
            strokeWeight(1)
            let angle = map(i * 6, height * 3, nsegment * 500, width, TWO_PI);
            random; {
                let x1 = width * 0.250 + height * 0.750 * cos(angle);
                let y1 = height * 0.250 + height * 0.750 * sin(angle);
                line(width * 0.5, height * 0.5, x1, y1);
            }
        }
        pop()
        pop()
    }
    /* */
    PlaySound(sound14, 70);
    if (sound14.isPlaying() == true) {
        let r = map(sound14.currentTime(), 0, sound14.duration(), 0, width)
        push()
        var rotation = map(sound14.currentTime(), 0, sound14.duration(), 0, PI)
        
       
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        noStroke()

        fill(235,50,50)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()
    }
/*Arlequin */
    PlaySound(sound15, 71)
    if (sound15.isPlaying() == true) {
        let r = map(sound15.currentTime(), 0, sound15.duration(), 0, width)
        push()
        sound15FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound15FFT.getEnergy("bass")

        push()
        fill(0,nrj1)
        stroke(9,106,9)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        fill(0,nrj1)
        stroke(9,106,9)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(0,nrj1)
        stroke(9,106,9)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()
    }/*balle qui arrive vers soi */
    PlaySound(sound16, 72)
    if (sound16.isPlaying() == true) {
        let r = map(sound16.currentTime(), 0, sound16.duration(), 0, width)
        push()
        var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width)
        fill(255, 220, 0)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop()
    }/*barre trapeze */
    PlaySound(sound17, 74)
    if (sound17.isPlaying() == true) {
        let r = map(sound17.currentTime(), 0, sound17.duration(), 0, width)
        background(0);
        line(0, a, width, a);
        stroke (235,50,50)
        strokeWeight (200);
        a = a - 10;
        if (a < 0) {
            a = height;
        }
    }
    /*Cerceau*/
    PlaySound(sound18, 75)
    if (sound18.isPlaying() == true) {
        let r = map(sound18.currentTime(), 0, sound18.duration(), 0, width)
        background(0);
        ellipse(0, a, width, a);
        fill(0)
        stroke (235,50,50)
        strokeWeight (300);
        a = a - 10;
        if (a < 0) {
            a = height;
        } 
    }

   /*Jonglage */
    PlaySound(sound19, 76)
    if (sound19.isPlaying() == true) {
       
        push()
        translate(width * 0.5, height * 0.5);
        var rotation = map(sound19.currentTime(), 0, sound19.duration(), 0, PI)

        let angle = map(sound19.currentTime(), 0, sound19.duration(), 0,TWO_PI)
        /*Balle 1*/
        push();
        rotate(angle);
        fill(235,50,50) 
        rect(100, 100, 40,40,0.2,0.2,0.2,0.2)
        pop();
        /*Balle 2*/
        push();
        rotate(angle*1/3);
        fill(235,50,50) 
        rect(100, 100, 40,40,0.2,0.2,0.2,0.2)
        
        pop();
        
        /*Balle 3*/
        push();
        rotate(angle*2/3);
        fill(235,50,50) 
        rect(100, 100, 40,40,0.2,0.2,0.2,0.2)
        
         pop();
     pop();  
    } 
    
/*jonglage */
    PlaySound(sound20, 77)
    if (sound20.isPlaying() == true) {
        let r = map(sound20.currentTime(), 0, sound20.duration(), 0, width)
    
        push()
        translate(width * 0.5, height * 0.5);
        var rotation = map(sound20.currentTime(), 0, sound20.duration(), 0, PI)

        let angle = map(sound20.currentTime(), 0, sound20.duration(), 0, TWO_PI);
        /*Balle 1*/
        push();
        rotate(angle);
        fill(235,50,50) 
        ellipse(100, 100, 40)

        pop();
        /*Balle 2*/
        push();
        rotate(angle*0.2);
        fill(9,106,9)
        ellipse(100, 100, 40)

        pop();
        /*Balle 3*/
        push();
        rotate(angle*0.4);
        fill(255, 220, 0)
        ellipse(100, 100, 40)

         pop();
         /*Balle 4*/
        push();
        rotate(angle*0.6);
        fill(235,50,50)
        ellipse(100, 100, 40)
         pop();
         /*Balle 5*/
        push();
        rotate(angle*0.8);
        fill(9,106,9)
        ellipse(100, 100, 40)

         pop();
     pop();  }

   /*Boules alignées */
    PlaySound(sound21, 87) 
    if (sound21.isPlaying() == true) {
        let r = map(sound21.currentTime(), 0, sound21.duration(), 0, width)
        push()
        fill(235,50,50)
        noStroke()
        for (var i = 0; i < 30; i++) { // affiche 9 formes(valeur)

            var y = int(i / 3) * height * 0.25 + height * 0.25 // diviser hauteur fenetre par 3
            var x = (i % 3) * width * 0.25 + width * 0.25 // diviser largeur fenetre par 3
            ellipse(x, y, 50, 50); // crée les éllipses selon la position et les valeurs

        }

        pop()
    } 
    /*La roue */
    PlaySound(sound22, 88)
    if (sound22.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        let r = map(sound22.currentTime(), 0, sound22.duration(), 0, width)
        let numPoints = int(map(mouseX, 0, width, 6, 60));
        let angle = 0;
        let angleStep = 180.0 / numPoints;
      
        beginShape(TRIANGLE_STRIP);
        for (let i = 0; i <= numPoints; i++) {
            fill(200,0,0)
            stroke(255, 0, 0);
            strokeWeight(6);
          let px = cos(radians(angle)) * outsideRadius;
          let py = sin(radians(angle)) * outsideRadius;
          angle += angleStep;
          vertex(px, py);
          px = cos(radians(angle)) * insideRadius;
          py = sin(radians(angle)) * insideRadius;
          vertex(px, py);
          angle += angleStep;
        }
        endShape();
        pop();
    }
    /*barreaux*/
    PlaySound(sound24, 67)
    if (sound24.isPlaying() == true) {
       
    noStroke();
  for (let i = 0; i < height; i += 200) {
    fill(255);
    rect(i, 0, 10, height);
    }}

    /*Mouvement trapèzes */
    PlaySound(sound23, 86)
    if (sound23.isPlaying() == true) {
        let r = map(sound23.currentTime(), 0, sound23.duration(), 0, width)
     //Slowly increase 'a' and then animate 's' with
  //a smooth cyclical motion by finding the cosine of 'a'
  k = k + 0.04;
  s = cos(k) * 2;

  //Translate our rectangle from the origin to the middle of
  //the canvas, then scale it with 's'
  translate(width / 2, height / 2);
  scale(s);
  fill(51);
  rect(0, 0, 50, 50);

  //Translate and scale are accumulating, so this translate
  //moves the second rectangle further right than the first
  //and the scale is getting doubled. Note that cosine is
  //making 's' both negative and positive, thus it cycles
  //from left to right.
  translate(75, 0);
  fill(255);
  scale(s);
  rect(0, 0, 50, 50);
    }
    /*ligne transversale */
    PlaySound(sound25, 66)
    if (sound25.isPlaying() == true) {
        let r = map(sound25.currentTime(), 0, sound25.duration(), 0, width)
    stroke(225,50,50)
    strokeWeight(10)
        line(2000,174,96,702)
       
    }
    /*confettis */
    PlaySound(sound26, 78)
    if (sound26.isPlaying() == true) {
        let r = map(sound26.currentTime(), 0, sound26.duration(), 0, width)
        fill(9,106,9)
        var x = random([1], [800])
        var y = random([1], [800])
        var d = random([1], [1240])
       // var C = random([1], [600])
       // var e = random([1], [600])
        ellipse(x, y, 100, 100, d);
    }
}

function PlaySound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}