import {Component, OnInit, Renderer, ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-canvas-draw',
  templateUrl: './canvas-draw.page.html',
  styleUrls: ['./canvas-draw.page.scss'],
})
export class CanvasDrawPage implements OnInit {
    @ViewChild('myCanvas') canvas: any;
    canvasElement: any;

    constructor(public platform: Platform, public renderer: Renderer, private devicemotion:DeviceMotion) {
    }

    ngOnInit() {
var canvasElement = this.canvas.nativeElement;
console.log(canvasElement.width);
console.log(canvasElement.height);
this.renderer.setElementAttribute(canvasElement,'width',this.platform.width()+'');
this.renderer.setElementAttribute(canvasElement,'height',this.platform.height()+'');
console.log(canvasElement.width);
console.log(canvasElement.height);
var ctx=canvasElement.getContext('2d');
console.log(ctx);

function handleMotionEvent(evt){ //p,q,r are the x,y,z
    var p = evt.accelerationIncludingGravity.x;
    var q = evt.accelerationIncludingGravity.y;
    var r = evt.accelerationIncludingGravity.z;
    drawPattern(event,p*10,q*10,r);
}

function drawPattern(evt,p,q,r){
 ctx.clearRect(0,0,canvasElement.width,canvasElement.height);

 
//code for the top side
var x=0;
var y=0;
for(x=0;x<=50;x++){
ctx.beginPath();
ctx.moveTo(x,y-=30);
ctx.bezierCurveTo(x+400,y-200*p,x+200,y+200, canvasElement.width/2, canvasElement.height/2);
ctx.lineWidth=30;
if(x%2==0)
{
ctx.strokeStyle = "black";
}
else
{
ctx.strokeStyle = "white";
}
ctx.stroke();

}

//code for the top side
var a=0;
var b=0;
for(a=0;a<=50;a++){
ctx.beginPath();
ctx.moveTo(canvasElement.width/2,canvasElement.height/2);
ctx.bezierCurveTo(a+1100,b+300*p,a+1000,b-180,a+1390,b-=30);
ctx.lineWidth=30;
if(a%2==0)
{
ctx.strokeStyle = "black";
}
else
{
ctx.strokeStyle = "white";
}
ctx.stroke();
}

//code for left side
var x=0;
var y=0;
for(x=0;x<=50;x++){
ctx.beginPath();
ctx.moveTo(x,y+=30);
ctx.bezierCurveTo(x+400,y-200*p,x+200,y+200*p, canvasElement.width/2, canvasElement.height/2);
ctx.lineWidth=30;
if(x%2==0)
{
ctx.strokeStyle = "black";
}
else
{
ctx.strokeStyle = "white";
}
ctx.stroke();
}

//code for the right side
var a=0;
var b=0;
for(a=0;a<=50;a++){
ctx.beginPath();
ctx.moveTo(canvasElement.width/2,canvasElement.height/2);
ctx.bezierCurveTo(a+1100,b+300,a+1000,b-180,a+1390,b+=30);
ctx.lineWidth=30;
if(a%2==0)
{
ctx.strokeStyle = "black";
}
else
{
ctx.strokeStyle = "white";
}
ctx.stroke();
}

//code for the circles
ctx.strokeStyle="white";

ctx.beginPath();
ctx.arc(canvasElement.width/2, canvasElement.height/2,5*x, 0, 2 * Math.PI);
ctx.fillStyle="white";
ctx.lineWidth=8*x;
ctx.stroke();

ctx.beginPath();
ctx.arc(canvasElement.width/2, canvasElement.height/2,50*x, 0, 2 * Math.PI);
ctx.lineWidth=3;
ctx.stroke();

ctx.beginPath();
ctx.arc(canvasElement.width/2, canvasElement.height/2,150*x, 0, 2 * Math.PI);
ctx.lineWidth=5;
ctx.stroke();

ctx.beginPath();
ctx.arc(canvasElement.width/2, canvasElement.height/2,350*x, 0, 2 * Math.PI);
ctx.lineWidth=7;
ctx.stroke();

ctx.beginPath();
ctx.arc(canvasElement.width/2, canvasElement.height/2,550*x, 0, 2 * Math.PI);
ctx.lineWidth=30;
ctx.stroke();

}


window.addEventListener("devicemotion", handleMotionEvent, true);





    }
}