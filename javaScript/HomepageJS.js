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
	
	var btn=document.getElementById("canvasButton");
	var hint=document.getElementById("hintText");
	
	var cvs=document.getElementById("canvasTable");
	var ctx=cvs.getContext("2d");
	
	//確保線條不會被縮放
	//tWid = window.devicePixelRatio;
	
	ctx.fillStyle="#9900FF";
	ctx.fillRect(10,10,750,750);
	ctx.fillStyle="#0000FF";
	ctx.fillRect(20,20,650,650);
	ctx.fillStyle="#00BBFF";
	ctx.fillRect(30,30,550,550);
	ctx.fillStyle="#00FF00";
	ctx.fillRect(40,40,450,450);
	ctx.fillStyle="#FFFF00";
	ctx.fillRect(50,50,350,350);
	ctx.fillStyle="#FF8800";
	ctx.fillRect(60,60,250,250);
	ctx.fillStyle="#FF0000";
	ctx.fillRect(70,70,150,150);
	
	ctx.strokeStyle="#000000";
	ctx.strokeRect(80,80,100,100);
	//ctx.scale(0.5,0.5);
	ctx.strokeRect(90,90,50,50);
	
	var canvasHandler=function(){
		alert("請透過上下左右控制畫板");
		hint.style.visibility="visible";
		
		//重新設定畫板
		cvs.width = parseInt(cvs.width);
		cvs.height = parseInt(cvs.height);
		
		ctx.fillStyle="red";//Fill填滿
		ctx.strokeStyle="blue";//Stroke描邊	
		
		var clientDraw=new Object();
		clientDraw.x=400;
		clientDraw.y=400;
		
		ctx.beginPath();
		ctx.moveTo(clientDraw.x,clientDraw.y);
		
		function draw(){
			ctx.lineTo(clientDraw.x,clientDraw.y);
			ctx.closePath();
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(clientDraw.x,clientDraw.y);
		};
		
		document.addEventListener("keydown",function(e){
			event.preventDefault();	//取消上下鍵卷軸移動功能
			if(e.keyCode==37){
				clientDraw.x-=10;			
				draw();
			}else if(e.keyCode==38){
				clientDraw.y-=10;
				draw();
			}
			else if(e.keyCode==39){
				clientDraw.x+=10;
				draw();
			}
			else if(e.keyCode==40){
				clientDraw.y+=10;
				draw();
			}else if(e.keyCode==27){
				//離開功能
				return;
			}
		});
	};
	
	btn.addEventListener("click",canvasHandler);
};

function transform(clickWhat){
	var thing=document.getElementById("transformBox");
	if(clickWhat==1){
		testBoxAttribute.x+=30;
		testBoxAttribute.y+=30;
	}else if(clickWhat==2){
		testBoxAttribute.size+=0.25;
	}else if(clickWhat==3){
		testBoxAttribute.spanDeg+=15;
	}else if(clickWhat==4){
		testBoxAttribute.skewXDeg+=10;
		testBoxAttribute.skewYDeg+=10;
	}else if(clickWhat==5){
		testBoxAttribute.x=0;
		testBoxAttribute.y=0;
		testBoxAttribute.size=1;
		testBoxAttribute.spanDeg=0;
		testBoxAttribute.skewXDeg=0;
		testBoxAttribute.skewYDeg=0;
	}
	thing.style.transform="translate("+testBoxAttribute.x+"px,"+testBoxAttribute.y+"px) scale("+testBoxAttribute.size+","+testBoxAttribute.size+") rotate("+testBoxAttribute.spanDeg+"deg) skew("+testBoxAttribute.skewXDeg+"deg,0deg)";
}	