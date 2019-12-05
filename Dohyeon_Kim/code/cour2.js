let sound01
let sound02
let sound03
let sound04
let sound05
let sound06
let sound07
let sound08
let sound09
let sound09FFT
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



var amppX = 50
var amppY = 100
var a = 0.0;
let xpos=[]
let ypos=[]
let xtarget=[]
let ytarget=[]

let snowflakes = [];


/*var path = anime.path('.motion-path-demo path');*/

function preload() {
    sound01 = loadSound('sound01.wav');
    sound02 = loadSound('sound02.wav');
    sound03 = loadSound('sound03.wav');
    sound04 = loadSound('sound04.wav');
    sound05 = loadSound('sound05.wav');
    sound06 = loadSound('sound06.wav');
    sound07 = loadSound('sound07.wav');
    sound08 = loadSound('sound08.wav');
    sound09 = loadSound('sound09.wav');
    sound10 = loadSound('sound10.wav');
    sound11 = loadSound('sound11.mp3');
    sound12 = loadSound('sound12.wav');
    sound13 = loadSound('sound13.wav');
    sound14 = loadSound('sound14.wav');
    sound15 = loadSound('sound15.wav');
    sound16 = loadSound('sound16.wav');
    sound17 = loadSound('sound17.wav');
    sound18 = loadSound('sound18.wav');
    sound19 = loadSound('sound19.wav');
    sound20 = loadSound('sound20.wav');
    sound21 = loadSound('sound21.wav');
    sound22 = loadSound('sound22.wav');
    sound23 = loadSound('sound23.wav');
    sound24 = loadSound('sound24.wav');
    sound25 = loadSound('sound25.wav');
    sound26 = loadSound('sound26.wav');
}



function setup() {
    createCanvas(windowWidth, windowHeight); 
    
    sound04FFT = new p5.FFT(0.8, 1024)
    sound04FFT.setInput(sound04)
    sound08FFT = new p5.FFT(0.8, 1024)
    sound08FFT.setInput(sound08)
    sound07FFT = new p5.FFT(0.8, 1024)
    sound07FFT.setInput(sound07)
    sound09FFT = new p5.FFT(0.8, 1024)
    sound09FFT.setInput(sound09)
    sound16FFT = new p5.FFT(0.8, 16);
    sound16FFT.setInput(sound16);
    sound17FFT = new p5.FFT(0.8, 16);
    sound17FFT.setInput(sound17);
    amplitudeV = new p5.Amplitude()
    amplitudeV.setInput(sound19)
    sound21FFT = new p5.FFT(0.8, 16)
    sound21FFT.setInput(sound21)
    var nsegment = 96
    var ncurrentsegment = (map(sound05.currentTime(), 0, sound05.duration(), 0, nsegment + 1))

    for(var i=0; i<50; i++){
        xpos.push(random(0,width))
        ypos.push(random(0,-height))
        xtarget.push(random(0,width))
        ytarget.push(random(0,height))
    }

}

function snowflake() {
    // réinitialiser les coordonnées (x, y)
    this.posssX = 0;
    this.posssY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);

   // répartir les flocon uniformément
    this.radius = sqrt(random(pow(width / 2, 2)));

    this.update = function (time) {
        // position x suit un cercle
        let w = 0.6; // vitesss angulaire
        let angle = w * time + this.initialangle;
        this.posssX = width / 2 + this.radius * sin(angle);

      //  les differents flocon tome avec une vitesse différente
        this.posssY += pow(this.size, 0.5);

        // delete snowflake if past end of screen
        if (this.posssY > height) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
        }
    };

    this.display = function () {
        ellipse(this.posssX, this.posssY, this.size);
    };
}


function draw() {

    background(0,0,0)

    // A
    playSound(sound01, 65)
    if (sound01.isPlaying() == true) {
        let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)
        fill(87,44,97)
        ellipse(width * 0.5, height * 0.5, r, r)

    }

    // S
    playSound(sound02, 83)
    if (sound02.isPlaying() == true) {
        push()
        rectMode(CENTER)

        let angle = map(sound02.currentTime(), 0, sound02.duration(), 0, TWO_PI)
        fill(67,182,80)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, width * 0.25, height * 0.25)
        pop()

    }

    // D
    playSound(sound03, 68)
    if (sound03.isPlaying() == true) {
        let r = map(sound03.currentTime(), 0, sound03.duration() * 0.33, 0, width * 0.25)
        r = constrain(r, 0, width * 0.25)
        fill(247,236,35)
        noStroke()

        let c = map(sound03.currentTime(), sound03.duration() * 0.33, sound03.duration(), 0, width * 0.25)
        c = constrain(c, 0, width * 0.25)

        rectMode(CENTER)
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
    }

    //F
    playSound(sound04, 70)
    if (sound04.isPlaying() == true) {
        push()
        var waveform = sound04FFT.waveform();
        noFill();
        beginShape();
        stroke(251,200,23); // waveform is mint
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }

    //G
    playSound(sound05, 71)

    if (sound05.isPlaying() == true) {
        push()
        //(...)
        pop()
        var nsegment = 96
        var ncurrentsegment = (map(sound05.currentTime(), 0, sound05.duration(), 0, nsegment + 1))

    }
    for (var i = 0; i < ncurrentsegment; i++) {
        stroke(87,44,97);
        strokeWeight(4)
        var angle = map(i, 0, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 0.45 * cos(angle);
        var y = height * 0.5 + height * 0.45 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);
    }

    //H
    playSound(sound06, 72)
    if (sound06.isPlaying() == true) {
        push()
        var t = map(sound06.currentTime(), 0, sound06.duration() , 0, 1)
        //var grey = map(sound06.currentTime(), sound06.duration() * 0.75, sound06.duration(), 255, 180)
        t = constrain(t, 0, 1)
        //grey = constrain(grey, 180, 255)
        fill(67,182,80)
        noStroke()
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }

    //J
    playSound(sound07, 74)
    if (sound07.isPlaying() == true) {
        push()
        sound07FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound07FFT.getEnergy("bass")

        push()
        fill(251,208,213, nrj1)
        noStroke()
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        fill(251,208,213, 50)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(251,208,213, nrj1)
        noStroke()
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()
    }

    //K
    playSound(sound08, 75)
    if (sound08.isPlaying() == true) {
        if (sound08.isPlaying() == true) {
            push()
            var waveform = sound08FFT.waveform();
            noFill();
            beginShape();
            stroke(247,236,35); // waveform is mint
            strokeWeight(10);
            for (var i = 0; i < waveform.length; i++) {
                var x = map(i, 0, waveform.length, 0, width);
                var y = map(waveform[i], -1, 1, 0, height);
                curveVertex(x, y);
            }
            endShape();
            pop()
        }
    }

    //L
    playSound(sound09, 76)
    if (sound09.isPlaying() == true) {
        push()
        
        var waveform = sound09FFT.waveform();
      
        noFill();
        stroke(255,255,255)
        beginShape();
        for (let i = 0; i < waveform.length; i++) {
            let angle = map(i, 0, waveform.length, 0, TWO_PI)
            let rad = map(waveform[i], -1, 1, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            curveVertex(x, y)
        }
        endShape(CLOSE);
        pop()
    }

    //Q
    playSound(sound10, 81)
    if (sound10.isPlaying() == true) {
        let nsegment = 696
        let ncurrentsegment = map(sound10.currentTime(), 0, sound10.duration(), 0, nsegment + 1)
        push()
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke(67,182,80);
            strokeWeight(0.7)
            let angle = map(i, 1, nsegment, 0, PI);
            let x = width * 0 + height * 18.5 * cos(angle);
            let y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 1, height * 0, x, y);
        }

        pop()
    }
    
    //w
    
    playSound(sound11, 87)
    if (sound11.isPlaying() == true){
        push();
        var radius = map(sound11.currentTime(), 0, sound11.duration(), 50, width);
        strokeWeight(5);
        fill(247,236,35);
        noStroke()
        ellipse(width * 0.6, height * 0.6, radius, radius);
        pop();

    }

    //E
    playSound(sound12, 69)
    if (sound12.isPlaying() == true) {
        push()
        let nsegment = 100;
        let ncurrentsegment = (map(sound12.currentTime(), 0, sound12.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            fill(0,0,0);
            stroke(255,255,255);
            strokeWeight(3);
            let angle = map(i, 0, nsegment * 1.5, 0, TWO_PI);
            let x = width * 0.5 + height * 0.45 * cos(angle);
            let y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(width / 2, height / 2, x, y);
        }
        pop()
    
    }

    //R
    playSound(sound13,82)
    if (sound13.isPlaying() == true){
        push()
        let nsegment = 100;
        let ncurrentsegment = (map(sound13.currentTime(), 0, sound13.duration(), 0, nsegment + 1));
        for (let i = 0; i < ncurrentsegment; i++) {
            fill(0,0,0);
            stroke(255,255,255);
            strokeWeight(3);
            let angle = map(i, 0, nsegment * 1.5, 0, TWO_PI);
            let x = width+ height* cos(angle);
            let y = height + height* sin(angle);
            ellipse(width / 2, height / 2, x, y);
        }
        pop()

    }

    //T
    playSound(sound14,84)
    if (sound14.isPlaying() == true){
        var nsegment = 252
        var ncurrentsegment = map(sound14.currentTime(), 0, sound14.duration(), 0, nsegment + 1)
        push()
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(68, 170, 213);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop()
    }

    //Y
    playSound(sound15,89)
   if (sound15.isPlaying() == true) {    
    push();
    var timer = map(sound15.currentTime(), 0, 0.2, 50, height * 0.001);
    fill(120, 30, 30);
    noStroke();
    ellipse(width * 0.5, height * 0.5, width / 4.8, width / 4.8);
    fill(255, 255, 255);
    ellipse(width * 0.5 - timer, height * 0.5 - timer, width / 4.8, width / 4.8);
    pop();
    }

    //U
    playSound(sound16,85)
    if (sound16.isPlaying() == true) {
        sound16FFT.analyze();
        var nrj1 = sound16FFT.getEnergy("mid")

        push()
        rectMode(CENTER)
        noStroke();
        fill(255, 153, 0)
        var theta = map(sound16.currentTime(), 0, sound16.duration(), 0, PI);
        var ypos1 = width - sin(theta) * width * 0.5;
        rect(ypos1, height / 2, nrj1 / 6, nrj1 * 3);
        pop()
    }
        

    //I
    playSound(sound17,73)
    if (sound17.isPlaying() == true){
        sound17FFT.analyze();
        var nrj1 = sound17FFT.getEnergy("mid")
        push()
        noStroke();
        fill(0, 95, 110)
        var theta = map(sound17.currentTime(), 0, sound17.duration(), 0, PI);
        var ypos1 = height - sin(theta) * height * 0.5;
        ellipse(width / 3, ypos1, nrj1, nrj1);

        fill(0, 95, 110)
        var theta = map(sound17.currentTime(), 0, sound17.duration(), 0, PI);
        var ypos1 = height - sin(theta) * height * 0.5;
        ellipse(width * (2 / 3), ypos1, nrj1, nrj1);
        pop()
        pop()

    }

    //O
    playSound(sound18,79)
    if (sound18.isPlaying() == true){
        push()
        noStroke();
        var rotation = map(sound18.currentTime(), 0, sound18.duration(), 0, PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(139, 0, 0);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        push()
        noStroke();
        var rotation = map(sound18.currentTime(), 0, sound18.duration(), 0, PI * 0.2);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(107, 13, 13, 50);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

    }

    //P
    playSound(sound19,80)
    if (sound19.isPlaying() == true){
        push()
        fill(107,100,100,100)
        noStroke()
        var levelV = amplitudeV.getLevel()
        amppY += 0.05 // même effet de déphasage que animO
        amppX += 0.03
        let radiusY = 120
        let radiusX = 120
    
        let posY = map(sound19.currentTime(), 0, sound19.duration() * 0.08, height, height / 2)
        let posYhaut = map(sound19.currentTime(), 0, sound19.duration() * 0.08, 0, height / 2)
        let diminue = 1
    
        if (sound19.currentTime() > sound19.duration() * 0.08) { // fixer la position des cercles au centre
            diminue = map(sound19.currentTime(), sound19.duration() * 0.08, sound19.duration(), 1, 10)
            posY = height / 2
            posYhaut = height / 2
            radiusX = map(levelV, 0, 0.1, 30, 180) * cos(amppX)
            radiusY = map(levelV, 0, 0.1, 30, 180) * cos(amppY)
        }
    
        ellipse(width / 4, posYhaut, radiusX / diminue, radiusY / diminue)
        ellipse(width / 2, posY, radiusX / diminue, radiusY / diminue)
        ellipse(3 * width / 4, posYhaut, radiusX / diminue, radiusY / diminue)
        pop()

    }

    //Z
    playSound(sound20,90)
    if (sound20.isPlaying() == true){
        push();

        //rectangle qui tourne
        push();
        translate(width * 0.5, height * 0.5); //on déplace le rect vers le centre de la fenetre
        var ang = map(sound20.currentTime(), 0, sound20.duration(), 0, PI); // rotation du rect autour du centre, pendant le tps de son
        rectMode(CENTER);
        rotate(ang);
        fill(67,182,80);
        noStroke();
        rect(0, 0, width, height);
        pop();
        //cercle polaire
        push();
        var nsegment = 1500;
        var ncurrentsegment = (map(sound20.currentTime(), 0, sound20.duration(), 0, nsegment + 1));
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(87,44,97);
            strokeWeight(4);
            var angle = map(i, 0, nsegment, 0, -TWO_PI); //sens inversé par rapport au rectangle
            var x = width * 0.5 + height * 2 * cos(angle); //plus grand que rectangle
            var y = height * 0.5 + height * 2 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop();

    }

    //X
    playSound(sound21,88)
    if (sound21.isPlaying() == true){
        {
            //Ici, c'est le spectre du son que l'on dessine
            var spectrum = sound21FFT.analyze();
    
            beginShape();
            for (i = 0; i < spectrum.length; i++) {
                noFill()
                stroke(255)
                var x = map(i, 0, spectrum.length, 0, width * 1.2)
                var y = map(spectrum[i], 0, 255, height * 1.5, height * 0.05)
                vertex(x, y);
            }
            endShape();
        }
    
    }
    

    //C
    playSound(sound22,67)
    if (sound22.isPlaying() == true){
        push()
        var length = map(sound22.currentTime(), 0, sound22.duration(), 30, width)
        push()
        rectMode(CENTER);
        fill(200, 30, 30)
        noStroke();
        rect(width, height * (3 / 4), length, 20)
        pop()

        {push()
            var length = map(sound22.currentTime(), 0, sound22.duration(), 30, width)
            push()
            rectMode(CENTER);
            fill(120, 200, 30)
            noStroke();
            rect(width / 4, 0, 20, length)
            pop()}
            {
                push()
                var length = map(sound22.currentTime(), 0, sound22.duration(), 30, width)
                push()
                rectMode(CENTER);
                fill(120, 30, 200)
                noStroke();
                rect(0, height / 4, length, 20)
                pop()
            }
    }

    //V
    playSound(sound23,86)
    if (sound23.isPlaying() == true){

        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound23.currentTime(), 0, sound23.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(250);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.75, height * 0.25, x, y);
        }
        pop()
        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound23.currentTime(), 0, sound23.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(250);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.25, height * 0.75, x, y);
        }
        pop()

    }

    //B
    playSound(sound24,66)
    if (sound24.isPlaying() == true){
        push()
        var t = map(sound24.currentTime(), 0, sound24.duration(), 1, 0)
        var grey = map(sound24.currentTime(), sound24.duration() * 0.75, sound24.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            fill(136, 93, 50)
            noStroke()
            ellipse(x, y, 5, 5)
            pop()
        }
    }

    //N
    playSound(sound25,78)
    if (sound25.isPlaying() == true){

        push()
        fill(255)
        let t = frameCount / 60;
        // cré un nb de flocon aléatoire
        for (var i = 0; i < random(5); i++) {
            snowflakes.push(new snowflake()); // ajouté un flocon de neige (objet)
        for (let flake of snowflakes) {
            flake.update(t); // réactualiser position des flocon de neige
            flake.display(); // dessiner flocon de neige
        }
        pop()
    }
    }

    //M
    playSound(sound26,77)
    if (sound26.isPlaying() == true){

        push();
        rectMode(CENTER);
        a = a + 0.04;
        s = cos(a) * 2;

        translate(width / 2, height / 2);
        scale(s);
        noStroke();
        fill(0);
        ellipse(0, 0, 200, 200);

        translate(200, 200);
        noStroke();
        fill(120, 150, 0);
        scale(s);
        ellipse(0, 0, 200, 200);

        pop();

    }



}


function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

/*unction randomValues() {
    anime({
      targets: '.random-demo .el',
      translateX: function() {
        return anime.random(0, 270);
      },
      easing: 'easeInOutQuad',
      duration: 750,
      complete: randomValues
    });
  }

  randomValues();
*/
function windowResized() { }


