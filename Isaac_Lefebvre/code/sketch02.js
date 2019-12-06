let SonMenu01;
let SonMenu02;
let SonMenu03;
let SonMenu04;
let SonMenu05;
let SonMenu06;
let SonMenu07FFT;
let SonMenu07;
let Poulet;
let Creeper;
let Ghast;
let Pig;
let Fire;
let Sheep;
let Shulker;
let Skeleton;
let Villager;
let Witch;
let Wolf;
let Zombie;
let Pigman;
let SonRain;
let SonGuardian;
let SonSilverfish;
let SonSlime;
let SonEnderDragon;
let SonPhantom;
let SonBlaze;

let a=0;
let angle=2;
let d;
let ang;
let step;
let f = 120;
let n = 0;
let h = 0;
let g = 0;
let w = 1;
let z = 0;
let q = 1;
let m = 1;
let l = 1;
let nb = 1;
let rd;
let rd2;
let rd3;
let ec = 1;
let al1;
let al2;
let al3;
let al4;
let al5;
let al6;
let al7;
let al8;
let random1;
let random2;
let random3;
let nbs = 1;
let sf = 1;
let vt = 1;
let gros = 1;
let diametre = 100;

let Dirt;
let Villagerimg;
let jus = 255;
let vie = 50;


function preload() {
    SonRain = loadSound('assets/Rain.wav')
    SonMenu01 = loadSound('assets/Beginning_2.wav')
    SonMenu02 = loadSound('assets/Dry_hands.wav')
    SonMenu03 = loadSound('assets/Floating_trees.wav')
    SonMenu04 = loadSound('assets/Key.wav')
    SonMenu05 = loadSound('assets/Moog_city_2.wav')
    SonMenu06 = loadSound('assets/Mutation.wav')
    SonMenu07 = loadSound('assets/Wet_hands.wav')
    SonPoulet = loadSound('assets/Chicken_hurt1.wav')
    SonCreeper = loadSound('assets/Creeper_fuse.wav')
    SonGhast = loadSound('assets/Ghast_moan5.wav')
    SonPig = loadSound('assets/Pigdeath.wav')
    SonFire = loadSound('assets/Player_hurt_fire.wav')
    SonSheep = loadSound('assets/Sheep3.wav')
    SonShulker = loadSound('assets/Shulker_idle6.wav')
    SonSkeleton = loadSound('assets/Skeleton_death.wav')
    SonVillager = loadSound('assets/Villageraccept2.wav')
    SonWitch = loadSound('assets/Witch_ambient.wav')
    SonWolf = loadSound('assets/Wolf_death.wav')
    SonZombie = loadSound('assets/Zombie_death.wav')
    SonPigman = loadSound('assets/Zpigidle1.wav')
    SonBlaze = loadSound('assets/Blaze.wav')
    SonEnderDragon = loadSound('assets/EnderDragon.wav')
    SonSilverfish = loadSound('assets/Silverfish.wav')
    SonPhantom = loadSound('assets/Phantom.wav')
    SonSlime = loadSound('assets/Slime.wav')
    SonGuardian = loadSound('assets/Guardian.wav')

    Dirt = loadImage('assets/dirt.jpg')
    Villagerimg = loadImage('assets/Villager.jpg')
    Fireimg = loadImage('assets/Fire.png')
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    d = 5;
    ang = 0;
    step = TWO_PI/12;
    //Donne des valeurs randoms pour chaque rafraichissement de page
    rd = random(255);
    rd2 = random(255);
    rd3 = random(255);
    al1 = random (width);
    al2 = random (width);
    al3 = random (width);
    al4 = random (width);
    al5 = random (height);
    al6 = random (height);
    al7 = random (height);
    al8 = random (height);

    //Definition de SonMenuFFT, avec longueur
    SonMenu07FFT = new p5.FFT(0.8, 512);
    SonMenu07FFT.setInput(SonMenu07);
}






function draw() {
    background(vie,50);


    //Touche K
    playSound(SonEnderDragon, 75);
    if (SonEnderDragon.isPlaying() == true) {
    push();
    translate(width/2, height/2); //Centre le repere
    rectMode(CENTER);
    fill(37, 253, 233);
    noStroke();
    rect(width,0, width-m, height);
    m += 300;
    pop();
    endShape();
    }else{
        m = 1;
    }


    //Touche Q
    playSound(SonMenu01, 81);
    if (SonMenu01.isPlaying() == true) {
    SonMenu02.stop();
    SonMenu03.stop();
    SonMenu04.stop();
    SonMenu05.stop();
    SonMenu06.stop();
    SonMenu07.stop();
    // faire de r, une variable dependant du temps du son, qui grandit jusque width/2 a 1/10em du son
        let r = map(SonMenu01.currentTime(), 0, SonMenu01.duration()*0.10, 0, width / 2);
    // faire de angle, une variable qui augmente avec le son
        let angle = map(SonMenu01.currentTime(), 0, SonMenu01.duration()*0.5, 0, TWO_PI);
    //valeur maximum de r = width/2
        r = constrain(r, 0, width / 2);
        push();
        imageMode(CENTER);
        translate(width / 2, height / 2)
        rotate(angle);
    //genere l'image Dirt
        image(Dirt, 0, 0, r, r);
        pop();
    } 



    //Touche W
    playSound(SonRain, 87);
    if (SonRain.isPlaying() == true) {
    push();
    //cree une boucle de 15 elements, qui apparaissent et disparaissent rapidement
    for (let i = 0; i < 15; i++){
        noFill();
        stroke(38, 196, 236);
        strokeWeight(5);
        ellipse(random(width), random(height), random(40+a, 100+a));
    }
    a += 0.5;
    pop();
    }else{
        a=0;
    }


    //Touche E
    playSound(SonPoulet, 69);
    if (SonPoulet.isPlaying() == true) {
        push()
        translate(width/2, height/2);
        var x = d * sin(ang);
        var y = d * cos(ang);
        noStroke();
        fill(255,100,100);
        ellipse(x, y, 10);
        ang = ang + step;
        pop();
        d+=10;
        fill(255,100,100);
        noStroke();
        ellipse(width/2,height/2,f,f);
        f-=10;
    }else{
        d=5;
        f=120;
    }
    

    //Touche R
    playSound(SonVillager, 82);
    if (SonVillager.isPlaying() == true) {
    push();
    imageMode(CENTER);
    image(Villagerimg, width/2, height/4, 200, 300+n);
    n+=5;
    pop();
    }else{
        n=0;
    }

    //Touche T
    playSound(SonFire, 84);
    if (SonFire.isPlaying() == true) {
    push();
    for (let i = 0; i < 15; i++){
        image(Fireimg, random(width), random(height), random(40+a, 70+a), random(40+a, 70+a));
    }
    a += 0.5;
    pop();
    }else{
        a=0;
    }


    //Touche Y
    playSound(SonSkeleton, 89);
    if (SonSkeleton.isPlaying() == true) {
    push();
    translate(width/8, height/2);
    stroke(255);
    strokeWeight(random(2,6));
    line(0, 0, random(-5000, 5000), random(-5000, 5000));
    pop();

    push();
    translate(7*width/8, height/2);
    stroke(255);
    strokeWeight(random(2,6));
    line(0, 0, random(-5000, 5000), random(-5000, 5000));
    pop();

    }



    //Touche U
    playSound(SonMenu02, 85);
    if (SonMenu02.isPlaying() == true) {
    SonMenu01.stop();
    SonMenu03.stop();
    SonMenu04.stop();
    SonMenu05.stop();
    SonMenu06.stop();
    SonMenu07.stop();
    push();
    translate(width/2, height/2);
    rectMode(CENTER);
    noFill();
    stroke(240, 195, 0);
    strokeWeight(5);
    rect(0, 0, 20+2.15*h, 20+h);
    h +=5;
    if(h>height-20){
        h = -h;
    }
    pop();
    }


    //Touche I
    playSound(SonShulker, 73);
    if (SonShulker.isPlaying() == true) {
        SonMenu01.stop();
        SonMenu02.stop();
        SonMenu03.stop();
        SonMenu04.stop();
        SonMenu05.stop();
        SonMenu06.stop();
        SonMenu07.stop();
        SonPoulet.stop();
        SonCreeper.stop();
        SonGhast.stop();
        SonPig.stop();
        SonFire.stop();
        SonSheep.stop();
        SonSkeleton.stop();
        SonVillager.stop();
        SonWitch.stop();
        SonWolf.stop();
        SonZombie.stop();
        SonPigman.stop();
        SonRain.stop();
        SonBlaze.stop();
        SonEnderDragon.stop();
        SonSilverfish.stop();
        SonPhantom.stop();
        SonSlime.stop();
        SonGuardian .stop();
        //rafraichis la page
        document.location.reload(true);
    }


    //Touche O
    playSound(SonSheep, 79);
    if (SonSheep.isPlaying() == true) {
    jus = 50;
    push();
    fill(255);
    noStroke();
    rect(0, 0*height/16+1, random(20,400)+g, height/16);
    rect(0, 1*height/16+1, random(20,400)+g, height/16);
    rect(0, 2*height/16+1, random(20,400)+g, height/16);
    rect(0, 3*height/16+1, random(20,400)+g, height/16);
    rect(0, 4*height/16+1, random(20,400)+g, height/16);
    rect(0, 5*height/16+1, random(20,400)+g, height/16);
    rect(0, 6*height/16+1, random(20,400)+g, height/16);
    rect(0, 7*height/16+1, random(20,400)+g, height/16);
    rect(0, 8*height/16+1, random(20,400)+g, height/16);
    rect(0, 9*height/16+1, random(20,400)+g, height/16);
    rect(0, 10*height/16+1, random(20,400)+g, height/16);
    rect(0, 11*height/16+1, random(20,400)+g, height/16);
    rect(0, 12*height/16+1, random(20,400)+g, height/16);
    rect(0, 13*height/16+1, random(20,400)+g, height/16);
    rect(0, 14*height/16+1, random(20,400)+g, height/16);
    rect(0, 15*height/16+1, random(20,400)+g, height/16);
    g += 55;
    endShape();
    pop();
    }else{
        SonSheep.stop();
        g=0;
        jus = 255;
    }



    //Touche P
    playSound(SonCreeper, 80);
    if (SonCreeper.isPlaying() == true) {
    push();
    vie +=1;
    jus = 50;
    pop();
    }else{
        vie = 50;
        jus = 255;
    }



    //Touche A
    playSound(SonPig, 65);
    if (SonPig.isPlaying() == true) {
    push();
        rectMode(CENTER);
        fill(255, 111, 125);
        noStroke();
        rect(0+w, height/2, 600, 300);
        rect(width-w, height/2, 600, 300);
        w+=40;
    pop();
    }else{
        w = 1;

    }


    //Touche S
    playSound(SonMenu03, 83);
    if (SonMenu03.isPlaying() == true) {
        SonMenu02.stop();
        SonMenu01.stop();
        SonMenu04.stop();
        SonMenu05.stop();
        SonMenu06.stop();
        SonMenu07.stop();
        push();
        translate(width/2, height/2);
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(0,0,600-z,300);
        rect(width-z, 0, 600, 300);
        rect(-width+z, 0, 600, 300);

            z+= 10;
        pop();
    }else{
        z=0;
    }



    //Touche D
    playSound(SonWolf, 68);
    if (SonWolf.isPlaying() == true) {

        push();
        ellipseMode(CENTER);
        fill(0);
        stroke(255);
        strokeWeight(30);
        ellipse( 3*width/8, height/3, 50,50);
        ellipse( 5*width/8, height/3, 50,50);
        pop();

        push();
        ellipseMode(CENTER);
        noFill();
        stroke(0);
        strokeWeight(30);
        arc(width/2, 2*height/3, 300, 300, PI, 0);
        pop();       
    }
    


    //Touche F
    playSound(SonBlaze, 70);
    if (SonBlaze.isPlaying() == true) {
        noStroke();
        // une forme sur deux change de couleur
        if (frameCount %2 == 0){
        fill(235,240,27);
        }else{
        fill (0);
        } 
        push();
        translate (random(width), random(height));
        rotate(PI/random(1,8));
        scale(random(4,8));
        rect(0,0,50,10);
        pop();
        }



    //Touche G
    playSound(SonMenu04, 71);
    if (SonMenu04.isPlaying() == true) {
        SonMenu02.stop();
        SonMenu01.stop();
        SonMenu03.stop();
        SonMenu05.stop();
        SonMenu06.stop();
        SonMenu07.stop();
        push();
        noStroke();
        fill(254, 150, 160);
        ellipse(width/2, height/2, 100+q, 100+q);
        noStroke();
        fill(254, 150, 160, 0.5);
        ellipse(width/2, height/2, 50+q, 50+q);
        noStroke();
        fill(254, 191, 210, 0.5);
        ellipse(width/2, height/2, 10+q, 10+q);

        q+= 5;

        if (q > 900 || -q < -900){
            q = -q;
        }
        pop();
    }else{
        q=0;
    }



    //Touche H
    playSound(SonPhantom, 72);
    if (SonPhantom.isPlaying() == true) {
    push();
    translate(width, 0);
    for (let i = 0; i < 15; i++){
    stroke(255);
    noFill();
    line(0,0, random(width), random(height));
    pop();
    }
    }




    //Touche J
    playSound(SonPigman, 74);
    if (SonPigman.isPlaying() == true) {
        push();
        for (let i = 0; i < 15; i++){
            fill(random(255));
            noStroke();
            ellipse(random(width), random(height), random(1,300));
        }
        pop();
    }



    //Touche L
    playSound(SonMenu05, 76);
    if (SonMenu05.isPlaying() == true) {
        SonMenu02.stop();
        SonMenu01.stop();
        SonMenu04.stop();
        SonMenu01.stop();
        SonMenu06.stop();
        SonMenu07.stop();

        push();
        noFill();
        stroke(255);
        strokeWeight(1);
        translate(width/2, height/2);
        ellipse(0,0,10+1*l,10+1*l);
        ellipse(0,0,10+2*l,10+2*l);
        ellipse(0,0,10+3*l,10+3*l);
        ellipse(0,0,10+4*l,10+4*l);
        ellipse(0,0,10+5*l,10+5*l);
        ellipse(0,0,10+6*l,10+6*l);
        ellipse(0,0,10+7*l,10+7*l);
        ellipse(0,0,10+8*l,10+8*l);
        ellipse(0,0,10+9*l,10+9*l);
        ellipse(0,0,10+10*l,10+10*l);
        pop();
        l+=1;

        }else{
            l=1;
        }

        if (l>width/2){
            l=-l;
        }
        if (l<0){
            for (let i = 0; i < 15; i++){
                noFill();
                stroke(random(255));
                ellipse(random(width), random(height), random(1,300));
            }
        }


    //Touche Z
    playSound(SonWitch, 90);
    if (SonWitch.isPlaying() == true) {
        push();
        fill(rd, rd2, rd3);
        rectMode(CENTER);
        noStroke();
        rect(0, height/6, random(40,400)+nb, height/3),
        rect(width, height/2, random(40,400)+nb, height/3);
        rect(0, 5*height/6, random(40,400)+nb, height/3);
        nb += 100;
        endShape();
        pop();
    }else{
        nb = 1;
    }

    // Touche X
    playSound(SonMenu06, 88);
    if (SonMenu06.isPlaying() == true) {
        SonMenu02.stop();
        SonMenu01.stop();
        SonMenu04.stop();
        SonMenu05.stop();
        SonMenu03.stop();
        SonMenu07.stop();

    push();
    noStroke();
    if (frameCount %30 == 0){
    random1 = random(255);
    random2 = random(255);
    random3 = random(255);
    }
    fill(random1, random2, random3)
    ellipseMode(CENTER);
    ellipse(width/2, height/2, 50+ec, 50+ec);
    ellipse(al1, al5, 50+ec, 50+ec);
    ellipse(al2, al6, 50+ec, 50+ec);
    ellipse(al3, al7, 50+ec, 50+ec);
    ellipse(al4, al8, 50+ec, 50+ec);
        ec += 0.5;
    if(ec>300){
        ec -= 0.5;
        for (let i = 0; i < 5; i++) {
            noFill()
            stroke(random1, random2, random3);
            strokeWeight(20);
            line(width/2, height /2, random(width), random(height));
            line(al1, al5, random(width), random(height));
            line(al2, al6, random(width), random(height));
            line(al3, al7, random(width), random(height));
            line(al4, al8, random(width), random(height));
        }
    }
    pop();
    }


    //Touche C
    playSound(SonGhast, 67);
    if (SonGhast.isPlaying() == true) {
        push();
        noStroke();
        fill(255, 100);
        rect(0, 0, 0+nbs, 0+nbs);
        noStroke();
        fill(0);
        ellipse(width, height, 50+nbs, 50+nbs);
        nbs += 100;
        pop();
    }


    //Touche V
    playSound(SonSlime, 86);
    if (SonSlime.isPlaying() == true) {
        push();
        rectMode(CENTER);
        noStroke();
        fill(135, 233, 144);
        rect(width/2, height/2, 560+random(15), 560+random(15));

        noStroke();
        fill(84, 249, 141);
        rect(width/2, height/2, 500+random(15), 500+random(15));
        pop();
    }


    //Touche B
    playSound(SonSilverfish, 66);
    if (SonSilverfish.isPlaying() == true) {
        push();
        rectMode(CENTER);
        noStroke();
        fill(150);
        rect(0 + random(10), height/16 + sf, 50, 100);
        rect(width/4 + random(10), 0 + sf, 50, 100);
        rect(width/2 + random(10), 50 + sf, 50, 100);
        rect(3*width/4 + random(10), 300 + sf, 50, 100);
        rect(width + random(10), 10 + sf, 50, 100);
        rect(0 + random(10), height/8 + sf, 50, 100);
        rect(width/4 + random(10), height/2 + sf, 50, 100);
        rect(width/2 + random(10), height/2+100 + sf, 50, 100);
        rect(3*width/4 + random(10), height+300 + sf, 50, 100);
        rect(width + random(10), 4*height/5 + sf, 50, 100);
        sf+=10;
        pop();
    }else{
        sf = 1;
    }

    //Touche N
    playSound(SonGuardian, 78);
    if (SonGuardian.isPlaying() == true) {
        push();
        rectMode(CENTER);
        noStroke();
        fill(rd, rd2, rd3);

        rect(width/2, 0 + vt, 500 + gros, 500);

        vt += 10;
        gros += 2;

        if(vt>height/2){
            gros -= 4;
        }
        pop();
    }else{
        gros = 1;
        vt = 1;
    }



    
    //Touche M
    playSound(SonMenu07, 77);
    if (SonMenu07.isPlaying() == true) {
        SonMenu02.stop();
        SonMenu01.stop();
        SonMenu04.stop();
        SonMenu05.stop();
        SonMenu03.stop();
        SonMenu06.stop();
        
        fill (0,2);
        rect(0,0,width,height);
        fill(255, 128, 0);
        noStroke();

        for (let y = diametre/2; y < height; y = y + diametre){
            let ange = radians(frameCount+ y);
            let x =width/2 + width/2 * sin(ange);
            ellipse(x ,y, diametre, diametre);
    }
}

    textSize(32);
    fill(jus);
    noStroke();
    text('Reload with I', 15*width/16, 40);
}

function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}