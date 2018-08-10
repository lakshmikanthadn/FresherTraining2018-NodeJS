var http = require('http');

http.createServer(function (request, response) {
  /**
   *  Any method any path
   * Response: hello world (text)
   */
  response.statusCode = 200;
  response.end("Helloo world...");

}).listen(3000, function () {
  console.log("Server started on port 3000");
});