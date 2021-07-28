var canvasWidth = 800;
var canvasHeight = 600;
var FPS = 60;
let img_grass;

function preload(){
  //failsound = loadSound('main/assets/fail.wav');
  //hitsound = loadSound('main/assets/hit_sound.wav');
}

function setup() {
  var canvas =  createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder');
  img_grass = loadImage('main/assets/download.jpg');
}

setInterval(function draw() {
  image(img_grass, 0, 0);
  textSize(32);
  text('In work...', 10, 30);
  fill(0, 102, 153);
  }, 1000/FPS);
