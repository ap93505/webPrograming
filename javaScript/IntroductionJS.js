var video;
var testBoxAttribute={
	"x":0,
	"y":0,
	"size":1,
	"spanDeg":0,
	"skewXDeg":0,
	"skewYDeg":0
};

window.onload=function(){
	var cvs=document.getElementById("canvasTable");
	var ctx=cvs.getContext("2d");
	ctx.fillStyle="red";
	ctx.globalAlpha=0.5;
	ctx.fillRect(50,50,100,100);
	ctx.strokeRect(0,0,100,100);
	ctx.scale(0.5,0.25);
	ctx.strokeRect(0,0,100,100);
};
/*window.onload=function(){
	video=document.getElementById("video");
}*/

function transform(clickWhat){
	var thing=document.getElementById("transformBox");
	if(clickWhat==1){
		testBoxAttribute.x+=30;
		testBoxAttribute.y+=30;
		thing.style.transform+="translate(30px,30px)";
	}else if(clickWhat==2){
		testBoxAttribute.size+=0.25;
		thing.style.transform+="scale(1.25,1.25)";
	}else if(clickWhat==3){
		testBoxAttribute.spanDeg+=15;
		thing.style.transform+="rotate(15deg)";
	}else if(clickWhat==4){
		testBoxAttribute.skewXDeg+=15;
		thing.style.transform+="skew(15deg,15deg)";
	}else if(clickWhat==5){
		thing.style.transform="";
		testBoxAttribute.x=0;
		testBoxAttribute.y=0;
		testBoxAttribute.size=1;
		testBoxAttribute.spanDeg=0;
		testBoxAttribute.skewXDeg=0;
		testBoxAttribute.skewYDeg=0;
	}
}	