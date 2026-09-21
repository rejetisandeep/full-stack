class Student {

    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
    }
}

// Creating objects
const student1 = new Student("Sandeep", 20, "CSE");
const student2 = new Student("Rahul", 21, "IT");

student1.displayDetails();
student2.displayDetails();