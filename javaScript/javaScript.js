window.onload=function(){
	var audio=document.getElementById("audio");
	audio.volume=0.25;
	
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