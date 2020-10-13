const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var raindrop = [];
var lightning = [];
var rand;
var lightningState = false;

var lightning, lightning_Img1, lightning_Img2, lightning_Img3, lightning_Img4;

function preload(){
        lightning_Img1 = loadImage("1.png");
        lightning_Img2 = loadImage("2.png");
        lightning_Img3 = loadImage("3.png");
        lightning_Img4 = loadImage("4.png");
}

function setup(){
   createCanvas(400,800);

   engine = Engine.create();
   world = engine.world;

   batman = new Umbrella(width/2, height-70, 50);

   lightning = Bodies.rectangle(200,50,50,100);
   
}

function draw(){
    rectMode(CENTER);
    background(0);

    Engine.update(engine);

    batman.display();

      for (var c = 0; c < raindrop.length; c++){
        raindrop[c].display();
      }
    
      if (frameCount % 1 === 0){
        raindrop.push(new Raindrop(random(random(0, 400), width/2+10,), 5, 5));
      } 

      rand = random(1, 4);

      if (frameCount % 80 === 0) {
        lightning = createSprite(random(0, 400), 50, 10, 10);

        rand = Math.round(random(1, 4));

        lightningState = true;

        switch(rand){
                case 1: lightning.addImage(lightning_Img1);
                        break;
                case 2: lightning.addImage(lightning_Img2);
                        break;
                case 3: lightning.addImage(lightning_Img3);
                        break;
                case 4: lightning.addImage(lightning_Img4);
                        break;
                default: break;
        
        }
      }

      //console.log(lightningState);

      if (frameCount % 15 === 0 && lightningState === true) {
        lightning.destroy();
        lightningState = false;
      }
      
      //if (frameCount % 22 === 0 && frameCount > 80) {
        //lightning.destroy();
      //}

      drawSprites();
}   


