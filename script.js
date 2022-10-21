for (let i = 0; i < 256; i++) {
	const container = document.querySelector("#container");

	let square = document.createElement("div");
	square.classList.add("square");
	container.appendChild(square);
	square.addEventListener("mouseover", reColor);
	square.style.backgroundColor = "pink";
}

function reColor() {
	this.style.backgroundColor = "black";
}
