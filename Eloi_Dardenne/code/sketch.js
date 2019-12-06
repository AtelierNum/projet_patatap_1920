    // Appel des sons
    let sound01;
    let sound02;
    let sound03;
    let sound04;
    let sound05;
    let sound06;
    let sound07;
    let sound07FFT;
    let sound08;
    let sound08FFT;
    let sound09;
    let sound10;
    let sound11;
    let sound11FFT;
    let sound12;
    let sound13;
    let sound14;
    let sound15;
    let sound16;
    let sound16FFT;
    let sound17;
    let sound18;
    let sound19;
    let sound19Amp;
    let sound20;
    let sound21;
    let sound22;

    //la function preload permet de charger les sons au démarage de la page.
function preload () {
    sound01 = loadSound("assets/son01.wav")//A
    sound02 = loadSound("assets/son02.wav")//S
    sound03 = loadSound("assets/son03.wav")//F
    sound04 = loadSound("assets/son04.wav")//D
    sound05 = loadSound("assets/son05.wav")//E
    sound06 = loadSound("assets/son06.wav")//T
    sound07 = loadSound("assets/son07.wav")//B
    sound08 = loadSound("assets/son08.wav")//G
    sound09 = loadSound("assets/son09.wav")//C
    sound10 = loadSound("assets/son10.wav")//I
    sound11 = loadSound("assets/son11.wav")//J
    sound12 = loadSound("assets/son12.wav")//Z
    sound13 = loadSound("assets/son13.wav")//U
    sound14 = loadSound("assets/son14.wav")//K
    sound15 = loadSound("assets/son15.wav")//L
    sound16 = loadSound("assets/son16.wav")//M
    sound17 = loadSound("assets/son17.mp3")//N
    sound18 = loadSound("assets/son18.wav")//O
    sound19 = loadSound("assets/son19.wav")//H
    sound20 = loadSound("assets/son20.wav")//V
    sound21 = loadSound("assets/son21.wav")//P
    sound22 = loadSound("assets/son22.wav")//Q 
    sound23 = loadSound("assets/son23.wav")//R
    sound24 = loadSound("assets/son24.wav")//W
    sound25 = loadSound("assets/son25.flac")//X
    sound26 = loadSound("assets/son26.wav")//Y
}

function setup() {

    background(0)
    createCanvas(windowWidth, windowHeight)
    sound07FFT = new p5.FFT()
    sound07FFT.setInput(sound07)
    sound08FFT = new p5.FFT()
    sound08FFT.setInput(sound08)
    sound19Amp = new p5.Amplitude()
    sound19Amp.setInput(sound19)
    sound11FFT = new p5.FFT()
    sound11FFT.setInput(sound11)
    sound16FFT = new p5.FFT()
    sound16FFT.setInput(sound16)
    sound17FFT = new p5.FFT()
    sound17FFT.setInput(sound17)
    sound18FFT = new p5.FFT()
    sound18FFT.setInput(sound18)
    sound21FFT = new p5.FFT()
    sound21FFT.setInput(sound21)
    sound22FFT = new p5.FFT()
    sound22FFT.setInput(sound22)
    sound25FFT = new p5.FFT()
    sound25FFT.setInput(sound25)
    sound26FFT = new p5.FFT()
    sound26FFT.setInput(sound26)
    
}

function draw() {
    background(0,0,0)


playSound(sound01, 65)//A
    if(sound01.isPlaying()== true) {
        var r = map(sound01.currentTime(), 0, sound01.duration(), 0, width)//création d'une varriable (r) qui augmente a la vitesse du son
        noStroke()
        fill(255, 0, 0, 50)
        ellipse(width / 2, height / 2, r, 300)
        ellipse(width / 2, height / 2, 300, r)
    }



playSound(sound12, 90)//Z
    if(sound12.isPlaying()== true) {
        let r = map(sound12.currentTime(),0,sound12.duration()*0.1, 0, height*0.5 ) //création d'une varriable (r) qui augmente a la vitesse du son multiplier par 0,1 pour le raccourcir
        r = constrain(r, 0, height*0.5) 
        let c = map (sound12.currentTime(),sound12.duration()*0.1, sound12.duration(),0,height*0.5)
        c = constrain(c, 0, height*0.5)
        rectMode(CENTER)
        stroke(255, 0, 0)
        strokeWeight(1)
        fill(0, 0, 0, 50)
        rect(width*0.5, height*0.5, r, r, c, c, c, c) // le rectangle a pour largeur et hauteur un demi-ecran, ses angles s'arrondissent en fonction des variables c et sa taille varie en fonction de r
    }
        


playSound(sound07, 66)//B
    if (sound07.isPlaying() == true) {
        push()
        let wave = sound07FFT.waveform() //création d'une wave grace a la fonction waveform
        fill(255)
        strokeWeight(1)
        stroke(255, 255, 255)
        beginShape()
        for (let i = 0 ; i < wave.length ; i++){ // création de la vague en fonction de wave grace a x et y en absice et ordonné
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -0.5, 0.5, height, 0)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }



playSound(sound04, 68)//D
    if(sound04.isPlaying()== true) {
        var r = map(sound04.currentTime(), 0, sound04.duration(), 0, width)
        fill(0)
        strokeWeight (1)
        stroke(255, 0, 0)
        ellipse(width * 0.5, height * 0.5, r, r)
        ellipse(width * 0.5, height * 0.5, r, r/2)
        ellipse(width * 0.5, height * 0.5, r/2, r/2) // les ellipse augment leurs taille en fonction du temps du son grace a la variable r 
    }



playSound(sound05, 69)//E
    if(sound05.isPlaying()== true) {
        push()
        translate(width * 0.5, height * 0.5) //centrage
        var ang = map(sound05.currentTime(), 0, sound05.duration(), 0, PI*10) // variable ang en fonction du temps du son 
        frameRate([100])
        rectMode(CENTER)
        stroke(0);
        strokeWeight(0)
        rotate(ang)//rotation du rectangle en fonction de ang
        fill(255, 255, 255)
        rect(0, 0, width * ang, height * ang/200)
        pop()
    }



playSound(sound03, 70)//F
    if(sound03.isPlaying()== true) {
        var r = map(sound03.currentTime(), 0, sound03.duration(), 0, width)
        push()
        rectMode(CENTER)
        fill(0, 0, 0, 50)//remplissage presque transparent pour avoir un asombrissement croissant
        strokeWeight(1)
        stroke(255, 0, 0)
        rect(width * 0.5, height * 0.5, r, r)
        rect(width * 0.5, height * 0.5, r*1.25, r*1.25)
        rect(width * 0.5, height * 0.5, r*1.5, r*1.5)
        rect(width * 0.5, height * 0.5, r*2, r*2)
        rect(width * 0.5, height * 0.5, r*3, r*3)
        rect(width * 0.5, height * 0.5, r*4, r*4)
        rect(width * 0.5, height * 0.5, r*5, r*5)
        rect(width * 0.5, height * 0.5, r*6, r*6)
        
        pop()
    }



playSound(sound21, 80)//P
    if(sound21.isPlaying()== true) {
        var r = map(sound21.currentTime(), 0, sound21.duration(), 0, width)
        push()
        rectMode(CENTER)
        fill(0, 0, 0, 50)
        strokeWeight(r/100)
        stroke(255, 0, 0)
        rect(width -r, height -r, r, r)
        rect(r, r, r, r)
        pop()
    }



playSound(sound08, 71)//G
    if (sound08.isPlaying() == true) {
        push()
        let wave = sound08FFT.waveform()
        noFill()
        strokeWeight(400)
        stroke(255, 0, 0)
        beginShape()
        for (let i = 0 ; i < wave.length ; i++){
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 7, height, 0)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }



playSound(sound19, 72)//H
    if(sound19.isPlaying()== true) {
        var r = map(sound19.currentTime(), 0, sound19.duration(), 0, width)
        push()
        rectMode(CENTER)
        strokeWeight(1)
        stroke(255, 0, 0)
        fill(0, 0, 0,)
        rect(width*0.5, r*0.7, width*0.1, height*0.1)
        rect(width*0.5, r, width*0.1, height*0.1)
        rect(width*0.5, r*1.3, width*0.1, height*0.1)
        pop()
    }



playSound(sound09, 67)//C
    if(sound09.isPlaying()== true) {
        var r = map(sound09.currentTime(), 0, sound09.duration(), 0, width)
        push()
        fill(0, 0, 0, 50)
        strokeWeight(1)
        stroke(255)
        ellipse(width * 0.5, height * 0.5, r, r)
        ellipse(width * 0.5, height * 0.5, r*1.25, r*1.25)
        ellipse(width * 0.5, height * 0.5, r*1.5, r*1.5)
        ellipse(width * 0.5, height * 0.5, r*2, r*2)
        ellipse(width * 0.5, height * 0.5, r*3, r*3)
        ellipse(width * 0.5, height * 0.5, r*4, r*4)
        ellipse(width * 0.5, height * 0.5, r*5, r*5)
        ellipse(width * 0.5, height * 0.5, r*6, r*6)
        rectMode(CENTER)
        pop()
    }



playSound(sound10, 73)//I
    if(sound10.isPlaying()== true) {
        var r = map(sound10.currentTime(), 0, sound10.duration(), 0, width)
        push()
        rectMode(CENTER)
        fill(0, 0, 0, 50)
        strokeWeight(200)
        stroke(255, 0, 0)
        rect(width*0.5, height*0.5, r, r, r/10, r/2, r/10, r/2)
        strokeWeight(50)
        stroke(255)
        rect(width*0.5, height*0.5, r, r, r/2, r/10, r/2, r/10)
        
        pop()
    }



playSound(sound11, 74)//J
    if (sound11.isPlaying() == true) {
        push()
        let wave = sound11FFT.waveform()
        noFill()
        strokeWeight(500)
        stroke(255, 0, 0)
        beginShape()
        for (let i = 0 ; i < wave.length ; i++){
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -5, 5, height, 0)
            curveVertex(x, y)
        }
        endShape()
        strokeWeight(50)
        stroke(255, 255, 255)
        beginShape()
        for (let i = 0 ; i < wave.length ; i++){
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -1, 1, height, 0)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }



playSound(sound14, 75)//K
    if(sound14.isPlaying()== true) {
        var r = map(sound14.currentTime(), 0, sound14.duration(), 0, width)
        push()
        fill(0, 0, 0, 50)
        strokeWeight(1)
        stroke(255, 0, 0)
        ellipse(width * 0.5, height * 0.5, r, r)
        ellipse(width * 0.5, height * 0.5, r*2, r*0.5)
        ellipse(width * 0.5, height * 0.5, r*0.5, r*2)
        rectMode(CENTER)
        rect(width*0.5, height*0.5, r, r, r/10, r/10, r/10, r/10)
        ellipse(width * 0.2, height * 0.2, r, r)
        ellipse(width * 0.8, height * 0.8, r, r)
        pop()
    }
    


playSound(sound15, 76)//L
    if(sound15.isPlaying()== true) {
        var r = map(sound15.currentTime(), 0, sound15.duration(), 0, width)
        push()
        fill(0, 0, 0, 1)
        strokeWeight(1)
        stroke(255)
        ellipse(width * 0.2, height * 0.2, r, r)
        ellipse(width * 0.2, height * 0.2, r*1.25, r*1.25)
        ellipse(width * 0.2, height * 0.2, r*1.5, r*1.5)
        ellipse(width * 0.2, height * 0.2, r*2, r*2)
        ellipse(width * 0.2, height * 0.2, r*3, r*3)
        ellipse(width * 0.2, height * 0.2, r*4, r*4)
        ellipse(width * 0.2, height * 0.2, r*5, r*5)
        ellipse(width * 0.2, height * 0.2, r*6, r*6)
        ellipse(width * 0.8, height * 0.8, r, r)
        ellipse(width * 0.8, height * 0.8, r*1.25, r*1.25)
        ellipse(width * 0.8, height * 0.8, r*1.5, r*1.5)
        ellipse(width * 0.8, height * 0.8, r*2, r*2)
        ellipse(width * 0.8, height * 0.8, r*3, r*3)
        ellipse(width * 0.8, height * 0.8, r*4, r*4)
        ellipse(width * 0.8, height * 0.8, r*5, r*5)
        ellipse(width * 0.8, height * 0.8, r*6, r*6)
        ellipse(width * 0.2, height * 0.8, r, r)
        ellipse(width * 0.2, height * 0.8, r*1.25, r*1.25)
        ellipse(width * 0.2, height * 0.8, r*1.5, r*1.5)
        ellipse(width * 0.2, height * 0.8, r*2, r*2)
        ellipse(width * 0.2, height * 0.8, r*3, r*3)
        ellipse(width * 0.2, height * 0.8, r*4, r*4)
        ellipse(width * 0.2, height * 0.8, r*5, r*5)
        ellipse(width * 0.2, height * 0.8, r*6, r*6)
        ellipse(width * 0.8, height * 0.2, r, r)
        ellipse(width * 0.8, height * 0.2, r*1.25, r*1.25)
        ellipse(width * 0.8, height * 0.2, r*1.5, r*1.5)
        ellipse(width * 0.8, height * 0.2, r*2, r*2)
        ellipse(width * 0.8, height * 0.2, r*3, r*3)
        ellipse(width * 0.8, height * 0.2, r*4, r*4)
        ellipse(width * 0.8, height * 0.2, r*5, r*5)
        ellipse(width * 0.8, height * 0.2, r*6, r*6)
        rectMode(CENTER)
        pop()
    }



playSound(sound16, 77)//M
    if (sound16.isPlaying() == true) {
        push()
        let wave = sound16FFT.waveform()
        fill(255, 0, 0)
        noStroke()
        beginShape()
        for (let i = 0 ; i < wave.length ; i++){
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -0.2, 0.2, height, 0)
            var r = map(sound16.currentTime(), 0, sound16.duration(), 0, width)
            curveVertex(x, y*r/500)
        }
        endShape()
        pop()
    }



playSound(sound17,78)//N
    if (sound17.isPlaying() == true){
        push();
        let waveform = sound17FFT.waveform();
        stroke(300)
        strokeWeight(1)
        noFill()
        beginShape()
    for (var i = 0; i < waveform.length; i++) {
        var angle = map(i, 0, waveform.length, 0, TWO_PI);
        var rad = map(waveform[i], -1, 1, 0, height);
        var x = width*0.5 + rad*cos(angle)
        var y = height*0.5 + rad*sin(angle)
        curveVertex(x, y);
        }
        endShape(CLOSE);
        pop()
    }



playSound(sound18,79)//O
    if (sound18.isPlaying() == true){
        push();
        let waveform = sound18FFT.waveform();
        var r = map(sound18.currentTime(), 0, sound18.duration(), 0, width)
        stroke(255)
        noFill()
        beginShape()
    for (var i = 0; i < waveform.length; i++) {
        var angle = map(i, 0, waveform.length, 0, TWO_PI);
        var rad = map(waveform[i], -1, 1, 0, height);
        var x = width*0.5 + rad*cos(angle)
        var y = r + rad*sin(angle)
        curveVertex(x, r);
        strokeWeight(r)
        }
        endShape(CLOSE);
        pop()
    }   
    



playSound(sound22, 81)//Q
if (sound22.isPlaying() == true) {
        push()
        let wave = sound22FFT.waveform()
        var ang = map(sound22.currentTime(), 0, sound22.duration(), 0, PI*1.5)
        noFill()
        frameRate([120])
        translate(width * 0.5, height * 0.5)
        strokeWeight(1)
        stroke(255, 255, 255)
        beginShape()
        rotate(ang)
        for (let i = 0 ; i < wave.length ; i++){
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -0.2, 0.2, height, 0)
            curveVertex(x, y)
        }
        endShape()
        stroke(255, 0, 0)
        strokeWeight(1)
        beginShape()
        rotate(ang)
        for (let i = 0 ; i < wave.length ; i++){
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -0.2, 0.2, height, 0)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }
  
    

playSound(sound23, 82)//R
    if(sound23.isPlaying()== true) {
        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound23.currentTime(), 0, sound23.duration(), 0, PI*2)
        frameRate([100])
        rectMode(CENTER)
        stroke(255, 0, 0);
        strokeWeight(1)
        rotate(ang)
        fill(255, 0, 0, 50)
        rect(0, 0, width/10, height/10)
        rect(0, 0, width/8, height/10)
        rect(0, 0, width/6, height/10)
        rect(0, 0, width/4, height/10)
        rect(0, 0, width/2, height/10)
        rect(0, 0, width, height/10)
        rect(0, 0, width*2, height/10)
        pop()
    }



playSound(sound02, 83)//S
    if(sound02.isPlaying()== true) {
        var r = map(sound02.currentTime(), 0, sound02.duration(), 0, width)
        fill(255, 0, 0, 50)
        strokeWeight (1)
        stroke(255, 0, 0)
        ellipse(width * 0.5, height * 0.5, r, r*15)
    }



playSound(sound06, 84)//T
    if(sound06.isPlaying()== true) {
        var r = map(sound06.currentTime(), 0, sound06.duration(), 0, width)
        push()
        rectMode(CENTER)
        fill(0, 0, 0, 50)
        strokeWeight(1)
        stroke(255)
        rotate(0.1)
        rect(width*0.5, height*0.3, r*0.5, r*0.5, r*0.1, r*0.1, r*0.1, r*0.1,)
        rotate(0.2)
        rect(width*0.5, height*0.3, r*0.5, r*0.5, r*0.2, r*0.2, r*0.2, r*0.2,)
        rotate(0.3)
        rect(width*0.5, height*0.3, r*0.5, r*0.5, r*0.3, r*0.3, r*0.3, r*0.3,)
        rotate(0.4)
        rect(width*0.5, height*0.3, r*0.5, r*0.5, r*0.4, r*0.4, r*0.4, r*0.4,)
        rotate(0.5)
        rect(width*0.5, height*0.3, r*0.5, r*0.5, r*0.5, r*0.5, r*0.5, r*0.5,)
        rotate(0.6)
        rect(width*0.5, height*0.3, r*0.5, r*0.5, r*0.6, r*0.6, r*0.6, r*0.6,)
        rotate(0.7)
        rect(width*0.5, height*0.3, r*0.5, r*0.5, r*0.7, r*0.7, r*0.7, r*0.7,)
        pop()
    }



playSound(sound13, 85)//U
    if(sound13.isPlaying()== true) {
        var r = map(sound13.currentTime(), 0, sound13.duration(), 0, width)//création d'une varriable (r) qui augmente a la vitesse du son
        strokeWeight(1)
        stroke(255)
        fill(255, 0, 0, 20)
        ellipse(r, height / 2, 300, r)
    }



playSound(sound20, 86)//V
    if(sound20.isPlaying()== true) {
        var r = map(sound20.currentTime(), 0, sound20.duration(), 0, width)//création d'une varriable (r) qui augmente a la vitesse du son
        strokeWeight(1)
        stroke(255)
        fill(255, 0, 0, 20)
        ellipse(width - r, height / 2, 300, r)
    }



playSound(sound24, 87)//W
    if(sound24.isPlaying()== true) {
        let r = map(sound24.currentTime(),0,sound24.duration()*0.1, 0, height*0.5 ) 
        r = constrain(r, 0, height*0.5)
        rectMode(CENTER)
        stroke(255)
        strokeWeight(1)
        fill(0, 0, 0, 50)
        rect(r*2, r, r, r, 0, 100, 0, 100)
        rect(width - r*2, r, r, r, 100, 0, 100, 0)
    }



playSound(sound25, 88)//X
    if (sound25.isPlaying() == true) {
        push()
        let wave = sound25FFT.waveform() 
        noFill()
        strokeWeight(1)
        stroke(255, 255, 255)
        beginShape()
        for (let i = 0 ; i < wave.length ; i++){ 
            let x = map(i, 0, wave.length, 0, width)
            let y = map(wave[i], -0.5, 0.5, height, 0)
            curveVertex(x+ 20, y+20)
            curveVertex(x, y)

        }
        endShape()
        pop()
    }



playSound(sound26,89)//Y
    if (sound26.isPlaying() == true){
        push();
        let waveform = sound26FFT.waveform();
        noStroke()
        fill(255)
        beginShape()
    for (var i = 0; i < waveform.length; i++) {
        var angle = map(i, 0, waveform.length, 0, TWO_PI);
        var rad = map(waveform[i], -1, 1, 0, height);
        var x = width*0.5 + rad*cos(angle)
        var y = height*0.5 + rad*sin(angle)
        curveVertex(x, y);
        curveVertex(x+20,y+20)
        }
        endShape(CLOSE);
        pop()
        
    }

}


function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying()==false){
    sound.play();}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(255,0,0)
}