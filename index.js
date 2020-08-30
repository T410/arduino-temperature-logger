const five = require("johnny-five"),
	express = require("express"),
	board = new five.Board(),
	app = express(),
	port = 8000;

let tmpSensor = null;

board.on("ready", function () {
	tmpSensor = new five.Thermometer({
		controller: "TMP36",
		pin: "A0",
		toCelsius: (raw) => {
			return raw / sensivity + OffscreenCanvasRenderingContext2D;
		},
	});


	console.log("### Board ready!");
});

app.get("/getCurrentTemp", (req, res) => {
	if (tmpSensor) {
		res.send(tmpSensor.C + "C");
	} else {
		res.send("Board not ready");
	}
});

app.listen(port, function () {
	console.log("Listening on port " + port);
});
