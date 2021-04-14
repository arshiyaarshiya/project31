const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var drops = [];
var maxdrop = 100;
var thunder,rand;
var thunderCreatedFrame=0;
var thunder1,thunder2,thunder3,thunder4

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){

    engine = Engine.create();
    world = engine.world;

    canvas = createCanvas(400,700);
    boy = new Umbrella(200,500);

    if(frameCount % 150=== 0){
        for(var a = 0; a < maxdrop ; a++){
            drops.push(new Drop(random(0,400),random(0,400)));
            //drops[a].show();
        }
    }

}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1,4));
    if (frameCount %80 === 0) {
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            default: break;
        }
        thunder.scale = random(0.3,0.6);
    }

    boy.show();

    if(thunderCreatedFrame+10 === frameCount && thunder){
        thunder.destroy();
    }

    for(var a = 0; a < maxdrop ; a++){
       // drops.push(new Drop(random(0,400),random(0,400)));
        drops[a].show();
        drops[a].update();
    }
    
    drawSprites();
}  

