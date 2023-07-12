const fetchBtn = document.querySelector(".fetch-btn");
const boredText = document.querySelector(".bored-text");

fetchBtn.addEventListener("click", () => {
	fetch("https://apis.scrimba.com/bored/api/activity")
		.then((response) => response.json())
		.then((data) => {
			boredText.innerHTML = `${data.activity}`;
			boredText.classList.add("accent-text");
			document.body.classList.add("fun");
			document.querySelector(".title").innerHTML = `🤠 There ya go! 🤠`;
		});
});
