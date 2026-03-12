function showStudent(){

let id = document.getElementById("id").value;
let name = document.getElementById("name").value;
let department = document.getElementById("dept").value;
let marks = Number(document.getElementById("marks").value);

const student = {
    id: id,
    name: name,
    department: department,
    marks: marks
};


const {id: sid, name: sname, department: sdept, marks: smarks} = student;


let grade = smarks >= 90 ? "A" : "B";

const updatedStudent = {
    ...student,
    grade: grade
};

let result = `${sid} ${sname} ${sdept} ${smarks}\n`;
result += JSON.stringify(updatedStudent, null, 2);

document.getElementById("output").textContent = result;

}