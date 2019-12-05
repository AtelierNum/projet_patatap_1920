//Variables des sons
let sound01;
let sound02;
let sound03;
let sound04;
let sound04FFT;
let sound05;
let sound05FFT;
let sound06;
let sound06FFT;
let sound07;
let sound08;
let sound09;
let sound10;
let sound11;
let sound12;
let sound13;
let sound14;
let sound15;
let sound16;
let sound17;
let sound18;
let sound19;
let sound20;
let sound21;
let sound22;
let sound23;
let sound24;
let sound25;
let sound26;

//Variables couleurs
let a;
let b;
let c;


let yoff = 0.0;

//Variables pour tableaux : Touche L
var xpos = []
var ypos = []
var xtarget = []
var ytarget = []

//Attribution des sons aux variables
function preload() {
    sound01 = loadSound("./assets/son1.wav")   //A 
    sound02 = loadSound("./assets/son2.wav")   //Z 
    sound03 = loadSound("./assets/son3.wav")   //E 
    sound04 = loadSound("./assets/son4.wav")   //R
    sound05 = loadSound("./assets/son5.wav")   //T
    sound06 = loadSound("./assets/son6.wav")   //Y 
    sound07 = loadSound("./assets/son7.wav")   //U 
    sound08 = loadSound("./assets/son8.wav")   //I 
    sound09 = loadSound("./assets/son9.wav")   //O 
    sound10 = loadSound("./assets/son10.wav")  //P 
    sound11 = loadSound("./assets/son11.wav")  //Q 
    sound12 = loadSound("./assets/son12.wav")  //S 
    sound13 = loadSound("./assets/son13.wav")  //D 
    sound14 = loadSound("./assets/son14.wav")  //F 
    sound15 = loadSound("./assets/son15.wav")  //G 
    sound16 = loadSound("./assets/son16.wav")  //H 
    sound17 = loadSound("./assets/son17.wav")  //J 
    sound18 = loadSound("./assets/son18.wav")  //K
    sound19 = loadSound("./assets/son19.wav")  //L 
    sound20 = loadSound("./assets/son20.wav")  //M 
    sound21 = loadSound("./assets/son21.wav")  //W 
    sound22 = loadSound("./assets/son22.wav")  //X 
    sound23 = loadSound("./assets/son23.wav")  //C
    sound24 = loadSound("./assets/son24.wav")  //V 
    sound25 = loadSound("./assets/son25.wav")  //B 
    sound26 = loadSound("./assets/son26.wav")  //N 

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(27, 29, 54);
    sound04FFT = new p5.FFT(0.8, 16)
    sound04FFT.setInput(sound04)
    sound05FFT = new p5.FFT(0.8, 1024)
    sound05FFT.setInput(sound05)
    sound06FFT = new p5.FFT(0.8, 256)
    sound06FFT.setInput(sound06)
    a = color(218, 25, 132); //rose
    b = color(29, 66, 137); //bleu foncé
    c = color(10, 163, 224); //bleu clair


    //Pour Touche L
    for (var i = 0; i < 50; i++) {
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        xtarget.push(random(width))
        ytarget.push(random(height))
    }
}


function draw() {
    background(27, 29, 54);

    push()
    
    //Touche A - cercle qui s'agrandit
    playSound(sound01, 65)
    if (sound01.isPlaying() == true) { //condition si le son et la lettre sont actives
        var r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)
        noStroke()
        fill(a)
        ellipse(width * 0.5, height * 0.5, r, r)
    }

    pop()
    push()

    //Touche Z - 3 carrés qui se transforment en cercle
    playSound(sound02, 90)
    if (sound02.isPlaying() == true) {
        var r = map(sound02.currentTime(),
            0, sound02.duration() * 0.33,
            0, height * 0.5);
        r = constrain(r, 0, height * 0.5)

        let c = map(sound02.currentTime(),
            sound02.duration() * 0.33, sound02.duration(),
            0, height * 0.5
        )
        c = constrain(c, 0, height * 0.5)

        push()
        noStroke()
        fill(b)
        rectMode(CENTER)
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c) //centre
        pop()

        push()
        translate(width * 0.2, height * 0.2) //gauche
        stroke(b)
        noFill()
        rectMode(CENTER)
        rect(0, 0, r * 0.7, r * 0.7, c, c, c, c)
        stroke(a)
        noFill()
        rect(0, 0, r * 0.5, r * 0.5, c, c, c, c)
        stroke(b)
        noFill()
        rect(0, 0, r * 0.3, r * 0.3, c, c, c, c)
        pop()

        push()
        translate(width * 0.8, height * 0.8) //droite
        stroke(b)
        noFill()
        rectMode(CENTER)
        rect(0, 0, r * 0.7, r * 0.7, c, c, c, c)
        stroke(a)
        noFill()
        rect(0, 0, r * 0.5, r * 0.5, c, c, c, c)
        stroke(b)
        noFill()
        rect(0, 0, r * 0.3, r * 0.3, c, c, c, c)
        pop()



    }

    pop()
    push()

    //Touche E - 3 barres qui tournent
    playSound(sound03, 69);
    if (sound03.isPlaying() == true) {
        push()
        var rotation = map(sound03.currentTime(), 0, sound03.duration(), 0, PI)
        strokeWeight(4)
        rectMode(CENTER)

        push()
        translate(width * 0.5, height * 0.5) //centre
        rotate(rotation)
        noStroke()
        fill(b)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()

        push()
        translate(width * 0.25, height * 0.5) //gauche
        rotate(rotation)
        noStroke()
        fill(a)
        rect(0, 0, width * 0.25, width * 0.05)
        pop()

        push()
        translate(width * 0.75, height * 0.5) //droite
        rotate(rotation)
        noStroke()
        fill(a)
        rect(0, 0, width * 0.25, width * 0.05)
        pop()

        pop()
    }

    pop()
    push()

    //Touche R - 3 carrés avec vibration
    playSound(sound04, 82);
    if (sound04.isPlaying() == true) {
        push()
        sound04FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound04FFT.getEnergy("bass") //énergie et fréquence du son

        push() //permet de changer la couleur
        noStroke()
        fill(29, 66, 137, nrj1)
        translate(width * 0.25, height * 0.5) //gauche
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        noStroke()
        fill(10, 163, 224, 50)
        translate(width * 0.5, height * 0.5) //centre
        rotate(PI / 4)
        rect(0, 0, nrj1 * 1.5, nrj1*1.5)
        pop()

        push()
        noStroke()
        fill(29, 66, 137, nrj1)
        translate(width * 0.75, height * 0.5) //droite
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()
    }

    pop()
    push()

    //Touche T - fréquence du son avec ligne
    playSound(sound05, 84) // 't' == drone2
    if (sound05.isPlaying() == true) {
        push()
        var waveform = sound05FFT.waveform();
        noFill();
        beginShape();
        stroke(a); // waveform is mint
        strokeWeight(10);

        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }

    pop()
    push()

    //Touche Y - fréquence du son par bandes de cercles
    playSound(sound06, 89)
    if (sound06.isPlaying() == true) {
        push()
        let wave = sound06FFT.waveform()
        strokeWeight(1)
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -0.1,0.1, height, 0)
            // push()
            stroke(a)
            noFill()
            ellipse(width*0.1, y, 20, 20)
            stroke(b)
            noFill()
            ellipse(width*0.3, y, 20, 20)
            stroke(a)
            noFill()
            ellipse(width*0.5, y, 20, 20)
            stroke(b)
            noFill()
            ellipse(width*0.7, y, 20, 20)
            stroke(a)
            noFill()
            ellipse(width*0.9, y, 20, 20)

        }
        pop()
    }

    pop()
    push()

    //Touche U - 3 x 4 carrés qui tournent
    playSound(sound07, 85)
    if (sound07.isPlaying() == true) { //condition si le son et la lettre sont actives
        let angle = map(sound07.currentTime(),
            0, sound07.duration(),
            0, TWO_PI)

        push()
        translate(width * 0.5, height * 0.5) //centre
        noStroke()
        fill(a)
        rotate(angle)
        rect(100, 100, 100, 100)
        rect(-100, 100, 100, 100)
        rect(100, -100, 100, 100)
        rect(-100, -100, 100, 100)
        pop()

        push()
        translate(width * 0.25, height * 0.5) //gauche
        noStroke()
        fill(c)
        rotate(angle)
        rect(100, 100, 100, 100)
        rect(-100, 100, 100, 100)
        rect(100, -100, 100, 100)
        rect(-100, -100, 100, 100)
        pop()

        push()
        translate(width * 0.75, height * 0.5) //droite
        noStroke()
        fill(c)
        rotate(angle)
        rect(100, 100, 100, 100)
        rect(-100, 100, 100, 100)
        rect(100, -100, 100, 100)
        rect(-100, -100, 100, 100)
        pop()

    }

    pop()
    push()

    // Touche I - 6 carrés de différetes tailles qui tournent
    playSound(sound08, 73)
    if (sound08.isPlaying() == true) { //condition si le son et la lettre sont actives
        let angle = map(sound08.currentTime(),
            0, sound08.duration(),
            0, TWO_PI)
        strokeWeight(3)
        rectMode(CENTER)
        noFill()
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        
        push()
        stroke(a)
        rect(0, 0, height * 0.20, height * 0.20) //changement de taille à chaque fois
        pop()

        push()
        stroke(c)
        rect(0, 0, height * 0.30, height * 0.30)
        pop()

        push()
        stroke(a)
        rect(0, 0, height * 0.40, height * 0.40)
        pop()

        push()
        stroke(c)
        rect(0, 0, height * 0.50, height * 0.50)
        pop()

        push()
        stroke(a)
        rect(0, 0, height * 0.60, height * 0.60)
        pop()

        push()
        stroke(c)
        rect(0, 0, height * 0.70, height * 0.70)
        pop()

    }

    pop()
    push()

    //Touche O - carrés qui vont vers le milieu avec vibration + cercle qui s'agrandit
    playSound(sound09, 79)
    if (sound09.isPlaying() == true) {
        var t = map(sound09.currentTime(), 0, sound09.duration(), 0, 1)
        var r = map(sound09.currentTime(), 0, sound09.duration(), 0, width)
        push()
        rectMode(CENTER)
        noStroke()
        fill(c)
        if (t > 0) {
            rect(random(width*0.03,width*0.07), random(height*0.03,height*0.07),50, 50) //haut gauche
            rect(random(width*0.03,width*0.07), random(height*0.93,height*0.97),50, 50) //bas gauche
            rect(random(width*0.93,width*0.97), random(height*0.93,height*0.97), 50, 50) //bas droit
            rect(random(width*0.93,width*0.97), random(height*0.03,height*0.07), 50, 50) //haut droit
        }
        if (t > 0.1) {
            rect(random(width*0.13,width*0.17), random(height*0.13,height*0.17),50, 50) //haut gauche
            rect(random(width*0.13,width*0.17), random(height*0.83,height*0.87),50, 50) //bas gauche
            rect(random(width*0.83,width*0.87), random(height*0.83,height*0.87), 50, 50) //bas droit
            rect(random(width*0.83,width*0.87), random(height*0.13,height*0.17), 50, 50) //haut droit
        }
        if (t > 0.2) {
            rect(random(width*0.23,width*0.27), random(height*0.23,height*0.27), 50, 50) //haut gauche
            rect(random(width*0.23,width*0.27), random(height*0.73,height*0.77), 50, 50) //bas gauche
            rect(random(width*0.73,width*0.77), random(height*0.73,height*0.77), 50, 50) //bas droit
            rect(random(width*0.73,width*0.77), random(height*0.23,height*0.27), 50, 50)  //haut droit
        }
        if (t > 0.3) {
            rect(random(width*0.33,width*0.37), random(height*0.33,height*0.37), 50, 50) //haut gauche
            rect(random(width*0.33,width*0.37), random(height*0.63,height*0.67), 50, 50) //bas gauche
            rect(random(width*0.63,width*0.67), random(height*0.63,height*0.67), 50, 50) //bas droit
            rect(random(width*0.63,width*0.67), random(height*0.33,height*0.37), 50, 50) //haut droit
        }

        if (t>0.4) {
            rect(random(width*0.48, width*0.52), random(height*0.48, height*0.52), r*0.2, r*0.2) //centre

        }
    
    }
    pop()
    push()

    //Touche P - 4 cercles qui s'agrandissent
    playSound(sound10, 80)
    if (sound10.isPlaying() == true) { //condition si le son et la lettre sont actives
        var r = map(sound10.currentTime(), 0, sound10.duration() * 0.5, 0, width)
        stroke(255, 0, 0)
        strokeWeight(3);
        noFill()
        push()
        stroke(c)
        ellipse(width * 0.75, height * 0.5, r * 0.5, r * 0.5) //bas
        pop()
        push()
        stroke(c)
        ellipse(width * 0.25, height * 0.5, r * 0.5, r * 0.5) //haut
        pop()
        push()
        stroke(a)
        ellipse(width * 0.5, height * 0.75, r * 0.5, r * 0.5) //droite
        pop()
        push()
        stroke(a)
        ellipse(width * 0.5, height * 0.25, r * 0.5, r * 0.5) //gauche

    }

    pop()
    push()

    //Touche Q - beaucoup de carrés qui tournent
    playSound(sound11, 81)
    if (sound11.isPlaying() == true) {

        var r = map(sound11.currentTime(), 0, sound11.duration() * 0.5, 0, TWO_PI)

        push()
        rectMode(CENTER);
        strokeWeight(3)
        push() //permet de changer la couleur
        stroke(c)
        noFill()
        translate(width * 0.20, height * 0.20) //déplacement des repères pour chaque carré pour faciliter leur placement/rotation
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.20, height * 0.40)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.20, height * 0.60)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.20, height * 0.8)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.4, height * 0.2)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.4, height * 0.4)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.4, height * 0.6)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.4, height * 0.8)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.6, height * 0.2)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.6, height * 0.4)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.6, height * 0.6)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.6, height * 0.8)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.8, height * 0.2)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.8, height * 0.4)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.8, height * 0.6)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(c)
        noFill()
        translate(width * 0.8, height * 0.8)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width * 0.3, height * 0.3)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width * 0.3, height * 0.5)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width * 0.3, height * 0.7)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width * 0.5, height * 0.3)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width * 0.5, height * 0.5)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width * 0.5, height * 0.7)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width * 0.7, height * 0.3)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width * 0.7, height * 0.5)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width * 0.7, height * 0.7)
        rotate(r)
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

    }

    pop()
    push()

    //Touche S - carrés et ellipses dispersés aléatoirement 
    playSound(sound12, 83)
    if (sound12.isPlaying() == true) {

        strokeWeight(3)
        stroke(a)
        noFill()
        rect(random(0, width), random(0, height), 100, 100) //contour a sans remplissage 
        stroke(c)
        noFill()
        rect(random(0, width), random(0, height), 100, 100) //contour c sans remplissage 
        stroke(b)
        noFill()
        rect(random(0, width), random(0, height), 100, 100) //contour b sans remplissage 
        noStroke()
        fill(a)
        ellipse(random(0, width), random(0, height), 100, 100) //remplissage a sans contour 
        noStroke()
        fill(c)
        ellipse(random(0, width), random(0, height), 100, 100) //remplissage b sans contour 
        noStroke()
        fill(b)
        ellipse(random(0, width), random(0, height), 100, 100) //remplissage c sans contour 

    }

    pop()
    push()

    //Touche D - carrés les uns après les autres en fonction de la durée
    playSound(sound13, 68)
    if (sound13.isPlaying() == true) {

        pop()
        rectMode(CENTER)
        var t = map(sound13.currentTime(), 0, sound13.duration(), 0, 1)
        if (t > 0) { //Si le temps est inférieur à 1/10 du temps de la musique
            strokeWeight(3)
            stroke(a)
            noFill()
            rect(width * 0.1, height * 0.5, 100, 100)
            stroke(b)
            noFill()
            ellipse(width * 0.1, height * 0.5, 70, 70)
        }
        if (t > 0.10) { //Si le temps est inférieur à 2/10 du temps de la musique
            strokeWeight(3)
            stroke(b)
            noFill()
            rect(width * 0.2, height * 0.5, 100, 100)
        }
        if (t > 0.20) {  //Si le temps est inférieur à 3/10 du temps de la musique
            strokeWeight(3)
            stroke(a)
            noFill()
            rect(width * 0.3, height * 0.5, 100, 100)
            stroke(b)
            noFill()
            ellipse(width * 0.3, height * 0.5, 70, 70)
        }
        if (t > 0.30) {  //Si le temps est inférieur à 4/10 du temps de la musique
            strokeWeight(3)
            stroke(b)
            noFill()
            rect(width * 0.4, height * 0.5, 100, 100)
        }
        if (t > 0.40) { //Si le temps est inférieur à 5/10 du temps de la musique
            strokeWeight(3)
            stroke(a)
            noFill()
            rect(width * 0.5, height * 0.5, 100, 100)
            stroke(b)
            noFill()
            ellipse(width * 0.5, height * 0.5, 70, 70)
        }
        if (t > 0.5) { //Si le temps est inférieur à 6/10 du temps de la musique
            strokeWeight(3)
            stroke(b)
            noFill()
            rect(width * 0.6, height * 0.5, 100, 100)
        }
        if (t > 0.60) { //Si le temps est inférieur à 7/10 du temps de la musique
            strokeWeight(3)
            stroke(a)
            noFill()
            rect(width * 0.7, height * 0.5, 100, 100)
            stroke(b)
            noFill()
            ellipse(width * 0.7, height * 0.5, 70, 70)
        }
        if (t > 0.70) { //Si le temps est inférieur à 8/10 du temps de la musique
            strokeWeight(3)
            stroke(b)
            noFill()
            rect(width * 0.8, height * 0.5, 100, 100)
        }
        if (t > 0.80) { //Si le temps est inférieur à 9/10 du temps de la musique
            strokeWeight(3)
            stroke(a)
            noFill()
            rect(width * 0.9, height * 0.5, 100, 100)
            stroke(b)
            noFill()
            ellipse(width * 0.9, height * 0.5, 70, 70)
        }

        push()
    }

    pop()
    push()

    //Touche F - mouvement de carrés dans le coin haut gauche et bas droit
    playSound(sound14, 70)
    if (sound14.isPlaying() == true) {
        strokeWeight(3)

        pop()
        rectMode(CENTER)
        stroke(a)
        noFill()
        rect(100, 100, random(0, 500), random(0, 500)) //Taille de rectangle avec des côtés compris entre 0 et 500
        push()
        pop()
        stroke(b)
        noFill()
        rect(100, 100, random(0, 500), random(0, 500))
        push()
        pop()
        stroke(c)
        noFill()
        rect(100, 100, random(0, 500), random(0, 500))
        push()
        
        pop()
        rectMode(CENTER)
        stroke(a)
        noFill()
        rect(width - 100, height - 100, random(0, 500), random(0, 500)) 
        push()
        pop()
        stroke(b)
        noFill()
        rect(width - 100, height - 100, random(0, 500), random(0, 500))
        push()
        pop()
        stroke(c)
        noFill()
        rect(width - 100, height - 100, random(0, 500), random(0, 500))
        push()

    }

    pop()
    push()

    //Touche G - carrés qui appaissent + perspective
    playSound(sound15, 71)
    if (sound15.isPlaying() == true) { //condition si le son et la lettre sont actives
        var t = map(sound15.currentTime(), 0, sound15.duration(), 0, 1)
        var r = map(sound15.currentTime(), 0, sound15.duration(), 0, width)

        rectMode(CENTER)

        if (t > 0) {
            strokeWeight(3)
            stroke(a)
            noFill()
            rect(width * 0.5, height * 0.5, r, r)

        }
        if (t > 0.10) {
            strokeWeight(3)
            stroke(b)
            noFill()
            rect(width * 0.5, height * 0.5, r * 0.9, r * 0.9) 
        }
        if (t > 0.20) {
            strokeWeight(3)
            stroke(c)
            noFill()
            rect(width * 0.5, height * 0.5, r * 0.8, r * 0.8)
        }
        if (t > 0.30) {
            strokeWeight(3)
            stroke(a)
            noFill()
            rect(width * 0.5, height * 0.5, r * 0.7, r * 0.7)
        }
        if (t > 0.40) {
            strokeWeight(3)
            stroke(b)
            noFill()
            rect(width * 0.5, height * 0.5, r * 0.6, r * 0.6)
        }
        if (t > 0.50) {
            strokeWeight(3)
            stroke(c)
            noFill()
            rect(width * 0.5, height * 0.5, r * 0.5, r * 0.5)
        }
        if (t > 0.60) {
            strokeWeight(3)
            stroke(a)
            noFill()
            rect(width * 0.5, height * 0.5, r * 0.4, r * 0.4)
        }
        if (t > 0.70) {
            strokeWeight(3)
            stroke(b)
            noFill()
            rect(width * 0.5, height * 0.5, r * 0.3, r * 0.3)
        }
        if (t > 0.80) {
            strokeWeight(3)
            stroke(c)
            noFill()
            rect(width * 0.5, height * 0.5, r * 0.2, r * 0.2)
        }
        if (t > 0.90) {
            strokeWeight(3)
            stroke(a)
            noFill()
            rect(width * 0.5, height * 0.5, r * 0.1, r * 0.1)
        }

    }

    pop()
    push()

    //Touche H - 9 x 2 barres qui forment une croix
    playSound(sound16, 72)
    if (sound16.isPlaying() == true) {

        push()
        var t = map(sound16.currentTime(), 0, sound16.duration(), 0, 1)
        var r = map(sound16.currentTime(), 0, sound16.duration() * 0.2, 0, PI / 10)
        rectMode(CENTER);
        strokeWeight(3)

        if (t > 0.20) {
            push()
            stroke(b)
            noFill()
            translate(width * 0.20, height * 0.20)
            rotate(r) //Rotation sens +
            rect(0, 0, 30, 200)
            pop()

            push() 
            stroke(b)
            noFill()
            translate(width * 0.50, height * 0.20)
            rotate(r) //Rotation sens +
            rect(0, 0, 30, 200)
            pop()

            push() 
            stroke(b)
            noFill()
            translate(width * 0.80, height * 0.20)
            rotate(r) //Rotation sens +
            rect(0, 0, 30, 200)
            pop()

            push() 
            stroke(a)
            noFill()
            translate(width * 0.20, height * 0.20)
            rotate(-r) //Rotation sens -
            rect(0, 0, 30, 200)
            pop()

            push()
            stroke(a)
            noFill()
            translate(width * 0.50, height * 0.20)
            rotate(-r) //Rotation sens -
            rect(0, 0, 30, 200)
            pop()

            push()
            stroke(a)
            noFill()
            translate(width * 0.80, height * 0.20)
            rotate(-r) //Rotation sens -
            rect(0, 0, 30, 200)
            pop()
        }

        if (t > 0.50) {
            push()
            stroke(a)
            noFill()
            translate(width * 0.20, height * 0.50)
            rotate(r)
            rect(0, 0, 30, 200)
            pop()

            push()
            stroke(a)
            noFill()
            translate(width * 0.50, height * 0.50)
            rotate(r)
            rect(0, 0, 30, 200)
            pop()

            push()
            stroke(a)
            noFill()
            translate(width * 0.80, height * 0.50)
            rotate(r)
            rect(0, 0, 30, 200)
            pop()

            push() 
            stroke(b)
            noFill()
            translate(width * 0.20, height * 0.50)
            rotate(-r)
            rect(0, 0, 30, 200)
            pop()

            push()
            stroke(b)
            noFill()
            translate(width * 0.50, height * 0.50)
            rotate(-r)
            rect(0, 0, 30, 200)
            pop()

            push() 
            stroke(b)
            noFill()
            translate(width * 0.80, height * 0.50)
            rotate(-r)
            rect(0, 0, 30, 200)
            pop()
        }

        if (t > 0.80) {
            push() 
            stroke(b)
            noFill()
            translate(width * 0.20, height * 0.80)
            rotate(r)
            rect(0, 0, 30, 200)
            pop()

            push() 
            stroke(b)
            noFill()
            translate(width * 0.50, height * 0.80)
            rotate(r)
            rect(0, 0, 30, 200)
            pop()

            push()
            stroke(b)
            noFill()
            translate(width * 0.80, height * 0.80)
            rotate(r)
            rect(0, 0, 30, 200)
            pop()

            push()
            stroke(a)
            noFill()
            translate(width * 0.20, height * 0.80)
            rotate(-r)
            rect(0, 0, 30, 200)
            pop()

            push()
            stroke(a)
            noFill()
            translate(width * 0.50, height * 0.80)
            rotate(-r)
            rect(0, 0, 30, 200)
            pop()

            push()
            stroke(a)
            noFill()
            translate(width * 0.80, height * 0.80)
            rotate(-r)
            rect(0, 0, 30, 200)
            pop()
        }
        pop()
    }

    pop()
    push()
    
    //Touche J - carrés en trois lignes semblables des codes barres
    playSound(sound17, 74)
    if (sound17.isPlaying() == true) {
        var r = map(sound17.currentTime(), 0, sound17.duration(), 0, width)

        rectMode(CENTER)
        strokeWeight(3)

        stroke(b)
        noFill()
        rect(width * 0.25, random(0, height), 100, 100) //gauche
        rect(width * 0.25, random(0, height), 100, 100)
        rect(width * 0.25, random(0, height), 100, 100)
        rect(width * 0.25, random(0, height), 100, 100)
        rect(width * 0.25, random(0, height), 100, 100)
        rect(width * 0.25, random(0, height), 100, 100)
        rect(width * 0.25, random(0, height), 100, 100)
        rect(width * 0.25, random(0, height), 100, 100)
        rect(width * 0.25, random(0, height), 100, 100)
        rect(width * 0.25, random(0, height), 100, 100)


        stroke(a)
        noFill()
        rect(width * 0.5, random(0, height), 100, 100) //centre
        rect(width * 0.5, random(0, height), 100, 100)
        rect(width * 0.5, random(0, height), 100, 100)
        rect(width * 0.5, random(0, height), 100, 100)
        rect(width * 0.5, random(0, height), 100, 100)
        rect(width * 0.5, random(0, height), 100, 100)
        rect(width * 0.5, random(0, height), 100, 100)
        rect(width * 0.5, random(0, height), 100, 100)
        rect(width * 0.5, random(0, height), 100, 100)
        rect(width * 0.5, random(0, height), 100, 100)

        stroke(b)
        noFill()
        rect(width * 0.75, random(0, height), 100, 100) //droite
        rect(width * 0.75, random(0, height), 100, 100)
        rect(width * 0.75, random(0, height), 100, 100)
        rect(width * 0.75, random(0, height), 100, 100)
        rect(width * 0.75, random(0, height), 100, 100)
        rect(width * 0.75, random(0, height), 100, 100)
        rect(width * 0.75, random(0, height), 100, 100)
        rect(width * 0.75, random(0, height), 100, 100)
        rect(width * 0.75, random(0, height), 100, 100)
        rect(width * 0.75, random(0, height), 100, 100)



    }

    pop()
    push()

    //Touche K - carrés aléaoires dans les 4 coins
    playSound(sound18, 75)
    if (sound18.isPlaying() == true) {
        var r = map(sound18.currentTime(), 0, sound18.duration(), 0, width)

        rectMode(CENTER)
        strokeWeight(5)

        translate(width * 0.5, height * 0.5)
        stroke(a)
        noFill()
        rect(random(100, width), random(100, height), 100, 100) //bas droit
        rect(random(100, width), random(100, height), 100, 100)
        rect(random(100, width), random(100, height), 100, 100)
        rect(random(100, width), random(100, height), 100, 100)
        rect(random(-width, -100), random(-height, -100), 100, 100) //haut gauche
        rect(random(-width, -100), random(-height, -100), 100, 100)
        rect(random(-width, -100), random(-height, -100), 100, 100)
        rect(random(-width, -100), random(-height, -100), 100, 100)
        noStroke()
        fill(a)
        rect(random(-width, -100), random(100, height), 100, 100)  //bas gauche
        rect(random(-width, -100), random(100, height), 100, 100)
        rect(random(-width, -100), random(100, height), 100, 100)
        rect(random(-width, -100), random(100, height), 100, 100)
        rect(random(100, width), random(-height, -100), 100, 100)  //haut droit
        rect(random(100, width), random(-height, -100), 100, 100)
        rect(random(100, width), random(-height, -100), 100, 100)
        rect(random(100, width), random(-height, -100), 100, 100)
    }

    pop()
    push()

    //Touche L - cercles vides qui se délacent
    playSound(sound19, 76)
    if (sound19.isPlaying() == true) {
        push()
        var t = map(sound19.currentTime(), 0, sound19.duration() * 0.75, 0, 1)
        t = constrain(t, 0, 1)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            stroke(a)
            noFill()
            ellipse(x, y, 50, 50) //part du haut 
        }

        for (var i = 0; i < 50; i++) {
            var x = (lerp(xpos[i], xtarget[i], t))
            var y = (lerp(ypos[i], ytarget[i], t))
            stroke(b)
            noFill()
            ellipse(x, -y, 50, 50) //part du bas
        }
        pop()
    }

    pop()
    push()

    //Touche M - 4 x lignes qui partent du centre
    playSound(sound20, 77)
    if (sound20.isPlaying() == true) {
        push()
        translate(width * 0.5, height * 0.5)
        var nsegment = 24
        var ncurrentsegment = (map(sound20.currentTime(), 0, sound20.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(a);
            strokeWeight(2)
            var angle = map(i, 0, nsegment, 0, PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            push()
            rotate(0)  //angle 1/4
            line(0, 0, x, y);
            pop()

            push()
            rotate(PI / 2)  //angle 2/4
            line(0, 0, x, y);
            pop()

            push()
            rotate(PI)  //angle 3/4
            line(0, 0, x, y);
            pop()

            push()
            rotate(PI * 3 / 2) //angle 4/4
            line(0, 0, x, y);
            pop()

        }
        pop()
    }

    pop()
    push()

    //Touche W - 6 lignes de couleurs différentes
    playSound(sound21, 87)
    if (sound21.isPlaying() == true) {
        var r = map(sound21.currentTime(), 0, sound21.duration(), 0, width)
        push()
        translate(width * 0.5, height * 0.5)
        var nsegment = 60
        var ncurrentsegment = (map(sound21.currentTime(), 0, sound21.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(a);
            strokeWeight(2)
            var angle = map(i, 0, nsegment, 0, PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);

            push()
            stroke(a);
            rotate(PI / 3) //angle 1/6
            line(0, 0, x, y);
            pop()

            push()
            stroke(b);
            rotate(PI / 4) //angle 2/6
            line(0, 0, x, y);
            pop()

            push()
            stroke(c);
            rotate(PI / 6) //angle 3/6
            line(0, 0, x, y);
            pop()


            push()
            stroke(c);
            rotate((-5 * PI) / 6) //angle 4/6 
            line(0, 0, x, y);
            pop()

            push()
            stroke(b);
            rotate((-3 * PI) / 4) //angle 5/6
            line(0, 0, x, y);
            pop()

            push()
            stroke(a);
            rotate((-2 * PI) / 3) //angle 6/6
            line(0, 0, x, y);
            pop()
        }
        pop()
    }

    pop()
    push()

    //Touche X - 4 x 2 carrés qui clignotent
    playSound(sound22, 88)
    if (sound22.isPlaying() == true) {
        var r = map(sound22.currentTime(), 0, sound22.duration(), 0, TWO_PI)
        var t = map(sound22.currentTime(), 0, sound22.duration(), 0, 4)

        push()
        if (int(t) % 2 == 0) { //si t est pair
            noStroke()
            fill(a)
        } else {
            noFill()
            stroke(a)
        }


        push()
        translate(width * 0.375, height * 0.25) //haut gauche
        rotate(r)
        rect(0, 0, 100, 100)
        rotate(PI)
        rect(0, 0, 100, 100)
        pop()

        push()
        translate(width * 0.375, height * 0.75) //bas gauche
        rotate(r)
        rect(0, 0, 100, 100)
        rotate(PI)
        rect(0, 0, 100, 100)
        pop()

        push()
        translate(width * 0.625, height * 0.25) //haut droit
        rotate(r)
        rect(0, 0, 100, 100)
        rotate(PI)
        rect(0, 0, 100, 100)
        pop()

        push()
        translate(width * 0.625, height * 0.75) //bas droit
        rotate(r)
        rect(0, 0, 100, 100)
        rotate(PI)
        rect(0, 0, 100, 100)
        pop()

        pop()
    }

    pop()
    push()

    //Touche C - cercles étoiles
    playSound(sound23, 67)
    if (sound23.isPlaying() == true) { //condition si le son et la lettre sont actives
        var r = map(sound23.currentTime(), 0, sound23.duration(), 0, TWO_PI)
        
        push();
        stroke(a)
        noFill()
        translate(width * 0.5, height * 0.5);
        rotate(r);
        star(0, 0, 280, 300, 30); //rayon qui change en fonction des différents "cercles"
        pop();

        push();
        stroke(b)
        noFill()
        translate(width * 0.5, height * 0.5);
        rotate(r);
        star(0, 0, 230, 250, 30);
        pop();

        push();
        stroke(a)
        noFill()
        translate(width * 0.5, height * 0.5);
        rotate(r);
        star(0, 0, 180, 200, 30);
        pop();

        push();
        stroke(b)
        noFill()
        translate(width * 0.5, height * 0.5);
        rotate(r);
        star(0, 0, 130, 150, 30);
        pop();

        push();
        stroke(a)
        noFill()
        translate(width * 0.5, height * 0.5);
        rotate(r);
        star(0, 0, 80, 100, 30);
        pop();
    }

    pop()
    push()

    //Touche V - 2 barres qui tournent aux extrémités
    playSound(sound24, 86)
    if (sound24.isPlaying() == true) { //condition si le son et la lettre sont actives
        var r = map(sound24.currentTime(), 0, sound24.duration(), 0, TWO_PI)
        push()
        stroke(a)
        noFill()
        translate(0, height * 0.5)
        rotate(r) //rotation sens +
        rect(0, 0, 20, width)
        pop()

        push()
        stroke(a)
        noFill()
        translate(width, height * 0.5)
        rotate(-r) //rotation sens -
        rect(0, 0, 20, width)
        pop()
    }

    pop()
    push()

    //Touche B - défilement de carrés
    playSound(sound25, 66)
    if (sound25.isPlaying() == true) { //condition si le son et la lettre sont actives
        var t = map(sound25.currentTime(), 0, sound25.duration() * 0.75, 0, 1)

        rectMode(CENTER)
        push()
        fill(b)
        noStroke()
        if (t>0) {
            rect(width*0.1, height*0.25, width*0.1, width*0.1)  //barre du haut
            rect(width*0.1, height*0.75, width*0.1, width*0.1)  //barre du bas
        }
        if (t>0.05) {
            rect(width*0.15, height*0.25, width*0.1, width*0.1)
            rect(width*0.15, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.1) {
            rect(width*0.2, height*0.25, width*0.1, width*0.1)
            rect(width*0.2, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.15) {
            rect(width*0.25, height*0.25, width*0.1, width*0.1)
            rect(width*0.25, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.2) {
            rect(width*0.3, height*0.25, width*0.1, width*0.1)
            rect(width*0.3, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.25) {
            rect(width*0.35, height*0.25, width*0.1, width*0.1)
            rect(width*0.35, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.3) {
            rect(width*0.4, height*0.25, width*0.1, width*0.1)
            rect(width*0.4, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.35) {
            rect(width*0.45, height*0.25, width*0.1, width*0.1)
            rect(width*0.45, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.4) {
            rect(width*0.5, height*0.25, width*0.1, width*0.1)
            rect(width*0.5, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.45) {
            rect(width*0.55, height*0.25, width*0.1, width*0.1)
            rect(width*0.55, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.5) {
            rect(width*0.6, height*0.25, width*0.1, width*0.1)
            rect(width*0.6, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.55) {
            rect(width*0.65, height*0.25, width*0.1, width*0.1)
            rect(width*0.65, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.6) {
            rect(width*0.7, height*0.25, width*0.1, width*0.1)
            rect(width*0.7, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.65) {
            rect(width*0.75, height*0.25, width*0.1, width*0.1)
            rect(width*0.75, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.7) {
            rect(width*0.8, height*0.25, width*0.1, width*0.1)
            rect(width*0.8, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.75) {
            rect(width*0.85, height*0.25, width*0.1, width*0.1)
            rect(width*0.85, height*0.75, width*0.1, width*0.1)
        }
        if (t>0.8) {
            rect(width*0.9, height*0.25, width*0.1, width*0.1)
            rect(width*0.9, height*0.75, width*0.1, width*0.1)
        }

        push()
        fill(a)
        noStroke()
        if (t>0) {
            rect(width*0.9, height*0.5, width*0.1, width*0.1) //barre du milieu
        }
        if (t>0.05) {
            rect(width*0.85, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.1) {
            rect(width*0.8, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.15) {
            rect(width*0.75, height*0.5, width*0.1, width*0.1)
        }
       if (t>0.2) {
            rect(width*0.7, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.25) {
            rect(width*0.65, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.3) {
            rect(width*0.6, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.35) {
            rect(width*0.55, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.4) {
            rect(width*0.5, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.45) {
            rect(width*0.45, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.5) {
            rect(width*0.4, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.55) {
            rect(width*0.35, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.6) {
            rect(width*0.3, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.65) {
            rect(width*0.25, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.7) {
            rect(width*0.2, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.75) {
            rect(width*0.15, height*0.5, width*0.1, width*0.1)
        }
        if (t>0.8) {
            rect(width*0.1, height*0.5, width*0.1, width*0.1)
        }

    }
    
    pop()
    push()

    //Touche N - petits carrés qui apparaissent
     playSound(sound26, 78)
     if (sound26.isPlaying() == true) {
         var t = map(sound26.currentTime(), 0, sound26.duration() * 0.75, 0, 1)

         rectMode(CENTER)
        
        if (t>0) {
            noStroke()
            fill(a)
            rect(width*0.1,height*0.05, 20, 20) //carrés qui partent du haut
            rect(width*0.2,height*0.05, 20, 20)
            rect(width*0.3,height*0.05, 20, 20)
            rect(width*0.4,height*0.05, 20, 20)
            rect(width*0.5,height*0.05, 20, 20)
            rect(width*0.6,height*0.05, 20, 20)
            rect(width*0.7,height*0.05, 20, 20)
            rect(width*0.8,height*0.05, 20, 20)
            rect(width*0.9,height*0.05, 20, 20)
            rect(width*0.1,height*0.95, 20, 20) //carrés qui partent du bas
            rect(width*0.2,height*0.95, 20, 20)
            rect(width*0.3,height*0.95, 20, 20)
            rect(width*0.4,height*0.95, 20, 20)
            rect(width*0.5,height*0.95, 20, 20)
            rect(width*0.6,height*0.95, 20, 20)
            rect(width*0.7,height*0.95, 20, 20)
            rect(width*0.8,height*0.95, 20, 20)
            rect(width*0.9,height*0.95, 20, 20)
        }

        if (t>0.1) {
            noStroke()
            fill(c)
            rect(width*0.1,height*0.1, 20, 20) //2ème ligne de carrés qui partent du haut
            rect(width*0.2,height*0.1, 20, 20)
            rect(width*0.3,height*0.1, 20, 20)
            rect(width*0.4,height*0.1, 20, 20)
            rect(width*0.5,height*0.1, 20, 20)
            rect(width*0.6,height*0.1, 20, 20)
            rect(width*0.7,height*0.1, 20, 20)
            rect(width*0.8,height*0.1, 20, 20)
            rect(width*0.9,height*0.1, 20, 20)
            rect(width*0.1,height*0.9, 20, 20) //2ème ligne de carrés qui partent du bas
            rect(width*0.2,height*0.9, 20, 20)
            rect(width*0.3,height*0.9, 20, 20)
            rect(width*0.4,height*0.9, 20, 20)
            rect(width*0.5,height*0.9, 20, 20)
            rect(width*0.6,height*0.9, 20, 20)
            rect(width*0.7,height*0.9, 20, 20)
            rect(width*0.8,height*0.9, 20, 20)
            rect(width*0.9,height*0.9, 20, 20)
        }

        if (t>0.2) {
            noStroke()
            fill(a)
            rect(width*0.1,height*0.15, 20, 20) //3ème
            rect(width*0.2,height*0.15, 20, 20)
            rect(width*0.3,height*0.15, 20, 20)
            rect(width*0.4,height*0.15, 20, 20)
            rect(width*0.5,height*0.15, 20, 20)
            rect(width*0.6,height*0.15, 20, 20)
            rect(width*0.7,height*0.15, 20, 20)
            rect(width*0.8,height*0.15, 20, 20)
            rect(width*0.9,height*0.15, 20, 20)
            rect(width*0.1,height*0.85, 20, 20)
            rect(width*0.2,height*0.85, 20, 20)
            rect(width*0.3,height*0.85, 20, 20)
            rect(width*0.4,height*0.85, 20, 20)
            rect(width*0.5,height*0.85, 20, 20)
            rect(width*0.6,height*0.85, 20, 20)
            rect(width*0.7,height*0.85, 20, 20)
            rect(width*0.8,height*0.85, 20, 20)
            rect(width*0.9,height*0.85, 20, 20)
        }
        if (t>0.3) {
            noStroke()
            fill(c)
            rect(width*0.1,height*0.2, 20, 20) //4ème
            rect(width*0.2,height*0.2, 20, 20)
            rect(width*0.3,height*0.2, 20, 20)
            rect(width*0.4,height*0.2, 20, 20)
            rect(width*0.5,height*0.2, 20, 20)
            rect(width*0.6,height*0.2, 20, 20)
            rect(width*0.7,height*0.2, 20, 20)
            rect(width*0.8,height*0.2, 20, 20)
            rect(width*0.9,height*0.2, 20, 20)
            rect(width*0.1,height*0.8, 20, 20)
            rect(width*0.2,height*0.8, 20, 20)
            rect(width*0.3,height*0.8, 20, 20)
            rect(width*0.4,height*0.8, 20, 20)
            rect(width*0.5,height*0.8, 20, 20)
            rect(width*0.6,height*0.8, 20, 20)
            rect(width*0.7,height*0.8, 20, 20)
            rect(width*0.8,height*0.8, 20, 20)
            rect(width*0.9,height*0.8, 20, 20)
        }

        if (t>0.4) {
            noStroke()
            fill(a)
            rect(width*0.1,height*0.25, 20, 20)
            rect(width*0.2,height*0.25, 20, 20)
            rect(width*0.3,height*0.25, 20, 20)
            rect(width*0.4,height*0.25, 20, 20)
            rect(width*0.5,height*0.25, 20, 20)
            rect(width*0.6,height*0.25, 20, 20)
            rect(width*0.7,height*0.25, 20, 20)
            rect(width*0.8,height*0.25, 20, 20)
            rect(width*0.9,height*0.25, 20, 20)
            rect(width*0.1,height*0.75, 20, 20)
            rect(width*0.2,height*0.75, 20, 20)
            rect(width*0.3,height*0.75, 20, 20)
            rect(width*0.4,height*0.75, 20, 20)
            rect(width*0.5,height*0.75, 20, 20)
            rect(width*0.6,height*0.75, 20, 20)
            rect(width*0.7,height*0.75, 20, 20)
            rect(width*0.8,height*0.75, 20, 20)
            rect(width*0.9,height*0.75, 20, 20)
        }
        if (t>0.5) {
            noStroke()
            fill(c)
            rect(width*0.1,height*0.3, 20, 20)
            rect(width*0.2,height*0.3, 20, 20)
            rect(width*0.3,height*0.3, 20, 20)
            rect(width*0.4,height*0.3, 20, 20)
            rect(width*0.5,height*0.3, 20, 20)
            rect(width*0.6,height*0.3, 20, 20)
            rect(width*0.7,height*0.3, 20, 20)
            rect(width*0.8,height*0.3, 20, 20)
            rect(width*0.9,height*0.3, 20, 20)
            rect(width*0.1,height*0.7, 20, 20)
            rect(width*0.2,height*0.7, 20, 20)
            rect(width*0.3,height*0.7, 20, 20)
            rect(width*0.4,height*0.7, 20, 20)
            rect(width*0.5,height*0.7, 20, 20)
            rect(width*0.6,height*0.7, 20, 20)
            rect(width*0.7,height*0.7, 20, 20)
            rect(width*0.8,height*0.7, 20, 20)
            rect(width*0.9,height*0.7, 20, 20)
        }

        if (t>0.6) {
            noStroke()
            fill(a)
            rect(width*0.1,height*0.35, 20, 20)
            rect(width*0.2,height*0.35, 20, 20)
            rect(width*0.3,height*0.35, 20, 20)
            rect(width*0.4,height*0.35, 20, 20)
            rect(width*0.5,height*0.35, 20, 20)
            rect(width*0.6,height*0.35, 20, 20)
            rect(width*0.7,height*0.35, 20, 20)
            rect(width*0.8,height*0.35, 20, 20)
            rect(width*0.9,height*0.35, 20, 20)
            rect(width*0.1,height*0.65, 20, 20)
            rect(width*0.2,height*0.65, 20, 20)
            rect(width*0.3,height*0.65, 20, 20)
            rect(width*0.4,height*0.65, 20, 20)
            rect(width*0.5,height*0.65, 20, 20)
            rect(width*0.6,height*0.65, 20, 20)
            rect(width*0.7,height*0.65, 20, 20)
            rect(width*0.8,height*0.65, 20, 20)
            rect(width*0.9,height*0.65, 20, 20)
        }

        if (t>0.7) {
            noStroke()
            fill(c)
            rect(width*0.1,height*0.4, 20, 20)
            rect(width*0.2,height*0.4, 20, 20)
            rect(width*0.3,height*0.4, 20, 20)
            rect(width*0.4,height*0.4, 20, 20)
            rect(width*0.5,height*0.4, 20, 20)
            rect(width*0.6,height*0.4, 20, 20)
            rect(width*0.7,height*0.4, 20, 20)
            rect(width*0.8,height*0.4, 20, 20)
            rect(width*0.9,height*0.4, 20, 20)
            rect(width*0.1,height*0.6, 20, 20)
            rect(width*0.2,height*0.6, 20, 20)
            rect(width*0.3,height*0.6, 20, 20)
            rect(width*0.4,height*0.6, 20, 20)
            rect(width*0.5,height*0.6, 20, 20)
            rect(width*0.6,height*0.6, 20, 20)
            rect(width*0.7,height*0.6, 20, 20)
            rect(width*0.8,height*0.6, 20, 20)
            rect(width*0.9,height*0.6, 20, 20)
        }

        if (t>0.8) {
            noStroke()
            fill(a)
            rect(width*0.1,height*0.45, 20, 20)
            rect(width*0.2,height*0.45, 20, 20)
            rect(width*0.3,height*0.45, 20, 20)
            rect(width*0.4,height*0.45, 20, 20)
            rect(width*0.5,height*0.45, 20, 20)
            rect(width*0.6,height*0.45, 20, 20)
            rect(width*0.7,height*0.45, 20, 20)
            rect(width*0.8,height*0.45, 20, 20)
            rect(width*0.9,height*0.45, 20, 20)
            rect(width*0.1,height*0.55, 20, 20)
            rect(width*0.2,height*0.55, 20, 20)
            rect(width*0.3,height*0.55, 20, 20)
            rect(width*0.4,height*0.55, 20, 20)
            rect(width*0.5,height*0.55, 20, 20)
            rect(width*0.6,height*0.55, 20, 20)
            rect(width*0.7,height*0.55, 20, 20)
            rect(width*0.8,height*0.55, 20, 20)
            rect(width*0.9,height*0.55, 20, 20)
        }

        if (t>0.9) {
            noStroke()
            fill(c)
            rect(width*0.1,height*0.5, 20, 20)
            rect(width*0.2,height*0.5, 20, 20)
            rect(width*0.3,height*0.5, 20, 20)
            rect(width*0.4,height*0.5, 20, 20)
            rect(width*0.5,height*0.5, 20, 20)
            rect(width*0.6,height*0.5, 20, 20)
            rect(width*0.7,height*0.5, 20, 20)
            rect(width*0.8,height*0.5, 20, 20)
            rect(width*0.9,height*0.5, 20, 20)
           
        }
     }

     pop()
    

}

//pour Touche C
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

function playSound(sound, keyID) {

    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();


    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
