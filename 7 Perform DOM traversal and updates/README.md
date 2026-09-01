# Experiment No. 7
**Student Name:** Ananya Marghade

**PRN:** 24070521004

**BATCH:** A1

**System File Path:** `"D:\Ananya\JavaScript LAB\EXP7\todo.html"` | `"D:\Ananya\JavaScript LAB\EXP7\form.html"` | `"D:\Ananya\JavaScript LAB\EXP7\welcome.html"`

**GITHUB File Path:** `7 Perform DOM traversal and updates/todo.html` | `7 Perform DOM traversal and updates/form.html` | `7 Perform DOM traversal and updates/welcome.html`

---

## Experiment Title
Perform DOM Traversal and Updates

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Experiment Program Code

### My Tasks — To-Do List — `todo.html`
A full to-do list application built almost entirely through DOM traversal and manipulation: every task item (checkbox, label, Edit/Delete buttons) is constructed at runtime with `document.createElement()` and wired together with `appendChild()`, task completion is toggled with `classList.toggle()`, the live task count is derived by traversing existing nodes with `querySelectorAll("li:not(.empty)")`, and the day-selector strip is updated by looping over `querySelectorAll(".day")` to move the `active` class between siblings.

#### `7 Perform DOM traversal and updates/todo.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Tasks</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            min-height: 100vh;
            font-family: Arial, Helvetica, sans-serif;
            background: #eef1f7;
            color: #252b36;
        }

        .app {
            width: 1100px;
            max-width: 94%;
            min-height: 680px;
            margin: 45px auto;
            display: flex;
            background: #ffffff;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 15px 45px rgba(36, 47, 62, 0.12);
            border: 1px solid #e2e6ec;
        }

        .sidebar {
            width: 190px;
            background: #315fa8;
            color: white;
            padding: 28px 20px;
            display: flex;
            flex-direction: column;
        }

        .logo {
            width: 42px;
            height: 42px;
            background: rgba(255, 255, 255, 0.16);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 45px;
        }

        .nav {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .nav-item {
            padding: 12px 13px;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.75);
        }

        .nav-item.active {
            background: rgba(255, 255, 255, 0.15);
            color: white;
        }

        .sidebar-bottom {
            margin-top: auto;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.7);
        }

        .content {
            flex: 1;
            background: #f9fafc;
            padding: 35px 40px;
            overflow: hidden;
        }

        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .title-section h1 {
            margin: 0;
            font-size: 30px;
            font-weight: 600;
            color: #252b36;
        }

        .title-section p {
            margin: 7px 0 0;
            font-size: 14px;
            color: #8b939e;
        }

        .date {
            font-size: 14px;
            color: #69727e;
            background: white;
            padding: 9px 13px;
            border: 1px solid #e1e5ea;
            border-radius: 7px;
        }

        .days {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
            overflow-x: auto;
        }

        .day {
            min-width: 68px;
            padding: 11px 8px;
            text-align: center;
            background: white;
            border: 1px solid #e1e5ea;
            border-radius: 9px;
            cursor: pointer;
        }

        .day span {
            display: block;
            font-size: 12px;
            color: #9299a3;
            margin-bottom: 5px;
        }

        .day strong {
            font-size: 14px;
            color: #424a55;
        }

        .day.active {
            background: #315fa8;
            border-color: #315fa8;
        }

        .day.active span,
        .day.active strong {
            color: white;
        }

        .task-area {
            background: white;
            border: 1px solid #e1e5ea;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 5px 18px rgba(36, 47, 62, 0.05);
        }

        .task-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
        }

        .task-header h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
        }

        .task-count {
            color: #315fa8;
            background: #edf3fb;
            padding: 6px 10px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 600;
        }

        .input-area {
            display: flex;
            gap: 8px;
            margin-bottom: 20px;
        }

        #taskInput {
            flex: 1;
            height: 44px;
            padding: 0 13px;
            border: 1px solid #d6dbe1;
            border-radius: 7px;
            outline: none;
            font-size: 14px;
            color: #333;
        }

        #taskInput:focus {
            border-color: #315fa8;
            box-shadow: 0 0 0 3px rgba(49, 95, 168, 0.10);
        }

        #addBtn {
            height: 44px;
            padding: 0 18px;
            border: none;
            border-radius: 7px;
            background: #315fa8;
            color: white;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
        }

        #addBtn:hover {
            background: #274f91;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            display: flex;
            align-items: center;
            gap: 12px;
            min-height: 55px;
            padding: 9px 10px;
            border-bottom: 1px solid #edf0f3;
        }

        li:last-child {
            border-bottom: none;
        }

        .check {
            width: 19px;
            height: 19px;
            border: 2px solid #c2c8d0;
            border-radius: 50%;
            flex-shrink: 0;
            cursor: pointer;
            position: relative;
        }

        .check:hover {
            border-color: #315fa8;
        }

        li.completed .check {
            background: #315fa8;
            border-color: #315fa8;
        }

        li.completed .check::after {
            content: "";
            position: absolute;
            width: 5px;
            height: 9px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            left: 5px;
            top: 2px;
        }

        li span {
            flex: 1;
            font-size: 14px;
            color: #3e4650;
            word-break: break-word;
        }

        li.completed span {
            text-decoration: line-through;
            color: #9aa1a9;
        }

        .buttons {
            display: flex;
            gap: 6px;
        }

        .buttons button {
            padding: 6px 10px;
            border-radius: 5px;
            font-size: 12px;
            cursor: pointer;
        }

        .edit {
            background: #fff7e8;
            color: #a66a00;
            border: 1px solid #f0d59f;
        }

        .edit:hover {
            background: #ffefd0;
        }

        .delete {
            background: #fff0f1;
            color: #c2363f;
            border: 1px solid #efc6ca;
        }

        .delete:hover {
            background: #ffe2e4;
        }

        .empty {
            justify-content: center;
            color: #9ba2aa;
            font-size: 13px;
            padding: 25px;
        }

        footer {
            margin-top: 22px;
            padding-top: 18px;
            border-top: 1px solid #e3e7ec;
            text-align: center;
            color: #8b939e;
            font-size: 12px;
            line-height: 1.8;
        }

        footer div {
            color: #9aa1aa;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        footer strong {
            display: block;
            color: #315fa8;
            font-size: 14px;
            font-weight: 600;
        }

        footer span {
            margin: 0 5px;
            color: #7f8791;
        }

        @media (max-width: 800px) {
            .app {
                margin: 20px auto;
                max-width: 96%;
            }

            .sidebar {
                width: 70px;
                padding: 22px 12px;
            }

            .logo {
                margin: 0 auto 35px;
            }

            .nav-item {
                text-align: center;
                font-size: 0;
            }

            .nav-item::first-letter {
                font-size: 18px;
            }

            .sidebar-bottom {
                display: none;
            }

            .content {
                padding: 25px;
            }
        }

        @media (max-width: 550px) {
            .app {
                display: block;
            }

            .sidebar {
                width: 100%;
                height: 65px;
                flex-direction: row;
                align-items: center;
                padding: 10px 18px;
            }

            .logo {
                margin: 0;
            }

            .nav {
                flex-direction: row;
                margin-left: auto;
            }

            .nav-item {
                display: none;
            }

            .nav-item.active {
                display: block;
                font-size: 13px;
            }

            .content {
                padding: 22px 18px;
            }

            .top {
                align-items: flex-start;
            }

            .date {
                display: none;
            }

            .days {
                margin-bottom: 20px;
            }

            .task-area {
                padding: 18px;
            }
        }
    </style>
</head>

<body>

    <div class="app">

        <aside class="sidebar">
            <div class="logo">✓</div>

            <div class="nav">
                <div class="nav-item active">Tasks</div>
                <div class="nav-item">Today</div>
                <div class="nav-item">Completed</div>
            </div>

            <div class="sidebar-bottom">
                Keep things organized.
            </div>
        </aside>

        <main class="content">

            <div class="top">
                <div class="title-section">
                    <h1>My Tasks</h1>
                    <p>Stay organized and get things done.</p>
                </div>

                <div class="date" id="currentDate"></div>
            </div>

            <div class="days">
                <div class="day active">
                    <span>MON</span>
                    <strong>01</strong>
                </div>

                <div class="day">
                    <span>TUE</span>
                    <strong>02</strong>
                </div>

                <div class="day">
                    <span>WED</span>
                    <strong>03</strong>
                </div>

                <div class="day">
                    <span>THU</span>
                    <strong>04</strong>
                </div>

                <div class="day">
                    <span>FRI</span>
                    <strong>05</strong>
                </div>

                <div class="day">
                    <span>SAT</span>
                    <strong>06</strong>
                </div>

                <div class="day">
                    <span>SUN</span>
                    <strong>07</strong>
                </div>
            </div>

            <section class="task-area">

                <div class="task-header">
                    <h3>Today's Tasks</h3>
                    <div class="task-count" id="taskCount">0 tasks</div>
                </div>

                <div class="input-area">
                    <input type="text" id="taskInput" placeholder="Add a new task...">
                    <button id="addBtn">Add Task</button>
                </div>

                <ul id="taskList">
                    <li class="empty" id="emptyMessage">
                        No tasks yet. Add your first task.
                    </li>
                </ul>

            </section>

            <footer>
                <div>Designed By</div>
                <strong>Ananya Marghade</strong>
                <span>PRN 24070521004</span><br>
                <span>Batch A1</span>
            </footer>

        </main>
    </div>

    <script>
        const taskInput = document.getElementById("taskInput");
        const addBtn = document.getElementById("addBtn");
        const taskList = document.getElementById("taskList");
        const taskCount = document.getElementById("taskCount");
        const emptyMessage = document.getElementById("emptyMessage");
        const currentDate = document.getElementById("currentDate");

        const today = new Date();

        currentDate.textContent = today.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });

        function updateTaskCount() {
            const tasks = taskList.querySelectorAll("li:not(.empty)");

            taskCount.textContent =
                `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;

            emptyMessage.style.display =
                tasks.length === 0 ? "flex" : "none";
        }

        function addTask() {
            const task = taskInput.value.trim();

            if (task === "") {
                alert("Please enter a task!");
                return;
            }

            const li = document.createElement("li");

            const check = document.createElement("div");
            check.className = "check";

            const span = document.createElement("span");
            span.textContent = task;

            const buttons = document.createElement("div");
            buttons.className = "buttons";

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.className = "edit";

            editBtn.addEventListener("click", function() {
                const newTask = prompt(
                    "Edit your task:",
                    span.textContent
                );

                if (newTask !== null && newTask.trim() !== "") {
                    span.textContent = newTask.trim();
                }
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete";

            deleteBtn.addEventListener("click", function() {
                li.remove();
                updateTaskCount();
            });

            check.addEventListener("click", function() {
                li.classList.toggle("completed");
            });

            buttons.appendChild(editBtn);
            buttons.appendChild(deleteBtn);

            li.appendChild(check);
            li.appendChild(span);
            li.appendChild(buttons);

            taskList.appendChild(li);

            taskInput.value = "";
            taskInput.focus();

            updateTaskCount();
        }

        addBtn.addEventListener("click", addTask);

        taskInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addTask();
            }
        });

        document.querySelectorAll(".day").forEach(day => {
            day.addEventListener("click", function() {
                document.querySelectorAll(".day").forEach(item => {
                    item.classList.remove("active");
                });

                this.classList.add("active");
            });
        });

        updateTaskCount();
    </script>

</body>
</html>
```

---

## Output (My Tasks)
- The current date is inserted into the page via `toLocaleDateString()` on load.
- Typing a task and clicking **Add Task** (or pressing **Enter**) builds a new `<li>` node tree (checkbox `div`, task `span`, and an Edit/Delete button group) purely through `createElement()` + `appendChild()`, then appends it to the `#taskList` via DOM traversal.
- Clicking the circular checkbox toggles the `completed` class on that task's `<li>`, which strikes through the text and fills in the check mark.
- **Edit** opens a `prompt()` pre-filled with the current task text and updates the task's `<span>` node in place; **Delete** removes that `<li>` node from the DOM with `.remove()`.
- The **task count** badge and the "No tasks yet" empty-state message are recalculated after every add/delete by re-querying the list with `querySelectorAll`.
- Clicking a day pill in the date strip removes the `active` class from all `.day` elements and adds it to the one that was clicked, demonstrating sibling traversal with `querySelectorAll(...).forEach()`.

> **Screenshot:**
> ![My Tasks output](<todolist.png>)

---

## Case Study Title
Sign Up Form & Welcome Page — Dynamic DOM Traversal for Form Building, Validation, and Multi-Page Handoff

## Case Study Program Code

### 1. Sign Up Form — `form.html`
A registration form whose Day and Year dropdowns are **populated entirely at runtime** — a `for` loop creates 31 `<option>` elements for the day selector and another builds the year list back to 1950, each inserted via `createElement()` + `appendChild()`. Every field is looked up once with `getElementById()` and reused throughout, `focus`/`blur`/`keyup` listeners traverse to sibling elements to update border colors and clear inline errors live, and full submit-time validation (regex checks for name, username, email, website, and a strong password) walks the form field-by-field before handing off validated data to the next page via `localStorage`.

#### `7 Perform DOM traversal and updates/form.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Form</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #eef4ff, #f8f5ff);
            margin: 0;
            padding: 40px;
            color: #333;
        }

        .form {
            width: 620px;
            margin: auto;
            background: white;
            padding: 30px 40px;
            box-sizing: border-box;
            border-radius: 10px;
            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
        }

        h2 {
            text-align: center;
            color: #3157a4;
            margin: 0 0 8px;
        }

        .mandatory {
            color: red;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 25px;
        }

        .row {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 16px;
        }

        .label {
            width: 150px;
            font-weight: 500;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 270px;
            height: 35px;
            padding: 7px 10px;
            border: 1px solid #b8c4d3;
            border-radius: 5px;
            box-sizing: border-box;
            font-size: 15px;
            background-color: white;
        }

        input:focus,
        select:focus {
            outline: none;
            border-color: #3157a4;
            box-shadow: 0 0 4px rgba(49, 87, 164, 0.25);
        }

        select {
            height: 35px;
            padding: 5px 8px;
            border: 1px solid #b8c4d3;
            border-radius: 5px;
            background-color: white;
            font-size: 14px;
            margin-right: 6px;
        }

        .required {
            color: red;
            margin-left: 6px;
            font-weight: bold;
        }

        #error {
            color: #d62828;
            font-size: 14px;
            margin-left: 150px;
            margin-bottom: 12px;
            min-height: 18px;
        }

        .terms {
            margin-left: 150px;
            margin-top: 20px;
            font-size: 14px;
        }

        .terms input {
            width: 16px;
            height: 16px;
            vertical-align: middle;
            margin-right: 5px;
        }

        .button {
            margin-left: 150px;
            margin-top: 22px;
        }

        .signup-btn {
            padding: 10px 30px;
            background-color: black;
            color: white;
            border: none;
            font-size: 15px;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
        }

        .signup-btn:hover {
            background-color: #3157a4;
        }

        .footer {
            text-align: center;
            margin-top: 30px;
            color: #555;
            font-size: 14px;
            line-height: 1.7;
        }

        .footer .title {
            color: #3157a4;
            font-weight: bold;
            font-size: 16px;
        }

        .footer .name {
            font-weight: bold;
            color: #333;
        }
    </style>
</head>

<body>

<form class="form" id="signupForm">

    <h2>Sign Up</h2>

    <div class="mandatory">* Mandatory to fill</div>

    <div id="error"></div>

    <div class="row">
        <div class="label">Firstname:</div>
        <input type="text" id="firstname">
        <span class="required">*</span>
    </div>

    <div class="row">
        <div class="label">Lastname:</div>
        <input type="text" id="lastname">
    </div>

    <div class="row">
        <div class="label">Birthday:</div>

        <select id="day">
            <option value="">Day</option>
        </select>

        <select id="month">
            <option value="">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>

        <select id="year">
            <option value="">Year</option>
        </select>
    </div>

    <div class="row">
        <div class="label">Username:</div>
        <input type="text" id="username">
        <span class="required">*</span>
    </div>

    <div class="row">
        <div class="label">E-mail:</div>
        <input type="email" id="email">
    </div>

    <div class="row">
        <div class="label">Website:</div>
        <input type="text" id="website">
    </div>

    <div class="row">
        <div class="label">Password:</div>
        <input type="password" id="password">
        <span class="required">*</span>
    </div>

    <div class="row">
        <div class="label">Re-password:</div>
        <input type="password" id="repassword">
        <span class="required">*</span>
    </div>

    <div class="terms">
        <input type="checkbox" id="terms">
        <label for="terms">I agree to the terms & conditions.</label>
    </div>

    <div class="button">
        <button type="submit" class="signup-btn">Sign Up</button>
    </div>

</form>

<div class="footer">
    <div class="title">Designed By</div>
    <div class="name">Ananya Marghade</div>
    <div>PRN 24070521004</div>
    <div>Batch A1</div>
</div>

<script>
let form = document.getElementById("signupForm");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let website = document.getElementById("website");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let terms = document.getElementById("terms");
let error = document.getElementById("error");

for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    day.appendChild(option);
}

for (let i = new Date().getFullYear(); i >= 1950; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
}

function showError(message, element) {
    error.textContent = message;
    element.style.borderColor = "#d62828";
    element.focus();
}

function clearError(element) {
    element.style.borderColor = "#b8c4d3";
}

firstname.addEventListener("focus", function() {
    firstname.style.borderColor = "#3157a4";
});

firstname.addEventListener("blur", function() {
    clearError(firstname);
});

firstname.addEventListener("keyup", function() {
    if (firstname.value.trim().length >= 3) {
        error.textContent = "";
        clearError(firstname);
    }
});

lastname.addEventListener("focus", function() {
    lastname.style.borderColor = "#3157a4";
});

lastname.addEventListener("blur", function() {
    clearError(lastname);
});

username.addEventListener("focus", function() {
    username.style.borderColor = "#3157a4";
});

username.addEventListener("blur", function() {
    clearError(username);
});

password.addEventListener("focus", function() {
    password.style.borderColor = "#3157a4";
});

password.addEventListener("blur", function() {
    clearError(password);
});

repassword.addEventListener("focus", function() {
    repassword.style.borderColor = "#3157a4";
});

repassword.addEventListener("blur", function() {
    clearError(repassword);
});

day.addEventListener("change", function() {
    error.textContent = "";
});

month.addEventListener("change", function() {
    error.textContent = "";
});

year.addEventListener("change", function() {
    error.textContent = "";
});

terms.addEventListener("change", function() {
    if (terms.checked) {
        error.textContent = "";
    }
});

window.addEventListener("load", function() {
    if (localStorage.getItem("editMode") === "true") {
        firstname.value = localStorage.getItem("firstname") || "";
        lastname.value = localStorage.getItem("lastname") || "";
        username.value = localStorage.getItem("username") || "";
        email.value = localStorage.getItem("email") || "";
        website.value = localStorage.getItem("website") || "";
        day.value = localStorage.getItem("day") || "";
        month.value = localStorage.getItem("month") || "";
        year.value = localStorage.getItem("year") || "";
        localStorage.removeItem("editMode");
    }
});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let namePattern = /^[A-Za-z]+$/;
    let usernamePattern = /^[A-Za-z0-9_]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let websitePattern = /^https?:\/\/.+\..+/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (firstname.value.trim() == "") {
        showError("Firstname is mandatory.", firstname);
        return;
    }

    if (firstname.value.trim().length < 3) {
        showError("Firstname must contain at least 3 characters.", firstname);
        return;
    }

    if (!namePattern.test(firstname.value.trim())) {
        showError("Firstname can contain only letters.", firstname);
        return;
    }

    if (lastname.value.trim() != "") {
        if (lastname.value.trim().length < 3) {
            showError("Lastname must contain at least 3 characters.", lastname);
            return;
        }

        if (!namePattern.test(lastname.value.trim())) {
            showError("Lastname can contain only letters.", lastname);
            return;
        }
    }

    if (day.value == "" || month.value == "" || year.value == "") {
        error.textContent = "Please select your complete birthday.";
        return;
    }

    if (username.value.trim() == "") {
        showError("Username is mandatory.", username);
        return;
    }

    if (username.value.trim().length < 5) {
        showError("Username must contain at least 5 characters.", username);
        return;
    }

    if (!usernamePattern.test(username.value.trim())) {
        showError("Username can contain only letters, numbers and underscore.", username);
        return;
    }

    if (email.value.trim() != "" && !emailPattern.test(email.value.trim())) {
        showError("Please enter a valid e-mail address.", email);
        return;
    }

    if (website.value.trim() != "" && !websitePattern.test(website.value.trim())) {
        showError("Please enter a valid website URL.", website);
        return;
    }

    if (password.value == "") {
        showError("Password is mandatory.", password);
        return;
    }

    if (password.value.length < 8) {
        showError("Password must contain at least 8 characters.", password);
        return;
    }

    if (!passwordPattern.test(password.value)) {
        showError("Password must contain uppercase, lowercase and a number.", password);
        return;
    }

    if (repassword.value == "") {
        showError("Re-password is mandatory.", repassword);
        return;
    }

    if (password.value != repassword.value) {
        showError("Passwords do not match.", repassword);
        return;
    }

    if (!terms.checked) {
        error.textContent = "Please agree to the terms & conditions.";
        return;
    }

    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("lastname", lastname.value);
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("website", website.value);
    localStorage.setItem("day", day.value);
    localStorage.setItem("month", month.value);
    localStorage.setItem("year", year.value);

    window.location.href = "welcome.html";
});
</script>

</body>
</html>

```

### 2. Welcome Page — `welcome.html`
A minimal confirmation page that the Sign Up form redirects to (`window.location.href = "welcome.html"`) once every validation check has passed and the form data has been written to `localStorage`.

#### `7 Perform DOM traversal and updates/welcome.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>

    <style>
        body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #eef4ff, #f8f5ff);
            font-family: Arial, sans-serif;
        }

        .welcome {
            background: white;
            padding: 50px 80px;
            text-align: center;
            border-radius: 10px;
            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
        }

        h1 {
            color: #3157a4;
            margin-bottom: 10px;
        }

        p {
            color: #555;
            font-size: 17px;
        }
    </style>
</head>

<body>

<div class="welcome">
    <h1>Welcome!</h1>
    <p>Your account has been created successfully.</p>
</div>

</body>
</html>
```

---

## Output (Case Study — Sign Up Form & Welcome Page)
- On page load, the **Day** (1–31) and **Year** (current year down to 1950) dropdowns are built dynamically with a `for` loop and `createElement()` — nothing is hardcoded in the HTML beyond the "Day"/"Year" placeholder options.
- Focusing a tracked field (Firstname, Lastname, Username, Password, Re-password) highlights its border; typing at least 3 characters into **Firstname** clears any existing error live via a `keyup` listener.
- Submitting the form runs a full top-to-bottom validation chain: mandatory Firstname (≥ 3 letters, letters only), optional but validated Lastname, a fully-selected birthday, mandatory Username (≥ 5 chars, letters/numbers/underscore), optional email/website format checks, a mandatory strong Password (8+ characters with uppercase, lowercase, and a digit), a matching Re-password, and an accepted terms checkbox — each failure is surfaced in the shared `#error` div and focuses the offending field.
- On successful validation, all entered values are saved into `localStorage` and the browser is redirected to **`welcome.html`**, which displays a "Your account has been created successfully." confirmation card.

> **Screenshots:**
> ![Sign Up Form output](<signupform (1).png>)
> ![Welcome page output](<signupform (2).png>)

---

## Result / Conclusion
The practical was completed successfully. DOM traversal and update techniques — `getElementById()`, `querySelectorAll()`, `createElement()`, `appendChild()`, `classList.toggle()`, and node removal via `.remove()` — were used to build a fully dynamic **My Tasks** to-do list where every task row is constructed and updated at runtime, and a **Sign Up Form** whose date dropdowns are generated programmatically and whose fields are traversed and validated live before handing data off to a **Welcome** confirmation page via `localStorage`.
