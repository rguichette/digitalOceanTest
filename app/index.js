const http = require("node:http");
// const hostname = "0.0.0.0"; // Listen on all available network interfaces
const port = 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World 2\n");
});
server.listen(port, () => {
  console.log(`Server running at 8080`);
});
