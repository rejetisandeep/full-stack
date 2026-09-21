const fs = require("fs");
const readline = require("readline");

// Create interface for taking input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for filename
rl.question("Enter the filename: ", function (filename) {

    // Ask for initial content
    rl.question("Enter the content: ", function (content) {

        // Create/write the file
        fs.writeFile(filename, content, function (err) {
            if (err) {
                console.log("Error while creating the file:", err);
                rl.close();
                return;
            }

            console.log("\nFile created successfully.");

            // Read the file
            fs.readFile(filename, "utf8", function (err, data) {
                if (err) {
                    console.log("Error while reading the file:", err);
                    rl.close();
                    return;
                }

                console.log("\nInitial file content:");
                console.log(data);

                // Ask for additional content
                rl.question("\nEnter additional content to append: ", function (additionalContent) {

                    // Append content to the file
                    fs.appendFile(filename, "\n" + additionalContent, function (err) {
                        if (err) {
                            console.log("Error while appending:", err);
                            rl.close();
                            return;
                        }

                        console.log("\nContent appended successfully.");

                        // Read the final contents
                        fs.readFile(filename, "utf8", function (err, finalData) {
                            if (err) {
                                console.log("Error while reading final content:", err);
                                rl.close();
                                return;
                            }

                            console.log("\nFinal file content:");
                            console.log(finalData);

                            rl.close();
                        });
                    });
                });
            });
        });
    });
});

