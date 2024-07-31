// reading and writing files into node.js
const fs = require("fs");
// fs.readFile("../docs/blog.txt", (err, data) => {
//     if (err) {
//         console.log("there was an error");
//     }
//     console.log(data.toString());
// })
/*by default the data returned by the compiler is in buffer form so if you want the data to be into the readable formn convert into string using the .toString */

// writting to the file
// this method will write to a file if then file alreday exists into the project rather than that it will give errorinto the project.
// fs.writeFile("../blog/blogs.txt", "naipenda sana Node.js", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("data was written already!");
//   }
// });

// fs.writeFile("./njox.txt", "node.js awesome", () => {
//     console.log("written");
// })

// making directory

if (!fs.existsSync("../assets")) {
  fs.mkdir("../assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder was created successfully");
    // when we run again into the project we get the error object.
  });
}
