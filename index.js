const five = require("johnny-five"),
	express = require("express"),
	bodyParser = require("body-parser"),
	jsonParser = bodyParser.json(),
	moment = require("moment"),
	board = new five.Board(),
	app = express(),
	port = 8000;

let tmpSensor = null;

board.on("ready", function () {
	tmpSensor = new five.Thermometer({
		controller: "TMP36",
		pin: "A0",
	});

	console.log("Board ready!");
});

app.get("/currentTemperature", jsonParser, (req, res) => {
	if (tmpSensor) {
		const { type } = req.body;
		let returnObject = {
			type: null,
			temperature: null,
			timestamp: moment().format(),
		};
		returnObject.type = type;
		switch (type) {
			case "C":
				returnObject.temperature = tmpSensor.C;
				break;

			case "K":
				returnObject.temperature = tmpSensor.K;
				break;

			case "F":
				returnObject.temperature = tmpSensor.F;
				break;

			default:
				returnObject.temperature = tmpSensor.C;
				break;
		}
		res.send(returnObject);
	} else {
		res.send("Board not ready");
	}
});

app.listen(port, function () {
	console.log("Listening on port " + port);
});
