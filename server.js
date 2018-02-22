var express = require("express");
var app = express();
var server = require("http").createServer(app);

server.listen(process.env.PORT || 8080);
app.use(express.static(__dirname + "/docs"));


app.get("/", function(req, res){
	res.sendFile(__dirname + "/docs/index.html");
    });
