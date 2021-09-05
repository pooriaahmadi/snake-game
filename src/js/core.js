import "../css/style.css";
import Environment from "./Environment";
import themeMusic from "../sounds/theme-music.wav";

// DEVICE PROPERTIES
const ratio = devicePixelRatio;
const DEVICE_WIDTH = devicePixelRatio * window.innerWidth;
const DEVICE_HEIGHT = devicePixelRatio * window.innerHeight;

// CANVAS DECLARATION
const canvas = document.querySelector("canvas");
canvas.setAttribute("width", DEVICE_WIDTH);
canvas.setAttribute("height", DEVICE_HEIGHT);
canvas.style.width = "100%";
canvas.style.height = "100%";
const ctx = canvas.getContext("2d");

let env;
let userDifficulty = "easy";
const music = new Audio(themeMusic);
music.play();
const difficulty = {
	easy: 8,
	medium: 15,
	hard: 25,
};
const countDown = () => {
	let counter = 1;
	const h1 = document.querySelector(".count-down>h1");
	h1.innerHTML = 1;
	const countDownInterval = setInterval(() => {
		if (counter === 3) {
			clearInterval(countDownInterval);
			document.querySelector(".count-down").style.display = "none";
			music.pause();
			env = new Environment({
				ctx: ctx,
				width: DEVICE_WIDTH,
				height: DEVICE_HEIGHT,
				snakeSize: 20,
				frameRate: difficulty[userDifficulty],
				appleColor: "red",
				snakeColor: "black",
			});
			return;
		}
		counter++;
		h1.innerHTML = counter;
	}, 1000);
};
document.getElementById("play").addEventListener("click", (e) => {
	document.querySelector(".menu").style.display = "none";
	document.querySelector(".count-down").style.display = "flex";
	countDown();
});
document.querySelectorAll(".buttons>.buttons>button").forEach((item) => {
	item.addEventListener("click", (e) => {
		document.querySelectorAll(".buttons>.buttons>button").forEach((item) => {
			item.classList.remove("active");
		});
		userDifficulty = e.target.innerHTML.toLowerCase();
		e.target.classList.add("active");
	});
});
document.getElementById("music").addEventListener("click", (e) => {
	if (e.target.innerHTML == "Pause Music") {
		music.pause();
		e.target.innerHTML = "Play Music";
	} else {
		music.play();
		e.target.innerHTML = "Pause Music";
	}
});
