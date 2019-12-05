
let sound01
let sound02
let sound03
let sound04
let sound05
let sound06
let sound07
let sound07FFT
let sound08
let sound09
let sound09FFT
let sound010
let sound011
let sound012
let sound013
let sound014
let sound015
let sound016
let sound016FFT
let sound017
let sound018
let sound019
let sound020
let sound021
let sound022
let sound023
let sound024
let sound025
let sound026

let diammetre = 30

function preload() {
    sound01 = loadSound('../assets/1.wav')
    sound02 = loadSound('../assets/2.wav')
    sound03 = loadSound('../assets/3.mp3')
    sound04 = loadSound('../assets/4.wav')
    sound05 = loadSound('../assets/5.wav')
    sound06 = loadSound('../assets/6.wav')
    sound07 = loadSound('../assets/7.wav')
    sound08 = loadSound('../assets/8.wav')
    sound09 = loadSound('../assets/9.wav')
    sound010 = loadSound('../assets/10.wav')
    sound011 = loadSound('../assets/11.wav')
    sound012 = loadSound('../assets/12.wav')
    sound013 = loadSound('../assets/13.wav')
    sound014 = loadSound('../assets/14.wav')
    sound015 = loadSound('../assets/15.wav')
    sound016 = loadSound('../assets/16.flac')
    sound017 = loadSound('../assets/17.wav')
    sound018 = loadSound('../assets/18.flac')
    sound019 = loadSound('../assets/19.wav')
    sound020 = loadSound('../assets/20.wav')
    sound021 = loadSound('../assets/21.wav')
    sound022 = loadSound('../assets/22.wav')
    sound023 = loadSound('../assets/23.wav')
    sound024 = loadSound('../assets/24.wav')
    sound025 = loadSound('../assets/25.wav')
    sound026 = loadSound('../assets/26.wav')
}



function setup() {
    createCanvas(windowWidth, windowHeight)

    sound07FFT = new p5.FFT(0.8, 1024)
    sound07FFT.setInput(sound07)

    sound09FFT = new p5.FFT(0.8, 1024)
    sound09FFT.setInput(sound09)

    sound016FFT = new p5.FFT(0.8, 1024)
    sound016FFT.setInput(sound016)
    
}

function draw(){
background (27, 1, 155)


     //lettre A
     playSound (sound01, 65)
     if(sound01.isPlaying() == true){
      push()
      rotate(frameCount / -80.0);
      noStroke();
      stroke(129, 20, 83)
      for (let i = 0; i < 20; i++) {
          ellipse(width * 0.5, height * 0.5, 0.2162 * height, 0.2162 * height);
          rotate(PI / 20);
      }

      pop()
     }

     //lettre Z
     playSound (sound02, 90)
     if (sound02.isPlaying() == true){
        fill(129, 20, 83)
        noStroke()
        ellipse(width*0.5, height*0.5, 50, 50)  
     }

     //lettre E
    playSound (sound03, 69)
    if(sound03.isPlaying() == true){
       let r = map(sound03.currentTime(), 0, sound03.duration(), 0, width)
       fill(255, 94, 77)
       noStroke()
       ellipse(width*0.5, height*0.5, r, r)
     }

     //lettre R
     playSound (sound04, 82)
     if (sound04.isPlaying() == true){
        push()
      var nsegment = 96
      var ncurrentsegment = (map(sound04.currentTime(), 0, sound04.duration(), 0, nsegment + 1))
      for (var i = 0; i < ncurrentsegment; i++) {
          stroke(100);
          strokeWeight(1)
          var angle = map(i, 0, nsegment, 0, TWO_PI);
          var x = width * 0.5 + height * 0.45 * cos(angle);
          var y = height * 0.5 + height * 0.45 * sin(angle);
          line(width * 0.75, height * 0.25, x, y);
      }

      pop()
      push()
      var nsegment = 96
      var ncurrentsegment = (map(sound04.currentTime(), 0, sound04.duration(), 0, nsegment + 1))
      for (var i = 0; i < ncurrentsegment; i++) {
          stroke(100);
          strokeWeight(1)
          var angle = map(i, 0, nsegment, 0, TWO_PI);
          var x = width * 0.5 + height * 0.45 * cos(angle);
          var y = height * 0.5 + height * 0.45 * sin(angle);
          line(width * 0.25, height * 0.75, x, y);
      }
      pop()
     }

     //lettre T
     playSound (sound05, 84)
     if(sound05.isPlaying() == true){
        let r = map(sound05.currentTime(), 0, sound05.duration()*0.33, 0, width*0.25)
        r = constrain(r, 0, width*0.25)
        fill(255, 255, 0)
        noStroke()
        let c = map(sound05.currentTime(), sound05.duration()*0.33, sound05.duration(),0,width*0.25)
        c = constrain(c, 0, width*0.25)

        rectMode(CENTER)
        rect(width*0.5, height*0.5, r ,r ,c,c,c,c)
     }

     //lettre Y
     playSound (sound06, 89)
     if(sound06.isPlaying() == true){
      push()
      var nsegment = 36
      var ncurrentsegment = (map(sound06.currentTime(), 0, sound06.duration(), 0, nsegment + 1))
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
      var nsegment = 36
      var ncurrentsegment = (map(sound06.currentTime(), 0, sound06.duration(), 0, nsegment + 1))
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
   
     //lettre U
     playSound (sound07, 85)
      if(sound07.isPlaying() == true){
      push()
      let waveform = sound07FFT.waveform();
      //console;log(waveform)
      noFill()
      beginShape()
      stroke(129, 20, 83);
      strokeWeight(5);
      beginShape()
      for (let i = 0; i < waveform.length; i ++) {
        //console.log(waveform[i])
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
      }
     endShape()
     pop()
     }  

     //lettre I
      playSound (sound08, 73)
      if (sound08.isPlaying() == true){
          push()
          rectMode(CENTER)
          let angle = map (sound08.currentTime(), 0, sound08.duration(), 0, TWO_PI)
          fill(250, 184, 214)
          translate (width*0.5, height*0.5)
          rotate (angle)
          rect(0, 0, height*0.25, height*0.25)
          pop()
     }

      //lettre O
     playSound (sound09, 79)
      if (sound09.isPlaying() == true){
      push()
      noStroke()
      noFill()
      stroke(102, 0, 255)
      let waveform = sound09FFT.waveform();
      for (let i = 0; i < waveform.lenght; i++){
           let angle = map(i, 0, waveform.lenght, 0, TWO_PI)
           let rad = map(waveform[i], -1, 1, 0, height)
           let x = width*0.5 + rad*cos(angle)
           let y = height*0.5 + rad*sin(angle)
           curveVertex (x, y)
      }
      endShape(CLOSE)
      pop()
      }

      //lettre P
     playSound (sound010, 80)
     if(sound010.isPlaying() == true){push();
      push()
          rectMode(CENTER)
          let angle = map (sound010.currentTime(), 0, sound010.duration(), 0, TWO_PI)
          fill(255, 255, 0)
          translate (width*0.5, height*0.5)
          rotate (angle)
          noStroke()
          rect(0, 0, height*0.05, height*0.05)
          pop()
     }

     //lettre Q
     playSound (sound011, 81)
     if(sound011.isPlaying() == true){
        push()
        var nsegment = 270
        var ncurrentsegment = map(sound011.currentTime(), 0, sound011.duration(), 0, nsegment + 1)

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(360);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * .5 + height * .5 * cos(angle);
            var y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop()
     }

     //lettre S
     playSound (sound012, 83)
     if(sound012.isPlaying() == true){ 
      push()
      let waveform = sound07FFT.waveform();
      noFill()
      beginShape()
      stroke(129, 20, 83);
      strokeWeight(5);
      beginShape()
      for (let i = 0; i < waveform.length; i ++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
       }
       endShape()
     pop()
     }  

     //lettre D
     playSound (sound013, 68)
     if(sound013.isPlaying() == true){
      push();
      translate(width * 0.5, height * 0.5)
      var ang = map(sound013.currentTime(), 0, sound013.duration(), 0, PI)
      rectMode(CENTER)
      rotate(ang)
      stroke(0); //contour de forme
      strokeWeight(0) //taille du contour
      fill(250, 184, 214)
      rect(0, 0, width * .3, height * .6)
      pop()
     }

     //lettre F
     playSound (sound014, 70)
     if(sound014.isPlaying() == true){
      push()
      var nsegment = 10
      var ncurrentsegment = (map(sound014.currentTime(), 0, sound014.duration(), 0, nsegment + 1))
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
      var nsegment = 10
      var ncurrentsegment = (map(sound014.currentTime(), 0, sound014.duration(), 0, nsegment + 1))
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

     //lettre G
     playSound (sound015, 71)
     if(sound015.isPlaying() == true){
      let r = map(sound015.currentTime(), 0, sound015.duration(), 0, width)
      fill(255, 255, 0)
      noStroke()
      ellipse(width*0.5, height*0.5, r, r)
     }

     //lettre H
     playSound (sound016, 72)
     if(sound016.isPlaying() == true){
      push()
      let waveform = sound016FFT.waveform();
      noFill()
      beginShape()
      stroke(129, 20, 83);
      strokeWeight(5);
      beginShape()
      for (let i = 0; i < waveform.length; i ++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
      }
     endShape()
     pop()
     }

     //lettre J
     playSound (sound017, 74)
     if(sound017.isPlaying() == true){
        let r = map(sound017.currentTime(), 0, sound017.duration(), 0, width)
        fill(255, 255, 0)
        noStroke()
        ellipse(width*0.5, height*0.5, r, r)
     }

     //lettre K
     playSound (sound018, 75)
     if(sound018.isPlaying() == true){
      fill(250, 184, 214)
      noStroke()
      ellipse(width*0.5, height*0.5, 50, 50)  
     }

     //lettre L
     playSound (sound019, 76)
     if(sound019.isPlaying() == true){
      push()
        translate(width * 0.5, height * 0.5) 
        fill(255)
        rotate(angle) 
        rect(-15, -15, height * 0.3243, height * 0.3243);
        angle += 0.1;
        pop()
     }

     //lettre M
     playSound (sound020, 77)
     if(sound020.isPlaying() == true){
      push()
      var nsegment = 270
      var ncurrentsegment = map(sound020.currentTime(), 0, sound020.duration(), 0, nsegment + 1)

      for (var i = 0; i < ncurrentsegment; i++) {
          stroke(360);
          strokeWeight(1)
          var angle = map(i, 0, nsegment, 0, TWO_PI);
          var x = width * .5 + height * .5 * cos(angle);
          var y = height * 0.5 + height * 0.5 * sin(angle);
          line(width * 0.5, height * 0.5, x, y);
      }
      pop()
     }

     //lettre W
     playSound (sound021, 87)
     if(sound021.isPlaying() == true){
      push()
      translate(width * 0.5, height * 0.5);
      rotate(frameCount / -8.0);
      noStroke();
      for (let i = 0; i < 10; i++) {
          ellipse(0, height * 0.0324, height * 0.0648, height * 0.2436);
          rotate(PI / 4); 

      }
      pop()
     }

     //lettre X
     playSound (sound022, 88)
     if(sound022.isPlaying() == true){
        push()
        rotate(frameCount / -80.0);
        noStroke();
        stroke(129, 20, 83)
        for (let i = 0; i < 20; i++) {
            ellipse(width * 0.5, height * 0.5, 0.2162 * height, 0.2162 * height);
            rotate(PI / 20);
        }
  
        pop()
     }

     //lettre C
     playSound (sound023, 67)
     if(sound023.isPlaying() == true){
      fill(255, 255, 0)
      noStroke()
      ellipse(width*0.5, height*0.5, 50, 50)
     }

     //lettre V
     playSound (sound024, 86)
     if(sound024.isPlaying() == true){
      let r = map(sound024.currentTime(), 0, sound024.duration()*0.33, 0, width*0.25)
      r = constrain(r, 0, width*0.25)
      fill(255, 94, 77)

      let c = map(sound024.currentTime(), sound024.duration()*0.33, sound024.duration(),0,width*0.25)
      c = constrain(c, 0, width*0.25)

      rectMode(CENTER)
      rect(width*0.5, height*0.5, r ,r ,c,c,c,c)
     }

     //lettre B
     playSound (sound025, 66)
     if(sound025.isPlaying() == true){
      from = color(255, 255, 208, 90);
      to = color(255, 255, 208, 90);
      stroke(100); 
      strokeWeight(1) 
      for (var i = 0; i < 2; i++) {

          fill(to);
          quad(random(750, 500), random(height),
              random(750, 500), random(height),
              random(750, 500), random(height),
              random(750, 500), random(height));
      }
      frameRate(50);
      pop();
     }

     //lettre N
     playSound (sound026, 78)
     if(sound026.isPlaying() == true){
      push()
      var nsegment = 96
      var ncurrentsegment = (map(sound026.currentTime(), 0, sound026.duration(), 0, nsegment + 1))
      for (var i = 0; i < ncurrentsegment; i++) {
          stroke(129, 20, 83);
          strokeWeight(1)
          var angle = map(i, 0, nsegment, 0, TWO_PI);
          var x = width * 0.5 + height * 0.45 * cos(angle);
          var y = height * 0.5 + height * 0.45 * sin(angle);
          line(width * 0.75, height * 0.25, x, y);
      }
      pop()
      push()
      var nsegment = 96
      var ncurrentsegment = (map(sound026.currentTime(), 0, sound026.duration(), 0, nsegment + 1))
      for (var i = 0; i < ncurrentsegment; i++) {
          stroke(129, 20, 83);
          strokeWeight(1)
          var angle = map(i, 0, nsegment, 0, TWO_PI);
          var x = width * 0.5 + height * 0.45 * cos(angle);
          var y = height * 0.5 + height * 0.45 * sin(angle);
          line(width * 0.25, height * 0.75, x, y);
      }
      pop()
     }
}

function playSound(sound, keyID){
    if (keyIsDown(keyID) == true && sound.isPlaying()==false){
        sound.play();
    }

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}