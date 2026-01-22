const form = document.getElementById("registerForm");
const role = document.getElementById("role");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const age = document.getElementById("age");
const skills = document.getElementById("skills");

// Helper functions
function error(input) {
    input.style.border = "2px solid red";
}

function success(input) {
    input.style.border = "2px solid green";
}

// Email validation
function validateEmail() {
    if (role.value === "Student" && !email.value.endsWith(".edu")) {
        error(email);
        return false;
    }
    success(email);
    return true;
}

// Password validation
function validatePassword() {
    if (role.value === "Admin") {
        const strong = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
        if (!strong.test(password.value)) {
            error(password);
            return false;
        }
    } else if (password.value.length < 6) {
        error(password);
        return false;
    }
    success(password);
    return true;
}

// Confirm password
function validateConfirm() {
    if (password.value !== confirmPassword.value) {
        error(confirmPassword);
        return false;
    }
    success(confirmPassword);
    return true;
}

// Age validation
function validateAge() {
    if (role.value === "Student" && age.value < 18) {
        error(age);
        return false;
    }
    success(age);
    return true;
}

// Role based UI
role.addEventListener("change", () => {
    skills.style.display = role.value === "Admin" ? "none" : "block";
});

// Real-time validation
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirm);
age.addEventListener("input", validateAge);

// Submit control
form.addEventListener("submit", (e) => {
    if (
        !validateEmail() ||
        !validatePassword() ||
        !validateConfirm() ||
        !validateAge()
    ) {
        e.preventDefault();
        alert("Please fix errors before submitting");
    }
});
