/*
var testBoxAttribute=new Object();
	testBoxAttribute.x=0;
	testBoxAttribute.y=0;
	testBoxAttribute.size=1;
	testBoxAttribute.spanDeg=0;
	testBoxAttribute.skewXDeg=0;
	testBoxAttribute.skewYDeg=0;
*/
window.onload=function(){
	var audio=document.getElementById("audio");
	audio.volume=0.25;
};

function indexHomepage(){
	var thing=document.getElementById("indexHomepage");
	thing.classList.toggle("indexSelect")
}
function indexIN(inWhat){
	var thing=document.getElementById("index"+inWhat);
	thing.style.backgroundColor="#0066FF";
}
function indexOUT(inWhat){
	var thing=document.getElementById("index"+inWhat);
	thing.style.backgroundColor="#5599FF";
}
function clickIndex(clickWhat){
	var thing=document.getElementById("mainDocument");
	var iframe=document.getElementById("mainDocument");
	if(clickWhat==1){
		thing.src="Homepage.html";
	}else if(clickWhat==2){
		thing.src="Introduction.html";
	}else if(clickWhat==3){
		thing.src="Gallery.html";
	}else if(clickWhat==4){
		thing.src="Contact Me.html";
	}else if(clickWhat==5){
		thing.src="555.html";
	}
	iframe.scrolling="no"; 
}
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
