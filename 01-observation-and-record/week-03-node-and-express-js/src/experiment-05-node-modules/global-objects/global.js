// Using the global object in Node.js

global.studentName = "Sandeep";
global.course = "Computer Science";
global.marks = 85;

// Function using global variables
function displayStudentDetails() {
    console.log("Student Name:", studentName);
    console.log("Course:", course);
    console.log("Marks:", marks);

    if (marks >= 40) {
        console.log("Result: Pass");
    } else {
        console.log("Result: Fail");
    }
}

// Calling the function
displayStudentDetails();
console.log(studentName);