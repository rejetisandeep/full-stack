const fs = require("fs");

fs.writeFileSync("example.txt", "Hello Node.js!");

let data = fs.readFileSync("example.txt", "utf8");

console.log(data);