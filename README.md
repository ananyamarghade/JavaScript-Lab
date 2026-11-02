<h1 align="center">
  <img src="./banner-v2.svg" alt="JavaScript Lab" width="100%">
</h1>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Status](https://img.shields.io/badge/Status-Ongoing-yellow)

---

## Table of Contents

- [Student Information](#student-information)
- [Repository Structure](#repository-structure)
- [List of Experiments](#list-of-experiments)
- [Quick Links](#quick-links)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Learning Outcomes](#learning-outcomes)
- [How to Run](#how-to-run)
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
├── 01 Department & Student Page/
│   ├── department.html
│   ├── student.html
│   ├── script.js
│   └── style.css
│
├── 02 Billing Calculator/
│   ├── shop-billing.html
│   └── shop-billing.js
│
├── 03 Student Login & grading/
│   ├── 3.1) Student Grading System/
│   │   └── studentgrading.html
│   └── 3.2) Student Login Page/
│       ├── index.html
│       ├── script.js
│       └── style.css
│
├── 04 Try-catch/
│   ├── 4.1) Palindrome Checker/
│   │   ├── palindrome.html
│   │   └── palindrome.js
│   └── 4.2) Vehicle Registration Page/
│       ├── vehicleregistration.html
│       └── vehicleregistration.js
│
├── 05 Cart Calculator & Expense Tracker/
│   ├── 5.1 Cart Calculator/
│   │   └── exp5.html
│   └── 5.2 Expense Tracker (Array MIn Max)/
│       ├── expense.html
│       ├── expense.css
│       └── expense.js
│
├── 06 Use string functions and regex  for validation/
│   ├── exp6.html
│   ├── exp6 case study.html
│   └── feedback form.html
│
├── 07 Perform DOM traversal and updates/
│   ├── todo.html
│   ├── form.html
│   └── welcome.html
│
├── 08 Access and validate form fields using events/
│   ├── exp8.html
│   └── exp8casestudy.html
│
├── 09 Implement localStorage and sessionStorage/
│   ├── themechange.html
│   └── seminar planner case study.html
│
├── 10 JSON Data with Fetch and jQuery/
│   ├── 10.1) Using Fetch()/
│   │   ├── exp10.1.html
│   │   └── exp10casestudy.html
│   └── 10.2) Using jquery/
│       ├── exp10.2.html
│       └── exp10part2casestudy.html
│
├── 11 JavaScript timers and ES6 module/
│   ├── class scheduler.html
│   ├── main.js
│   ├── style.css
│   ├── concert registration/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── styles.css
│   ├── nagpur-project/
│   │   └── index.html
│   └── rakhinest/
│       ├── index.html
│       ├── shop.html
│       ├── css/style.css
│       └── js/app.js
│
└── 12 Interactive real time web app/
    ├── fooddelivery/
    │   ├── index.html
    │   ├── script.js
    │   ├── style.css
    │   └── menu.json
    ├── TechNova Workshop Booking.html
    └── sih-site/
        ├── index.html
        ├── css/styles.css
        └── js/
            ├── app.js
            └── data.js
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
| 7 | DOM Traversal & Updates | To-Do List (createElement, appendChild, classList, querySelectorAll) | Sign Up Form (dynamic dropdowns + live validation) & Welcome Page |
| 8 | Accessing & Validating Form Fields Using Events | Gym Admission Form — focus/blur/change validation with regex | BearGYM Admission Form — live BMI, dynamic pricing, full submit validation |
| 9 | `localStorage` & `sessionStorage` | Theme Preference — light/dark theme saved, restored on reload and clearable | Seminar Schedule Planner — preferences saved as JSON in `localStorage`, session selections in `sessionStorage`, schedule re-rendered on load |
| 10 | Loading JSON Data with `fetch()` & jQuery | Student Details — `fetch()` + `.then()` chain, `response.json()`, table built from a JSON file; same table again with `$.getJSON()` and `$.each()` | Employee Information Management (`fetch()` + `localStorage` + File System Access API) & OrderDesk Restaurant Dashboard (`$.getJSON()`, `.done()` / `.fail()` / `.always()`, status totals and sales summary) |
| 11 | JavaScript Timers & ES6 Modules | Class Scheduler — loaded with `<script type="module">`; `setInterval()` drives a live clock, countdown and automatic class status (upcoming / starting soon / ongoing / completed), `setTimeout()` handles toasts and animations; add / edit / delete with validation, overlap check and `localStorage` | AFTERHOURS Concert Registration (live pass price calculator, form validation, digital pass), My City – Nagpur (scroll-spy and reveal-on-scroll landmarks site) & RakhiNest (multi-page rakhi store with cart, coupons, checkout and order tracking) |
| 12 | Interactive Real-Time Web Application | FoodieGo — food delivery app: menu loaded with jQuery `$.ajax()`, search / filter / sort, cart drawer with coupons and live bill, validated checkout, orders and simulated real-time tracking with `setInterval()`, all persisted in `localStorage` | TechNova Workshop Booking form (HTML5 validation + instant confirmation) & Smart India Hackathon 2026 portal (data-driven page with live search, filters and modals) |

---

## Quick Links

| Experiment | Lab Record | Source Folder |
|---|---|---|
| 1 | [Experiment1.md](<./01 Department & Student Page/README.md>) | [`01 Department & Student Page/`](<./01 Department & Student Page>) |
| 2 | [Experiment2.md](<./02 Billing Calculator/README.md>) | [`02 Billing Calculator/`](<./02 Billing Calculator>) |
| 3 | [Experiment3.md](<./03 Student Login & grading/README.md>) | [`03 Student Login & grading/`](<./03 Student Login & grading>) |
| 4 | [Experiment4.md](<./04 Try-catch/README.md>) | [`04 Try-catch/`](<./04 Try-catch>) |
| 5 | [Experiment5.md](<./05 Cart Calculator & Expense Tracker/README.md>) | [`05 Cart Calculator & Expense Tracker/`](<./05 Cart Calculator & Expense Tracker>) |
| 6 | [Experiment6.md](<./06 Use string functions and regex  for validation/README.md>) | [`06 Use string functions and regex  for validation/`](<./06 Use string functions and regex  for validation>) |
| 7 | [Experiment7.md](<./07 Perform DOM traversal and updates/README.md>) | [`07 Perform DOM traversal and updates/`](<./07 Perform DOM traversal and updates>) |
| 8 | [Experiment8.md](<./08 Access and validate form fields using events/README.md>) | [`08 Access and validate form fields using events/`](<./08 Access and validate form fields using events>) |
| 9 | [Experiment9.md](<./09 Implement localStorage and sessionStorage/README.md>) | [`09 Implement localStorage and sessionStorage/`](<./09 Implement localStorage and sessionStorage>) |
| 10 | [Experiment10.md](<./10 JSON Data with Fetch and jQuery/README.md>) | [`10 JSON Data with Fetch and jQuery/`](<./10 JSON Data with Fetch and jQuery>) |
| 11 | [Experiment11.md](<./11 JavaScript timers and ES6 module/README.md>) | [`11 JavaScript timers and ES6 module/`](<./11 JavaScript timers and ES6 module>) |
| 12 | [Experiment12.md](<./12 Interactive real time web app/README.md>) | [`12 Interactive real time web app/`](<./12 Interactive real time web app>) |

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery 3.7.1 (CDN)
- Google Fonts (CDN)
- Visual Studio Code
- Google Chrome
- VS Code Live Server
- Git & GitHub
  
---

## Screenshots

<p align="center">
  <b>Experiment 1 — Student Information Portal</b><br>
  <img src="./01%20Department%20%26%20Student%20Page/student%20page.png" width="700"><br><br>
  <b>Experiment 2 — Billing Calculator</b><br>
  <img src="./02%20Billing%20Calculator/billing%20form.png" width="700"><br><br>
  <b>Experiment 3 — Student Grading System</b><br>
  <img src="./03%20Student%20Login%20%26%20grading/3.1%29%20Student%20Grading%20System/student%20grading2.png" width="700"><br><br>
  <b>Experiment 4 — Palindrome Checker</b><br>
  <img src="./04%20Try-catch/4.1%29%20Palindrome%20Checker/palindrome2.png" width="700"><br><br>
  <b>Experiment 5 — CartEase Billing Calculator</b><br>
  <img src="./05%20Cart%20Calculator%20%26%20Expense%20Tracker/cart-output.png" width="700"><br><br>
  <b>Experiment 6 — Feedback Analyzer</b><br>
  <img src="./06%20Use%20string%20functions%20and%20regex%20%20for%20validation/feedback-analyzer-output.jpg" width="700"><br><br>
  <b>Experiment 7 — SignUp Form</b><br>
  <img src="./07%20Perform%20DOM%20traversal%20and%20updates/signupform%20%281%29.png" width="700"><br><br>
  <b>Experiment 8 — BearGYM Admission Form</b><br>
  <img src="./08%20Access%20and%20validate%20form%20fields%20using%20events/exp8casestudy.png" width="700"><br><br>
  <b>Experiment 9 — Seminar Schedule Planner</b><br>
  <img src="./09%20Implement%20localStorage%20and%20sessionStorage/Seminar%20Planner.png" width="700"><br><br>
  <b>Experiment 10 — OrderDesk Restaurant Order Dashboard</b><br>
  <img src="./10%20JSON%20Data%20with%20Fetch%20and%20jQuery/10.2%29%20Using%20jquery/exp10part2casestudy.png" width="700"><br><br>
  <b>Experiment 11 — Class Scheduler</b><br>
  <img src="./11%20JavaScript%20timers%20and%20ES6%20module/class%20scheduler.png" width="700"><br><br>
  <b>Experiment 12 — FoodieGo Food Delivery App</b><br>
  <img src="./12%20Interactive%20real%20time%20web%20app/fooddelivery/food%20delivery.png" width="700">
</p>

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
- Persisting data in the browser with `localStorage` and `sessionStorage` (`setItem`, `getItem`, `removeItem`)
- Serialising arrays and objects with `JSON.stringify()` / `JSON.parse()` for storage
- Loading external JSON data asynchronously with `fetch()` — promise chaining (`.then()` / `.catch()`) and `response.json()`
- Fetching and rendering JSON with jQuery — `$.getJSON()`, `$.each()`, `.append()`, `.done()` / `.fail()` / `.always()`
- Timers — `setInterval()` for a live clock, countdown and simulated real-time order tracking; `setTimeout()` for toasts and short-lived animations
- ES6 modules (`<script type="module">`) and modern ES6 syntax — arrow functions, destructuring, spread, template literals, closures and the module pattern
- Building a live status engine that re-renders the UI only when the underlying data changes
- Loading data with jQuery AJAX (`$.ajax()`) and building a single-page interface that switches views without reloading
- Event delegation for dynamically created elements, search / filter / sort pipelines and a cart-and-coupon billing flow
- Running pages through a local server (VS Code Live Server) so `fetch()`, AJAX requests and ES module scripts work
- Console methods (`log`, `warn`, `error`, `table`) for debugging
- Building complete, styled, interactive mini-applications — not isolated code snippets

---

## How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/ananyamarghade/JavaScript-Lab.git
   ```
2. **Open any experiment folder** and launch its main `.html` file (e.g. `index.html`, `department.html`, `shop-billing.html`) directly in a browser.
3. No build tools or dependencies are required — everything runs client-side. Most experiments open directly in the browser, but Experiments **10**, **11** (Class Scheduler) and **12** (FoodieGo) load JSON files or ES module scripts, which browsers block on `file://` addresses. Open these folders with **VS Code Live Server** (right-click the `.html` file → *Open with Live Server*).

---

## License

This repository is created for educational and academic purposes as part of coursework at Symbiosis Institute of Technology, Nagpur.

---

<div align="center">

**Ananya Marghade**
B.Tech Computer Science and Engineering · Symbiosis Institute of Technology, Nagpur

</div>
