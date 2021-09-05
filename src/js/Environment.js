import Snake from "./Snake";
import Controller from "./Controller";
import Apple from "./Apple";
import coin from "../sounds/coin.mp3";
import ping from "../sounds/ping.mp3";
import dead from "../sounds/dead.wav";
class Environment {
	controllers = {
		w: new Controller({
			execute: () => {
				this.snake.move("up");
			},
		}),
		a: new Controller({
			execute: () => {
				this.snake.move("left");
			},
		}),
		s: new Controller({
			execute: () => {
				this.snake.move("down");
			},
		}),
		d: new Controller({
			execute: () => {
				this.snake.move("right");
			},
		}),
	};
	activeController = this.controllers.d;
	raise = false;
	constructor({
		ctx,
		width,
		height,
		snakeSize,
		snakeColor,
		appleColor,
		frameRate = 25,
	}) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.snake = new Snake({
			ctx: ctx,
			size: snakeSize,
			deviceWidth: width,
			deviceHeight: height,
			color: snakeColor,
		});
		this.apple = new Apple({
			ctx: ctx,
			size: snakeSize,
			deviceWidth: width,
			deviceHeight: height,
			color: appleColor,
		});
		this.apple.randomCoordinates(this.snake);
		this.frameRate = frameRate;
		this.sounds = {
			coin: new Audio(coin),
			dead: new Audio(dead),
			ping: new Audio(ping),
		};
		this.sounds.ping.play();
		document.querySelector(".score").innerHTML = 0;
		this.setup();
		this.start();
	}
	setup = () => {
		document.body.addEventListener("keypress", (e) => {
			if (e.key.toLowerCase() in this.controllers) {
				this.activeController = this.controllers[e.key.toLowerCase()];
			}
			if ((e.key === " " || e.key === "spacebar") && this.snake.isCollation()) {
				this.snake.reset();
				this.apple.randomCoordinates(this.snake);
				this.sounds.ping.play();
				document.querySelector(".count-down").style.display = "none";
				document.querySelector(".score").innerHTML = 0;
				this.start();
			}
		});
	};
	appleCollation = () => {
		const snakeHead = this.snake.history[this.snake.history.length - 1];
		if (
			snakeHead.x === this.apple.coordinates.x &&
			snakeHead.y === this.apple.coordinates.y
		) {
			this.raise = true;
			this.apple.randomCoordinates(this.snake);
			document.querySelector(".score").innerHTML =
				this.snake.history.length - 1;
			this.sounds.coin.play();
		}
	};
	start = () => {
		if (!this.snake.isCollation()) {
			this.ctx.clearRect(0, 0, this.width, this.height);
			this.activeController.execute();
			this.appleCollation();
			if (this.raise) {
				this.raise = false;
			} else {
				this.snake.update();
			}
			this.apple.draw();
			this.snake.draw();
			setTimeout(() => {
				requestAnimationFrame(this.start);
			}, 1000 / this.frameRate);
		} else {
			document.querySelector(".count-down").style.display = "flex";
			document.querySelector(".count-down>h1").innerHTML =
				"Press space bar to reset";
			this.sounds.dead.play();
		}
	};
}
export default Environment;
