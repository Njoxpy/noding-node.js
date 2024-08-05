// import modules(fs, http)
const fs = require("fs");
const http = require("http");

// port, hostname
let PORT = 3002;
let hostname = "localhost";

const server = http.createServer((req, res) => {
  console.log("listening at http://localhost:3002/");
  let path = "../dynamic-hub/src/page/";

  switch (req.url) {
    case "/":
      path = "../dynamic-hub/src/page/home.html";
      res.statusCode = 200;
      break;
    case "/search":
      path = "../dynamic-hub/src/page/search-results.html";
      console.log(res.statusCode);
      break;
    case "/favorites":
      path = "../dynamic-hub/src/page/favorites.html";
      break;
    case "/category":
      path = "../dynamic-hub/src/page/category.html";
      break;
    default:
      path = "../dynamic-hub/src/page/404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(`error ${err}`);
      res.statusCode = 200;
    }
    res.end(data);
  });
});

server.listen(PORT, hostname);
/*
flowchart
- Create server then read file

- avoid harcoding values theport number and localhost should be stored into a variable
 */
