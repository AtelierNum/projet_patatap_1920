


let analyzer

let xpos = 0;
let ypos = 0;

function preload() {
    //chargement de tous les sons
    soundA = loadSound("Assets/soundA.wav")
    soundB = loadSound("Assets/soundB.wav")
    soundC = loadSound("Assets/soundC.wav")
    soundD = loadSound("Assets/soundD.wav")
    soundE = loadSound("Assets/soundE.wav")
    soundF = loadSound("Assets/soundF.wav")
    soundG = loadSound("Assets/soundG.wav")
    soundH = loadSound("Assets/soundH.wav")
    soundI = loadSound("Assets/soundI.wav")
    soundJ = loadSound("Assets/soundJ.wav")
    soundK = loadSound("Assets/soundK.wav")
    soundL = loadSound("Assets/soundL.wav")
    soundM = loadSound("Assets/soundM.wav")
    soundN = loadSound("Assets/soundN.wav")
    soundO = loadSound("Assets/soundO.wav")
    soundP = loadSound("Assets/soundP.wav")
    soundQ = loadSound("Assets/soundQ.wav")
    soundR = loadSound("Assets/soundR.wav")
    soundS = loadSound("Assets/soundS.wav")
    soundT = loadSound("Assets/soundT.wav")
    soundU = loadSound("Assets/soundU.wav")
    soundV = loadSound("Assets/soundV.wav")
    soundW = loadSound("Assets/soundW.wav")
    soundX = loadSound("Assets/soundX.wav")
    soundY = loadSound("Assets/soundY.wav")
    soundZ = loadSound("Assets/soundZ.wav")

}

function setup() {

    graphicsoundE = createGraphics(windowWidth, windowHeight)

    createCanvas(windowWidth, windowHeight);
    background(0);
    //variables d'analyse des different son nommé de A à Z
    var soundAnumSamples = 2048;
    soundAFFT = new p5.FFT(0, soundAnumSamples)

    soundBFFT = new p5.Amplitude()
    soundBFFT.setInput(soundB)

    soundEFFT = new p5.FFT()
    soundEFFT.setInput(soundE)
    soundEPeakDetect = new p5.PeakDetect()
    soundEFFTAmp = new p5.Amplitude()
    soundEFFTAmp.setInput(soundE)

    soundHFFT = new p5.Amplitude()
    soundHFFT.setInput(soundH)

    var soundInumSamples = 2048;
    soundIFFT = new p5.FFT(0, soundInumSamples)
    

    soundJFFT = new p5.Amplitude()
    soundJFFT.setInput(soundJ)

    soundKFFT = new p5.Amplitude()
    soundKFFT.setInput(soundK)

    soundLFFT = new p5.Amplitude()
    soundLFFT.setInput(soundL)

    soundMFFT = new p5.FFT()
    soundMFFT.setInput(soundM)
    soundMPeakDetect = new p5.PeakDetect()
    soundMFFTAmp = new p5.Amplitude()
    soundMFFTAmp.setInput(soundM)

    soundQFFT = new p5.Amplitude()
    soundQFFT.setInput(soundQ)

    var soundSnumSamples = 2048;
    soundSFFT = new p5.FFT(0, soundSnumSamples)

    soundTFFT = new p5.Amplitude()
    soundTFFT.setInput(soundT)

    soundVFFT = new p5.Amplitude()
    soundVFFT.setInput(soundV)

    soundXFFT = new p5.Amplitude()
    soundXFFT.setInput(soundX)

    soundYFFT = new p5.Amplitude()
    soundYFFT.setInput(soundY)

    soundZFFT = new p5.Amplitude()
    soundZFFT.setInput(soundZ)


    let soundFxpos
}

function draw() {
    
    background(0);

    playSound(soundA, 65)
    if (soundA.isPlaying() == true) {
        soundAFFT.setInput(soundA);
        var soundAsamples = soundAFFT.waveform();
        strokeWeight(3);
        stroke(102, 248, 150);
        beginShape();
        for (var i = 0; i < soundAsamples.length; i++) { //boucle permettant de tracer de nombreux carrés vibrant ensemble
            fill(102, 248, 150)
            var x = map(i, 0, soundAsamples.length, 0, width);
            var y = map(soundAsamples[i], -1, 1, 0, height);
            vertex(x, y);
        }
        endShape();

        
    }



    playSound(soundB, 66)
    if (soundB.isPlaying() == true) {
        push()
        stroke(255, 124, 229)
        strokeWeight(3)
        noFill()
        var soundBSize = soundBFFT.getLevel()
        ellipse(width / 2, height / 2, 10 + soundBSize * 800, 10 + soundBSize * 800);

    }



    playSound(soundC, 67)
    if (soundC.isPlaying() == true) {
        var soundCTime = soundC.currentTime()
        stroke(254, 177, 27)
        strokeWeight(3)
        noFill()
        rect(windowWidth - soundCTime * 600 , windowHeight * 0.25, 100, 25)
        rect(soundCTime * 600 , windowHeight * 0.75, 100, 25)

    }

    playSound(soundD , 68)
    if(soundD.isPlaying() == true){
        noFill();
        stroke(102, 248, 150)
        strokeWeight(3)
        var soundDsize = 100;
    
    
        for (var i = soundDsize; i < windowWidth - soundDsize; i += soundDsize) {
            for (var j = soundDsize; j < windowHeight - soundDsize; j += soundDsize) {
                push();
                var translateAmount = random(-1,1)*(j/soundDsize);
                var rotateAmount = random(-PI, PI) * (j / (windowHeight * 7));
                translate(i*translateAmount, j - soundDsize);
                rotate(rotateAmount);
                rect(0, 0, soundDsize, soundDsize);
                pop();
            }
        }

    }


    playSound(soundE , 69)
    if(soundE.isPlaying() == true){ 
        soundEFFT.analyze();
        soundEPeakDetect.update(soundEFFT);
        var soundEInsideEll = 50;
        var soundEEll = soundEFFTAmp.getLevel();
        var soundEInsideEllColor = color(0);
        if(soundEPeakDetect.isDetected){
            soundEInsideEllColor = color(248, 119, 100)
        }else{
            soundEInsideEllColor = color(0) 
        }
        noStroke();
        fill(102, 248, 150);
        ellipse(150, 150, soundEEll*200, soundEEll*200)
        ellipse(windowWidth - 150, 150, soundEEll*200, soundEEll*200)
        ellipse(windowWidth - 150 , windowHeight - 150, soundEEll*200, soundEEll*200)
        ellipse(150, windowHeight - 150, soundEEll*200, soundEEll*200)

        noFill();
        strokeWeight(5);
        stroke(soundEInsideEllColor);
        ellipse(150, 150, soundEEll*125, soundEEll*125)
        ellipse(windowWidth - 150, 150, soundEEll*125, soundEEll*125)
        ellipse(windowWidth - 150 , windowHeight - 150, soundEEll*125, soundEEll*125)
        ellipse(150, windowHeight - 150, soundEEll*125, soundEEll*125)
        
    }

    playSound(soundF, 70)
    if(soundF.isPlaying() == true){
        var soundFTime = soundF.currentTime()
        stroke(255, 124, 229)
        strokeWeight(3)
        noFill()
        rect(windowWidth * 0.25 , windowHeight - soundFTime * 600, 100, 25)
        rect(soundFTime * 600 , windowHeight * 0.75, 100, 25)
    }

    playSound(soundG, 71)
    if(soundG.isPlaying() == true){
        var soundGTime = soundG.currentTime()
        stroke(255, 124, 229)
        strokeWeight(3)
        noFill()
        rect(windowWidth * 0.75 ,soundGTime * 600, 100, 25)
        rect(soundGTime * -600 + windowWidth, windowHeight * 0.25, 100, 25)

    }

    playSound(soundH, 72)
    if(soundH.isPlaying() == true){
        push()
        stroke(102, 248, 150)
        strokeWeight(3)
        noFill()
        var soundHSize = soundHFFT.getLevel()
        ellipse(width / 2, height / 2, 10 + soundHSize * 800, 10 + soundHSize * 800);

    }

    playSound(soundI, 73)
    if(soundI.isPlaying() == true){
        soundIFFT.setInput(soundI);
        var soundIsamples = soundIFFT.waveform();
        strokeWeight(3);
        stroke(254, 177, 27);
        beginShape();
        for (var i = 0; i < soundIsamples.length; i++) {
            fill(254, 177, 27)
            var x = map(i, soundIsamples.length, 0, 0, width);
            var y = map(soundIsamples[i], -1, 1, 0, height);
            vertex(x, y-0.5*height);
        
        }
        
        endShape();
        
        
    }

    playSound(soundJ, 74)
    if(soundJ.isPlaying() == true){

        push()
        stroke(102, 248, 150)
        strokeWeight(3)
        noFill()
        var soundJSize = soundJFFT.getLevel()
        ellipse(width * 0.33, height / 2, 10 + soundJSize * 800, 10 + soundJSize * 800);
        ellipse(width * 0.66, height / 2, 10 + soundJSize * 800, 10 + soundJSize * 800);

    }

    playSound(soundK, 75)
    if(soundK.isPlaying() == true){

        stroke(102, 248, 150)
        strokeWeight(3)
        noFill()
        var soundKSize = soundKFFT.getLevel()
        rectMode(CENTER);
        rect(width*0.5, height * 0.5, soundKSize * 800, soundKSize*500);
      

    }

    playSound(soundL, 76)
    if(soundL.isPlaying() == true){
        stroke(254, 177, 27)
        strokeWeight(3)
        noFill()
        var soundLSize = soundLFFT.getLevel()
        rectMode(CENTER);
        rect(width*0.5, height * 0.33, soundLSize * 80, soundLSize*50);
        rect(width*0.5, height * 0.66, soundLSize * 80, soundLSize*50);
    }

    playSound(soundM, 77)
    if(soundM.isPlaying() == true){

        soundMFFT.analyze();
        soundMPeakDetect.update(soundMFFT);
        var soundMInsideEll = 50;
        var soundMEll = soundMFFTAmp.getLevel();
        var soundMInsideEllColor = color(0);
        if(soundMPeakDetect.isDetected){
            soundMInsideEllColor = color(254, 177, 27)
        }else{
            soundMInsideEllColor = color(0) 
        }
        noStroke();
        fill(254, 177, 27);
        ellipse(150, 150, soundMEll*200, soundMEll*200)
        
        ellipse(windowWidth - 150 , windowHeight - 150, soundMEll*200, soundMEll*200)


        noFill();
        strokeWeight(5);
        stroke(soundMInsideEllColor);
        ellipse(150, 150, soundMEll*125, soundMEll*125)
        
        ellipse(windowWidth - 150 , windowHeight - 150, soundMEll*125, soundMEll*125)
       
        
    }


    playSound(soundN, 78)
    if(soundN.isPlaying() == true){
        var soundNTime = soundN.currentTime()
        randomSoundN = random(0, windowWidth)
        rect(randomSoundN, soundNTime*600, 5, 50)
        rect(randomSoundN, soundNTime*600, 5, 50)
        rect(randomSoundN, soundNTime*600, 5, 50)
        rect(randomSoundN, soundNTime*600, 5, 50)
        rect(randomSoundN, soundNTime*600, 5, 50)
        rect(randomSoundN, soundNTime*600, 5, 50)
        rect(randomSoundN, soundNTime*600, 5, 50)
        rect(randomSoundN, soundNTime*600, 5, 50)
        rect(randomSoundN, soundNTime*600, 5, 50)
        fill(255, 124, 229);
        strokeWeight(3)
        stroke(255, 124, 229)
      

    }

    playSound(soundO, 79)
    if(soundO.isPlaying() == true){
        noFill();
        stroke(254, 177, 27)
        strokeWeight(3)
        var soundOsize = 100;
    
    
        for (var i = soundOsize; i < windowWidth - soundOsize; i += soundOsize) {
            for (var j = soundOsize; j < windowHeight - soundOsize; j += soundOsize) {
                push();
                var translateAmount = random(-1,1)*(j/soundOsize);
                var rotateAmount = random(-PI, PI) * (j / (windowHeight * 7));
                translate(i*translateAmount, j - soundOsize);
                rotate(rotateAmount);
                ellipse(windowWidth-200, windowHeight-600, soundOsize, soundOsize);
                pop();
            }
        }
    }

    playSound(soundP, 80)
    if(soundP.isPlaying() == true){
        var soundPTime = soundP.currentTime()
        rect(windowWidth*0.10, soundPTime*600, 5, 50)
        rect(windowWidth*0.20, soundPTime*600, 5, 50)
        rect(windowWidth*0.30, soundPTime*600, 5, 50)
        rect(windowWidth*0.40, soundPTime*600, 5, 50)
        rect(windowWidth*0.50, soundPTime*600, 5, 50)
        rect(windowWidth*0.60, soundPTime*600, 5, 50)
        rect(windowWidth*0.70, soundPTime*600, 5, 50)
        rect(windowWidth*0.80, soundPTime*600, 5, 50)
        rect(windowWidth*0.90, soundPTime*600, 5, 50)
        fill(255, 124, 229);
        strokeWeight(3)
        stroke(255, 124, 229)
    }

    playSound(soundQ, 81)
    if(soundQ.isPlaying() == true){
        push()
        stroke(255, 124, 229)
        strokeWeight(3)
        noFill()
        var soundQSize = soundQFFT.getLevel()
        ellipse(width / 2, height / 2, 10 + soundQSize * 800, 10 + soundQSize * 800);
        ellipse(width / 2, height / 2, 50 + soundQSize * 800, 50 + soundQSize * 800);
        ellipse(width / 2, height / 2, 90 + soundQSize * 800, 90 + soundQSize * 800);
        ellipse(width / 2, height / 2, 130 + soundQSize * 800, 130 + soundQSize * 800);
    }

    playSound(soundR, 82)
    if(soundR.isPlaying() == true){
        var soundRTime = soundR.currentTime()
        rect(soundRTime*600, windowHeight*0.10, 50, 5)
        rect(soundRTime*600, windowHeight*0.20, 50, 5)
        rect(soundRTime*600, windowHeight*0.30, 50, 5)
        rect(soundRTime*600, windowHeight*0.40, 50, 5)
        rect(soundRTime*600, windowHeight*0.50, 50, 5)
        rect(soundRTime*600, windowHeight*0.60, 50, 5)
        rect(soundRTime*600, windowHeight*0.70, 50, 5)
        rect(soundRTime*600, windowHeight*0.80, 50, 5)
        rect(soundRTime*600, windowHeight*0.90, 50, 5)
        fill(254, 177, 27);
        strokeWeight(3)
        stroke(254, 177, 27)
    }

    playSound(soundS, 83)
    if(soundS.isPlaying() == true){
        soundSFFT.setInput(soundS);
        var soundSsamples = soundSFFT.waveform();
        strokeWeight(3);
        stroke(254, 177, 27);
        beginShape();
        for (var i = 0; i < soundSsamples.length; i++) {
            fill(254, 177, 27)
            var x = map(i, soundSsamples.length, 0, 0, width);
            var y = map(soundSsamples[i], -1, 1, 0, height);
            vertex(x, y+0.5*height);
        
        }
        
        endShape();   
    }

    playSound(soundT, 84)
    if(soundT.isPlaying() == true){
        stroke(255, 124, 229)
        strokeWeight(3)
        noFill()
        var soundTSize = soundTFFT.getLevel()
        rectMode(CENTER);
        rect(width*0.5, height * 0.5, soundTSize * 800, soundTSize*500);
    }

    playSound(soundU, 85)
    if(soundU.isPlaying() == true){
        var soundUTime = soundU.currentTime()
        stroke(254, 177, 27)
        strokeWeight(3)
        noFill()
        rect(windowWidth - soundUTime * 600 , windowHeight * 0.25+300, 100, 300)
        rect(soundUTime * 600 , windowHeight * 0.75-300, 100, 300)
    }

    playSound(soundV, 86)
    if(soundV.isPlaying() == true){
        push()
        stroke(255, 124, 229)
        strokeWeight(3)
        noFill()
        var soundVSize = soundVFFT.getLevel()
        rect(width *0.35, height *0.35, 10 + soundVSize * 800, 10 + soundVSize * 800);
        rect(width *0.35, height *0.35, 50 + soundVSize * 800, 50 + soundVSize * 800);
        rect(width *0.35, height *0.35, 90 + soundVSize * 800, 90 + soundVSize * 800);
        rect(width *0.35, height *0.35, 130 + soundVSize * 800, 130 + soundVSize * 800);
    }

    playSound(soundW, 87)
    if(soundW.isPlaying() == true){
        var soundWTime = soundW.currentTime()
        stroke(254, 177, 27)
        strokeWeight(200-soundWTime*200)
        noFill()
        rectMode(CENTER)
        rect(windowWidth*0.5, windowHeight*0.5, soundWTime*900, soundWTime*900)
    
    }

    playSound(soundX, 88)
    if(soundX.isPlaying() == true){
        stroke(254, 177, 27)
        strokeWeight(3)
        noFill()
        var soundXSize = soundXFFT.getLevel()
        rectMode(CENTER);
        rect(width*0.5, height * 0.33, soundXSize * 800, soundXSize*500);
        rect(width*0.5, height * 0.66, soundXSize * 800, soundXSize*500);
    }

    playSound(soundY, 89)
    if(soundY.isPlaying() == true){
        push()
        stroke(254, 177, 27)
        strokeWeight(3)
        noFill()
        var soundYSize = soundYFFT.getLevel()
        ellipse(width / 2, height / 2, 10 + soundYSize * 3000, 10 + soundYSize * 3000);
        ellipse(width / 2, height / 2, 50 + soundYSize * 3000, 50 + soundYSize * 3000);
        ellipse(width / 2, height / 2, 90 + soundYSize * 3000, 90 + soundYSize * 3000);
        ellipse(width / 2, height / 2, 130 + soundYSize * 3000, 130 + soundYSize * 3000);
    }

    playSound(soundZ, 90)
    if(soundZ.isPlaying() == true){
        push()
        strokeWeight(3)
        noFill()
        var soundZSize = soundZFFT.getLevel()
        noStroke()
        fill(254, 177, 27)
        ellipse(width / 2, height / 2, 500, 500);
        noStroke()
        fill(0,0,0)
        ellipse(width / 2, height / 2, 10 + soundZSize * 600, 10 + soundZSize * 600);
    }
       
}


    function playSound(sound, keyId) { // playSound est définie comme pouvant prendre deux paramètres : un son et un nombre
    // on vérifie si on appuie sur la touche portant le numéro keyId, et on vérifie que le son n'est pas déjà en train de jouer
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play(); // si c'est le cas on enclenche la lecture du son.
    }
}

function windowResized(){
createCanvas(windowWidth, windowHeight);
background(0);

}