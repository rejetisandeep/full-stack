// Using the console object in Node.js

let studentName = "Sandeep";
let marks = 45;

// Display normal information
console.log("Student Name:", studentName);
console.log("Marks:", marks);

// Display a warning
if (marks < 50) {
    console.warn("Warning: Student has low marks.");
} else {
    console.log("Good performance!");
}

// Display an error message
if (studentName === "") {
    console.error("Error: Student name is missing.");
} else {
    console.log("Student name is valid.");
}

// Display multiple values
console.log("Name:", studentName, "| Marks:", marks);