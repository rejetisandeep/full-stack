const path = require("path");

let filePath = "/home/user/project/app.js";

console.log("File Name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));