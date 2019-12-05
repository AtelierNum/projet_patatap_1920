let sound01
let sound02
let sound03
let sound04
let sound04FFT
let sound05
let sound05FFT
let sound06
let sound07
let sound08
let sound09
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

function preload() {
    sound01 = loadSound("Sounds/485009__inspectorj__fox-vocal-cry-distant-01.wav")
    sound02 = loadSound("Sounds/461449__anarkya__hithat-open-01-minimoog.wav")
    sound03 = loadSound("Sounds/341695__projectsu012__coins-1 (1).wav")
    sound04 = loadSound("Sounds/288880__gellski__electrobass2.wav")
    sound05 = loadSound("Sounds/276611__mickleness__notification-unctuous.wav")
    sound06 = loadSound("Sounds/183105__dwsd__hat-appetizer.wav")
    sound07 = loadSound("Sounds/494687__phonosupf__violin-static.wav")
    sound08 = loadSound("Sounds/339809__inspectorj__hand-bells-b-single.wav")
    sound09 = loadSound("Sounds/54853__mastertronic__00ue-break-i-hate.wav")
    sound10 = loadSound("Sounds/41346__ivanbailey__3 (1).wav")
    sound11 = loadSound("Sounds/106761__tec-studio__dr-tom-000-b.wav")
    sound12 = loadSound("Sounds/84526__andreas-mustola__0005-crystal-lamp-with-swing-front.wav")
    sound13 = loadSound("Sounds/903__sleep__weird-loop-1.wav")
    sound14 = loadSound("Sounds/184534__altemark__tom3.wav")
    sound15 = loadSound("Sounds/205982__klangkonserve__scratch3.wav")
    sound16 = loadSound("Sounds/460261__ddmyzik__piano-jingle.wav")
    sound17 = loadSound("Sounds/58974__lucasgonze__lucasgonze-froginthewell-bit6.wav")
    sound18 = loadSound("Sounds/27282__nurykabe__121106bipsf01.wav")
    sound19 = loadSound("Sounds/336973__sacha-rush__tom-upstairs.wav")
    sound20 = loadSound("Sounds/9595__colon-fred__tok.wav")
    sound21 = loadSound("Sounds/207185__paulnorthyorks__seventh-chord-siren-stereo.wav")
    sound22 = loadSound("Sounds/238672__bronxio__afro-chords-loop-esg-ufo-2-bar-100-bpm.wav")
    sound23 = loadSound("Sounds/209489__jackjames-tomknevitt__zip.wav")
    sound24 = loadSound("Sounds/361496__tec-studio__bell-echo.wav")
    sound25 = loadSound("Sounds/51171__rutgermuller__tom-with-scratch.wav")
    sound26 = loadSound("Sounds/41346__ivanbailey__3.wav")

    let a = 1
    let x = 1
    let taille = 1
    let q = 1
    let p = 3
    let boule
    let b = 1
    let A1 = 1
    let A2 = 3
    let boul
    let rand = 0
    let steps
    let alea
    let xtarget18 = []
    let ytarget18 = []
    let x1
    let x2
}


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0, 0, 0)

    sound04FFT = new p5.FFT(0.8, 1024)
    sound04FFT.setInput(sound04)

    sound05FFT = new p5.FFT(0.8, 1024)
    sound05FFT.setInput(sound05)
}

function draw() {
    background(0, 0, 0, 55)

    // Touche A
    playSound(sound01, 65)
    if (sound01.isPlaying() == true) {
        let r = map(sound01.currentTime(), 1, sound01.duration(), 0, width * 1.5)
        fill(0, 0, 255, 50)
        noStroke()
        ellipse(windowWidth * 0.5, windowHeight * 0.5, r, r)
    }

    // Touche Z
    playSound(sound02, 90)
    if (sound02.isPlaying() == true) {
        fill(97, 150, 250)
        noStroke()
        let r = map(sound02.currentTime(), 0, sound02.duration() * 0.33, 50, width * 0.25)
        r = constrain(r, 0, width * 0.25)

        let c = map(sound02.currentTime(), sound02.duration() * 0.33, sound02.duration(), 50, width * 0.25)
        c = constrain(c, 0, width * 0.25)
        rectMode(CENTER)
        rect(windowWidth * 0.5, windowHeight * 0.5, r, r, c, c, c, c)
    }

    // Touche E
    playSound(sound03, 69)
    if (sound03.isPlaying() == true) {
        push()
        rectMode(CENTER)
        let angle = map(sound03.currentTime(), 0, sound03.duration(), 0, TWO_PI)
        fill(22, 90, 216)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, height * 0.25, height * 0.25)
        pop()
    }

    // Touche R
    playSound(sound04, 82)
    if (sound04.isPlaying() == true) {
        push()
        let waveform = sound04FFT.waveform()
        // console.log(waveform);
        noFill()
        beginShape()
        stroke(150, 255, 225)
        strokeWeight(5)
        for (let i = 0; i < waveform.length; i++) 
        {
            let x = map(i, 0, waveform.length, 0, width)
            let y = map(waveform[i], -3, 3, height, 0)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }

    // Touche T
    playSound(sound05, 84)
    if (sound05.isPlaying() == true) {
        push()
        noStroke()
        noFill()
        beginShape();
        stroke(0, 0, 200)
        let waveform = sound05FFT.waveform()
        for (let i = 0; i < waveform.length; i++) 
        {
            let angle = map(i, 0, waveform.length, 0, TWO_PI)
            let rad = map(waveform[i], -2, 2, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }

    // Touche Y
    playSound(sound06, 89)
    if (sound06.isPlaying() == true) {
        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound06.currentTime(), 0, sound06.duration()-0.1, 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
                stroke(255)
                strokeWeight(4)
                var angle = map(i, 0, nsegment, 0, TWO_PI)
                var x = width * 0.5 + height * 0.45 * cos(angle)
                var y = height * 0.5 + height * 0.45 * sin(angle)
                line(width * 0.5, height * 0.5, x, y)
        }
        pop()
    }

    // Touche U
    playSound(sound07, 85)
    if (sound07.isPlaying() == true) {
        push()
        var rad = map(sound07.currentTime(), 2, sound07.duration(), 30, width)
        noFill()
        stroke(100, 100, 200)
        strokeWeight(5)
        rectMode(CENTER)
        rect(width * 0.5, height * 0.5, rad-10, rad)
        pop()
    }

    // Touche I
    playSound(sound08, 73)
    if (sound08.isPlaying() == true) {
        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound08.currentTime(), 0, sound08.duration(), 0, PI*2)
        rectMode(CENTER)
        stroke(0)
        strokeWeight(0)
        rotate(ang)
        fill(125, 0, 214)
        rect(0, 0, width*1.2, height*0.01)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound08.currentTime(), 0, sound08.duration(), PI, PI*2)
        rectMode(CENTER)
        stroke(0)
        strokeWeight(0)
        rotate(ang)
        fill(125, 0, 214)
        rect(0, 0, width*1.2, height*0.01)
        pop()
    }

    // Touche O
    playSound(sound09, 79)
    if (sound09.isPlaying() == true) {
        push()
        rectMode(CENTER)
        let angle = map(sound09.currentTime(), 0, sound09.duration(), 0, TWO_PI)
        fill(22, 90, 216)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(angle)
        rect(0, 0, height * 0.25, height * 0.25)
        noFill()
        stroke(10,10,200)
        rect(200, 0, height * 0.30, height * 0.30)
        rect(-200, 0, height * 0.30, height * 0.30)
        pop()
    }

// Touche P
playSound(sound10, 80)
if (sound10.isPlaying() == true) {
noStroke()
p = 0.7
boule = 20
fill(0,0,random(0,250))
push()  
ellipse(windowWidth*0.1+q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.1+q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.1-q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.1-q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.1+q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.1-q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.1,windowHeight*0.5+q*p, boule, boule)
ellipse(windowWidth*0.1,windowHeight*0.5-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.5+q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.5+q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.5-q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.5-q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.5+q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.5-q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.5,windowHeight*0.5+q*p, boule, boule)
ellipse(windowWidth*0.5,windowHeight*0.5-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.7+q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.7+q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.7-q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.7-q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.7+q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.7-q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.7,windowHeight*0.5+q*p, boule, boule)
ellipse(windowWidth*0.7,windowHeight*0.5-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.9+q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.9+q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.9-q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.9-q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.9+q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.9-q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.9,windowHeight*0.5+q*p, boule, boule)
ellipse(windowWidth*0.9,windowHeight*0.5-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.3+q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.3+q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.3-q*p,windowHeight*0.5, boule, boule)
ellipse(windowWidth*0.3-q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.3+q*0.7,windowHeight*0.5-q*0.7, boule, boule)
ellipse(windowWidth*0.3-q*0.7,windowHeight*0.5+q*0.7, boule, boule)
ellipse(windowWidth*0.3,windowHeight*0.5+q*p, boule, boule)
ellipse(windowWidth*0.3,windowHeight*0.5-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.1+q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.1+q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.1-q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.1-q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.1+q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.1-q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.1,windowHeight*0.14+q*p, boule, boule)
ellipse(windowWidth*0.1,windowHeight*0.14-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.3+q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.3+q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.3-q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.3-q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.3+q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.3-q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.3,windowHeight*0.14+q*p, boule, boule)
ellipse(windowWidth*0.3,windowHeight*0.14-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.5+q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.5+q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.5-q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.5-q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.5+q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.5-q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.5,windowHeight*0.14+q*p, boule, boule)
ellipse(windowWidth*0.5,windowHeight*0.14-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.7+q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.7+q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.7-q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.7-q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.7+q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.7-q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.7,windowHeight*0.14+q*p, boule, boule)
ellipse(windowWidth*0.7,windowHeight*0.14-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.9+q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.9+q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.9-q*p,windowHeight*0.14, boule, boule)
ellipse(windowWidth*0.9-q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.9+q*0.7,windowHeight*0.14-q*0.7, boule, boule)
ellipse(windowWidth*0.9-q*0.7,windowHeight*0.14+q*0.7, boule, boule)
ellipse(windowWidth*0.9,windowHeight*0.14+q*p, boule, boule)
ellipse(windowWidth*0.9,windowHeight*0.14-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.9+q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.9+q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.9-q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.9-q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.9+q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.9-q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.9,windowHeight*0.86+q*p, boule, boule)
ellipse(windowWidth*0.9,windowHeight*0.86-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.7+q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.7+q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.7-q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.7-q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.7+q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.7-q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.7,windowHeight*0.86+q*p, boule, boule)
ellipse(windowWidth*0.7,windowHeight*0.86-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.5+q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.5+q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.5-q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.5-q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.5+q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.5-q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.5,windowHeight*0.86+q*p, boule, boule)
ellipse(windowWidth*0.5,windowHeight*0.86-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.3+q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.3+q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.3-q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.3-q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.3+q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.3-q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.3,windowHeight*0.86+q*p, boule, boule)
ellipse(windowWidth*0.3,windowHeight*0.86-q*p, boule, boule)
pop()

push()
ellipse(windowWidth*0.1+q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.1+q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.1-q*p,windowHeight*0.86, boule, boule)
ellipse(windowWidth*0.1-q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.1+q*0.7,windowHeight*0.86-q*0.7, boule, boule)
ellipse(windowWidth*0.1-q*0.7,windowHeight*0.86+q*0.7, boule, boule)
ellipse(windowWidth*0.1,windowHeight*0.86+q*p, boule, boule)
ellipse(windowWidth*0.1,windowHeight*0.86-q*p, boule, boule)
pop()
q = q + 1
}
else{
    q = 0
}

// Touche Q
playSound(sound11, 81)
if (sound11.isPlaying() == true) {
   rectMode(CENTER)
   let test = map(sound11.currentTime(), 0, sound11.duration(), 0, 5)
   let angle = map(sound11.currentTime(), 0, sound11.duration(), 0, TWO_PI)
    push()
    noFill()
    strokeWeight(6)
    stroke(220, 0, 216)
    push()
    translate(width*0.5*test, height*0.5)
    rotate(angle)
    rect(0, 0, height*0.25, height*0.25)
    pop()
    push()
    translate(width*0.4*test, height*0.3)
    rotate(angle)
    rect(0, 0, height*0.25, height*0.25)
    pop()
    push()
    translate(width*0.6*test, height*0.7)
    rotate(angle)
    rect(0, 0, height*0.25, height*0.25)
    pop()
}

// Touche S
playSound(sound12, 83)
if (sound12.isPlaying() == true) {
    ellipseMode(CENTER)
    noStroke()
    fill(255)
    ellipse(0, 100, 50+s, 50+s)
    ellipse(1000, 800, 50+s, 50+s)
    s += 10
}
else{
    s = 0
}

// Touche D
playSound(sound13, 68)
if (sound13.isPlaying() == true) {
    stroke(255)
    line(random(0, width), random(0, height), width*0.5, height*0.5)
    fill(255)
    ellipse(width*0.5, height*0.5, taille, taille)
    fill(0)
    ellipse(width*0.5, height*0.5, taille-300, taille-300)
    taille = taille + 5
}
else{
    taille = 1
}

// Touche F
playSound(sound14, 70)
if (sound14.isPlaying() == true) {
    noStroke()
    fill(255)
    ellipse(35, 0+b, 50, 50)
    fill(50,0,255)
    ellipse(135, height-b, 50, 50)
    fill(255)
    ellipse(235, 0+b, 50, 50)
    fill(50,0,255)
    ellipse(335, height-b, 50, 50)
    fill(255)
    ellipse(435, 0+b, 50, 50)
    fill(50,0,255)
    ellipse(535, height-b, 50, 50)
    fill(255)
    ellipse(635, 0+b, 50, 50)
    fill(50,0,255)
    ellipse(735, height-b, 50, 50)
    fill(255)
    ellipse(835, 0+b, 50, 50)
    fill(50,0,255)
    ellipse(935, height-b, 50, 50)
    fill(255)
    ellipse(1035, 0+b, 50, 50)
    fill(50,0,255)
    ellipse(1135, height-b, 50, 50)
    fill(255)
    ellipse(1235, 0+b, 50, 50)
    fill(50,0,255)
    ellipse(1335, height-b, 50, 50)
    b = b + 70
}
else{
    b = 0
}

// Touche G
playSound(sound15, 71)
if (sound15.isPlaying() == true) {
    noStroke()
    fill(255)
    A2 = 0.7
    boul = 10
    ellipse(windowWidth*0.5+A1*A2,windowHeight*0.5, boul, boul)
    ellipse(windowWidth*0.5+A1*0.7,windowHeight*0.5+A1*0.7, boul, boul)
    ellipse(windowWidth*0.5-A1*A2,windowHeight*0.5, boul, boul)
    ellipse(windowWidth*0.5-A1*0.7,windowHeight*0.5-A1*0.7, boul, boul)
    ellipse(windowWidth*0.5+A1*0.7,windowHeight*0.5-A1*0.7, boul, boul)
    ellipse(windowWidth*0.5-A1*0.7,windowHeight*0.5+A1*0.7, boul, boul)
    ellipse(windowWidth*0.5,windowHeight*0.5+A1*A2, boul, boul)
    ellipse(windowWidth*0.5,windowHeight*0.5-A1*A2, boul, boul)

    push()
    fill(random(100, 255),0,random(0, 200))
    translate(random(100, 700),random(-100, -700))
    rotate(PI/4)
    ellipse(windowWidth*0.5+A1*A2,windowHeight*0.5, boul, boul)
    ellipse(windowWidth*0.5+A1*0.7,windowHeight*0.5+A1*0.7, boul, boul)
    ellipse(windowWidth*0.5-A1*A2,windowHeight*0.5, boul, boul)
    ellipse(windowWidth*0.5-A1*0.7,windowHeight*0.5-A1*0.7, boul, boul)
    ellipse(windowWidth*0.5+A1*0.7,windowHeight*0.5-A1*0.7, boul, boul)
    ellipse(windowWidth*0.5-A1*0.7,windowHeight*0.5+A1*0.7, boul, boul)
    ellipse(windowWidth*0.5,windowHeight*0.5+A1*A2, boul, boul)
    ellipse(windowWidth*0.5,windowHeight*0.5-A1*A2, boul, boul)
    pop()
    A1 = A1 + 5
}
else {
    A1 = 0
    A2 = 0.7
}

// Touche H
let a = 100
playSound(sound16, 72)
if (sound16.isPlaying() == true) {
    push()
        let a = map(sound16.currentTime(), 1, sound16.duration(), 300, width * 0.6)
        fill(50, 80, 250, 255)
        noStroke()

        push()
        translate(windowWidth*0.5,windowHeight*0.5)
        rectMode(CENTER)
        noStroke()
        
        rotate(PI/4*frameCount*0.3)
        fill(0, 0, 200, 255)
        rect(0,0, 50, 50)
        
        translate(0,windowHeight*0.3)
        rotate(PI/4*frameCount*0.03)
        fill(0, 0, a, a)
        rect(0, 0, 50, 50)

        translate(0,windowHeight*0.3)
        rotate(PI/4*frameCount*0.04)
        fill(50, 0, a, 255)
        rect(0, 0, 50, 50)
    pop()
}

// Touche J
playSound(sound17, 74)
    if (sound17.isPlaying() == true) {
        let nsegment = 696
        let ncurrentsegment = map(sound17.currentTime(), 0, sound17.duration(), 0, nsegment + 1)
        push()
        for (let i = 0; i < ncurrentsegment; i++) {
            stroke(200, 0, 150)
            strokeWeight(0.5)
            let angle = map(i, 1, nsegment, 0, 2*PI)
            let x = 0 + height * 18.5 * cos(angle)
            let y = height * 0.5 + height * 0.5 * sin(angle)
            line(width*0.5, height*0.5, x, y)
        }
        pop()
    }

// Touche K
    playSound(sound18, 75)
    if (sound18.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound18.currentTime(), 0, sound18.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noFill()
        stroke(0, 0, 213)
        strokeWeight(5)
        rect(0, 0, width * 0.25, height * 0.45)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound18.currentTime(), 0, sound18.duration(), 0, PI*2)
        rectMode(CENTER)
        rotate(ang)
        noFill()
        stroke(0, 120, 213)
        strokeWeight(4)
        rect(0, 0, width * 0.15, height * 0.25)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound18.currentTime(), 0, sound18.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noFill()
        stroke(0, 0, 213)
        strokeWeight(3)
        rect(0, 0, width * 0.05, height * 0.05)
        pop()

        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound18.currentTime(), 0, sound18.duration(), 0, PI*2)
        rectMode(CENTER)
        rotate(ang)
        noFill()
        stroke(0, 120, 213)
        strokeWeight(20)
        rect(0, 0, width * 0.5, height * 0.8)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound18.currentTime(), 0, sound18.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noFill()
        stroke(0, 0, 213)
        strokeWeight(3)
        rect(0, 0, width * 0.8, height * 2)
        pop()
    }

// Touche L
    playSound(sound19, 76)
    if (sound19.isPlaying() == true) {
        push()
        var rad = map(sound19.currentTime(), 0, sound19.duration(), 10, width)
        noFill()
        stroke(255, 0, 213)
        strokeWeight(13)
        ellipse(width * 1, height * 0.5, rad, rad)
        pop()

        push()
        var rad = map(sound19.currentTime(), 0, sound19.duration(), 10, width)
        noFill()
        stroke(255, 0, 213)
        strokeWeight(13)
        ellipse(width * 0, height * 0.5, rad, rad)
        pop()
    }

// Touche M
    playSound(sound20, 77)
    if (sound20.isPlaying() == true) {
        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound20.currentTime(), 0, sound20.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noStroke()
        fill(255, 255, 255)
        rect(0, 0, width * 25, height * 0.004)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound20.currentTime(), 0, sound20.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noStroke()
        fill(100, 255, 253)
        rect(0, 0, width * 0.002, height * 25)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound20.currentTime(), 0, sound20.duration(), 0, PI*1.5)
        rectMode(CENTER)
        rotate(ang)
        noStroke()
        fill(100, 100, 253)
        rect(0, 0, width * 0.002, height * 25)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound20.currentTime(), 0, sound20.duration(), 0, PI*3)
        rectMode(CENTER)
        rotate(ang)
        noStroke()
        fill(255, 0, 150)
        rect(0, 0, width * 0.002, height * 25)
        pop()
    }

// Touche W
playSound(sound21, 87)
if (sound21.isPlaying() == true) {
    push()
        var alea = 0
        stroke(random(0, 255), 0, random(0, 255))
        strokeWeight(random(5, 50))
        for (var i = 1; i < 900; i++) {
            point((width/200) * i, (height*0.5) + random(-alea, alea))
            alea += random(-10, cos(PI))
        }
    pop()
}

// Touche X
playSound(sound22, 88)
if (sound22.isPlaying() == true) {
    noStroke()
    push()
    var long = map(sound22.currentTime(), 0, sound22.duration(), 25, width)
    rectMode(CENTER)
    fill(255, 80, 213)
    rect(width/2, height/2, long, 5);
    noStroke()

    fill(0, 100, 255)
    rect(width/2, height/3, long, 5);
    noStroke()

    fill(0, 100, 255)
    rect(width/2, height/1.5, long, 5);
    noStroke()
    pop()
}

// Touche C
playSound(sound23, 67)
    if (sound23.isPlaying() == true) {
        push()
        from = color(random(0,208), 0, random(100,208), 90)
        to = color(random(0,208), 0, random(100,208), 90)
        noStroke()
        for (var i = 0; i < 2; i++) {

            fill(to)
            quad(0, 0,
            random(width, height), random(height),
            random(width, height), random(height),
            random(width, height), random(height))
        }
        pop()

    }

    // Touche V
    playSound(sound24, 86)
    if (sound24.isPlaying() == true) {

        push()
        var rad = map(sound24.currentTime(), 0, sound24.duration(), 50, width*0.75)
        rectMode(CENTER)
        noFill()
        stroke(150, 0, 213)
        strokeWeight(10)
        rect(width * 0.5, height * 0.5, rad+100, rad+100)
        stroke(255, 255, 255)
        fill(150, 0, 213)
        rect(width * 0.5, height * 0.5, rad-500, rad-500)
        noFill()
        stroke(150, 0, 213)
        strokeWeight(10)
        ellipse(width * 0.5, height * 0.5, rad-1000, rad-1000)
        pop()
    }

// Touche B
    playSound(sound25, 66)
    if (sound25.isPlaying() == true) {
        noStroke()
        push()
        var long = map(sound25.currentTime(), 0, sound25.duration()*0.5, 25, width)

        rectMode(CENTER)
        fill(255, 0, 213)
        rect(width/2, height/2, width/3, long)
        noStroke()

        fill(0, 255, 213)
        rect(width-200, height/2, width/3, long)
        noStroke()

        fill(0, 255, 213)
        rect(0+200, height/2, width/3, long)
        noStroke()
        pop()
    }

// Touche N
    playSound(sound26, 78)
    if (sound26.isPlaying() == true) {
        push()
        var tai = map(sound26.currentTime(), 0, sound26.duration(), 50, width)
        noFill()
        stroke(255)
        ellipse(width * 0.5, height * 0.5, tai, tai*2)
        ellipse(width * 0.5, height * 0.5, tai*2, tai)
        pop()
    }

}

//windowResized
function windowResized() {
    createCanvas(windowWidth, windowHeight)
    background(0, 0, 0)
}

// fonction faire un son quand on appuie sur une touche
function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying() == false) {
        console.log(keyID + " est appuyé")
        sound.play()
    }
}