function change(choice){
	//window.document.body.innerHTML="安安";
	var voteTic=document.getElementById("vote"+choice);
	if(choice=="1"){
		voteTic.innerHTML="11";
		voteTic.style.color="red";
		//javaScript不能使用"-"(dash)，通常去"-"改成字首大寫 ex.font-weight>>fontWeight
		voteTic.style.fontWeight="bold";
	}else if(choice=="2"){
		voteTic.innerHTML="12";
		voteTic.style.color="red";
		voteTic.style.fontWeight="bold";
	}else{
		alert("投票無效");
	}
}
function hide(){
	var thing=document.getElementById("table1");
	thing.classList.toggle("hideTable"); //toggle>>有這個屬性的話就刪掉，沒有的話就加上
	/*
	if(thing.style.display=="none"){			
		thing.style.display="block";
	}else{
		thing.style.display="none";
	}
	*/
}
/*function boxAnimation(){
	var box=document.getElementById("box");
	var style=window.getComputedStyle(box);
	var size=style.getPropertyValue("width");
	size=parseInt(size);
	window.setInterval(function(){
		size+=3;
		box.style.width=size+"px";
	},10);
}*/