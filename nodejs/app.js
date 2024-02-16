const http = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;

const array = [
  process.env.USER_ID, // "239482"
  process.env.USER_KEY, // "foobar"
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(array.toString());
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
