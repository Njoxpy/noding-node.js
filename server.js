const http = require("http");
// console.log(http);
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(3001, "localhost", () => {
  console.log("listening at port: 3001");
});
