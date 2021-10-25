var clicksound= new Audio();
clicksound.src= "sound/whoosh.mp3";
function clicked(str){
	let x1=Math.ceil(Math.random()*400);
	let x2=Math.ceil(Math.random()*400);
	let x3=Math.ceil(Math.random()*400);
	let x4=Math.ceil(Math.random()*400);
	document.getElementById(str).style.left=x1+"%";
	document.getElementById(str).style.right=x2+"%";
	document.getElementById(str).style.top=x3+"%";
	document.getElementById(str).style.bottom=x4+"%";
	clicksound.play();
}
function click_link() {
	window.alert("Vào inbox tớ thôi!!!!!!");
	window.alert("yêu lắm cơ");
	window.open("https://www.facebook.com/nguyen.h.01092006","_self")
}
