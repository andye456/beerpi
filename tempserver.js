var http = require('http');
fs = require('fs');
var arr = [];
var temp=0;
var server = http.createServer(function (request,response) {
	response.writeHead(200,{"Content-Type": "application/vnd.api+json"});
	fs.readFile('/sys/bus/w1/devices/28-021553902fff/w1_slave', function(err,data) {
		if (err) {
			return console.log(err);
		}
		arr = data.toString().split("t=");
		tmp=parseFloat(arr[1])/1000.0;
		response.json({'temp':tmp});
		//response.end("<H1>Beer Temperature: "+tmp+"&#176;C</H1>");
	});
});
var pt = 25001;
server.listen(pt);
console.log("Server running at http://127.0.0.1:"+pt+"/");
