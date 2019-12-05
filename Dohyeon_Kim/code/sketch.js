var s_branch_number = 42;
let r = 249, g = 242,b = 229;
let x1 = 100, y1, y2, x2;
  function setup() {
    createCanvas(windowWidth, windowHeight); 
    background(249,242,229); 
   y1 = height;

   }
   
   
   function preload(){
      sound01=loadSound('milky-spirit__sample-6.mp3');
   }


  function draw() {
   background(249,242,229);
    if(mouseIsPressed){
      noStroke();
      fill(208,104,77);  
      // calculer les coordonées polaire en fonction des positions centrées de la souris  
      var radius = pow(pow(windowWidth/2-mouseX,2) + pow(windowHeight/2-mouseY,2) , 0.5); // pythagore 
      var angle = atan2(windowHeight/2-mouseY, windowWidth/2-mouseX); // atan2(y,x)
    

        for (var i = 0 ; i <= TWO_PI ; i = i +PI/(s_branch_number/2)){ // on réalise une boucle for pour couvrir un cercle complet
            var x =windowWidth/2 + radius * cos(angle +i); // on ajoute i à l'angle à chaque iteration de la boucle
            var y =windowHeight/2 + radius * sin(angle+i);
            ellipse(x,y,5,5);
          }
      }ㅁ

     
     
   if(keyTyped() === 'a')
      r = 62, g = 88,b = 43;
   noStroke();
   fill(r,g,b);
   rect(x1,y1,50,50)
   y1 = y1 - 3;

   if (keyIsDown(65)==true && sound01.isPlaying()==false){
      console.log("a est appusé")
      sound01.play();
      return key
  }

   if(keyTyped() === 's') 
      r = 255, g = 0,b = 0;
   noStroke();
   fill(r,g,b);
   rect(x2,y2,50,50)
   y2 = y2 - 3;
}



function keyTyped() {
   if (key === 'a') {
      y1 = height;
      x1 = 100;
      return key
   } 
    
   if (key === 's') {
      y2 = height;
      x2 = 150;
      return key   
    } 
   
}