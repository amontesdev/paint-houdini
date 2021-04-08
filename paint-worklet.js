class paintCircle {
	static get inputProperties() {
		return ["--circle-color", "--circle-size"];
	}
	paint(ctx, geometry, properties) {
		ctx.fillStyle = properties.get("--circle-color");
		ctx.beginPath();
		ctx.arc(geometry.width / 2, geometry.height / 2, 100, 0, Math.PI * 2);
		ctx.fill();
	}
}

registerPaint("paintCircle", paintCircle);
