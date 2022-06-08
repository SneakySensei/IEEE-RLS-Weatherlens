const locations = ["Bangalore, IN", "Kolkata, WB", "Chennai, TN"];
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const locationText = document.getElementById("location-text");

let activeLocation = 0;

buttonLeft.addEventListener("click", (e) => {
	activeLocation--;
	if (activeLocation < 0) {
		activeLocation = locations.length - 1;
	}
	render();
});

buttonRight.addEventListener("click", (e) => {
	activeLocation++;
	if (activeLocation > locations.length - 1) {
		activeLocation = 0;
	}
	render();
});

const render = () => {
	locationText.innerText = locations[activeLocation];
};

render();
