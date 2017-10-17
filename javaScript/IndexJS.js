window.onload=function(){
	/*var audio=document.getElementById("audio");
	audio.volume=0.25;*/
	
	var fbIcon=document.getElementById("fbIcon");
	fbIcon.addEventListener("mouseover",function(){
		this.style.opacity=0.2;
	});
	fbIcon.addEventListener("mouseout",function(){
		this.style.opacity=1;
	});
	
	var igIcon=document.getElementById("igIcon");
	igIcon.addEventListener("mouseover",function(){
		this.style.opacity=0.2;
	});
	igIcon.addEventListener("mouseout",function(){
		this.style.opacity=1;
	});
	
	/*var box=document.getElementById("titleAnimation");
	var style=window.getComputedStyle(box);
	var height=style.getPropertyValue("height");
	var width=style.getPropertyValue("width");
	height=parseInt(height);
	width=parseInt(width);
	var interID1=window.setInterval(function(){
		if(height>=300){
			window.clearInterval(interID1);
			return;
		}
		height+=5;
		box.style.height=height+"px";
	},5);
	var interID2=window.setInterval(function(){
		if(width>=1903){
			window.clearInterval(interID2);
			return;
		}
		width+=20;
		box.style.width=width+"px";
	},5);*/
	
	var box=document.getElementById("titleAnimation");
	box.style.top="257px";
	box.style.height="1243px";
	window.setTimeout(AnimationA, 500);
	window.setTimeout(AnimationB, 1000);
	window.setTimeout(AnimationC, 2000);
	window.setTimeout(AnimationIndexA, 2200);
	window.setTimeout(AnimationIndexB, 2400);
	window.setTimeout(AnimationIndexC, 2600);
	window.setTimeout(AnimationIndexD, 2800);
	window.setTimeout(AnimationIndexE, 3000);
	
	
};

function indexIN(inWhat){
	var thing=document.getElementById("index"+inWhat);
	thing.style.backgroundColor="#0066FF";
}
function indexOUT(outWhat){
	var thing=document.getElementById("index"+outWhat);
	thing.style.backgroundColor="#5599FF";
}
function clickIndex(clickWhat){
	var thing=document.getElementById("mainDocument");
	if(clickWhat==1){
		thing.src="Homepage.html";
	}else if(clickWhat==2){
		thing.src="Introduction.html";
	}else if(clickWhat==3){
		thing.src="Gallery.html";
	}else if(clickWhat==4){
		thing.src="ContactMe.html";
	}else if(clickWhat==5){
		thing.src="555.html";
	}
	thing.scrolling="no"; 
}
function AnimationA(){
	var box=document.getElementById("titleAnimation");
	box.style.height="40px";
}
function AnimationB(){
	var box=document.getElementById("titleAnimation");
	box.style.width="1903px";
}
function AnimationC(){
	var box=document.getElementById("titleAnimation");
	box.style.visibility="hidden";
	var index=document.getElementById("indexSet");
	index.style.opacity="1";
}
function AnimationIndexA(){
	var thing=document.getElementById("index1");
	thing.style.opacity="1";
}
function AnimationIndexB(){
	var thing=document.getElementById("index2");
	thing.style.opacity="1";
}
function AnimationIndexC(){
	var thing=document.getElementById("index3");
	thing.style.opacity="1";
}
function AnimationIndexD(){
	var thing=document.getElementById("index4");
	thing.style.opacity="1";
}
function AnimationIndexE(){
	var thing=document.getElementById("index5");
	thing.style.opacity="1";
}
/*
function getData(){
	var req=new XMLHttpRequest();
	req.open=("get","C:\Users\Kevin_Chen\Desktop\網頁製作學習\text.html")
	req.onload=function(){
		var content=document.getElementById("content");
		alert(this.responseText);
		content.innerHTML=this.responseText;
	};
	req.send();
}
*/