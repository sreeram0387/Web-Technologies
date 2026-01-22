const surveyForm = document.getElementById("surveyForm");

// ===== Question Structure =====
const questions = [
    {
        id: "q1",
        text: "What is your name?",
        type: "text",
        required: true,
        maxLength: 20
    },
    {
        id: "q2",
        text: "Select your gender",
        type: "radio",
        required: true,
        options: ["Male", "Female", "Other"]
    },
    {
        id: "q3",
        text: "Select your skills",
        type: "checkbox",
        required: true,
        minSelect: 1,
        options: ["JavaScript", "Python", "Java", "C++"]
    }
];

// ===== Generate Form =====
questions.forEach(q => {
    const div = document.createElement("div");
    div.className = "question";
    div.id = q.id;

    const label = document.createElement("label");
    label.innerText = q.text;
    div.appendChild(label);

    if (q.type === "text") {
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = q.maxLength;
        input.id = q.id + "_input";
        div.appendChild(input);
    }

    if (q.type === "radio" || q.type === "checkbox") {
        q.options.forEach(opt => {
            const input = document.createElement("input");
            input.type = q.type;
            input.name = q.id;
            input.value = opt;

            const span = document.createElement("span");
            span.innerText = opt;

            div.appendChild(input);
            div.appendChild(span);
            div.appendChild(document.createElement("br"));
        });
    }

    const error = document.createElement("div");
    error.className = "error";
    div.appendChild(error);

    surveyForm.appendChild(div);
});

// ===== Validation =====
function validateSurvey() {
    let valid = true;

    questions.forEach(q => {
        const errorDiv = document.querySelector(`#${q.id} .error`);
        errorDiv.innerText = "";

        if (q.type === "text") {
            const input = document.getElementById(q.id + "_input");
            if (q.required && input.value.trim() === "") {
                errorDiv.innerText = "This field is required";
                valid = false;
            }
            if (input.value.length > q.maxLength) {
                errorDiv.innerText = "Max length exceeded";
                valid = false;
            }
        }

        if (q.type === "radio") {
            const checked = document.querySelector(`input[name="${q.id}"]:checked`);
            if (q.required && !checked) {
                errorDiv.innerText = "Please select an option";
                valid = false;
            }
        }

        if (q.type === "checkbox") {
            const checked = document.querySelectorAll(`input[name="${q.id}"]:checked`);
            if (q.required && checked.length < q.minSelect) {
                errorDiv.innerText = "Select at least one option";
                valid = false;
            }
        }
    });

    return valid;
}

// ===== Submit Handler =====
function submitSurvey() {
    if (validateSurvey()) {
        alert("Survey submitted successfully!");
    }
}
