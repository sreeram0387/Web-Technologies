let activityLog = [];
let clickCount = 0;

const logDiv = document.getElementById("activityLog");
const warningDiv = document.getElementById("warning");

// ===== Log Activity =====
function logActivity(type, target) {
    const entry = {
        type: type,
        element: target.tagName,
        time: new Date().toLocaleTimeString()
    };

    activityLog.push(entry);
    updateUI();

    // Suspicious activity threshold
    if (type === "click") {
        clickCount++;
        if (clickCount > 5) {
            warningDiv.innerText = "⚠ Suspicious activity detected: Too many clicks!";
        }
    }
}

// ===== Update DOM =====
function updateUI() {
    logDiv.innerHTML = "";
    activityLog.forEach(a => {
        logDiv.innerHTML += `${a.time} - ${a.type} on ${a.element}<br>`;
    });
}

// ===== Event Listeners =====

// Capturing phase
document.addEventListener("click", e => {
    logActivity("click", e.target);
}, true);

// Bubbling phase
document.addEventListener("keydown", e => {
    logActivity("key press", e.target);
});

// Focus tracking
document.addEventListener("focusin", e => {
    logActivity("focus", e.target);
});

// ===== Export Log =====
function exportLog() {
    let text = "User Activity Log\n\n";
    activityLog.forEach(a => {
        text += `${a.time} - ${a.type} on ${a.element}\n`;
    });

    alert(text);
}

// ===== Reset Log =====
function resetLog() {
    activityLog = [];
    clickCount = 0;
    logDiv.innerHTML = "";
    warningDiv.innerText = "";
}
