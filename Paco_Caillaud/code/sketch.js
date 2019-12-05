let red;
let grey; 
let white;
let black;

let Son1amp; // Les variables SonXAmp sont des variables pour stocker l'amplitude du son

let Son2Amp;

let Son3Amp;

let Son4Amp;

let Son5Amp;
let zOff = 0; // Variable pour mettre en paramètre d'un noise 

let Son6Amp;

var pos7 = 10;
var x1 = function (pos7) {
    return sin(pos7 / 10) * 500 + sin(pos7 / 5) * 500;  // Le sinus et le cosinus servent à faire une
}                                                       //animation en va et vient.
var y1 = function (pos7) {                              // Ainsi, les coordonnées en x et en y sont changeantes
    return cos(pos7 / 10) + 500;                        // Mais gardent quand même une continuté, un mouvement harmonieux.
}
var x2 = function (pos7) {
    return sin(pos7 / 10) * 700 + cos(pos7) * 7;
}
var y2 = function (pos7) {
    return cos(pos7 / 20) * 700 + 700 + cos(pos7 / 12) * 70;
}

let Son13Amp;

let Son14Amp;


let Son15Amp;
const allPoints = [];
let epsilon = 0;

let Son18Amp;

let Son19FFT; // Variable contenant une transformation de Fourier d'un son
let Son19Amp;

let slotLength; //Variables donnant les dimension pour la touche 
let slotWidth;
let colorR;
let colorG;
let colorB;
let distance2;
let sizeEye = 17;

let Son23Amp;

let Son24Amp;

var anim1 = { // Création d'une promesse avec Anime.js
    w: 0
}


function playSound(sound, keyId) {                                    // Fonction permettant de jouer un son lorque qu'une certine touche du clavier est appuyée
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

function rdp(startIndex, endIndex, allPoints, rdpPoints) {
  const nextIndex = findFurthest(allPoints, startIndex, endIndex);
  if (nextIndex > 0) {
    if (startIndex != nextIndex) {
      rdp(startIndex, nextIndex, allPoints, rdpPoints);
    }
    rdpPoints.push(allPoints[nextIndex]);
    if (endIndex != nextIndex) {
      rdp(nextIndex, endIndex, allPoints, rdpPoints);
    }
  }
}

function findFurthest(points, a, b) {
  let recordDistance = -1;
  const start = points[a];
  const end = points[b];
  let furthestIndex = -1;
  for (let i = a + 1; i < b; i++) {
    const currentPoint = points[i];
    const d = lineDist(currentPoint, start, end);
    if (d > recordDistance) {
      recordDistance = d;
      furthestIndex = i;
    }
  }
  if (recordDistance > epsilon) {
    return furthestIndex;
  } else {
    return -1;
  }
}

function lineDist(c, a, b) {
    const norm = scalarProjection(c, a, b);
    return p5.Vector.dist(c, norm);
  }
  
  function scalarProjection(p, a, b) {
    const ap = p5.Vector.sub(p, a);
    const ab = p5.Vector.sub(b, a);
    ab.normalize(); // Normalize the line
    ab.mult(ap.dot(ab));
    const normalPoint = p5.Vector.add(a, ab);
    return normalPoint;
  }

  

function preload() {    
    // On load tous les sons de la base de donnée dans le sketch
    Son1 = loadSound("assets/Son1.wav");
    Son2 = loadSound("assets/Son2.wav");
    Son3 = loadSound("assets/Son3.wav");
    Son4 = loadSound("assets/Son4.wav");
    Son5 = loadSound("assets/Son5.wav");
    Son6 = loadSound("assets/Son6.wav");
    Son7 = loadSound("assets/Son7.wav");
    Son8 = loadSound("assets/Son8.wav");
    Son9 = loadSound("assets/Son9.wav");
    Son10 = loadSound("assets/Son10.wav");
    Son11 = loadSound("assets/Son11.wav");
    Son12 = loadSound("assets/Son12.wav");
    Son13 = loadSound("assets/Son13.wav");
    Son14 = loadSound("assets/Son14.wav");
    Son15 = loadSound("assets/Son15.wav");
    Son16 = loadSound("assets/Son16.wav");
    Son17 = loadSound("assets/Son17.wav");
    Son18 = loadSound("assets/Son18.wav");
    Son19 = loadSound("assets/Son19.wav");
    Son20 = loadSound("assets/Son20.wav");
    Son21 = loadSound("assets/Son21.wav");
    Son22 = loadSound("assets/Son22.wav");
    Son23 = loadSound("assets/Son23.wav");
    Son24 = loadSound("assets/Son24.wav");
    Son25 = loadSound("assets/Son25.wav");
    Son26 = loadSound("assets/Son26.wav");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB, 255);

    // Variable contenant une couleur pour ne pas répéter durant tout le sketch les mêmes valeurs
    red = color(144, 12, 25);
    grey = color(100);
    white = color(255);
    black = color(0);

    background(0);

    // Fonction permettant de changer la densité des pixels
    pixelDensity(0.2);

    // Attribution des amplitudes de chaque son à la variable SonXAmp
    Son1Amp = new p5.Amplitude();
    Son1Amp.setInput(Son1);
    Son1Amp.toggleNormalize();

    Son2Amp = new p5.Amplitude();
    Son2Amp.setInput(Son2);
    Son2Amp.toggleNormalize();

    Son4Amp = new p5.Amplitude();
    Son4Amp.setInput(Son4);
    Son4Amp.toggleNormalize();

    Son5Amp = new p5.Amplitude();
    Son5Amp.setInput(Son5);
    Son5Amp.toggleNormalize();

    Son6Amp = new p5.Amplitude();
    Son6Amp.setInput(Son6);
    Son6Amp.toggleNormalize();

    Son13Amp = new p5.Amplitude();
    Son13Amp.setInput(Son13);
    Son13Amp.toggleNormalize();

    Son14Amp = new p5.Amplitude();
    Son14Amp.setInput(Son14);
    Son14Amp.toggleNormalize();

    Son15Amp = new p5.Amplitude();
    Son15Amp.setInput(Son15);
    Son15Amp.toggleNormalize();
    for (let x = 0; x < width; x++) {
        const xval = map(x, 0, width, 0, 5);
        const yval = exp(-xval) * cos(TWO_PI * xval);
        const y = map(yval, -1, 1, height, 0);
        allPoints.push(createVector(x, y));
    }

    Son18Amp = new p5.Amplitude();
    Son18Amp.setInput(Son18);
    Son18Amp.toggleNormalize();

    Son19FFT = new p5.FFT();
    Son19FFT.setInput(Son19);

    slotLength = width / 12;
    slotWidth = height / 17;

    Son23Amp = new p5.Amplitude();
    Son23Amp.setInput(Son23);
    Son23Amp.toggleNormalize();

    Son24Amp = new p5.Amplitude();
    Son24Amp.setInput(Son24);
    Son24Amp.toggleNormalize();
}





function draw() {
    background(0,10); // Permet de donner cet effet de trainé derrière les objets qui bougent

    playSound(Son1, 65); //A
    playSound(Son2, 90); //Z
    playSound(Son3, 69); //E
    playSound(Son4, 82); //R
    Son4.setVolume(2);  // Règle le volume du son
    playSound(Son5, 84); //T
    Son5.setVolume(2);
    playSound(Son6, 89); //Y
    playSound(Son7, 85); //U
    playSound(Son8, 73); //I
    playSound(Son9, 79); //O
    playSound(Son10, 80); //P
    playSound(Son11, 81); //Q
    playSound(Son12, 83); //S
    playSound(Son13, 68); //D
    playSound(Son14, 70); //F
    playSound(Son15, 71); //G
    playSound(Son16, 72); //H
    playSound(Son17, 74); //J
    playSound(Son18, 75); //K
    playSound(Son19, 76); //L
    playSound(Son20, 77); //M
    playSound(Son21, 87); //W
    playSound(Son22, 88); //X
    playSound(Son23, 67); //C
    playSound(Son24, 86); //V
    playSound(Son25, 66); //B
    playSound(Son26, 78); //N
    Son26.setVolume(4);

    //A
    // Ellipse dont la taille et la couleur varie en fonction de l'amplitude du Son1
    if (Son1.isPlaying() == true) {
        push();
        noStroke();
        var amp = Son1Amp.getLevel();
        var redLevel = map(amp, 0, 1, 175, 130); // Variable en règle de trois permettant de transformer l'amplitude en valeur de couleur
        var size = map(amp, 0, 1, 300, 400);
        fill(redLevel, 12, 25);
        translate(width * 0.5, height * 0.5);
        ellipse(0, 0, size);
        pop();
    }

    //Z
    if(Son2.isPlaying() == true) {
        push();
        var amp = Son2Amp.getLevel();
        sizeX = map(amp, 0, 1, 100, 200);
        rectMode(CENTER);
        fill(red);
        noStroke();
        rect(0, height * 0.5, sizeX, height);
        rect(width, height * 0.5, sizeX, height);
        pop();
    }

    //E
    if(Son3.isPlaying() == true) {
        push();
        var move = map(Son3.currentTime(), 0, Son3.duration(), 0, 10); // Variable correspondant au temps du son. Permet de faire une animation au même timing que le son
        translate(move, move);
        for(let i = (width / 62) * 10; i < width - (width / 62) * 10; i += width / 31) {       
            for(let j = (height / 20) * 3; j < height - (height / 20) * 2; j += height / 20) {
                fill(grey);
                noStroke();
                rect(i, j, 20, 10);
            }
        }
        pop();
    }

    //R
    if(Son4.isPlaying() == true) {
        push();
        angleMode(RADIANS)
        var amp = Son4Amp.getLevel();
        var sizewidth = map(amp, 0, 1, 30, 40);
        var sizeheight = map(amp, 0, 1, 100, 200);
        translate(width - 200, height - 150);       //Met le centre du repère 
        rotate(PI / 4);
        rectMode(CENTER);
        noStroke();
        fill(red)
        rect(0, 0, sizewidth, sizeheight);
        rect(0, 0, sizeheight, sizewidth)
        pop();
    }

    //T
    if(Son5.isPlaying() == true) {
        push();
        angleMode(RADIANS);     //Définit l'unité des angles
        var amp = Son5Amp.getLevel();
        var noiseMax = map(amp, 0, 1, 0.5, 5);
        translate(width * 0.5, height * 0.5);
        stroke(white);
        strokeWeight(30);
        noFill();   
        beginShape();  
        for(let i = 0; i < TWO_PI; i += 0.1) {
            var xOff = map(cos(i), -1, 1, 0, noiseMax);
            var yOff = map(sin(i), -1, 1, 0, noiseMax);
            var r = map(noise(xOff, yOff, zOff), 0, 1, 100, 300);       //Noise = aléatoire smooth
            var xPos = cos(i) * r;
            var yPos = sin(i) * r;
            vertex(xPos, yPos);     //Point se reliant entre eux permettent de faire une forme
        }
        endShape(CLOSE);
        zOff +=0.01;
        pop();
    }
 
    //Y
    if (Son6.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rectMode(CENTER);
        var amp = Son6Amp.getLevel();
        var size = map(amp, 0, 1, 20, 200);
        for (let i = -2; i < 3; i++) {          // Double boucle for permettant de faire des rectangle positionner 
            for (let j = -1; j < 2; j++) {      // en X et en Y
                fill(red);
                noStroke();
                rect(i * 200, j * 200, size, size);
            }
        }
        pop();
    }

    //U
    if (Son7.isPlaying() == true) {
        push();
        angleMode(RADIANS);
        translate(width * 0.5, 0);
        stroke(white);
        strokeWeight(20);
        line(x1(pos7), y1(pos7), x2(pos7), y2(pos7));       // Créer une ligne aux coordonnées changeante
        pos7 += 0.1;
        pop();
    }

    //I
    if (Son8.isPlaying() == true ) {
        push();
        translate(width * 0.5, height * 0.5);
        for(let i = 0; i < 20; i++) {               // Rectangles positionnées aléatoirement mais dans un espace restreint
            fill(red);
            noStroke();
            rect(random(-600, 550), random(-120,-110), i* 2, i* 2);
            rect(random(-600, 550), random(80, 90), i* 2, i* 2);
            rect(random(-600, -590), random(-120, 90), i* 2, i* 2);
            rect(random(540, 550), random(-120, 90), i* 2, i* 2);
        }
        pop();
    }

    //O
    if(Son9.isPlaying() == true) {
        push();
        var up = map(Son9.currentTime(), 0, Son9.duration(), height, 200);
        stroke(grey);
        strokeWeight(20);
        line(60, up + 200, width * 0.5 - 30, up);
        pop();
    }

    //P
    if(Son10.isPlaying() == true) {
        push();
        var up = map(Son10.currentTime(), 0, Son10.duration(), 0, height - 200);
        stroke(grey);
        strokeWeight(20);
        line(width - 60, up - 200, width * 0.5 + 30, up);
        pop();
    }

    //Q
    if(Son11.isPlaying() == true) {
        push();
        for(let i = 0; i < 50; i++) {
            var xPos = random(width);
            var yPos = random(height);
            fill(red);
            noStroke();
            rect(xPos, yPos, 10, 10);
        }
        pop();
    }

    //S
    if (Son12.isPlaying() == true) {
        push();
        angleMode(DEGREES);
        translate(width * 0.3, 0);
        for (let y = 0; y < height; y += 18) {      //Créer plusieurs rectangles le long de la largeur de l'écran
            let angle = y + frameCount;
            var x = sin(angle) * cos(angle) * height / 3;  
            fill(grey)
            stroke(white);
            strokeWeight(4);
            rect(x, y, y, y);
        }
        pop();
    }

    //D
    if  (Son13.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rectMode(CENTER);
        var amp = Son13Amp.getLevel();
        var whiteLevel = map(amp, 0, 1, 0, 200);
        noStroke()
        fill(255, 255, 255,whiteLevel);     // Modifie l'opacité en fonction de l'amplitude
        rect(0, 0, width, height);
        pop();
    }




    //F
    if (Son14.isPlaying() == true) {
        push();
        angleMode(RADIANS);
        var amp = Son14Amp.getLevel();
        var tilt = map(amp, 0, 1, -0.5, 0);
        translate(200, height - 150);
        rotate(tilt);                           //Fait tourner le repère en fonction de l'amplitude dans un intervalle réduit
        fill(white);
        noStroke();
        rectMode(CENTER);
        rect(0, 0, 250, 50);
        pop();
    }



    //G
    if (Son15.isPlaying() == true) {
        push();
        var amp = Son15Amp.getLevel();
        var add = map(amp, 0, 1, 0.3, 2);

        const rdpPoints = [];
        const total = allPoints.length;
        const start = allPoints[0];
        const end = allPoints[total - 1];
        rdpPoints.push(start);
        rdp(0, total - 1, allPoints, rdpPoints);
        rdpPoints.push(end);
      
        epsilon += add;
        if (epsilon > 84) {
          epsilon = 0;
        }

        var R = map(epsilon , 0.3, 80, 255, 144)
        var G = map(epsilon , 0.3, 80, 255, 12)
        var B = map(epsilon , 0.3, 80, 255, 25)

        noFill();
        beginShape();
        for (let v of rdpPoints) {
            stroke(R, G, B);
            strokeWeight(50);
          vertex(v.x, v.y);
        }
        endShape();
        pop();
    } else {
        epsilon = 0;
    }

    //H
    if (Son16.isPlaying() == true) {
        var timer = map(Son16.currentTime(), 0, Son16.duration(), 0, 100);
        push();
        translate(100, 150);
        rectMode(CENTER);
        fill(grey);
        noStroke();
        if (timer > 0) {                // Timer permet de créer les carrés au rythme de la musique
            rect(0, -75, 50, 50);
        }
        if (timer > 25) {
            rect(0, 0, 50, 50);
        }
        if (timer > 50) {
            rect(0, 75, 50, 50);
        }
        if (timer > 75) {
            rect(0, 150, 50, 50);
        }
        pop();
    }

    //J
    if(Son17.isPlaying() == true) {
        push();
        translate(100, 150);
        rectMode(CENTER);
        for (let i = 75; i <= 475; i += 75) {
            for (let j = -75; j <= 150; j += 75) {
                fill(white);
                noStroke();
                rect(i, j, 50, 50);
            }
        }
        pop();
    }

    //K
    if (Son18.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rectMode(CENTER);
        var moveX = map(Son18.currentTime(), 0, Son18.duration(), -width * 0.5, width * 0.5);
        var amp = Son18Amp.getLevel();
        var moveY = map(amp, 0, 1, 0, 90);
        fill(red);
        noStroke();
        rect(moveX, moveY, 40, 40);
        pop();
    }

    //L
    if (Son19.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        let wave = Son19FFT.waveform();
        noFill();
        beginShape();
        stroke(grey);
        strokeWeight(width / 62);
        for (var i = 0; i < wave.length; i++) {
            var x = map(i, 0, wave.length, -650, -100)
            var y = map(wave[i], -1, 1, 0, height)
            curveVertex(x, y)
        }
        endShape();
        beginShape();
        stroke(grey);
        strokeWeight(width / 62);
        for (var i = 0; i < wave.length; i++) {
            var x = map(i, 0, wave.length, 100, 650)
            var y = map(wave[i], -1, 1, 0, height)
            curveVertex(x, y)
        }
        endShape();
        beginShape();
        stroke(red);
        strokeWeight(width / 62);
        for (var i = 0; i < wave.length; i++) {
            var x = map(i, 0, wave.length, -100, 100)
            var y = map(wave[i], -1, 1, 0, height)
            curveVertex(x, y)
        }
        endShape();


        push();
        angleMode(RADIANS);
        rotate(PI);
        beginShape();
        stroke(grey);
        strokeWeight(width / 62);
        for (var i = 0; i < wave.length; i++) {
            var x = map(i, 0, wave.length, -650, -100)
            var y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape();
        beginShape();
        stroke(grey);
        strokeWeight(width / 62);
        for (var i = 0; i < wave.length; i++) {
            var x = map(i, 0, wave.length, 100, 650)
            var y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape();
        beginShape();
        stroke(red);
        strokeWeight(width / 62);
        for (var i = 0; i < wave.length; i++) {
            var x = map(i, 0, wave.length, -100, 100)
            var y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape();
        pop();
        pop();
    }


    //M
    if (Son20.isPlaying() == true) {
        push();
        angleMode(RADIANS);
        for (let i = 0; i <= width; i += slotLength) {
            for (let j = 0; j <= height; j += slotWidth) {
                eye(i, j);
                drawEye(slotLength / 2 + i, slotWidth / 2 + j);
                contour(i, j);  
            }
        }
        pop();
    }
    // Fonction pour créer la forme blanche des yeux
    function eye(i, j) {
        pop();
        noStroke();
        fill(255);
        arc(((slotLength / 12) * 3.5) + i, (slotWidth / 4) + j, slotWidth, slotWidth, PI / 6, (PI / 6) * 5, OPEN);
        arc(((slotLength / 12) * 3.5) + i, ((slotWidth / 4) * 3) + j, slotWidth, slotWidth, (PI / 6) * 7, (PI / 6) * 11, OPEN);
        arc(((slotLength / 12) * 8.5) + i, (slotWidth / 4) + j, slotWidth, slotWidth, PI / 6, (PI / 6) * 5, OPEN);
        arc(((slotLength / 12) * 8.5) + i, ((slotWidth / 4) * 3) + j, slotWidth, slotWidth, (PI / 6) * 7, (PI / 6) * 11, OPEN);
        strokeWeight(3);
        stroke(255);
        line(slotLength / 12 + i, slotWidth / 2 + j, slotLength/ 12 * 6 + i, slotWidth / 2 + j);
        line(slotLength / 12 * 6 + i, slotWidth / 2 + j, slotLength / 12 * 11 + i, slotWidth / 2 + j);
        pop();
    }
    
    //Fonction pour créer les contours autour des yeux et cacher la pupille quand elle dépasse
    function contour(i, j) {
        push();
        noFill();
        stroke(20);
        strokeWeight(16.5);
        arc(((slotLength / 12) * 3.5) + i, (slotWidth / 4) + j, slotWidth * 1.4, slotWidth * 1.4, PI / 6, (PI / 6) * 5, OPEN);
        arc(((slotLength / 12) * 3.5) + i, ((slotWidth / 4) * 3) + j, slotWidth * 1.4, slotWidth * 1.4, (PI / 6) * 7, (PI / 6) * 11, OPEN);
        arc(((slotLength / 12) * 8.5) + i, (slotWidth / 4) + j, slotWidth * 1.4, slotWidth * 1.4, PI / 6, (PI / 6) * 5, OPEN);
        arc(((slotLength / 12) * 8.5) + i, ((slotWidth / 4) * 3) + j, slotWidth * 1.4, slotWidth * 1.4, (PI / 6) * 7, (PI / 6) * 11, OPEN);
        strokeWeight(10);
        point(slotLength / 12 * 0.957 + i, slotWidth / 2 + j);
        point(slotLength / 12 * 5.95 + i, slotWidth / 2 + j);
        point(slotLength / 12 * 11.05 + i, slotWidth / 2 + j);
        pop();
    }
    
    // Fonction pour faire les yeux qui suivent la souris
    // Poue la faire j'utilise des vecteursn
    function drawEye(x, y) {
        push();
        var centerX1 = ((slotLength / 12) * 3.5);  
        var centerY1 = (slotWidth / 2);
        var centerX2 = ((slotLength / 12) * 8.5);
        var centerY2 = (slotWidth / 2);
        var distance = dist(centerX1, centerY1, centerX2, centerY2);
        var pupil = createVector(mouseX, mouseY);
        pupil.sub(x, y);
        pupil.limit(slotWidth / 4);
        pupil.add(x, y);
        distance2 = dist(x, y, mouseX, mouseY);
        if(distance2 < slotWidth / 2) {
            fill(red);
        } else {
            fill(0);  
        } 
        noStroke();
        ellipse(pupil.x + distance / 2, pupil.y, sizeEye, sizeEye);
        ellipse(pupil.x - distance / 2, pupil.y, sizeEye, sizeEye);
        pop();
      }

    //W
    if (Son21.isPlaying() == true) {
        push();
        for (let i = width/62; i < width; i += (width / 31) * 2) {
            for(let j = 0; j < (width / 62) * 2; j+= width/31) {
                for(let k = 0; k < height; k+= 10) {
                    fill(random(255));
                    noStroke();
                    rect(j + i, k, 20, 20);
                }
            }
        }
        pop();
    }

    //X
    if (Son22.isPlaying() == true) {
        push();
        var  length = map(Son22.currentTime(), 0, Son22.duration(), 0, height + 100);
        background(0, 10);
        noStroke();
        fill(white);
        rect((width / 62) * 30.5, length, width/62, width/62);
        pop();
    } 

    //C
    if (Son23.isPlaying() == true) {
        push();
        var length = map(Son23.currentTime(), 0, Son23.duration(), height, 0 - 50);
        var amp = Son23Amp.getLevel();
        var size = map(amp, 0, 1, (-width / 62) * 10, (width / 62) * 10);
        for (let i = 0; i < 20; i++) {
            noStroke();
            fill(red);
            rect(size + (i*200), length + (i * 80), 600, (width / 62));
        }
        pop();
    }

    //V
    if (Son24.isPlaying() == true) {
        var timer = map(Son24.currentTime(), 0, Son24.duration(), 0, 100);
        var amp = Son24Amp.getLevel();
        push();
        rectMode(CENTER);
        translate(width* 0.5, height * 0.5);
        if (timer < 10) {
            fill(grey);
            noStroke();
            rect(-timer* 8 - 50, 0, 100, 400);
            rect(timer * 8 + 50, 0, 100, 400);
            console.log(timer);
        }
        if (timer > 10) {
            noStroke();
            fill(grey);
            rect(9.82613864328702 * 8 + 50, 0, 100, 400)
            rect(-9.82613864328702 * 8 - 50, 0, 100, 400)
            for (let i = 0; i < 30; i++) {
                fill(red);
                noStroke();
                rect(random(-70, 70), random(-timer * 6, timer * 6), 10, 10);
            }
        }
        pop();
    }

    //B
    if ( Son25.isPlaying() == true) {
        push();
        translate(width * 0.5 + 15, height * 0.5 + 15);
        rectMode(CENTER)
        noFill();
        stroke(white);
        strokeWeight(random(1, 20));
        rect(0, 0, 950, 550);
        pop();
    }

    //N
    if (keyIsDown(78)) {
        anim1 = {
          w: 0
        }
        var animation1 = anime({        // Animaton jouant sur la taille du carré
          targets: anim1,
          w: height * 0.4,
          easing: 'cubicBezier(.91, -0.54, .29, 1.56)',
          direction: 'alternate',
          loop: 1,      // L'animation ne s'éxecute qu'une seule fois
          duration: 500
        });
    }
    if (Son26.isPlaying() == true) {
        var timer = map(Son26.currentTime(), 0, Son26.duration(), 0, 100);
        var boom = 20;
        push();
        rectMode(CENTER);
        noFill();
        noStroke();
        fill(white)
        // en utilisant la propriété 'w' stocké dans l'objet 'anim1' on modifie la taille
        rect(width * 0.5, height * 0.5, anim1.w, anim1.w)
        pop();
        if( timer > 35 ) {
            push();
            translate(width * 0.5, height * 0.5);
            for(let i = 0; i < 20; i++) {
                var xPos = random(-boom - 130, boom + 130);
                var yPos = random(-boom, boom);
                fill(red);
                noStroke();
                rect(xPos, yPos, 10, 10);
                boom += 10;
            }
            for(let i = 0; i < 20; i++) {
                var xPos = random(-boom - 130, boom + 130);
                var yPos = random(-boom, boom);
                fill(grey);
                noStroke();
                rect(xPos, yPos, 10, 10);
                boom += 10;
            }
            for(let i = 0; i < 20; i++) {
                var xPos = random(-boom - 130, boom + 130);
                var yPos = random(-boom, boom);
                fill(white);
                noStroke();
                rect(xPos, yPos, 10, 10);
                boom += 10;
            }
        }
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}