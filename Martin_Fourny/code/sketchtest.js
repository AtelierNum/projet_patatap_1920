let sound01;
let sound02;
let sound03;
let sound03FFT; //cette variable va stocker un objet permettant d' effectuer une analyse audio sur le son 'sound03'
let sound04
let sound05
let sound05FFT;
let sound06
let sound06FFT;
let sound07
let sound08
let sound09
let sound010
let sound010FFT;
let sound011
let drone1
let drone1FFT;
let sound013
var stab2
var stab2Amp
let sound014
let sound014FFT;
let sound015
let sound015FFT;
let sound016
let sound017
let sound018
let sound019
let sound020

let sound022
let sound023
let sound024
let sound024FFT;
let sound025
let sound026
var long
let backColor

let xpos17 = []
let ypos17 = []
let xtarget17 = []
let ytarget17 = [] //créer une variable classique puis de faire suivre son nom de crochets "[" et "]" 
//------------------------------------------------------
// touche G
var pg // une variable pour créer un calque dans lequel on va pouvoir dessiner
var pg30

// quelques variables pour créer une animation de balle qui rebondit sur les bords de la fenêtre mais dont la trace restera affichée.
var xpos1 = 0
var ypos1 = 0
var xdir = 5
var ydir = 5
// ----------------------------------------------------------------------------------

var xpos18 = []
var ypos18 = []
var xtarget18 = []
var ytarget18 = []


//-----------------------------------------------------------------------------------------
var xpos19 = []
var ypos19 = []
var xtarget19 = []
var ytarget19 = []
//___________________________________________________________________

var anim3 = {
    x: 0,
    rot: 0
}
//________________________________________________________________________
var sound021
var anim1 = {
    w: 0
}
//______________________________________________________________________________
var theta
var yvalues


//________________________________________________________________________________
var xspacing = 8
var maxwaves = 4; 
var theta = 0.0; 
var amplitude = new Array(maxwaves); 
var dx = new Array(maxwaves); 
var yvalues; 
//________________________________________________________________________________
var nrj5
var long5
//-------------------------------------------------------------------------------------
var xpos30 = []
var ypos30 = []
var xdir30  = []
var ydir30  = []

function preload() {
   sound01 = loadSound("assets/480965__erokia__msfxp2-80.wav")
   sound02 = loadSound("assets/436520__madnessxd__robot-counting-minor-drone.wav")
   sound03 = loadSound("assets/131006__shot846__robot-letsrock-by-shot846.wav")
   sound04 = loadSound("assets/427411__mega-x-stream__robot-shutdown.wav")
   sound05 = loadSound("assets/159024__vdb4f__tr-606-modified-series-2-beat-02.wav")
   sound06 = loadSound("assets/401756__zenithinfinitivestudios__glitch-robot.wav")
   sound07 = loadSound("assets/150852__juskiddink__high-speed-passby.wav")
   sound08 = loadSound("assets/327756__edwardlin2015__flymetothemoon.wav")
   sound09 = loadSound("assets/151822__templeofhades__scratch-sample.wav")
   sound010 = loadSound("assets/436506__red19official__bd-knocky-c.wav")
   sound011 = loadSound("assets/270156__theriavirra__04c-snare-smooth-cymbals-snares.wav")
   drone1 = loadSound("assets/253597__staticpony1__hoover-3.wav")
   stab2 = loadSound("assets/352652__foolboymedia__piano-notification-2.wav")
   sound014 = loadSound("assets/288880__gellski__electrobass2.wav")
   sound015 = loadSound("assets/276609__mickleness__notification-bumptious.wav")
   sound016 = loadSound("assets/326479__orangefreesounds__modern-music-loop-130-bpm.wav")
   sound017 = loadSound("assets/76314__milton__para-elisa.wav")
   sound018 = loadSound("assets/216676__robinhood76__04864-notification-music-box.wav")
   sound019 = loadSound("assets/254819__thoribass__notification2-freesound.wav")
   sound020 = loadSound("assets/332960__ebcrosby__chord-descend.wav")
   sound021 = loadSound("assets/34828__zin__hi-snare-1.wav")
   sound022 = loadSound("assets/460892__ddmyzik__modern-tech-logo.wav")
   sound023 = loadSound("assets/458586__inspectorj__ui-mechanical-notification-01-fx.wav")
   sound024 = loadSound("assets/255038__zuluonedrop__13-cymbal.wav")
   sound025 = loadSound("assets/408241__burghrecords__alien-spaceship-landing-sci-fi-sound-effects.wav")
   sound026 = loadSound("assets/378224__mars31__armando-robot.wav")
}


function setup() { // création d'un canvas à la taille de la fenêtre du navigateur
   createCanvas(windowWidth, windowHeight)
   backColor = color( 21, 67, 96 );
   background(backColor)

   sound03FFT = new p5.FFT()
   sound03FFT.setInput(sound03)

   sound05FFT = new p5.FFT()
   sound05FFT.setInput(sound05)

   sound06FFT = new p5.FFT()
   sound06FFT.setInput(sound06)

   sound010FFT = new p5.FFT()
   sound010FFT.setInput(sound010)


   drone1FFT = new p5.FFT(0.8, 16) // premier paramètre est le smoothing, le second est le nombre de bandes de fré"quences souhaité.
   drone1FFT.setInput(drone1) // on 'branche' cet analyseur à notre son

   stab2Amp = new p5.Amplitude()
   stab2Amp.setInput(stab2)

   sound014FFT = new p5.FFT(0.90, 4096)
   sound014FFT.setInput(sound014)

   sound015FFT = new p5.FFT(0.90, 4096)
   sound015FFT.setInput(sound015)

   sound024FFT = new p5.FFT()
   sound024FFT.setInput(sound024)

   for (var i = 0; i < 50; i++) {
      // ajouter des éléments au dessus de notre canvas
      xpos17.push(random(0, width))
      ypos17.push(random(0, -height))
      // ajouter des éléments à l'intérieur de notra canvas
      xtarget17.push(random(width))
      ytarget17.push(random(height))
  
   }

   //------------------------------------------------------------
   createCanvas(windowWidth, windowHeight);
   pixelDensity(1)

   // créer le calque à la taill de la fenêtre
   pg = createGraphics(windowWidth, windowHeight)
   pg.pixelDensity(1)

   background(0); 
   //-------------------------------------------------------------
   for (var i = 0; i < 50; i++) {
      xpos18.push(random(width))
      ypos18.push(random(-height))
      xtarget18.push(random(width))
      ytarget18.push(random(height))
   
   
   }
   //------------------------------------------------------------
   sound025FFT = new p5.FFT(0.8, 16);
   sound025FFT.setInput(sound025);
   frameRate(30);
   colorMode(RGB, 255, 255, 255, 100);
   w = width + 16;

   for (var i = 0; i < maxwaves; i++) {
       amplitude[i] = random(10, 30);
       var period = random(100, 300);
       dx[i] = (TWO_PI / period) * xspacing;
   }

   yvalues = new Array(floor(w / xspacing));


   sound026FFT = new p5.FFT(0.8, 16);
   sound026FFT.setInput(sound026);
   
}
//sound01 = loadSound("../assets/485009_inspectorj_fox-vocal-cry-distant-01.wav")
//sound01.play()


function draw() { // boucle d'execution
   push()
   colorMode(RGB, 255, 255, 255)
   background(backColor)
   pop()



   // c'est A (voir le site keycode)
   playSound(sound01, 65)
   if (sound01.isPlaying() == true) {
      push()
      let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width) // dessiner un rond 
      noStroke()
      fill(246, 207, 20)
      ellipse(width * 0.5, height * 0.5, r, r)
      pop()
   }
   // Pour faire jouer un son avec une touche et faire keycode pour mettre la valeur de la touche 
   //if (mouseIsPressed) { // si la souris est clickée on dessine avec la fonction de dessin définie ci-dessous

   //EXEMPLE AVEC TOUCHE
   // if (keyIsDown(72) == true && sound02.isPlaying() == false){ //c'est H
   // sound02.play()

   // C'est E réalisé par moi (avec aide de béranger)
   playSound(sound06, 69)
   if (sound06.isPlaying() == true) {
      push()
      let rectSize = height * 0.5
      let x1 = map(sqrt(sound06.currentTime()), 0, sqrt(sound06.duration()), 0, width + rectSize) // sqrt représente racine carrée
      let x2 = map(sqrt(sound06.currentTime()), 0, sqrt(sound06.duration()), 0, width * 0.75 + rectSize)
      let x3 = map(sqrt(sound06.currentTime()), 0, sqrt(sound06.duration()), 0, width * 0.9 + rectSize)
      noStroke()
      push()
      rectMode(CENTER)
      fill(255)
      translate(x1, height * 0.5)
      rotate(PI / 4)
      rect(0, 0, rectSize, rectSize)
      pop()

      push() //push() et pop() servent à retenir les modification des éléments pour éviter de modifier d'autres formes.
      // J'ai d'ailleurs délibérément enlever certains push et pop conçernant des stroke et des fill pour que des couleurs
      // ou contours changent selon les touches appuyées. 
      rectMode(CENTER)
      fill(255)
      translate(x2, height * 0.5)
      rotate(PI / 4)
      rect(0, 0, rectSize * 0.7, rectSize * 0.7)
      pop()

      push()
      rectMode(CENTER)
      fill(255)
      translate(x3, height * 0.5)
      rotate(PI / 4)
      rect(0, 0, rectSize * 0.9, rectSize * 0.9)
      pop()


      pop()
   }

   //
   // c'est R
   playSound(sound05, 82)
   if (sound05.isPlaying() == true) {
      push()
      console.log("ok")
      noFill()
      stroke(255, 255, 255)
      let wave = sound05FFT.waveform(); // Le son va pouvoir accompagner la forme 
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



   // c'est T
   ///////// LIGNES VERTICALES
 //réalisé personnellement

   playSound(sound07, 84);
   if (sound07.isPlaying() == true) {
      push();
      strokeWeight(4)
      stroke(255, 255, 255)
      // line(30, 20, 85, 75);
      let lineSize = 0 * 0.5 //taille de la ligne
      let t = map((sound07.currentTime()), 0, (sound07.duration()), 0, 1)
      // let Y2 = map((sound07.currentTime()), 0, (sound07.duration()), 0, width * 0.75 + lineSize)
      let y = pow(abs(t), 3.5) //direction de la trajectoire vers le bas
      let angle = map((sound07.currentTime()), 0, (sound07.duration()), 0, PI / 4) // synchronisation du trajet avec le son PI/4 donne l'orientation
      fill(255)

      translate(t * width, y * height)
      rotate(angle)
      line(-50, 0, 50, 0);
      ellipse(0, 0, 5, 5)
      pop();



   }




   // c'est Y

   playSound(sound08, 89);
   if (sound08.isPlaying() == true) {
      push();
      var ntri = 35;
      var ncurrenttri = (map(sound08.currentTime(), 0, sound08.duration(), 0, ntri + 1));
      //Pour parcourir un cercle il nous suffit alors de fixer un rayon, 
      //et de faire varier un angle entre 0 et 2 PI à l'aide d'une boucle for
      for (var i = 0; i < ncurrenttri; i++) { //segments à afficher
         stroke(127, 179, 213);
         strokeWeight(4);
         noFill();
         var angle = map(i, 0, ntri, 0, TWO_PI);
         var x = width * 0.5 + height * 0.3 * cos(angle);
         var y = height * 0.5 + height * 0.3 * sin(angle);
         var x2 = width * 0.5 + height * 0.3 * cos(angle + PI / 24);
         var y2 = height * 0.5 + height * 0.3 * sin(angle + PI / 24);
         line(width * 0.5, height * 0.5, x, y, x2, y2); //triangle(width * 0.5, height * 0.5, x, y, x2, y2);
         // afficher chaque segment en calculant les coordonnées cartésiennes des extrémités.
      }

      pop();
   }


   // c'est U // réalisé par moi 
   playSound(sound04, 85);
   if (sound04.isPlaying() == true) {
      push();
      var radius = map(sound04.currentTime(), 0, sound04.duration(), 50, width);
      // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
      strokeWeight(22);
      stroke(127, 179, 213);
      noFill()
      ellipse(width * 0.5, height * 0.5, radius, radius); // * equivaut à multiplié
      pop();

      push();
      var radius = map(sound04.currentTime(), 0, sound04.duration(), 50, width);
      // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
      strokeWeight(22);
      stroke(127, 179, 213);
      noFill()
      ellipse(width * 0.5, height * 0.5, radius, radius); // * equivaut à multiplié
      pop();

      push();
      var radius = map(sound04.currentTime(), 0, sound04.duration(), 50, width * 0.9);
      strokeWeight(20);
      stroke(127, 179, 213);
      noFill()
      ellipse(width * 0.5, height * 0.5, radius, radius);
      pop();

      push();
      var radius = map(sound04.currentTime(), 0, sound04.duration(), width, 50 * 0.8);
      strokeWeight(18);
      stroke(246, 207, 20, );
      noFill()
      ellipse(width * 0.5, height * 0.5, radius, radius);
      pop();

      push();
      var radius = map(sound04.currentTime(), 0, sound04.duration(), 50, width * 0.7);
      strokeWeight(16);
      stroke(246, 207, 20, );
      noFill()
      ellipse(width * 0.5, height * 0.5, radius, radius);
      pop();

      push();
      var radius = map(sound04.currentTime(), 0, sound04.duration(), width, 50 * 0.6);
      strokeWeight(12);
      stroke(246, 207, 20, );
      noFill()
      ellipse(width * 0.5, height * 0.5, radius, radius);
      pop();
      pop();


   }

   /*playSound(sound01, 85)
   if (sound01.isPlaying() == true) {
      let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)
      stroke (33, 158, 220)
      ellipse(x,y, random(1),random(25))
   }*/


   // C'est I inspiré de Emilie Schaeffer
   playSound(sound010, 73);
   if (sound010.isPlaying() == true) {

      push();
      sound010FFT.analyze();
      ellipseMode(CENTER);
      var nrj3 = sound010FFT.getEnergy("bass");


      push();
      strokeWeight(nrj3);
      stroke(246, 207, 20, nrj3); //contours s'épaississent en fonction de FFT
      noFill();
      translate(width * 0.5, height * 0.5);
      ellipse(0, 0, width * 0.2, width * 0.2);
      pop();



      pop();
   }

   

   //C'est O
   playSound(sound011, 79)
   if (sound011.isPlaying() == true) {
      push()
      var rotation = map(sound011.currentTime(), 0, sound011.duration(), 0, PI)
      //transformer notre valeur dans un range utile pour une rotation, dans processing les rotations s'expriment en radians - et du coup entre 0 et PI pour un demi-tour et 0 et 2 PI pour un tour complet.

      rectMode(CENTER)
      translate(width * 0.5, height * 0.5) // permet d'effectuer une translation, en passant entre parenthèse les coordonnées du point vers lequel je veux le déplacer.
      rotate(rotation) //permet d'effectuer une rotation autour de l'origine de notre reprère
      noStroke()
      fill(246, 207, 20)
      rect(0, 0, width * 0.5, width * 0.05)
      pop()
   }

   //c'est P
   playSound(drone1, 80);
   if (drone1.isPlaying() == true) {
      push()
      drone1FFT.analyze();
      rectMode(CENTER);
      var nrj1 = drone1FFT.getEnergy("bass")  
      //Pour récupérer les valeurs d'une bande de fréquence particulière nous allons utiliser la méthode .getEnergy() à noter qu'il faut appeler la méthode .analyze() avant de pouvoir récupérer une valeur de getEnergy()
      //contrôller - par exemple - la transparence de deux losanges, et la taille d'un troisième
      push()
      fill(0, 200, 255, nrj1)
      translate(width * 0.25, height * 0.5)
      rotate(PI / 4)
      rect(0, 0, width * 0.2, width * 0.2)
      pop()

      push()
      fill(0, 200, 255, 50)
      translate(width * 0.5, height * 0.5)
      rotate(PI / 4)
      rect(0, 0, nrj1, nrj1)
      pop()

      push()
      fill(0, 200, 255, nrj1)
      translate(width * 0.75, height * 0.5)
      rotate(PI / 4)
      rect(0, 0, width * 0.2, width * 0.2)
      pop()

      pop()
   }



   //c'est M(eriem)

   playSound(stab2, 77) //0, 1, 210, 255
   if (stab2.isPlaying() == true) {
      push()
      // noStroke()
      colorMode(HSB, 360, 100, 100) // J'indique le passage en mode hsb
      var amp = stab2Amp.getLevel() // obtenir le niveau sonore à l'aide de notre analyseur et le stocker dans une variable nommée amp
      console.log(amp)
      var blink = map(amp,0.01,0.15,0,95)
      //var whiteLevel = map(amp, 0, 1, 210, 255) // transformer 'amp' qui est comprise entre 0 et 1 en une nouvelle valeur entre 0 et 255
      // dessiner un carré blanc de la taille de notre fenêtre dont la teinte est contrôllé par whiteLevel qui dépend elle même du 
      // niveau sonore de notre son en train de jouer.
      noStroke()
      fill( 162, 2* blink, 44) // bleu turquoise en mode hsb pour pouvoir faire une transition de couleur
      rect(0, 0, width, height)
      pop()
   //   let t = map(stab2.currentTime(), 0, stab2.duration(), 0, 1)
    // if (t > 0.97){
         backColor = color( 21, 67, 96) // couleur en rgb pour que l'on revienne d'un mode à un autre rose 255, 194, 213
     // }
   }

   //c'est S // réalisé par moi (avec aide de béranger)
   playSound(sound014, 83)
   if (sound014.isPlaying() == true){
      push()
      //fill(255,0,0)
      noFill()

      strokeWeight(1)
      stroke(246, 207, 20)
      let wave = sound014FFT.waveform();
      let nangles =int( map(sound014.currentTime(), 0, sound014.duration(), wave.length, 4))
      let nangles2 =int( map(sound014.currentTime(), 0, sound014.duration()*0.75, 50, 4))
     nangles2 = constrain(nangles2, 4, 50)
     
      beginShape()
      for (let i = 0 ; i < wave.length ; i++){
          //let angle = map(i, 0, wave.length, 0, TWO_PI)
          let angle = int(map(i, 0, wave.length, 0, nangles))*TWO_PI/nangles2
          let rad =map(wave[i], -1, 1, 0, height)

          let x = width*0.5 + rad * cos(angle)
          let y= height*0.5 + rad *sin(angle)

        //ellipse(x,y,1,1)
          curveVertex(x,y)
/* let n angle correspond aux angles du carré final, il faut deux variables car sans let nangles 2
 la forme ne se décompose pas aux niveaux des angles 
*/


      }
      endShape(CLOSE)


      pop()
  }

   /* rectMode(CENTER)
   fill(255)

   rotate(angle)
   // rect(0, 0, width, height) */


   //c'est D //réalisé par moi 
   playSound(sound015,68 )
   if (sound015.isPlaying() == true) {
      let r = map(sound015.currentTime(), 0, sound015.duration(), 0, width)
      push()
      noFill()
      strokeWeight(6)
      stroke(255, 255, 255)
      ellipse(4*0.5, 8 * 0.5, r, r)/TWO_PI
      noFill()
      stroke(255, 255, 255)
      ellipse(windowWidth-4 * 0.5, 8 * 0.5, r, r)/TWO_PI

      pop()
   
   }


   //c'est F //réalisé par moi (faire un dérivée de Y)
   playSound(sound016,70 )
   push();
   var ntri = 35;
   var ncurrenttri = (map(sound016.currentTime(), 0, sound016.duration(), 0, ntri + 1));
   for (var i = 0; i < ncurrenttri; i++) {
      stroke(127, 179, 213);
      strokeWeight(4);
      noFill();
      var angle = map(i, 0, ntri, 0, TWO_PI);
      var x = width * 0.5 + height * 0.3 * cos(angle);
      var y = height * 0.5 + height * 0.3 * sin(angle);
      var x2 = width * 0.5 + height * 0.3 * cos(angle + PI / 1000);
      var y2 = height * 0.5 + height * 0.3 * sin(angle + PI / 1000);
      line(windowWidth-width * 10, height * 10, x, y, x2, y2); //triangle(width * 0.5, height * 0.5, x, y, x2, y2);
      pop()
   }
      push(); // début du deuxième tracé, il va apparaitre en même temps que le premier 
   var ntri = 35;
   var ncurrenttri = (map(sound016.currentTime(), 0, sound016.duration(), 0, ntri + 1));
   for (var i = 0; i < ncurrenttri; i++) {
      stroke(127, 179, 213);
      strokeWeight(4);
      noFill();
      var angle = map(i, 0, ntri, 0, TWO_PI);
      var x = width * 0.5 + height * 0.3 * cos(angle);
      var y = height * 0.5 + height * 0.3 * sin(angle);
      var x2 = width * 0.5 + height * 0.3 * cos(angle + PI / 1000);
      var y2 = height * 0.5 + height * 0.3 * sin(angle + PI / 1000);
      line(width * 10, height * 10, x, y, x2, y2); //triangle(width * 0.5, height * 0.5, x, y, x2, y2);
      pop()
   }

   //c'est G
   playSound(sound017, 71)
   if (sound017.isPlaying() == true){
     
      push()
      var t = map(sound017.currentTime(), 0, sound017.duration() * 0.75, 0, 1)
      var grey = map(sound017.currentTime(), sound017.duration() * 0.75, sound017.duration(), 255, 180) //valeurs pour t et grey ne sortent pas de l'intervalle
      t = constrain(t, 0, 1)
      //grey = constrain(grey, 180, 255) La fonction constrain() permet de faire cela : elle permet "de contraindre" une variable dans un intervalle donné. 
      fill(33, 220, 169)
      for (var i = 0; i < 50; i++) {
       var x = lerp(xpos17[i], xtarget17[i], t)
        // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
       var y = lerp(ypos17[i], ytarget17[i], t)
       // on dessine une ellipse aux coordonées x et y
       ellipse(x, y, 50, 50)
      }
      pop()
      //ajouter 50 valeurs à chaque tableau à l'aide d'une boucle for() 
   }



   //c'est J
   playSound(sound018, 74)
   if (sound018.isPlaying() == true) {
      push()
      // on créé l'animation en augmentant des variables de position à l'aide des variables de direction
      xpos18 += xdir
      ypos18 += ydir
      // si une de nos coordonnées s'apprête à sortir de la fenêtre on inverse sa direction
      if (xpos18 > width || xpos18 < 0) {
          xdir *= -1
      }
      if (ypos18 > height || ypos18 < 0) {
          ydir *= -1
      }
      // on dessine dans notre calque
      pg.noStroke()
      pg.fill(255)
      pg.ellipse(xpos18, ypos18, 20, 20)

      // on affiche notre calque à l'aide de la fonction 'image' de p5js
      image(pg, 0, 0, width, height)

  } else {
      // on reset notre animation  :
      // en réinitialisant le calque
      pg = createGraphics(windowWidth, windowHeight)
      pg.pixelDensity(1)
      // et en réinitialisant les positions
      xpos18 = random(width)
      ypos18 = random(height)
      xdir18 = random(1, 7)
      ydir18 = random(1, 7)
      pop()
  }





   //c'est K Inspiré de Simon Heurtebise
   playSound(sound019, 75)
   if (sound019.isPlaying() == true) {
     
         noStroke()
         push();
         var long = map(sound019.currentTime(), 0, sound019.duration(), 25, width)
 
 
 
         rectMode(CENTER)
         fill(0, 255, 213)
         rect(width / 2, height / 2, long, 5);
         noStroke();
 
         fill(0, 255, 213)
         rect(width / 2, height / 3, long, 5);
         noStroke();
 
         fill(0, 255, 213)
         rect(width / 2, height / 1.5, long, 5);
         noStroke();
 
 
 
         pop();
     }
 
   
 
  


   //c'est L Inspiré de Simon Heurtebise
   playSound(sound020, 76)
   
   if (sound020.isPlaying() == true) {
       push()
       noStroke()
       rectMode(CENTER)
       fill(246, 207, 20)
       translate(anim3.x, height * 0.5)
       rotate(anim3.rot)
       rect(0, 0, 80, 160)
       pop()
   }


   if (keyIsDown(76)) {

       anim3 = {
           x: 0,
           rot: 0
       }

       var animationMyObject = anime({
           targets: anim3,
           x: width,
           rot: TWO_PI,
           easing: 'easeOutExpo',
           direction: 'alternate',
           loop: true,
           duration: 5000
       });
   }



   //c'est Q réalisé par moi 
  
  playSound(sound021, 81) // dérivé de la ligne qui se dessine mais en faisant la balle rebondissante
   if (sound021.isPlaying() == true) {
  push()
  xpos30 += xdir30
  ypos30 += ydir30
  if (xpos30 > width || xpos30 < 0) {
      xdir30 *= -1
  }
  if (ypos30 > height || ypos30 < 0) {
      ydir30 *= -1
  }

  pg30.noStroke()
  pg30.fill(255)
  pg30.ellipse(xpos30, ypos30, 30, 30)


  image(pg30, 0, 0, width, height)

} else {

  pg30 = createGraphics(windowWidth, windowHeight)
  pg30.pixelDensity(1)

  xpos30 = random(width)
  ypos30 = random(height)
  xdir30 = random(1, 130)
  ydir30 = random(1, 130)
  pop()
   // Cette touche va pouvoir dessiner avec la touche J en même temps 
}


   //c'est W inspiré du patatap d' Ulysse Duchamp
   playSound(sound022, 87)
   if (sound022.isPlaying() == true) {
      push();
      var nsegment = 50;
      var ncurrentsegment = (map(sound022.currentTime(), 0, sound022.duration(), 0, nsegment + 1));

      for (var i = 0; i < ncurrentsegment; i++) {
          stroke(127, 179, 213);
          strokeWeight(random(50));
          var angle = map(i, 0, nsegment, 0, TWO_PI);
          var x = width * 0.5 + height * 0.45 * cos(angle);
          var y = height * 0.5 + height * 0.45 * sin(angle);
          var xx = width * 0.5 + height * 0.45 * cos(angle);
          var yy = height * 0.5 + height * 0.45 * sin(angle);
          line(xx, yy, x, y);
      }
      pop();
  }
   


 //c'est X réalisé par moi // dérivé de Y
 playSound(sound023, 88)
 if (sound023.isPlaying() == true) {

      push();
      var nsegment = 200;
      var ncurrentsegment = (map(sound023.currentTime(), 0, sound023.duration(), 0, nsegment + 1));

      for (var i = 0; i < ncurrentsegment; i++) {
          stroke(127, 179, 213);
          strokeWeight(1);
          var angle = map(i, 0, nsegment, 0, TWO_PI);
          var x = width * 0.5 + width * cos(angle);
          var y = height * 0.5 + height * sin(angle);
          line(width * 0.5, height * 0.5, x, y);
      }
      pop();
 }

   //c'est C Inspiré de Meriem (la meilleure marraine) 
   playSound(sound024, 67)
   if (sound024.isPlaying() == true) {
      push();

      sound024FFT.analyze();
      var nrj10 = sound024FFT.getEnergy("bass")
      rectMode(CENTER)

      push();
      var radius = map(sound024.currentTime(), 0, sound024.duration(), 400, 600);
      fill(255);
      noStroke();
      ellipse(width * 0.5, height * 0.5, radius, radius)
      pop();

      push();
      noStroke();
      fill(246, 207, 20)
      translate(width * 0.5, height * 0.5)
      rotate(PI / 4)
      rect(0, 0, nrj10, nrj10)
      pop()

      pop();

  
   }


   //c'est V inspiré de Colloc Aurélien 
   playSound(sound025, 86)
   if (sound025.isPlaying() == true) {
   push()

   calcWave();
   renderWave();

   function calcWave() {
       theta += 0.04;
       for (var i = 0; i < yvalues.length; i++) {
           yvalues[i] = 0;
       }
       for (var j = 0; j < maxwaves; j++) {
           var x = theta;
           for (var i = 0; i < yvalues.length; i++) {
               if (j % 4 == 0) yvalues[i] += sin(x) * amplitude[j];
               else yvalues[i] += cos(x) * amplitude[j];
               x += dx[j];
           }
       }
   }

   function renderWave() {
       noStroke();
       fill(255);
       ellipseMode(CENTER);
       for (var x = 0; x < yvalues.length; x++) {
           ellipse(x * xspacing, width / 4 + yvalues[x], 16, 16);
       }
   }
   pop()
      
   }
   //c'est B //  inspiré de Clara Mahe
   playSound(sound026, 66)
      
      if (sound026.isPlaying() == true) {
         push()
         sound026FFT.analyze();
         rectMode(CENTER)
         var nrj5 = sound026FFT.getEnergy("bass")
         var long5 = (map(sound026.currentTime(), 0, sound026.duration(), 0, width))
         rectMode(CENTER)
 
         push()
         fill(33, 220, 169)
         rect(width * 0.20, 100, nrj5, long5, 2);
         noStroke();
         pop()
 
         push()
         fill(33, 220, 169)
         rect(width * 0.80, 800, nrj5, long5, 2);
         noStroke();
         pop()
 
         pop()
     }
     



   //c'est H
   playSound(sound02, 72)
   push()
   if (sound02.isPlaying() == true) {
      let r = map(sound02.currentTime(),
         0, sound02.duration() * 0.33,
         0, height * 0.5)
      r = constrain(r, 0, height * 0.5)


      let c = map(sound02.currentTime(),
         sound02.duration() * 0.33, sound02.duration(),
         0, height * 0.5
      )
      c = constrain(c, 0, height * 0.5)

      rectMode(CENTER)
      fill(33, 220, 169)
      rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
      pop();
   }




   //c'est Z
   // On va créer une courbe avec wave le son doit être en fft 
   // créer 2 pointys en coordonnées on regarde dans la console il ya 1024 valeurs on va 
   // boucle for va repeter plusieurs fois 
   // mettre en entrée et sortie dans map (pour proportionnée les valeurs à la taille de l'écran)

   playSound(sound03, 90)
   if (sound03.isPlaying() == true) {
      let wave = sound03FFT.waveform()
      noFill()
      strokeWeight(10)
      stroke(33, 158, 220)
      beginShape()
      for (let i = 0; i < wave.length; i++) {
         let x = map(i, 0, wave.length, 0, width)
         let y = map(wave[i], -1, 1, height, 0)
         curveVertex(x, y)
      }
      endShape()
   }




   // C'est N//
   playSound(sound09, 78)
   if (sound09.isPlaying() == true) {
      push()
      let angle = map(sound09.currentTime(),
         0, sound09.duration(),
         0, TWO_PI)
      rectMode(CENTER)
      noFill()
      stroke(255)
      translate(width * 0.5, height * 0.5)
      rotate(angle)
      rect(0, 0, height * 0.25, height * 0.25)
      pop()
   }
   // (push) debut pop (fin) elle limite les modification entre elle pour éviter qu'elle ,'affecte les autres. 

}


// playSound (sound01,65) écrit en plus simple 

//Definition générale et pour faire false (attendre quelque frame de la touche)
function playSound(sound, keyID) {
   if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
      sound.play();
   }
}

function windowResized() { // redimensionner dynamiquement notre canvas aux dimensions de la fenêtre du navigateur
   resizeCanvas(windowWidth, windowHeight);


}