# JavaScript Lab

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Status](https://img.shields.io/badge/Status-Ongoing-yellow)

Lab practicals for the JavaScript / Web Technologies course — each experiment pairs a core JavaScript concept with a real, working mini-application (not just a toy snippet), followed by a related case study that applies the same concept in a second, independent program.

---

## Table of Contents

- [Student Information](#student-information)
- [Repository Structure](#repository-structure)
- [List of Experiments](#list-of-experiments)
- [Quick Links](#quick-links)
- [Technologies Used](#technologies-used)
- [Learning Outcomes](#learning-outcomes)
- [How to Run](#how-to-run)
- [Screenshots](#screenshots)
- [License](#license)

---

## Student Information

| Field | Details |
|---|---|
| **Name** | Ananya Marghade |
| **PRN** | 24070521004 |
| **Batch** | A1 |
| **Course** | B.Tech — Computer Science and Engineering |
| **Institute** | Symbiosis Institute of Technology, Nagpur |

## Repository Structure

```
JavaScript-Lab/
│
├── 1 To create a webpage showing user info and a welcome message/
│   ├── department.html
│   ├── student.html
│   ├── script.js
│   └── style.css
│
├── 2 To build a billing calculator with user input./
│   ├── shop-billing.html
│   └── shop-billing.js
│
├── 3 To create a grading system based on user-entered marks/
│   ├── 3.1) Student Grading System/
│   │   └── studentgrading.html
│   └── 3.2) Student Login Page/
│       ├── index.html
│       ├── script.js
│       └── style.css
│
├── 4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/
│   ├── 4.1) Palindrome Checker/
│   │   ├── palindrome.html
│   │   └── palindrome.js
│   └── 4.2) Vehicle Registration Page/
│       ├── vehicleregistration.html
│       └── vehicleregistration.js
│
├── 5 To create a cart total calculator with discount logic/
│   ├── 5.1 Cart Calculator/
│   │   └── exp5.html
│   └── 5.2 Expense Tracker (Array MIn Max)/
│       ├── expense.html
│       ├── expense.css
│       └── expense.js
│
└── 6 Use string functions and regex  for validation/
    ├── exp6.html
    ├── exp6 case study.html
    └── feedback form.html
```

Each experiment folder includes:
- Source code (`.html` / `.css` / `.js`)
- A working, styled UI — not a bare-bones demo
- Output screenshots
- A paired case study applying the same concept in a second program

---

## List of Experiments

| # | Title | Experiment | Case Study |
|---|---|---|---|
| 1 | Inline, Internal & External JavaScript, Console Methods | Department landing page — inline event handler + external script | Student Information Portal — internal script, form validation, `console.table` |
| 2 | `var`, `let`, `const`, Template Literals, Destructuring | QuickCart Billing Calculator — cart, GST, discounts, printable receipt | — |
| 3 | Control Structures & Form Validation | Student Grading System — marks → grade → report card | Student Login Page — real-time field validation |
| 4 | Function Types, Scope, Closures, try-catch | Palindrome Checker — closures + exception handling | Vehicle Registration Number Validator |
| 5 | Arrays, Array Methods, Math.max/min | CartEase — cart total calculator with slab-based discount logic | Pennywise — Expense Tracker (array min/max, total, average) |
| 6 | String Functions & Regular Expressions | String Methods & Regex demo — split, match, replace, indexOf, email validation/extraction, reverse | String Operations (reverse + vowel count) & Feedback Analyzer |

---

## Quick Links

| Experiment | Lab Record | Source Folder |
|---|---|---|
| 1 | [Experiment1.md](./Experiment1.md) | [`1 To create a webpage showing user info and a welcome message/`](<./1 To create a webpage showing user info and a welcome message>) |
| 2 | [Experiment2.md](./Experiment2.md) | [`2 To build a billing calculator with user input./`](<./2 To build a billing calculator with user input.>) |
| 3 | [Experiment3.md](./Experiment3.md) | [`3 To create a grading system based on user-entered marks/`](<./3 To create a grading system based on user-entered marks>) |
| 4 | [Experiment4.md](./Experiment4.md) | [`4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/`](<./4 Use function types, scope, and closures; apply try-catch to build a palindrome checker>) |
| 5 | [README.md](<./5 To create a cart total calculator with discount logic/README.md>) | [`5 To create a cart total calculator with discount logic/`](<./5 To create a cart total calculator with discount logic>) |
| 6 | [README.md](<./6 Use string functions and regex  for validation/README.md>) | [`6 Use string functions and regex  for validation/`](<./6 Use string functions and regex  for validation>) |

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Visual Studio Code
- Google Chrome
- Git & GitHub

---

## Learning Outcomes

Through these practicals, the following JavaScript concepts were implemented hands-on:

- Variable declarations (`var`, `let`, `const`) and scope
- Control structures (`if-else`, nested conditionals)
- Functions, closures, and higher-order functions
- Template literals
- `try-catch` exception handling
- DOM manipulation and dynamic rendering
- Event handling (inline, internal, external)
- Real-time form validation with regex
- Console methods (`log`, `warn`, `error`, `table`) for debugging
- Building complete, styled, interactive mini-applications — not isolated code snippets

---

## How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/ananyamarghade/JavaScript-Lab.git
   ```
2. **Open any experiment folder** and launch its main `.html` file (e.g. `index.html`, `department.html`, `shop-billing.html`) directly in a browser.
3. No build tools, servers, or dependencies required — everything runs client-side.

---

## Screenshots

<p align="center">
  <b>Experiment 1 — Student Information Portal</b><br>
  <img src="https://raw.githubusercontent.com/ananyamarghade/JavaScript-Lab/d58808a2be018186c55400541afeb3011fcca150/1%20To%20create%20a%20webpage%20showing%20user%20info%20and%20a%20welcome%20message/student%20page.png" width="700"><br><br>
  <b>Experiment 2 — Billing Calculator</b><br>
  <img src="https://raw.githubusercontent.com/ananyamarghade/JavaScript-Lab/d58808a2be018186c55400541afeb3011fcca150/2%20To%20build%20a%20billing%20calculator%20with%20user%20input./billing%20form.png" width="700"><br><br>
  <b>Experiment 3 — Student Grading System</b><br>
  <img src="https://raw.githubusercontent.com/ananyamarghade/JavaScript-Lab/ddcd35f65efd9d2b46cbf496be16abf944ff5d9f/3%20To%20create%20a%20grading%20system%20based%20on%20user-entered%20marks/student%20grading2.png" width="700"><br><br>
  <b>Experiment 4 — Palindrome Checker</b><br>
  <img src="https://raw.githubusercontent.com/ananyamarghade/JavaScript-Lab/336706a3dad4aa0153d8617fa2604e924d4c722d/4%20Use%20function%20types%2C%20scope%2C%20and%20closures%3B%20apply%20try-catch%20to%20build%20a%20palindrome%20checker/4.1%29%20Palindrome%20Checker/palindrome2.png" width="700"><br><br>
  <b>Experiment 5 — CartEase Billing Calculator</b><br>
  <img src="./5%20To%20create%20a%20cart%20total%20calculator%20with%20discount%20logic/cart-output.png" width="700"><br><br>
  <b>Experiment 6 — Feedback Analyzer</b><br>
  <img src="./6%20Use%20string%20functions%20and%20regex%20%20for%20validation/feedback-analyzer-output.jpg" width="700">
</p>

---

## License

This repository is created for educational and academic purposes as part of coursework at Symbiosis Institute of Technology, Nagpur.

---

<div align="center">

**Ananya Marghade**
B.Tech Computer Science and Engineering · Symbiosis Institute of Technology, Nagpur

</div>
