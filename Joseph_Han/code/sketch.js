let sound01
let sound02
let sound03
let sound04
let sound04FFT
let sound05
let sound06
let sound06FFT
let sound07
let sound07FFT
let sound08
let sound08FFT
let sound09
let sound09FFT
let sound10
let sound11
let sound11FFT
let sound12
let sound13
let sound14
let sound15
let sound15FFT
let sound16
let sound17
let sound18
let sound19
let sound20
let sound21
let sound22
let sound23
let sound24
let sound24FFT
let sound25
let sound26
let sound26FFT


var xpos = []
var ypos = []
var xtarget = []
var ytarget = []





function preload() {
    sound01 = loadSound("Sounds/211869__wikbeats__110-loop.wav")
    sound02 = loadSound("Sounds/212693__stumber__scratch-1.wav")
    sound03 = loadSound("Sounds/387186__alexiero-1__ai-snare-20.wav")
    sound04 = loadSound("Sounds/463930__alienxxx__mean-bass-loop-130bpm-dmin-final.wav")
    sound05 = loadSound("Sounds/482961__yellowtree__super-strange-synths.wav")
    sound06 = loadSound("Sounds/339816__inspectorj__hand-bells-f-single.wav")
    sound07 = loadSound("Sounds/237204__waveplay-old__120-bpm-deep-pulsing-kick-loop.wav")
    sound08 = loadSound("Sounds/232335__leifgreen__slow-drum-loop.wav")
    sound09 = loadSound("Sounds/401672__adamjordaan140087__pouring-water.wav")
    sound10 = loadSound("Sounds/370196__inspectorj__synth-gliss-a.wav")
    sound11 = loadSound("Sounds/400931__greek555__lead-electro-128-bpm.mp3")
    sound12 = loadSound("Sounds/466867__mikee63__blaster-shot-single-5.wav")
    sound13 = loadSound("Sounds/344270__inspectorj__glass-smash-bottle-g.wav")
    sound14 = loadSound("Sounds/440931__xhale303__piano-loop-1.wav")
    sound15 = loadSound("Sounds/117616__soundmary__fireworks-exploding-1.wav")
    sound16 = loadSound("Sounds/394448__inspectorj__bamboo-swing-c7.wav")
    sound17 = loadSound("Sounds/182316__il112__backspin.wav")
    sound18 = loadSound("Sounds/181425__serylis__guitar-chord.wav")
    sound19 = loadSound("Sounds/460261__ddmyzik__piano-jingle.wav")
    sound20 = loadSound("Sounds/78674__joe93barlow__on0.wav")
    sound21 = loadSound("Sounds/165320__ani-music__wicked-bass-drop.wav")
    sound22 = loadSound("Sounds/209943__veiler__bass-16b.wav")
    sound23 = loadSound("Sounds/406751__kretopi__syntheffects-002.wav")
    sound24 = loadSound("Sounds/231578__lemoncreme__floating-synth-melody-at-130-bpm-c-major-loop-music.mp3")
    sound25 = loadSound("Sounds/221647__bryansmosh__bass-synth-drop.wav")
    sound26 = loadSound("Sounds/85059__zgump__bass-rvb-2.wav")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    sound04FFT = new p5.FFT()
    sound04FFT.setInput(sound04)

    sound06FFT = new p5.FFT()
    sound06FFT.setInput(sound06)

    sound07FFT = new p5.FFT()
    sound07FFT.setInput(sound07)

    sound08FFT = new p5.FFT()
    sound08FFT.setInput(sound08)

    sound09FFT = new p5.FFT()
    sound09FFT.setInput(sound09)

    sound11FFT = new p5.FFT()
    sound11FFT.setInput(sound11)

    sound15FFT = new p5.FFT()
    sound15FFT.setInput(sound15)

    sound21Amp = new p5.Amplitude()
    sound21Amp.setInput(sound21)

    sound23Amp = new p5.Amplitude()
    sound23Amp.setInput(sound23)

    sound24FFT = new p5.FFT()
    sound24FFT.setInput(sound24)

    sound26FFT = new p5.FFT()
    sound26FFT.setInput(sound26)

    


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
    // touche a
    background(0)
    playSound(sound01, 65)

    if (sound01.isPlaying() == true) {
        let r = map(sound01.currentTime(),
            0, sound01.duration() * 0.33, 0, width * 0.25)
        r = constrain(r, 0, width * 0.25)
        fill(255, 255, 255)

        let c = map(sound01.currentTime(),
            sound01.duration() * 0.33, sound01.duration(),
            0, width * 0.25)
        c = constrain(c, 0, width * 0.25)
        console.log(r)
        rectMode(CENTER)
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
    }



    // touche z 
    playSound(sound02, 90)
    if (sound02.isPlaying() == true) {
        let r = map(sound02.currentTime(),
            0, sound02.duration() * 0.33, 0, width * 0.25)
        ellipse(width * 0.5, height * 0.5, r, r)
        fill(255, 255, 255)



    }

    // touche e 
    playSound(sound03, 69)

    if (sound03.isPlaying() == true) {
        let r = map(sound03.currentTime(),
            0, sound03.duration() * 0.33, 0, width * 0.25)
        ellipse(width * 0.5, height * 0.5, r, r)
        fill(255, 255, 255)
    }


    // touche r 
    playSound(sound04, 82)
    if (sound04.isPlaying() == true) {
        let wave = sound04FFT.waveform();
        noFill()
        stroke(255, 255, 255)
        strokeWeight(5)
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape()
    }

    // touche t 
    playSound(sound05, 84)
    if (sound05.isPlaying() == true) {
        push()
        rectMode(CENTER)
        let angle = map(sound05.currentTime(), 0, sound05.duration(), 0, TWO_PI)
        fill(255, 255, 255)
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, height * 0.25, height * 0.25)
        pop()
    }

    // touche y 
    playSound(sound06, 89)
    if (sound06.isPlaying() == true) {
        push()
        noFill()
        //fill (255,255,255)
        stroke(255, 255, 255)
        let wave = sound06FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1, 1, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            //ellipse(x,y,5,5)
            curveVertex(x, y)

        }
        endShape(CLOSE)

        pop()

    }

    //touche u
    playSound(sound07, 85)
    if (sound07.isPlaying() == true) {
        let wave = sound07FFT.waveform();
        noFill()
        stroke(255, 255, 255)
        strokeWeight(5)
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape()
    }

    // touche i 
    playSound(sound08, 73)
    if (sound08.isPlaying() == true) {
        push()
        sound08FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound08FFT.getEnergy("bass")

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

    //touche o
    playSound(sound09, 79) // 'o' == sound09
    if (sound09.isPlaying() == true) {
        push()
        var waveform = sound09FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 255, 255); // waveform is mint
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()

    }

    //touche p
    playSound(sound10, 80); // 'p' == sound10
    if (sound10.isPlaying() == true) {
        push()
        var rotation = map(sound10.currentTime(), 0, sound10.duration(), 0, PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(255, 180, 180)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()
    }


    //touche q
    playSound(sound11, 81)
    if (sound11.isPlaying() == true) {
        push()
        noFill()
        //fill (255,255,255)
        stroke(255, 255, 255)
        let wave = sound11FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1, 1, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            //ellipse(x,y,5,5)
            curveVertex(x, y)

        }
        endShape(CLOSE)

        pop()

    }


    //touche s
    playSound(sound12, 83)
    if (sound12.isPlaying() == true) {
        push()
        let rad = map(sound12.currentTime(), 0, sound12.duration(), width, 50)
        stroke(255, 255, 255)
        strokeWeight(6)
        noFill()
        ellipse(width * 0.5, height * 0.5, rad, rad)

        pop()

    }


    //touche d
    playSound(sound13, 68)
    if (sound13.isPlaying() == true) {
        push()
        var rad = map(sound13.currentTime(), 0, sound13.duration(), 1, width * 2)
        stroke(102, 0, 255)
        strokeWeight(5)
        noFill()
        ellipse(width * 0.25, height * 0.25, red, rad)
        pop()

        push()
        var rad = map(sound13.currentTime(), 0, sound13.duration(), 10, width)
        stroke(128, 0, 128)
        strokeWeight(5)
        noFill()
        ellipse(width * 0.25, height * 0.25, rad, rad)
        pop()

        push()
        var rad = map(sound13.currentTime(), 0, sound13.duration(), 100, width)
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill()
        ellipse(width * 0.25, height * 0.25, rad, rad)
        pop()

    }

    //touche f 
    playSound(sound14, 70)
    if (sound14.isPlaying() == true) {
        push()
        let t = map(sound14.currentTime(), 0, sound14.duration() * 0.75, 0, 1)
        let grey = map(sound14.currentTime(), sound14.duration() * 0.75, sound14.duration(), 255, 180)
        //t = constrain(grey, 180, 255)
        fill(173, 79, 9)
        noStroke()
        console.log(t)
        for (let i = 0; i < 50; i++) {
            let x = lerp(xpos[i], xtarget[i], t)
            let y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 30, 30)
        }

        pop()
    }

    //touche g
    playSound(sound15, 71)
    if (sound15.isPlaying() == true) {
        push()
        var wavef = sound15FFT.waveform();
        fill(255, 84, 175);
        beginShape(); //dessiner une forme: ligne reliant tous les vertex
        noStroke();
        for (var i = 0; i < wavef.length; i++) { // on parcours le tableau de 0 à 1023, en ajoutant 1 à i à chaque étape
            var x = map(i, 0, wavef.length, 0, width); // abscisse dépendant de i, occupant la largeur de la fenetre
            var y = map(wavef[i], -0.1, 0.1, 0, height); // ordonnée dépendant de la valeur de la donnée dans la case i
            curveVertex(x, y); //point de la courbe selon x et y
        }
        endShape();
        pop();


    }


    
    //touche h
    playSound(sound16, 72)
    if (sound16.isPlaying() == true) {
        push()
        var nsegment = 96 // il y aura 96 segment appeler mit dans une variable nsegment
        var ncurrentsegment = (map(sound16.currentTime(), 0, sound16.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) { // tant que nsegment n'est pas atteint, on continu d'en faire apparaitre
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255);
            strokeWeight(height * 0.0043)
            var angles = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angles);
            var y = height * 0.5 + height * 0.45 * sin(angles);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop()
    }

    
    }

    //touche j

    playSound(sound17, 74)
    if (sound17.isPlaying() == true) {
        push()
        let rad = map(sound17.currentTime(), 0, sound17.duration(), width, 50)
        stroke(255, 255, 255)
        strokeWeight(6)
        noFill()
        ellipse(width * 0.5, height * 0.5, rad, rad)

        pop()

    }

    //touche k
    playSound(sound18, 75)
    if (sound18.isPlaying() == true) {
        push()
        var nsegment19 = 1000
        var ncurrentsegment19 = (map(sound18.currentTime(), 0, sound18.duration(), 0, nsegment19 + 1))
        for (var i = 0; i < ncurrentsegment19; i++) {
            stroke(23, 101, 125);
            strokeWeight(2)
            var angle19 = map(i, 0, nsegment19, 0, TWO_PI);
            var x19 = width * 0.5 + height * 180 * cos(angle19);
            var y19 = height * 1 + height * 0.45 * sin(angle19);
            line(width * 0.5, height * 0.5, x19, y19);

        }
        pop()
    }

    //touche l
    playSound(sound19, 76)
    if (sound19.isPlaying() == true) {
        push()
        var nsegment = 80
        var ncurrentsegment = (map(sound19.currentTime(), 0, sound19.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(09, 226, 212);
            strokeWeight(2)
            fill(0, 0)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.3 + height * 0.45 * cos(angle);
            var y = height * 0.3 + height * 0.45 * sin(angle);
            ellipse(width * 0.5, height * 0.5, x, y);

        }
        pop()
    }

    //touche m
    playSound(sound20, 77)
    if (sound20.isPlaying() == true) { 
        push();
        var angle = map(sound20.currentTime(), 0, sound20.duration(), 9, PI);
        translate(width * 0.2, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250);
        strokeWeight(50);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 2, height * 2);
        pop();
    }

    //Touche w
    playSound(sound21, 87)
    if (sound21.isPlaying() == true) { 
        push()
            var amplitude = sound21Amp.getLevel();
            var whiteLevel = map(amplitude, 0, 0.1, 20, 255); // map(valeur à transformer, sa valeur min, sa valeur max, la valeur min à lui attribuer, sa valeur max à lui attribuer)
    
    
            push();
            noStroke();
            fill(whiteLevel, 0, 200); //la couleur dépend du niveau sonore du son
            ellipse(0, 0, width, width);
            pop();
    
            push();
            noStroke();
            fill(whiteLevel, whiteLevel, 0, 200); //la couleur dépend du niveau sonore du son
            ellipse(width, height, width, width);
            pop();
    
            pop();
        }

    // Touche x
    playSound(sound22, 88)
    if (sound22.isPlaying() == true) { 
        push()
        let t = map(sound22.currentTime(), 0, sound22.duration() * 0.75, 0, 1)
        let grey = map(sound22.currentTime(), sound22.duration() * 0.75, sound22.duration(), 255, 180)
        //t = constrain(grey, 180, 255)
        fill(255, 0, 0)
        noStroke()
        console.log(t)
        for (let i = 0; i < 50; i++) {
            let x = lerp(xpos[i], xtarget[i], t)
            let y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 30, 30)
        }

        pop()
    }

    //touche c
    playSound(sound23, 67); 
    if (sound23.isPlaying() == true) {
        push();
        var amplitude = sound23Amp.getLevel();
        var whiteLevel = map(amplitude, 0, 0.4, 0, 255); // map(valeur à transformer, sa valeur min, sa valeur max, la valeur min à lui attribuer, sa valeur max à lui attribuer)
        //la couleur dépend du niveau sonore du son
        noStroke();
        fill(whiteLevel, 0, 200);
        rect(0, 0, width, height);
        pop();
    }

    //touche v
    playSound(sound24, 86); 
    if (sound24.isPlaying() == true) {
        push();
        let wave = sound24FFT.waveform();
        noFill()
        stroke(255, 255, 255)
        strokeWeight(5)
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape()
    }

    //touche b
    playSound(sound25, 66); 
    if (sound25.isPlaying() == true) {
        push();
    let r = map(sound25.currentTime(),
    0, sound03.duration() * 0.33, 0, width * 0.25)
ellipse(width * 0.5, height * 0.5, r, r)
fill(255, 255, 255)
}

    //touche n 
    playSound(sound26, 78); 
    if (sound26.isPlaying() == true) {
        push();
        noFill()
        //fill (255,255,255)
        stroke(255, 255, 255)
        let wave = sound26FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1, 1, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            //ellipse(x,y,5,5)
            curveVertex(x, y)

        }
        endShape(CLOSE)

        pop()

    }
    


    




}

function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

function windowResized() {

}