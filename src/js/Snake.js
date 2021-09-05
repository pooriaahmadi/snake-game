const random = ({ min, max }) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Snake {
	constructor({ ctx, size = 50, deviceWidth, deviceHeight, color = "black" }) {
		this.ctx = ctx;
		this.size = size;
		this.deviceHeight = deviceHeight;
		this.deviceWidth = deviceWidth;
		this.color = color;
		this.reset();
	}
	reset = () => {
		const widthRows = Math.floor(this.deviceWidth / this.size);
		const heightRows = Math.floor(this.deviceHeight / this.size);
		this.history = [
			{
				x: random({ min: 0, max: widthRows - 1 }) * this.size,
				y: random({ min: 0, max: heightRows - 1 }) * this.size,
			},
		];
		console.log(this.history);
	};
	draw = () => {
		this.ctx.fillStyle = this.color;
		this.history.forEach((item) => {
			this.ctx.fillRect(item.x, item.y, this.size, this.size);
		});
	};
	move = (direction) => {
		const coordinates = {
			x: 0,
			y: 0,
		};
		switch (direction) {
			case "right":
				coordinates.x += this.size;
				break;
			case "left":
				coordinates.x -= this.size;
				break;
			case "up":
				coordinates.y -= this.size;
				break;
			case "down":
				coordinates.y += this.size;
				break;
		}
		this.history = [
			...this.history,
			{
				x: this.history[this.history.length - 1].x + coordinates.x,
				y: this.history[this.history.length - 1].y + coordinates.y,
			},
		];
	};
	update = () => {
		this.history.shift();
	};
	isCollation = () => {
		const head = this.history[this.history.length - 1];
		if (
			head.x < 0 ||
			head.x > this.deviceWidth ||
			head.y < 0 ||
			head.y > this.deviceHeight
		) {
			return true;
		}
		if (
			this.history.find((item, index) => {
				return (
					index !== this.history.length - 1 &&
					item.x === head.x &&
					item.y === head.y
				);
			})
		) {
			return true;
		}
		return false;
	};
}
export default Snake;
