const random = ({ min, max }) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
class Apple {
	constructor({ ctx, size, deviceWidth, deviceHeight, color = "red" }) {
		this.ctx = ctx;
		this.size = size;
		this.deviceHeight = deviceHeight;
		this.deviceWidth = deviceWidth;
		this.widthRows = Math.floor(deviceWidth / size);
		this.heightRows = Math.floor(deviceHeight / size);
		this.color = color;
	}
	randomCoordinates = (snake) => {
		this.coordinates = {
			x: random({ min: 0, max: this.widthRows - 1 }) * this.size,
			y: random({ min: 0, max: this.heightRows - 1 }) * this.size,
		};
		let flag = true;
		while (flag) {
			if (
				snake.history.find(
					(item) =>
						item.x === this.coordinates.x && item.y === this.coordinates.y
				)
			) {
				this.coordinates = {
					x: random({ min: 0, max: this.widthRows - 1 }) * this.size,
					y: random({ min: 0, max: this.heightRows - 1 }) * this.size,
				};
			} else {
				flag = false;
			}
		}
	};
	draw = () => {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(
			this.coordinates.x,
			this.coordinates.y,
			this.size,
			this.size
		);
	};
}

export default Apple;
