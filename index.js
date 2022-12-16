let ratingCard = document.querySelector('.rating-card');
let ratingButtons = document.querySelectorAll('.rating-card__rate button');
let submitButton = document.querySelector('.rating-card>button');
let thankyouCard = document.querySelector('.thankyou-card');
let ratingParagraph = document.querySelector('.thankyou-card>p');

var rating = 0;

for (var ratingButton of ratingButtons) {
	ratingButton.addEventListener("click", function (event) {
		var currentActiveButton = document.querySelector('.active');

		currentActiveButton?.classList.remove('active');
		event.target.classList.add("active");

		rating = event.target.innerText;
	});
}

submitButton.addEventListener("click", function (event) {
	ratingCard.style.display = "none";
	thankyouCard.style.display = "flex";
	ratingParagraph.innerText = `You selected ${rating} out of 5`
});