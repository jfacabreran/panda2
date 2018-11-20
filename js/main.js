var imagenes = ["img/panda1.jpg","img/panda2.jpg","img/panda3.jpg","img/panda4.jpg"];
var divImg = document.getElementById("pictures");
var parrafo1 = document.getElementById("parrafo1");
var parrafo2 = document.getElementById("parrafo2");
/*********************************************/
/*******FUNCIONALIDADES DE LOS BOTONES********/
/*********************************************/
document.getElementById("oriBtn").onclick = function(){
	parrafo1.className = parrafo1.className== "esconder" ? "mostrar" : "esconder";
	console.log(parrafo1.className);
}
document.getElementById("extBtn").onclick = function(){
	parrafo2.className = parrafo2.className=="mostrar" ?"esconder" : "mostrar";
}
document.getElementById("restBtn").onclick= function(){
	while(divImg.children.length>0)
		divImg.removeChild(divImg.firstChild);
	ponerImg();
};
/**********************************************/
/**********************************************/
/**********************************************/
function ponerImg(){
	for(var i in imagenes){
		var div = document.createElement("div");
		var img = document.createElement("img");
		var span = document.createElement("span");
		span.textContent= "X";
		img.src=imagenes[i];
		div.appendChild(span);
		div.appendChild(img);
		divImg.appendChild(div);
		span.onclick = function (){
			this.parentNode.parentNode.removeChild(this.parentNode);
		};
	}
}
ponerImg();