var canvasWidth = 1024;
var canvasHeight = 800;

let img_background;
let img_grass;
let img_bush;
let img_tree;
let img_clouds = ['main/assets/cloud1.png', 'main/assets/cloud2.png', 'main/assets/cloud3.png', 'main/assets/cloud4.png', 'main/assets/cloud5.png', 'main/assets/cloud6.png'];
let cloud1_cord = 650;
let cloud2_cord = 970;
let cloud3_cord = -80;
let cloud4_cord = 215;
let cloud5_cord = -70;
let cloud6_cord = 30;
let crosshair;
let bullet;
let bullet_cord = ['255', '277', '300'];
var clicks = 0;
let score = 0;

let ambient_sound;
let gun_reload;
let gun_shot;
let out_of_ammo;

function preload(){
  soundFormats('mp3', 'ogg');
  gun_shot = loadSound('main/assets/sound_effects/gun_shot.mp3');
  gun_reload = loadSound('main/assets/sound_effects/gun_reload.mp3');
  out_of_ammo = loadSound('main/assets/sound_effects/out_of_ammo.mp3');

}

function setup() {
  var canvas =  createCanvas(canvasWidth, canvasHeight);
  canvas.mouseClicked(clickOnlyCanvas);
  canvas.parent('sketch-holder');
  frameRate(30);

  img_background = loadImage('main/assets/background.png');
  img_grass = loadImage('main/assets/grass.png');
  img_bush = loadImage('main/assets/bush.png');
  img_tree = loadImage('main/assets/trees.png');

  img_cloud1 = loadImage(img_clouds[0]);
  img_cloud2 = loadImage(img_clouds[1]);
  img_cloud3 = loadImage(img_clouds[2]);
  img_cloud4 = loadImage(img_clouds[3]);
  img_cloud5 = loadImage(img_clouds[4]);
  img_cloud6 = loadImage(img_clouds[5]);

  bullet = loadImage('main/assets/bullet.png');


  crosshair = loadImage('main/assets/crosshair.png');

}
function draw() {
  moveclouds();
  image(img_background, 0, 0);
  image(img_tree, 30, 200);
  image(img_bush, 850, 460);
  image(img_grass, 0, 0);
  navbar();
  image(bullet, bullet_cord[0], 725);
  image(bullet, bullet_cord[1], 725);
  image(bullet, bullet_cord[2], 725);


  image(img_cloud1, cloud1_cord, 10, 130, 80);
  image(img_cloud2, cloud2_cord, 100, 130, 80);
  image(img_cloud3, cloud3_cord, 120, 100, 50);
  image(img_cloud4, cloud4_cord, 130, 150, 90);
  image(img_cloud5, cloud5_cord, 115, 120, 70);
  image(img_cloud6, cloud6_cord, 95, 110, 80);

  image(crosshair, mouseX-16, mouseY-16);

  }

  function moveclouds(){
    cloud1_cord = cloud1_cord + random(0.10, 0.19); //0.10
    cloud2_cord = cloud2_cord + random(0.15, 0.23); //0.15
    cloud3_cord = cloud3_cord + random(0.12, 0.25); //0.12
    cloud4_cord = cloud4_cord + random(0.17, 0.30); //0.17
    cloud5_cord = cloud5_cord + random(0.14, 0.22); //0.14
    cloud6_cord = cloud6_cord + random(0.13, 0.18); //0.13

    //console.log("Cloud1: " + cloud1_cord + '\n' + "Cloud2: " + cloud2_cord + '\n' + "Cloud3: " + cloud3_cord + '\n' + "Cloud4: " + cloud4_cord + '\n' + "Cloud5: " + cloud5_cord + '\n' + "Cloud6: " + cloud6_cord + '\n');

    if (cloud1_cord > canvasWidth) {
      cloud1_cord = -130;
    }
    else if (cloud2_cord > canvasWidth) {
      cloud2_cord = -100;
    }
    else if (cloud3_cord > canvasWidth) {
      cloud3_cord = -120;
    }
    else if (cloud4_cord > canvasWidth) {
      cloud4_cord = -130;
    }
    else if (cloud5_cord > canvasWidth ) {
      cloud5_cord = -110;
    }
    else if (cloud6_cord > canvasWidth) {
      cloud6_cord = -120;
    }
  }

  function clickOnlyCanvas(event){
    console.log(event);
    clicks++;
    shoot();
  }

  function keyPressed() {
  if (keyCode === 82) {
    bullet_cord[0] = 255;
    bullet_cord[1] = 277;
    bullet_cord[2] = 300;
    clicks = 0;
    gun_reload.play();
    console.log('reload ammo');
  }
}
  function shoot(){
    if (clicks === 1) {
      bullet_cord[0] = -1000;
      score += 300;
      gun_shot.play();
      console.log(clicks);
    }else if (clicks === 2) {
      bullet_cord[1] = -1000;
      score += 300;
      gun_shot.play();
      console.log(clicks);
    }else if (clicks === 3) {
      bullet_cord[2] = -1000;
      score += 300;
      gun_shot.play();
      console.log(clicks);
    }else if(clicks >= 3){
      out_of_ammo.play();
      text('Out of ammo', mouseX, mouseY);
      console.log('out of ammo');
    }else{
      keyPressed();
    }
  }

  function navbar(){
    //shots
    push();
    stroke(color(121,197,21));
    strokeWeight(4);
    fill(0);
    rect(250, 720, 80, 60, 10);
    pop();

    textSize(20);
    fill(60,186,247);
    text('SHOT', 260, 770);
    textStyle(BOLD);

    //duck count
    push();
    stroke(color(121,197,21));
    strokeWeight(4);
    fill(0);
    rect(canvasWidth/3, 720, 360, 60, 10);
    pop();

    push();
    textSize(20);
    fill(121,197,21);
    text('HIT', 350, 743);
    textStyle(BOLD);
    pop();

    //score
    push();
    stroke(color(121,197,21));
    strokeWeight(4);
    fill(0);
    rect(713, 720, 120, 60, 10);
    pop();

    textSize(20);
    fill(255);
    text('SCORE', 753, 773);
    textStyle(BOLD);

    textSize(20);
    fill(255);
    text(score, 723, 743);
    textStyle(BOLD);

  }
