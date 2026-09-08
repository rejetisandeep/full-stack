<script>

        // Selecting DOM elements
        const taskInput = document.getElementById("taskInput");
        const addButton = document.getElementById("addButton");
        const taskList = document.getElementById("taskList");
        const emptyMessage = document.getElementById("emptyMessage");


        // Add Task button event listener
        addButton.addEventListener("click", function () {

            // Get the entered task
            const taskText = taskInput.value.trim();

            // Check if input is empty
            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }


            // Create a new list item
            const listItem = document.createElement("li");


            // Create task text
            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;
            taskSpan.classList.add("task-text");


            // Create Complete button
            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";


            // Complete button event listener
            completeButton.addEventListener("click", function () {

                taskSpan.classList.toggle("completed");

            });


            // Create Delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";


            // Delete button event listener
            deleteButton.addEventListener("click", function () {

                listItem.remove();

                // Show empty message if no tasks remain
                if (taskList.children.length === 0) {
                    emptyMessage.style.display = "block";
                }

            });


            // Add elements to the list item
            listItem.appendChild(taskSpan);
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);


            // Add list item to the task list
            taskList.appendChild(listItem);


            // Hide empty message
            emptyMessage.style.display = "none";


            // Clear input box
            taskInput.value = "";

        });
</script>