var card = document.querySelectorAll('.card')[0];
var card1 = document.querySelectorAll('.card')[1];
var card2 = document.querySelectorAll('.card')[2];
var card3 = document.querySelectorAll('.card')[3];
var card4 = document.querySelectorAll('.card')[4];
var card5 = document.querySelectorAll('.card')[5];
var cardtoggle = document.querySelectorAll('.toggle')[0];
var cardtoggle1 = document.querySelectorAll('.toggle')[1];
var cardtoggle2 = document.querySelectorAll('.toggle')[2];
var cardtoggle3 = document.querySelectorAll('.toggle')[3];
var cardtoggle4 = document.querySelectorAll('.toggle')[4];
var cardtoggle5 = document.querySelectorAll('.toggle')[5];
	cardtoggle.onclick = function(){
		card.classList.toggle("active")
}
	cardtoggle1.onclick = function(){
		card1.classList.toggle("active")
}
	cardtoggle2.onclick = function(){
		card2.classList.toggle("active")
}
	cardtoggle3.onclick = function(){
		card3.classList.toggle("active")
}
	cardtoggle4.onclick = function(){
		card4.classList.toggle("active")
}
	cardtoggle5.onclick = function(){
		card5.classList.toggle("active")
}
function change(){
	if (document.body.classList.contains("day")){
		document.body.classList = "";
	}
	else{
		document.body.className = "day";
	}
}
function manage(){
	location.replace("manager.html")
}