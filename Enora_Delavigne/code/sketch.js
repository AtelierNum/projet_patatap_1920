let sound01
let sound05
let sound03
let sound04
let sound02
let sound06
let sound07
let sound08
let sound09
let sound10
let sound10FFT
let sound11
let sound12
let scalar = 70;
let angle1 = 0;
let angle2 = 0;
let sound13
let sound14
let sound15
let pg
let xposA = 0
let yposA = 0
let xdirA = 5
let ydirA = 5
let sound16
let sound17
let sound18
let sound19
let xpos = []
let ypos = []
let xtarget = []
let ytarget = []
let sound20
let sound21
let sound22
let sound23
let sound24
let sound25
let sound25FFT
let sound26

function preload() {

    sound01 = loadSound('Sons/sound01.wav');
    sound05 = loadSound('Sons/sound05.wav');
    sound03 = loadSound('Sons/sound03.wav');
    sound04 = loadSound('Sons/sound04.wav');
    sound02 = loadSound('Sons/sound02.wav');
    sound06 = loadSound('Sons/sound06.wav');
    sound07 = loadSound('Sons/sound07.wav');
    sound08 = loadSound('Sons/sound08.wav');
    sound09 = loadSound('Sons/sound09.wav');
    sound10 = loadSound('Sons/sound10.wav');
    sound11 = loadSound('Sons/sound11.wav');
    sound12 = loadSound('Sons/sound12.wav');
    sound13 = loadSound('Sons/sound13.wav');
    sound14 = loadSound('Sons/sound14.wav');
    sound15 = loadSound('Sons/sound15.wav');
    sound16 = loadSound('Sons/sound16.wav');
    sound17 = loadSound('Sons/sound17.wav');
    sound18 = loadSound('Sons/sound18.wav');
    sound19 = loadSound('Sons/sound19.wav');
    sound20 = loadSound('Sons/sound20.wav');
    sound21 = loadSound('Sons/sound21.wav');
    sound22 = loadSound('Sons/sound22.wav');
    sound23 = loadSound('Sons/sound23.wav');
    sound24 = loadSound('Sons/sound24.wav');
    sound25 = loadSound('Sons/sound25.wav');
    sound26 = loadSound('Sons/sound26.wav');
  

  }
  
  
function setup() {
    createCanvas(windowWidth, windowHeight)
    background(254, 254, 224)

    sound06FFT = new p5.FFT(0.8, 1024)
    sound06FFT.setInput(sound06);

    sound10FFT = new p5.FFT(0.8, 16);
    sound10FFT.setInput(sound10);

    sound11FFT = new p5.FFT(0.8, 1024)
    sound11FFT.setInput(sound11)

    for (let i = 0; i < 50; i++) {
      xpos.push(random(0, width));
      ypos.push(random(0, -height));
      xtarget.push(random(width));
      ytarget.push(random(height));


    sound20FFT = new p5.FFT(0.8, 16);
    sound20FFT.setInput(sound20);
    }

    sound25FFT = new p5.FFT(0.8, 1024)
    sound25FFT.setInput(sound25)
 
}




  function draw () {

    background(254, 254, 224)
    noStroke()

  

    playSound(sound01, 65) //feuilles ; A

    if (sound01.isPlaying() == true) {

      push()
      let t = map(sound01.currentTime(), 0, sound01.duration() * 0.75, 0, 1)
      let grey = map(sound01.currentTime(), sound01.duration() * 0.75, sound01.duration(), 255, 180)
      t = constrain(t, 0, 1)
      grey = constrain(grey, 180, 255)
      fill(173, 79, 9)
      noStroke()
      for (let i = 0; i < 50; i++) {
          let x = lerp(xpos[i], xtarget[i], t)
          let y = lerp(ypos[i], ytarget[i], t)
          ellipse(x, y, 10, 30)
      }

      pop()
  }






    playSound(sound05, 90) //bulles ; Z
    if(sound05.isPlaying() == true) {
        let r = map(sound05.currentTime(), 0, sound05.duration(), 0, width)
        fill(116, 208, 241)

        ellipse(width*0.5, height*0.5, r, r)
    }




    playSound(sound04, 72) // bruit de pas dans la neige ; H
    if (sound04.isPlaying() == true) {
      push();
      let rad = map(sound04.currentTime(), 0, sound04.duration(), 50, width)
      fill(254, 254, 254)
      ellipse(width * 0.5, height * 0.5, rad, rad)

      pop();
  }




    playSound(sound03, 82) //chouette/hibou ; R
    if(sound03.isPlaying()==true) {
      let r = map(sound03.currentTime(), 0, sound03.duration()*0.33, 0, width*0.25)
      r = constrain(r, 0, width*0.25)
      fill(0, 51, 102)

      let c = map(sound03.currentTime(),
                   sound03.duration()*0.33, sound03.duration(), 0, width*0.25)
      c = constrain(c, 0, width*0.25)

      rectMode(CENTER)
      rect(width*0.5, height*0.5, r, r, c)
    }




    playSound(sound02, 84) //oiseaux ; T
    if (sound02.isPlaying() == true) {
      push()
    
      pop()
      let nsegment = 96
      let ncurrentsegment = (map(sound02.currentTime(), 0, sound02.duration(), 0, nsegment + 1))
      for (let i = 0; i < ncurrentsegment; i++) {
      stroke(253, 241, 184);
      strokeWeight(4)
      let angle = map(i, 0, nsegment, 0, TWO_PI);
      let x = width * 0.5 + height * 0.45 * cos(angle);
      let y = height * 0.5 + height * 0.45 * sin(angle);
      line(width * 0.5, height * 0.5, x, y);
}
    }






    playSound(sound06, 89) //vague ; Y


if (sound06.isPlaying() == true) {
    push()
    let waveform = sound06FFT.waveform();
    noFill();
    beginShape();
    stroke(150, 255, 225); 
    strokeWeight(10);
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
    }
    endShape();
    pop()
}



    
    playSound(sound07, 85) //grenouille ; U

    if (sound07.isPlaying() == true) {
      push()
      rectMode(CENTER)
      let angle = map (sound07.currentTime(), 0, sound04.duration(), 0, TWO_PI)
      fill(199, 207, 0)
      translate(width*0.5, height*0.5)
      rotate(angle)
      rect(0, 0, height*0.25, height*0.25)
      pop()

    }



    playSound(sound08, 73) //criquets ; I

    if (sound08.isPlaying() == true) {
      push()
      let t = map(sound08.currentTime(), 0, sound08.duration(), 1, 0)
      let grey = map(sound08.currentTime(), sound08.duration() * 0.75, sound08.duration(), 255, 180)
      t = constrain(t, 0, 1)
      grey = constrain(grey, 180, 255)
      for (let i = 0; i < 100; i++) {
          let x = lerp(xpos[i], xtarget[i], t)
          let y = lerp(ypos[i], ytarget[i], t)
          fill(239, 155, 15)
          stroke(173, 79, 9)
          ellipse(x, y, 30, 30)
          pop()
      }
  }


    playSound(sound09, 79) //tonnerre ; O

    if (sound09.isPlaying() == true) {

      let nsegment = 696
      let ncurrentsegment = map(sound09.currentTime(), 0, sound09.duration(), 0, nsegment)
      push()
      for (let i = 0; i < ncurrentsegment; i++) {
          stroke(255, 255, 5);
          strokeWeight(0.5)
          let angle = map(i, 1, nsegment, 0, PI);
          let x = width * 0 + height * 18.5 * cos(angle);
          let y = height * 0.5 + height * 0.5 * sin(angle);
          line(width * 1, height * 0, x, y);
      }
      pop()
  }


   

    playSound(sound10, 80) //chat ; P

    if (sound10.isPlaying() == true) {
      push()
      sound10FFT.analyze()
      let nrj1 = sound10FFT.getEnergy("bass")

      push()
      fill(222, 49, 99)
      noStroke()

      ellipse(width / 2,height / 2, nrj1, nrj1)

      pop()
      pop()
      push();
      let rad = map(sound10.currentTime(), 0, sound10.duration(), 10, width);
      stroke(222, 49, 99)
      strokeWeight(5)
      noFill();
      ellipse(width * 0.5, height * 0.5, rad, rad);
      pop();
  }





    playSound(sound11, 81) //canard ; Q


    if (sound11.isPlaying() == true) {
      push()
      let waveform = sound11FFT.waveform();
      noFill();
      beginShape();
      stroke(23, 101, 125);
      strokeWeight(5);
      for (let i = 0; i < waveform.length; i++) {
          let x = map(i, 0, waveform.length, 0, width);
          let y = map(waveform[i], -1, 1, 0, height);
          curveVertex(x, y);
      }
      endShape();
      pop()
  }





    playSound(sound12, 83) //cheval qui galope ; S

    if (sound12.isPlaying() == true) {
      push()
      let ang1 = radians(angle1);
      let ang2 = radians(angle2);

      let x1 = width / 2 + (scalar * cos(ang1));
      let x2 = width / 2 + (scalar * cos(ang2));

      let y1 = height / 2 + (scalar * sin(ang1));
      let y2 = height / 2 + (scalar * sin(ang2));


      fill(167, 103, 38);
      noStroke()
      ellipse(x1, height * 0.5 - 120, scalar, scalar);
      ellipse(x2, height * 0.5 + 120, scalar, scalar);

      fill(200, 173, 127);
      noStroke()
      ellipse(width * 0.5 - 120, y1, scalar, scalar);
      ellipse(width * 0.5 + 120, y2, scalar, scalar);

      angle1 += 2;
      angle2 += 3;

      pop();
  }


  

    playSound(sound13, 68) //oiseaux ; D

    if (sound13.isPlaying() == true) {
      push()
      let nsegment = 270
      let ncurrentsegment = map(sound13.currentTime(), 0, sound13.duration(), 0, nsegment + 1)

      for (var i = 0; i < ncurrentsegment; i++) {
          stroke(254, 231, 240);
          strokeWeight(1)
          let angle = map(i, 0, nsegment, 0, TWO_PI);
          let x = width * .5 + height * .5 * cos(angle);
          let y = height * 0.5 + height * 0.5 * sin(angle);
          line(width * 0.5, height * 0.5, x, y);
      }
      pop()
  }



    playSound(sound14, 70) //eau qui coule ; F

    if (sound14.isPlaying() == true) {
      push();
      let rad = map(sound14.currentTime(), 0, sound14.duration(), 10, width);
      stroke(7, 124, 200)
      strokeWeight(5)
      noFill();
      ellipse(width * 0.5, height * 0.5, rad, rad);
      pop();
  }

  if (sound14.isPlaying() == true) {
    push();
    let rad = map(sound14.currentTime(), 0, sound14.duration(), width, 10);
    stroke(7, 124, 200)
    strokeWeight(5)
    noFill();
    ellipse(width * 0.5, height * 0.5, rad, rad);
    pop();
}



    playSound(sound15, 71) //poule ; G
    
    if (sound15.isPlaying() == true) {
      push()
      xposA += xdirA
      yposA += ydirA
      if (xposA > width || xposA < 0) {
          xdirA *= -1
      }
      if (yposA > height || yposA < 0) {
          ydirA *= -1
      }

      pg.noStroke()
      pg.fill(248, 24, 24)
      pg.ellipse(xposA, yposA, 20, 20)
      image(pg, 0, 0, width, height)
      pop()
      push()

  } else {

      pg = createGraphics(windowWidth, windowHeight)
      pg.pixelDensity(1)

      xposA = random(width)
      yposA = random(height)
      xdirA = random(1, 200)
      ydirA = random(1, 200)
      pop()
  }



    playSound(sound16, 69) //piano ; E

    if (sound16.isPlaying() == true) {
      push();
      var rad = map(sound16.currentTime(), 0, sound16.duration(), 1, width * 2);
      stroke(102, 0, 255)
      strokeWeight(5)
      noFill();
      ellipse(width * 0.25, height * 0.25, rad, rad);
      pop();

      push();
      var rad = map(sound16.currentTime(), 0, sound16.duration(), 10, width);
      stroke(128, 0, 128)
      strokeWeight(5)
      noFill();
      ellipse(width * 0.25, height * 0.25, rad, rad);
      pop();

      push();
      var rad = map(sound16.currentTime(), 0, sound16.duration(), 100, width);
      stroke(204, 14, 83)
      strokeWeight(5)
      noFill();
      ellipse(width * 0.25, height * 0.25, rad, rad);
      pop();
  }



    playSound(sound17, 74) //pas dans la neige ; J
    if (sound17.isPlaying() == true) {
      push();
      let rad = map(sound17.currentTime(), 0, sound17.duration(), width, 50)
      fill(251, 252, 250)
      ellipse(width * 0.5, height * 0.5, rad, rad)

      pop();
  }



    playSound(sound18, 75) //bourdon ; K

    if (sound18.isPlaying() == true) {
      push()
      let t = map(sound18.currentTime(), 0, sound18.duration(), 1, 0)
      let ang = map(sound18.currentTime(), 0, sound18.duration(), 0, 40)
      for (let i = 0; i < 20; i++) {
          let x = lerp(xpos[i], xtarget[i], t)
          let y = lerp(ypos[i], ytarget[i], t)
          rotate(ang)
          fill(244, 102, 27)
          noStroke()
          ellipse(x / 3, y / 3, 30, 10)
      }
      pop()
  }



    playSound(sound19, 76) //appareil photo ; L

    if (sound19.isPlaying() == true) {
      let t = map(sound19.currentTime(), 0, sound19.duration() * 0.75, 0, 1)
      let grey = map(sound19.currentTime(), sound19.duration() * 0.75, sound19.duration(), 255, 180)
      t = constrain(t, 0, 1)
      grey = constrain(grey, 180, 255)
      push()
      noFill()
      stroke(128, 0, 128)
      strokeWeight(2)
      for (let i = 0; i < 50; i++) {
          let x = lerp(xpos[i], xtarget[i], t)
          let y = lerp(ypos[i], ytarget[i], t)
          ellipse(x, y, 50, 50)
      }
      pop()
  }



    playSound(sound20, 77) //chèvre ; M

    if (sound20.isPlaying() == true) {
      push()
      sound20FFT.analyze()
      let nrj1 = sound20FFT.getEnergy("bass")

      push()
      fill(243, 210, 45)
      noStroke()

      ellipse(width / 3 ,height / 3 , nrj1, nrj1)
      pop()
      pop()
  }



    playSound(sound21, 87) //sonnette de vélo ; W

    if (sound21.isPlaying() == true) {
      push();
      let rad = map(sound21.currentTime(), random(0, 1), sound21.duration(), 10, width);
      stroke(1, 49, 180)
      strokeWeight(random(1, 10))
      noFill();
      ellipse(random(0, width), random(0, height), rad, rad);
      pop();
  }



    playSound(sound22, 88) //violon ; X

    if (sound22.isPlaying() == true) {
      push();
      var rad = map(sound22.currentTime(), 0, sound22.duration(), 10, width)
      noFill()
      stroke(253, 108, 158)
      strokeWeight(13)
      ellipse(width * 1, height * 0.5, rad, rad)
      pop();

      push();
      var rad = map(sound22.currentTime(), 0, sound22.duration(), 10, width)
      noFill()
      stroke(115, 194, 251)
      strokeWeight(13)
      ellipse(width * 0, height * 0.5, rad, rad)
      pop();
  }



    playSound(sound23, 67) //pluie ; C

    if (sound23.isPlaying() == true) {

      push()
      let t = map(sound23.currentTime(), 0, sound23.duration() * 1, 0, 1)
      let grey = map(sound23.currentTime(), sound23.duration() * 1, sound23.duration(), 255, 180)
      t = constrain(t, 0, 1)
      grey = constrain(grey, 180, 255)
      fill(38, 196, 236)
      noStroke()
      for (let i = 0; i < 50; i++) {
          let x = lerp(xpos[i], xtarget[i], t)
          let y = lerp(ypos[i], ytarget[i], t)
          ellipse(x, y, 2, 60)
      }

      pop()
  }



    playSound(sound24, 86) //clochette ; V

    if (sound24.isPlaying() == true) {
      push();
      let rad = map(sound24.currentTime(), 0, sound24.duration(), 10, width);
      stroke(255, 127, 0)
      strokeWeight(5)
      noFill();
      ellipse(width * 0.5, height * 0.5, rad, rad);
      pop();

      if (sound24.isPlaying() == true) {
        push();
        let rad = map(sound24.currentTime(), 0, sound24.duration(), width, 5);
        stroke(250, 164, 1)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.5, height * 0.5, rad, rad);
        pop();
    }

    if (sound24.isPlaying() == true) {
      push();
      let rad = map(sound24.currentTime(), 0, sound24.duration(), width, 10);
      stroke(244, 102, 27)
      strokeWeight(5)
      noFill();
      ellipse(width * 1, height * 1, rad, rad);
      pop();
  }

  if (sound24.isPlaying() == true) {
    push();
    let rad = map(sound24.currentTime(), 0, sound24.duration(), 5, width);
    stroke(255, 203, 96)
    strokeWeight(5)
    noFill();
    ellipse(width * 1, height * 1, rad, rad);
    pop();
}

  }




    playSound(sound25, 66) //aboiement ; B

    if (sound25.isPlaying() == true) {
        push()
        noFill()
        stroke(199, 207, 0)
        strokeWeight(2)
        let wave = sound25FFT.waveform();
        beginShape()
        for (let i = 0; i < wave.length; i++) {
            let angle = map(i, 0, wave.length, 0, TWO_PI)
            let rad = map(wave[i], -1, 1, 0, height)
            let x = width * 0.5 + rad * cos(angle)
            let y = height * 0.5 + rad * sin(angle)
            curveVertex(x, y)
  
        }
        endShape(CLOSE)
  
    }
 



    playSound(sound26, 78) //grillons de nuit ; N

    if (sound26.isPlaying() == true) {
      push()
      let t = map(sound26.currentTime(), 0, sound26.duration(), 1, 0)
      let grey = map(sound26.currentTime(), sound26.duration() * 0.75, sound26.duration(), 255, 180)
      t = constrain(t, 0, 1)
      grey = constrain(grey, 180, 255)
      for (let i = 0; i < 100; i++) {
          let x = lerp(xpos[i], xtarget[i], t)
          let y = lerp(ypos[i], ytarget[i], t)
          fill(3, 34, 76)
          noStroke()
          ellipse(x, y, 5, 5)
          pop()
      }
  }


    
  }


  function playSound (sound, keyID) {
    if (keyIsDown(keyID) == true && sound.isPlaying()==false){
    sound.play();
    }
  }