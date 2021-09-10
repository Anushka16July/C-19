var boyImg,boy1,boy_running;
var backImg,back;




function preload(){
    boyImg = loadImage("Boy1.png");
    backImg = loadImage("road.png");
    boy_running = loadAnimation("Boy2.png");

}
function setup() {
    createCanvas(800,800);


 back = createSprite(50,220);
back.addImage("back",backImg);
back.scale = 1.5;
back.x = back.width/5;
back.velocityX = -1;

boy = createSprite(200,450);
boy.addImage("boy",boyImg);
boy.scale = 0.7;
boy.addAnimation("running",boy_running);



 
}

function draw() {
    background(200);
 

    if (back.x < 100){
        back.x = back.width/5;
    }

    drawSprites();
 
}