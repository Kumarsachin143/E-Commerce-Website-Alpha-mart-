
var ProductImg = document.getElementById("ProductImg");
var smallimg  = document.getElementsByClassName("smallimg");
smallimg[0].onclick = function(){
	ProductImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
	ProductImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
	ProductImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    ProductImg.src = smallimg[3].src;
}
/*-------------------create deteil form-----------------------*/
var Loginform = document.getElementById("Loginform");
var Regform = document.getElementById("Regform");
var Indicator = document.getElementById("Indicator");
function register(){
	Regform.style.transform = "translateX(0px)";
	Loginform.style.transform = "translateX(300px)";

}
function login(){
	Regform.style.transform = "translateX(300px)";
	Loginform.style.transform = "translateX(300px)";
	
}