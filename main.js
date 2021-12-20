var status = "";
var get = "";

function preload(){

}
    
function setup(){
canvas = createCanvas(450,370);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function modelLoaded(){
console.log('Model Loaded');
status = true;
}
 
function start(){
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("Status").innerHTML = "Status:- Detecting Objects";
get = "input-sky";
}

function gotResult(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
}
}

function draw(){
image(video,0,0,450,370);
}