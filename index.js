var http = require('http');

var server = http.createServer(function (request, response) {
  console.log("Received a request.");
  const { headers, method, url } = request;
  console.log({ headers, method, url });
  const data = [];
  /**
   * Listen to requet data.
   * 
   */
  request
    .on('error', (err) => {
      console.error(err);
    })
    .on('data', chunk => {
      data.push(chunk);
    })
    .on('end', () => {
      const body = Buffer.concat(data).toString();

      /**
       *  GET: /sayhello
       * Response: hello world (text)
       */
      if (method === "GET" && url === '/sayhello') {
        response.statusCode = 200;
        response.end("Helloo world...");
      }
      /**
      *  POST: /echo
      * Response: Request Body (json)
      */
      else if (method === "POST" && url === '/echo') {
        response.setHeader('content-type', 'application/json');
        response.statusCode = 200;
        response.end(body);
      }
      /**
      *  Rest all METHODs and PATHs
      *  Response: 404 with method and path NA.
      */
      else {
        response.setHeader('content-type', 'application/json');
        response.statusCode = 404;
        response.end(JSON.stringify({ message: "Path/method not found/allowed." }));
      }
      console.log("--------------------------------");
    });

}).listen(3000, function () {
  console.log("Server started on port 3000");
});