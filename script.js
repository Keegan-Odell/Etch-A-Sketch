let defaultColor = "#000000";
let backgroundColor = "#ffffff";
let defaultSize = 16;
let test = 250;
const colorSelection = document.querySelector("#colorSelection");
const eraser = document.querySelector("#eraser");
const size = document.querySelector("#size");
const grid = document.querySelector("#container");
const rainbow = document.querySelector("#rainbow");
const clear = document.querySelector("#clear");

for (let i = 0; i < defaultSize ** 2; i++) {
	let square = document.createElement("div");
	square.classList.add("square");
	grid.appendChild(square);
	square.addEventListener("mouseover", reColor);
	square.addEventListener("mousedown", reColor);
}

function reColor() {
	this.style.backgroundColor = defaultColor;
}

colorSelection.addEventListener("input", () => {
	defaultColor = colorSelection.value;
});

eraser.addEventListener("click", () => {
	defaultColor = backgroundColor;
});

function deleteGrid() {
	let squareRM = document.querySelector("#container");

	while (squareRM.firstChild) {
		squareRM.removeChild(squareRM.firstChild);
	}
}

function createGrid() {
	for (let i = 0; i < defaultSize ** 2; i++) {
		let square = document.createElement("div");
		square.classList.add("square");
		grid.appendChild(square);
		square.addEventListener("mouseover", reColor);
	}
	grid.style.width = defaultSize * 31.25 + "px";
	grid.style.height = defaultSize * 31.25 + "px";
}

size.addEventListener("click", () => {
	let sizeQuestion = prompt("How big would you like your canvas?", "16");
	Number(sizeQuestion);
	if (sizeQuestion > 100) {
		alert("size is too big!");
		return;
	} else {
		defaultSize = sizeQuestion;
	}

	deleteGrid();
	createGrid();
});

rainbow.addEventListener("click", () => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	defaultColor = "rgb(" + r + "," + g + "," + b + ")";
});

clear.addEventListener("click", () => {
	deleteGrid();
	createGrid();
});
