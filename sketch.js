const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";

function preload() {
   backgroundImg = loadImage(bg);
    getBackgroundImg();
}

function setup(){
    background("backgroundImg");
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }
     Engine.update(engine);   

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    // write code slice the datetime
    var hour = datetime.slice(11,13);
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
   if(hour>04 && hour<06){
   bg = "sunrise1.png";
   }else if(hour>06 && hour<08){
   bg = "sunrise2.png"
   }else if(hour>06 && hour<08){
    bg = "sunrise3.png"
    }else if(hour>06 && hour<08){
        bg = "sunrise4.png"
   }else if(hour>06 && hour<08){
         bg = "sunrise5.png"
   }else if(hour>06 && hour<08){
         bg = "sunrise6.png"
   }else if(hour>06 && hour<08){
         bg = "sunrise7.png"
   }else if(hour>06 && hour<08){
        bg = "sunrise8.png"
   }else if(hour>06 && hour<08){
        bg = "sunrise9.png"
   }else if(hour>06 && hour<08){
        bg = "sunrise10.png"
   }else if(hour>06 && hour<08){
        bg = "sunrise11.png"
    }






    //load the image in backgroundImg variable here
    backgroundImg = loadImage("sunrise1.png","sunrise2.png","sunrise3.png","sunrise4.png",
    "sunrise5.png","sunrise6.png","sunrise7.png","sunrise8.png","sunrise9.png","sunrise10.png",
    "sunrise11.png","sunrise12.png");

}
