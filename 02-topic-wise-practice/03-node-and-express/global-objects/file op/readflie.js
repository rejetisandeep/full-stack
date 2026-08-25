const fs = require('fs');
const path = require('path');

// Dynamically resolves to the directory where readflie.js lives
const filePath = path.join(__dirname, 'task.txt'); 

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});