var request = require("request");

request("http://api.tiles.mapbox.com/v4/examples.map-zr0njcqy/features.json?access_token=pk.eyJ1IjoiYm9pY2hlZSIsImEiOiJfeEcwNkJvIn0.4opfLrPzEnYfq9fbCb0yLw",
	function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var bodyJSON = JSON.parse(body);
			console.log(bodyJSON.features);
		}

	});