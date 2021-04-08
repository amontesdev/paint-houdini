if ("registerProperty" in CSS) {
	CSS.registerProperty({
		name: "--circle-color",
		syntax: "<color>",
		initialValue: "#da3b78",
		inherits: false,
	});
	CSS.registerProperty({
		name: "--circle-size",
		syntax: "<length-percentage>",
		initialValue: "100px",
		inherits: false,
	});
}

if ("paintWorklet" in CSS) {
	CSS.paintWorklet.addModule("paint-worklet.js");
}
