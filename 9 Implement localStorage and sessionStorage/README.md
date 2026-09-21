# Experiment No. 9
**Student Name:** Ananya Marghade

**PRN:** 24070521004

**BATCH:** A1

**System File Path:** `"D:\Ananya\JavaScript LAB\EXP9\themechange.html"` | `"D:\Ananya\JavaScript LAB\EXP9\seminar planner case study.html"`

**GITHUB File Path:** `9 Implement localStorage and sessionStorage/themechange.html` | `9 Implement localStorage and sessionStorage/seminar planner case study.html`

---

## Experiment Title
Implement localStorage and sessionStorage

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Experiment Program Code

### Theme Preference — `themechange.html`
A single-card page that lets the user pick a **Light** or **Dark** theme and remembers the choice. `setTheme()` toggles a `dark` class on `<body>` (the `body.dark` CSS overrides restyle the whole card) and writes the choice to both Web Storage areas — `localStorage.setItem('theme', ...)` for a preference that survives closing the browser, and `sessionStorage.setItem('sessionTheme', ...)` for a copy that lives only as long as the current tab. `clearPreference()` removes both keys with `removeItem()` and returns the page to its default light look, and a `window.onload` handler reads `localStorage.getItem('theme')` to restore the saved theme automatically on the next visit.

#### `9 Implement localStorage and sessionStorage/themechange.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Theme Preference</title>

    <style>
        *{
            box-sizing: border-box;
        }

        body{
            margin: 0;
            min-height: 100vh;
            font-family: Arial, sans-serif;
            background: #eef1f4;
            color: #252525;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background 0.3s, color 0.3s;
        }

        .card{
            width: 440px;
            background: #ffffff;
            border: 1px solid #dfe3e7;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .top{
            padding: 24px 28px;
            border-bottom: 1px solid #e5e7ea;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .theme-icon{
            width: 46px;
            height: 46px;
            border-radius: 10px;
            background: #f0f2f4;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
        }

        .top h1{
            margin: 0;
            font-size: 20px;
            font-weight: 600;
        }

        .top p{
            margin: 5px 0 0;
            color: #777;
            font-size: 13px;
        }

        .content{
            padding: 28px;
        }

        .label{
            display: block;
            margin-bottom: 12px;
            font-size: 13px;
            font-weight: 600;
            color: #555;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .theme-options{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        button{
            font-family: Arial, sans-serif;
            cursor: pointer;
            transition: 0.2s;
        }

        .theme-btn{
            padding: 16px;
            background: #fff;
            border: 1px solid #d5d9dd;
            border-radius: 9px;
            color: #333;
            text-align: left;
        }

        .theme-btn strong{
            display: block;
            font-size: 15px;
            margin-bottom: 5px;
        }

        .theme-btn span{
            font-size: 12px;
            color: #888;
        }

        .theme-btn:hover{
            border-color: #999;
            background: #fafafa;
        }

        .dark-btn{
            background: #292929;
            color: white;
            border-color: #292929;
        }

        .dark-btn span{
            color: #bcbcbc;
        }

        .dark-btn:hover{
            background: #1f1f1f;
        }

        .clear-btn{
            width: 100%;
            margin-top: 18px;
            padding: 12px;
            border: 1px solid #d8bcbc;
            border-radius: 8px;
            background: #fff;
            color: #a33b3b;
            font-size: 14px;
        }

        .clear-btn:hover{
            background: #fff6f6;
            border-color: #c99696;
        }

        .status{
            margin-top: 20px;
            padding: 12px 14px;
            border-radius: 8px;
            background: #f5f6f7;
            border: 1px solid #e3e5e7;
            color: #666;
            font-size: 13px;
            text-align: center;
            min-height: 40px;
        }

        .footer{
            padding: 14px 28px;
            background: #fafafa;
            border-top: 1px solid #e5e7ea;
            text-align: center;
            color: #999;
            font-size: 11px;
        }

        body.dark{
            background: #18191a;
            color: white;
        }

        body.dark .card{
            background: #252627;
            border-color: #3a3b3d;
            box-shadow: 0 8px 25px rgba(0,0,0,0.25);
        }

        body.dark .top{
            border-color: #3a3b3d;
        }

        body.dark .theme-icon{
            background: #333537;
        }

        body.dark .top p{
            color: #aaa;
        }

        body.dark .label{
            color: #bbb;
        }

        body.dark .theme-btn{
            background: #2d2f30;
            color: white;
            border-color: #484a4c;
        }

        body.dark .theme-btn:hover{
            background: #343638;
        }

        body.dark .theme-btn span{
            color: #aaa;
        }

        body.dark .dark-btn{
            background: #111;
            border-color: #111;
        }

        body.dark .clear-btn{
            background: #2d2f30;
            color: #ff9d9d;
            border-color: #664848;
        }

        body.dark .clear-btn:hover{
            background: #3a2e2e;
        }

        body.dark .status{
            background: #303234;
            border-color: #414346;
            color: #bbb;
        }

        body.dark .footer{
            background: #202122;
            border-color: #3a3b3d;
            color: #888;
        }
    </style>
</head>

<body>

    <div class="card">

        <div class="top">
            <div class="theme-icon">◐</div>

            <div>
                <h1>Theme Preference</h1>
                <p>Choose and save your preferred appearance</p>
            </div>
        </div>

        <div class="content">

            <span class="label">Select Theme</span>

            <div class="theme-options">

                <button class="theme-btn" onclick="setTheme('light')">
                    <strong>Light Theme</strong>
                    <span>Clean and bright</span>
                </button>

                <button class="theme-btn dark-btn" onclick="setTheme('dark')">
                    <strong>Dark Theme</strong>
                    <span>Easy on the eyes</span>
                </button>

            </div>

            <button class="clear-btn" onclick="clearPreference()">
                Clear Saved Preference
            </button>

            <div class="status" id="message">
                No changes made yet.
            </div>

        </div>

        <div class="footer">
            Preference is stored using LocalStorage & SessionStorage
        </div>

    </div>

    <script>
        function setTheme(theme) {

            if(theme === 'dark'){
                document.body.classList.add('dark');
            }
            else{
                document.body.classList.remove('dark');
            }

            localStorage.setItem('theme', theme);
            sessionStorage.setItem('sessionTheme', theme);

            document.getElementById("message").innerHTML =
                "Your " + theme + " theme preference has been saved.";
        }

        function clearPreference(){

            localStorage.removeItem('theme');
            sessionStorage.removeItem('sessionTheme');

            document.body.classList.remove('dark');

            document.getElementById("message").innerHTML =
                "Saved theme preference has been cleared.";
        }

        window.onload = function(){

            var saved = localStorage.getItem('theme');

            if(saved === 'dark'){
                document.body.classList.add('dark');

                document.getElementById("message").innerHTML =
                    "Dark theme preference restored.";
            }

            if(saved === 'light'){
                document.getElementById("message").innerHTML =
                    "Light theme preference restored.";
            }
        };
    </script>

</body>
</html>
```

---

## Output (Theme Preference)
- On first load, with nothing saved yet, the page shows the default light card and the status message **"No changes made yet."**
- Clicking **Light Theme** or **Dark Theme** applies the theme instantly (the `dark` class is added to / removed from `<body>` with a smooth CSS transition), saves it to `localStorage` under the key `theme` and to `sessionStorage` under the key `sessionTheme`, and shows **"Your light/dark theme preference has been saved."**
- Reloading or reopening the page triggers the `window.onload` handler, which reads `theme` from `localStorage` and re-applies it, showing **"Dark theme preference restored."** or **"Light theme preference restored."** — the choice persists even after the tab or browser is closed.
- **Clear Saved Preference** removes both stored keys with `removeItem()`, switches back to the default light look, and shows **"Saved theme preference has been cleared."** — the next reload starts fresh.
- The stored keys can be inspected in the browser under **DevTools → Application → Local Storage / Session Storage**.

> **Screenshot:**
> ![Theme Preference - light theme saved](<theme change 1.png>)
> ![Theme Preference - dark theme saved](<themechange.png>)

---

## Case Study Title
Seminar Schedule Planner — Saving User Preferences with localStorage and sessionStorage

## Case Study Program Code

### Seminar Schedule Planner — `seminar planner case study.html`
A seminar timetable (Day / Seminar / Begin–End / Topic) built at runtime from a `schedule` array using `createElement()` and `appendChild()`, with a form below it for saving a personal seminar preference. The two storage areas are used for different jobs. **`localStorage`** keeps the saved preferences — an array of objects serialised with `JSON.stringify()` under the key `seminarPlannerFinalPreferences`, plus individual keys (`preferredName`, `preferredDay`, `preferredScheduleStart`, `preferredScheduleEnd`) — so they persist across reloads. **`sessionStorage`** holds the current-session selection (`preferredTopic`, `selectedSeminar`, `selectionStatus`), set whenever a seminar is clicked or a preference is saved. On every load, `displaySchedule()` reads the array back with `JSON.parse()`, filters the original and saved entries per day, and merges the saved rows into the correct day group (the Day cell's `rowSpan` grows to cover them), highlighted with the `saved-row` style. `formatTime()` converts the 24-hour values from `<input type="time">` into 12-hour `a.m.` / `p.m.` display.

#### `9 Implement localStorage and sessionStorage/seminar planner case study.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Seminar Schedule Planner</title>

    <style>
        body{
            font-family:Arial,sans-serif;
            background:#f4f6f8;
            margin:0;
            padding:40px;
            color:#222;
        }

        .container{
            width:90%;
            max-width:1000px;
            margin:auto;
        }

        h1{
            text-align:center;
            color:#26384a;
            margin-bottom:8px;
        }

        .subtitle{
            text-align:center;
            color:#666;
            margin-bottom:30px;
        }

        table{
            width:100%;
            border-collapse:collapse;
            background:white;
            box-shadow:0 3px 12px rgba(0,0,0,.08);
        }

        th{
            background:#30475e;
            color:white;
            padding:13px;
            border:1px solid #ddd;
        }

        td{
            padding:12px;
            text-align:center;
            border:1px solid #ddd;
        }

        tbody tr:nth-child(even){
            background:#f8fafb;
        }

        .seminar{
            color:#245f86;
            font-weight:bold;
            cursor:pointer;
        }

        .seminar:hover{
            text-decoration:underline;
        }

        .saved-row{
            background:#e7f4ee !important;
        }

        .saved-row td{
            font-weight:bold;
        }

        .form-box{
            margin-top:35px;
            background:white;
            padding:25px;
            border-radius:8px;
            box-shadow:0 3px 12px rgba(0,0,0,.08);
        }

        .form-box h2{
            margin-top:0;
            color:#26384a;
        }

        label{
            display:block;
            margin-top:16px;
            margin-bottom:7px;
            font-weight:bold;
        }

        input,
        select{
            width:100%;
            padding:11px;
            border:1px solid #ccc;
            border-radius:5px;
            box-sizing:border-box;
            font-size:15px;
        }

        button{
            margin-top:22px;
            padding:11px 24px;
            border:0;
            border-radius:5px;
            background:#30475e;
            color:white;
            font-size:15px;
            cursor:pointer;
        }

        button:hover{
            background:#243447;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Seminar Schedule Planner</h1>
    <p class="subtitle">Plan and save your preferred seminar sessions</p>

    <table id="seminarTable">

        <thead>
            <tr>
                <th rowspan="2">Day</th>
                <th rowspan="2">Seminar</th>
                <th colspan="2">Schedule</th>
                <th rowspan="2">Topic</th>
            </tr>

            <tr>
                <th>Begin</th>
                <th>End</th>
            </tr>
        </thead>

        <tbody id="scheduleBody"></tbody>

    </table>


    <div class="form-box">

        <h2>Save Your Seminar Preference</h2>

        <form id="preferenceForm">

            <label for="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required>

            <label for="day">Preferred Day</label>
            <select id="day" required>
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
            </select>

            <label for="topic">Preferred Topic</label>
            <select id="topic" required>
                <option value="">Select Topic</option>
                <option value="Validity: DTD and Relax NG">
                    Validity: DTD and Relax NG
                </option>
                <option value="XPath">XPath</option>
                <option value="XSL Transformations">
                    XSL Transformations
                </option>
                <option value="XSL Formatting Objects">
                    XSL Formatting Objects
                </option>
            </select>

            <label for="startTime">Begin Time</label>
            <input type="time" id="startTime" required>

            <label for="endTime">End Time</label>
            <input type="time" id="endTime" required>

            <button type="submit">Save Preference</button>

        </form>

    </div>

</div>


<script>

var storageKey = "seminarPlannerFinalPreferences";

var schedule = [
    {
        day:"Monday",
        seminar:"Introduction to XML",
        begin:"08:00",
        end:"17:00",
        topic:"Validity: DTD and Relax NG"
    },
    {
        day:"Tuesday",
        seminar:"XPath",
        begin:"08:00",
        end:"11:00",
        topic:"XPath"
    },
    {
        day:"Tuesday",
        seminar:"XSL Transformations",
        begin:"11:00",
        end:"14:00",
        topic:"XSL Transformations"
    },
    {
        day:"Tuesday",
        seminar:"XSL Transformations",
        begin:"14:00",
        end:"17:00",
        topic:"XSL Transformations"
    },
    {
        day:"Wednesday",
        seminar:"XSL Formatting Objects",
        begin:"08:00",
        end:"12:00",
        topic:"XSL Formatting Objects"
    }
];

var topicDetails = {
    "Validity: DTD and Relax NG":
        "This topic explains how XML documents can be checked for a valid structure using DTD and Relax NG.",

    "XPath":
        "XPath is used to navigate through an XML document and select specific elements or nodes.",

    "XSL Transformations":
        "XSL Transformations are used to transform XML data into formats such as HTML or another XML document.",

    "XSL Formatting Objects":
        "XSL Formatting Objects are used to describe the layout and formatting of XML content for presentation."
};


function showDetails(day, seminar, topic){

    sessionStorage.setItem("preferredTopic",topic);
    sessionStorage.setItem("selectedSeminar",seminar);
    sessionStorage.setItem("selectionStatus","Selected");

    alert(
        "Seminar Selected!\n\n" +
        "Day: " + day + "\n" +
        "Seminar: " + seminar + "\n" +
        "Topic: " + topic + "\n\n" +
        "About the Topic:\n" +
        topicDetails[topic]
    );
}


function formatTime(time){

    var parts=time.split(":");
    var hour=parseInt(parts[0]);
    var minute=parts[1];

    var period=hour>=12 ? "p.m." : "a.m.";

    if(hour===0){
        hour=12;
    }
    else if(hour>12){
        hour=hour-12;
    }

    return hour+":"+minute+" "+period;
}


function createRow(item,saved){

    var row=document.createElement("tr");

    if(saved){
        row.className="saved-row";
    }

    var seminarCell=document.createElement("td");
    var beginCell=document.createElement("td");
    var endCell=document.createElement("td");
    var topicCell=document.createElement("td");

    seminarCell.textContent=item.seminar;
    seminarCell.className="seminar";

    beginCell.textContent=formatTime(item.begin);
    endCell.textContent=formatTime(item.end);
    topicCell.textContent=item.topic;

    seminarCell.onclick=function(){

        showDetails(
            item.day,
            item.seminar,
            item.topic
        );

    };

    row.appendChild(seminarCell);
    row.appendChild(beginCell);
    row.appendChild(endCell);
    row.appendChild(topicCell);

    return row;
}


function displaySchedule(){

    var body=document.getElementById("scheduleBody");

    body.innerHTML="";

    var preferences=JSON.parse(
        localStorage.getItem(storageKey) || "[]"
    );

    var days=["Monday","Tuesday","Wednesday"];

    for(var d=0;d<days.length;d++){

        var day=days[d];

        var originalRows=schedule.filter(function(item){
            return item.day===day;
        });

        var savedRows=preferences.filter(function(item){
            return item.day===day &&
                   item.startTime &&
                   item.endTime &&
                   item.topic;
        });

        var totalRows=originalRows.length+savedRows.length;

        if(totalRows===0){
            continue;
        }

        for(var i=0;i<originalRows.length;i++){

            var row=createRow(originalRows[i],false);

            if(i===0){

                var dayCell=document.createElement("td");

                dayCell.textContent=day;
                dayCell.rowSpan=totalRows;

                row.insertBefore(dayCell,row.firstChild);
            }

            body.appendChild(row);
        }

        for(var j=0;j<savedRows.length;j++){

            var savedItem={
                day:savedRows[j].day,
                seminar:savedRows[j].topic,
                begin:savedRows[j].startTime,
                end:savedRows[j].endTime,
                topic:savedRows[j].topic
            };

            var savedRow=createRow(savedItem,true);

            body.appendChild(savedRow);
        }
    }
}


function savePreference(event){

    event.preventDefault();

    var name=document.getElementById("name").value;
    var day=document.getElementById("day").value;
    var topic=document.getElementById("topic").value;
    var startTime=document.getElementById("startTime").value;
    var endTime=document.getElementById("endTime").value;

    if(endTime<=startTime){

        alert("End time must be later than begin time.");
        return;
    }

    var preferences=JSON.parse(
        localStorage.getItem(storageKey) || "[]"
    );

    var preference={
        name:name,
        day:day,
        topic:topic,
        startTime:startTime,
        endTime:endTime
    };

    preferences.push(preference);

    localStorage.setItem(
        storageKey,
        JSON.stringify(preferences)
    );

    localStorage.setItem("preferredName",name);
    localStorage.setItem("preferredDay",day);
    localStorage.setItem("preferredScheduleStart",startTime);
    localStorage.setItem("preferredScheduleEnd",endTime);

    sessionStorage.setItem("preferredTopic",topic);
    sessionStorage.setItem("selectedSeminar",topic);
    sessionStorage.setItem("selectionStatus","Selected");

    alert(
        "Preference Saved!\n\n" +
        "Name: " + name + "\n" +
        "Day: " + day + "\n" +
        "Schedule: " + formatTime(startTime) +
        " - " + formatTime(endTime) + "\n" +
        "Topic: " + topic + "\n\n" +
        "About the Topic:\n" +
        topicDetails[topic]
    );

    document.getElementById("preferenceForm").reset();

    displaySchedule();
}


document.getElementById("preferenceForm")
.addEventListener("submit",savePreference);


window.onload=function(){

    displaySchedule();

};

</script>

</body>
</html>
```

---

## Output (Case Study — Seminar Schedule Planner)
- On load, `displaySchedule()` builds the timetable for **Monday, Tuesday and Wednesday** from the `schedule` array, grouping rows by day with a `rowSpan` Day cell and showing times in 12-hour format (e.g. `8:00 a.m.`).
- Clicking a seminar name stores `preferredTopic`, `selectedSeminar` and `selectionStatus` in **`sessionStorage`** and shows an `alert()` with the day, seminar, topic and a short **"About the Topic"** description.
- The user fills in **Name, Preferred Day, Preferred Topic, Begin Time and End Time** and clicks **Save Preference**; `event.preventDefault()` stops the page reload, and an `alert()` is shown if the end time is not later than the begin time.
- On a valid submission, the new preference object is appended to the array in **`localStorage`** (stored as JSON) along with the individual `preferred*` keys, the selection is recorded in **`sessionStorage`**, a **"Preference Saved!"** alert summarises the choice, the form is reset, and the table re-renders with the saved session shown as a **green-highlighted row** under the chosen day.
- After a refresh or reopening the page, `window.onload` calls `displaySchedule()` again and the saved rows are rebuilt from `localStorage`, whereas the `sessionStorage` values disappear once the tab is closed.
- All stored keys and the JSON array can be viewed under **DevTools → Application → Local Storage / Session Storage**.

> **Screenshot:**
> ![Seminar Schedule Planner output](<Seminar Planner.png>)

---

## Result / Conclusion
The practical was completed successfully. The Web Storage API was used to store data in the browser: `localStorage` (`setItem`, `getItem`, `removeItem`) for data that outlives the session — a **Theme Preference** page that saves and restores a light/dark theme, and a **Seminar Schedule Planner** that stores an array of user preferences as JSON (`JSON.stringify` / `JSON.parse`) and re-renders them on every page load — and `sessionStorage` for tab-scoped values such as the currently selected seminar and topic, which last only for the browsing session.
