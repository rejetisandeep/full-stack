// Import Express
const express = require("express");

// Create an Express application
const app = express();

// Port number
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Student Server</h1>
        <p>This is the home page.</p>
        <p>Visit /students to see the student list.</p>
        <p>Visit /about to learn about this application.</p>
    `);
});

// Students data
const students = [
    {
        id: 1,
        name: "Sandeep",
        course: "Computer Science"
    },
    {
        id: 2,
        name: "Rahul",
        course: "Information Technology"
    },
    {
        id: 3,
        name: "Priya",
        course: "Computer Science"
    },
    {
        id: 4,
        name: "Anil",
        course: "Electronics"
    },
    {
        id: 5,
        name: "Sneha",
        course: "Information Technology"
    }
];

// Students route
app.get("/students", (req, res) => {
    res.json(students);
});

// About route
app.get("/about", (req, res) => {
    res.send(`
        <h1>About the Application</h1>
        <p>This is a basic Express.js Student Server.</p>
        <p>It demonstrates routing and HTTP GET requests.</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
