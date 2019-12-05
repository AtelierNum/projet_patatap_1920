var son01
var son02
var son03
var son04
var son05
var son06
var son07
var son08
var son09
var son10
var son11
var son12
var son13
var son14
var son15
var son16
var son17
var son18
var son19
var son20
var son21
var son22
var son23
var son24
var son25
var son26
var xpos = []
var ypos = []
var xtarget = []
var ytarget = []
var j1 = 0.0;
var j2 = 0.0;

function preload(){
    son01 = loadSound('../sond/128971__deadpoetsocietyband__bass-drum.wav')
    son02 = loadSound('../sond/86016__nextmaking__swing-samurai-sword.aiff')
    son03 = loadSound('../sond/104078__rutgermuller__wind-low-short.aiff')
    son04 = loadSound('../sond/147597__kendallbear__never-be-clap.wav')
    son05 = loadSound('../sond/61012__kayyy__wave2.wav')
    son06 = loadSound('../sond/128971__deadpoetsocietyband__bass-drum.wav')
    son07 = loadSound('../sond/140479__tunnelipatonki__techno-sound.wav')
    son08 = loadSound('../sond/184789__toiletrolltube__opening-bottle-2-1-7-10.wav')
    son09 = loadSound('../sond/211447__flathill__drop-coins-1.wav')
    son10 = loadSound('../sond/391539__mativve__electro-win-sound.wav')
    son11 = loadSound('../sond/232986__helenacm__air-conditioning.wav')
    son12 = loadSound('../sond/238522__ggc9__skate.wav')
    son13 = loadSound('../sond/242968__bronxio__classic-breakbeats-apache-middle-break-processed-2-bar.wav')
    son14 = loadSound('../sond/324986__kwahmah-02__coke-can-open-2.wav')
    son15 = loadSound('../sond/185535__ottorecv8__electro-kick-1.wav')
    son16 = loadSound('../sond/179955__nicolasdrweski__inversons-le-piano.aiff')
    son17 = loadSound('../sond/394962__klankbeeld__wave-close-coast-small-003.wav')
    son18 = loadSound('../sond/479450__mattiagiovanetti__single-water-drop-iv.wav')
    son19 = loadSound('../sond/48080__moca__2-9-2008-joey-misc.mp3')
    son20 = loadSound('../sond/396612__sieuamthanh__chhing01.wav')
    son21 = loadSound('../sond/488997__phonosupf__drumming.wav')
    son22 = loadSound('../sond/402147__mickael-leroi__plate-rack-4.wav')
    son23 = loadSound('../sond/479070__nox-sound__impact-stone-water-02.wav')
    son24 = loadSound('../sond/203522__jack-master__drum-1.wav')
    son25 = loadSound('../sond/492536__soundflakes__stone-door-shuted-01.wav')
    son26 = loadSound('../sond/444407__mootmcnoodles__slap.wav')
}
    



function setup() {
 createCanvas(windowWidth, windowHeight)
 background(0);

 
 for (var i = 0; i < 50; i++) {
    // ajouter des éléments au dessus de notre canvas
    xpos.push(random(0, width))
    ypos.push(random(0, -height))
    // ajouter des éléments à l'intérieur de notra canvas
    xtarget.push(random(width))
    ytarget.push(random(height))
}
}

function draw() { 
    background(25, 0, 0);

    playSound(son01, 65)// A //
     {   if (son01.isPlaying() == true) {
            push();
            translate(width * 0.5, height * 0.5);
            var ang = map(son01.currentTime(), 3, son01.duration(), 0, 3 * PI);
            rectMode(CENTER);
            rotate(ang);
            noStroke()
            fill(35, 35, 35,);
            rect(0, 0, width * 0.008, height * 1.0);
            pop();
        }
    }
    playSound(son02, 90) // Z //
    
       if (son02.isPlaying()==true){
        push();
        var ang = map(son02.currentTime(3), 0, son02.duration(3), 9, PI);
        translate(width * 0.3, height * 0.7);
        rotate(ang);
        rectMode(CENTER);
        stroke(100, 50, 50);
        strokeWeight(50);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 3, height * 1);
        pop();
    }

    

    playSound(son03, 69)// E //
    {
        if (son03.isPlaying() == true) {
         push();
            translate(width * 0.5, height * 0.5);
            var ang = map(son03.currentTime(), 0, son03.duration(), 0, PI);
            rectMode(CENTER);
            rotate(ang);
            stroke(170, 124, 80)
            strokeWeight(5)
            noFill();
            rect(0, 0, width * 0.25, height * 0.25);
            stroke(0, 0, 0);
        pop();
        }
    }

    playSound(son04, 82)// R //
    if (son04.isPlaying() == true) {
        push();
        var rad = map(son04.currentTime(), 0, son04.duration(), 10, width);
        stroke(70, 124, 200)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.5, height * 0.5, rad, rad);
        pop();
    }
    playSound(son05, 84)// T //
    if (son05.isPlaying() == true) {
        push();
        var rad = map(son05.currentTime(), 0, son05.duration(), 2, width);
        stroke(140, 100, 100)
        strokeWeight(15)
        noFill();
        rectMode(CENTER)
        rect(0, height * 0.8, rad, rad);
        pop();

        push();
        var rad = map(son05.currentTime(), 0, son05.duration(), -2, width);
        stroke(140, 100, 100)
        strokeWeight(15)
        noFill();
        rectMode(CENTER)
        rect(width, height * 0.8, rad, rad);
        pop();
        
    }
    playSound(son06, 89)// Y //
    if (son06.isPlaying() == true) {

        push();
        push();
        var radius = map(son06.currentTime(), 0, son06.duration(), 130, 800);
        fill(255, 235, 100);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;

        push();
        var radius = map(son06.currentTime(), 0, son06.duration(), 110, 700);
        fill(201, 108, 122);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(son06.currentTime(), 0, son06.duration(), 90, 600);
        fill(255, 235, 100);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;

        push();
        var radius = map(son06.currentTime(), 0, son06.duration(), 70, 500);
        fill(201, 108, 142);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(son06.currentTime(), 0, son06.duration(), 50, 400);
        fill(255, 235, 100);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;

        push();
        var radius = map(son06.currentTime(), 0, son06.duration(), 300, 40);
        fill(201, 108, 142);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(son06.currentTime(), 0, son06.duration(), 10, 120);
        fill(255, 235, 100);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;
        pop();


    }
    playSound(son07, 85)// U //
    if (son07.isPlaying() == true) {
        push();
        push();
        var radius = map(son07.currentTime(), 0, son07.duration(), 100, 500);
        noFill();
        stroke(255, 135, 205);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.3, radius, radius)
        pop();

        push();
        var radius = map(son07.currentTime(), 0, son07.duration(), 100, 500);
        noFill();
        stroke(255, 2, 82);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(son07.currentTime(), 0, son07.duration(), 100, 500);
        noFill();
        stroke(255, 135, 172);
        strokeWeight(3)
        ellipse(width * 0.4, height * 0.4, radius, radius)
        pop();

        push();
        var radius = map(son07.currentTime(), 0, son07.duration(), 100, 500);
        noFill();
        stroke(255, 135, 205);
        strokeWeight(3)
        ellipse(width * 0.4, height * 0.6, radius, radius)
        pop();

        push();
        var radius = map(son07.currentTime(), 0, son07.duration(), 100, 500);
        noFill();
        stroke(255, 135, 172);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.7, radius, radius)
        pop();

        push();
        var radius = map(son07.currentTime(), 0, son07.duration(), 100, 500);
        noFill();
        stroke(255, 135, 205);
        strokeWeight(3)
        ellipse(width * 0.6, height * 0.6, radius, radius)
        pop();

        push();
        var radius = map(son07.currentTime(), 0, son07.duration(), 100, 500);
        noFill();
        stroke(255, 135, 172);
        strokeWeight(3)
        ellipse(width * 0.6, height * 0.4, radius, radius)
        pop();
        pop();
    }
    playSound(son08, 73)// I //
    { 
        if (son08.isPlaying()==true){
        let r = map(son08. currentTime(), 0, son08.duration(), 0, width)
        fill(100, 25, 0)
        ellipse(width*0.5, height*0.5, r, r)

    }
}
    playSound(son09, 79)// O //
     if (son09.isPlaying() == true) {
        push();
        var rad = map(son09.currentTime(), 0, son09.duration(), width, 10);
        stroke(250, 250, 250);
        strokeWeight(4)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.25, rad * 2, rad);
        pop();
        push();
        var rad = map(son09.currentTime(), 0, son09.duration(), width, 10);
        stroke(250, 250, 250)
        strokeWeight(4)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.75, rad * 2, rad);
        pop();

        push();
        var rad = map(son09.currentTime(), 0, son09.duration(), width, 10);
        stroke(250, 250, 250)
        strokeWeight(4)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.25, rad * 2, rad);
        pop();

        push();
        var rad = map(son09.currentTime(), 0, son09.duration(), width, 10);
        stroke(250, 250, 250)
        strokeWeight(4)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.75, rad * 2, rad);
        pop();
    }
    playSound(son10, 80)// P //
    if (son10.isPlaying() == true) { 
        push();
        var angle = map(son10.currentTime(), -100, son10.duration(), -100, PI);
        translate(width, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(150, 0, 250);
        rect(350, 800, width * 0.2, height * 0.4);
        pop();
        push();
        var angle = map(son10.currentTime(), 100, son10.duration(), 300, PI);
        translate(width, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(150, 0, 250);
        rect(100, 900, width * 0.1, height * 0.2);
        pop();
        push();
        var angle = map(son10.currentTime(), -100, son10.duration(), -50, PI);
        translate(width, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(150, 0, 250);
        rect(100, 900, width * 0.1, height * 0.2);
        pop();

    }
    playSound(son11, 81)// Q //
    { 
        if (son11.isPlaying() == true) {
        push();
        translate(width * 0.2, height * 0.2);
        rotate(frameCount / 1.0);
        star(0, 0, 1500, 40, 100);
        pop();
        function star(x, y, radius1, radius2, npoints) {
            var angle = TWO_PI / npoints;
            var halfAngle = angle / 2.0;
            beginShape();
            for (var a = 0; a < TWO_PI; a += angle) {
                var sx = x + cos(a) * radius2;
                var sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
            endShape(CLOSE);
            pop();
        }
    }
}
    
    playSound(son12, 83)// S //
    if (son12.isPlaying() == true) {
        push();
        var rotation = map(son12.currentTime(), 0, son12.duration() / 12, 0, PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(255)
        rect(height * 0.2162, height * 0.3243, width * 0.5, width * 0.05)
        pop();
    }

    playSound(son13, 68)// D //
    if (son13.isPlaying() == true) {
        push();
        rectMode(CENTER)

        push();
        var radius = map(son13.currentTime(), 0, son13.duration(), 400, 600);
        fill(180, 0, 40);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        noStroke();
        fill(255, 221, 243)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(10, 40, 100, 45)
        pop()

        push();
        noStroke();
        fill(255, 111, 43)
        translate(width * 0.4, height * 0.4)
        rotate(PI / 4)
        rect(100, 70, 100, 20)
        pop()

        pop();

    }
    playSound(son14, 70)// F //
    if (son14.isPlaying() == true) {
        push()
        var rad = map(son14.currentTime(), 0, son14.duration(), 10, width / 5)
        fill(170, 124, 20)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        stroke(0);
        strokeWeight(60)
        noFill();
        pop()
    }
    playSound(son15, 71)// G //
    if (son15.isPlaying() == true) {
        push()
        j1 = j1 + 0.3;
        j2 = cos(j1) * 2;
        translate(width * 0.5, height * 0.5);
        scale(j2);
        noFill();
        stroke(109, 60, 60);
        strokeWeight(3);
        rect(0, 0, width / 5, height / 4);
        pop()
    }
    playSound(son16, 72)// H //
    if (son16.isPlaying() == true) {
        push();
        var rad = map(son16.currentTime(), 0, son16.duration(), 10, width);
        stroke(250, 200, 0);
        strokeWeight(40)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.25, rad * 2, rad);
        pop();

        push();
        var rad = map(son16.currentTime(), 0, son16.duration(), 10, width);
        stroke(250, 200, 0)
        strokeWeight(40)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.75, rad * 2, rad);
        pop();

        push();
        var rad = map(son16.currentTime(), 0, son16.duration(), 10, width);
        stroke(250, 200, 0)
        strokeWeight(40)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.25, rad * 2, rad);
        pop();

        push();
        var rad = map(son16.currentTime(), 0, son16.duration(), 10, width);
        stroke(250, 200, 0)
        strokeWeight(40)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.75, rad * 2, rad);
        pop();
    }
    playSound(son17, 74)// J //
    if (son17.isPlaying() == true) {
        rectMode(CENTER);


        push()
        stroke(70, 24, 0)
        strokeWeight(5)
        noFill()
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, 2.5, 2.5)
        pop()

        push()
        stroke(70, 24, 0)
        strokeWeight(3)
        noFill()
        translate(width * 0.25, height * 0.5)
        var ang = map(son17.currentTime(), 0, son17.duration(), 0, -PI);
        rectMode(CENTER)
        rotate(ang)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        stroke(70, 24, 0)
        strokeWeight(3)
        noFill()
        translate(width * 0.75, height * 0.5)
        var ang = map(son17.currentTime(), 0, son17.duration(), 0, PI);
        rectMode(CENTER)
        rotate(ang)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

    }
    playSound(son18, 75)// K //
    if (son18.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.2);
        noFill();
        stroke(190, 190, 190);
        strokeWeight(3);
        beginShape();
        vertex(-width / 4, height / 4.6);
        vertex(-width / 15, height / 4.6);
        vertex(0, 0);
        vertex(width / 15, height / 4.6);
        vertex(width / 4, height / 4.6);
        endShape();
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        noFill();
        stroke(190, 190, 190);
        strokeWeight(3);
        beginShape();
        vertex(-width / 4, height / 4.6);
        vertex(-width / 15, height / 4.6);
        vertex(0, height / 2.5);
        vertex(width / 15, height / 4.6);
        vertex(width / 4, height / 4.6);
        endShape();
        pop();

        push()
        noStroke();
        var rotation = map(son18.currentTime(), 0, son18.duration(), 10, PI);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.55);
        rotate(rotation);
        fill(107, 13, 13, );
        rect(0, 0, width * 0.09, width * 0.09);
        pop();

    }
    playSound(son19, 76)// L //
    if (son19.isPlaying() == true) {
        push();
        var ang = map(son19.currentTime(3), 0, son19.duration(3), 8, PI);
        translate(width * 0.2, height * 0.4);
        rotate(ang);
        rectMode(CENTER);
        stroke(250, 250, 250);
        strokeWeight(20);
        fill(0, 0, 0,);
        translate(width * 0.15, height * 0.4);
        rotate(PI / 1);
        rect(0, 0, width * 0.2, width * 0.2);
        pop();

        
    
        push();
        var ang = map(son19.currentTime(3), 0, son19.duration(3), 8, PI);
        translate(width * 0.1, height * 0.4);
        rotate(ang);
        rectMode(CENTER);
        stroke(150, 150, 150)
        strokeWeight(20)
        fill(32, 0, 0,)
        translate(width * 0.35, height * 0.6)
        rotate(PI / 1)
        rect(0, 0, width * 0.4, width * 0.2)
        pop();

        
    }

    playSound(son20, 77)// M //
   {
       if (son20.isPlaying() == true) {
    push();
    stroke(250, 250, 250);
    strokeWeight(1);
    fill(0, 0, 0,);
    translate(width * 0.25, height * 0.5);
    rotate(PI / 4);
    rect(0, 0, width * 0.2, width * 0.2);
    pop();

    push();
    stroke(250, 250, 250)
    strokeWeight(1)
    fill(0, 0, 0,)
    translate(width * 0.75, height * 0.5)
    rotate(PI / 4)
    rect(0, 0, width * 0.2, width * 0.2)
    pop();

    push();
    stroke(250, 250, 250)
    strokeWeight(200)
    fill(250, 250, 250)
    translate(width * 0.5, height * 0.5)
    rotate(PI / 4)
    rectMode(CENTER);
    rect(0, 0,)
    pop();

    pop();
   }
   }
    playSound(son21, 87)// W //
    if (son21.isPlaying() == true) {
        var t = map(son21.currentTime(), 0, son21.duration() * 0.75, 0, 1)
        var grey = map(son21.currentTime(), son21.duration() * 0.75, son21.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        push()
        noFill()
        stroke(184, 44, 83)
        strokeWeight(2)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            rect(x, y, random(x), random(y))
        }
        pop()
    }
    playSound(son22, 88)// X //
    if (son22.isPlaying() == true) {
        push();
        var radius = map(son22.currentTime(), 0.39, son22.duration(), 600, width * 0.01);
        noStroke();
        background(80, 20, 50);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius * 0.6, radius * 0.5);
        pop();

    }
    playSound(son23, 67)// C //
    if (son23.isPlaying() == true) { 
        push();
        var t = map(son23.currentTime(), 0, son23.duration() * 0.75, 0, 1)
        var grey = map(son23.currentTime(), son23.duration() * 0.75, son23.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        stroke(250, 50, 50);
        strokeWeight(1);
        fill(0, 0, 0, 0);
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 105, 105)
        }
        pop();
    }
    playSound(son24, 86)// V //
    if (son24.isPlaying() == true) {
        push()
        var t = map(son24.currentTime(), 0, son24.duration() * 0.75, 0, 1)
        var grey = map(son24.currentTime(), son24.duration() * 0.75, son24.duration(), 255, 0) // permet que l'animation disparaisse en douceur
        t = constrain(t, 0, 1)
        grey = constrain(grey, 70, 255)
        fill(grey)
        for (var i = 0; i < 500; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            noStroke();
            for (let i = 0; i < 10; i++) {
                ellipse(x, y, height * 0.0324, height * 0.0216, height * 0.2162);
                rotate(PI / 5);
            }
        }

        pop()
    }
    playSound(son25, 66)// B //
    if (son25.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(son25.currentTime(), 0, son25.duration(), 0, 2 * PI / 2);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(width * 0.2, height * 0.2, width * 0.003, height * 0.5);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(son25.currentTime(), 1, son25.duration(), 0, 2 * PI);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(width * 0.1, height * 0.1, width * 0.003, height * 0.5);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(son25.currentTime(), 0.5, son25.duration(), 0, 2 * PI / 4);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(width * 0.3, height * 0.3, width * 0.003, height * 0.5);
        pop();
    }
    playSound(son26, 78)// N //
    if (son26.isPlaying() == true) {
        push();
        var rad = map(son26.currentTime(), 0, son26.duration(), -10, width);
        stroke(163, 26, 26)
        strokeWeight(50)
        noFill();
        rectMode(CENTER)
        rect(width, height * 0.5, rad, rad);
        pop();
    }


    
}


function playSound(sond, keyID){
    if(keyIsDown(keyID) == true && sond.isPlaying()==false){
        sond.play();
    }
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight)
    background(0, 0, 0);
}

function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius2;
        var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

