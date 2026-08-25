// Using the process object in Node.js

console.log("Application Information");
console.log("------------------------");

// Process ID
console.log("Process ID:", process.pid);

// Node.js version
console.log("Node.js Version:", process.version);

// Operating system
console.log("Operating System:", process.platform);

// Current working directory
console.log("Current Directory:", process.cwd());

// Process arguments
console.log("Command Line Arguments:", process.argv);

// Check the environment
console.log("Environment:", process.env.NODE_ENV || "Development");

// Exit message
process.on("exit", function () {
    console.log("Node.js process is exiting...");
});