window.onload=function(){
	var audio=document.getElementById("audio");
	audio.volume=0.25;
	
	var index1=document.getElementById("index1");
	var index2=document.getElementById("index2");
	var index3=document.getElementById("index3");
	var index4=document.getElementById("index4");
	var index5=document.getElementById("index5");
	var index6=document.getElementById("index6");
	
	var fbIcon=document.getElementById("fbIcon");
	var igIcon=document.getElementById("igIcon");
	
	index1.addEventListener("mouseover",indexOver);
	index1.addEventListener("mouseout",indexOut);
	index2.addEventListener("mouseover",indexOver);
	index2.addEventListener("mouseout",indexOut);
	index3.addEventListener("mouseover",indexOver);
	index3.addEventListener("mouseout",indexOut);
	index4.addEventListener("mouseover",indexOver);
	index4.addEventListener("mouseout",indexOut);
	index5.addEventListener("mouseover",indexOver);
	index5.addEventListener("mouseout",indexOut);
	index6.addEventListener("mouseover",indexOver);
	index6.addEventListener("mouseout",indexOut);
	
	fbIcon.addEventListener("mouseover",iconOver);
	fbIcon.addEventListener("mouseout",iconOut);
	igIcon.addEventListener("mouseover",iconOver);
	igIcon.addEventListener("mouseout",iconOut);
	
	var box=document.getElementById("indexAnimation");
	box.style.top="257px";
	box.style.height="1243px";
	
	window.setTimeout(AnimationA, 500);
	window.setTimeout(AnimationB, 1000);
	window.setTimeout(AnimationC, 1500);
	window.setTimeout(function(){AnimationIndex(1);}, 2000);
	window.setTimeout(function(){AnimationIndex(2);}, 2100);
	window.setTimeout(function(){AnimationIndex(3);}, 2200);
	window.setTimeout(function(){AnimationIndex(4);}, 2300);
	window.setTimeout(function(){AnimationIndex(5);}, 2400);
	window.setTimeout(function(){AnimationIndex(6);}, 2500);
};

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
		thing.src="JQuery-ui.html";
	}else if(clickWhat==6){
		thing.src="Bookstrap.html";
	}
	thing.scrolling="no"; 
}
function AnimationA(){
	var box=document.getElementById("indexAnimation");
	box.style.height="40px";
}
function AnimationB(){
	var box=document.getElementById("indexAnimation");
	box.style.width="1903px";
}
function AnimationC(){
	var box=document.getElementById("indexAnimation");
	box.style.visibility="hidden";
	var index=document.getElementById("indexSet");
	index.style.opacity="1";
}
function AnimationIndex(clickWhat){
	var thing=document.getElementById("index"+clickWhat);
	thing.style.opacity="1";
}
function indexOver(){
	this.style.backgroundColor="#0066FF";
}
function indexOut(){
	this.style.backgroundColor="#5599FF";
}
function iconOver(){
	this.style.opacity=0.2;
}
function iconOut(){
	this.style.opacity=1;
}
/*function getData(){
	var req=new XMLHttpRequest();
	req.open=("get","C:\Users\Kevin_Chen\Desktop\網頁製作學習\text.html")
	req.onload=function(){
		var content=document.getElementById("content");
		alert(this.responseText);
		content.innerHTML=this.responseText;
	};
	req.send();
}*/
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
},5)*/