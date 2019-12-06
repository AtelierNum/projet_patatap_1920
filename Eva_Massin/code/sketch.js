//A
let F1
//Z
let F2
//E
let F3
//R
let F4
//T
let F5
let xpos2=[]
let ypos2=[]
let xtarget2=[]
let ytarget2=[]
//Y
let F6
//U 
let F7
//I
let F8
let hu = 130;
//O
let F9
//P
let F10
//Q
let F11
//S
let F12
//D
let F13
//F
let F14
let totalPts = 300;
let steps = totalPts + 1;
//G
let F15
//H
let F16
//J
let F17
//K
let F18
let xpos1 = []
let ypos1 = []
let xtarget = []
let ytarget = []
let nellipse = 50
//L
let F19
//M
let F20
//W
let F21
//X
let F22
//C
let F23
//V
let F24
//B
let F25
//N
let F26
    F26xpos = [],
    F26ypos = [],
    F26xtarget = [],
    F26ytarget = [];
var F26V2xpos = [],
    F26V2ypos = [],
    F26V2xtarget = [],
    F26V2ytarget = [];


    //CHARGEMENT DES SONS

function preload() {

    F1 = loadSound('Assets/A6.wav');
    F2 = loadSound('Assets/A00.wav');
    F3 = loadSound('Assets/A90.wav');
    F4 = loadSound('Assets/A1007.wav');
    F5 = loadSound('Assets/A54.wav');
    F6 = loadSound('Assets/A64.wav');
    F7 = loadSound('Assets/A66.wav');
    F8 = loadSound('Assets/A51.wav');
    F9 = loadSound('Assets/A23.wav');
    F10 = loadSound('Assets/A48.wav');
    F11 = loadSound('Assets/A68.wav');
    F12 = loadSound('Assets/A24.wav');
    F13 = loadSound('Assets/A19.wav');
    F14 = loadSound('Assets/A12.wav');
    F15 = loadSound('Assets/A39.wav');
    F16 = loadSound('Assets/A1009.wav');
    F17 = loadSound('Assets/A93.wav');
    F18 = loadSound('Assets/A59.wav');
    F19 = loadSound('Assets/F19.wav');
    F20 = loadSound('Assets/A89.wav');
    F21 = loadSound('Assets/A91.wav');
    F22 = loadSound('Assets/A57.wav');
    F23 = loadSound('Assets/F45aigle.wav');
    F24 = loadSound('Assets/A69.wav');
    F25 = loadSound('Assets/A56.wav');
    F26 = loadSound('Assets/A55.wav');




}



function setup() {

    //dimensions de la fenêtre du navigateur
    createCanvas(windowWidth, windowHeight)

    //niveau du son
    F1.setVolume(1);
    


    //analyse audio - FFT
    F4FFT = new p5.FFT(0.8, 1024)
    F4FFT.setInput(F4)

    F7FFT = new p5.FFT(0.8, 1024)
    F7FFT.setInput(F7)

    F12FFT = new p5.FFT(0.8, 1024)
    F12FFT.setInput(F12);

    F13FFT = new p5.FFT(0.8, 1024)
    F13FFT.setInput(F13);

    F15FFT = new p5.FFT(0.8, 1024)
    F15FFT.setInput(F15);

    F18FFT = new p5.FFT(0.8, 1024)
    F18FFT.setInput(F18);

    F23FFT = new p5.FFT(0.8, 1024)
    F23FFT.setInput(F23);

    F25FFT = new p5.FFT(0.8, 1024)
    F25FFT.setInput(F25)

    F6Amp = new p5.Amplitude()
	F6Amp.setInput(F6)
	F6Amp.toggleNormalize()

    for (var i = 0; i < nellipse; i++) {
        // ajouter des éléments au dessus de notre canvas
        xpos1.push(random(0, width))
        ypos1.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    for(var i=0; i<50; i++){
        xpos2.push(random(0,width))
        ypos2.push(random(0,-height))
        xtarget2.push(random(0,width))
        ytarget2.push(random(0,height))
    }


//Pour changement couleur ecran
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1)
    //UTILE ?
    pg = createGraphics(windowWidth, windowHeight) // créer le calque à la taille de la fenêtre
    pg.pixelDensity(1)


//pour 2 rectangles qui se rejoignent
    F26xpos.push(0)
    F26ypos.push(height * 0.5)
    F26xtarget.push(width * 0.5 - 5)
    F26ytarget.push(height * 0.5)

    //rectangle horizontal déplacement inverse
    F26V2xpos.push(width)
    F26V2ypos.push(height * 0.5)
    F26V2xtarget.push(width * 0.5 + 5)
    F26V2ytarget.push(height * 0.5)


}

function draw() {
    background(0, 40)

    //A grand sharingan
    playSound(F1, 65)
    if (F1.isPlaying() == true) {
        push()
        var radius = map(F1.currentTime(), 0, F1.duration(), 600, width)
        fill(255, 0, 0);
        stroke(0, 60);
        strokeWeight(50);
        ellipse(width * 0.5, height * 0.5, radius, radius);


        //blanc DROITE
        var radius = map(F1.currentTime(), 0, F1.duration(), 5, width)

        fill(0);
        noStroke();
        ellipse(width / 1.52, height / 1.4, radius / 6, radius / 6);


        //rouge gauche
        var radius = map(F1.currentTime(), 0, F1.duration(), 5, width)

        fill(0);
        noStroke();
        ellipse(width / 2.97, height / 1.4, radius / 6, radius / 6);

        //haut
        var radius = map(F1.currentTime(), 0, F1.duration(), 5, width)

        fill(0);
        noStroke();
        ellipse(width / 2, height / 8.4, radius / 6, radius / 6);

        //contour centre
        var radius = map(F1.currentTime(), 0, F1.duration(), 5, width)

        noFill();
        stroke(0, 80);
        strokeWeight(20);
        ellipse(width * 0.5, height * 0.5, radius / 1, radius / 1);

        //CENTRE
        var radius = map(F1.currentTime(), 0, F1.duration(), 5, width)
        fill(0)
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius / 3, radius / 3);

      
        pop()
    }


    //Z -> cercle blanc qui rappetisse
    playSound(F2, 90)
    if (F2.isPlaying() == true) {
        push()
        
        noStroke()
        let rad = map(F2.currentTime(), 0, F2.duration(), width, 50)
        fill(251, 252, 250)
        ellipse(width * 0.5, height * 0.5, rad, rad)

        pop();
    }



    //E éclair
    playSound(F3, 69)
    if (F3.isPlaying() == true) {
        push()

        translate(width / 2, height * 0.2);
        var x = 0, y = 0, endX, endY;
        while (y < 1000) {
            endX = x + int(random(-4, 4)); 
            endY = y + 1;    
            strokeWeight(2);
            stroke(255); 
            line(x, y, endX, endY);
        x = endX;  
        y = endY;  
    }
    pop();

       
    }



    //R  trait connecté
    playSound(F4, 82)
    if (F4.isPlaying() == true) {
        push()
        let waveform = F4FFT.waveform();

        noFill();
        beginShape();
        stroke(0, 0, 255); 
        strokeWeight(4);

        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }


    //T petits points rouge sharingan 
    playSound(F5, 84)
    if (F5.isPlaying() == true) {
        push()
        var t = map(F5.currentTime(), 0, F5.duration() , 0, 1)
        t = constrain(t, 0, 1)
        fill(255,0,0)
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos2[i], xtarget2[i], t)
            var y = lerp(ypos2[i], ytarget2[i], t)
            
            ellipse(x, y, 50, 50)
            noStroke()
        }
      
        pop()

       
        push() 


     
        fill(0)
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos2[i], xtarget2[i], t)
            var y = lerp(ypos2[i], ytarget2[i], t)
            
            ellipse(x, y, 10, 10)
            noStroke()

        } 
       
        pop()


      
            push()
        noFill();

        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos2[i], xtarget2[i], t)
            var y = lerp(ypos2[i], ytarget2[i], t)
            
            ellipse(x, y, 30, 30)
            stroke(0, 75);
            strokeWeight(2);

        }
    
        pop()

        push()

       
        fill(0)
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos2[i], xtarget2[i], t)
            var y = lerp(ypos2[i], ytarget2[i], t)
         
            ellipse(x - 13, y + 7, 5, 5);
            noStroke()

        } 
     
        pop()


        push()

  
        fill(0)
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos2[i], xtarget2[i], t)
            var y = lerp(ypos2[i], ytarget2[i], t)
          
            ellipse(x - 0, y - 15, 5, 5);
            noStroke()

        } 
    
        pop()

        push()

       
        fill(0)
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos2[i], xtarget2[i], t)
            var y = lerp(ypos2[i], ytarget2[i], t)
           
            ellipse(x + 13.5, y + 7.6, 5, 5);
            noStroke()

        } 
       
        pop()



        
    }


    //Y rond barres
    playSound(F6, 89)
    if (F6.isPlaying() == true) {
        push()

        

		var lvl = F6Amp.getLevel() * 200;
		var nsegment = 96
        var ncurrentsegment = (map(F6.currentTime(), 0, F6.duration(), 0, nsegment + 10))
        stroke(1000)
		strokeWeight(2)
		for (var i = 0; i < ncurrentsegment; i++) {
			var h = map(i, 0, nsegment, 0, 320)
			var angle = map(i, 0, nsegment, 0, TWO_PI);
			var x = width * 0.5 + height * 0.45 * cos(angle)
			var y = height * 0.5 + height * 0.45 * sin(angle)
			line(width * 0.5, height * 0.5, x, y)
		}
		pop()


	

       
        
    }


    //U 3 carrés
    playSound(F7, 85)
    if (F7.isPlaying() == true) {


        F7FFT.analyze();
        rectMode(CENTER);
        var nrj1 = F7FFT.getEnergy("bass")

        push()
        fill(255, 255, 255, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        noStroke()
        rect(0, 0, width * 0.1, width * 0.1)
        pop()

        push()
        fill(255, 0, 255)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        noStroke()
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(255, 255, 255, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        noStroke()
        rect(0, 0, width * 0.1, width * 0.1)
        pop(); 

        

    }


    //I traits centrés
    playSound(F8, 73)
    if (F8.isPlaying() == true) {

        push();

            translate(width * 0.5, height * 0.5)
            var ang = map(F8.currentTime(), 0, F8.duration(), 0, PI)
            rectMode(CENTER)
            rotate(ang)
            noStroke()
            fill(0, 0, 255)
            rect(0, 0, width * 25, height * 0.004)
            pop()
    
            push();
            translate(width * 0.5, height * 0.5)
            var ang = map(F8.currentTime(), 0, F8.duration(), 0, PI)
            rectMode(CENTER)
            rotate(ang)
            noStroke()
            fill(0, 0, 255)
            rect(0, 0, width * 0.002, height * 25)
            pop()
    
    
    
        
        }

       


    //O carré rouge
    playSound(F9, 79);
    if (F9.isPlaying() == true) {


        push() //pousser un nouveau systeme de coordonné
        noStroke()
        rectMode(CENTER) //tourne autour du centre de la fenetre
        let angle = map(F9.currentTime(), 0, F9.duration(), 0, TWO_PI)
        fill(255, 0, 0)
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, height * 0.4, height * 0.4)
        pop()


    }

    //P ronds roses tombent
    playSound(F10, 80)
    if (F10.isPlaying() == true) {

        push()
        var t = map(F10.currentTime(), 0, F10.duration(), 0, 1)
        //var grey = map(stab3.currentTime(), stab3.duration() * 0.75, stab3.duration(), 255, 180)
        t = constrain(t, 0, 1)
        console.log(nellipse)
        //grey = constrain(grey, 180, 255)
        fill(255, 0, 255)
        noStroke()
        for (var i = 0; i < nellipse; i++) {
            let x = lerp(xpos1[i], xtarget[i], t)
            let y = lerp(ypos1[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()

        
    }



    //Q boule de feu 
    playSound(F11, 81) 
    if (F11.isPlaying() == true) {
        push()

        var largeur, hauteur, randomX = 0, randomY = 0, x, y, randomX, randomY, offsetX;
        push();
        fill(255, 0, 255);
        stroke(0, 20);
        strokeWeight(3);
        largeur = width * 0.01;
        hauteur = height * 0.06;
        if (F11.currentTime() === 0.00) {
            aleaDir = int(random(0, 4));
        }
        else {


            if (aleaDir < 2) {//0 ou 1 on va à droite
                translate(width / 10, 0);
                offsetX = F11.currentTime() * (width * 0.8) / F11.duration();
                translate(offsetX, height / 2);
            }
            else {//direction la gauche
                translate(9 * width / 10, 0);
                offsetX = -1 * (F11.currentTime() * (width * 0.8) / F11.duration());
                translate(offsetX, height / 2);
            }
            for (var i = 0; i < 500; i++) {

                randomX = Math.random();
                if (randomX < 0.5) randomX = -1;
                else randomX = 1;

                randomY = Math.random();
                if (randomY < 0.5) randomY = -1;
                else randomY = 1;

                x = Math.floor((Math.random() * (0.07 * width)) + 1) * randomX;
                y = Math.floor((Math.random() * (0.07 * width)) + 1) * randomY;

                rotate(Math.random() * 360);
                ellipse(x, y, largeur, hauteur);
            }
        }
        pop();


       
    }

    //S fleur rouge
    playSound(F12, 83)
    if (F12.isPlaying() == true) {
            push()
            let waveform = F12FFT.waveform();
            translate(width * 0.5, height * 0.5)
            noFill();
            stroke(255, 0, 0);
            strokeWeight(3)
            for (let i = 0; i < 10; i ++) {
              ellipse(0, 20, 80, 320);
              rotate(frameCount / 50.0);
              
            }
          pop()
        
    }


    //D croisement cercles
    playSound(F13, 68)
    if (F13.isPlaying() == true) {
        push()
        
        F13FFT.analyze()
        var nrj1 = F13FFT.getEnergy("treble")
        var radius = map(F13.currentTime(), 0, F13.duration(), 10, height)
        var radius2 = map(F13.currentTime(), 0, F13.duration(), height, 0)
        strokeWeight(1)
        stroke(255, 0, 255)
        noFill()
        ellipse(width * 0.5, height * 0.5, radius + nrj1 * 0.8, radius + nrj1 * 0.8)
        stroke(255, 255, 255)
        ellipse(width * 0.5, height * 0.5, radius2 + -nrj1 * 0.8, radius2 + -nrj1 * 0.8)
        pop()
        
       

    }



    //F petits points bleus connectés
    playSound(F14, 70)
    if (F14.isPlaying() == true) {
        push();
        let rand = 0;
        stroke(0, 0, 255)
        strokeWeight(8);
        for (let i = 1; i < steps; i++) {
            point((width / steps) * i, (height / 2) + random(-rand, rand));
            rand += random(-5, 5);
        }
        pop();
    }


    //G 3 barres centrées
    playSound(F15, 71)
    if (F15.isPlaying() == true) {

        noStroke()
        push();
        var long = map(F15.currentTime(), 0, F15.duration(), 25, width)



        rectMode(CENTER)
        fill(255, 0, 0)
        rect(width / 2, height / 2, long, 5);
        noStroke();
        

        fill(255, 0, 0)
        rect(width / 2, height / 3, long, 5);
       noStroke();

        fill(255, 0, 0)
        rect(width / 2, height / 1.5, long, 5);
        noStroke();



        pop();
    }

    //H fond change de couleur
    playSound(F16, 72)
    if (F16.isPlaying() == true) {}



    if (keyIsDown(72)) {
        background(frameCount % 255, 255 - frameCount % 170, 300)
        xpos += xdir
        ypos += ydir
        if (xpos > width || xpos < 0) {
            xdir *= -1
        }
        if (ypos > height || ypos < 0) {
            ydir *= -1
        }

       

    } else {

       
        xpos = random(width)
        ypos = random(height)
        xdir = random(1, 130)
        ydir = random(1, 130)

    }



  

    //J cercle rose
    playSound(F17, 74)
    if (F17.isPlaying() == true) {

        push();
        //noStroke()
        stroke(255, 0, 255);
        strokeWeight(7);
        //pour animer l'ellipse, r = rayon et map sont valeurs et position tete de lecture dans doc p5js -> current time puis valeurs minimale et valeur maximale que je peux transformer, pour grossir
        let r = map(F17.currentTime(), 0, F17.duration(), 0, width)
        noFill();
        ellipse(width * 0.5, height * 0.5, r, r)
        pop();


        

       
    }




    //K carré et cercles
    playSound(F18, 75)
    if (F18.isPlaying() == true) {

        F18FFT.analyze();
        rectMode(CENTER); // centrer la forme
        var nrj1 = F18FFT.getEnergy("bass")

        //coté un
        push()
        fill(255, 255, 255, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        noStroke() // PAS DE CONTOUR
        ellipse(0, 0, width * 0.04, width * 0.04) // DESSINER UNE ELLISPSE
        pop()

        push()
        fill(255, 255, 255)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        noStroke()
        rect(0, 0, nrj1, nrj1)
        pop()
//coté un
        push()
        fill(255, 255, 255, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.04, width * 0.04)
        pop()
//milieu centre
        push()
        fill(255, 255, 255, nrj1)
        translate(width * 0.85, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.025, width * 0.025)
        pop()
//milieu centre
        push()
        fill(255, 255, 255, nrj1)
        translate(width * 0.15, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.025, width * 0.025)
        pop()

        push()
        fill(255, 255, 255, nrj1)
        translate(width * 0.05, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.01, width * 0.01)
        pop()

        push()
        fill(255, 255, 255, nrj1)
        translate(width * 0.95, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.01, width * 0.01)

        pop();
    

        
    }

    //L cercle de cercles 
    playSound(F19, 76)
    if (F19.isPlaying() == true) {
        push();
        
        var nsegment = 25;
        var ncurrentsegment = (map(F19.currentTime(), 0, F19.duration(), 0, nsegment + 1));

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255, 0, 0);
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

    //M rectangle qui s'agrandit
    playSound(F20, 77)
    if (F20.isPlaying() == true) {
        push();
        var rad = map(F20.currentTime(), 0, F20.duration(), 50, width)
        rectMode(CENTER)
        noFill()
        stroke(0, 0, 255)
        strokeWeight(10);
        rect(width * 0.5, height * 0.5, rad, rad)

        pop();


    }

    //W petits points roses qui montent
    playSound(F21, 87)
    if (F21.isPlaying() == true) {
        push()
        var t = map(F21.currentTime(), 0, F21.duration(), 1, 0)
        var grey = map(F21.currentTime(), F21.duration() * 0.75, F21.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos1[i], xtarget[i], t)
            var y = lerp(ypos1[i], ytarget[i], t)
            fill(255, 0, 255)
            noStroke()
            ellipse(x, y, 10, 10)
            pop()
        }
    
    }

    //X cercles bleus
    playSound(F22, 88)
    if (F22.isPlaying() == true) {
        push();
        var rad = map(F22.currentTime(), 1, F22.duration(), 0, width);
        stroke(0, 0, 255)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.8, height * 0.4, rad, rad);
        pop();

        push();
        var rad = map(F22.currentTime(), 1, F22.duration(), 0, width);
        stroke(0, 0, 255)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.7, height, rad, rad);
        pop();

        push();
        var rad = map(F22.currentTime(), 1, F22.duration(), 0, width);
        stroke(0, 0, 255)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.3, height * 0.1, rad, rad);
        pop();

        push();
        var rad = map(F22.currentTime(), 1, F22.duration(), 0, width);
        stroke(0, 0, 255)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.1, height * 0.9, rad, rad);
        pop();
    }


    //C 2 barres verticales pixellisées rouge
    playSound(F23, 67)
    if (F23.isPlaying() == true) {
        push()
        translate(width * 0.48, height * 0)
        
        var waveform = F23FFT.waveform();
        noStroke();
        beginShape();
        fill(255, 0, 0);
        for (var i = 0; i < waveform.length; i++) {
            var y = map(i, 0, waveform.length, 0, width)
            var x = map(waveform[i], 1, -1, 50, height)
            rect(x, y, 5, 5)
        }
        endShape()
        pop()
//gauche
        push()
        var waveform = F23FFT.waveform();
        noStroke();
        beginShape();
        fill(255, 0, 0);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], 1, -1, 0, height);
            rect(y, x, 5, 5);
        }
        endShape();
        pop()

    }
    


    //V petits points blancs
    playSound(F24, 86)
    if (F24.isPlaying() == true) {
        push()
        var t = map(F24.currentTime(), 0, F24.duration() * 0.2, 0, 1)
        var grey = map(F24.currentTime(), F24.duration() * 0.2, F24.duration(), 255, 1)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        fill(250)
        noStroke()
        for (var i = 0; i < 50; i++) {
            let x = lerp(xpos1[i], xtarget[i], t)
            let y = lerp(ypos1[i], ytarget[i], t)
            rect(x, y, 2, 2)
        }

        pop()
    
    }

    //B cercle connecté
    playSound(F25, 66)
    if (F25.isPlaying() == true) {
        push()
        noFill()
        stroke(255, 255, 255)
        strokeWeight(2)
        let wave = F25FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1, 1, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            curveVertex(x, y)

        }
        endShape(CLOSE)
        pop()

    }

    //N - 2 barres se rejoignent
    playSound(F26, 78)
    if (F26.isPlaying() == true) {

        push()
        var t = map(F26.currentTime(), 0, F26.duration(), 0, 1)

        //premier objet
        push()
        fill(255, 0, 255)
        noStroke()
        for (var i = 0; i < 50; i++) {
            var x = lerp(F26xpos[i], width * 0.5 - 5, t)
            var y = height * 0.5;
            rectMode(CENTER)
            rect(x, y, 20, height);
        }
        pop()

        //deuxième objet sens inverse
        push()
        fill(0, 0, 200)
        noStroke()
        for (var i = 0; i < 50; i++) {
            var x = lerp(F26V2xpos[i], width * 0.5 + 5, t)
            var y = height * 0.5;
            rectMode(CENTER)
            rect(x, y, 20, height);
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
    // redimensionner dynamiquement notre canvas aux dimensions de la fenêtre de notre navigateur
    resizeCanvas(windowWidth, windowHeight)
}