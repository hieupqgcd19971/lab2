const http = require("http");
const hostname = "localhost";
const port = 3001;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader("Content-Type", "text/html");
res.end("<h1>Hello World</h1><p>This is a HTMLresponse</p><ol><li>One</li><li>Two</li><li>Three</li></ol>");});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});