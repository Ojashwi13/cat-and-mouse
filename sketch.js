var bgImg;
var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;

function preload() {
    //load the images here
    bgImg = loadImage ("images/garden.png");
    catImg1 = loadAnimation ("images/cat1.png");
    mouseImg1 = loadAnimation ("images/mouse1.png");
    catImg2 = loadAnimation ("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation ("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite (200,600,100,100);
    mouse.scale = 0.15;
    cat = createSprite (870,600,100,100);
    cat.scale = 0.2 ;
    mouse.addAnimation ("mouse1", mouseImg1);
    cat.addAnimation ("cat1", catImg1);
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){
    mouse.addAnimation ("mouseteasing", mouseimg2);
    mouse.changeAnimation ("mouseteasing");
    mouse.frameDelay = 25;
}

 if(keyCode === LEFT_ARROW){
        mouse.addAnimation ("mouseteasing", mouseimg2);
        mouse.changeAnimation ("mouseteasing");
        mouse.frameDelay = 25;
}

}
