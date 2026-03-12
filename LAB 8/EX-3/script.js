class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }

    displayCourse() {
        return `Course: ${this.courseName}, Instructor: ${this.instructor}`;
    }
}

function enroll(){

let courseName = document.getElementById("courseName").value;
let instructor = document.getElementById("instructor").value;
let seats = document.getElementById("seats").value;

let course1 = new Course(courseName, instructor);

let output = course1.displayCourse() + "<br>";

let enrollCourse = new Promise((resolve, reject) => {

    if(seats.toLowerCase() === "yes")
        resolve("Enrollment Successful");
    else
        reject("Course Full");

});

enrollCourse
.then(msg => {
    document.getElementById("result").innerHTML = output + msg;
})
.catch(err => {
    document.getElementById("result").innerHTML = output + err;
});

}