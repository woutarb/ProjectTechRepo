var cards = document.getElementsByTagName('article');
function clickedCard(cardID){
	var editingArticle = document.getElementsByTagName('article')[cardID];
	if (editingArticle.className == "regular"){
		editingArticle.className = "invis";
	}else{
		editingArticle.className = "regular";
	}
}

for(var i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click", clickedCard.bind(null, i));
	document.getElementsByTagName('article')[i].className = "invis";

}