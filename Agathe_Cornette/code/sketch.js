let sound01;
let sound02;
let sound03;
let sound04;
let sound04FFT;
let sound05;
let sound06;
let sound06FFT;
let color1;
let color2;
let color3;
let color5;
let color6;
let color7;
let sound07;
let sound08;
let sound09;
let sound10;
let sound11;
let sound12;
let sound13;
let sound14;
let sound15;
let sound15FFT;
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


function preload() {
    sound01 = loadSound("./assets/Son 1.wav"); //
    sound02 = loadSound("./assets/Son 2.wav");
    sound03 = loadSound("./assets/Son 3.wav");
    sound04 = loadSound("./assets/Son 4.wav");
    sound05 = loadSound("./assets/Son 5.wav");
    sound06 = loadSound("./assets/Son 6.wav");
    sound07 = loadSound("./assets/Son 7.wav");
    sound08 = loadSound("./assets/Son 8.wav");
    sound09 = loadSound("./assets/Son 9.wav");
    sound10 = loadSound("./assets/Son 10.wav");
    sound11 = loadSound("./assets/Son 11.wav");
    sound12 = loadSound("./assets/Son 12.wav");
    sound13 = loadSound("./assets/Son 13.wav");
    sound14 = loadSound("./assets/Son 14.wav");
    sound15 = loadSound("./assets/Son 15.wav");
    sound16 = loadSound("./assets/Son 16.wav");
    sound17 = loadSound("./assets/Son 17.wav");
    sound18 = loadSound("./assets/Son 18.wav");
    sound19 = loadSound("./assets/Son 19.wav");
    sound20 = loadSound("./assets/Son 20.wav");
    sound21 = loadSound("./assets/Son 21.wav");
    sound22 = loadSound("./assets/Son 22.wav");
    sound23 = loadSound("./assets/Son 23.wav");
    sound24 = loadSound("./assets/Son 24.wav");
    sound25 = loadSound("./assets/Son 25.wav");
    sound26 = loadSound("./assets/Son 26.wav");


}



function setup() {
    createCanvas(windowWidth, windowHeight)


    sound04FFT = new p5.FFT()
    sound04FFT.setInput(sound04)

    sound06FFT = new p5.FFT()
    sound06FFT.setInput(sound06)

    sound15FFT = new p5.FFT()
    sound15FFT.setInput(sound15)

    sound20FFT = new p5.FFT()
    sound20FFT.setInput(sound20)

    color1 = color(255, 197, 180) // rose 
    color2 = color(250, 185, 11) // jaune moutarde
    color3 = color(255, 242, 233) // rose clair
    color5 = color(205, 65, 43) // orange chaud
    color6 = color(56, 88, 243) // bleu fonçé



    var xpos = []
    var ypos = []
    var xtarget = []
    var ytarget = [];




    for (var i = 0; i < 50; i++) {
        // ajouter des éléments au dessus de notre canvas
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarget.push(random(width))
        ytarget.push(random(height))

        lerp(12, 48, 0) // va renvoyer 12
        lerp(12, 48, 1) // va renvoyer 48
        lerp(12, 48, 0.5) // va renvoyer la valeur au milieu de l'intervalle [12, 48] soit 30
        // etc.
    }


}


function draw() {
    background(color3);


    // touche A
    playSound(sound01, 65)
    if (sound01.isPlaying() == true) {
        //background(color2)
        let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)
        rectMode(CENTER)
        noFill()
        stroke(color5)

        push()
        fill(color5)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, r, r)
        pop()
        push()
        translate(width * 0.25, height * 0.25)
        rect(0, 0, r, r)
        pop()
        push()
        translate(width * 0.75, height * 0.75)
        rect(0, 0, r, r)
        pop()

    }


    // touche Z
    playSound(sound02, 90)
    if (sound02.isPlaying() == true) {
        push()
        //background(color2)
        let r = map(sound02.currentTime(), 0, sound02.duration(), 0, width)


        fill(color1)
        noStroke()
        ellipse(width * 0.5, height * 0.5, r, r)
        pop()

    }



    // touche E
    playSound(sound03, 69)
    if (sound03.isPlaying() == true) {
        push()
        // background(color2)
        noStroke()
        let r = map(sound03.currentTime(),
            0, sound03.duration() * 0.33,
            0, height * 0.5)
        r = constrain(r, 0, height * 0.5)

        let c = map(sound03.currentTime(),
            sound03.duration() * 0.33, sound03.duration(),
            0, height * 0.5
        )

        c = constrain(c, 0, height * 0.5)


        rectMode(CENTER)
        fill(color6)
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
        pop()
    }

    //touche R
    playSound(sound04, 82);
    if (sound04.isPlaying() == true) {
        //background(color2)
        let wave = sound04FFT.waveform()
        fill(color6)
        strokeWeight(15)
        noStroke()
        let r = map(sound04.currentTime(),
            0, sound04.duration() * 0.33,
            0, height * 0.5)
        r = constrain(r, 0, height * 0.5)

        let c = map(sound04.currentTime(),
            sound04.duration() * 0.33, sound04.duration(),
            0, height * 0.5
        )

        c = constrain(c, 0, height * 0.5)


        push()
        rectMode(CENTER)
        noFill()
        strokeWeight(3)
        stroke(color2)
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
        stroke(color6)
        rect(width * 0.75, height * 0.75, r, r, c, c, c, c)
        stroke(color5)
        rect(width * 0.25, height * 0.25, r, r, c, c, c, c)

        pop()

        push()
        console.log(wave)
        beginShape(5) // forme pleine
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)

            wave[i]
            curveVertex(x, y) //forme une courbe qui rellie tout le monde

        }
        endShape() //fermer
        pop()

    }

    // touche T
    playSound(sound07, 84);
    if (sound07.isPlaying() == true) {
        push()
        var rotation = map(sound07.currentTime(), 0, sound07.duration(), 0, PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        noStroke()
        fill(color6)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()
    }

    // touche Y
    playSound(sound05, 89);
    if (sound05.isPlaying() == true) {
        //background(color2) //sinon on ne oeut pas voir l'integralité des formes 
        push()
        let angle = map(sound05.currentTime(),
            0, sound05.duration(),
            1, TWO_PI)
        rectMode(CENTER) // je peux aussi utiliser fonction CORNER pour le rectangle soit dans un coin, ou encore fonction RADIUS
        translate(width * 0.5, height * 0.5)
        rotate(angle)

        noFill()
        stroke(color6)
        strokeWeight(3)
        rect(0, 0, height * 0.5, height * 0.5) // grosseur de la forme 
        rect(0, 0, height * 0.6, height * 0.6)
        rect(0, 0, height * 0.7, height * 0.7)
        fill(color6)
        rect(0, 0, height * 0.5, height * 0.5)
        pop()

        push() // rectangle jaune
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        fill(color2)
        noStroke()
        rect(0, 0, height * 0.3, height * 0.3)
        pop()

        push() // rectangle de gauche 
        translate(width * 0.2, width * 0.2)
        rotate(angle)
        fill(color5)
        noStroke()
        rect(0, 0, height * 0.4, height * 0.4)
        pop()

        push() // rectangle de droite 
        translate(width * 0.8, width * 0.2)
        rotate(angle)
        fill(color5)
        noStroke()
        rect(0, 0, height * 0.4, height * 0.4)
        pop()



    }


    // touche U
    playSound(sound06, 85);
    if (sound06.isPlaying() == true) {
        push()
        //background(color2)
        let wave = sound06FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1, 1, 0, height)

            let x = width * 0.8 + rad * cos(angle)
            let y = height * 0.8 + rad * sin(angle)


            noStroke()
            fill(color5)
            ellipse(x, y, 5, 5)

            push()
            translate(-width * 0.75, -height * 0.65)
            ellipse(x, y, 2, 5)
            pop()

            //curveVertex(x,y)


        }

        endShape()
        pop()


    }

    //touche I
    playSound(sound08, 73)
    if (sound08.isPlaying() == true) {
        //background(color2)
        push()
        var nsegment = 30 // vitesse de rotation
        var ncurrentsegment = (map(sound08.currentTime(), 0, sound08.duration(), 0, nsegment + 1))

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(color5); // pour les lignes
            strokeWeight(2)
            var angle = map(i, 3, nsegment, -17, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            noStroke() // pour les ellipses
            fill(color6)
            ellipse(x, y, 30, 30)

        }
        pop()
    }


    //touche O 
    playSound(sound09, 79)
    if (sound09.isPlaying() == true) {
        push()
        var circle = 200;
        var rot
        var col
        var freq = 0.000005; // moins il y a de 0, plus c rapide, et vice versa
        var cont = 0;
        var r;
        var circle = (map(sound09.currentTime(), 0, sound09.duration(), 0))
        translate(width * 0.5, height * 0.5)
        ellipseMode(RADIUS); // si j'enlève la fonction radius.. alors les ellipses sont moins grasses
        for (var i = 0; i < 500; i++) { // si j'enelève un 0 de 500, alors le cercle est moin rempli.. vice versa // ajouter 0 à 200 pour effets lents
            circle = 200 + 50 * sin(millis() * freq * i); //changer les valeurs => jeux d'ellipses. 
            col = map(circle, 150, 250, 255, 60);
            r = map(circle, 150, 250, 5, 2); // si j'augmente les deux dernières valeurs => cercle très épais
            fill(color2);
            noStroke();
            ellipse(circle * cos(i), circle * sin(i), r, r);
            rot = rot + 0.00005;
        }
        pop()
    }


    //touche P
    playSound(sound10, 80)
    if (sound10.isPlaying() == true) {
        push()
        var xpos = []
        var ypos = []
        var xtarget = []
        var ytarget = []

        for (var i = 0; i < 50; i++) {
            // ajouter des éléments au dessus de notre canvas
            xpos.push(random(0, width))
            ypos.push(random(0, -height))
            // ajouter des éléments à l'intérieur de notra canvas
            xtarget.push(random(width))
            ytarget.push(random(height))

            lerp(12, 48, 0) // va renvoyer 12
            lerp(12, 48, 1) // va renvoyer 48
            lerp(12, 48, 0.5) // va renvoyer la valeur au milieu de l'intervalle [12, 48] soit 30
            // etc.
        }

        var t = map(sound10.currentTime(), 0, sound10.duration() * 0.5, 0, 1)
        var grey = map(sound10.currentTime(), sound10.duration() * 0.5, sound10.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        noStroke()
        fill(color5)
        for (var i = 0; i < 70; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }


    // touche Q
    playSound(sound11, 81)
    if (sound11.isPlaying() == true) {
        //background(color2)
        push()

        var nsegment = 60 // vitesse de rotation
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), 0, nsegment + 1))

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(color5); // pour les lignes
            strokeWeight(2)
            var angle = map(i, 0, nsegment, -1, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            //noStroke() // pour les ellipses
            //fill(color6)
            //ellipse(x, y, 30, 30)

        }
        pop()

        push()
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(color6);
            strokeWeight(2)
            var angle = map(i, 0, nsegment, -1, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle); // si je modifie les valeurs ça donne des formes chouettes
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.75, height * 0.75, x, y);


        }
        pop()

        push()
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(color6);
            strokeWeight(2)
            var angle = map(i, 0, nsegment, -1, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle); // si je modifie les valeurs ça donne des formes chouettes
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.25, height * 0.25, x, y);


        }
        pop()

    }

    //touche S
    playSound(sound12, 83)
    if (sound12.isPlaying() == true) {
        push()
        var circle = 200;
        var rot
        var col
        var freq = 0.000005; // moins il y a de 0, plus c rapide, et vice versa
        var cont = 0;
        var r;
        var circle = (map(sound12.currentTime(), 0, sound12.duration(), 0))
        translate(width * 0.3, height * 0.3)
        ellipseMode(); // si j'enlève la fonction radius.. alors les ellipses sont moins grasses
        for (var i = 0; i < 500; i++) { // si j'enelève un 0 de 500, alors le cercle est moin rempli.. vice versa // ajouter 0 à 200 pour effets lents
            circle = 200 + 50 * sin(millis() * freq * i); //changer les valeurs => jeux d'ellipses. 
            col = map(circle, 150, 250, 255, 60);
            r = map(circle, 150, 250, 5, 2); // si j'augmente les deux dernières valeurs => cercle très épais
            fill(color5);
            noStroke();
            ellipse(circle * cos(i), circle * sin(i), r, r);
            rot = rot + 0.00005;
        }
        pop()

    }

    //touche S bis 
    playSound(sound12, 83)
    if (sound12.isPlaying() == true) {
        push()
        var circle = 200;
        var rot
        var col
        var freq = 0.000005; // moins il y a de 0, plus c rapide, et vice versa
        var cont = 0;
        var r;
        var circle = (map(sound12.currentTime(), 0, sound12.duration(), 0))
        translate(width * 0.7, height * 0.7)
        ellipseMode(); // si j'enlève la fonction radius.. alors les ellipses sont moins grasses
        for (var i = 0; i < 500; i++) { // si j'enlève un 0 de 500, alors le cercle est moin rempli.. vice versa // ajouter 0 à 200 pour effets lents
            circle = 200 + 50 * sin(millis() * freq * i); //changer les valeurs => jeux d'ellipses. 
            col = map(circle, 150, 250, 255, 60);
            r = map(circle, 150, 250, 5, 2); // si j'augmente les deux dernières valeurs => cercle très épais
            fill(color6);
            noStroke();
            ellipse(circle * cos(i), circle * sin(i), r, r);
            rot = rot + 0.00005;
        }
        pop()


    }

    //touche D
    playSound(sound13, 68);
    if (sound13.isPlaying() == true) {
        push()
        var rotation = map(sound13.currentTime(), 0, sound13.duration(), 0, PI)

        rectMode(RADIUS) // je peux changer pour que la forme bouge à partir de son coin et non à partir du centre 
        translate(width * 0.4, height * 0.4)
        rotate(rotation)

        noStroke()
        fill(color1)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()


        push()
        var rotation = map(sound13.currentTime(), 0, sound13.duration(), 0, PI)

        rectMode(RADIUS)
        translate(width * 0.1, height * 0.1)
        rotate(rotation)

        noStroke()
        fill(color6)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()


        push()
        var rotation = map(sound13.currentTime(), 0, sound13.duration(), 0, PI)

        rectMode(RADIUS)
        translate(width * 0.7, height * 0.7)
        rotate(rotation)

        noStroke()
        fill(color5)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()
    }

    //touche F
    playSound(sound14, 70)
    if (sound14.isPlaying() == true) {
        push()
        var circle = 200;
        var rot
        var col
        var freq = 0.000005; // moins il y a de 0, plus c rapide, et vice versa
        var cont = 0;
        var r;
        var circle = (map(sound14.currentTime(), 0, sound14.duration(), 0))
        translate(width * 0.2, height * 0.72)
        ellipseMode(); // si j'enlève la fonction radius.. alors les ellipses sont moins grasses
        for (var i = 0; i < 500; i++) { // si j'enlève un 0 de 500, alors le cercle est moin rempli.. vice versa // ajouter 0 à 200 pour effets lents
            circle = 100 + 20 * sin(millis() * freq * i); //changer les valeurs => jeux d'ellipses. 
            col = map(circle, 150, 250, 255, 60);
            r = map(circle, 150, 250, 5, 2); // si j'augmente les deux dernières valeurs => cercle très épais
            fill(color6);
            noStroke();
            ellipse(circle * cos(i), circle * sin(i), r, r);
            rot = rot + 0.00005;
        }
        pop()


        push()
        var circle = 200;
        var rot
        var col
        var freq = 0.000005; // moins il y a de 0, plus c rapide, et vice versa
        var cont = 0;
        var r;
        var circle = (map(sound14.currentTime(), 0, sound14.duration(), 0))
        translate(width * 0.72, height * 0.2)
        ellipseMode(); // si j'enlève la fonction radius.. alors les ellipses sont moins grasses
        for (var i = 0; i < 500; i++) { // si j'enlève un 0 de 500, alors le cercle est moin rempli.. vice versa // ajouter 0 à 200 pour effets lents
            circle = 100 + 20 * sin(millis() * freq * i); //changer les valeurs => jeux d'ellipses. 
            col = map(circle, 150, 250, 255, 60);
            r = map(circle, 150, 250, 5, 2); // si j'augmente les deux dernières valeurs => cercle très épais
            fill(color5);
            noStroke();
            ellipse(circle * cos(i), circle * sin(i), r, r);
            rot = rot + 0.00005;
        }
        pop()


    }

    //touche G
    playSound(sound15, 71);
    if (sound15.isPlaying() == true) {

        //background(color2)
        let wave = sound15FFT.waveform()
        noFill()
        strokeWeight(3)
        stroke(color6)
        let r = map(sound15.currentTime(),
            0, sound15.duration() * 0.33,
            0, height * 0.5)
        r = constrain(r, 0, height * 0.5)

        let c = map(sound15.currentTime(),
            sound15.duration() * 0.33, sound15.duration(),
            0, height * 0.5
        )

        c = constrain(c, 0, height * 0.5)

        push()
        console.log(wave)
        beginShape(5) // forme pleine
        for (let i = 10; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)

            wave[i]
            curveVertex(x, y) //forme une courbe qui rellie tout le monde

        }
        endShape() //fermer
        pop()

    }

    //touche H
    playSound(sound16, 72);
    if (sound16.isPlaying() == true) {
        push()
        var rotation = map(sound16.currentTime(), 0, sound16.duration(), 0, -PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        strokeWeight(3)
        stroke(color6)
        noFill()
        rect(0, 0, width * 0.5, width * 0.05)
        pop()


        push()
        var rotation = map(sound16.currentTime(), 0, sound16.duration(), 0, PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        noStroke()
        fill(color2)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()

    }


    //touche J
    playSound(sound17, 74);
    if (sound17.isPlaying() == true) {
        push()

        noFill();
        strokeWeight(0);
        for (var i = 0; i < 3; i++) {
            noStroke()
            fill(color6);
            beginShape(5); // intéressant de changer la valeur
            for (var w = -20; w < width + 20; w += 10) { // si je modifie la dernière valeur, l'onde devient très très epaisse, et effectue une rotation
                var h = height / 2;
                h += 300 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
                curveVertex(w, h);
            }
            endShape()
            pop()

        }
    }


    //touche K
    playSound(sound19, 75)
    if (sound19.isPlaying() == true) {
        push()
        var nsegment = 200 // vitesse
        var ncurrentsegment = (map(sound19.currentTime(), 0, sound19.duration(), 0, nsegment + 1))

        for (var i = 0; i < ncurrentsegment; i++) {
            noFill();
            stroke(color5)
            strokeWeight(5)
            var angle = map(i, 3, nsegment, 4, -TWO_PI); // si je change le premier nombre = plus c élévé et plus ça va vite. et au contraire ca devient plus lent si je diminue le deuxieme
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(width * 0.5, height * 0.5, x, y); // pour changer de place la forme


        }
        pop()

    }

    //touche L
    playSound(sound18, 76);
    if (sound18.isPlaying() == true) {
        push()

        noFill();
        strokeWeight(0);
        for (var i = 0; i < 3; i++) {
            noStroke()
            fill(color2);
            beginShape(4);
            for (var w = -20; w < width + 20; w += 70) {
                var h = height / 2;
                h += 150 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
                curveVertex(w, h);
            }
            endShape()
            pop()

        }
    }

    //touche M
    playSound(sound20, 77);
    if (sound20.isPlaying() == true) {
        push()

        let wave = sound20FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, -TWO_PI) // si je chnage les valeurs alors je peux créer une demi-cercle
            let rad = map(wave[i], -1, 1, 2, height)

            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)

            stroke(color2)
            strokeWeight(3)
            noFill()
            //fill(color5)
            ellipse(x, y, 0, 0)
            curveVertex(x, y)
        }

        endShape()
        pop()


    }

    //touche W
    playSound(sound21, 87)
    if (sound21.isPlaying() == true) {
        push()
        let r = map(sound21.currentTime(), 1, sound21.duration(), 0, width)
        fill(color6)
        noStroke()
        ellipse(width * 0.5, height * 0.5, 200, 200)
        pop()

        push()
        noFill()
        strokeWeight(2)
        stroke(color6)
        ellipse(width * 0.5, height * 0.5, r, r)
        pop()

        push()
        noFill()
        strokeWeight(2)
        stroke(color2)
        ellipse(width * 0.8, height * 0.5, r, r)
        pop()

        push()
        fill(color2)
        noStroke()
        ellipse(width * 0.8, height * 0.5, 200, 200)
        pop()

        push()
        noFill()
        strokeWeight(2)
        stroke(color5)
        ellipse(width * 0.2, height * 0.5, r, r)
        pop()

        push()
        fill(color5)
        noStroke()
        ellipse(width * 0.2, height * 0.5, 200, 200)
        pop()


    }

    // touche X
    playSound(sound22, 88)
    if (sound22.isPlaying() == true) {
        push()
        //background(color2)
        let r = map(sound22.currentTime(), 0, sound22.duration(), 0, width)
        fill(color2)
        noStroke()
        ellipse(width * 0.5, height * 0.5, r, r)
        pop()

        push()
        let m = map(sound22.currentTime(), 0, sound22.duration(), -300, width) // je change les valeurs du let
        noFill()
        stroke(color6)
        strokeWeight(2)
        ellipse(width * 0.5, height * 0.5, m, m)
        pop()

        push()
        let g = map(sound22.currentTime(), 0, sound22.duration(), -90, width)
        noFill()
        stroke(color2)
        strokeWeight(2)
        ellipse(width * 0.8, height * 0.8, g, g)
        pop()


        push()
        let t = map(sound22.currentTime(), 0, sound22.duration(), -500, width)
        noFill()
        stroke(color6)
        strokeWeight(2)
        ellipse(width * 0.8, height * 0.8, t, t)
        pop()

        push()
        let i = map(sound22.currentTime(), 0, sound22.duration(), -500, width)
        fill(color6)
        noStroke()
        ellipse(width * 0.5, height * 0.5, i, i)
        pop()

        push()
        let j = map(sound22.currentTime(), 0, sound22.duration(), -90, width)
        noFill()
        stroke(color6)
        strokeWeight(2)
        ellipse(width * 0.2, height * 0.2, j, j)
        pop()

        push()
        let f = map(sound22.currentTime(), 0, sound22.duration(), -500, width)
        noFill()
        stroke(color2)
        strokeWeight(2)
        ellipse(width * 0.2, height * 0.2, f, f)
        pop()

    }

    //touche C
    playSound(sound23, 67);
    if (sound23.isPlaying() == true) {
        push()
        let angle = map(sound23.currentTime(),
            0, sound23.duration(),
            2, TWO_PI)
        rectMode(CORNER) // je peux aussi utiliser fonction CORNER pour le rectangle soit dans un coin, ou encore fonction RADIUS
        translate(width * 0.5, height * 0.5)
        rotate(angle)


        noFill()
        stroke(color1)
        strokeWeight(3)
        rect(0, 0, height * 0.5, height * 0.5) // grosseur de la forme 
        rect(0, 0, height * 0.3, height * 0.3)
        rect(0, 0, height * 0.1, height * 0.1)

        pop()

        push()
        let angle1 = map(sound23.currentTime(),
            0, sound23.duration(),
            -2, -TWO_PI) // -TWO_PI: inverse 
        rectMode(CORNER)
        translate(width * 0.5, height * 0.5)
        rotate(angle1)


        noFill()
        stroke(color1)
        strokeWeight(3)
        rect(0, 0, height * 0.5, height * 0.5) // grosseur de la forme 
        rect(0, 0, height * 0.3, height * 0.3)
        rect(0, 0, height * 0.1, height * 0.1)

        pop()

    }

    //touche V => FLEUR
    playSound(sound24, 86);
    if (sound24.isPlaying() == true) {
        push()
        var rotation = map(sound24.currentTime(), 0, sound24.duration(), 0, PI)
        translate(width * 0.5, height * 0.5)
        fill(color6)
        noStroke()
        rotate(rotation)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 90, 60, 240)
            rotate(PI / 5)
        }

        fill(color2)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 20, 40, 80)
            rotate(PI / 5)
        }
        pop()

        push()
        translate(width * 0.8, height * 0.5)
        fill(color2)
        noStroke()
        rotate(rotation)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 20, 10, 50)
            rotate(PI / 5)
        }

        fill(color6)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 20, 40, 20)
            rotate(PI / 5)
        }
        pop()

        push()
        translate(width * 0.2, height * 0.5)
        fill(color2)
        noStroke()
        rotate(rotation)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 20, 10, 50)
            rotate(PI / 5)
        }

        fill(color6)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 20, 40, 20)
            rotate(PI / 5)
        }
        pop()

        push()
        translate(width * 0.5, height * 0.1)
        fill(color2)
        noStroke()
        rotate(rotation)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 20, 10, 50)
            rotate(PI / 5)
        }

        fill(color6)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 20, 40, 20)
            rotate(PI / 5)
        }
        pop()

        push()
        translate(width * 0.5, height * 0.9)
        fill(color2)
        noStroke()
        rotate(rotation)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 20, 10, 50)
            rotate(PI / 5)
        }

        fill(color6)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 20, 40, 20)
            rotate(PI / 5)
        }
        pop()


    }

    //touche B
    playSound(sound25, 66);
    if (sound25.isPlaying() == true) {
        push()
        var rotation = map(sound25.currentTime(), 0, sound25.duration(), 0, PI)
        translate(width * 0.5, height * 0.5)
        fill(205, 65, 43, 100)
        noStroke()
        rotate(rotation)
        arc(0, 0, 280, 280, PI, TWO_PI)
        pop()

        push()
        var rotation = map(sound25.currentTime(), 0, sound25.duration(), 0, -PI)
        translate(width * 0.5, height * 0.5)
        fill(205, 65, 43, 100) // donne de la transparence 
        noStroke()
        rotate(rotation)
        arc(0, 0, 380, 380, -PI, -TWO_PI) // tourne à l'opposé
        pop()

    }

    //touche N
    playSound(sound26, 78);
    if (sound26.isPlaying() == true) {
        push()
        var rotation = map(sound26.currentTime(), 0, sound26.duration(), 0, PI)
        translate(width * 0.5, height * 0.5)
        fill(color6)
        noStroke()
        rotate(rotation)
        rotate(4 * PI / 3) // je change l'angle de rotation 
        for (let i = 0; i < 10; i++) {
            ellipse(0, 160, 110, 420) // Si je divise ou multiplie par deux les valeurs : formes plus petites ou plus grandesw
            rotate(PI / 20) // Si je change le nombre alors cela augmente le nombre de branche...
        }

        pop()

        push()
        var rotation = map(sound26.currentTime(), 0, sound26.duration(), 0, PI)
        translate(width * 0.5, height * 0.5)
        fill(color6)
        noStroke()
        rotate(rotation)
        rotate(2 * PI / 3)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 160, 110, 420)
            rotate(PI / 20)
        }
        pop()

        push()
        var rotation = map(sound26.currentTime(), 0, sound26.duration(), 0, PI)
        translate(width * 0.5, height * 0.5)
        fill(color6)
        noStroke()
        rotate(rotation)
        rotate(0)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 160, 110, 420)
            rotate(PI / 20)
        }
        pop()

        push()
        var rotation = map(sound26.currentTime(), 0, sound26.duration(), 0, -PI)
        translate(width * 0.5, height * 0.5)
        fill(color1)
        noStroke()
        rotate(rotation)
        rotate(4 * PI / 3) // je change l'angle de rotation 
        for (let i = 0; i < 10; i++) {
            ellipse(0, 80, 50, 240)
            rotate(PI / 20)
        }

        pop()

        push()
        var rotation = map(sound26.currentTime(), 0, sound26.duration(), 0, -PI)
        translate(width * 0.5, height * 0.5)
        fill(color1)
        noStroke()
        rotate(rotation)
        rotate(2 * PI / 3)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 80, 50, 240)
            rotate(PI / 20)
        }
        pop()

        push()
        var rotation = map(sound26.currentTime(), 0, sound26.duration(), 0, -PI)
        translate(width * 0.5, height * 0.5)
        fill(color1)
        noStroke()
        rotate(rotation)
        rotate(0)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 80, 50, 240)
            rotate(PI / 20)
        }
        pop()

        push()
        var rotation = map(sound26.currentTime(), 0, sound26.duration(), 0, PI)
        translate(width * 0.5, height * 0.5)
        fill(color5)
        noStroke()
        rotate(rotation)
        rotate(4 * PI / 3) // je change l'angle de rotation 
        for (let i = 0; i < 10; i++) {
            ellipse(0, 40, 25, 120)
            rotate(PI / 20)
        }

        pop()

        push()
        var rotation = map(sound26.currentTime(), 0, sound26.duration(), 0, PI)
        translate(width * 0.5, height * 0.5)
        fill(color5)
        noStroke()
        rotate(rotation)
        rotate(2 * PI / 3)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 40, 25, 120)
            rotate(PI / 20)
        }
        pop()

        push()
        var rotation = map(sound26.currentTime(), 0, sound26.duration(), 0, PI)
        translate(width * 0.5, height * 0.5)
        fill(color5)
        noStroke()
        rotate(rotation)
        rotate(0)
        for (let i = 0; i < 10; i++) {
            ellipse(0, 40, 25, 120)
            rotate(PI / 20)
        }
        pop()



    }



}

    function playSound(sound, keyID) {
        if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
            sound.play();

        }
    }



    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);

    }

    //option shift F => permet de tout re ranger
    // command option I pour regarder les éléments dans onglet internet
