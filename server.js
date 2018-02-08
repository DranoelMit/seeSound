var express = require("express");
var app = express();
var server = require("http").createServer(app);

server.listen(process.env.PORT || 8080);
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/index.html");
    });