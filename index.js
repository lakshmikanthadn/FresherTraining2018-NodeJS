
// Import the application modules.
var express = require("express");
var bodyparser = require('body-parser');

// Create the express application.
var app = express();

/**
 * Middle ware.
 * Add the body-parser middle ware which parses the incoming json body.
 * You don't need the request.on('data', function bla bla bla....)
 */
app.use(bodyparser.json());
// You can add as many middle wares as you can.

app.use(express.static('public'));
/**
 * Application Routes.
 * Create the appication routes here with its method name and the path
 */

 /**
  * GET /Sayhello
  */
app.get("/sayhello", function (request, response) {
  response.status(200).send("Helloo world...");
});


 /**
  * POST /echo
  */
app.post("/echo", function (request, response) {
  response.status(200).send(request.body);
});



var PORT = 3000;
/**
 * Start application server on the desired port.
 */
app.listen(PORT, function () {
  console.log("Application started on port ", PORT);
})