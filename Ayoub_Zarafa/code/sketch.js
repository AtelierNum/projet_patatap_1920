let sound01;
let sound02;
let sound03;
var naruto;
var narutoFFT;
let sound04
let sound05
let sound05FFT
let petals = [];
let son1;
let rotation = 0;
let son2;
let stab1
var xPosition = [];
var yPosition = [];
var drone2
var drone3
var anim1 = {
    w: 0
}
var anim2 = {
    x1: -50,
    y1: -50,
    x2: -50,
    y2: -50,
    x3: -50,
    y3: -50
}
var anim3 = {
    x: -40,
    rot: 0
}
var anim4 = {
    y: -40,
    h: 0
}
let horn;
let thverm_kula;
let geisli;
let x, y;
let xg, yg;
let yoff = 0.0; // perlin noise
let t = 0; // time variable
let t1 = 0; // time variable
let stab3
let speed = 5;
let gravity = 2;
let drone4
let drone5
let nani
let verse1
let verse2
let verse3
let verse3Amp
let verse4
var xpos = []
var ypos = []
var xtarget = []
var ytarget = []
let verse5
var pg
var xpos1 = 0
var ypos1 = 0
var xdir = 5
var ydir = 5
let verse6
let ds;
let verse7
let verse8
let theta;
let verse9
let r1, r2, r3, r4;
let verse10
let diameter;
let verse11;
let verse12
let ora
let angle2 = 0
let verse13
let verse14
let verse15
var sines = new Array(NUMSINES)
var NUMSINES = 1
var trace = true
var fund2 = 0.047
let verse16




function preload() {
    sound01 = loadSound("assets/Boing.wav");
    sound02 = loadSound("assets/fox.wav");
    sound03 = loadSound("assets/Byakugan.wav")
    naruto = loadSound("assets/222551__zagi2__koto-loop.wav")
    sound04 = loadSound("assets/Boruto  Naruto Next Generations épisode 1 VOSTFR – Extrait Boruto VS Kawaki.mp3")
    son1 = loadSound("assets/“Silhouette“ by KANA BOON-[AudioTrimmer.com].mp3");
    son2 = loadSound("assets/Sharingan.wav")
    stab1 = loadSound("assets/175672__mondschein90__koto-hit.mp3")
    drone1 = loadSound("assets/looperman-l-0079105-0167099-taiko-4.wav")
    rasengan = loadSound("assets/rasengan.mp3")
    drone2 = loadSound("assets/looperman-l-2342594-0178511-asian-rope-instrument-arp.wav")
    stab3 = loadSound("assets/sword.wav")
    drone3 = loadSound("assets/drone3.wav")
    drone4 = loadSound("assets/drone4.mp3")
    drone5 = loadSound("assets/fuji.wav")
    nani = loadSound("assets/nani.mp3")
    verse1 = loadSound("assets/verse1.mp3")
    verse2 = loadSound("assets/verse2.mp3")
    verse3 = loadSound("assets/verse3.mp3")
    verse4 = loadSound("assets/verse4.mp3")
    verse5 = loadSound("assets/verse5.mp3")
    verse6 = loadSound("assets/verse6.mp3")
    verse7 = loadSound("assets/verse7.mp3")
    verse8 = loadSound("assets/verse8.mp3")
    verse9 = loadSound("assets/verse9.mp3")
    verse10 = loadSound("assets/verse10.mp3")
    verse11 = loadSound("assets/verse11.mp3")
    verse12 = loadSound("assets/verse12.mp3")
    ora = loadSound("assets/ora.mp3")
    verse13 = loadSound("assets/verse13.mp3")
    verse14 = loadSound("assets/verse14.mp3")
    verse15 = loadSound("assets/VERSE15.mp3")
    verse16 = loadSound("assets/verse16.mp3")

}



function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    rad = height / 4

    narutoFFT = new p5.FFT(0.8, 1024)
    narutoFFT.setInput(naruto)
    drone1FFT = new p5.FFT(0.8, 16)
    drone1FFT.setInput(drone1)
    verse15FFT = new p5.FFT(0.8, 16)
    verse15FFT.setInput(verse15)
    horn = 0;
    thverm_kula = 50;
    geisli = 200;
    verse3Amp = new p5.Amplitude()
    verse3Amp.setInput(verse3)
    for (var i = 0; i < 50; i++) {
        // ajouter des éléments au dessus de notre canvas
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    for (var i = 0; i < 1000; i++) {
        petals.push(new petal());
    }
    pg = createGraphics(windowWidth, windowHeight)

    ds = new PenroseLSystem();
    ds.simulate(5);
    diameter = height - 80;

}

function draw() {
    background(10, 10);


    //touche N electricité inspiré du patatap de perouse victor
    playSound(verse15, 78)
    if (verse15.isPlaying() == true) {
        var spectrum = verse15FFT.analyze();

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

   //Touche B 
    playSound(verse13, 66)
    if (verse13.isPlaying() == true) {
        push()
        let angleR = map(verse13.currentTime(), 0, verse13.duration(), 0, PI * 100)
        rectMode(CENTER)
        noFill()
        stroke(231, 196, 200)
        translate(width * 0.3, height * 0.3)
        rotate(angleR)
        rect(0, 0, height * 0.5, height * 0.5)
        pop()
    }
    //touche V simple et efficase
    playSound(verse12, 86)
    if (verse12.isPlaying() == true) {
        push()
        let angleR = map(sound04.currentTime(), 0, sound04.duration(), 0, TWO_PI)
        rectMode(CENTER)
        noFill()
        stroke(231, 196, 200)
        translate(width * 0.5, height * 0.5)
        rotate(angleR)
        rect(0, 0, height * 0.5, height * 0.5)
        pop()
    }
    //Touche C Rond Grandit puis carré puis rond
    playSound(verse11, 67)
    if (verse11.isPlaying() == true) {
        push()
        noStroke();
        fill(231, 196, 200)
        let r = map(verse11.currentTime(), 0, verse11.duration() * 0.33, 0, height * 0.5)
        r = constrain(r, 100, height * 0.5)

        let c = map(verse11.currentTime(), verse11.duration() * 0.33, verse11.duration(), 0, height * 0.5)
        c = constrain(c, 100, height * 0.5)

        rectMode(CENTER)
        fill(231, 196, 200)
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
        rotate(degrees(90))
        pop()
    }
    //touche W "KONO DiO DA WRYYYY"
    playSound(ora, 87)
    if (ora.isPlaying() == true) {

        let d1 = 20 + (sin(angle2) * diameter) / 2 + diameter / 2;
        let d2 = 20 + (sin(angle2 + PI / 2) * diameter) / 2 + diameter / 2;
        let d3 = 20 + (sin(angle2 + PI) * diameter) / 2 + diameter / 2;

        ellipse(0, height / 2, d1, d1);
        ellipse(width / 2, height / 2, d2, d2);
        ellipse(width, height / 2, d3, d3);

        angle2 += 0.5;
    }

//touche X inpiré de https://p5js.org/examples/simulate-penrose-tiles.html 
    playSound(verse8, 88)
    if (verse8.isPlaying() == true) {
        ds.render();
    }



//touche K utilisation variable de la fct amp
    playSound(verse3, 75)
    if (verse3.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rectMode(CENTER);
        var moveX = map(verse3.currentTime(), 0, verse3.duration(), -width * 0.5, width * 0.5);
        var amp = verse3Amp.getLevel();
        var moveY = map(amp, 0, 1, 0, 90);
        fill(223, 174, 180);
        noStroke();
        rect(moveX, moveY, 40, 40);
        pop();
    }
    //touche M
    playSound(verse1, 77)
    if (verse1.isPlaying() == true) {
        let c = map(verse1.currentTime(), verse1.duration() * 0.33, verse1.duration(), 0, height * 0.5)
        c = constrain(c, 0, height * 0.5)
        for (i = 0; i < 50; i++) {
            let b = map(pow(i, 2), pow(0, 2), pow(49, 2), 160, 0)
            let r = map(i, 0, 49, height * 0.5, height * 0.4)
            noStroke()
            fill(b)
            ellipse(width * 0.5, height * 0.5, r, r)
        }
        for (i = 0; i < 50; i++) {
            let g = map(i, 0, 49, 50, 128)
            let radius = map(i, 0, 49, height * 0.4, 15)
            noStroke()
            fill(0, g, 0)
            ellipse(width * 0.5, height * 0.5, radius, radius)
        }
        for (i = 0; i < 19; i++) {
            let g = map(i, 0, 19, 20, 100)
            let alpha = map(i, 0, 19, 1, 255)
            let radius = map(pow(i, 0.5), pow(0, 2), pow(19, 0.5), height * 0.1, 10)
            fill(251, 229, g, alpha)
            ellipse(width * 0.5, height * 0.5, radius, radius)
        }
        for (i = 0; i < 19; i++) {
            let g = map(i, 0, 19, 20, 100)
            let alpha = map(i, 0, 19, 1, 255)
            let radius = map(pow(i, 0.5), pow(0, 2), pow(19, 0.5), height * 0.02, 10)
            fill(251, 229, g, alpha)
            ellipse(width * 0.44, height * 0.43, radius, radius)
        }
        for (i = 0; i < TWO_PI; i += TWO_PI / 32) {
            let angle = i
            let r = height * 0.4 / 2
            let x = width * 0.5 + r * cos(angle)
            let y = height * 0.5 + r * sin(angle)
            let x1 = x
            let y1 = y
            let x2 = x1
            let y2 = y1 - sin(angle) * r
            let x3 = x1 - cos(angle) * r
            let y3 = y1
            stroke(0, 0, 0)
            line(x1, y1, x2, y2)
            line(x1, y1, x3, y3)
        }
    }



    //touche H
    playSound(verse2, 72)
    if (verse2.isPlaying() == true) {
        let c = map(verse2.currentTime(), verse2.duration() * 0.33, verse2.duration(), 0, height * 0.5)
        fill(221, 154, 194);
        // draw a polygon out of the wave points
        beginShape();
        let xoff = 0; // idée 1: 2D Noise
        // let xoff = yoff; // idée 2: 1D Noise

        // boucle horizontal pixels
        for (let x = 0; x <= width; x += 10) {
            //calcul de la valeur de y en fonction du noise,

            // idée 1: 2D Noise
            let y = map(noise(xoff, yoff), 0, 1, 200, 300);

            // idée 2: 1D Noise
            // let y = map(noise(xoff), 0, 1, 200,300);


            vertex(x, y);
            // incrémenter x au noise
            xoff += 0.05;
        }
        // incrementer y au noise
        yoff += 0.01;
        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);
    }


    //touche G
    playSound(drone4, 71)
    if (drone4.isPlaying() == true) {
        // let c = map(drone4.currentTime(), drone4.duration() * 0.33, drone4.duration(), 0, height * 0.5)
        //c = constrain(c, 0, height * 0.5)
        let k = 0
        for (let i = 0; i < 12; i++) {
            fill(255, i * 255 / 12, 200);
            let x = width / 2 + geisli * cos(horn + 2 * PI * i / 12);
            let y = height / 2 + geisli * sin(horn + 2 * PI * i / 12);
            ellipse(x, y, thverm_kula, thverm_kula);
            if (i % 2 == 0) {
                k = -2;
            } else {
                k = 3
            }
            for (let j = 0; j < 12; j++) {
                fill(j * 255 / 12, i * 255 / 12, 200);
                let xg = x + 50 * cos(k * horn + 2 * PI * j / 12);
                let yg = y + 50 * sin(k * horn + 2 * PI * j / 12);
                ellipse(xg, yg, 10, 10);
            }
        }
        horn += 0.01
    }


    // touche A
    playSound(sound03, 65)
    if (sound03.isPlaying() == true) {
        let r = map(sound03.currentTime(), 0, sound03.duration(), 0, width)
        fill(249, 240, 242)
        noStroke()
        ellipse((width * 0.5) - 600, (height * 0.5), r, r)
    }
    playSound(sound03, 65)
    if (sound03.isPlaying() == true) {
        let r = map(sound03.currentTime(), 0, sound03.duration(), 0, width)
        fill(251, 245, 246)
        noStroke()
        ellipse((width * 0.5) + 600, height * 0.5, r, r)
    }
    // touhe Z

    playSound(sound02, 90)
    if (sound02.isPlaying() == true) {
        noStroke();
        fill(249, 240, 242)
        let r = map(sound02.currentTime(), 0, sound02.duration() * 0.33, 0, height * 0.5)
        r = constrain(r, 0, height * 0.5)

        let c = map(sound02.currentTime(), sound02.duration() * 0.33, sound02.duration(), 0, height * 0.5)
        c = constrain(c, 0, height * 0.5)

        rectMode(CENTER)
        fill(249, 240, 242)
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
    }
    // son FFT WAVEFORM et touche T
    playSound(naruto, 84)
    if (naruto.isPlaying() == true) {
        push();
        var waveform = narutoFFT.waveform();
        noFill()
        beginShape()
        stroke(241, 221, 226);
        strokeWeight(10)
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width)
            var y = map(waveform[i], -1, 1, 0, height)
            curveVertex(x, y)
        }
        endShape()
        pop()

    }
    //touche R
    playSound(sound04, 82)
    if (sound04.isPlaying() == true) {
        push()
        let angleR = map(sound04.currentTime(), 0, sound04.duration(), 0, TWO_PI)
        rectMode(CENTER)
        noFill()
        stroke(245, 231, 234)
        translate(width * 0.5, height * 0.5)
        rotate(angleR)
        rect(0, 0, height * 0.5, height * 0.5)
        pop()
    }
    // petals et touche E
    playSound(son1, 69);
    let r = map(sound02.currentTime(), 0, sound02.duration() * 0.33, 0, height * 0.5)
    r = constrain(r, 0, height * 0.5)

    let c = map(sound02.currentTime(), sound02.duration() * 0.33, sound02.duration(), 0, height * 0.5)
    c = constrain(c, 0, height * 0.5)
    if (son1.isPlaying() == true) {
        push()
        fill(247, 236, 238);

        let t = frameCount / 100;

        for (let blossom of petals) {
            blossom.update(t);
            blossom.display();
        }
        pop()
    }
    //touche Y
    playSound(stab1, 89); // 'y' == stab1
    if (stab1.isPlaying() == true) {
        push()
        var rotation = map(stab1.currentTime(), 0, stab1.duration(), 0, TWO_PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(239, 217, 222)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()
    }

    // touche U tu ne le sais pas encore mais tu es déjà sous mn genjutsu
    playSound(son2, 85);
    if (son2.isPlaying() == true) {
        push();
        translate((width * 0.5) - 500, height * 0.5);
        noFill();
        stroke(0)
        strokeWeight(25);
        ellipse(0, 0, 600, 600);
        noStroke();
        fill(184, 0, 0);
        ellipse(0, 0, 600, 600);
        fill(0);
        ellipse(0, 0, 100, 100);
        noFill();
        stroke(0, 70);
        strokeWeight(10);
        ellipse(0, 0, 350, 350);
        for (i = 0; i < TWO_PI; i += PI / 3) {
            push();
            rotate(i);
            noStroke();
            fill(0, 70);
            triangle(-70, -305, 70, -305, 0, -280);
            pop();
        }
        push();
        var rotation
        rotation += 0.06;
        rotate(rotation);
        noStroke();
        fill(0);
        ellipse(175, 0, 50);
        pop();
        pop()
    }
    //Touche U 2 jeune shunin
    playSound(son2, 85);
    if (son2.isPlaying() == true) {
        push();
        translate((width * 0.5) + 500, height * 0.5);
        noFill();
        stroke(0)
        strokeWeight(25);
        ellipse(0, 0, 600, 600);
        noStroke();
        fill(184, 0, 0);
        ellipse(0, 0, 600, 600);
        fill(0);
        ellipse(0, 0, 100, 100);
        noFill();
        stroke(0, 70);
        strokeWeight(10);
        ellipse(0, 0, 350, 350);

        for (i = 0; i < TWO_PI; i += PI / 3) {
            push();
            rotate(i);
            noStroke();
            fill(0, 70);
            triangle(-70, -305, 70, -305, 0, -280);
            pop();
        }
        push();
        rotation += 0.06;
        rotate(rotation);
        noStroke();
        fill(0);
        ellipse(175, 0, 50);
        pop();
        pop()

    }
    //Tpuche 'I' == drone1
    playSound(drone1, 73); 
    if (drone1.isPlaying() == true) {
        push()
        drone1FFT.analyze();
        rectMode(CENTER);
        var nrj1 = drone1FFT.getEnergy("bass")

        push()
        fill(237, 212, 218, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 0.2, nrj1 * 0.2)
        pop()

        push()
        fill(237, 220, 218)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 2, nrj1 * 2)
        pop()

        push()
        fill(237, 225, 218, nrj1, 5)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 0.2, nrj1 * 0.2)
        pop()

        push()
        fill(237, 230, 218, nrj1, 10)
        translate(width * 0.5, height * 0.90)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 0.8, nrj1 * 0.8)
        pop()

        push()
        fill(237, 235, 218, nrj1, 15)
        translate(width * 0.5, height * 0.10)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 0.8, nrj1 * 0.8)
        pop()

        pop()
    }
    //touche O
    playSound(rasengan, 79);
    if (rasengan.isPlaying() == true) {
        push()
        translate(width * 0.5, height * 0.5);
        let r = map(rasengan.currentTime(), 0, rasengan.duration(), 0, 800)
        for (var i = 0; i < 7; i++) {
            fill(128, 200, 255, 50);
            xPosition[i] = random(200);
            yPosition[i] = random(200);
            stroke(255);
            ellipse(xPosition[i], yPosition[i], r);
        }
        pop()
    }
    //touche P
    playSound(drone2, 80);
    if (keyIsDown(80)) {
        anim1 = {
            w: 0
        }
        var animation1 = anime({
            targets: anim1,
            w: height * 0.6,
            easing: 'cubicBezier(.91, -0.54, .29, 1.56)',
            direction: 'alternate',
            loop: true,
            duration: 1000
        });
    }
    if (drone2.isPlaying() == true) {
        push()
        noFill()
        fill(255)
        // ... en utilisant la propriété 'w' stocké dans l'objet 'anim1'
        ellipse(width * 0.1, height * 0.5, anim1.w, anim1.w)
        pop()
    }
    if (drone2.isPlaying() == true) {
        push()
        noFill()
        fill(255)
        // ... en utilisant la propriété 'w' stocké dans l'objet 'anim1'
        ellipse(width * 0.9, height * 0.5, anim1.w, anim1.w)
        pop()
    }
    if (drone2.isPlaying() == true) {
        push()
        noFill()
        fill(255)
        // ... en utilisant la propriété 'w' stocké dans l'objet 'anim1'
        ellipse(width * 0.5, height * 0.3, anim1.w, anim1.w)
        pop()
    }
    // touche Q
    if (keyIsDown(81)) {
        playSound(verse14, 81)
        anim2 = {
            x1: -50,
            y1: -50,
            x2: -50,
            y2: -50,
            x3: -50,
            y3: -50
        }

        var timelineParameters = anime.timeline({
                easing: 'easeInOutElastic',
                direction: 'alternate',
                loop: false
            }).add({
                targets: anim2,
                x1: [{
                    value: width * 0.80
                }, {
                    value: width * 0.160
                }, {
                    value: width * 0.250
                }, {
                    value: -50
                }],
                y1: [{
                    value: height * 0.30
                }, {
                    value: height * 0.60
                }, {
                    value: height * 0.60
                }, {
                    value: -50
                }],
                duration: 3000
            })
            .add({
                targets: anim2,
                x2: [{
                    value: width * 0.80
                }, {
                    value: width * 0.160
                }, {
                    value: width * 0.250
                }, {
                    value: -50
                }],
                y2: [{
                    value: height * 0.30
                }, {
                    value: height * 0.90
                }, {
                    value: height * 0.60
                }, {
                    value: -50
                }],
                duration: 3000
            }, '-=1500') // offset relative to the end of previous animation
            .add({
                targets: anim2,
                x3: [{
                    value: width * 0.80
                }, {
                    value: width * 0.250
                }, {
                    value: -50
                }],
                y3: [{
                    value: height * 0.60
                }, {
                    value: height * 0.30
                }, {
                    value: height * 0.30
                }, {
                    value: -50
                }],
                duration: 3000

            }, 400); // absolute offset
    }

    push()
    noStroke()
    fill(235, 207, 214)
    ellipse(anim2.x1, anim2.y1, 50, 50)
    fill(234, 203, 210)
    ellipse(anim2.x2, anim2.y2, 50, 50)
    fill(213, 185, 191)
    ellipse(anim2.x3, anim2.y3, 50, 50)
    pop()

    //touche S
    playSound(nani, 83);
    if (keyIsDown(83)) {
        //let c = map(nani.currentTime(), nani.duration() * 0, nani.duration(), 0, height * 0.5)
        //c = constrain(c, 0, height * 0.5)
        push()
        anim3 = {
            x: -40,
            rot: 0
        }

        var animationMyObject = anime({
            targets: anim3,
            x: width,
            rot: TWO_PI,
            easing: 'easeOutExpo',
            direction: 'alternate',
            loop: 1,
            duration: 600
        });
        pop()
    }

    push()
    noStroke()
    rectMode(CENTER)
    fill(64, 56, 58)
    translate(anim3.x, height * 0.5)
    rotate(anim3.rot)
    rect(0, 0, 80, 160)
    pop()

    //touche D

    playSound(drone5, 70);
    if (drone5.isPlaying() == true) {

        push()
        let c = map(drone5.currentTime(), drone5.duration() * 0.33, drone5.duration(), 0, height * 0.5)
        c = constrain(c, 0, height * 0.5)
        //angleMode(DEGREES);
        push()
        for (let i = 0; i < 600; i = i + 1) {
            let x = random(width);
            let y = random(height);
            stroke(0, 0, 100, 20);
            point(x, y);
        }
        pop()

        push()
        noStroke()
        rectMode(CENTER)
        //fill(234, 203, 207)
        //rect(width * 0.5, anim4.y, 50, anim4.h)
        pop()

        push();
        translate(width / 4, 0);
        for (let y = 0; y < height; y = y + 1) {
            let angle = y + frameCount;
            let x = sin(angle) * cos(angle) * height / 3;

            noFill()
            strokeWeight(0.5)
            stroke(234, 203, 207, 5);
            rect(x, y, y, y);

        }
        pop()

        pop()
    }
    // touche j
    playSound(verse10, 74);
    if (verse10.isPlaying()) {
        // faire de x et y une grille d'ellipse
        for (let xx = 0; xx <= width; xx = xx + 30) {
            for (let yy = 0; yy <= height; yy = yy + 30) {
                // le point de départ de la rotation dépend de la position de la souris
                let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI);
                let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI);
                // varie aussi selon ou se trouve la particule
                let angle = xAngle * (xx / width) + yAngle * (yy / height);

                // chaque particule bouge en cercle
                let myX = xx + 20 * cos(2 * PI * t1 + angle);
                let myY = yy + 20 * sin(2 * PI * t1 + angle);
                fill(234, 203, 210)
                ellipse(myX, myY, 10, 10); // draw particle

            }
        }

        t1 = t1 + 0.01; // update time
        console.log(t1)

    }
// Touche L ensemble de point et utilisation de [] vue dans le cours
    playSound(verse4, 76)
    if (verse4.isPlaying() == true) {

        push()
        var t = map(verse4.currentTime(), 0, verse4.duration() * 0.75, 0, 1)
        var grey = map(verse4.currentTime(), verse4.duration() * 0.75, verse4.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        fill(grey)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }
    //Touche D
    if (keyIsDown(68)) {
        playSound(verse16, 68)
        anim4 = {
            y: -40,
            h: 0
        }

        var animationMyObject = anime({
            targets: anim4,
            y: [{
                    value: height,
                    duration: 1000,
                    delay: 500,
                    elasticity: 0
                },
                {
                    value: 0,
                    duration: 1000,
                    delay: 500,
                    elasticity: 0
                }
            ],
            h: [{
                    value: [175, 50],
                    duration: 500
                },
                {
                    value: 200,
                    duration: 50,
                    delay: 1000,
                    easing: 'easeOutExpo'
                },
                {
                    value: 100,
                    duration: 450
                },
                {
                    value: 175,
                    duration: 50,
                    delay: 1000,
                    easing: 'easeOutExpo'
                },
                {
                    value: 10,
                    duration: 450
                }
            ]
        })


    }
    push()
    noStroke()
    rectMode(CENTER)
    fill(192, 167, 172)
    rect(width * 0.5, anim4.y, 50, anim4.h)
    pop()





}
//Fonction pour simuler les pétale du cerisier qui tombe lors de sa floraison
function petal() {
    this.posX = 0;
    this.posY = random(-500, 0);
    this.initialangle = random(10, 0 * PI);
    this.size = random(5, 10);
    //ellipse(10, 20, 20, 7)
    this.radius = sqrt(random(pow(width / 1, 2)));
    this.update = function (time) {
        let w = 0.1;
        let angle = w * time + this.initialangle;
        this.posX = width / 1 + this.radius * tan(angle);
        this.posY += pow(this.size, 0.5);
        if (this.posY > height) {
            //let index = petals.indexOf(this);
            //petals.splice(index, 1);
            this.posY = -50;
        }
    }
    this.display = function () {
        ellipse(this.posX, this.posY, this.size);
    }
}
//fontion pour simuler les tiles de piano generative
function PenroseLSystem() {
    this.steps = 0;

    
    this.axiom = "[X]++[X]++[X]++[X]++[X]";
    this.ruleW = "YF++ZF----XF[-YF----WF]++";
    this.ruleX = "+YF--ZF[---WF--XF]+";
    this.ruleY = "-WF++XF[+++YF++ZF]-";
    this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";

    
    this.startLength = 460.0;
    this.theta = TWO_PI / 10.0; //36 degrees, try TWO_PI / 6.0, ...
    this.reset();
}

PenroseLSystem.prototype.simulate = function (gen) {
    while (this.getAge() < gen) {
        this.iterate(this.production);
    }
}

PenroseLSystem.prototype.reset = function () {
    this.production = this.axiom;
    this.drawLength = this.startLength;
    this.generations = 0;
}

PenroseLSystem.prototype.getAge = function () {
    return this.generations;
}

//application de la régle de  substitution rules pour créer une nouvelle itération
PenroseLSystem.prototype.iterate = function () {
    let newProduction = "";

    for (let i = 0; i < this.production.length; ++i) {
        let step = this.production.charAt(i);
        
        if (step == 'W') {
            newProduction = newProduction + this.ruleW;
        } else if (step == 'X') {
            newProduction = newProduction + this.ruleX;
        } else if (step == 'Y') {
            newProduction = newProduction + this.ruleY;
        } else if (step == 'Z') {
            newProduction = newProduction + this.ruleZ;
        } else {
           
            if (step != 'F') {
                newProduction = newProduction + step;
            }
        }
    }

    this.drawLength = this.drawLength * 0.5;
    this.generations++;
    this.production = newProduction;
}

//convertie le graph
PenroseLSystem.prototype.render = function () {
    translate(width / 2, height / 2);

    this.steps += 20;
    if (this.steps > this.production.length) {
        this.steps = this.production.length;
    }

    for (let i = 0; i < this.steps; ++i) {
        let step = this.production.charAt(i);

       
        if (step == 'F') {
            stroke(255, 60);
            for (let j = 0; j < this.repeats; j++) {
                line(0, 0, 0, -this.drawLength);
                noFill();
                translate(0, -this.drawLength);
            }
            this.repeats = 1;
        } else if (step == '+') {
            rotate(this.theta);
        } else if (step == '-') {
            rotate(-this.theta);
        } else if (step == '[') {
            push();
        } else if (step == ']') {
            pop();
        }
    }
}

function branch(h) {
    // chaque branche fait 2/3 la taille de la précedente
    h *= 0.66;

    // toute les fct récursives ont une option de sortie
    // ici c'est quand la branche est supérieur a 2 pixel
    if (h > 2) {
        push(); 
        rotate(theta); // Rotate selon theta
        line(0, 0, 0, -h); // dessine la branche
        translate(0, -h); // bouge jusqu'à la fin de la branche 
        branch(h); //mnt on dit à la fct de dessiner 2 branches
        pop(); 

        // repéte la meme chose jusqu'a se qu'il ne peut plus
        push();
        rotate(-theta);
        line(0, 0, 0, -h);
        translate(0, -h);
        branch(h);
        pop();
    }
}



function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        sound.play()
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}