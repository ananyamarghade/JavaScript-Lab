function toTitleCase(text) {
    return text
        .toLowerCase()
        .split(" ")
        .filter(function (word) { return word.length > 0; })
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(" ");
}

function isTenDigitMobile(value) {
    return /^[6-9][0-9]{9}$/.test(value);
}

let deptFacts = [
    "The CSE department offers specializations in AI & ML, Data Science, Cybersecurity, Cloud Computing and AIoT.",
    "Students get access to industry internships and live projects during their course.",
    "The Global Immersion Program (GIP) gives students exposure to international universities.",
    "Flexi credit courses let students pick industry-suggested electives.",
    "The Pathway Program helps students explore higher education opportunities abroad."
];

function showFact() {

    let index = Math.floor(Math.random() * deptFacts.length);
    let factBox = document.getElementById("factBox");

    if (factBox) {
        factBox.innerHTML = "Did you know? " + deptFacts[index];
    }

    console.log("Department fact displayed, index: " + index);
}

let instituteHighlights = [
    "Part of Symbiosis International (Deemed University), Pune.",
    "A campus that brings together students from across India and abroad.",
    "NAAC accredited with an emphasis on holistic, values-based education.",
    "A growing community of engineers built on the idea of Vasudhaiva Kutumbakam."
];

function showInstituteHighlight() {

    let index = Math.floor(Math.random() * instituteHighlights.length);
    let box = document.getElementById("instituteHighlight");

    if (box) {
        box.innerHTML = instituteHighlights[index];
    }

    console.log("Institute highlight displayed, index: " + index);
}

function showSubmissionPopup() {
    alert("Form submitted successfully!");
    console.log("Submission popup shown to user");
}

function initNavToggle() {

    let toggleBtn = document.getElementById("navToggle");
    let nav = document.getElementById("mainNav");

    if (!toggleBtn || !nav) {
        return;
    }

    toggleBtn.addEventListener("click", function () {
        let isOpen = nav.classList.toggle("open");
        toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        toggleBtn.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
            toggleBtn.setAttribute("aria-expanded", "false");
            toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    console.log("Mobile nav toggle initialised");
}

window.onload = function () {

    console.log("script.js loaded for page: " + document.title);

    showCurrentDateTime();
    showFact();
    showInstituteHighlight();
    initNavToggle();
};
