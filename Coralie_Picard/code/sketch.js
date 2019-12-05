/*
Coralie PICARD I2A NANTES ATLANTIQUE DESIGN
PATATAP-P5JS-CoraliePICARD
Description: Réalisation d'animation sur les 26 touches d'alphabet du clavier, qui varie selon le son. Animation visuel et sonore.
29/11/2019
*/


/* DESCRIPTION DU CODE */

/* VARIABLES */
let sound1
let sound2
let sound3
let sound4
let sound5
let sound6
let sound7
let sound8
let sound9
let sound10
let sound10FFT

let sound11
let sound12
let sound12FFT

let sound13
let sound14
let sound15
let sound16
let sound17
let sound17FFT
let sound18
let sound19
let sound20
let sound21
let sound21FFT
let sound22
let sound23
let sound23FFT
let sound24
let sound24FFT
let sound25
let sound25FFT
let sound26



/*Tableau Neige + Lanterne*/
let xpos = []
let ypos = []
let xtarget = []
let ytarget = []

/*Tableau Ronds dans l'eau*/
let xc = []
let yc = []
let rc = []



/*Tableau Demi-cercles*/
let xdc = []
let ydc = []


/*Tableau Sushis volants*/
let xsush = []
let ysush = []
let xtarshi = []
let ytarshi = []

/*Tableau Dangos*/
let xdpos = []
let ydpos = []
let xdtarget = []
let ydtarget = []


function preload() {


/* INITIALISATION DES SONS */

    sound1 = loadSound("assets/son1.wav");
    sound2 = loadSound("assets/son3.wav");
    sound3 = loadSound("assets/son2.wav");
    sound4 = loadSound("assets/son4.wav");
    sound5 = loadSound("assets/son5.wav");
    sound6 = loadSound("assets/son6.wav");
    sound7 = loadSound("assets/son7.wav");
    sound8 = loadSound("assets/son8.wav");
    sound9 = loadSound("assets/son9.wav");
    sound10 = loadSound("assets/son10.wav");
    sound11 = loadSound("assets/son11.wav");
    sound12 = loadSound("assets/son12.wav");
    sound13 = loadSound("assets/son13.wav");
    sound14 = loadSound("assets/son14.wav");
    sound15 = loadSound("assets/son15.wav");
    sound16 = loadSound("assets/son16.wav");
    sound17 = loadSound("assets/son17.wav");
    sound18 = loadSound("assets/son18.wav");
    sound19 = loadSound("assets/son19.wav");
    sound20 = loadSound("assets/son20.wav")
    sound21 = loadSound("assets/son21.wav")
    sound22 = loadSound("assets/son22.wav")
    sound23 = loadSound("assets/son23.wav")
    sound24 = loadSound("assets/son24.wav")
    sound25 = loadSound("assets/son25.wav")
    sound26 = loadSound("assets/son26.wav")



}

function setup() {

    /*Initialisation canvas*/
    createCanvas(windowWidth, windowHeight)
    background(70)
    pixelDensity(2)

    sound10FFT = new p5.FFT()
    sound10FFT.setInput(sound10)
    sound12FFT = new p5.FFT()
    sound12FFT.setInput(sound12)
    sound17FFT = new p5.FFT()
    sound17FFT.setInput(sound17)
    sound21FFT = new p5.FFT()
    sound21FFT.setInput (sound21)
    sound23FFT = new p5.FFT()
    sound23FFT.setInput (sound23)
    sound24FFT = new p5.FFT()
    sound24FFT.setInput (sound24)
    sound25FFT = new p5.FFT()
    sound25FFT.setInput (sound25)

    /*Tableau Neige*/
    for (let i = 0; i < 50; i++) {
        // ajouter des éléments au dessus de notre canvas
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    /*Tableau Ronds dans l'eau*/
    for (let i = 0; i < 10; i++) {
        xc.push(random(0, width))
        yc.push(random(0, height))
        rc.push(random(10, 200))

    }

    /*Tableau Demi-cercles*/
    for (let i = 0; i < 20; i++) {
        xdc.push(random(50, width))
        ydc.push(random(50, height))
    }

    /*Tableau Sushis volants*/
    for (let i = 0; i < 50; i++) {
        // ajouter des éléments au dessus de notre canvas
        xsush.push(random(width*0.25))
        xsush.push(random(width*0.75, width))
        ysush.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarshi.push(random(width*0.25))
        xtarshi.push(random(width*0.75, width))
        ytarshi.push(random(height))
    }

    /*Tableau Dangos*/
    for (let i = 0; i < 10; i++) {
        // ajouter des éléments au dessus de notre canvas
        xdpos.push(width*0.5)
        ydpos.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xdtarget.push(width*0.5)
        ydtarget.push(height*0.7)
    }


}

function draw() {

    background(70)

    /*Touche A - carré cercle*/
    playSound(sound1, 65)
    if (sound1.isPlaying() == true) {
        push()

        let r = map(sound1.currentTime(),
            0, sound1.duration() * 0.19,
            0, height * 0.5)
        r = constrain(r, 0, height * 0.5)

        let c = map(sound1.currentTime(), sound1.duration() * 0.33, sound1.duration(), 0, height)

        c = constrain(c, 0, height)

        rectMode(CENTER)
        noStroke()
        fill(191, 32, 17)
        rect(width * 0.5, height * 0.5, r, r, c)
        pop()
    }

    /*Touche Z - rayons*/
    playSound(sound2, 90)
    if (sound2.isPlaying() == true) {
        push()
        var nsegment = 250 /* Nombre de rayons */
        var ncurrentssegment = (map(sound2.currentTime(), 50, sound2.duration(), 1900, nsegment + 1))
        for (let i = 0; i < ncurrentssegment; i++) {
            stroke(300);
            strokeWeight(1)
            var angle = map(i, 55, nsegment, 1000, TWO_PI);
            var x = width * 0.5 + height * 2 * cos(angle);
            var y = width * 0.5 + height * 2 * sin(angle);
            line(width * 0.5, height * 0.5, x, y); /* Position du centre */
        }
        pop()
    }

    /*Touche E - porte*/
    playSound(sound3, 69);
    if (sound3.isPlaying() == true) {

        var nsegment = 250
        var ncurrentssegment = (map(sound3.currentTime(), 0, sound3.duration(), 0, nsegment + 1))

        push()
        for (let i = 0; i < ncurrentssegment; i++) {
            fill(70)
            stroke(191, 32, 17);
            strokeWeight(2.5)


            var angle = map(i, 0.2, nsegment, 0.2, TWO_PI);
            var x = width * 0 + height * 0.1 * cos(angle);
            var y = width * 0.1 + height * 0 * sin(angle);
            rect(width * 0.5, height * 0.4, x, y); 
        }
        pop()
    }

    /*Touche R - neige*/
    playSound(sound4, 82);
    if (sound4.isPlaying() == true) {
        for (let i = 0; i < 50; i++) {
            push()
            var t = map(sound4.currentTime(), -5, sound4.duration() * 0.5, 0, 1)
            fill(255)
            noStroke()
            for (let i = 0; i < 50; i++) {
                var x = lerp(xpos[i], xtarget[i], t)
                var y = lerp(ypos[i], ytarget[i], t)
                ellipse(x, y, 20, 20)
            }
            pop()
        }
    }

    /*Touche T - Truc beau*/
    playSound(sound5, 84);
    if (sound5.isPlaying() == true) {
        push()
        var nsegment = 25
        var ncurrentssegment = (map(sound5.currentTime(), 2, sound5.duration() * 0.6, 17, nsegment))
        noFill()

        for (let i = 0; i < ncurrentssegment; i++) {
            stroke(255);
            strokeWeight(1.1)
            var angle = map(i, 4000, nsegment, 90, TWO_PI);
            var x = width * 0.1 + height * 0.65 * cos(angle);
            var y = width * 0.3 + height * 0.3 * sin(angle);
            ellipse(width * 0.5, height * 0.5, x, y);
        }
        pop()
    }

    /*Touche Y - Ronds dans l'eau*/
    playSound(sound6, 89);
    if (sound6.isPlaying() == true) {
        push()
        noFill();
        stroke(37, 76, 181);
        strokeWeight(2);

        /* Tableau pour ralentir les cercles */
        if (frameCount % 25 == 0) { 
            xc = []
            yc = []
            rc = []
            for (let i = 0; i < 10; i++) {

                xc.push(random(0, width)) /*peuvent être dans toute la largeur*/
                yc.push(random(0, height)) /*peuvent être dans toute la hauteur*/
                rc.push(random(10, 200))
            }

        }

        for (let i = 0; i < xc.length; i++) {
            ellipse(xc[i], yc[i], /*place des ellipses*/
                rc[i]); /* taille des ellipses variant aléatoirement entre 10 et 200 */
        }

        pop();
    }

    /*Touche U - Poissons*/
    playSound(sound7, 85);
    if (sound7.isPlaying() == true) {
        
        /* poisson partant de la gauche */
        push()
        let x1 = map(sqrt(sound7.currentTime()), 0, sqrt(sound7.duration()), 0, width * 0.5) /* déplacement */
        noStroke();
        fill(191, 32, 17);
        translate(0, height * 0.5); 
        ellipse(x1, -150 , 180, random(90, 200)); /* taille variant aléatoirement entre 90 et 200 de hauteur */
        pop();

        /* poisson partant de la droite */
        push()
        let x2 = map(sqrt(sound7.currentTime()), 0, sqrt(sound7.duration()), width, width * 0.5);
        noStroke();
        fill(191, 32, 17);
        translate(0, height * 0.5); /* déplacement */
        ellipse(x2, 150, 200, random(90, 200)); /* taille variant aléatoirement entre 90 et 200 de hauteur */
        pop();
    }
    /*Touche I - Carrés qui tournent*/
    playSound(sound8, 73);
    if (sound8.isPlaying() == true) {

        /* Carré n°1 */
        push()
        let angle = map(sound8.currentTime(), 0, sound8.duration(), 0, TWO_PI) /* permet la rotation */
        rectMode(CENTER)
        fill(255, 255, 255)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(angle) /* rotation initiale */
        rect(0, 0, height * 0.25, height * 0.25)
        pop()

        /* Carré n°2 */
        push()
        rectMode(CENTER)
        fill(255, 255, 255, 99)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(angle * 0.4) /* rotation plus lente */
        rect(0, 0, height * 0.25, height * 0.25)
        pop()

        /* Carré n°3 */
        push()
        rectMode(CENTER)
        fill(255, 255, 255, 99)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(angle * 0.6) /* rotation plus lente */
        rect(0, 0, height * 0.25, height * 0.25)
        pop()
    }


    /*Touche O - Bambou*/
    playSound(sound9, 79);
    if (sound9.isPlaying() == true) {

        var nsegment = 800
        var ncurrentssegment = (map(sound9.currentTime() * 1.2, 0, sound9.duration(), 0, nsegment + 1))
        push()
        for (var i = 0; i < ncurrentssegment; i++) {
            fill(82, 115, 73, 80) /*vert*/
            stroke(122, 155, 113, 80);
            strokeWeight(0.75)

            /* Forme 1 */
            var angle = map(i, 0.2, nsegment, 0.2, TWO_PI);
            var x = 30;
            var y = 200 * sin(angle);
            rect(width * 0.19, height * 0.50, x, y);

            /* Forme 2 */
            var angle = map(i, 0.2, nsegment, 0.2, TWO_PI);
            var x = 30;
            var y = 250 * sin(angle);
            rect(width * 0.34, height * 0.50, x, y);

            /* Forme 3 au centre */
            var angle = map(i, 0.2, nsegment, 0.2, TWO_PI);
            var x = 30;
            var y = 300 * sin(angle);
            rect(width * 0.49, height * 0.50, x, y);

            /* Forme 4 */
            var angle = map(i, 0.2, nsegment, 0.2, TWO_PI);
            var x = 30;
            var y = 250 * sin(angle);
            rect(width * 0.64, height * 0.50, x, y);

            /* Forme 5 */
            var angle = map(i, 0.2, nsegment, 0.2, TWO_PI);
            var x = 30;
            var y = 200 * sin(angle);
            rect(width * 0.79, height * 0.50, x, y);

        }
        pop()
    }

    //Touche P - Onde
    playSound(sound10, 80);
    if (sound10.isPlaying() == true) {
        
        let wave = sound10FFT.waveform()
        beginShape()
        push()
        noFill()
        strokeWeight(3.5)
        stroke(255)

        /*formation onde*/
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 100, wave.length, 0, width * 25)
            let y = map(wave[i] * 4, -1, 1.5, height, 0)
            curveVertex(x, y)
        }

        endShape()
        pop()
    }

    /*Touche Q - Lanternes */
    playSound(sound11, 81);
    if (sound11.isPlaying() == true) {

        for (let i = 0; i < 50; i++) {
            push()
            var t = map(sound11.currentTime(), 10, sound11.duration() * 0.5, 0, 1)

            
            var grey = map(sound11.currentTime(), sound11.duration() * 0.01, sound11.duration(), 255, 180)/*Choix de couleur*/
            t = constrain(t, 0, 8)
            grey = constrain(grey, random(10, 255), random(10, 150)) /*Modification aléatoire des couleurs*/
            fill(grey)
            noStroke()
            for (let i = 0; i < 30; i++) {
                var x = lerp(xpos[i], xtarget[i], t)
                var y = lerp(ypos[i], ytarget[i], t)
                ellipse(x, y, random(40), random(45)) /*Modification aléatoire des formes*/
            }
            pop()
        }
    }


    /*Touche S - Onde demi-cercle*/
    playSound(sound12, 83);
    if (sound12.isPlaying() == true) {
        push();

        let waveform = sound12FFT.waveform();
        stroke(300)
        strokeWeight(2)
        noFill()
        beginShape()

        for (var i = 0; i < waveform.length; i++) {
            var angle = map(i, 0, waveform.length * 2, 0, TWO_PI /*demi-cercle*/); 
            var rad = map(waveform[i] * 0.5, -0.34, 1, 0, height);

            var x = width * 0.5 + rad * cos(angle)
            var y = height * 0.5 + rad * sin(angle)

            curveVertex(x, y);
        }
        endShape();
        pop()

    }

    /*Touche D - Cercle qui rétréci*/
    playSound(sound13, 68);
    if (sound13.isPlaying() == true) {
        push()

        /*Cercle n°1*/
        let r = map(sound13.currentTime() * 2.5, 0, sound13.duration(), width, 0)
        noFill()
        stroke(37, 76, 181)
        strokeWeight(7)
        ellipse(width * 0.5, height * 0.5, r, r)
        pop()

        /*Cercle n°2*/
        push()
        let r2 = map(sound13.currentTime() * 1.5, 0, sound13.duration(), 0, width)
        noFill()
        stroke(37, 76, 181)
        strokeWeight(7)
        ellipse(width * 0.5, height * 0.5, r2, r2)
        pop()

        /*Cercle n°3*/
        push()
        let r3 = map(sound13.currentTime() * 5, 0, sound13.duration(), width, 0)
        noFill()
        stroke(37, 76, 181)
        strokeWeight(7)
        ellipse(width * 0.5, height * 0.5, r3, r3)
        pop()

    }

    /*Touche F - Lignes au hasard*/
    playSound(sound14, 70);
    if (sound14.isPlaying() == true) {
        push()
        fill(37, 76, 181)
        noStroke()
        rectMode(CENTER)
        rect(random(50, width-50), height, 20, random(500,800)) /*Disposition aléatoire + taille aléatoire*/
        pop()
    }

    /*Touche G - Rayons Rouges*/
    playSound(sound15, 71);
    if (sound15.isPlaying() == true) {

        push()
        var nsegment = 50 /*Nombre de trait*/
        var ncurrentssegment = (map(sound15.currentTime(), 200, sound15.duration(), 3680, nsegment))
        
        for (let i = 0; i < ncurrentssegment; i++) {
            stroke(191, 32, 17);
            strokeWeight(4)

            var angle = map(i, 55, nsegment, 2, TWO_PI) / 2;
            var x = width * 0.5 + height * 2 * cos(angle);
            var y = width * 0.5 + height * 2 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop()
    }

    /*Touche H - demi-cercles*/
    playSound(sound16, 72);
    if (sound16.isPlaying() == true) {
        push()
        noFill()
        stroke(255)

        /*Ralentir grâce à un tableau*/
        if (frameCount % 40 == 0) {
            xdc = []
            ydc = []
            for (let i = 0; i < 20; i++) {

                xdc.push(random(50, width - 50))
                ydc.push(random(50, height))
            }
        }

        /*Création de la forme*/
        for (let i = 0; i < xdc.length; i++) {
            arc(xdc[i], ydc[i], 100, 100, PI, PI);
            arc(xdc[i], ydc[i], 90, 90, PI, PI);
            arc(xdc[i], ydc[i], 80, 80, PI, PI);
            arc(xdc[i], ydc[i], 70, 70, PI, PI);
            arc(xdc[i], ydc[i], 60, 60, PI, PI);
            /*demi-cercle plein*/
            push()
            fill(255)
            arc(xdc[i], ydc[i], 50, 50, PI, PI);
            pop()
        }
    }



    /*Touche J - demie-onde */
    playSound(sound17, 74);
    if (sound17.isPlaying() == true) {
        push();

        let waveform = sound17FFT.waveform();
        stroke(255)
        strokeWeight(3)
        noFill()

        /*Création de la forme*/
        beginShape()
        for (var i = 0; i < waveform.length; i++) {
            var angle = map(i, 0, waveform.length, 0, -PI);
            var rad = map(waveform[i] * 15 /*Aller à l'extrème de la taille*/, -0.25, 1, 0, height);

            var x = width * 0.5 + rad * cos(angle)
            var y = height * 0.5 + rad * sin(angle)

            curveVertex(x, y);
        }
        endShape();
        pop()

    }

    /*Touche K - Pont/Soleil*/
    playSound(sound18, 75);
    if (sound18.isPlaying() == true) {

        /*Arc n°1*/
        push()
        stroke(191, 32, 17)
        strokeWeight(5)
        noFill()
        x = (map(sound18.currentTime() * 0.58, -80, -10, 0, 80)) /*dessin de l'arc*/
        arc(windowWidth * 0.5, windowHeight * 1.05, 900, 800, PI, x)
        pop()

        /*Arc n°2*/
        push()
        stroke(191, 32, 17)
        strokeWeight(3)
        noFill()
        x = (map(sound18.currentTime() * 2.15, -80, -10, 0, 80)) /*dessin de l'arc*/
        arc(windowWidth * 0.5, windowHeight * 1.05, 700, 640, PI, x)
        pop()

        /*Arc n°3*/
        push()
        stroke(191, 32, 17)
        strokeWeight(1)
        noFill()
        x = (map(sound18.currentTime() * 2.25, -80, -10, 0, 80)) /*dessin de l'arc*/
        arc(windowWidth * 0.5, windowHeight * 1.05, 500, 440, PI, x)
        pop()

        /*Arc n°4*/
        push()
        noStroke()
        fill(191, 32, 17)
        x = (map(sound18.currentTime() * 2.35, -80, -10, 0, 80)) /*dessin de l'arc*/
        arc(windowWidth * 0.5, windowHeight * 1.05, 300, 320, PI, x)
        pop()

    }
    /*Touche L - Fleurs*/
    playSound(sound19, 76);
    if (sound19.isPlaying() == true) {
        push()
        translate(random(width), random(height)); /*position aléatoire des fleurs*/
        noStroke();
        fill(255)

        /*création d'une fleur*/
        for (let i = 0; i < 5;i++) {
        ellipse(0, 25, 17, 40); /*ellipse représentant les pétals*/
        rotate(PI * 0.4);
        }
        pop()

    }

    /*Touche M - Fleurs qui s'agite */
    playSound(sound20, 77);
    if (sound20.isPlaying() == true){

        push()
        translate(width*0.5, height*0.5); /*position de la forme*/
          noStroke();
          fill(255)

          /*construction de la forme*/
          for (let i = 0; i < 200; i ++) {
            ellipse(0, random(height*0.2), 20, 40);
            rotate(PI*0.01);
          }
        pop()

        }


    /*Touche W - Portail*/
    playSound(sound21, 87);
    if (sound21.isPlaying() == true){

        push();

        /*Trait n°1*/
        var long = map(sound21.currentTime(), 0, sound21.duration(), width*0.25, width*0.80)
        stroke(191, 32, 17)
        strokeWeight(30)
        line(width*0.25, height*0.20, long, height*0.20)

        /*Trait n°2*/
        var long = map(sound21.currentTime(), 0, sound21.duration(), width*0.35, width*0.68)
        strokeWeight(20)
        line(width*0.35, height*0.30, long, height*0.30)

        /*Trait n°3*/
        var long = map(sound21.currentTime(), 0, sound21.duration(), height*0.20, height*0.75)
        strokeWeight(25)
        line(width*0.35, height*0.20, width*0.35, long)

        /*Trait n°4*/
        strokeWeight(25)
        line(width*0.65, height*0.20, width*0.65, long)
        pop()


    }

    /*Touche X - Kanji Nihon*/
    playSound(sound22, 88);
    if (sound22.isPlaying() == true){

        /* Premier caractère 日*/
        push();
        /*Trait n°1*/
        stroke(random(171,240), random(12,95), random(0,70))
        var longx = map(sound22.currentTime(), 0, sound22.duration(), width*0.85, width*0.94)
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.22, height*0.20)
        strokeWeight(20)
        line(width*0.85, height*0.22, longx, longy)

        /*Trait n°2*/
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.20, height*0.45)
        strokeWeight(20)
        line(width*0.95, height*0.20, width*0.95, longy)

        /*Trait n°3*/
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.22, height*0.45)
        strokeWeight(20)
        line(width*0.85, height*0.22, width*0.85, longy)

        /*Trait n°4*/
        var longx = map(sound22.currentTime(), 0, sound22.duration(), width*0.87, width*0.93)
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.35, height*0.33)
        strokeWeight(20)
        line(width*0.87, height*0.35, longx, longy)

        /*Trait n°5*/
        var longx = map(sound22.currentTime(), 0, sound22.duration(), width*0.85, width*0.94)
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.45, height*0.43)
        strokeWeight(20)
        line(width*0.85, height*0.45, longx, longy)
        pop()

        /* Deuxième caractère 本*/
        push()
        /*Trait n°1*/
        stroke(random(171,240), random(12,95), random(0,70))
        var longx = map(sound22.currentTime(), 0, sound22.duration(), width*0.85, width*0.96)
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.65, height*0.63)
        strokeWeight(20)
        line(width*0.85, height*0.65, longx, longy)

        /*Trait n°2*/
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.60, height*0.90)
        strokeWeight(20)
        line(width*0.90, height*0.60, width*0.90, longy)

        /*Trait n°3*/
        var longx = map(sound22.currentTime(), 0, sound22.duration(), width*0.88, width*0.92)
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.80, height*0.78)
        strokeWeight(20)
        line(width*0.88, height*0.80, longx, longy)

        /*Trait n°4*/
        var longx = map(sound22.currentTime(), 0, sound22.duration(), width*0.9, width*0.84)
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.64, height*0.85)
        strokeWeight(20)
        line(width*0.9, height*0.64, longx, longy)

        /*Trait n°5*/
        var longx = map(sound22.currentTime(), 0, sound22.duration(), width*0.9, width*0.96)
        var longy = map(sound22.currentTime(), 0, sound22.duration(), height*0.64, height*0.84)
        strokeWeight(20)
        line(width*0.9, height*0.64, longx, longy)
        pop()

    }

    /*Touche C - Onigiris*/
    playSound(sound23, 67);
    if (sound23.isPlaying() == true){

        let angle = map(sound23.currentTime(), 0, sound23.duration(), 0, TWO_PI)

        /*onigiri n°1*/
        push()
        translate(width*0.5, height*0.5)
        rotate(angle*0.75)

        /*création forme 1 (riz)*/
        beginShape()
        curveTightness(-0.5)
        fill(255)
        noStroke()
        curveVertex(150,60)
        curveVertex(150,60)
        curveVertex(205,150)
        curveVertex(95,150)
        endShape(CLOSE)

        /*permet de séparer les deux formes*/
        rotate(angle*0.75)
        /*Création forme 2 (algue)*/
        fill(0)
        rect(110,120, 80,48, 10)
        pop()

        /*onigiri n°2*/        
        push()
        translate(width*0.5, height*0.5)
        rotate(angle*1.2)
        
        /*création forme 1 (riz)*/
        beginShape()
        curveTightness(-0.5)
        fill(255)
        noStroke()
        curveVertex(150,60)
        curveVertex(150,60)
        curveVertex(205,150)
        curveVertex(95,150)
        endShape(CLOSE)

        /*permet de séparer les deux formes*/
        rotate(angle*0.1)
        /*Création forme 2 (algue)*/
        fill(0)
        rect(110,120, 80,48, 10)
        pop()

        /*onigiri n°3*/
        push()
        translate(width*0.5, height*0.5)
        rotate(angle*0.5)

        /*création forme 1 (riz)*/
        beginShape()
        curveTightness(-0.25)
        fill(255)
        noStroke()
        curveVertex(150,60)
        curveVertex(150,60)
        curveVertex(205,150)
        curveVertex(95,150)
        endShape(CLOSE)

        /*Création forme 2 (algue)*/
        fill(0)
        rect(110,120, 80,48, 10)
        pop()

        /*onigiri n°4*/
        push()
        translate(width*0.5, height*0.5)
        rotate(angle*1)

        /*création forme 1 (riz)*/
        beginShape()
        curveTightness(-0.5)
        fill(255)
        noStroke()
        curveVertex(150,60)
        curveVertex(150,60)
        curveVertex(205,150)
        curveVertex(95,150)
        endShape(CLOSE)

        /*Création forme 2 (algue)*/
        fill(0)
        rect(110,120, 80,48, 10)
        pop()

    }

    /*Touche V - Sushis volants*/
    playSound(sound24, 86);
    if (sound24.isPlaying() == true){

        /*position aléatoire du bas vers le haut grâce à un tableau*/
        for (let i = 0; i < 50; i++) {
            push()
            var t = map(sound24.currentTime(), -4, sound24.duration(), 4, 0)
            t = constrain(t, 0, 5)
            noStroke()
            for (let i = 0; i < 15; i++) {
                var x = lerp(xsush[i], xtarshi[i], t)
                var y = lerp(ysush[i], ytarshi[i], t)

        /*rectangle 1*/
        noStroke()
        fill(255)
        rect(x, y+10, 80, 40,10)

        /*rectange 2*/
        noStroke()
        fill(191, 32, 17)
        rect(x, y, 80, 30,10)
        pop()}
            }


    }

    /*Touche B - 3 cercles qui rétrécicent*/
    playSound(sound25, 66);
    if (sound25.isPlaying() == true){

        push()
        noFill()
        stroke(191,32,17,180)
        strokeWeight(random(0.01,20))

        /*animation des cercles par rapport à la musique*/
        var n = map(sound25.currentTime(), 0, sound25.duration(), height*0.8, width*0)

        /*cercle 1*/
        ellipse(width*0.5,height*0.5, n, n)
        /*cercle 2*/
        ellipse(width*0.2,height*0.5, n, n)
        /*cercle 3*/
        ellipse(width*0.8,height*0.5, n, n)


        pop()

    }

    /*Touche N - Trois Dangos*/
    playSound(sound26, 78);
    if (sound26.isPlaying() == true){

        /*Dango 1*/
        push()

        var t = map(sound26.currentTime(), -3, sound26.duration(), 0, 1)
        noStroke()

        /*déplacement de haut en bas selon tableau*/
        for (let i = 0; i < 1; i++) {
            var x = lerp(xdpos[i], xdtarget[i], t)
            var y = lerp(ydpos[i], ydtarget[i], t)

            /*aspect*/
            fill(211,52,37)
            ellipse(x,y, 120, 100)

        }
        pop()

        /*Dango 2*/
        push()

        var t = map(sound26.currentTime(), -2, sound26.duration(), 0, 1)
        noStroke()

        /*déplacement de haut en bas selon tableau*/
        for (let i = 0; i < 1; i++) {
            var x = lerp(xdpos[i], xdtarget[i], t)
            var y = lerp(ydpos[i], ydtarget[i]-100, t)

            /*aspect*/
            fill(235)
            ellipse(x,y, 120, 100)
 
        }
        pop()

        /*Dango 3*/
        push()

        var t = map(sound26.currentTime(), -1, sound26.duration(), 0, 1)
        noStroke()

        /*déplacement de haut en bas selon tableau*/
        for (let i = 0; i < 1; i++) {
            var x = lerp(xdpos[i], xdtarget[i], t)
            var y = lerp(ydpos[i], ydtarget[i]-200, t)

            /*aspect*/
            fill(82, 115, 73)
            ellipse(x,y, 120, 100)

        }
        pop()




    }

}

function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play()
    }
}

function windowResized() {
    createCanvas(windowWidth, windowHeight)
}