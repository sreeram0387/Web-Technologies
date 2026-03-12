function calculate(){

let studentName = document.getElementById("name").value;
let mark1 = Number(document.getElementById("m1").value);
let mark2 = Number(document.getElementById("m2").value);
let mark3 = Number(document.getElementById("m3").value);

const total = mark1 + mark2 + mark3;

const calculateAverage = (m1,m2,m3) => (m1+m2+m3)/3;

let average = calculateAverage(mark1,mark2,mark3);

document.getElementById("result").innerHTML =
`Student Name: ${studentName} <br>
Total Marks: ${total} <br>
Average Marks: ${average.toFixed(2)}`;

}