let sound01
let sound02
let sound03
let sound03FFT
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


let a1; //Z
let s1 = 0.0; //S
let s2 = 0.0; //S

let yoff = 0.0; //D
let anim1 = {w: 0} //I
let xspacing19 = 12; //Y
let theta19 = 0.0; //Y
let amplitude19 = 75.0; //Y
let period19 = 50; //Y

let angle1 = 0; //U
let angle2 = 0;//U
let scalar = 300; //U

let frame = 0; //J
let xspacing = 16; //L
let w; 
let theta = 0.0; 
let amplitude = 75.0; 
let period = 500.0; 
let dx; 
let yvalues; //L
let snowflakes = []; // tableau pour les gouttes //V

let dcercle //M
let trgl //X
let startAngle = 0 //L
let angleVel = 0.4 //L
let t5 = 0; //N


function preload() {

    sound01 = loadSound("assets/baleine.wav")
    sound02 = loadSound("assets/vaguelette.wav")
    sound03 = loadSound("assets/coquille.wav") 
    sound04 = loadSound("assets/goutte.wav")
    sound05 = loadSound("assets/eclair.wav")
    sound06 = loadSound("assets/jet.wav")
    sound07 = loadSound("assets/goutte musique.wav")
    sound08 = loadSound("assets/splash.wav")
    sound09 = loadSound("assets/bulles.wav")
    sound10 = loadSound("assets/mouette.wav")
    sound11 = loadSound("assets/plif plaf.wav")
    sound12 = loadSound("assets/klaxon.wav")
    sound13 = loadSound("assets/vague1.wav")
    sound14 = loadSound("assets/radar.wav")
    sound15 = loadSound("assets/Dent.wav")
    sound16 = loadSound("assets/grenouille.wav")
    sound17 = loadSound("assets/vent.wav")
    sound18 = loadSound("assets/boat.wav")
    sound19 = loadSound("assets/celine.wav")
    sound20 = loadSound("assets/bulle.wav")
    sound21 = loadSound("assets/orque.wav")
    sound22 = loadSound("assets/3 gouttes.wav")
    sound23 = loadSound("assets/crabe.wav")
    sound24 = loadSound("assets/pluie.wav")
    sound25 = loadSound("assets/bubble.wav")
    sound26 = loadSound("assets/vaguelente.wav")

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    a1 = height/2
    sound03FFT = new p5.FFT()
    sound03FFT.setInput(sound03)
    trgl = 0 //X
    w = width + 16;//L
    dx = (TWO_PI / period) * xspacing;//L
    yvalues = new Array(floor(w / xspacing));//L
    dcercle = 0//M
    

}

function draw() {
    background(176, 224, 230)


    playSound(sound05, 84) //touche T
    if (sound05.isPlaying() == true) {
        push()
        background(50) // couleur de fond
        noStroke() // pas de contour 
        pop()
    }



    playSound(sound13, 68) //TOUCHE D
    if (sound13.isPlaying() == true) {
        push()
        background(250, 250, 110);
        noStroke
        fill(70, 130, 180);
        beginShape();

        let xoff = 0;

        for (let x = 0; x <= width; x += 10) {

            let y = map(noise(xoff, yoff), 0, 1, 200, 300);

            vertex(x, y);
            xoff += 0.05;
        }
        yoff += 0.02;
        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);
        pop()
    }


    playSound(sound01, 65) //TOUCHE A
    if (sound01.isPlaying() == true) {
        push()
        var radius = map(sound01.currentTime(), 0, sound01.duration(), 20, width);
        strokeWeight(5);
        stroke(65, 105, 225);
        fill(173, 216, 230);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop()
    }


    playSound(sound02, 90) //touche Z
    if (sound02.isPlaying() == true) {
        push()
        stroke(30,144,255)
        strokeWeight(20)
        line(0, a1, width, a1);
        a1 = a1 - 5;
        if (a1 < 0) {
            a1 = height;
        }// ligne horitontal monte et recommance en bas de la fenetre en 0
        pop()
    }


    playSound(sound03, 69) //TOUCHE E
    if (sound03.isPlaying() == true) {
    
        push()
        let wave = sound03FFT.waveform()
       // console.log(wave)
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
        ellipse(x, y, 5, 5)
    }
    
        pop()
    }


    playSound(sound04, 82) //TOUCHE R
    if (sound04.isPlaying() == true) {
        push()
        let rad = map(sound04.currentTime(), 0, sound04.duration(), 1, width * 2);
        stroke(0, 0, 139)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.25, height * 0.25, rad, rad);
        pop()

        push()
        let radiant = map(sound04.currentTime(), 0, sound04.duration(), 10, width);
        stroke(0, 0, 139)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.25, height * 0.25, rad, rad);
        pop()

        push()
        let radiant2 = map(sound04.currentTime(), 0, sound04.duration(), 100, width);
        stroke(0, 0, 139)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.25, height * 0.25, rad, rad);
        pop()
    }
    
        /*push()
        let angle = map(sound04.currentTime(), 0, sound04.duration(), 0, TWO_PI)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, height * 0.25, height * 0.25)
        pop()
    }*/


    playSound(sound06, 89) //TOUCHE Y
    if (sound06.isPlaying() == true) {
        w19 = width + 16;
        dx19 = (TWO_PI / period19) * xspacing19;
        yvalues19 = new Array(floor(w19 / xspacing19));
        push()
        calcWave19();
        renderWave19();
        pop()
    }


    playSound(sound07, 85) //TOUCHE U
    if (sound07.isPlaying() == true) {
        push()

        noStroke();
        rectMode(CENTER);

        let ang1 = radians(angle1);
        let ang2 = radians(angle2);

        let x1 = width / 2 + scalar * cos(ang1);
        let x2 = width / 2 + scalar * cos(ang2);

        let y1 = height / 2 + scalar * sin(ang1);
        let y2 = height / 2 + scalar * sin(ang2);

        /*fill(255);
        rect(width * 0.5, height * 0.5, 140, 140);*/

        /*fill(0, 102, 153);
        ellipse(x1, height * 0.5 - 120, scalar, scalar);
        ellipse(x2, height * 0.5 + 120, scalar, scalar);*/

        fill(30,144,255);
        ellipse(width * 0.5 - 120, y1, scalar / 5, scalar / 5);
        ellipse(width * 0.5 + 120, y2, scalar / 5, scalar / 5); // en divisant par 10 scalar qui gère le mvt mais aussi le diamètre on ne fait aps quelque chose en responsive

        angle1 += 2;
        angle2 += 3;
        pop()
    }


    playSound(sound08, 73) //TOUCHE I
    if (sound08.isPlaying() == true) {
        push()
        var angle = map(sound08.currentTime(), -100, sound08.duration(), -100, PI);
        translate(width, height * 0.8);
        rotate(-angle*2);
        rectMode(CENTER);
        noStroke();
        fill(176,196,222);
        rect(350, 800, width * 0.4, height * 0.4);
        pop()
    }


    playSound(sound09, 79) //TOUCHE O
    if (sound09.isPlaying() == true) {
        push()
        var rad = map(sound09.currentTime(), random(0, 1), sound09.duration(), 10, width);
        stroke(100, 149, 237)
        strokeWeight(random(1, 10))
        noFill();
        ellipse(random(0, width), random(0, height), rad, rad);
        pop()
    }



    playSound(sound10, 80) //TOUCHE P
    if (sound10.isPlaying() == true) {
        push()
        var timer = map(sound10.currentTime(), 0, 0.08, 30, height * 0.01);

        push()  //Bande 1
        stroke(255);
        strokeWeight(40);
        translate(width * 0.1, height * 0.3);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop()


        push()   //Bande 2
        stroke(255);
        strokeWeight(40);
        translate(width * 0.3, height * 0.3);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop()

        push()   //Bande 3
        stroke(255);
        strokeWeight(40);
        translate(width * 0.5, height * 0.3);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop()

        push()    //Bande 4
        stroke(255)
        strokeWeight(40);
        translate(width * 0.7, height * 0.3);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop()
        pop()
    }




    playSound(sound11, 81) //TOUCHE Q
    if (sound11.isPlaying() == true) {

        var angle = map(sound11.currentTime(), 0, sound11.duration(), 10, PI * 50);
        push()
        ellipseMode(CENTER); // centre
        rotate(angle);
        translate(width * 0.5, height * 0.2)
        stroke(25,25,112);
        strokeWeight(3);
        noFill();
        ellipse(0, -60, angle, angle);
        pop()

        push() //gauche
        ellipseMode(CENTER); 
        rotate(angle);
        translate(width * 0.23, height * 0.5)
        stroke(25,25,112);
        strokeWeight(3);
        noFill();
        ellipse(width / 25, 0, angle, angle);
        pop()

        push() // droite
        ellipseMode(CENTER); 
        rotate(angle);
        translate(width * 0.7, height * 0.5)
        stroke(25,25,112);
        strokeWeight(3);
        noFill();
        ellipse(width / 25, 0, angle, angle);
        pop()

        push() // rangé de bas
        ellipseMode(CENTER); 
        rotate(angle);
        translate(width * 0.5, height * 0.2)
        stroke(25,25,112);
        strokeWeight(3);
        noFill();
        ellipse(0, 500, angle, angle);
        pop()

    }


    playSound(sound12, 83) //TOUCHE S
    if (sound12.isPlaying() == true) {

        push()
        // background(0);
        s1 = s1 + 0.3;
        s2 = cos(s1) * 2;
        translate(width * 0.5, height * 0.5);
        scale(s2);
        fill(227, 209, 56);
        stroke(240, 230, 140);
        strokeWeight(3);
        rect(0, 0, width / 5, height / 4);
        pop()
    }



    playSound(sound14, 70) //TOUCHE F
    if (sound14.isPlaying() == true) {
        push()
        var rad = map(sound14.currentTime(), 0, sound18.duration(), 10, width*1.5);
        stroke(63, 226, 71)
        strokeWeight(9)
        noFill();
        ellipseMode(CENTER)
        ellipse(0, height * 0.5, rad, rad);
        pop()
    }


    playSound(sound15, 71) //touche G 
    if (sound15.isPlaying() == true) {
        push()
        var amp = sound15.getLevel()
        fill(255,255,255)
        noStroke()
        translate(0.12 * width, 0 * height)
        polygon(0, 0, 0.2 * height, 3)
        translate(0.24 * width, 0 * height)
        polygon(0, 0, 0.2 * height, 3)
        translate(0.24 * width, 0 * height)
        polygon(0, 0, 0.2 * height, 3)
        translate(0.24 * width, 0 * height)
        polygon(0, 0, 0.2 * height, 3)


        var amp = sound15.getLevel()
        fill(255,255,255)
        noStroke()
        translate(-0.01 * width, 1 * height)
        polygon(0, 0, 0.2 * height, 3)
        translate(-0.24 * width, 0 * height)
        polygon(0, 0, 0.2 * height, 3)
        translate(-0.24 * width, 0 * height)
        polygon(0, 0, 0.2 * height, 3)
        translate(-0.24 * width, 0 * height)
        polygon(0, 0, 0.2 * height, 3)
    }


    playSound(sound16, 72) //TOUCHE H
    if (sound16.isPlaying() == true) {
        push()
        background(0, 128, 0);
        let rad = map(sound16.currentTime(), 1, sound16.duration(), width, 1)
        fill(154, 205, 50);
        noStroke()
        ellipse(width * 0.75, 2, rad, rad)
        ellipse(width * 0.25, 2, rad, rad)
        pop()
    }

    playSound(sound17, 74) //TOUCHE J
    if (sound17.isPlaying() == true) {
        push()
        for (let y = 0; y < height; y++) {
            beginShape();
            translate(width * 0.5, height * 0.5);
            rotate(frameCount/ 3.0);
            noStroke();
            fill(24, 27, 120);
            ellipse(width * 0.3, y, 30, 30);
            endShape();
        }
        pop()
    }


    playSound(sound18, 75) //TOUCHE K
    if (sound18.isPlaying() == true) {
        push()
        let rotation = map(sound18.currentTime(), 0, sound18.duration(), 0, PI)
        noStroke
        fill(126)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()

        push()
        let rotation1 = map(sound18.currentTime(), 0, sound18.duration(), 0, PI)
        noStroke
        fill(127)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        rect(0, 0, width * 0.05, width * 0.5)
        pop()
    }


    playSound(sound19, 76) //TOUCHE L
    if (sound19.isPlaying() == true) {

        push()
        calcWave();
        renderWave();
        pop()

    }

    playSound(sound20, 77) //TOUCHE M
    if (sound20.isPlaying() == true) {
        push()
        let rad = map(sound20.currentTime(), 0, sound20.duration(), 10, width / 5)
        fill(7, 124, 200)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop()
    }



    playSound(sound21, 87) //TOUCHE W
    if (sound21.isPlaying() == true) {

        push()
        let r = map(sound21.duration(), 0, sound21.currentTime(), 4, height);
        noStroke();
        fill(70,130,180);
        ellipse(height * 0.5, r, width * 0.5, r);

        pop()
    }



    playSound(sound22, 88) //TOUCHE X
    if (sound22.isPlaying() == true) {
        push()
        noStroke()
        fill(30,144,255)
        ellipse(width*0.2, dcercle*20, width * 0.1, height * 0.2)
        dcercle += dcercle/20
        if (dcercle >= height) dcercle =  1
        pop()

        push()
        noStroke()
        fill(30,144,255)
        ellipse(width*0.5, dcercle*20, width * 0.1, height * 0.2)
        dcercle += dcercle + 1
        if (dcercle >= height) dcercle = 1
        pop()

        push()
        noStroke()
        fill(30,144,255)
        ellipse(width*0.8, dcercle*20, width * 0.1, height * 0.2)
        dcercle += dcercle + 0.5
        if (dcercle >= height) dcercle = 1
        pop()
       
    }



    playSound(sound23, 67) //TOUCHE C
    if (sound23.isPlaying() == true) {

        push()
        noStroke();
        fill(107, 13, 13);
        let angle = map(sound23.currentTime(), 0, sound23.duration(), 0, PI/2)
        translate(width * 0.49, height * 0.3)
        rotate(angle / 6.0)
        triangle(width*0.2, height*0.2, width*0.46, height*0.24, width*0.2, height*0.33) //pince haut
        pop()

        push()
        noStroke();
        fill(107, 13, 13);
        translate(width * 0.4, height * 0.68)
        rotate(angle / -6.0)
        triangle(width*0.2, height*0.15, width*0.48, height*0.25, width*0.2, height*0.28) //pince haut
        pop()



        push()
        noStroke();
        fill(107, 13, 13);
        translate(width * 0.4, height * 0.51)
        rect(0, 0, width * 0.3,height * 0.45, 60, 40, 40, 100)
        //rect(30, 20, 335, 292, 60, 40, 40, 100)
        pop()

      
    }



    playSound(sound24, 86) //TOUCHE V
    if (sound24.isPlaying() == true) {

        push()
        fill(176,196,222)
        noStroke()
        let t = frameCount / 60;
        // cré un nb de goutte aléatoire
        for (var i = 0; i < random(5); i++) {
            snowflakes.push(new snowflake()); // ajouter des gouttes
            for (let flake of snowflakes) {
                flake.update(t); // réactualiser les gouttes
                flake.display(); // dessiner pluie
            }
            pop()
        }
    }

    function snowflake() {
        // réinitialiser les coordonnées (x, y)
        this.posssX = 0;
        this.posssY = random(-50, 0);
        this.initialangle = random(0, 2 * PI);
        this.size = random(2, 5);

        // répartir la pluie
        this.radius = sqrt(random(pow(width / 2, 2)));

        this.update = function (time) {
            // position x suit un cercle
            let w = 0.6; // vitesss angulaire
            let angle = w * time + this.initialangle;
            this.posssX = width / 2 + this.radius * sin(angle);

            this.posssY += pow(this.size, 0.5);

            if (this.posssY > height) {
                let index = snowflakes.indexOf(this);
                snowflakes.splice(index, 1);
            }
        };

        this.display = function () {
            ellipse(this.posssX, this.posssY, this.size);
        };
    }



    playSound(sound25, 66) //TOUCHE B
    if (sound25.isPlaying() == true) {

        push()  // bulle 1
        var ang = map(sound25.currentTime(), 0, sound25.duration(), 0, width)
        noFill()
        stroke(70, 130, 180)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 0, height * 0, ang, ang)
        pop()

        push()   // bulle 2
        var ang = map(sound25.currentTime(), 0, sound25.duration(), 0, width)
        noFill()
        stroke(70, 130, 180)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 1, height * 0, ang, ang)
        pop()

        push()   // bulle 3
        var ang = map(sound25.currentTime(), 0, sound25.duration(), 0, width)
        noFill()
        stroke(70, 130, 180)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 1, height * 1, ang, ang)
        pop()

        push()   // bulle 4
        var ang = map(sound25.currentTime(), 0, sound25.duration(), 0, width)
        noFill()
        stroke(70, 130, 180)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 0, height * 1, ang, ang)
        pop()

        push()    // bulle 5
        var ang = map(sound25.currentTime(), 0, sound25.duration(), width, 0)
        noFill()
        stroke(70, 130, 180)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width / 2, height / 2, ang, ang)
        pop()

        pop()

    }

    playSound(sound26, 78) //TOUCHE N
    if (sound26.isPlaying() == true) {

       push()
       fill(25,25,112);
       noStroke();
       // faire une grille x et y d'ellipses
       for (let x = 0; x <= width; x = x + 40) {
           for (let y = 0; y <= height; y = y + 50) {
               //  le point de départ de chaque cercle 
               let xAngle = map(width / 4, 0, width, -4 * PI, 4 * PI, true);
               let yAngle = map(height, 0, height, -4 * PI, 4 * PI, true);
               // varie  en fonction de l'emplacement de la particule
               let angle = xAngle * (x / width) + yAngle * (y / height);
               // chaque particule se déplace en cercle
               let myX = x + 20 * cos(2 * PI * t5 + angle);
               let myY = y + 20 * sin(2 * PI * t5 + angle);
               ellipse(myX, myY, 10); // dessiner les ronds
           }
       }
       t5 = t5 + 0.01; // temps de misee à jour 
       pop()

    }


}
function calcWave() {
    // vitesse angulaire)
    theta += 0.02;
  
    
    // Pour chaque valeur x, calculer une valeur y avec fonction sinusoïdale
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = sin(x) * amplitude;
      x += dx;
    }
  }
  
  function renderWave() {
    noStroke();
    fill(0,0,128)
    //  dessiner la vague avec une ellipse à chaque endroit
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
    }
  }

function calcWave19() {

    // vitesse angulaire)
    theta19 += 0.09;

    // Pour chaque valeur x, calculer une valeur y avec fonction sinusoïdale
    let x = theta19;
    for (let i = 0; i < yvalues19.length; i++) {
        yvalues19[i] = sin(x) * amplitude19;
        x += dx19;
    }
}


function renderWave19() {
    noStroke();
    fill(204, 255, 255);
    // dessiner la vague avec une ellipse à chaque endroit
    for (let x = 0; x < yvalues19.length; x++) {
        ellipse(x * xspacing19, height / 2 + yvalues19[x], 16, 16);
    }
}

function anime(params = {}) {

    let now, startTime, lastTime = 0;

    let resolve = null;
    }

function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}
function polygon(x, y, radius, npoints) {
    var anglesss = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += anglesss) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function windowResized() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}