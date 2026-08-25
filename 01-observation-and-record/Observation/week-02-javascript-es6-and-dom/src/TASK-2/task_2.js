// Student class
        class Student {
            constructor(name, rollNumber, department, cgpa) {
                this.name = name;
                this.rollNumber = rollNumber;
                this.department = department;
                this.cgpa = cgpa;
            }
        }

        // Button click event
        document.getElementById("createProfile").addEventListener("click", function () {

            // Get user-provided values
            const name = document.getElementById("name").value;
            const rollNumber = document.getElementById("rollNumber").value;
            const department = document.getElementById("department").value;
            const cgpa = document.getElementById("cgpa").value;

            // Validate input
            if (!name || !rollNumber || !department || !cgpa) {
                alert("Please enter all student details.");
                return;
            }

            // Create Student object
            const student = new Student(
                name,
                rollNumber,
                department,
                cgpa
            );

            // Get profile container
            const profile = document.getElementById("studentProfile");

            // Dynamically create profile using DOM manipulation
            profile.innerHTML = "";

            const card = document.createElement("div");
            card.className = "profile-card";

            const heading = document.createElement("h2");
            heading.textContent = "Student Details";

            const namePara = document.createElement("p");
            namePara.innerHTML = `<strong>Name:</strong> ${student.name}`;

            const rollPara = document.createElement("p");
            rollPara.innerHTML = `<strong>Roll Number:</strong> ${student.rollNumber}`;

            const deptPara = document.createElement("p");
            deptPara.innerHTML = `<strong>Department:</strong> ${student.department}`;

            const cgpaPara = document.createElement("p");
            cgpaPara.innerHTML = `<strong>CGPA:</strong> ${student.cgpa}`;

            // Add elements to the profile card
            card.appendChild(heading);
            card.appendChild(namePara);
            card.appendChild(rollPara);
            card.appendChild(deptPara);
            card.appendChild(cgpaPara);

            // Display the card on the webpage
            profile.appendChild(card);
        });
    </script>