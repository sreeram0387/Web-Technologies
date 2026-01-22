let currentStage = 0;
const stages = document.querySelectorAll(".stage");
const progressBar = document.getElementById("progressBar");

// Temporary storage
let formData = {
    name: "",
    email: "",
    password: "",
    age: ""
};

// Show stage
function showStage(index) {
    stages.forEach(s => s.classList.remove("active"));
    stages[index].classList.add("active");
    progressBar.style.width = ((index + 1) / stages.length) * 100 + "%";
}

// Validation per stage
function validateStage() {
    let valid = true;

    if (currentStage === 0) {
        const name = document.getElementById("name").value;
        if (name === "") {
            document.getElementById("err1").innerText = "Name required";
            valid = false;
        } else {
            document.getElementById("err1").innerText = "";
            formData.name = name;
        }
    }

    if (currentStage === 1) {
        const email = document.getElementById("email").value;
        if (!email.includes("@")) {
            document.getElementById("err2").innerText = "Valid email required";
            valid = false;
        } else {
            document.getElementById("err2").innerText = "";
            formData.email = email;
        }
    }

    if (currentStage === 2) {
        const password = document.getElementById("password").value;
        if (password.length < 6) {
            document.getElementById("err3").innerText = "Min 6 characters";
            valid = false;
        } else {
            document.getElementById("err3").innerText = "";
            formData.password = password;
        }
    }

    if (currentStage === 3) {
        const age = document.getElementById("age").value;
        if (age < 18) {
            document.getElementById("err4").innerText = "Age must be 18+";
            valid = false;
        } else {
            document.getElementById("err4").innerText = "";
            formData.age = age;
            alert("Form Submitted Successfully!");
            console.log(formData);
        }
    }

    return valid;
}

// Navigation
function nextStage() {
    if (validateStage() && currentStage < stages.length - 1) {
        currentStage++;
        showStage(currentStage);
    }
}

function prevStage() {
    if (currentStage > 0) {
        currentStage--;
        showStage(currentStage);
    }
}
