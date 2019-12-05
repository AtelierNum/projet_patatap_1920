
let sound01;
let sound02;
let sound03;
let sound03FFT;
let sound04;
let sound05;
let sound05FFT;
let sound06;
let sound07;
let sound08;
let sound09;
let sound09FFT;
let sound10;
let sound11;
var repeat = 10;
var rectSize = 100;
var reduction = rectSize / repeat;
var marginX
var marginY
var round = false
var cornerRad = 0
var slotSize = 200;
var marginX
var marginY
let col = ["#fa86be",  "#9aebed", "#f6f5f5", "#3bb4c1"]
let n = 10
let seed;
let seed25;
let seed22;
let seed21;
let seed19;
let seed17;
let seed16;
let seed15;
var m = 10;
var f = 2;
var epsilon = 0.05;

var pg
let xpos = []
let ypos = []
let xtarget = []
let ytarget = []

var siz = 50;
var sez = 50;
var pg

var siiz = 500;
var noiseX
var noiseY

let step = 1
let c = '%'
let colorsfront = [ "#ffd3d3", "#fcffa5", "#fc7afa", "#8fbdf6"]
let colorsback = ["#1a3a51", "#5c134a", "#3c415e", "#00677e"]

let c1
let c2

let fonts = [ "Monoton", "East Sea  Dokdo", "Fascinate Inline ", "Righteous"]

var yOffset = 4;

var colors = ["#eeeeee","#dddddd","#cccccc","#bbbbbb","#aaaaaa"]

var stepp = 0.05;
var phase = 0;
var mod =2;

var nb = 1
var rounded = 0

var sizz = 150;
var seedd = 160;

var repeat = 10;
var rectSize = 100;
var reduction = rectSize / repeat ;
var marginX
var marginY
var round = false
var cornerRad =0

function preload() {
    sound01 = loadSound("Assets/Son1.wav")
    sound02 = loadSound("Assets/Son2.wav")
    sound03 = loadSound("Assets/Son3.wav")
    sound04 = loadSound("Assets/Son4.wav")
    sound05 = loadSound("Assets/Son5.wav")
    sound06 = loadSound("Assets/Son6.wav")
    sound07 = loadSound("Assets/Son7.wav")
    sound08 = loadSound("Assets/Son8.wav")
    sound09 = loadSound("Assets/Son9.wav")
    sound10 = loadSound("Assets/Son10.wav")
    sound11 = loadSound("Assets/Son11.mp3")
    sound12 = loadSound("Assets/Son12.mp3")
    sound13 = loadSound("Assets/Son13.wav")
    sound14 = loadSound("Assets/Son14.wav")
    sound15 = loadSound("Assets/Son15.wav")
    sound16 = loadSound("Assets/Son16.wav")
    sound17 = loadSound("Assets/Son17.wav")
    sound18 = loadSound("Assets/Son18.wav")
    sound19 = loadSound("Assets/Son19.wav")
    sound20 = loadSound("Assets/Son20.wav")
    sound21 = loadSound("Assets/Son21.wav")
    sound22 = loadSound("Assets/Son22.wav")
    sound23 = loadSound("Assets/Son23.wav")
    sound24 = loadSound("Assets/Son24.wav")
    sound25 = loadSound("Assets/Son25.wav")
    sound26 = loadSound("Assets/Son26.wav")

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)

    sound03FFT = new p5.FFT(0.8, 1024)
    sound03FFT.setInput(sound03)

    sound05FFT = new p5.FFT(0.8, 1024)
    sound05FFT.setInput(sound05)

    sound09FFT = new p5.FFT(0.8, 1024)
    sound09FFT.setInput(sound09)

    rectMode(CENTER);
    pixelDensity(1)

    marginX = windowWidth - int((windowWidth / rectSize)) * rectSize;
    marginY = windowHeight - int((windowHeight / rectSize)) * rectSize;
    

    seed = random(99999)
    seed22 = random(99999);

    
    pg = createGraphics(320, 240)
    pg.background(0);
    pg.pixelDensity(1)

    pixelDensity(1)

    for (let i = 0; i < 50; i++) {
        // ajouter des éléments au dessus de notre canvas
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarget.push(random(width))
        ytarget.push(random(height))
    }
    pixelDensity(1)

    seed = random(5000)

    pg = createGraphics(siz+2,siz+2)

    pg.noFill()
    pg.stroke(255)
    pg.strokeWeight(4)
    pg.strokeCap(ROUND)
    pg.arc( pg.width/2, pg.height/2, pg.width,  pg.height, 0, PI/2);

    imageMode(CENTER,CENTER)

    noiseX = random(10000);
    noiseY = random(10000);


    pg = createGraphics(siz, siz)

    pg.strokeCap(ROUND)


    imageMode(CENTER, CENTER)
    background(0);
    pg.background(0);

    textSize(slotSize)
    textAlign(CENTER, CENTER)

    c1 = "#3c415e"
    c2 = "#ffd3d3"

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    textFont('Righteous')

    seed = random(1000);
    round = random(siz / 2);

    rectMode(CENTER);

    seed = random(1000);

    

    /* sound01.play()
     sound02.play()
     sound03.play()
     sound04.play()
     sound05.play()
     sound06.play()
     sound07.play()
     sound08.play()
     sound09.play()
     sound10.play()
     sound11.play()
     sound12.play()
     sound13.play()
     sound14.play()
     sound15.play()
     sound16.play()
     sound17.play()
     sound18.play()
     sound19.play()
     sound20.play()
     sound21.play()
     sound22.play()
     sound23.play()
     sound24.play()
     sound25.play()
     sound26.play()*/


}

function draw() {
    background(0)

    PlaySound(sound01, 65); //A
    if (sound01.isPlaying() == true) {
        push()
        fill('#0F9DE8')
        let r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)
        ellipse(width * 0.5, height * 0.5, r, r)
        pop()
    }

    PlaySound(sound02, 90); //Z
    if (sound02.isPlaying() == true) {
        push()
        let r = map(sound02.currentTime(),
            0, sound02.duration() * 0.33,
            0, height * 0.5
        )
        r = constrain(r, 0, height * 0.5)

        let c = map(sound02.currentTime(),
            sound02.duration() * 0.33, sound02.duration(),
            0, height * 0.5
        )
        c = constrain(c, 0, height * 0.5)

        rectMode(CENTER)
        noStroke()
        fill('#CC5500')
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
        pop()
    }
    PlaySound(sound03, 69); //E
    if (sound03.isPlaying() == true) {
        push()
        let wave = sound03FFT.waveform()
        noFill()
        strokeWeight(10)
        stroke('#1E7FCB')
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }

    PlaySound(sound04, 82); //R
    if (sound04.isPlaying() == true) {
        push()
        let angle = map(sound04.currentTime(), 0, sound04.duration(), 0, TWO_PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, height * 0.25, height * 0.25)
        fill('#9D3E0C')
        noStroke()
        pop()

    }
    PlaySound(sound05, 84); //T
    if (sound05.isPlaying() == true) {
        push()
        sound05FFT.analyze();
        var nrj1 = sound05FFT.getEnergy("bass")
        pop()
        push()
        noStroke()
        fill(0, 200, 255, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        noStroke()
        fill(0, 200, 255, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke()
        fill(0, 200, 255, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)

        pop()
    }
    PlaySound(sound06, 89); //Y
    if (sound06.isPlaying() == true) {
        let r = map(sound06.currentTime(), 0, sound06.duration(), 0, width)
        fill('#AD4F09')
        ellipse(width * 0.5, height * 0.5, r, r)
    }

    PlaySound(sound07, 85); //U
    if (sound07.isPlaying() == true) {
        let r = map(sound07.currentTime(),
            0, sound07.duration() * 0.33,
            0, height * 0.5
        )
        r = constrain(r, 0, height * 0.5)

        let c = map(sound07.currentTime(),
            sound07.duration() * 0.33, sound07.duration(),
            0, height * 0.5
        )
        c = constrain(c, 0, height * 0.5)

        rectMode(CENTER)
        fill('#26C4EC')
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
    }

    PlaySound(sound08, 73); //I
    if (sound08.isPlaying() == true) {
        let r = map(sound08.currentTime(),
            0, sound08.duration() * 0.33,
            0, height * 0.5
        )
        r = constrain(r, 0, height * 0.5)

        let c = map(sound08.currentTime(),
            sound08.duration() * 0.33, sound08.duration(),
            0, height * 0.5
        )
        c = constrain(c, 0, height * 0.5)

        rectMode(CENTER)
        fill('#842E1B')
        rect(width * 0.5, height * 0.5, r, r, c, c, c, c)
    }

    PlaySound(sound09, 79); //O
    if (sound09.isPlaying() == true) {
        push()
        sound09FFT.analyze();
        var nrj1 = sound09FFT.getEnergy("bass")
        pop()
        push()
        noStroke()
        fill(140, 200, 180, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        noStroke()
        fill(140, 200, 180, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke()
        fill(140, 200, 180, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)

        pop()
    }

    PlaySound(sound10, 80); //P
    if (sound10.isPlaying() == true) {
        push()
        noFill()
        stroke('#88421D')
        let r = map(sound10.currentTime(),
            0, sound10.duration(),
            1, 5
        )
        strokeWeight(r)

        if (round) {
            cornerRad++
            cornerRad = constrain(cornerRad, 0, rectSize / 2)
        }
        else {
            cornerRad--
            cornerRad = constrain(cornerRad, 0, rectSize / 2)
        }

        for (var x = marginX / 2 + rectSize / 2; x < width - marginX / 2; x += rectSize) {
            for (var y = marginY / 2 + rectSize / 2; y < height - marginY / 2; y += rectSize) {
                push()
                translate(x, y)

                for (var i = 0; i < repeat; i++) {
                    push()
                    var offsetX = map(sound10.currentTime(), 0, width, -rectSize / 2, rectSize / 2);
                    var offsetY = map(sound10.currentTime(), 0, height, -rectSize / 2, rectSize / 2);
                    var offsetScale = map(i, 0, repeat, 0, 1);
                    var rotation = map(i, 0, repeat, 0, PI / 2)
                    translate(offsetX * offsetScale, offsetY * offsetScale)
                    rotate(rotation)
                    noStroke()
                    
                    var gray = map(i, 0, repeat, 100, 255)
                    stroke(255, gray)
                    //fill(gray, 75)
                    rect(0, 0, rectSize - i * reduction, rectSize - i * reduction, cornerRad)
                    pop()
                }
                pop()
            }
        }
    }
    else{
        round = true
        cornerRad = 0}
   

    PlaySound(sound11, 81); //Q
    if (sound11.isPlaying() == true) {
        push()
        stroke('#17657D');
        //fill(0);
        noFill();

        for (var i = 0; i <= width; i += 100) {
            for (var j = 0; j <= height; j += 100) {
                let r = map(sound11.currentTime(), 0, sound11.duration(), 0, width)
                for (var k = 0; k <= int(map(r, 0, width, 1, 10)); k += 1) {
                    var diam = map(r, 0, height, 1, 10);
                    ellipse(i, j, k * diam, k * diam);
                }
            }

        }
        pop()
    }
    PlaySound(sound12, 83); //S
    if (sound12.isPlaying() == true) {
        for (var x = marginX / 2 + slotSize / 2; x < width - marginX / 2; x += slotSize) {
            for (var y = marginY / 2 + slotSize / 2; y < height - marginY / 2; y += slotSize) {
                push()
                fill('#17657D')
                translate(x, y)
                n = int(map(sound12.currentTime(), 1, windowHeight, 2, 40))
                strokeWeight(slotSize/(n*4))
                strokeCap(ROUND)
                //ellipse(x, y, slotSize, slotSize)
                for (let i = slotSize/n; i < slotSize; i += slotSize/n) {
                    stroke(col[int(random(col.length))])
                    rotate(map(sound12.currentTime() + i*PI , 0, windowWidth, 0, TWO_PI))
                    arc(0, 0, i, i, random(PI), random(PI, TWO_PI))
                }
                pop()
            }
        }
    }
    PlaySound(sound13, 68); //D
    if (sound13.isPlaying() == true) {
        push()
        let r = map(sound13.currentTime(), 0, sound13.duration(), 0, width)
        noFill()
        stroke('#003366')
        strokeWeight(2)
        ellipse(width * 0.5, height * 0.5, r, r)
        pop()

        push()
        let r1 = map(sound13.currentTime(), 0, sound13.duration(), 0, width)
        noFill()
        stroke('#AD4F09')
        strokeWeight(7)
        ellipse(width * 0.5, height * 0.5, r1 * 3, r1 * 3)
        pop()

        push()
        let r2 = map(sound13.currentTime(), 0, sound13.duration(), 0, width)
        noFill()
        stroke('#AD4F09')
        strokeWeight(7)
        ellipse(width * 0.5, height * 0.5, r2 * 0.2, r2 * 0.2)
        pop()
        
        
    }

    PlaySound(sound14, 70); //F
    if (sound14.isPlaying() == true) {
        for (let i = 0; i < 50; i++) {
            push()
            var t = map(sound14.currentTime(), 5, sound14.duration() * 0.5, 0, 1)
            var grey = map(sound14.currentTime(), sound14.duration() , sound14.duration(), 255, 180)
            t = constrain(t, 0, 5)
            grey = constrain(grey, 180, 255)
            fill('#9D3E0C')
            noStroke()
            for (let i = 0; i < 100; i++) {
                var x = lerp(xpos[i], xtarget[i], t)
                var y = lerp(ypos[i], ytarget[i], t)
                ellipse(x, y, 20, 20)
            }
            pop()
        }

    }

    PlaySound(sound15, 71); //G
    if (sound15.isPlaying() == true) {
        seed15 += stepp;
        stroke(255);
        noFill();

        for (var i = 0; i <= width; i += siz) {
            for (var j = 0; j <= height; j += siz) {
                push()
                translate(i,j)
                var angle = random
                rotate(angle)
                image(pg,0,0)

                pop()
            }

        }

    }

    PlaySound(sound16, 72); //H
    if (sound16.isPlaying() == true) {
        seed16 += stepp;
        noStroke();
        //fill(0);
        noFill();

        for (var i = 0; i <= width; i += siz) {
            for (var j = 0; j <= height; j += siz) {
                push()
                translate(i, j)
                var angle = TWO_PI * (int(random(1,5))) / 4
                var r = int(random(2))
                rotate(angle)
                var hue = random(250, 360)
                fill(255)

                fill(30, 100, 100)
                noStroke(hue, 100, 100)
                triangle(-siz/2, -siz/2,siz/2, -siz/2, siz/2, siz/2)

                pop()
            }

        }

    }
    // Je voudrais qu'il puisse former un carré et s'eclater.

    PlaySound(sound17, 74); //J
    if (sound17.isPlaying() == true) {
        seed17 += stepp;
        // background(0);
        noStroke();
        fill('#26C4EC');

        for (var i = 0; i <= width; i += siiz) {
            for (var j = 0; j <= height; j += siiz) {
                push()
                imageMode(CORNER)
                translate(i, j)

                image(pg, 0, 0)

                pop()
            }

        }
    
    pg.background(0, 5)

    for (var x = 0; x < pg.width; x += 1) {
        var nf

        if (x < pg.width / 2) nf = map(x, 0, pg.width / 2, 0, 1)
        else nf = map(x, pg.width / 2, pg.width, 1, 0)

        var y = (noise(nf, frameCount / 500, 14) - 1) * siiz / 2 + pg.height / 2

        pg.stroke('#26C4EC')

        for (var i = -siiz; i < siiz; i += siiz / 15) {
            pg.point(x, y + i);
        }


    }


    }

    PlaySound(sound18, 75); //K
    if (sound18.isPlaying() == true) {
        for (var x = -slotSize / 2; x < width + slotSize; x += slotSize) {
            for (var y = -slotSize / 2; y < height + slotSize; y += slotSize) {
                push()
                textSize(slotSize)
                textAlign(CENTER, CENTER)
                fill('#9F551E')
                translate(x,y)
                push()
                scale(1, 1)
                translate( map(sound18.currentTime(), 0, windowWidth, -slotSize/2, slotSize/2), 0)
                rotate(map(sound18.currentTime(), 0, height, 0, TWO_PI))
                text(c, 0, 0)
                pop()
    
                push()
                scale(-1, 1)
                translate( map(sound18.currentTime(), 0, windowWidth, -slotSize/2, slotSize/2), 0)
                rotate(map(sound18.currentTime(), 0, height, 0, TWO_PI))
                text(c, 0, 0)
                pop()
    
    
                pop()
            }
    
    
    
    
        }

    }

    PlaySound(sound19, 76); //L
    if (sound19.isPlaying() == true) {
        seed19 += stepp;
        strokeWeight(0.5)
        stroke(255, 255, 255, 100)
        fill(255, 255, 255, 50)
        for (var i = siz; i < windowWidth - siz; i += siz) {
            for (var j = siz; j < windowHeight - siz; j += siz) {

                push()
                translate(i,j)
                rotate(random(TWO_PI))
                var rd = int(random(2,8));

                for (var k = 1 ; k <= rd ; k++){
                    rotate(PI/rd)
                    rect(0, 0, siz/k, siz/k, siz/10);
                }


                pop();
            }
        }

    }

    PlaySound(sound20, 77); //M
    if (sound20.isPlaying() == true) {
        var index = 0
        for (var y = -sqrt(2 * slotSize * slotSize) / 2; y < height + sqrt(2 * slotSize * slotSize); y += slotSize / yOffset) {
            index += 1
            for (var x = -sqrt(2 * slotSize * slotSize) / 2; x < width + sqrt(2 * slotSize * slotSize); x += sqrt(2 * slotSize * slotSize)) {


                push()
                if (index % 2 == 0) translate(sqrt(2 * slotSize * slotSize) / 2, 0)
                translate(x, y)
                rotate(PI / 4)
                noStroke()
                fill('#26619C')
                rect(0, 0, slotSize, slotSize)
                fill('#AD4F09')
                rect(0, 0, slotSize - slotSize * 1 / 5, slotSize - slotSize * 1 / 5)
                fill('#26619C')
                rect(0, 0, slotSize - slotSize * 2 / 5, slotSize - slotSize * 2 / 5)
                fill(117, 12, 17)
                rect(0, 0, slotSize - slotSize * 3 / 5, slotSize - slotSize * 3 / 5)
                fill(7, 23, 57)
                rect(0, 0, slotSize - slotSize * 4 / 5, slotSize - slotSize * 4 / 5)
                pop()
            }
        }
    
    
    }

    PlaySound(sound21, 87); //W
    if (sound21.isPlaying() == true) {
        seed21 += stepp;
        noFill();
        stroke(255);
        strokeWeight(3);


        for (var i = siz; i < windowWidth - siz; i += siz) {
            for (var j = siz; j < windowHeight - siz; j += siz) {
                push();
                var translateAmount = random(-1,1)*(j/siz);
                var rotateAmount = random(-PI, PI) * (j / (windowHeight * 7));
                translate(i+translateAmount, j);
                rotate(rotateAmount);
                rect(0, 0, siz, siz);
                pop();
            }
        }
       
    }

    PlaySound(sound22, 88); //X
    push();
    if (sound22.isPlaying() == true) {
        randomSeed(seed22);
        seed22 += stepp;
        //stroke(255);
        //noFill();
        for (var i = 0; i <= width; i += 150) {
            for (var j = 0; j <= height; j += 150) {
                for (var k = 0; k <15; k += 1) {
                    noStroke();
                    fill(colors[int(random(colors.length))]);
                    ellipse(i, j, 150 - k*10, 150 - k*10);
                }
            }
        }
        pop();
    }
    //changer les couleurs.

    PlaySound(sound23, 67); //C
    if (sound23.isPlaying() == true) {
        push();
        seed += stepp;
        fill('#0095B6')
        phase = 0;

        for (var i = siz; i < windowHeight - siz*2; i += siz) {
            for (var j = siz; j < windowWidth - siz*2; j += siz) {

                phase += 1
                var y = 0

                if (phase % mod == 0) y = ((cos(seed) + 1) / 2) * siz;
                else y = ((sin(seed) + 1) / 2) * siz;

                rect(j, i, siz, y);
            }
        }
        pop();
    
    }

    PlaySound(sound24, 86); //V
    if (sound24.isPlaying() == true) {
        for (var x = marginX / 2 + slotSize / 2; x < width - marginX / 2; x += slotSize) {
            for (var y = marginY / 2 + slotSize / 2; y < height - marginY / 2; y += slotSize) {
                push()
                translate(x, y)
                rotate(PI / 3)
                noFill()
    
                stroke(255)
                strokeWeight(2)
                fill(255,50)
    
                rect(0, 0, slotSize, slotSize, rounded)
                if(nb > 1) rect(0, 0, slotSize/1.25, slotSize/1.25, rounded)
                if(nb > 2) rect(0, 0, slotSize/1.5, slotSize/1.5, rounded)
                if(nb > 3) rect(0, 0, slotSize/2, slotSize/2, rounded)
                if(nb > 4) rect(0, 0, slotSize/3, slotSize/3, rounded)
                if(nb > 5) rect(0, 0, slotSize/4, slotSize/4, rounded)
                pop()
            }
        }

    }
    
    PlaySound(sound25, 66); //B
    if (sound25.isPlaying() == true) {
        push()
        seed25 += stepp;
        fill(255);
        for (var i = siz; i < windowWidth - siz; i += siz) {
            for (var j = siz; j < windowHeight - siz; j += siz) {
                var y = noise(seed, i / siz * 4, j * siz / 4) * siz;
                var rd = random(100);
    
                if (rd < 50) {
                    rect(i, j, y, y);
                } else {
                    ellipse(i, j, y, y);
                }
            }
        }
        pop()

    }

    PlaySound(sound26, 78); //N
    if (sound26.isPlaying() == true) {
        noFill()
        stroke(255)
        strokeWeight(0.5)
    
        if (round) {
            cornerRad  ++
            cornerRad = constrain(cornerRad, 0, rectSize/2)
        }
        else{
            cornerRad  --
            cornerRad = constrain(cornerRad, 0, rectSize/2)
        }
    
        for (var x = marginX /2 + rectSize /2 ; x < width  - marginX/2 ; x += rectSize){
            for (var y = marginY /2 + rectSize /2 ; y < height - marginY /2 ; y += rectSize){
                push()
                translate(x,y)
    
                for (var i =0 ; i < repeat ; i++){
                    push()
                    var offsetX = map(sound26.currentTime(), 0, width , -rectSize/2, rectSize/2);
                    var offsetY = map(sound26.currentTime, 0, height , -rectSize/2, rectSize/2);
                    var offsetScale = map(i, 0, repeat , 0 , 1);
                    var rotation = map(i , 0, repeat , 0, PI/2)
                    translate(offsetX *offsetScale, offsetY*offsetScale)
                    rotate(rotation)
                    noStroke()
                    var gray = map(i, 0, repeat, 100 ,255)
                    fill(gray,75)
                    rect (0,0  , rectSize - i*reduction , rectSize -i *reduction, cornerRad)
                    pop()
                }
                pop()
            }
        }
    }
}
//les faire bouger comme la lettre P

function PlaySound(sound, KeyID) {
    if (keyIsDown(KeyID) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

function windowResized() {
    marginX = windowWidth - int((windowWidth / rectSize)) * rectSize;
    marginY = windowHeight - int((windowHeight / rectSize)) * rectSize;

}

function mousePressed(){
	round = !round;
}
