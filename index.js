const cards = document.querySelectorAll(".memory_card");

let hasFlippedCard = false;
let firstCard, secondCard;

const flipCard = e => {
	const target =  e.target.parentElement;

	target.classList.add("flip");

	console.log ("framework of current card", target.dataset.framework);

	if (!hasFlippedCard) {

		hasFlippedCard = true;
		firstCard = target;
	} else {
		//second click
		hasFlippedCard = false;
		secondCard = target;

		checkForMatch();
	}
};

const checkForMatch = () => {
	if (firstCard.dataset.framework === secondCard.dataset.framework) {
		firstCard.removeEventListener ("click", flipCard);
		secondCard.removeEventListener ("click", flipCard);
	} else {
		setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
	}, 1000);
}

cards.forEach (card => {
	//add event listener to every card 
	card.addEventListener ('click', flipCard);
}) 