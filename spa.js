// import modules(file system and http)
const fs = require("fs");
const http = require("http");

// read file
fs.readFile("./dynamic-hub/src/page/home.html", (err, data) => {
  if (err) {
    // handle error
    console.log(err);
  } else {
    // create server
    const server = http
      .createServer((req, res) => {
        console.log("serving at: http://localhost:3002/");
        // set header
        // res.setHeader("Content-Type", "text/html"); 
        // write data
        // res.write(data);
        res.end(data);
      })
      .listen(3002, "localhost");
  }
});
