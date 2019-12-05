// initialisation du programme
function setup() {
// création d'un canvas à la taille de la fenêtre du navigateur
createCanvas( windowWidth, windowHeight)
// création d'un fond 
background(255,0,0);
}
// boucle d'éxécution de notre application
function draw() {
// dessiner un rond à l'intérieur de la souris
ellipse(mouseX, mouseY, 20, 20);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background (255, 120, 0)
}
