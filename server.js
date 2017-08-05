// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/frontend/home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "/frontend/reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "/frontend/tables.html"));
});



var tableData = require("./api/tables");
var waitListData = require("./api/waitingList");

app.get("/api/tables",function(req,res){
	res.json(tableData);
});

app.get("/api/waitingList",function(req,res){
	res.json(waitListData);
});

app.listen(PORT, function() {
  console.log("Listening at PORT " + PORT);
});
