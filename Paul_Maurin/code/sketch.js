//les sons

let soundA
let soundB
let soundC
let soundD
let soundE
let soundF
let soundG
let soundH
let soundI
let soundJ
let soundK
let soundL
let soundM
let soundN
let soundO
let soundP
let soundQ
let soundR
let soundS
let soundT
let soundU
let soundV
let soundW
let soundX
let soundY
let soundZ

let graphic




function preload() {   //charger les sons
    soundA = loadSound("../assets/soundA.wav")
    soundB = loadSound("../assets/soundB.wav")
    soundC = loadSound("../assets/soundC.wav")
    soundD = loadSound("../assets/soundD.wav")
    soundE = loadSound("../assets/soundE.wav")
    soundF = loadSound("../assets/soundF.wav")
    soundG = loadSound("../assets/soundG.wav")
    soundH = loadSound("../assets/soundH.wav")
    soundI = loadSound("../assets/soundI.wav")
    soundJ = loadSound("../assets/soundJ.wav")
    soundK = loadSound("../assets/soundK.wav")
    soundL = loadSound("../assets/soundL.wav")
    soundM = loadSound("../assets/soundM.wav")
    soundN = loadSound("../assets/soundN.wav")
    soundO = loadSound("../assets/soundO.wav")
    soundP = loadSound("../assets/soundP.wav")
    soundQ = loadSound("../assets/soundQ.wav")
    soundR = loadSound("../assets/soundR.wav")
    soundS = loadSound("../assets/soundS.wav")
    soundT = loadSound("../assets/soundT.wav")
    soundU = loadSound("../assets/soundU.wav")
    soundV = loadSound("../assets/soundV.wav")
    soundW = loadSound("../assets/soundW.wav")
    soundX = loadSound("../assets/soundX.wav")
    soundY = loadSound("../assets/soundY.wav")
    soundZ = loadSound("../assets/soundZ.wav")

}



function setup() {
    createCanvas(windowWidth, windowHeight)   
    graphicc = createGraphics(width, height)   //createGraphic permet de créer un calque pour les animations pour lesquelles je ne souhaite pas l'influance du background qui se renouvelle
    graphicc.clear()

    graphicm = createGraphics(width, height)
    graphicm.clear()
    graphicj = createGraphics(width, height)
    graphicj.clear()
    graphice = createGraphics(width, height)
    graphice.clear()
    graphicq = createGraphics(width, height)
    graphicq.clear()
    graphics = createGraphics(width, height)
    graphics.clear()





    background(0);
}

function playSound(sound, keyId) {                 //fonction qui permet de simplifier l'initialisation touches et sons
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

var back = 255

//touche A
let xa = 700
let za = 0

//touche B
var db = 3
var yb = 0
var timeb = 0

//touche C
let xc = 0;
let yc = 0;
let zc = 0;
let nc = -100;

//touche D
let xd = 0

//touche E
let re = 10

//touche F
let yf=0

//touche G
let xg =0
let yg =0
let timeg = 0 
                    //ici toutes mes variables (je finis le nom de chaques variables par la lettre qui correspond)
//touche H
let speedh = 10
let timeh = 100

//touche I
var xi = 0
var yi = 0

//touche J
let xj = 0;
var timej = 0;

//touche K
let xk=200

//touche L
let timel = 255

//touche M
var timem = 0;
var pm = 110;

//touche O
let doo = 9

// touche P 
var xp = 0

//touche Q
var xq = 0
var yq = 0
var timeq = 0

//touche U
let xu=0

//touche S
let xs = 0
let ys = 0.0012
let times = 0

//touche V
let xv = 0

//touche Y
let xy=2000
let yy=0

//touche X
let xx=18

// touche Z
var speed2 = 0
var pol2 = 500
var pol = 500
var speed = 20
var ge = 255
///////////////////


function draw() {
    noStroke()
    fill(0, back)                   //le background et un rectangle pour permettre si je le veux de jouer avec l'opacité de celui-ci pour certaines animations
    rect(0, 0, width, height)
     
    // touche U                     //les lettres U et V sont en haut du code car j'ai utliser des formes de même couleur de fond dans les animation pour créer les formes que je voulais
     playSound(soundU, 85)
     if (soundU.isPlaying() == true) {
         push()
 fill(random(255), 0, random(255))
 ellipse(width-200,height-200,180,180)     //pus()h et pop() sont utilisé à chaques debut et fin de codage d'une lettre
 
 if (xu<=200){
     fill(0)
 ellipse(width-xu,height-xu,180,180)
 xu=xu+10}
 pop()
 
     if(xu>200){fill(0)
         ellipse(width-200,height-200,200,200)   //cette ellipse (couleur du fond) viens cacher l'autre
     }
     }else(xu=0)
 
     // touche V
     playSound(soundV, 86)
     if (soundV.isPlaying() == true) {
         push()
         if (xv < 2) {
             fill(random(255), 0, random(255))
             arc(width / 2, height / 2, 300, 300, 0, PI * xv + 0.0000001)    //arc qui se ferme
 
             xv = xv + 0.04
             pop()
         }
     } else {
         xv = 0
     }

    // touche P                   
    playSound(soundP, 80)
    if (soundP.isPlaying() == true) {
        push()
        translate(width / 2, height / 2);

        rectMode(CENTER);

        fill(random(255), 0, random(255))
        ellipse(0, 0, 500, 500)
        fill(0)
        rect(0, xp - 500, 500, 500)     //ici ce sont 2 carrés de même couleur que le fond qui viennent jouer avec le cercle
        rect(0, xp - 1600, 500, 500)

        xp = xp + 54
        if (xp - 500 > height + 300) {
            xp = 0
        }
        pop()
    }
// touche M
playSound(soundM, 77)
if (soundM.isPlaying() == true) {
    push()
    graphicm.strokeWeight(2);                       //animation mis sur un calque pour éviter l'effacement
    graphicm.stroke(random(255), 0, random(255));



    for (let xm = 0; xm < width; xm = xm + 4) {



        graphicm.noFill();

        graphicm.ellipse(xm, pm * noise(xm / 300, timem) * 4, 1, 1);



        pm = pm + 0.01;
    }


    image(graphicm, 0, 0)
    timem = timem + 0.001;
    pop()
} else {
    timem = 0;
    graphicm.background(0)
    pm = 110;

}
    // touche A
    playSound(soundA, 65)                 //translate et rotate sont ici utilisé pour que l'ellipse lorsqu'elle se réduit reste à peu près stable d'un coté à cause du mode CORNER
    if (soundA.isPlaying() == true) {
        push()
        fill(255, 0, 0)
        ellipseMode(CORNER)
        translate(width+1, height+1)
        rotate(PI)
        if (xa > 100) {
            ellipse(width / 2 - 80-za, height / 2 - 80-za, xa, xa)
            stroke(255)
            strokeWeight(10)
            line(width / 2, height / 2, random(width / 2), random(height / 2))

        }
        xa = xa - 5
za=za-0.5

pop()
    } else {
        ellipseMode(CENTER);
        xa = 700;
        noStroke()
        za=0
    }

    // touche B
    playSound(soundB, 66)
    if (soundB.isPlaying() == true) {
        
        fill(0,4);
        rect(0,0,width,height);
        fill(random(255), 0, random(255));
        noStroke();
        for (let y=db/2;y<height;y =y+ db){
        let angle= radians(frameCount+y/2);
        let x = width/2+width/2*sin(angle)/sin(y);   //tatonnage avec des sin() afin de trouver des formes interressante 
        ellipse(x,y,db+10,db+10);
      
        }
    }

    

    // touche D
    playSound(soundD, 68)
    push()
    if (soundD.isPlaying() == true) {
fill(255,0,0)
ellipse(200,200,170,170)
if(xd>7){
    fill(0,0,255)                          //tatonnage afin de faire coincider l'apparition des formes et le son
    rect(width-200,height/3,150,150)
    if(xd>15){
        fill(255,0,255)
ellipse(width/2,height/2,300,300)
    }
}
xd=xd+0.6
pop()
    }else{xd=0}

    // touche E 
    playSound(soundE, 69)
    push()
    if (soundE.isPlaying() == true) {
        translate(width / 2, height / 2);
        graphice.stroke(random(255), 0, random(255))
        graphice.noFill();
        rotate(re);                                  
        graphice.ellipse(re, re, 500, 500);

        re = re + 0.5;
        image(graphice, 0, 0)
        pop()
    } else {
        re = 10
    }

    // touche F
    playSound(soundF, 70)
    if (soundF.isPlaying() == true) {
        push()
for(let xf=0;xf<width;xf=xf+20){
    stroke(random(255), 0, random(255))
    noFill()
    ellipse(width/2,height/2,xf,yf)
    yf=yf+0.5
    pop()
} }else{yf=0}

    // touche G
    playSound(soundG, 71)
    if (soundG.isPlaying() == true) {
        push() 
        fill(255, 0, 255)         
if (timeg>3){                                        //tatonnage afin de faire coincider l'apparition des formes et le son
    rect(100,100,200,700)
    if (timeg>300){                     
        rect(400,100,200,700)
        fill(random(255),0,255)
        if (timeg>600){
rect(700,100,200,700)
if(timeg>700){
    rect(800,100,200,700)
    if(timeg>800){
        rect(900,100,200,700)
       pop()
    }
}
    }
    }
}
timeg=timeg+6
    }else{timeg=0}

    // touche H
    playSound(soundH, 72)
    if (soundH.isPlaying() == true) {
        push()
        fill(random(255), 0, random(255), timeh)      //boucle for afin de faire se rencontrer le plus de formes
        stroke(random(255), 0, random(255))
        for (let xh = 0; xh < width + 100; xh = xh + 100) {
            for (let yh = 0; yh < height + 100; yh = yh + 100) {

                ellipse(xh, yh, timeh, timeh)
            }
        }
        timeh = timeh + 1
        pop()
    } else {
        timeh = 0;
    }

    // touche I
    playSound(soundI, 73)
    if (soundI.isPlaying() == true) {
        push()


        strokeWeight(5)
        translate(map(sin(xi) * sin(yi) * sin(45), -1, 1, 100, width - 100), map(sin(yi) * sin(yi) * -sin(xi), -1, 1, 100, height - 100));     //utilisation de la fonction map afin que le tracé de sin() soit bien visible sur tout l'écran
        fill(random(255), 0, random(255))
        ellipse(0, 0, noise(xi / 0.01) * 300, noise(xi / 0.02) * 300)
        xi = xi + 0.05
        yi = yi - 0.01
        pop()
    }

    // touche J
    playSound(soundJ, 74)
    if (soundJ.isPlaying() == true) {
        

graphicj.noFill()
        graphicj.stroke(random(255), 0, random(255));
        if (xj < 1000 * width) {

            noFill()
            graphicj.ellipse(xj, noise(timej, timej + 78) * (height + 300) - height / 6, 30, 30)     //utilisation de la fonction noise() afin de créer un faux hasard "smooth"
            graphicj.ellipse(xj / 2, noise(timej + 36, timej) * (height + 300) - height / 6, 30, 30)
            graphicj.ellipse(xj / 1.2, noise(timej + 367, timej) * (height + 300) - height / 6, 30, 30)
            graphicj.ellipse(xj / 2.2, noise(timej, timej + 108) * (height + 300) - height / 6, 30, 30)
            graphicj.ellipse(xj / 1.5, noise(timej + 360, timej) * (height + 300) - height / 6, 30, 30)
            graphicj.ellipse(xj / 1.2, noise(timej + 87, timej) * (height + 300) - height / 6, 30, 30)
            graphicj.ellipse(xj / 1.34, noise(timej, timej + 228) * (height + 300) - height / 4, 30, 30)
            graphicj.ellipse(xj / 1.9, noise(timej + 360, timej) * (height + 300) - height / 4, 30, 30)
            graphicj.ellipse(xj / 1.6, noise(timej + 37, timej) * (height + 300) - height / 4, 30, 30)
image(graphicj,0,0)
            xj = xj + 10;
            timej = timej + 0.01;
        }

       


    } else {
        xj = 0;
        timej = 0;
        x = 255
        graphicj.background(0)
    }

    // touche K
    playSound(soundK, 75)
    if (soundK.isPlaying() == true) {
        push()
        fill(255, 0, 0,100)
ellipse(width/2-xk,height/2,100,100)          //un jeu de transparence 
fill(0,0,255,100)
ellipse(width/2+xk,height/2,100,100)
xk=xk-7
pop()
    }else{xk=200}

    // touche L
    playSound(soundL, 76)
    if (soundL.isPlaying() == true) {
        push()
        fill(noise(timel)*100, 0, noise(timel)*100, timel)
        stroke(random(255), 0, random(255))
        rectMode(CENTER)
        for (let xl = 0; xl < width + 100; xl = xl + 60) {          //boucle for afin de faire se rencontrer le plus de formes
            for (let yl = 0; yl < height + 100; yl = yl + 60) {

                rect(xl, yl, timel, timel)
            }
        }
        timel = timel - 0.9
        pop()

    } else {
        timel = 0;
    }

    
    // touche N
    playSound(soundN, 78)
    if (soundN.isPlaying() == true) {
        push()
        strokeWeight(6);
        stroke(random(255), 0, random(255));                           //grésillement de random()
        noFill();
        line(random(width), random(height), random(width), random(height));

        pop()


    }

    // touche O 
    playSound(soundO, 79)
    if (soundO.isPlaying() == true) {
        

        fill(0,4);
        rect(0,0,width,height);                        //cette utilisation de sin() peut faire penser à de la 3D
        fill(random(255), 0, random(255));
        noStroke();
        for (let y=doo/2;y<height;y =y+ doo){
        let angle= radians(frameCount+y/2*sin(y));
        let x = width/2+width/2*sin(angle)*sin(y);
        ellipse(x,y,doo,doo+300);
       
        }
    }



    // touche Q
    playSound(soundQ, 81)
    if (soundQ.isPlaying() == true) {
        push()
        if (xq < width) {
            xq = xq + 13
            yq = yq + 0.09
            timeq = timeq + 0.02
            graphicq.noStroke()
            graphicq.fill(noise(yq)*255, 0, noise(xq)*255)        //nouvelle utilisation de noise() pour un changement de couleur "smooth"
            graphicq.ellipse(xq, noise(yq, timeq) * 300, 50, 50)
            image(graphicq, 0, 0)

        }
        if (xq > width) {
            xq = 0

        }
        pop()
    } else {
        graphicq.background(0)
    }

    // touche R
    playSound(soundR, 82)
    if (soundR.isPlaying() == true) {

        push()
        strokeWeight(5)
        stroke(random(255), 0, random(255))
        translate(map(sin(xi) * sin(yi) * sin(yi + 26), -1, 1, 100, width - 100), map(sin(yi - 23) * sin(yi) * -sin(xi), -1, 1, 100, height - 100), 200, 40);
        
        ellipse(0, 0, 40, 40)
        rotate(xi)
        xi = xi + 0.03
        yi = yi - 0.03

        pop()


    }

    // touche S
    playSound(soundS, 83)
    if (soundS.isPlaying() == true) {
        push()
        fill(random(255), 0, random(255))
        translate(width / 2, height / 2)
        rotate(frameCount * xs)
        ellipse(0, 150, 40, 300)
        ellipse(0, -150, 40, 300)
        ellipse(150, 0, 300, 40)
        ellipse(-150, 0, 300, 40)
        xs = xs + ys
        times = times + 1
        if (times > 150) {
            ys = -0.00001
        }
        pop()
    } else {
        xs = 0;
        ys = 0.0012;
        times = 0
    }










    // touche T
    playSound(soundT, 84)
    if (soundT.isPlaying() == true) {
        push()
        var xt = random(width)
        var yt = random(height)

        stroke(random(255), 0, random(255))
        strokeWeight(4)
        line(xt, yt, 0, 0)
        pop()




    }

   
    // touche W
    playSound(soundW, 87)
    if (soundW.isPlaying() == true) {
        push()
        for (let xw = 10; xw < 20; xw++) {                                 //des millier de triangle afin de représenter le brisage d'une vitre
            for (let yw = 10; yw < 20; yw++) {
                noFill()
                stroke(random(255), 0, random(255))
                triangle(random(width), random(height), random(width), random(height), random(width), random(height))


            }


        }


pop()

    }

    // touche X
    playSound(soundX, 88)
    if (soundX.isPlaying() == true) {
     push()
     for(let x =0;x<width;x=x+100){
         fill(255,0,255)
        rect(x,height/3,10,noise(xx)*600)
        fill(0,0,255)
        ellipse(x+50,noise(xx)*400+200,50,50)
     }
     xx=xx+0.01
     pop()
}else{xx=18}

    // touche Y
    playSound(soundY, 89)
    if (soundY.isPlaying() == true) {
        push()
        fill(random(255), 0, random(255))
rect(xy,height/2,width+100,yy)
xy=xy-90
yy=yy+1

pop()
    }else{xy=2000
    yy=0}

    // touche C
    playSound(soundC, 67)
    if (soundC.isPlaying() == true) {
        push()
        back = 20
        translate(width / 2, height / 2)

        if (zc < 10) {

            rotate(xc);
            fill(noise(xc) * 255, 100, 255);

            noStroke();
            rect(-1, 300, 5, noise(yc) * nc);     //cette fois ci la fonction noise() joue sur la taille de chaques barres qui tourne autour du centre de l'écran
            nc = nc + 0.1;
            xc = xc + 0.041;
            yc = yc + 0.05;
            zc = zc + 0.01;

        }

        pop()

    } else {
        back = 255
        xc = 0;
        yc = 0;
        zc = 0;
        nc = -100;
    }

    // touche Z

    playSound(soundZ, 90)                    

    if (soundZ.isPlaying() == true) {
        push()
        noFill()
        stroke(random(255), 0, random(255), ge)
        strokeWeight(4)

        ellipseMode(CENTER)
        ellipse(pol, pol2, 500, 500)

        pol = pol + speed

        pol2 = pol2 + speed2



        if (pol > 550) {

            speed = 0
            speed2 = 20

        }

        if (pol2 > 550) {


            speed = -20
            speed2 = 0


        }

        if (pol < 450) {

            speed = 0
            speed2 = -20
        }

        if (pol2 < 450) {


            speed = 20
            speed2 = 0
        }

        if (pol > 600) {

            speed = 0
            speed2 = 20

        }

        if (pol2 > 600) {

            speed = -20
            speed2 = 0
        }

        if (pol < 400) {

            speed = 0
            speed2 = -20
        }

        if (pol2 < 400) {

            speed = 20
            speed2 = 0
        }

        if (pol > 650) {

            speed = 0
            speed2 = 20

        }

        if (pol2 > 650) {

            speed = -20
            speed2 = 0
        }

        if (pol < 350) {

            speed = 0
            speed2 = -20
        }

        if (pol2 < 350) {

            speed = 20
            speed2 = 0
        }

        if (pol > 700) {

            speed = 0
            speed2 = 20

        }

        if (pol2 > 700) {

            speed = -20
            speed2 = 0
        }
        if (pol2 > 700) {
            if (pol < 540) {



                speed2 = 0
                pol2 = 500
                pol = 500
                speed = 20
                ge = 255
            }




        }







        pop()
    }
}




function windowResized() {
    resizeCanvas(windowWidth, windowHeight)  //redimensionner le canvas 
    background(56, 120, 219, 45);

}