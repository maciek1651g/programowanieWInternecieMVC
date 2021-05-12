const compression = require('compression');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const mainController = require("./controllers/MainController");
const remainingYearsController = require("./controllers/RemainingYearsController");


// Compress all HTTP responses
app.use(compression())
//Routing
app.use(express.static('views', {maxAge: 3600000}));

app.get("/:age/:sex/:smoke/:live/:weight/:height", (req, res) => {
    remainingYearsController(req, res);
})

app.all("*", function (req, res) {
    mainController(req, res);
 });



 //Run server
 http.listen(port, function() {
	console.log('listening on *:'+port);
 });
