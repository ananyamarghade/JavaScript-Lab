# Experiment No. 11
**Student Name:** Ananya Marghade

**PRN:** 24070521004

**BATCH:** A1

**System File Path:** `"D:\Ananya\JavaScript LAB\EXP11\class scheduler.html"` | `"D:\Ananya\JavaScript LAB\EXP11\main.js"` | `"D:\Ananya\JavaScript LAB\EXP11\style.css"` | `"D:\Ananya\JavaScript LAB\EXP11\concert registration\index.html"` | `"D:\Ananya\JavaScript LAB\EXP11\concert registration\app.js"` | `"D:\Ananya\JavaScript LAB\EXP11\concert registration\styles.css"` | `"D:\Ananya\JavaScript LAB\EXP11\nagpur-project\index.html"` | `"D:\Ananya\JavaScript LAB\EXP11\rakhinest\index.html"` | `"D:\Ananya\JavaScript LAB\EXP11\rakhinest\shop.html"` | `"D:\Ananya\JavaScript LAB\EXP11\rakhinest\js\app.js"` | `"D:\Ananya\JavaScript LAB\EXP11\rakhinest\css\style.css"`

**GITHUB File Path:** `11 JavaScript timers and ES6 module/class scheduler.html` | `11 JavaScript timers and ES6 module/main.js` | `11 JavaScript timers and ES6 module/style.css` | `11 JavaScript timers and ES6 module/concert registration/index.html` | `11 JavaScript timers and ES6 module/concert registration/app.js` | `11 JavaScript timers and ES6 module/concert registration/styles.css` | `11 JavaScript timers and ES6 module/nagpur-project/index.html` | `11 JavaScript timers and ES6 module/rakhinest/index.html` | `11 JavaScript timers and ES6 module/rakhinest/shop.html` | `11 JavaScript timers and ES6 module/rakhinest/js/app.js` | `11 JavaScript timers and ES6 module/rakhinest/css/style.css`

---

## Experiment Title
Implement JavaScript Timers (`setInterval()` and `setTimeout()`) and ES6 Modules

## Software / Tools Required
1. Visual Studio Code (with the Live Server extension)
2. Google Chrome
3. HTML5
4. CSS3
5. JavaScript (ES6)
6. Google Fonts (CDN)

---

## Experiment Program Code

### Class Scheduler & Countdown — `class scheduler.html`
A student dashboard for scheduling classes. It has a live clock in the header, a large **countdown card** for the class that matters right now, four summary counters (Total, Upcoming, In Progress, Completed), an **Add / Edit a Class** form and a filterable schedule list. The page loads its logic with **`<script type="module" src="main.js">`**, so the script runs as an ES6 module (its own scope, strict mode, deferred until the document is parsed) and no global variables are created.

#### `11 JavaScript timers and ES6 module/class scheduler.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Class Scheduler and Countdown</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <span class="brand-mark">CS</span>
      <div>
        <h1>Class Scheduler</h1>
        <p>Student dashboard</p>
      </div>
    </div>
    <div class="clock">
      <span class="live"><i></i>Live</span>
      <div class="clock-text">
        <span class="clock-date" id="currentDate"></span>
        <span class="clock-time" id="currentTime"></span>
      </div>
    </div>
  </header>

  <main class="layout">
    <article class="card countdown-card" id="countdownCard" data-mode="none">
      <div class="countdown-info">
        <p class="eyebrow" id="countdownLabel">No upcoming classes</p>
        <h2 id="countdownTitle">You are all caught up</h2>
        <p class="countdown-meta" id="countdownMeta">Add a class to start a live countdown.</p>
        <p class="countdown-note" id="countdownNote"></p>
      </div>
      <div class="countdown-grid">
        <div class="time-box">
          <span id="cdDays">00</span>
          <small>Days</small>
        </div>
        <div class="time-box">
          <span id="cdHours">00</span>
          <small>Hours</small>
        </div>
        <div class="time-box">
          <span id="cdMinutes">00</span>
          <small>Minutes</small>
        </div>
        <div class="time-box">
          <span id="cdSeconds">00</span>
          <small>Seconds</small>
        </div>
      </div>
    </article>

    <section class="column column-left">
      <article class="card form-card">
        <div class="card-head">
          <h2 id="formTitle">Add a Class</h2>
          <p class="card-sub">Fill in the details to schedule a class.</p>
        </div>
        <form id="classForm" novalidate>
          <div class="field">
            <label for="name">Class Name</label>
            <input type="text" id="name" name="name" maxlength="60" placeholder="e.g. Web Technologies Lecture" autocomplete="off">
            <span class="error" id="nameError"></span>
          </div>

          <div class="field">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" maxlength="60" placeholder="e.g. JavaScript" autocomplete="off">
            <span class="error" id="subjectError"></span>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="date">Date</label>
              <input type="date" id="date" name="date">
              <span class="error" id="dateError"></span>
            </div>
            <div class="field">
              <label for="startTime">Start Time</label>
              <input type="time" id="startTime" name="startTime">
              <span class="error" id="startTimeError"></span>
            </div>
          </div>

          <div class="field">
            <label for="duration">Duration (minutes)</label>
            <input type="number" id="duration" name="duration" min="5" max="480" step="1" placeholder="e.g. 60">
            <span class="error" id="durationError"></span>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="submitBtn">Add Class</button>
            <button type="button" class="btn btn-ghost" id="cancelBtn" hidden>Cancel</button>
          </div>
        </form>
      </article>
    </section>

    <section class="column column-right">
      <div class="stats">
        <div class="stat">
          <span class="stat-value" id="statTotal">0</span>
          <span class="stat-label">Total Classes</span>
        </div>
        <div class="stat stat-upcoming">
          <span class="stat-value" id="statUpcoming">0</span>
          <span class="stat-label">Upcoming</span>
        </div>
        <div class="stat stat-ongoing">
          <span class="stat-value" id="statOngoing">0</span>
          <span class="stat-label">In Progress</span>
        </div>
        <div class="stat stat-completed">
          <span class="stat-value" id="statCompleted">0</span>
          <span class="stat-label">Completed</span>
        </div>
      </div>

      <article class="card list-card">
        <div class="card-head list-head">
          <div>
            <h2>Your Schedule</h2>
            <p class="card-sub">Sorted by date and start time.</p>
          </div>
          <div class="filters" role="group" aria-label="Filter classes">
            <button type="button" class="filter-btn active" data-filter="all" aria-pressed="true">All</button>
            <button type="button" class="filter-btn" data-filter="upcoming" aria-pressed="false">Upcoming</button>
            <button type="button" class="filter-btn" data-filter="completed" aria-pressed="false">Completed</button>
          </div>
        </div>

        <ul class="class-list" id="classList"></ul>

        <div class="empty-state" id="emptyState" hidden>
          <div class="empty-icon">0</div>
          <h3 id="emptyTitle">No classes yet</h3>
          <p id="emptyText">Use the form to add your first class.</p>
        </div>
      </article>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-inner">
      <span class="footer-label">Designed By</span>
      <strong class="footer-name">Ananya Marghade</strong>
      <div class="footer-meta">
        <span>PRN 24070521004</span><br>
        <span>Batch A1</span>
      </div>
    </div>
  </footer>

  <div class="toast-area" id="toastArea" aria-live="polite"></div>

  <script type="module" src="main.js"></script>
</body>
</html>
```

### Scheduler Logic — `main.js`
Contains all the behaviour of the dashboard, written with ES6 features (`const`/`let`, arrow functions, template literals, destructuring, spread, default parameters, `Array.prototype` methods).

- **Timers:** `startInterval(tick, 1000)` calls `tick()` once immediately and then every second with **`setInterval()`**; each tick refreshes the live clock and the countdown. **`setTimeout()`** (wrapped as `runAfter()`) removes the "tick" animation class from the seconds box after 300 ms and auto-hides each toast notification (hide at 3600 ms, remove at 4100 ms).
- **Status engine:** `getStatus()` compares `Date.now()` with each class's start and end time and returns `upcoming`, `soon` (starts within 30 minutes), `ongoing` or `completed`. `getFocusClass()` picks the class the countdown should follow — the ongoing class (counting down to its end) or otherwise the next class to start.
- **Efficient re-rendering:** a *signature* string of `id:status` pairs is compared on every tick, so the list and counters are rebuilt only when some class actually changes status, and a toast is shown for each change (starting soon, started, finished).
- **Validation:** name and subject must be 2–60 characters, the date must be a real calendar date, the time must match `HH:MM`, the duration must be a whole number between 5 and 480 minutes, a new class cannot start in the past, and a class cannot overlap another one. Errors appear under the field and the first invalid field is focused.
- **CRUD + persistence:** classes can be added, edited and deleted (with a confirm prompt) and are saved as JSON in `localStorage` under the key `classScheduler.classes`. Stored data is validated while loading, and a `storage` event listener keeps several open tabs in sync.

#### `11 JavaScript timers and ES6 module/main.js`
```js
const STORAGE_KEY = "classScheduler.classes";
const SOON_MINUTES = 30;

const STATUS_LABELS = {
  upcoming: "Upcoming",
  soon: "Starting Soon",
  ongoing: "Ongoing",
  completed: "Completed"
};

const byId = (id) => document.getElementById(id);

const elements = {
  currentDate: byId("currentDate"),
  currentTime: byId("currentTime"),
  countdownCard: byId("countdownCard"),
  countdownLabel: byId("countdownLabel"),
  countdownTitle: byId("countdownTitle"),
  countdownMeta: byId("countdownMeta"),
  countdownNote: byId("countdownNote"),
  days: byId("cdDays"),
  hours: byId("cdHours"),
  minutes: byId("cdMinutes"),
  seconds: byId("cdSeconds"),
  statTotal: byId("statTotal"),
  statUpcoming: byId("statUpcoming"),
  statOngoing: byId("statOngoing"),
  statCompleted: byId("statCompleted"),
  classList: byId("classList"),
  emptyState: byId("emptyState"),
  emptyTitle: byId("emptyTitle"),
  emptyText: byId("emptyText"),
  filterButtons: document.querySelectorAll(".filter-btn"),
  form: byId("classForm"),
  formTitle: byId("formTitle"),
  submitBtn: byId("submitBtn"),
  cancelBtn: byId("cancelBtn"),
  toastArea: byId("toastArea"),
  fields: {
    name: byId("name"),
    subject: byId("subject"),
    date: byId("date"),
    startTime: byId("startTime"),
    duration: byId("duration")
  },
  errors: {
    name: byId("nameError"),
    subject: byId("subjectError"),
    date: byId("dateError"),
    startTime: byId("startTimeError"),
    duration: byId("durationError")
  }
};

let classes = [];
let editingId = null;
let activeFilter = "all";
let lastSignature = "";
let knownStatuses = {};
let lastSecondValue = null;

function loadClasses() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter(
      (item) =>
        item !== null &&
        typeof item === "object" &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.subject === "string" &&
        typeof item.date === "string" &&
        typeof item.startTime === "string" &&
        typeof item.duration === "number"
    );
  } catch (error) {
    return [];
  }
}

function saveClasses(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (error) {
    return false;
  }
}

function startInterval(callback, milliseconds) {
  callback();
  return setInterval(callback, milliseconds);
}

function runAfter(callback, milliseconds) {
  return setTimeout(callback, milliseconds);
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function splitDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}

function formatClock(date) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function formatTime(date) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatLongDate(date) {
  return date.toLocaleDateString([], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function formatShortDate(date) {
  return date.toLocaleDateString([], {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function formatDuration(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0 && minutes > 0) {
    return hours + " hr " + minutes + " min";
  }
  if (hours > 0) {
    return hours + " hr";
  }
  return minutes + " min";
}

function toDateInputValue(date) {
  return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
}

function createId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function getStartDate(cls) {
  const [year, month, day] = cls.date.split("-").map(Number);
  const [hours, minutes] = cls.startTime.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes, 0, 0);
}

function getEndDate(cls) {
  return new Date(getStartDate(cls).getTime() + cls.duration * 60000);
}

function getStatus(cls, now) {
  const current = now.getTime();
  const start = getStartDate(cls).getTime();
  const end = getEndDate(cls).getTime();

  if (current >= end) {
    return "completed";
  }
  if (current >= start) {
    return "ongoing";
  }
  if (start - current <= SOON_MINUTES * 60000) {
    return "soon";
  }
  return "upcoming";
}

function sortClasses(list) {
  return [...list].sort((a, b) => getStartDate(a) - getStartDate(b));
}

function getFocusClass(list, now) {
  const sorted = sortClasses(list);

  const ongoing = sorted.find((cls) => getStatus(cls, now) === "ongoing");
  if (ongoing) {
    return { mode: "ongoing", cls: ongoing, target: getEndDate(ongoing) };
  }

  const next = sorted.find((cls) => getStartDate(cls).getTime() > now.getTime());
  if (next) {
    return { mode: "next", cls: next, target: getStartDate(next) };
  }

  return { mode: "none", cls: null, target: null };
}

function countByStatus(list, now) {
  const counts = { total: list.length, upcoming: 0, ongoing: 0, completed: 0 };

  list.forEach((cls) => {
    const status = getStatus(cls, now);
    if (status === "completed") {
      counts.completed += 1;
    } else if (status === "ongoing") {
      counts.ongoing += 1;
    } else {
      counts.upcoming += 1;
    }
  });

  return counts;
}

function isRealDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function validateClass(data, list, currentEditingId) {
  const errors = {};
  const name = data.name.trim();
  const subject = data.subject.trim();

  if (!name) {
    errors.name = "Class name is required.";
  } else if (name.length < 2) {
    errors.name = "Class name must be at least 2 characters.";
  } else if (name.length > 60) {
    errors.name = "Class name cannot exceed 60 characters.";
  }

  if (!subject) {
    errors.subject = "Subject is required.";
  } else if (subject.length < 2) {
    errors.subject = "Subject must be at least 2 characters.";
  } else if (subject.length > 60) {
    errors.subject = "Subject cannot exceed 60 characters.";
  }

  if (!data.date) {
    errors.date = "Please choose a date.";
  } else if (!isRealDate(data.date)) {
    errors.date = "Enter a valid date.";
  }

  if (!data.startTime) {
    errors.startTime = "Please choose a start time.";
  } else if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(data.startTime)) {
    errors.startTime = "Enter a valid time.";
  }

  const duration = Number(data.duration);
  if (data.duration === "") {
    errors.duration = "Duration is required.";
  } else if (!Number.isInteger(duration)) {
    errors.duration = "Duration must be a whole number of minutes.";
  } else if (duration < 5 || duration > 480) {
    errors.duration = "Duration must be between 5 and 480 minutes.";
  }

  if (errors.date || errors.startTime || errors.duration) {
    return errors;
  }

  const candidate = { date: data.date, startTime: data.startTime, duration: duration };
  const start = getStartDate(candidate);
  const end = getEndDate(candidate);

  if (!currentEditingId && start.getTime() <= Date.now()) {
    if (data.date < toDateInputValue(new Date())) {
      errors.date = "The date cannot be in the past.";
    } else {
      errors.startTime = "Start time must be later than the current time.";
    }
    return errors;
  }

  const conflict = list.find((other) => {
    if (other.id === currentEditingId) {
      return false;
    }
    return start < getEndDate(other) && end > getStartDate(other);
  });

  if (conflict) {
    errors.startTime = 'This time overlaps with "' + conflict.name + '".';
  }

  return errors;
}

function create(tag, className, text) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text !== undefined) {
    node.textContent = text;
  }
  return node;
}

function renderClock(now) {
  elements.currentDate.textContent = formatLongDate(now);
  elements.currentTime.textContent = formatClock(now);
}

function renderCountdown(focus, now) {
  const remaining = focus.target ? focus.target.getTime() - now.getTime() : 0;
  const parts = splitDuration(remaining);
  let mode = focus.mode;

  if (mode === "next" && remaining <= SOON_MINUTES * 60000) {
    mode = "soon";
  }

  elements.countdownCard.dataset.mode = mode;

  if (!focus.cls) {
    elements.countdownLabel.textContent = "No upcoming classes";
    elements.countdownTitle.textContent = "You are all caught up";
    elements.countdownMeta.textContent = "Add a class to start a live countdown.";
    elements.countdownNote.textContent = "";
  } else {
    const start = getStartDate(focus.cls);
    const end = getEndDate(focus.cls);

    if (mode === "ongoing") {
      elements.countdownLabel.textContent = "In progress - ends in";
      elements.countdownNote.textContent =
        "Started at " + formatTime(start) + " and ends at " + formatTime(end) + ".";
    } else if (mode === "soon") {
      elements.countdownLabel.textContent = "Starting soon - begins in";
      elements.countdownNote.textContent =
        "Runs for " + formatDuration(focus.cls.duration) + " and ends at " + formatTime(end) + ".";
    } else {
      elements.countdownLabel.textContent = "Next class begins in";
      elements.countdownNote.textContent =
        "Runs for " + formatDuration(focus.cls.duration) + " and ends at " + formatTime(end) + ".";
    }

    elements.countdownTitle.textContent = focus.cls.name;
    elements.countdownMeta.textContent =
      focus.cls.subject + " | " + formatShortDate(start) + " | " + formatTime(start);
  }

  elements.days.textContent = pad(parts.days);
  elements.hours.textContent = pad(parts.hours);
  elements.minutes.textContent = pad(parts.minutes);
  elements.seconds.textContent = pad(parts.seconds);

  if (parts.seconds !== lastSecondValue) {
    lastSecondValue = parts.seconds;
    const box = elements.seconds.parentElement;
    box.classList.add("tick");
    runAfter(() => box.classList.remove("tick"), 300);
  }
}

function renderStats(counts) {
  elements.statTotal.textContent = counts.total;
  elements.statUpcoming.textContent = counts.upcoming;
  elements.statOngoing.textContent = counts.ongoing;
  elements.statCompleted.textContent = counts.completed;
}

function buildItem(cls, now, index) {
  const status = getStatus(cls, now);
  const start = getStartDate(cls);
  const end = getEndDate(cls);

  const item = create("li", "class-item status-" + status);
  item.style.animationDelay = Math.min(index, 8) * 50 + "ms";

  const dateBlock = create("div", "date-block");
  dateBlock.append(
    create("span", "date-day", String(start.getDate())),
    create("span", "date-month", start.toLocaleDateString([], { month: "short" }))
  );

  const body = create("div", "item-body");
  const top = create("div", "item-top");
  top.append(
    create("h3", "item-title", cls.name),
    create("span", "badge badge-" + status, STATUS_LABELS[status])
  );

  const subject = create("p", "item-subject", cls.subject);

  const meta = create("ul", "item-meta");
  meta.append(
    create("li", "", formatShortDate(start)),
    create("li", "", formatTime(start) + " - " + formatTime(end)),
    create("li", "", formatDuration(cls.duration))
  );

  body.append(top, subject, meta);

  const actions = create("div", "item-actions");

  const editButton = create("button", "btn btn-small btn-ghost", "Edit");
  editButton.type = "button";
  editButton.setAttribute("aria-label", "Edit " + cls.name);
  editButton.addEventListener("click", () => startEdit(cls.id));

  const deleteButton = create("button", "btn btn-small btn-danger", "Delete");
  deleteButton.type = "button";
  deleteButton.setAttribute("aria-label", "Delete " + cls.name);
  deleteButton.addEventListener("click", () => removeClass(cls.id));

  actions.append(editButton, deleteButton);
  item.append(dateBlock, body, actions);

  return item;
}

function renderList(list, filter, now) {
  elements.classList.replaceChildren();

  const visible = sortClasses(list).filter((cls) => {
    const status = getStatus(cls, now);
    if (filter === "upcoming") {
      return status !== "completed";
    }
    if (filter === "completed") {
      return status === "completed";
    }
    return true;
  });

  if (visible.length === 0) {
    if (list.length === 0) {
      elements.emptyTitle.textContent = "No classes yet";
      elements.emptyText.textContent = "Use the form to add your first class.";
    } else if (filter === "upcoming") {
      elements.emptyTitle.textContent = "No upcoming classes";
      elements.emptyText.textContent = "Everything on your schedule is completed. Add a new class to continue.";
    } else {
      elements.emptyTitle.textContent = "No completed classes";
      elements.emptyText.textContent = "Classes will appear here once they finish.";
    }
    elements.emptyState.hidden = false;
    return;
  }

  elements.emptyState.hidden = true;
  visible.forEach((cls, index) => {
    elements.classList.appendChild(buildItem(cls, now, index));
  });
}

function readForm() {
  return {
    name: elements.fields.name.value.trim(),
    subject: elements.fields.subject.value.trim(),
    date: elements.fields.date.value,
    startTime: elements.fields.startTime.value,
    duration: elements.fields.duration.value.trim()
  };
}

function showErrors(errors) {
  Object.keys(elements.fields).forEach((key) => {
    const message = errors[key] || "";
    elements.errors[key].textContent = message;
    elements.fields[key].classList.toggle("invalid", Boolean(message));
    elements.fields[key].setAttribute("aria-invalid", message ? "true" : "false");
  });
}

function clearFieldError(key) {
  elements.errors[key].textContent = "";
  elements.fields[key].classList.remove("invalid");
  elements.fields[key].setAttribute("aria-invalid", "false");
}

function focusFirstError(errors) {
  const firstKey = Object.keys(elements.fields).find((key) => errors[key]);
  if (firstKey) {
    elements.fields[firstKey].focus();
  }
}

function fillForm(cls) {
  elements.fields.name.value = cls.name;
  elements.fields.subject.value = cls.subject;
  elements.fields.date.value = cls.date;
  elements.fields.startTime.value = cls.startTime;
  elements.fields.duration.value = cls.duration;
}

function setEditMode(isEditing) {
  elements.formTitle.textContent = isEditing ? "Edit Class" : "Add a Class";
  elements.submitBtn.textContent = isEditing ? "Update Class" : "Add Class";
  elements.cancelBtn.hidden = !isEditing;

  if (isEditing) {
    elements.fields.date.removeAttribute("min");
  } else {
    elements.fields.date.min = toDateInputValue(new Date());
  }
}

function resetForm() {
  elements.form.reset();
  showErrors({});
  setEditMode(false);
}

function showToast(message, type = "info") {
  const toast = create("div", "toast toast-" + type, message);
  elements.toastArea.appendChild(toast);
  runAfter(() => toast.classList.add("hide"), 3600);
  runAfter(() => toast.remove(), 4100);
}

function buildSignature(now) {
  return classes.map((cls) => cls.id + ":" + getStatus(cls, now)).join("|");
}

function syncStatuses(now) {
  knownStatuses = {};
  classes.forEach((cls) => {
    knownStatuses[cls.id] = getStatus(cls, now);
  });
}

function announceChanges(now) {
  classes.forEach((cls) => {
    const current = getStatus(cls, now);
    const previous = knownStatuses[cls.id];

    if (!previous || previous === current) {
      return;
    }

    if (current === "soon") {
      showToast('"' + cls.name + '" starts in less than ' + SOON_MINUTES + " minutes.", "warning");
    } else if (current === "ongoing") {
      showToast('"' + cls.name + '" has started.', "success");
    } else if (current === "completed") {
      showToast('"' + cls.name + '" has finished.', "info");
    }
  });

  syncStatuses(now);
}

function renderAll(now) {
  renderStats(countByStatus(classes, now));
  renderList(classes, activeFilter, now);
}

function refresh() {
  const now = new Date();
  syncStatuses(now);
  lastSignature = buildSignature(now);
  renderAll(now);
  renderCountdown(getFocusClass(classes, now), now);
}

function tick() {
  const now = new Date();
  renderClock(now);
  renderCountdown(getFocusClass(classes, now), now);

  const signature = buildSignature(now);
  if (signature !== lastSignature) {
    announceChanges(now);
    lastSignature = signature;
    renderAll(now);
  }
}

function persist() {
  if (!saveClasses(classes)) {
    showToast("Could not save to browser storage.", "error");
  }
}

function startEdit(id) {
  const cls = classes.find((item) => item.id === id);
  if (!cls) {
    return;
  }
  editingId = id;
  fillForm(cls);
  setEditMode(true);
  showErrors({});
  elements.form.scrollIntoView({ behavior: "smooth", block: "center" });
  elements.fields.name.focus({ preventScroll: true });
}

function cancelEdit() {
  editingId = null;
  resetForm();
}

function removeClass(id) {
  const cls = classes.find((item) => item.id === id);
  if (!cls) {
    return;
  }
  if (!window.confirm('Delete "' + cls.name + '"?')) {
    return;
  }
  classes = classes.filter((item) => item.id !== id);
  if (editingId === id) {
    cancelEdit();
  }
  persist();
  refresh();
  showToast('"' + cls.name + '" was deleted.', "info");
}

function handleSubmit(event) {
  event.preventDefault();

  const data = readForm();
  const errors = validateClass(data, classes, editingId);
  showErrors(errors);

  if (Object.keys(errors).length > 0) {
    focusFirstError(errors);
    return;
  }

  const record = {
    name: data.name,
    subject: data.subject,
    date: data.date,
    startTime: data.startTime,
    duration: Number(data.duration)
  };

  if (editingId) {
    classes = classes.map((cls) => (cls.id === editingId ? { ...cls, ...record } : cls));
    showToast('"' + record.name + '" was updated.', "success");
  } else {
    classes.push({ id: createId(), ...record });
    showToast('"' + record.name + '" was added to your schedule.', "success");
  }

  editingId = null;
  persist();
  resetForm();
  refresh();
}

elements.form.addEventListener("submit", handleSubmit);
elements.cancelBtn.addEventListener("click", cancelEdit);

Object.keys(elements.fields).forEach((key) => {
  elements.fields[key].addEventListener("input", () => clearFieldError(key));
});

elements.filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    elements.filterButtons.forEach((other) => {
      const isActive = other === button;
      other.classList.toggle("active", isActive);
      other.setAttribute("aria-pressed", String(isActive));
    });
    renderList(classes, activeFilter, new Date());
  });
});

window.addEventListener("storage", (event) => {
  if (event.key === STORAGE_KEY) {
    classes = loadClasses();
    refresh();
  }
});

classes = loadClasses();
resetForm();
startInterval(tick, 1000);
```

### Stylesheet — `style.css`
Responsive layout and the visual design for the dashboard, built on CSS variables. The countdown card changes its look with its `data-mode` (`next`, `soon`, `ongoing`, `none`), and each status has its own badge and list-item colour.

#### `11 JavaScript timers and ES6 module/style.css`
```css
:root {
    --bg: #f4f7fc;
    --surface: #ffffff;
    --text: #1e293b;
    --muted: #64748b;
    --border: #e2e8f0;
    --primary: #4f46e5;
    --primary-dark: #4338ca;
    --primary-soft: #eef2ff;
    --success: #059669;
    --success-soft: #d1fae5;
    --warning: #d97706;
    --warning-soft: #fef3c7;
    --danger: #dc2626;
    --danger-soft: #fee2e2;
    --info: #0284c7;
    --info-soft: #e0f2fe;
    --slate-soft: #f1f5f9;
    --radius: 20px;
    --shadow: 0 12px 32px rgba(30, 41, 59, 0.07);
    --shadow-small: 0 4px 14px rgba(30, 41, 59, 0.08);
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  [hidden] {
    display: none !important;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: "Plus Jakarta Sans", "Segoe UI", system-ui, -apple-system, Roboto, Arial, sans-serif;
    color: var(--text);
    background:
      radial-gradient(circle at 0% 0%, #e0e7ff 0, transparent 40%),
      radial-gradient(circle at 100% 0%, #cffafe 0, transparent 35%),
      radial-gradient(circle at 50% 100%, #ede9fe 0, transparent 40%),
      var(--bg);
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
  }
  
  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 26px 20px 10px;
    animation: fadeDown 0.6s ease both;
  }
  
  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  
  .brand-mark {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 15px;
    color: #ffffff;
    font-weight: 800;
    letter-spacing: 1px;
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    box-shadow: 0 10px 22px rgba(79, 70, 229, 0.35);
  }
  
  .brand h1 {
    font-size: 1.4rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.3px;
  }
  
  .brand p {
    font-size: 0.85rem;
    color: var(--muted);
  }
  
  .clock {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: var(--shadow-small);
    backdrop-filter: blur(8px);
  }
  
  .live {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--success);
    background: var(--success-soft);
    padding: 4px 10px;
    border-radius: 999px;
  }
  
  .live i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--success);
    animation: dotPulse 1.3s ease infinite;
  }
  
  .clock-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .clock-date {
    font-size: 0.8rem;
    color: var(--muted);
    font-weight: 500;
  }
  
  .clock-time {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
    font-variant-numeric: tabular-nums;
    line-height: 1.2;
  }
  
  .layout {
    display: grid;
    grid-template-columns: minmax(320px, 400px) 1fr;
    gap: 24px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 14px 20px 40px;
    align-items: start;
    flex: 1;
  }
  
  .column {
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-width: 0;
  }
  
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 26px;
    animation: fadeUp 0.6s ease both;
  }
  
  .card-head {
    margin-bottom: 20px;
  }
  
  .card-head h2 {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: -0.2px;
  }
  
  .card-sub {
    font-size: 0.82rem;
    color: var(--muted);
    margin-top: 2px;
  }
  
  .countdown-card {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 32px;
    color: #ffffff;
    border: none;
    padding: 34px 36px;
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.25);
    transition: background 0.5s ease, box-shadow 0.5s ease;
  }
  
  .countdown-card::before {
    content: "";
    position: absolute;
    width: 320px;
    height: 320px;
    left: -110px;
    bottom: -190px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
  
  .countdown-card::after {
    content: "";
    position: absolute;
    width: 260px;
    height: 260px;
    right: -80px;
    top: -110px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    pointer-events: none;
  }
  
  .countdown-card[data-mode="soon"] {
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    box-shadow: 0 20px 40px rgba(239, 68, 68, 0.25);
  }
  
  .countdown-card[data-mode="ongoing"] {
    background: linear-gradient(135deg, #059669, #0ea5e9);
    box-shadow: 0 20px 40px rgba(5, 150, 105, 0.25);
  }
  
  .countdown-card[data-mode="none"] {
    background: linear-gradient(135deg, #64748b, #94a3b8);
    box-shadow: 0 20px 40px rgba(100, 116, 139, 0.2);
  }
  
  .countdown-info {
    position: relative;
    z-index: 1;
    min-width: 0;
  }
  
  .eyebrow {
    display: inline-block;
    font-size: 0.74rem;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.2);
  }
  
  .countdown-card h2 {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    margin-top: 12px;
    line-height: 1.2;
    overflow-wrap: anywhere;
  }
  
  .countdown-meta {
    font-size: 0.98rem;
    font-weight: 500;
    opacity: 0.95;
    margin-top: 6px;
    overflow-wrap: anywhere;
  }
  
  .countdown-note {
    margin-top: 10px;
    font-size: 0.85rem;
    opacity: 0.88;
    min-height: 1.3em;
  }
  
  .countdown-grid {
    display: grid;
    grid-template-columns: repeat(4, 104px);
    gap: 16px;
    position: relative;
    z-index: 1;
  }
  
  .time-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 4px 12px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(6px);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
  }
  
  .time-box:not(:last-child)::after {
    content: ":";
    position: absolute;
    right: -12px;
    top: 16px;
    font-size: 1.8rem;
    font-weight: 800;
    opacity: 0.7;
    line-height: 1.1;
  }
  
  .time-box span {
    font-size: 2.6rem;
    font-weight: 800;
    line-height: 1.1;
    font-variant-numeric: tabular-nums;
  }
  
  .time-box small {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    opacity: 0.9;
    margin-top: 4px;
  }
  
  .time-box.tick {
    animation: tickPulse 0.3s ease;
  }
  
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 12px;
    min-width: 0;
  }
  
  .field label {
    font-size: 0.84rem;
    font-weight: 700;
  }
  
  .field input {
    width: 100%;
    font: inherit;
    font-size: 0.95rem;
    color: var(--text);
    background: #f8fafc;
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 12px 14px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }
  
  .field input:hover {
    border-color: #cbd5e1;
  }
  
  .field input:focus {
    outline: none;
    background: #ffffff;
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
  }
  
  .field input.invalid {
    border-color: var(--danger);
    background: #fff7f7;
  }
  
  .error {
    min-height: 1.1em;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--danger);
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  
  .form-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 6px;
  }
  
  .btn {
    font: inherit;
    font-weight: 700;
    font-size: 0.92rem;
    border: none;
    border-radius: 12px;
    padding: 13px 22px;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
  }
  
  .btn:active {
    transform: scale(0.97);
  }
  
  .btn:focus-visible,
  .filter-btn:focus-visible {
    outline: 3px solid rgba(79, 70, 229, 0.4);
    outline-offset: 2px;
  }
  
  .btn-primary {
    flex: 1;
    color: #ffffff;
    background: linear-gradient(135deg, #4f46e5, #6d28d9);
    box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 26px rgba(79, 70, 229, 0.38);
  }
  
  .btn-ghost {
    color: var(--text);
    background: var(--slate-soft);
  }
  
  .btn-ghost:hover {
    background: #e2e8f0;
  }
  
  .btn-danger {
    color: var(--danger);
    background: var(--danger-soft);
  }
  
  .btn-danger:hover {
    background: #fecaca;
  }
  
  .btn-small {
    padding: 8px 16px;
    font-size: 0.8rem;
    border-radius: 10px;
    flex: none;
  }
  
  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  
  .stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 16px 18px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-top: 4px solid var(--primary);
    border-radius: 16px;
    box-shadow: var(--shadow-small);
    animation: fadeUp 0.6s ease both;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .stat:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow);
  }
  
  .stat-upcoming {
    border-top-color: var(--info);
  }
  
  .stat-ongoing {
    border-top-color: var(--success);
  }
  
  .stat-completed {
    border-top-color: var(--muted);
  }
  
  .stat-value {
    font-size: 1.9rem;
    font-weight: 800;
    line-height: 1.2;
  }
  
  .stat-label {
    font-size: 0.78rem;
    color: var(--muted);
    font-weight: 600;
  }
  
  .list-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  
  .filters {
    display: inline-flex;
    padding: 4px;
    gap: 4px;
    background: var(--slate-soft);
    border-radius: 12px;
  }
  
  .filter-btn {
    font: inherit;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--muted);
    background: transparent;
    border: none;
    border-radius: 9px;
    padding: 7px 14px;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }
  
  .filter-btn:hover {
    color: var(--text);
  }
  
  .filter-btn.active {
    color: var(--primary);
    background: #ffffff;
    box-shadow: var(--shadow-small);
  }
  
  .class-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  
  .class-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 18px;
    align-items: center;
    padding: 16px 18px;
    border: 1px solid var(--border);
    border-left: 5px solid #c7d2fe;
    border-radius: 16px;
    background: #ffffff;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    animation: slideIn 0.45s ease both;
  }
  
  .class-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-small);
  }
  
  .class-item.status-completed {
    background: #f8fafc;
    border-left-color: #cbd5e1;
  }
  
  .class-item.status-completed .item-title,
  .class-item.status-completed .item-subject {
    color: var(--muted);
  }
  
  .class-item.status-ongoing {
    border-color: #6ee7b7;
    border-left-color: var(--success);
    background: #f0fdf9;
  }
  
  .class-item.status-soon {
    border-color: #fcd34d;
    border-left-color: var(--warning);
    background: #fffbeb;
  }
  
  .date-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 66px;
    border-radius: 14px;
    background: var(--primary-soft);
    color: var(--primary);
  }
  
  .status-completed .date-block {
    background: var(--slate-soft);
    color: var(--muted);
  }
  
  .status-ongoing .date-block {
    background: var(--success-soft);
    color: var(--success);
  }
  
  .status-soon .date-block {
    background: var(--warning-soft);
    color: var(--warning);
  }
  
  .date-day {
    font-size: 1.45rem;
    font-weight: 800;
    line-height: 1.1;
  }
  
  .date-month {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .item-body {
    min-width: 0;
  }
  
  .item-top {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px 10px;
  }
  
  .item-title {
    font-size: 1.05rem;
    font-weight: 700;
    overflow-wrap: anywhere;
  }
  
  .item-subject {
    font-size: 0.88rem;
    color: var(--primary);
    font-weight: 600;
    margin-top: 1px;
    overflow-wrap: anywhere;
  }
  
  .item-meta {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
    margin-top: 8px;
    font-size: 0.82rem;
    color: var(--muted);
  }
  
  .item-meta li::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-right: 6px;
    border-radius: 50%;
    background: #cbd5e1;
    vertical-align: middle;
  }
  
  .item-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 999px;
    white-space: nowrap;
  }
  
  .badge::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
  }
  
  .badge-upcoming {
    color: var(--info);
    background: var(--info-soft);
  }
  
  .badge-soon {
    color: var(--warning);
    background: var(--warning-soft);
  }
  
  .badge-soon::before,
  .badge-ongoing::before {
    animation: dotPulse 1.3s ease infinite;
  }
  
  .badge-ongoing {
    color: var(--success);
    background: var(--success-soft);
  }
  
  .badge-completed {
    color: var(--muted);
    background: var(--slate-soft);
  }
  
  .empty-state {
    text-align: center;
    padding: 40px 16px;
    color: var(--muted);
    border: 2px dashed var(--border);
    border-radius: 16px;
    animation: fadeUp 0.5s ease both;
  }
  
  .empty-icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    margin: 0 auto 14px;
    border-radius: 50%;
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--primary);
    background: var(--primary-soft);
  }
  
  .empty-state h3 {
    color: var(--text);
    font-size: 1.05rem;
    margin-bottom: 4px;
  }
  
  .footer {
    width: 100%;
    margin-top: auto;
    padding: 28px 20px;
    text-align: center;
    background: rgba(255, 255, 255, 0.7);
    border-top: 1px solid var(--border);
    backdrop-filter: blur(8px);
  }
  
  .footer-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  
  .footer-label {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--muted);
  }
  
  .footer-name {
    font-size: 1.15rem;
    font-weight: 800;
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  .footer-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px 12px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--muted);
  }
  
  .footer-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #cbd5e1;
  }
  
  .toast-area {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 50;
    max-width: calc(100vw - 40px);
  }
  
  .toast {
    padding: 13px 18px;
    min-width: 240px;
    max-width: 360px;
    font-size: 0.88rem;
    font-weight: 600;
    background: #ffffff;
    color: var(--text);
    border-left: 5px solid var(--primary);
    border-radius: 12px;
    box-shadow: 0 12px 30px rgba(30, 41, 59, 0.18);
    animation: toastIn 0.35s ease both;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  
  .toast-success {
    border-left-color: var(--success);
  }
  
  .toast-warning {
    border-left-color: var(--warning);
  }
  
  .toast-error {
    border-left-color: var(--danger);
  }
  
  .toast.hide {
    opacity: 0;
    transform: translateX(30px);
  }
  
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-14px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes toastIn {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes tickPulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.07);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes dotPulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.5);
    }
  }
  
  @media (max-width: 1060px) {
    .countdown-card {
      grid-template-columns: 1fr;
      gap: 26px;
    }
  
    .countdown-grid {
      grid-template-columns: repeat(4, 1fr);
      max-width: 520px;
    }
  }
  
  @media (max-width: 960px) {
    .layout {
      grid-template-columns: 1fr;
    }
  
    .column-left {
      order: 2;
    }
  
    .stats {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 640px) {
    .topbar {
      padding: 18px 14px 4px;
    }
  
    .clock {
      width: 100%;
      justify-content: space-between;
    }
  
    .layout {
      padding: 14px 14px 32px;
      gap: 18px;
    }
  
    .column {
      gap: 18px;
    }
  
    .card {
      padding: 18px;
    }
  
    .countdown-card {
      padding: 24px 18px;
    }
  
    .countdown-card h2 {
      font-size: 1.45rem;
    }
  
    .countdown-grid {
      gap: 10px;
    }
  
    .time-box {
      padding: 14px 2px 10px;
    }
  
    .time-box:not(:last-child)::after {
      display: none;
    }
  
    .time-box span {
      font-size: 1.7rem;
    }
  
    .class-item {
      grid-template-columns: auto 1fr;
      gap: 14px;
    }
  
    .item-actions {
      grid-column: 1 / -1;
      flex-direction: row;
    }
  
    .item-actions .btn {
      flex: 1;
    }
  
    .toast-area {
      left: 14px;
      right: 14px;
      bottom: 14px;
      max-width: none;
    }
  
    .toast {
      max-width: none;
    }
  }
  
  @media (max-width: 440px) {
    .form-row {
      grid-template-columns: 1fr;
      gap: 0;
    }
  
    .countdown-grid {
      gap: 6px;
    }
  
    .time-box span {
      font-size: 1.4rem;
    }
  
    .time-box small {
      font-size: 0.6rem;
      letter-spacing: 0.6px;
    }
  
    .list-head {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .live {
      display: none;
    }
  
    .clock {
      justify-content: flex-end;
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
```

---

## Output (Class Scheduler)
- On first load the header shows a **Live** badge with today's date and a clock that ticks every second. The countdown card reads **"No upcoming classes — You are all caught up"** with `00 : 00 : 00 : 00`, all four counters show `0`, and the list shows the empty state **"No classes yet"**.
- The user enters a **Class Name**, **Subject**, **Date**, **Start Time** and **Duration (minutes)** and clicks **Add Class**. Any invalid field gets an inline error message (for example a past date, a duration outside 5–480 minutes, or *"This time overlaps with ..."*), and the error clears as soon as the user starts typing in that field.
- A valid class is added to **Your Schedule**, sorted by date and start time, and shown with a date block, a status badge (**Upcoming**, **Starting Soon**, **Ongoing** or **Completed**), the time range and the duration. A success toast appears and the data is saved in `localStorage`.
- The countdown card automatically follows the right class: *"Next class begins in"* for an upcoming class, *"Starting soon - begins in"* once it is within 30 minutes, and *"In progress - ends in"* while the class is running. The seconds box animates on every tick.
- Toast notifications are raised by the timer when a class moves to **starting soon**, **started** or **finished**, and the counters update on their own without any page refresh.
- **Edit** loads a class back into the form (the heading changes to *Edit Class* and a **Cancel** button appears); **Delete** removes it after confirmation. The **All / Upcoming / Completed** buttons filter the list.
- After a page refresh or after reopening the browser, the saved classes are loaded again from `localStorage` and the countdown continues from the current time.
- The page must be opened through a local server such as **VS Code Live Server**, because browsers block ES module scripts (`type="module"`) on `file://` addresses.

> **Screenshot:**
> ![Class Scheduler output](<class scheduler.png>)

---

## Case Study Title
Interactive Multi-Section Websites Built with Modern JavaScript — AFTERHOURS Concert Registration, My City – Nagpur and RakhiNest

## Case Study Program Code

### 1. AFTERHOURS 2026 — Concert Registration — `concert registration/`
A single-page festival website (hero, features, stages, lineup, filterable timetable, pass pricing, registration form, FAQs). In `app.js` everything runs inside a `DOMContentLoaded` handler in strict mode, using `const`, arrow functions and template literals. The pass section works as a price calculator: choosing **General (₹2,499)** or **VIP (₹5,999)** and the quantity (1–10) updates the subtotal, the flat ₹150 eco fee and the total, formatted in Indian Rupees with `toLocaleString('en-IN')`. The registration form validates name, email, mobile number, age (18+), city, number of passes and the terms checkbox, scrolls to and focuses the first error, and on success opens a **digital pass modal** with a generated booking reference such as `AFH-IND-VIP-XXXXX` and a **Print Pass** button.

#### `11 JavaScript timers and ES6 module/concert registration/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="AFTERHOURS 2026 — Feel the Sound. Live the Moment. India's premier international music and audiovisual concert gathering.">
  <title>AFTERHOURS 2026 — Feel the Sound. Live the Moment.</title>
  
  <!-- Google Fonts: Bebas Neue, Space Grotesk, Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Header Navigation -->
  <header class="site-header" id="header">
    <div class="nav-container">
      <div class="nav-left">
        <a href="#hero" class="brand-logo" aria-label="AFTERHOURS Home">
          <span class="logo-mark">▲</span>
          <span class="logo-text">AFTERHOURS</span>
        </a>
        <div class="nav-meta-chip">
          <span class="chip-pulse"></span>
          <span>14 NOV 2026 • MUMBAI</span>
        </div>
      </div>

      <!-- Desktop Navigation Links -->
      <nav class="nav-links" id="nav-links" aria-label="Main Navigation">
        <a href="#about" class="nav-item">About</a>
        <a href="#experience" class="nav-item">Experience</a>
        <a href="#lineup" class="nav-item">Lineup</a>
        <a href="#schedule" class="nav-item">Schedule</a>
        <a href="#faq" class="nav-item">FAQ</a>
        <a href="#register" class="nav-btn-highlight">
          <span>BOOK PASSES</span>
          <span class="nav-btn-price">₹2,499</span>
        </a>
      </nav>

      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <div class="mobile-drawer-top">
        <span class="drawer-label">AFTERHOURS 2026</span>
        <button class="drawer-close-btn" id="drawer-close" aria-label="Close menu">&times;</button>
      </div>
      <nav class="mobile-nav">
        <a href="#about" class="mobile-nav-link">About The Concert</a>
        <a href="#experience" class="mobile-nav-link">Music Experiences</a>
        <a href="#lineup" class="mobile-nav-link">Artist Lineup</a>
        <a href="#schedule" class="mobile-nav-link">Event Schedule</a>
        <a href="#faq" class="mobile-nav-link">Festival FAQ</a>
        <a href="#register" class="mobile-nav-cta">GET YOUR PASS — ₹2,499</a>
      </nav>
      <div class="mobile-drawer-footer">
        <p class="drawer-date">✦ SATURDAY, 14 NOV 2026</p>
        <p class="drawer-loc">MAHALAXMI BAY AMPHITHEATER, MUMBAI</p>
        <p class="drawer-tag">Strictly 18+ • Gates Open 5:00 PM IST</p>
      </div>
    </div>
  </header>

  <main>
    <!-- 2. Hero Section -->
    <section class="hero-section" id="hero">
      <div class="hero-media-wrap">
        <img 
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2200&q=85" 
          alt="Concert stage lights with energetic crowd hands raised in euphoria"
          class="hero-bg-img"
          loading="eager"
        />
        <div class="hero-gradient-overlay"></div>
        <div class="hero-vignette"></div>
      </div>

      <div class="hero-content-wrap">
        <div class="container hero-container">
          <!-- Live Edition Tag -->
          <div class="hero-status-pill">
            <span class="pulse-ring">
              <span class="pulse-core"></span>
            </span>
            <span class="status-txt">OFFICIAL 2026 TOUR • LIMITED TO 12,000 ATTENDEES</span>
          </div>

          <!-- Main Hero Headings -->
          <h1 class="hero-title">
            ONE NIGHT.<br>
            <span class="text-gradient-orange">UNLIMITED</span> SOUND.
          </h1>

          <p class="hero-subtitle">
            An unforgettable night of music, energy and connection. An engineered temple of 120,000 Watts of bass, laser-carved skies, and international electronic & live innovators.
          </p>

          <!-- Compact Information Strip (Indian Venue & Pricing in ₹) -->
          <div class="hero-info-strip">
            <div class="info-strip-item">
              <div class="strip-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div class="strip-details">
                <span class="strip-label">DATE & TIME</span>
                <span class="strip-val">Saturday, Nov 14, 2026 • 5:00 PM IST</span>
              </div>
            </div>

            <div class="strip-divider"></div>

            <div class="info-strip-item">
              <div class="strip-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div class="strip-details">
                <span class="strip-label">VENUE & LOCATION</span>
                <span class="strip-val">Mahalaxmi Bay Amphitheater • Mumbai</span>
              </div>
            </div>

            <div class="strip-divider"></div>

            <div class="info-strip-item">
              <div class="strip-icon-box">
                <span class="rupee-icon">₹</span>
              </div>
              <div class="strip-details">
                <span class="strip-label">PASS TIERS</span>
                <span class="strip-val">General (₹2,499) • VIP Lounge (₹5,999)</span>
              </div>
            </div>
          </div>

          <!-- Hero Action Buttons -->
          <div class="hero-actions">
            <a href="#register" class="btn btn-primary btn-large">
              <span>GET YOUR PASS</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#schedule" class="btn btn-secondary btn-large">
              <span>EXPLORE SCHEDULE</span>
            </a>
          </div>

          <!-- Live Festival Statistics -->
          <div class="hero-meta-bar">
            <div class="meta-stat">
              <span class="stat-number">12K+</span>
              <span class="stat-desc">Passes Allocated</span>
            </div>
            <div class="meta-dot">◆</div>
            <div class="meta-stat">
              <span class="stat-number">12+</span>
              <span class="stat-desc">Global & Indian Acts</span>
            </div>
            <div class="meta-dot">◆</div>
            <div class="meta-stat">
              <span class="stat-number">03</span>
              <span class="stat-desc">Architectural Stages</span>
            </div>
            <div class="meta-dot">◆</div>
            <div class="meta-stat">
              <span class="stat-number">360°</span>
              <span class="stat-desc">Spatial Soundstage</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. About the Concert Section -->
    <section class="section about-section" id="about">
      <div class="container">
        <div class="editorial-header">
          <div class="editorial-tag">
            <span class="tag-dash"></span>
            MORE THAN JUST MUSIC
          </div>
          <h2 class="section-title">MORE THAN MUSIC. PURE FREQUENCY.</h2>
          <p class="section-lead">
            An engineered sanctuary of 120,000 Watts of bass, kinetic stage architecture, and collective human energy on the Mumbai waterfront.
          </p>
        </div>

        <div class="about-grid">
          <!-- Text and Specs Column -->
          <div class="about-text-col">
            <p class="body-p">
              Born from late-night underground warehouse culture and scaled to international festival grandeur, AFTERHOURS dissolves the barrier between the performer and the floor. Here, 12,000 synchronized heartbeats move to uncompressed analog low-ends.
            </p>

            <!-- Specification Cards -->
            <div class="about-spec-cards">
              <div class="spec-card">
                <div class="spec-top">
                  <span class="spec-id">01 / STAGES</span>
                  <span class="spec-accent">▲ 3 REALMS</span>
                </div>
                <h4 class="spec-title">Main Arena &amp; Groove Vault</h4>
                <p class="spec-desc">Three dedicated stages with synchronized laser architecture, heavy sub-bass chambers, and acoustic lawns.</p>
              </div>

              <div class="spec-card">
                <div class="spec-top">
                  <span class="spec-id">02 / ACOUSTICS</span>
                  <span class="spec-accent">120K WATTS</span>
                </div>
                <h4 class="spec-title">L-Acoustics K1 Line Array</h4>
                <p class="spec-desc">Calibrated by European audio engineers to deliver pristine vocal presence and visceral physical bass.</p>
              </div>

              <div class="spec-card">
                <div class="spec-top">
                  <span class="spec-id">03 / EXPERIENCE</span>
                  <span class="spec-accent">8+ HOURS</span>
                </div>
                <h4 class="spec-title">Sunset Into Midnight</h4>
                <p class="spec-desc">From sunset warmups at 5:00 PM IST straight through the climactic midnight finale with zero downtime.</p>
              </div>

              <div class="spec-card">
                <div class="spec-top">
                  <span class="spec-id">04 / SAFETY</span>
                  <span class="spec-accent">100% SECURE</span>
                </div>
                <h4 class="spec-title">Free Hydration &amp; Medical</h4>
                <p class="spec-desc">Multiple free water refill stations, secure cloakrooms, strict 18+ ID security, and medical response tents.</p>
              </div>
            </div>

            <div class="about-quote-box">
              <p class="quote-text">
                “Music in isolation is an emotion. Music shared with thousands beneath laser-streaked smoke is transcendence.”
              </p>
              <span class="quote-by">— Mateo Reyes, Creative Director &amp; Co-Founder</span>
            </div>
          </div>

          <!-- Editorial Photography Column -->
          <div class="about-media-col">
            <div class="media-card-frame">
              <div class="media-image-holder">
                <img 
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85" 
                  alt="Live band performing on stage under intense golden spotlights" 
                  class="editorial-main-img"
                  loading="lazy"
                />
                <div class="media-badge-tag">
                  <span class="badge-dot"></span>
                  <span>LIVE CAPTURE • MAIN STAGE RIG</span>
                </div>
              </div>
              <div class="media-footer-meta">
                <div class="meta-headline">THE MAIN STAGE ACOUSTIC DOME</div>
                <div class="meta-subtext">Over 40 tons of kinetic lighting, nitrogen cannons, and 4K visual mapping arrays.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Music Experiences Section -->
    <section class="section experiences-section" id="experience">
      <div class="container">
        <div class="section-intro">
          <div class="editorial-tag text-orange">
            <span class="tag-dash"></span>
            CURATED SONIC REALMS
          </div>
          <h2 class="section-title text-light">THREE SONIC REALMS</h2>
          <p class="section-desc max-640">
            Each stage has its own acoustic tuning, visual architecture, and energy profile.
          </p>
        </div>

        <div class="experiences-grid">
          <!-- Experience 1: LIVE PERFORMANCES (Panoramic Hero Card) -->
          <article class="exp-card exp-card-panoramic">
            <div class="exp-media-pane">
              <img 
                src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1400&q=85" 
                alt="Guitarist and lead performer under concert spotlights" 
                class="exp-img"
                loading="lazy"
              />
              <div class="exp-stage-badge">STAGE 01 • MAIN ARENA</div>
            </div>
            <div class="exp-info-pane">
              <div class="exp-eyebrow">RAW INSTRUMENTATION &amp; LIVE BRASS</div>
              <h3 class="exp-headline">LIVE PERFORMANCES // UNCOMPRESSED SOUND</h3>
              <p class="exp-para">
                Full-scale live touring outfits, explosive electric guitar riffs, analog synthesizers, and powerhouse vocalists commanding the 120-foot Main Stage. Experience uncompressed energy where every acoustic stroke is physically felt.
              </p>
              <div class="exp-spec-strip">
                <div class="spec-pill"><span>Live Drum Kits</span></div>
                <div class="spec-pill"><span>Immersive Brass</span></div>
                <div class="spec-pill"><span>Uncut Vocals</span></div>
              </div>
            </div>
          </article>

          <!-- Experience 2: DJ NIGHT (Vertical Neon Feature) -->
          <article class="exp-card exp-card-vertical exp-card-dj">
            <div class="exp-media-pane">
              <img 
                src="https://images.unsplash.com/photo-1546707012-c46675f12716?auto=format&fit=crop&w=1000&q=80" 
                alt="DJ controlling turntable mixer with neon audio lights" 
                class="exp-img"
                loading="lazy"
              />
              <div class="exp-stage-badge">STAGE 02 • THE GROOVE VAULT</div>
            </div>
            <div class="exp-info-pane">
              <div class="exp-eyebrow">HYPNOTIC TEMPOS &amp; 130 BPM DRIVES</div>
              <h3 class="exp-headline">DJ NIGHT // 130 BPM UNDERGROUND VAULT</h3>
              <p class="exp-para">
                Step inside the sound vault. From deep melodic techno to peak-hour driving house, master selector DJs blend continuous rhythms beneath synchronised strobe tunnels and atmospheric haze.
              </p>
              <div class="exp-spec-strip">
                <div class="spec-pill"><span>Modular Synths</span></div>
                <div class="spec-pill"><span>Custom Strobe Grid</span></div>
                <div class="spec-pill"><span>Sub-Bass Chambers</span></div>
              </div>
            </div>
          </article>

          <!-- Experience 3: THE CROWD EXPERIENCE (Vertical Community Feature) -->
          <article class="exp-card exp-card-vertical exp-card-crowd">
            <div class="exp-media-pane">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85" 
                alt="Festival crowd singing along with hands raised together" 
                class="exp-img"
                loading="lazy"
              />
              <div class="exp-stage-badge">THE COMMONS • WATERFRONT</div>
            </div>
            <div class="exp-info-pane">
              <div class="exp-eyebrow">COLLECTIVE EUPHORIA &amp; KINSHIP</div>
              <h3 class="exp-headline">THE CROWD // 12,000 VOICES IN UNISON</h3>
              <p class="exp-para">
                The essence of AFTERHOURS is the family on the floor. Strangers become lifelong friends during unison chorus drops, golden confetti bursts, and midnight cheers echoing across the Arabian Sea.
              </p>
              <div class="exp-spec-strip">
                <div class="spec-pill"><span>Confetti Storm</span></div>
                <div class="spec-pill"><span>Chill Lounges</span></div>
                <div class="spec-pill"><span>RFID Lightbands</span></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Lineup Section -->
    <section class="section lineup-section" id="lineup">
      <div class="container">
        <div class="lineup-header">
          <div>
            <div class="editorial-tag text-orange">
              <span class="tag-dash"></span>
              2026 OFFICIAL ROSTER
            </div>
            <h2 class="section-title text-light">THE 2026 LINEUP</h2>
          </div>
          <div class="lineup-count-pill">
            <span>12+ GLOBAL &amp; INDIAN ACTS</span>
            <span class="dot-sep">•</span>
            <span>3 PHASES</span>
          </div>
        </div>

        <!-- Festival Poster Headliner Typography -->
        <div class="lineup-poster-box">
          <div class="roster-tier headliners-tier">
            <span class="artist-bold">THE CHROMATIC VOID</span>
            <span class="roster-star">✦</span>
            <span class="artist-bold">SOLARIS ECLIPSE</span>
            <span class="roster-star">✦</span>
            <span class="artist-bold">KAVINSKY SOUNDSYSTEM</span>
          </div>

          <div class="roster-divider"></div>

          <div class="roster-tier secondary-tier">
            <span class="artist-sub">NINA STERLING (LIVE)</span>
            <span class="roster-bullet">•</span>
            <span class="artist-sub">ECHO VALLEY SYNTH BAND</span>
            <span class="roster-bullet">•</span>
            <span class="artist-sub">DJ ARDOR</span>
            <span class="roster-bullet">•</span>
            <span class="artist-sub">VALENTINA MARX</span>
            <span class="roster-bullet">•</span>
            <span class="artist-sub">ZEPHYR COLLECTIVE</span>
          </div>

          <div class="roster-divider thin"></div>

          <div class="roster-tier tertiary-tier">
            <span class="artist-minor">PACIFIC DRIFT</span>
            <span class="roster-bullet">•</span>
            <span class="artist-minor">NEON PULSE</span>
            <span class="roster-bullet">•</span>
            <span class="artist-minor">CYBERLOFT</span>
            <span class="roster-bullet">•</span>
            <span class="artist-minor">JUNO VIBES</span>
            <span class="roster-bullet">•</span>
            <span class="artist-minor">ASTRAL HORIZON</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Event Schedule Section -->
    <section class="section schedule-section" id="schedule">
      <div class="container">
        <div class="section-intro text-center">
          <div class="editorial-tag justify-center">
            <span class="tag-dash"></span>
            PROGRAM TIMELINE
          </div>
          <h2 class="section-title">FESTIVAL TIMETABLE</h2>
          <p class="section-desc max-640">
            8 Hours of continuous live sound and visual immersion from sunset gates to the midnight laser finale.
          </p>
        </div>

        <!-- Schedule Filter Controls -->
        <div class="schedule-filters" role="tablist" aria-label="Schedule Stage Filter">
          <button class="filter-tab active" data-filter="all" role="tab" aria-selected="true">All Stages</button>
          <button class="filter-tab" data-filter="main" role="tab" aria-selected="false">Main Arena</button>
          <button class="filter-tab" data-filter="vault" role="tab" aria-selected="false">The Groove Vault</button>
        </div>

        <!-- Timeline Items -->
        <div class="schedule-timeline">
          <!-- 1. 5:00 PM Gates Open -->
          <div class="timeline-row" data-stage="all">
            <div class="time-col">
              <span class="time-main">05:00 PM</span>
              <span class="time-sub">Sunset Warmup</span>
            </div>
            <div class="spine-col">
              <span class="spine-dot"></span>
              <span class="spine-line"></span>
            </div>
            <div class="schedule-card">
              <div class="card-top-meta">
                <span class="badge-stage badge-all">All Grounds</span>
                <span class="badge-status">Gates Open</span>
              </div>
              <h3 class="event-title">Gates Open &amp; Ambient Horizon DJ</h3>
              <p class="event-desc">
                Security clearance, RFID cloth wristband pickup, open merchandise popups, curated culinary village, and atmospheric warmups as dusk touches the waterfront.
              </p>
              <div class="event-perks">
                <span>✦ Express RFID Wristband Collection</span>
                <span>✦ Early Access Merch Booth</span>
              </div>
            </div>
          </div>

          <!-- 2. 6:00 PM Opening Act -->
          <div class="timeline-row" data-stage="main">
            <div class="time-col">
              <span class="time-main">06:00 PM</span>
              <span class="time-sub">Dusk Horizon</span>
            </div>
            <div class="spine-col">
              <span class="spine-dot"></span>
              <span class="spine-line"></span>
            </div>
            <div class="schedule-card">
              <div class="card-top-meta">
                <span class="badge-stage badge-main">Main Arena</span>
                <span class="artist-lead">Nina Sterling</span>
              </div>
              <h3 class="event-title">Opening Act: Dreamwave &amp; Ethereal Beats</h3>
              <p class="event-desc">
                Berlin-trained synthesist Nina Sterling sets the evening foundation with warm Rhodes chords, hypnotic vocal loops, and shimmering synth pads to elevate the awakening crowd.
              </p>
              <div class="event-perks">
                <span>✦ Live Synthesizers</span>
                <span>✦ Kinetic Lighting Show</span>
              </div>
            </div>
          </div>

          <!-- 3. 7:00 PM Live Band -->
          <div class="timeline-row" data-stage="main">
            <div class="time-col">
              <span class="time-main">07:00 PM</span>
              <span class="time-sub">Dusk Ignition</span>
            </div>
            <div class="spine-col">
              <span class="spine-dot"></span>
              <span class="spine-line"></span>
            </div>
            <div class="schedule-card">
              <div class="card-top-meta">
                <span class="badge-stage badge-main">Main Arena</span>
                <span class="artist-lead">Echo Valley Synth Band</span>
              </div>
              <h3 class="event-title">Live Band: Electric Funk &amp; Analog Brass</h3>
              <p class="event-desc">
                A 7-piece powerhouse live ensemble blending hard-hitting funk drumming, roaring Moog basslines, and punchy horn sections that get the entire arena floor jumping.
              </p>
              <div class="event-perks">
                <span>✦ 7-Piece Live Ensemble</span>
                <span>✦ Pyrotechnic Flame Jets</span>
              </div>
            </div>
          </div>

          <!-- 4. 8:30 PM DJ Performance -->
          <div class="timeline-row" data-stage="vault">
            <div class="time-col">
              <span class="time-main">08:30 PM</span>
              <span class="time-sub">Peak Night</span>
            </div>
            <div class="spine-col">
              <span class="spine-dot"></span>
              <span class="spine-line"></span>
            </div>
            <div class="schedule-card">
              <div class="card-top-meta">
                <span class="badge-stage badge-vault">The Groove Vault</span>
                <span class="artist-lead">Solaris Eclipse</span>
              </div>
              <h3 class="event-title">DJ Performance: Melodic Techno Odyssey</h3>
              <p class="event-desc">
                A high-octane 90-minute expedition through 132 BPM hypnotic builds, driving sub-bass drops, and 3D geometric projection mapping inside the high-density sound vault.
              </p>
              <div class="event-perks">
                <span>✦ 360° Surround Soundfield</span>
                <span>✦ Strobe &amp; Heavy Nitrogen Jets</span>
              </div>
            </div>
          </div>

          <!-- 5. 10:00 PM Grand Finale -->
          <div class="timeline-row row-finale" data-stage="main">
            <div class="time-col">
              <span class="time-main text-orange">10:00 PM</span>
              <span class="time-sub text-orange">Midnight Climax</span>
            </div>
            <div class="spine-col">
              <span class="spine-dot dot-orange"></span>
              <span class="spine-line"></span>
            </div>
            <div class="schedule-card card-finale">
              <div class="card-top-meta">
                <span class="badge-stage badge-finale">Main Arena • Grand Finale</span>
                <span class="artist-lead pill-gold">The Chromatic Void</span>
              </div>
              <h3 class="event-title">Grand Finale: The Chromatic Void &amp; Midnight Laser Spectacular</h3>
              <p class="event-desc">
                The festival pinnacle. A breathtaking multi-sensory spectacle featuring synchronised laser sky-sculptures over the bay, golden confetti rain, surprise guest vocalists, and an unforgettable extended encore.
              </p>
              <div class="event-perks">
                <span>✦ 30-Minute Laser Sky Canopy</span>
                <span>✦ Waterfront Pyrotechnics</span>
                <span>✦ Extended Encore Set</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Registration Section (Contrasting Dark Luxury Ticketing Portal) -->
    <section class="section register-section" id="register">
      <div class="container">
        <div class="register-header text-center">
          <div class="editorial-tag justify-center text-orange">
            <span class="tag-dash"></span>
            OFFICIAL TICKETING PORTAL
          </div>
          <h2 class="section-title text-light">GET YOUR PASS</h2>
          <p class="section-desc max-640 text-muted">
            Phase 1 Early Bird allocation is strictly limited by venue capacity. Select your access tier below.
          </p>
        </div>

        <div class="register-layout">
          <!-- Left Column: Pricing Selector Cards & Real-Time Calculation -->
          <div class="register-selector-col">
            <div class="tier-cards-wrap">
              <!-- Tier 1: General Pass -->
              <div class="tier-card active" id="card-general" data-type="general" tabindex="0" role="button" aria-pressed="true">
                <div class="tier-card-header">
                  <span class="tier-badge-pill">PHASE 1 EARLY BIRD</span>
                  <div class="custom-radio-circle"></div>
                </div>
                <h4 class="tier-title">General Admission Pass</h4>
                <div class="tier-price-row">
                  <span class="currency-symbol">₹</span>
                  <span class="price-val">2,499</span>
                  <span class="price-unit">/ pass</span>
                </div>
                <p class="tier-desc">Full standard admission to Main Arena, The Groove Vault, and festival grounds.</p>
                <ul class="tier-benefits-list">
                  <li><span class="chk">✓</span> Access to all 3 stages and waterfront lawn</li>
                  <li><span class="chk">✓</span> Official commemorative RFID cloth wristband</li>
                  <li><span class="chk">✓</span> Access to food truck village &amp; free water stations</li>
                </ul>
              </div>

              <!-- Tier 2: VIP All-Access Pass -->
              <div class="tier-card" id="card-vip" data-type="vip" tabindex="0" role="button" aria-pressed="false">
                <div class="tier-card-header">
                  <span class="tier-badge-pill badge-vip">PREMIUM VIP EXPERIENCE</span>
                  <div class="custom-radio-circle"></div>
                </div>
                <h4 class="tier-title">VIP All-Access Pass</h4>
                <div class="tier-price-row">
                  <span class="currency-symbol">₹</span>
                  <span class="price-val">5,999</span>
                  <span class="price-unit">/ pass</span>
                </div>
                <p class="tier-desc">Elevated mezzanine viewing deck, expedited turnstiles, and exclusive bar lounge.</p>
                <ul class="tier-benefits-list">
                  <li><span class="chk">✓</span> All General Pass privileges included</li>
                  <li><span class="chk">✓</span> Dedicated fast-track VIP entrance lanes (zero queues)</li>
                  <li><span class="chk">✓</span> Elevated VIP mezzanine lounge overlooking Main Stage</li>
                  <li><span class="chk">✓</span> Air-conditioned private restrooms &amp; craft cocktail bar</li>
                  <li><span class="chk">✓</span> Official AFTERHOURS 2026 Tour Heavyweight T-Shirt</li>
                </ul>
              </div>
            </div>

            <!-- Real-Time Order Calculation Summary -->
            <div class="order-summary-box">
              <div class="summary-top">
                <h4 class="summary-title">Live Order Breakdown</h4>
                <span class="currency-indicator">INR (₹)</span>
              </div>
              <div class="calc-line">
                <span class="calc-label">Selected Tier:</span>
                <span class="calc-data" id="summary-tier-name">General Admission (₹2,499 ea)</span>
              </div>
              <div class="calc-line">
                <span class="calc-label">Passes Count:</span>
                <span class="calc-data" id="summary-qty">1 Pass</span>
              </div>
              <div class="calc-line">
                <span class="calc-label">Subtotal:</span>
                <span class="calc-data" id="summary-subtotal">₹2,499</span>
              </div>
              <div class="calc-line">
                <span class="calc-label">Eco &amp; City Preservation Fee:</span>
                <span class="calc-data" id="summary-fee">₹150</span>
              </div>
              <div class="calc-rule"></div>
              <div class="calc-line calc-total-line">
                <span class="total-label">Estimated Total:</span>
                <span class="total-data" id="summary-total">₹2,649</span>
              </div>
              <div class="summary-note">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <span>Instant e-ticket generated upon form confirmation. RFID wristbands collected at box office.</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Registration Form -->
          <div class="register-form-col">
            <form id="concert-registration-form" class="registration-form" novalidate>
              <div class="form-banner">
                <span class="banner-title">Attendee Details</span>
                <span class="banner-hint">Starred (<span class="req">*</span>) fields are required for RFID pass issuance</span>
              </div>

              <!-- Full Name -->
              <div class="form-group" id="group-fullname">
                <label for="fullname" class="form-label">
                  Full Name (As on Govt Photo ID) <span class="req">*</span>
                </label>
                <div class="input-wrap">
                  <input 
                    type="text" 
                    id="fullname" 
                    name="fullname" 
                    class="form-control" 
                    placeholder="e.g. Ananya Sharma" 
                    autocomplete="name"
                    required
                  />
                  <span class="input-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                </div>
                <div class="form-error-msg" id="error-fullname">Please enter your full legal name.</div>
              </div>

              <!-- Email and Phone Row -->
              <div class="form-row-2">
                <!-- Email Address -->
                <div class="form-group" id="group-email">
                  <label for="email" class="form-label">
                    Email Address <span class="req">*</span>
                  </label>
                  <div class="input-wrap">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      class="form-control" 
                      placeholder="ananya@example.com" 
                      autocomplete="email"
                      required
                    />
                    <span class="input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </span>
                  </div>
                  <div class="form-error-msg" id="error-email">Please provide a valid email address.</div>
                </div>

                <!-- Phone Number -->
                <div class="form-group" id="group-phone">
                  <label for="phone" class="form-label">
                    Mobile Number <span class="req">*</span>
                  </label>
                  <div class="input-wrap phone-wrap">
                    <span class="country-badge">+91</span>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      class="form-control phone-input" 
                      placeholder="98765 43210" 
                      autocomplete="tel"
                      required
                    />
                  </div>
                  <div class="form-error-msg" id="error-phone">Enter a valid 10-digit mobile number.</div>
                </div>
              </div>

              <!-- Age, City, Gender Row -->
              <div class="form-row-3">
                <!-- Age -->
                <div class="form-group" id="group-age">
                  <label for="age" class="form-label">
                    Age <span class="req">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="age" 
                    name="age" 
                    class="form-control" 
                    min="18" 
                    max="100" 
                    placeholder="18+"
                    required
                  />
                  <div class="form-error-msg" id="error-age">Must be 18+ (Govt ID required).</div>
                </div>

                <!-- City -->
                <div class="form-group" id="group-city">
                  <label for="city" class="form-label">
                    City <span class="req">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    class="form-control" 
                    placeholder="e.g. Mumbai, Pune..."
                    required
                  />
                  <div class="form-error-msg" id="error-city">Please enter your city.</div>
                </div>

                <!-- Gender (Optional) -->
                <div class="form-group" id="group-gender">
                  <label for="gender" class="form-label">
                    Gender <span class="opt-label">(Optional)</span>
                  </label>
                  <select id="gender" name="gender" class="form-control form-select">
                    <option value="">Select option</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <!-- Pass Tier & Quantity Row -->
              <div class="form-row-2">
                <!-- Pass Tier Dropdown -->
                <div class="form-group" id="group-pass-type">
                  <label for="pass-type-select" class="form-label">
                    Pass Type <span class="req">*</span>
                  </label>
                  <select id="pass-type-select" name="pass-type" class="form-control form-select" required>
                    <option value="general" selected>General Admission — ₹2,499</option>
                    <option value="vip">VIP All-Access Pass — ₹5,999</option>
                  </select>
                </div>

                <!-- Number of Passes Stepper -->
                <div class="form-group" id="group-pass-count">
                  <label for="pass-count" class="form-label">
                    Number of Passes <span class="req">*</span>
                  </label>
                  <div class="stepper-box">
                    <button type="button" class="stepper-action" id="btn-decrease" aria-label="Decrease passes count">−</button>
                    <input 
                      type="number" 
                      id="pass-count" 
                      name="pass-count" 
                      class="form-control stepper-display" 
                      value="1" 
                      min="1" 
                      max="10" 
                      required
                    />
                    <button type="button" class="stepper-action" id="btn-increase" aria-label="Increase passes count">+</button>
                  </div>
                  <div class="form-error-msg" id="error-pass-count">Select between 1 and 10 passes.</div>
                </div>
              </div>

              <!-- Special Requests (Optional) -->
              <div class="form-group" id="group-requests">
                <label for="special-requests" class="form-label">
                  Special Requests <span class="opt-label">(Optional)</span>
                </label>
                <textarea 
                  id="special-requests" 
                  name="special-requests" 
                  class="form-control form-textarea" 
                  rows="3" 
                  placeholder="ADA accessibility assistance, dietary preferences for VIP lounge, large group coordination..."
                ></textarea>
              </div>

              <!-- Agreement Checkbox -->
              <div class="form-agreement">
                <label class="checkbox-container" for="terms-agree">
                  <input type="checkbox" id="terms-agree" name="terms" required>
                  <span class="custom-chk-box"></span>
                  <span class="agreement-desc">
                    I confirm that all attendees are 18+ years of age. I agree to the <a href="#faq" class="link-orange">Festival Rules</a> and safety guidelines.
                  </span>
                </label>
                <div class="form-error-msg" id="error-terms">You must agree to the festival rules to proceed.</div>
              </div>

              <!-- Submit Button -->
              <div class="form-cta-wrap">
                <button type="submit" class="btn btn-primary btn-block btn-hero-submit" id="submit-btn">
                  <span>CONFIRM REGISTRATION</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <p class="cta-guarantee-note">
                  🔒 No payment gateway simulation. Your registration reserve token is issued immediately with an encrypted QR code.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Info & FAQ Section -->
    <section class="section faq-section" id="faq">
      <div class="container">
        <div class="section-intro text-center">
          <div class="editorial-tag justify-center">
            <span class="tag-dash"></span>
            ESSENTIAL INTEL
          </div>
          <h2 class="section-title">FESTIVAL FAQS</h2>
          <p class="section-desc max-640">
            Essential information before stepping through the gates on November 14 in Mumbai.
          </p>
        </div>

        <div class="faq-accordion-wrap">
          <div class="faq-item active">
            <button class="faq-question" aria-expanded="true">
              <span>What is the entry age and photo ID requirement?</span>
              <span class="faq-icon-cross"></span>
            </button>
            <div class="faq-answer">
              <p>AFTERHOURS 2026 is strictly an 18+ event. Valid government-issued photo identification (Aadhaar Card, Passport, Driver’s License, or Voter ID) will be verified at Box Office Gate 1. Digital photo copies or expired IDs cannot be accepted.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>How do I collect my official RFID wristband?</span>
              <span class="faq-icon-cross"></span>
            </button>
            <div class="faq-answer">
              <p>Upon completing registration, your official digital E-Ticket with a personalized QR code is generated on screen and sent to your email. Present this QR code along with your Govt ID at Box Office Turnstiles 1-4 starting at 4:30 PM IST on event day to collect your woven RFID wristband.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>What is included with the VIP All-Access Pass (₹5,999)?</span>
              <span class="faq-icon-cross"></span>
            </button>
            <div class="faq-answer">
              <p>VIP passholders enjoy expedited express entrance lanes with zero wait time, access to the elevated panoramic VIP Mezzanine overlooking the Main Stage, air-conditioned private restrooms, a dedicated craft cocktail bar, and an official AFTERHOURS 2026 Tour Heavyweight T-Shirt &amp; Lanyard bundle.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>What is the bag policy and prohibited items list?</span>
              <span class="faq-icon-cross"></span>
            </button>
            <div class="faq-answer">
              <p>Small clear bags up to 12" x 6" x 12" or small waist packs are permitted. Outside food, beverages, glass bottles, professional DSLR cameras with detachable lenses, and illegal substances are strictly prohibited. Free chilled water refill stations are available across all grounds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- 8. Footer Section -->
  <footer class="site-footer">
    <div class="container footer-container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Tagline -->
        <div class="footer-col brand-col">
          <a href="#hero" class="brand-logo footer-logo">
            <span class="logo-soundwave">
              <span class="bar-wave"></span>
              <span class="bar-wave"></span>
              <span class="bar-wave"></span>
              <span class="bar-wave"></span>
            </span>
            <span class="logo-text">AFTERHOURS</span>
          </a>
          <p class="footer-tagline">Feel the Sound. Live the Moment.</p>
          <p class="footer-bio">
            An international music festival bringing together world-class electronic producers, analog sound designers, and an open-hearted community of audiophiles.
          </p>
          <div class="footer-social-row">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-circle" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" class="social-circle" aria-label="Spotify">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.218.357-.68.468-1.037.25-2.846-1.74-6.428-2.133-10.648-1.168-.407.094-.816-.16-.91-.567-.093-.408.16-.816.567-.91 4.623-1.056 8.583-.612 11.777 1.358.358.219.47.68.251 1.037zm1.467-3.262c-.274.446-.86.586-1.306.312-3.257-2.002-8.223-2.583-12.076-1.413-.5.152-1.032-.132-1.185-.632-.152-.5.132-1.032.632-1.184 4.407-1.338 9.882-.693 13.623 1.611.446.274.586.86.312 1.306zm.126-3.398C15.2 8.36 8.76 8.14 5.097 9.253c-.6.182-1.238-.16-1.42-.76-.182-.6.16-1.238.76-1.42 4.225-1.283 11.337-1.026 15.82 1.636.54.32.716 1.022.396 1.562-.32.54-1.022.717-1.557.397z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-circle" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-circle" aria-label="X / Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Navigation Links -->
        <div class="footer-col">
          <h4 class="footer-heading">Festival Guide</h4>
          <ul class="footer-link-list">
            <li><a href="#hero">Back to Top</a></li>
            <li><a href="#about">About the Concept</a></li>
            <li><a href="#experience">Sound Experiences</a></li>
            <li><a href="#lineup">Headliner Lineup</a></li>
            <li><a href="#schedule">Full Event Schedule</a></li>
            <li><a href="#register">Pass Registration</a></li>
          </ul>
        </div>

        <!-- Col 3: Venue Logistics -->
        <div class="footer-col">
          <h4 class="footer-heading">Venue &amp; Timings</h4>
          <ul class="footer-meta-list">
            <li>
              <strong>Location:</strong>
              <span>Mahalaxmi Bay Amphitheater, Waterfront Promenade, Mumbai 400018</span>
            </li>
            <li>
              <strong>Date:</strong>
              <span>Saturday, 14 November 2026</span>
            </li>
            <li>
              <strong>Timings:</strong>
              <span>Gates Open 5:00 PM IST • Curfew 1:30 AM IST</span>
            </li>
            <li>
              <strong>Age Policy:</strong>
              <span>Strictly 18+ (Govt Photo ID Mandatory)</span>
            </li>
          </ul>
        </div>

        <!-- Col 4: Contact & Inquiries -->
        <div class="footer-col">
          <h4 class="footer-heading">Support &amp; Desk</h4>
          <ul class="footer-meta-list">
            <li>
              <strong>Ticketing Help:</strong>
              <a href="mailto:tickets@afterhoursfest.in" class="footer-anchor">tickets@afterhoursfest.in</a>
            </li>
            <li>
              <strong>Press &amp; Artist Management:</strong>
              <a href="mailto:press@afterhoursfest.in" class="footer-anchor">press@afterhoursfest.in</a>
            </li>
            <li>
              <strong>VIP Hospitality:</strong>
              <a href="mailto:vip@afterhoursfest.in" class="footer-anchor">vip@afterhoursfest.in</a>
            </li>
            <li>
              <strong>Accessibility &amp; Medical:</strong>
              <a href="mailto:access@afterhoursfest.in" class="footer-anchor">access@afterhoursfest.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-legal-bar">
        <div class="legal-copy">
          &copy; 2026 AFTERHOURS Live Entertainment India Pvt. Ltd. All rights reserved.
        </div>
        <div class="legal-links">
          <a href="#faq">Privacy Policy</a>
          <span>•</span>
          <a href="#faq">Terms &amp; Conditions</a>
          <span>•</span>
          <a href="#faq">Health &amp; Safety Protocol</a>
          <span>•</span>
          <a href="#faq">Community Code</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- 7. Registration Success E-Pass Modal -->
  <div class="modal-backdrop" id="success-modal" aria-hidden="true" role="dialog" aria-labelledby="modal-pass-title">
    <div class="modal-card">
      <button class="modal-close-btn" id="modal-close" aria-label="Close dialog">&times;</button>
      
      <div class="modal-header">
        <div class="modal-stamp-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 class="modal-title" id="modal-pass-title">You're On The Official Guestlist!</h3>
        <p class="modal-subtitle">Your AFTERHOURS 2026 festival pass is confirmed and locked in.</p>
      </div>

      <!-- Bespoke Digital E-Ticket Pass -->
      <div class="digital-ticket-pass" id="digital-pass">
        <div class="ticket-header-strip">
          <div class="ticket-brand">
            <span class="ticket-icon">▲</span>
            <span class="ticket-brand-text">AFTERHOURS 2026</span>
          </div>
          <div class="ticket-tier-tag" id="modal-tier-badge">GENERAL PASS</div>
        </div>

        <div class="ticket-body">
          <div class="ticket-meta-block">
            <span class="meta-field-label">ATTENDEE NAME</span>
            <span class="meta-field-val attendee-name" id="modal-attendee-name">Ananya Sharma</span>
          </div>

          <div class="ticket-grid-2">
            <div class="ticket-meta-block">
              <span class="meta-field-label">CONFIRMATION REF</span>
              <span class="meta-field-val mono-val" id="modal-ref-code">AFH-IND-94821</span>
            </div>
            <div class="ticket-meta-block">
              <span class="meta-field-label">PASSES ALLOCATED</span>
              <span class="meta-field-val" id="modal-pass-qty">1 Pass</span>
            </div>
          </div>

          <div class="ticket-grid-2">
            <div class="ticket-meta-block">
              <span class="meta-field-label">DATE &amp; DOORS</span>
              <span class="meta-field-val">14 Nov 2026 • 5:00 PM IST</span>
            </div>
            <div class="ticket-meta-block">
              <span class="meta-field-label">VENUE</span>
              <span class="meta-field-val">Mahalaxmi Bay, Mumbai</span>
            </div>
          </div>

          <div class="ticket-meta-block">
            <span class="meta-field-label">CONFIRMATION SENT TO</span>
            <span class="meta-field-val email-val" id="modal-attendee-email">ananya@example.com</span>
          </div>
        </div>

        <!-- Perforated Stub Divider with Notches -->
        <div class="ticket-stub-divider">
          <span class="stub-notch notch-left"></span>
          <span class="stub-dash-line"></span>
          <span class="stub-notch notch-right"></span>
        </div>

        <div class="ticket-footer-strip">
          <div class="qr-code-holder">
            <svg class="qr-code-svg" width="90" height="90" viewBox="0 0 100 100" fill="currentColor">
              <!-- QR Corner 1 -->
              <rect x="5" y="5" width="28" height="28" fill="#141414" rx="3"/>
              <rect x="9" y="9" width="20" height="20" fill="#F5F1E9"/>
              <rect x="13" y="13" width="12" height="12" fill="#141414"/>
              
              <!-- QR Corner 2 -->
              <rect x="67" y="5" width="28" height="28" fill="#141414" rx="3"/>
              <rect x="71" y="9" width="20" height="20" fill="#F5F1E9"/>
              <rect x="75" y="13" width="12" height="12" fill="#141414"/>

              <!-- QR Corner 3 -->
              <rect x="5" y="67" width="28" height="28" fill="#141414" rx="3"/>
              <rect x="9" y="71" width="20" height="20" fill="#F5F1E9"/>
              <rect x="13" y="75" width="12" height="12" fill="#141414"/>

              <!-- Synthetic Pattern Blocks -->
              <rect x="38" y="10" width="8" height="8" fill="#FF5722"/>
              <rect x="50" y="14" width="8" height="8" fill="#141414"/>
              <rect x="38" y="24" width="8" height="8" fill="#141414"/>
              <rect x="50" y="32" width="14" height="6" fill="#141414"/>

              <rect x="10" y="38" width="6" height="14" fill="#141414"/>
              <rect x="22" y="44" width="14" height="6" fill="#FF5722"/>
              <rect x="38" y="44" width="14" height="14" fill="#141414"/>
              <rect x="58" y="44" width="8" height="8" fill="#141414"/>
              <rect x="72" y="38" width="18" height="6" fill="#141414"/>
              <rect x="78" y="48" width="12" height="12" fill="#FF5722"/>

              <rect x="38" y="66" width="8" height="14" fill="#141414"/>
              <rect x="50" y="72" width="12" height="8" fill="#141414"/>
              <rect x="68" y="68" width="12" height="12" fill="#141414"/>
              <rect x="84" y="82" width="10" height="10" fill="#141414"/>
              <rect x="50" y="86" width="18" height="8" fill="#FF5722"/>
            </svg>
          </div>
          <div class="qr-info-pane">
            <span class="qr-heading">OFFICIAL RFID WRISTBAND TOKEN</span>
            <span class="qr-subtxt">Present this barcode at Turnstiles 1-4 for contactless wristband issuance.</span>
            <span class="qr-total-tag">Total Amount: <strong id="modal-total-price">₹2,649</strong></span>
          </div>
        </div>
      </div>

      <div class="modal-buttons">
        <button class="btn btn-primary" id="btn-print-pass">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>Save / Print E-Pass</span>
        </button>
        <button class="btn btn-secondary" id="btn-done-modal">Done</button>
      </div>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
```

#### `11 JavaScript timers and ES6 module/concert registration/app.js`
```js
/**
 * AFTERHOURS — Feel the Sound. Live the Moment.
 * Official Client Script (Pure Vanilla JavaScript)
 * India Edition 2026 (INR ₹ Pricing)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Pricing Configuration (Indian Rupees ₹) ---
  const PRICING = {
    general: { 
      name: 'General Admission Pass', 
      price: 2499, 
      badge: 'GENERAL ADMISSION PASS' 
    },
    vip: { 
      name: 'VIP All-Access Pass', 
      price: 5999, 
      badge: 'VIP ALL-ACCESS PASS' 
    }
  };
  const ECO_FEE = 150; // INR flat fee

  // State
  let selectedPassType = 'general';
  let passQuantity = 1;

  // Format INR Helper (e.g. 2,499, 12,148)
  const formatINR = (val) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  // --- DOM Elements ---
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');

  // Pricing Card Elements
  const cardGeneral = document.getElementById('card-general');
  const cardVip = document.getElementById('card-vip');
  const passTypeSelect = document.getElementById('pass-type-select');
  const passCountInput = document.getElementById('pass-count');
  const btnDecrease = document.getElementById('btn-decrease');
  const btnIncrease = document.getElementById('btn-increase');

  // Summary Elements
  const summaryTierName = document.getElementById('summary-tier-name');
  const summaryQty = document.getElementById('summary-qty');
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryFee = document.getElementById('summary-fee');
  const summaryTotal = document.getElementById('summary-total');

  // Form Elements
  const regForm = document.getElementById('concert-registration-form');
  const fullNameInput = document.getElementById('fullname');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const ageInput = document.getElementById('age');
  const cityInput = document.getElementById('city');
  const termsCheckbox = document.getElementById('terms-agree');

  // Schedule Filter Buttons & Rows
  const filterTabs = document.querySelectorAll('.filter-tab');
  const timelineRows = document.querySelectorAll('.timeline-row');

  // FAQ Items
  const faqItems = document.querySelectorAll('.faq-item');

  // Modal Elements
  const successModal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const btnDoneModal = document.getElementById('btn-done-modal');
  const btnPrintPass = document.getElementById('btn-print-pass');
  const modalAttendeeName = document.getElementById('modal-attendee-name');
  const modalAttendeeEmail = document.getElementById('modal-attendee-email');
  const modalTierBadge = document.getElementById('modal-tier-badge');
  const modalRefCode = document.getElementById('modal-ref-code');
  const modalPassQty = document.getElementById('modal-pass-qty');
  const modalTotalPrice = document.getElementById('modal-total-price');

  // ==========================================================================
  // 1. Header Scroll Behavior
  // ==========================================================================
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ==========================================================================
  // 2. Mobile Menu Navigation
  // ==========================================================================
  const toggleMobileMenu = () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    mobileDrawer.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close drawer if user presses Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
      if (successModal.classList.contains('open')) {
        closeModal();
      }
    }
  });

  // ==========================================================================
  // 3. Dynamic INR Price Calculation & Synchronization
  // ==========================================================================
  const updatePriceCalculation = () => {
    const tier = PRICING[selectedPassType] || PRICING.general;
    const subtotal = tier.price * passQuantity;
    const total = subtotal + ECO_FEE;

    // Update Summary Card in INR
    if (summaryTierName) summaryTierName.textContent = `${tier.name} (${formatINR(tier.price)} ea)`;
    if (summaryQty) summaryQty.textContent = `${passQuantity} ${passQuantity > 1 ? 'Passes' : 'Pass'}`;
    if (summarySubtotal) summarySubtotal.textContent = formatINR(subtotal);
    if (summaryFee) summaryFee.textContent = formatINR(ECO_FEE);
    if (summaryTotal) summaryTotal.textContent = formatINR(total);

    // Sync visual active state on pricing cards
    if (cardGeneral && cardVip) {
      if (selectedPassType === 'general') {
        cardGeneral.classList.add('active');
        cardGeneral.setAttribute('aria-pressed', 'true');
        cardVip.classList.remove('active');
        cardVip.setAttribute('aria-pressed', 'false');
      } else {
        cardVip.classList.add('active');
        cardVip.setAttribute('aria-pressed', 'true');
        cardGeneral.classList.remove('active');
        cardGeneral.setAttribute('aria-pressed', 'false');
      }
    }

    // Sync form select
    if (passTypeSelect && passTypeSelect.value !== selectedPassType) {
      passTypeSelect.value = selectedPassType;
    }

    // Sync input count
    if (passCountInput && parseInt(passCountInput.value, 10) !== passQuantity) {
      passCountInput.value = passQuantity;
    }
  };

  // Card click handlers
  if (cardGeneral) {
    cardGeneral.addEventListener('click', () => {
      selectedPassType = 'general';
      updatePriceCalculation();
    });
    cardGeneral.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectedPassType = 'general';
        updatePriceCalculation();
      }
    });
  }

  if (cardVip) {
    cardVip.addEventListener('click', () => {
      selectedPassType = 'vip';
      updatePriceCalculation();
    });
    cardVip.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectedPassType = 'vip';
        updatePriceCalculation();
      }
    });
  }

  // Pass Type dropdown change
  if (passTypeSelect) {
    passTypeSelect.addEventListener('change', (e) => {
      selectedPassType = e.target.value;
      updatePriceCalculation();
    });
  }

  // Stepper controls
  const setQuantity = (qty) => {
    let validQty = parseInt(qty, 10);
    if (isNaN(validQty) || validQty < 1) validQty = 1;
    if (validQty > 10) validQty = 10;
    passQuantity = validQty;
    updatePriceCalculation();
  };

  if (btnDecrease) {
    btnDecrease.addEventListener('click', () => {
      setQuantity(passQuantity - 1);
    });
  }

  if (btnIncrease) {
    btnIncrease.addEventListener('click', () => {
      setQuantity(passQuantity + 1);
    });
  }

  if (passCountInput) {
    passCountInput.addEventListener('input', (e) => {
      setQuantity(e.target.value);
    });
    passCountInput.addEventListener('blur', (e) => {
      if (!e.target.value || parseInt(e.target.value, 10) < 1) {
        setQuantity(1);
      }
    });
  }

  // Initial calculation run
  updatePriceCalculation();

  // ==========================================================================
  // 4. Schedule Stage Filtering
  // ==========================================================================
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');

      timelineRows.forEach(row => {
        const stage = row.getAttribute('data-stage');
        if (filterValue === 'all') {
          row.classList.remove('hidden');
        } else if (stage === filterValue || stage === 'all') {
          row.classList.remove('hidden');
        } else {
          row.classList.add('hidden');
        }
      });
    });
  });

  // ==========================================================================
  // 5. FAQ Accordion
  // ==========================================================================
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isCurrentlyActive = item.classList.contains('active');
        
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const btn = otherItem.querySelector('.faq-question');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle this item
        if (isCurrentlyActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ==========================================================================
  // 6. Form Validation & Submission
  // ==========================================================================
  const clearFieldError = (element, groupSelector) => {
    const group = element.closest(groupSelector);
    if (group) group.classList.remove('has-error');
  };

  const setFieldError = (element, groupSelector) => {
    const group = element.closest(groupSelector);
    if (group) group.classList.add('has-error');
  };

  // Real-time error removal
  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => {
      if (fullNameInput.value.trim().length >= 2) {
        clearFieldError(fullNameInput, '.form-group');
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailInput.value.trim())) {
        clearFieldError(emailInput, '.form-group');
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      const digitsOnly = phoneInput.value.replace(/\D/g, '');
      if (digitsOnly.length >= 10) {
        clearFieldError(phoneInput, '.form-group');
      }
    });
  }

  if (ageInput) {
    ageInput.addEventListener('input', () => {
      const val = parseInt(ageInput.value, 10);
      if (!isNaN(val) && val >= 18 && val <= 100) {
        clearFieldError(ageInput, '.form-group');
      }
    });
  }

  if (cityInput) {
    cityInput.addEventListener('input', () => {
      if (cityInput.value.trim().length >= 2) {
        clearFieldError(cityInput, '.form-group');
      }
    });
  }

  if (termsCheckbox) {
    termsCheckbox.addEventListener('change', () => {
      if (termsCheckbox.checked) {
        clearFieldError(termsCheckbox, '.form-agreement');
      }
    });
  }

  const validateForm = () => {
    let isValid = true;
    let firstErrorField = null;

    // 1. Full Name
    if (!fullNameInput || fullNameInput.value.trim().length < 2) {
      setFieldError(fullNameInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = fullNameInput;
    } else {
      clearFieldError(fullNameInput, '.form-group');
    }

    // 2. Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
      setFieldError(emailInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = emailInput;
    } else {
      clearFieldError(emailInput, '.form-group');
    }

    // 3. Indian Mobile Number (at least 10 digits)
    const phoneDigits = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
    if (!phoneInput || phoneDigits.length < 10) {
      setFieldError(phoneInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = phoneInput;
    } else {
      clearFieldError(phoneInput, '.form-group');
    }

    // 4. Age Check (18+)
    const ageVal = ageInput ? parseInt(ageInput.value, 10) : 0;
    if (!ageInput || isNaN(ageVal) || ageVal < 18 || ageVal > 100) {
      setFieldError(ageInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = ageInput;
    } else {
      clearFieldError(ageInput, '.form-group');
    }

    // 5. City
    if (!cityInput || cityInput.value.trim().length < 2) {
      setFieldError(cityInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = cityInput;
    } else {
      clearFieldError(cityInput, '.form-group');
    }

    // 6. Number of Passes
    if (!passCountInput || passQuantity < 1 || passQuantity > 10) {
      setFieldError(passCountInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = passCountInput;
    } else {
      clearFieldError(passCountInput, '.form-group');
    }

    // 7. Terms Agreement
    if (!termsCheckbox || !termsCheckbox.checked) {
      setFieldError(termsCheckbox, '.form-agreement');
      isValid = false;
      if (!firstErrorField) firstErrorField = termsCheckbox;
    } else {
      clearFieldError(termsCheckbox, '.form-agreement');
    }

    if (!isValid && firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstErrorField.focus();
    }

    return isValid;
  };

  // Generate unique Indian reservation reference code
  const generateBookingReference = (tierCode) => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const prefix = tierCode === 'vip' ? 'VIP' : 'GEN';
    return `AFH-IND-${prefix}-${code}`;
  };

  // Submit Handler
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      // Collect values
      const attendeeName = fullNameInput.value.trim();
      const attendeeEmail = emailInput.value.trim();
      const tierInfo = PRICING[selectedPassType] || PRICING.general;
      const subtotal = tierInfo.price * passQuantity;
      const totalAmount = subtotal + ECO_FEE;
      const bookingRef = generateBookingReference(selectedPassType);

      // Populate Digital Pass Modal
      if (modalAttendeeName) modalAttendeeName.textContent = attendeeName;
      if (modalAttendeeEmail) modalAttendeeEmail.textContent = attendeeEmail;
      if (modalTierBadge) modalTierBadge.textContent = tierInfo.badge;
      if (modalRefCode) modalRefCode.textContent = bookingRef;
      if (modalPassQty) modalPassQty.textContent = `${passQuantity} ${passQuantity > 1 ? 'Passes' : 'Pass'}`;
      if (modalTotalPrice) modalTotalPrice.textContent = formatINR(totalAmount);

      // Open Modal
      openModal();
    });
  }

  // ==========================================================================
  // 7. Modal Handlers
  // ==========================================================================
  const openModal = () => {
    if (successModal) {
      successModal.classList.add('open');
      successModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (modalCloseBtn) modalCloseBtn.focus();
    }
  };

  const closeModal = () => {
    if (successModal) {
      successModal.classList.remove('open');
      successModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (btnDoneModal) {
    btnDoneModal.addEventListener('click', () => {
      closeModal();
      if (regForm) regForm.reset();
      selectedPassType = 'general';
      passQuantity = 1;
      updatePriceCalculation();
    });
  }

  if (btnPrintPass) {
    btnPrintPass.addEventListener('click', () => {
      window.print();
    });
  }

  // Click outside modal card to close
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        closeModal();
      }
    });
  }

  // Smooth anchor scrolling offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 0;
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - (headerHeight + 10);

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

});
```

#### `11 JavaScript timers and ES6 module/concert registration/styles.css`
```css
/* ==========================================================================
   AFTERHOURS Live Music Gathering — Official Design System (India 2026)
   Palette:
     Warm Off-White: #F5F1E9
     Deep Charcoal: #0E0E0E / #151515
     Elevated Charcoal Card: #1C1C1C / #242424
     Vibrant Festival Orange: #FF5722 / #FF4500
     Muted Secondary Text: #8E8B85 / #706D67
   ========================================================================== */

:root {
  --color-offwhite: #F5F1E9;
  --color-offwhite-alt: #E8E3D8;
  --color-charcoal-pure: #090909;
  --color-charcoal: #121212;
  --color-charcoal-elevated: #1A1A1A;
  --color-charcoal-card: #222222;
  --color-charcoal-card-hover: #292929;
  --color-border-dark: rgba(255, 255, 255, 0.12);
  --color-border-subtle: rgba(255, 255, 255, 0.07);
  --color-orange: #FF5722;
  --color-orange-glow: rgba(255, 87, 34, 0.28);
  --color-orange-deep: #E64A19;
  --color-muted: #8E8B85;
  --color-muted-dark: #5C5A55;
  --color-muted-light: #BDB9B0;
  --color-white: #FFFFFF;
  --color-error: #FF3B30;

  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Space Grotesk', monospace;

  --radius-xs: 3px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ==========================================================================
   CSS Reset & Base Rules
   ========================================================================== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
  background-color: var(--color-charcoal-pure);
  color: var(--color-charcoal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  line-height: 1.6;
  background-color: var(--color-offwhite);
  color: var(--color-charcoal);
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
}

/* ==========================================================================
   Typography & Shared Utilities
   ========================================================================== */
h1, h2, h3, h4, .brand-logo {
  font-family: var(--font-display);
  letter-spacing: 0.03em;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}

.text-orange {
  color: var(--color-orange) !important;
}

.text-gradient-orange {
  background: linear-gradient(135deg, #FF7043 0%, #FF5722 60%, #E64A19 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-light {
  color: var(--color-offwhite) !important;
}

.text-muted {
  color: var(--color-muted) !important;
}

.container {
  width: 100%;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 28px;
  padding-right: 28px;
}

.section {
  padding: 105px 0;
  scroll-margin-top: 80px;
}

.editorial-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-orange);
  margin-bottom: 14px;
}

.editorial-tag .tag-dash {
  width: 22px;
  height: 2px;
  background-color: var(--color-orange);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 5.2rem);
  color: var(--color-charcoal);
  margin-bottom: 14px;
  line-height: 0.94;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-weight: 400;
}
}

.section-lead {
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--color-muted-dark);
  max-width: 760px;
}

.section-desc {
  font-size: 1.05rem;
  color: var(--color-muted-light);
  line-height: 1.6;
}

.max-640 {
  max-width: 640px;
}

.text-center {
  text-align: center;
}

.justify-center {
  justify-content: center;
}

/* ==========================================================================
   Buttons
   ========================================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  padding: 14px 28px;
  border-radius: var(--radius-xs);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-transform: uppercase;
}

.btn-large {
  padding: 18px 36px;
  font-size: 0.96rem;
}

.btn-block {
  width: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #FF5722 0%, #F4511E 100%);
  color: var(--color-white);
  border-color: var(--color-orange);
  box-shadow: 0 4px 20px var(--color-orange-glow);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #FF7043 0%, #E64A19 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(255, 87, 34, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.07);
  color: var(--color-offwhite);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(8px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: var(--color-offwhite);
  color: var(--color-white);
  transform: translateY(-2px);
}

/* ==========================================================================
   Header & Navigation
   ========================================================================== */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all var(--transition-smooth);
  padding: 14px 0;
  background: rgba(12, 12, 12, 0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.site-header.scrolled {
  padding: 10px 0;
  background: rgba(10, 10, 10, 0.98);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
}

.nav-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 18px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-offwhite);
  font-family: var(--font-display);
  font-size: 1.9rem;
  letter-spacing: 0.06em;
  font-weight: 400;
  line-height: 1;
}

.logo-mark {
  color: var(--color-orange);
  font-size: 1.15rem;
  transition: transform var(--transition-fast);
}

.brand-logo:hover .logo-mark {
  transform: rotate(180deg);
}

.nav-meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 5px 12px;
  border-radius: 20px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--color-muted-light);
}

.chip-pulse {
  width: 6px;
  height: 6px;
  background-color: var(--color-orange);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--color-orange);
  animation: pulse-dot 1.8s infinite;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-item {
  color: var(--color-muted-light);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  position: relative;
  padding: 4px 0;
  transition: color var(--transition-fast);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: var(--color-orange);
  transition: width var(--transition-fast);
}

.nav-item:hover {
  color: var(--color-white);
}

.nav-item:hover::after {
  width: 100%;
}

.nav-btn-highlight {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #FF5722 0%, #F4511E 100%);
  color: var(--color-white);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 9px 16px;
  border-radius: var(--radius-xs);
  box-shadow: 0 4px 14px var(--color-orange-glow);
  transition: all var(--transition-fast);
}

.nav-btn-price {
  font-size: 0.72rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: 2px;
  letter-spacing: 0.04em;
}

.nav-btn-highlight:hover {
  background: linear-gradient(135deg, #FF7043 0%, #E64A19 100%);
  transform: translateY(-1px);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  z-index: 1010;
}

.menu-toggle .bar {
  width: 26px;
  height: 2px;
  background-color: var(--color-offwhite);
  transition: all var(--transition-smooth);
}

.menu-toggle.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 380px;
  height: 100vh;
  background-color: var(--color-charcoal);
  border-left: 1px solid var(--color-border-dark);
  padding: 30px 28px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1005;
}

.mobile-drawer.open {
  right: 0;
}

.mobile-drawer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border-subtle);
  padding-bottom: 16px;
}

.drawer-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  color: var(--color-muted);
}

.drawer-close-btn {
  background: none;
  border: none;
  color: var(--color-offwhite);
  font-size: 1.8rem;
  cursor: pointer;
  line-height: 1;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
}

.mobile-nav-link {
  color: var(--color-offwhite);
  font-size: 1.35rem;
  font-family: var(--font-display);
  font-weight: 700;
  border-bottom: 1px solid var(--color-border-subtle);
  padding-bottom: 12px;
}

.mobile-nav-link:hover {
  color: var(--color-orange);
}

.mobile-nav-cta {
  background-color: var(--color-orange);
  color: var(--color-white);
  text-align: center;
  padding: 16px;
  font-family: var(--font-mono);
  font-weight: 700;
  border-radius: var(--radius-xs);
  margin-top: 10px;
  letter-spacing: 0.08em;
}

.mobile-drawer-footer {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-muted);
  line-height: 1.6;
  border-top: 1px solid var(--color-border-subtle);
  padding-top: 18px;
}

.drawer-date {
  color: var(--color-orange);
  font-weight: 700;
}

/* ==========================================================================
   2. Hero Section
   ========================================================================== */
.hero-section {
  position: relative;
  min-height: 760px;
  height: 100vh;
  max-height: 980px;
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 50px;
  background-color: var(--color-charcoal-pure);
  overflow: hidden;
}

.hero-media-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  filter: contrast(1.18) brightness(0.78);
  transform: scale(1.02);
}

.hero-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(14, 14, 14, 0.75) 0%,
    rgba(14, 14, 14, 0.45) 45%,
    rgba(14, 14, 14, 0.9) 88%,
    rgba(14, 14, 14, 1) 100%
  );
}

.hero-vignette {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.8);
}

.hero-content-wrap {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(14, 14, 14, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 8px 18px;
  border-radius: 40px;
  color: var(--color-offwhite);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  margin-bottom: 22px;
  backdrop-filter: blur(8px);
}

.pulse-ring {
  position: relative;
  display: inline-flex;
  width: 10px;
  height: 10px;
}

.pulse-core {
  width: 10px;
  height: 10px;
  background-color: var(--color-orange);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-orange);
  animation: pulse-dot 1.8s infinite;
}

@keyframes pulse-dot {
  0% { transform: scale(0.9); opacity: 0.9; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.9; }
}

.hero-title {
  color: var(--color-offwhite);
  font-family: var(--font-display);
  font-size: clamp(3.8rem, 8.5vw, 8rem);
  line-height: 0.94;
  margin-bottom: 22px;
  max-width: 950px;
  letter-spacing: 0.02em;
  font-weight: 400;
  text-transform: uppercase;
}

.hero-subtitle {
  color: var(--color-muted-light);
  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  line-height: 1.6;
  max-width: 680px;
  margin-bottom: 34px;
}

/* Compact Info Strip (Indian Venue & Pricing in ₹) */
.hero-info-strip {
  display: flex;
  align-items: center;
  background: rgba(18, 18, 18, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-md);
  padding: 16px 24px;
  margin-bottom: 34px;
  gap: 24px;
  width: 100%;
  max-width: 920px;
  backdrop-filter: blur(12px);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.4);
}

.info-strip-item {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
}

.strip-icon-box {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-xs);
  background: rgba(255, 87, 34, 0.12);
  color: var(--color-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 87, 34, 0.25);
}

.rupee-icon {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 1;
}

.strip-details {
  display: flex;
  flex-direction: column;
}

.strip-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: var(--color-muted);
  font-weight: 600;
}

.strip-val {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--color-offwhite);
  line-height: 1.35;
}

.strip-divider {
  width: 1px;
  height: 38px;
  background-color: rgba(255, 255, 255, 0.12);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

/* Hero live stat bar */
.hero-meta-bar {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--color-muted);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 22px;
  width: 100%;
  max-width: 920px;
}

.meta-stat {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.stat-number {
  color: var(--color-offwhite);
  font-weight: 700;
  font-size: 1.1rem;
}

.stat-desc {
  color: var(--color-muted);
  font-size: 0.78rem;
}

.meta-dot {
  color: var(--color-orange);
  font-size: 0.65rem;
}

/* ==========================================================================
   3. About the Concert Section
   ========================================================================== */
.about-section {
  background-color: var(--color-offwhite);
  color: var(--color-charcoal);
  border-bottom: 1px solid var(--color-offwhite-alt);
}

.editorial-header {
  margin-bottom: 48px;
  max-width: 820px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 52px;
  align-items: center;
}

.body-p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-muted-dark);
  margin-bottom: 30px;
}

.about-spec-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 34px;
}

.spec-card {
  background-color: #FFFFFF;
  border: 1px solid rgba(18, 18, 18, 0.08);
  border-radius: var(--radius-sm);
  padding: 18px 20px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.spec-card:hover {
  transform: translateY(-2px);
  border-color: var(--color-orange);
}

.spec-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.spec-id {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-muted);
  font-weight: 600;
}

.spec-accent {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--color-orange);
}

.spec-title {
  font-size: 1rem;
  color: var(--color-charcoal);
  margin-bottom: 6px;
  line-height: 1.3;
}

.spec-desc {
  font-size: 0.82rem;
  color: var(--color-muted-dark);
  line-height: 1.45;
}

.about-quote-box {
  background-color: var(--color-offwhite-alt);
  border-left: 3px solid var(--color-orange);
  padding: 20px 24px;
  border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
}

.quote-text {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--color-charcoal);
  line-height: 1.5;
  margin-bottom: 8px;
}

.quote-by {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-muted-dark);
  font-weight: 600;
  display: block;
}

/* Media Column */
.media-card-frame {
  background-color: var(--color-charcoal);
  border-radius: var(--radius-md);
  padding: 14px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.16);
}

.media-image-holder {
  position: relative;
  aspect-ratio: 4 / 4.8;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.editorial-main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.media-card-frame:hover .editorial-main-img {
  transform: scale(1.03);
}

.media-badge-tag {
  position: absolute;
  top: 18px;
  left: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(14, 14, 14, 0.9);
  color: var(--color-offwhite);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
}

.badge-dot {
  width: 6px;
  height: 6px;
  background-color: var(--color-orange);
  border-radius: 50%;
}

.media-footer-meta {
  padding: 16px 8px 6px;
}

.meta-headline {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--color-orange);
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}

.meta-subtext {
  font-size: 0.84rem;
  color: var(--color-muted-light);
  line-height: 1.45;
}

/* ==========================================================================
   4. Music Experiences Section
   ========================================================================== */
.experiences-section {
  background-color: #0E0E0E;
  color: var(--color-offwhite);
  border-top: 1px solid var(--color-border-dark);
}

.section-intro {
  margin-bottom: 54px;
}

.experiences-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 28px;
}

/* Panoramic Live Act Card */
.exp-card-panoramic {
  grid-column: span 12;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  background-color: var(--color-charcoal-elevated);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform var(--transition-smooth), border-color var(--transition-fast);
}

.exp-card-panoramic:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.28);
}

.exp-card-panoramic .exp-media-pane {
  position: relative;
  min-height: 380px;
}

.exp-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.exp-card-panoramic:hover .exp-img,
.exp-card-vertical:hover .exp-img {
  transform: scale(1.04);
}

.exp-card-panoramic .exp-info-pane {
  padding: 44px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Vertical Split Cards */
.exp-card-vertical {
  grid-column: span 6;
  background-color: var(--color-charcoal-elevated);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-smooth), border-color var(--transition-fast);
}

.exp-card-vertical:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.28);
}

.exp-card-vertical .exp-media-pane {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.exp-card-vertical .exp-info-pane {
  padding: 34px 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.exp-stage-badge {
  position: absolute;
  top: 18px;
  left: 18px;
  background: rgba(14, 14, 14, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-offwhite);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 6px 14px;
  border-radius: 4px;
  backdrop-filter: blur(8px);
}

.exp-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  color: var(--color-orange);
  margin-bottom: 8px;
  font-weight: 700;
}

.exp-headline {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  color: var(--color-offwhite);
  margin-bottom: 12px;
  line-height: 1.05;
  letter-spacing: 0.03em;
}

.exp-para {
  font-size: 0.95rem;
  color: var(--color-muted-light);
  line-height: 1.6;
  margin-bottom: 22px;
  flex: 1;
}

.exp-spec-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.spec-pill {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--color-offwhite);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 20px;
}

/* ==========================================================================
   Lineup Section (Authentic Festival Poster Layout)
   ========================================================================== */
.lineup-section {
  background-color: var(--color-charcoal-pure);
  border-top: 1px solid var(--color-border-dark);
  border-bottom: 1px solid var(--color-border-dark);
  padding: 85px 0;
}

.lineup-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 16px;
}

.lineup-header .section-title {
  margin-bottom: 0;
}

.lineup-count-pill {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  color: var(--color-orange);
  border: 1px solid var(--color-orange);
  padding: 6px 14px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.lineup-poster-box {
  background: #141414;
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  padding: 46px 36px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.roster-tier {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px 24px;
}

.headliners-tier .artist-bold {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3.2vw, 2.6rem);
  font-weight: 800;
  color: var(--color-offwhite);
  letter-spacing: 0.04em;
  transition: color var(--transition-fast);
  cursor: default;
}

.headliners-tier .artist-bold:hover {
  color: var(--color-orange);
}

.roster-star {
  color: var(--color-orange);
  font-size: 1.15rem;
}

.roster-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  margin: 26px auto;
  max-width: 80%;
}

.roster-divider.thin {
  background: rgba(255, 255, 255, 0.06);
  margin: 20px auto;
}

.secondary-tier .artist-sub {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-muted-light);
  letter-spacing: 0.03em;
}

.secondary-tier .artist-sub:hover {
  color: var(--color-white);
}

.roster-bullet {
  color: var(--color-orange);
  font-size: 0.9rem;
}

.tertiary-tier .artist-minor {
  font-family: var(--font-mono);
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-muted);
  letter-spacing: 0.08em;
}

/* ==========================================================================
   5. Event Schedule Section
   ========================================================================== */
.schedule-section {
  background-color: var(--color-offwhite);
}

.schedule-filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 46px;
}

.filter-tab {
  background: transparent;
  border: 1px solid rgba(18, 18, 18, 0.2);
  color: var(--color-charcoal);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 10px 22px;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-tab:hover {
  border-color: var(--color-charcoal);
}

.filter-tab.active {
  background-color: var(--color-charcoal);
  border-color: var(--color-charcoal);
  color: var(--color-offwhite);
}

.schedule-timeline {
  display: flex;
  flex-direction: column;
  max-width: 920px;
  margin: 0 auto;
}

.timeline-row {
  display: grid;
  grid-template-columns: 160px 48px 1fr;
  align-items: stretch;
  transition: opacity 0.3s ease;
}

.timeline-row.hidden {
  display: none;
}

.time-col {
  padding-top: 24px;
  text-align: right;
  padding-right: 20px;
}

.time-main {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  display: block;
  color: var(--color-charcoal);
}

.time-sub {
  font-size: 0.78rem;
  color: var(--color-muted-dark);
  font-family: var(--font-mono);
}

.spine-col {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spine-dot {
  width: 14px;
  height: 14px;
  background-color: var(--color-charcoal);
  border-radius: 50%;
  margin-top: 30px;
  z-index: 2;
  box-shadow: 0 0 0 4px var(--color-offwhite);
}

.spine-dot.dot-orange {
  background-color: var(--color-orange);
  box-shadow: 0 0 0 4px var(--color-offwhite), 0 0 12px var(--color-orange-glow);
}

.spine-line {
  width: 2px;
  background-color: rgba(18, 18, 18, 0.15);
  flex: 1;
}

.timeline-row:last-child .spine-line {
  display: none;
}

.schedule-card {
  background-color: #FFFFFF;
  border: 1px solid rgba(18, 18, 18, 0.08);
  border-radius: var(--radius-md);
  padding: 26px 30px;
  margin: 12px 0 24px 16px;
  box-shadow: 0 4px 16px rgba(18, 18, 18, 0.04);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.schedule-card:hover {
  transform: translateX(4px);
  box-shadow: 0 8px 24px rgba(18, 18, 18, 0.08);
}

.card-top-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.badge-stage {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.badge-all {
  background-color: #ECE8E0;
  color: var(--color-charcoal);
}

.badge-main {
  background-color: #FFEAE4;
  color: var(--color-orange-deep);
}

.badge-vault {
  background-color: #E2E8F0;
  color: #1E293B;
}

.badge-finale {
  background-color: var(--color-orange);
  color: var(--color-white);
}

.artist-lead {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--color-charcoal);
}

.badge-status {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-muted-dark);
}

.event-title {
  font-family: var(--font-display);
  font-size: 1.65rem;
  letter-spacing: 0.03em;
  color: var(--color-charcoal);
  margin-bottom: 8px;
  line-height: 1.1;
}

.event-desc {
  font-size: 0.92rem;
  color: var(--color-muted-dark);
  line-height: 1.55;
  margin-bottom: 16px;
}

.event-perks {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-muted-dark);
}

.timeline-row.row-finale .schedule-card {
  border: 2px solid var(--color-orange);
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF7F4 100%);
}

/* ==========================================================================
   6. Registration Section (Luxury Charcoal Indian Ticketing Portal)
   ========================================================================= */
.register-section {
  background-color: #0E0E0E;
  color: var(--color-offwhite);
  padding: 110px 0;
  position: relative;
  border-top: 1px solid var(--color-border-dark);
}

.register-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--color-orange) 50%, transparent 100%);
}

.register-header {
  margin-bottom: 54px;
}

.register-layout {
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 48px;
  align-items: start;
}

/* Left: Pass Cards & Order Breakdown */
.register-selector-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.tier-cards-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tier-card {
  background-color: var(--color-charcoal-elevated);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: 24px;
  cursor: pointer;
  transition: all var(--transition-fast);
  outline: none;
}

.tier-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.tier-card.active {
  border-color: var(--color-orange);
  background: linear-gradient(135deg, #1F1B19 0%, #171514 100%);
  box-shadow: 0 0 24px var(--color-orange-glow);
}

.tier-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.tier-badge-pill {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  background: rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 3px;
  color: var(--color-muted-light);
}

.badge-vip {
  background: var(--color-orange);
  color: var(--color-white);
}

.custom-radio-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--color-muted);
  position: relative;
  transition: all var(--transition-fast);
}

.tier-card.active .custom-radio-circle {
  border-color: var(--color-orange);
}

.tier-card.active .custom-radio-circle::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  background-color: var(--color-orange);
  border-radius: 50%;
}

.tier-title {
  font-family: var(--font-display);
  font-size: 1.85rem;
  letter-spacing: 0.03em;
  color: var(--color-offwhite);
  margin-bottom: 6px;
  line-height: 1;
}

.tier-price-row {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: 10px;
}

.currency-symbol {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--color-orange);
  margin-right: 2px;
}

.price-val {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 400;
  color: var(--color-offwhite);
  line-height: 0.95;
  letter-spacing: 0.02em;
}

.price-unit {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-left: 6px;
}

.tier-desc {
  font-size: 0.88rem;
  color: var(--color-muted-light);
  margin-bottom: 16px;
  line-height: 1.45;
}

.tier-benefits-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--color-muted-light);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 14px;
}

.chk {
  color: var(--color-orange);
  font-weight: 700;
  margin-right: 6px;
}

/* Order Breakdown Card */
.order-summary-box {
  background-color: var(--color-charcoal-card);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  padding: 24px;
}

.summary-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.summary-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  letter-spacing: 0.04em;
  color: var(--color-offwhite);
}

.currency-indicator {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-orange);
  background: rgba(255, 87, 34, 0.12);
  padding: 2px 8px;
  border-radius: 2px;
  font-weight: 700;
}

.calc-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.calc-label {
  color: var(--color-muted);
}

.calc-data {
  color: var(--color-offwhite);
  font-weight: 600;
  font-family: var(--font-mono);
}

.calc-rule {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 14px 0;
}

.calc-total-line {
  margin-bottom: 16px;
}

.total-label {
  font-family: var(--font-display);
  font-size: 1.4rem;
  letter-spacing: 0.04em;
  color: var(--color-offwhite);
}

.total-data {
  font-family: var(--font-display);
  font-size: 2.6rem;
  letter-spacing: 0.02em;
  font-weight: 400;
  color: var(--color-orange);
}

.summary-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.78rem;
  color: var(--color-muted);
  line-height: 1.45;
}

.summary-note svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-orange);
}

/* Right: The Registration Form */
.register-form-col {
  background-color: var(--color-charcoal-elevated);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-lg);
  padding: 38px 36px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.form-banner {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.banner-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  letter-spacing: 0.04em;
  color: var(--color-offwhite);
  line-height: 1;
}

.banner-hint {
  font-size: 0.8rem;
  color: var(--color-muted);
}

.req {
  color: var(--color-orange);
  font-weight: bold;
}

.opt-label {
  color: var(--color-muted);
  font-size: 0.75rem;
  font-weight: normal;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.form-row-3 {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 1fr;
  gap: 16px;
}

.form-label {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-offwhite);
  margin-bottom: 8px;
}

.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrap .input-icon {
  position: absolute;
  right: 14px;
  color: var(--color-muted);
  pointer-events: none;
}

.form-control {
  width: 100%;
  background-color: #121212;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-xs);
  color: var(--color-offwhite);
  padding: 13px 16px;
  font-size: 0.95rem;
  transition: all var(--transition-fast);
}

.input-wrap .form-control {
  padding-right: 44px;
}

.phone-wrap {
  display: flex;
}

.country-badge {
  background-color: #242424;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-right: none;
  color: var(--color-offwhite);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  border-radius: var(--radius-xs) 0 0 var(--radius-xs);
}

.phone-input {
  border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
}

.form-control:focus {
  outline: none;
  border-color: var(--color-orange);
  box-shadow: 0 0 0 3px var(--color-orange-glow);
  background-color: #151515;
}

.form-control::placeholder {
  color: var(--color-muted-dark);
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238E8B85' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 40px;
}

.form-select option {
  background-color: var(--color-charcoal);
  color: var(--color-offwhite);
}

/* Stepper Component */
.stepper-box {
  display: flex;
  align-items: center;
}

.stepper-action {
  background-color: #272727;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--color-offwhite);
  font-size: 1.25rem;
  font-weight: 700;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.stepper-action:hover {
  background-color: var(--color-orange);
  color: var(--color-white);
  border-color: var(--color-orange);
}

#btn-decrease {
  border-radius: var(--radius-xs) 0 0 var(--radius-xs);
}

#btn-increase {
  border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
}

.stepper-display {
  text-align: center;
  font-family: var(--font-mono);
  font-weight: 700;
  border-radius: 0;
  border-left: none;
  border-right: none;
  height: 48px;
  -moz-appearance: textfield;
}

.stepper-display::-webkit-outer-spin-button,
.stepper-display::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-textarea {
  resize: vertical;
  min-height: 85px;
}

/* Checkbox */
.form-agreement {
  margin-top: 10px;
  margin-bottom: 24px;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  user-select: none;
}

.checkbox-container input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.custom-chk-box {
  width: 20px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  background-color: #121212;
  flex-shrink: 0;
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.checkbox-container input[type="checkbox"]:checked + .custom-chk-box {
  background-color: var(--color-orange);
  border-color: var(--color-orange);
}

.checkbox-container input[type="checkbox"]:checked + .custom-chk-box::after {
  content: '✓';
  color: var(--color-white);
  font-size: 13px;
  font-weight: bold;
}

.agreement-desc {
  font-size: 0.85rem;
  color: var(--color-muted-light);
  line-height: 1.45;
}

.link-orange {
  color: var(--color-orange);
  text-decoration: underline;
}

/* Validation Errors */
.form-error-msg {
  color: var(--color-error);
  font-size: 0.76rem;
  margin-top: 5px;
  display: none;
}

.form-group.has-error .form-control {
  border-color: var(--color-error);
  background-color: rgba(255, 59, 48, 0.05);
}

.form-group.has-error .form-error-msg,
.form-agreement.has-error .form-error-msg {
  display: block;
}

.btn-hero-submit {
  padding: 19px 32px;
  font-size: 1.02rem;
  letter-spacing: 0.08em;
}

.cta-guarantee-note {
  font-size: 0.78rem;
  color: var(--color-muted);
  text-align: center;
  margin-top: 14px;
  line-height: 1.4;
}

/* ==========================================================================
   FAQ Section
   ========================================================================== */
.faq-section {
  background-color: var(--color-offwhite);
  border-top: 1px solid var(--color-offwhite-alt);
}

.faq-accordion-wrap {
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-item {
  background-color: #FFFFFF;
  border: 1px solid rgba(18, 18, 18, 0.1);
  border-radius: var(--radius-xs);
  overflow: hidden;
  transition: border-color var(--transition-fast);
}

.faq-item.active {
  border-color: var(--color-charcoal);
}

.faq-question {
  width: 100%;
  padding: 20px 24px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-charcoal);
  cursor: pointer;
}

.faq-icon-cross {
  position: relative;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  margin-left: 16px;
}

.faq-icon-cross::before,
.faq-icon-cross::after {
  content: '';
  position: absolute;
  background-color: var(--color-charcoal);
  transition: transform var(--transition-smooth);
}

.faq-icon-cross::before {
  top: 6px;
  left: 0;
  width: 14px;
  height: 2px;
}

.faq-icon-cross::after {
  top: 0;
  left: 6px;
  width: 2px;
  height: 14px;
}

.faq-item.active .faq-icon-cross::after {
  transform: rotate(90deg);
  opacity: 0;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
  padding: 0 24px;
}

.faq-item.active .faq-answer {
  max-height: 280px;
  padding: 0 24px 22px 24px;
}

.faq-answer p {
  font-size: 0.95rem;
  color: var(--color-muted-dark);
  line-height: 1.6;
}

/* ==========================================================================
   8. Footer
   ========================================================================== */
.site-footer {
  background-color: #0A0A0A;
  color: var(--color-offwhite);
  padding: 90px 0 36px;
  border-top: 1px solid var(--color-border-dark);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr 1.1fr 1fr;
  gap: 46px;
  margin-bottom: 60px;
}

.brand-col .footer-tagline {
  color: var(--color-orange);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  margin-top: 8px;
  margin-bottom: 14px;
  font-weight: 600;
}

.brand-col .footer-bio {
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 24px;
}

.footer-social-row {
  display: flex;
  gap: 12px;
}

.social-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #181818;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-offwhite);
  transition: all var(--transition-fast);
}

.social-circle:hover {
  background-color: var(--color-orange);
  color: var(--color-white);
  border-color: var(--color-orange);
  transform: translateY(-2px);
}

.footer-heading {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--color-offwhite);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.footer-link-list, .footer-meta-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.88rem;
  color: var(--color-muted);
}

.footer-link-list a:hover, .footer-anchor:hover {
  color: var(--color-orange);
}

.footer-meta-list li strong {
  display: block;
  color: var(--color-muted-light);
  font-size: 0.8rem;
  font-family: var(--font-mono);
}

.footer-meta-list li span, .footer-meta-list li a {
  display: block;
  margin-top: 2px;
}

.footer-legal-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.82rem;
  color: var(--color-muted);
  flex-wrap: wrap;
  gap: 16px;
}

.legal-links {
  display: flex;
  gap: 10px;
  align-items: center;
}

.legal-links a:hover {
  color: var(--color-offwhite);
}

/* ==========================================================================
   Modal Dialog & Digital Pass
   ========================================================================== */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(8, 8, 8, 0.88);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.modal-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.modal-card {
  background-color: #171717;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius-lg);
  max-width: 560px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 34px;
  position: relative;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.7);
  transform: scale(0.95);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-backdrop.open .modal-card {
  transform: scale(1);
}

.modal-close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  color: var(--color-muted);
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  padding: 4px 8px;
  transition: color var(--transition-fast);
}

.modal-close-btn:hover {
  color: var(--color-white);
}

.modal-header {
  text-align: center;
  margin-bottom: 26px;
}

.modal-stamp-icon {
  width: 54px;
  height: 54px;
  background-color: rgba(255, 87, 34, 0.14);
  color: var(--color-orange);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.modal-title {
  color: var(--color-offwhite);
  font-family: var(--font-display);
  font-size: 2.2rem;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
  line-height: 1;
}

.modal-subtitle {
  color: var(--color-muted-light);
  font-size: 0.92rem;
}

/* Digital Pass Card */
.digital-ticket-pass {
  background-color: var(--color-offwhite);
  color: var(--color-charcoal);
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.ticket-header-strip {
  background-color: var(--color-charcoal);
  color: var(--color-offwhite);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ticket-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ticket-icon {
  color: var(--color-orange);
}

.ticket-brand-text {
  font-family: var(--font-display);
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  font-weight: 800;
}

.ticket-tier-tag {
  background-color: var(--color-orange);
  color: var(--color-white);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 2px;
  letter-spacing: 0.06em;
}

.ticket-body {
  padding: 22px 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ticket-meta-block {
  display: flex;
  flex-direction: column;
}

.meta-field-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: var(--color-muted-dark);
}

.meta-field-val {
  font-size: 0.95rem;
  color: var(--color-charcoal);
}

.attendee-name {
  font-weight: 700;
  font-size: 1.1rem;
}

.mono-val {
  font-family: var(--font-mono);
  font-weight: 700;
}

.email-val {
  color: var(--color-muted-dark);
}

.ticket-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* Perforated Stub Line with Notches */
.ticket-stub-divider {
  display: flex;
  align-items: center;
  position: relative;
  height: 20px;
  background-color: var(--color-offwhite);
}

.stub-notch {
  width: 16px;
  height: 16px;
  background-color: #171717;
  border-radius: 50%;
  position: absolute;
}

.notch-left { left: -8px; }
.notch-right { right: -8px; }

.stub-dash-line {
  width: 100%;
  border-bottom: 2px dashed rgba(18, 18, 18, 0.22);
}

.ticket-footer-strip {
  padding: 16px 20px 22px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: var(--color-offwhite);
}

.qr-code-holder {
  background-color: #FFFFFF;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid rgba(18, 18, 18, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.qr-info-pane {
  display: flex;
  flex-direction: column;
}

.qr-heading {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-charcoal);
}

.qr-subtxt {
  font-size: 0.78rem;
  color: var(--color-muted-dark);
  line-height: 1.35;
  margin: 2px 0 8px;
}

.qr-total-tag {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-orange-deep);
}

.modal-buttons {
  display: flex;
  gap: 14px;
}

.modal-buttons .btn {
  flex: 1;
}

/* ==========================================================================
   Print Format
   ========================================================================== */
@media print {
  body * {
    visibility: hidden;
  }
  .modal-backdrop, .modal-backdrop * {
    visibility: visible;
  }
  .modal-backdrop {
    position: absolute;
    left: 0;
    top: 0;
    background: none;
    padding: 0;
  }
  .modal-close-btn, .modal-buttons, .modal-header {
    display: none !important;
  }
  .digital-ticket-pass {
    border: 2px solid #000;
    box-shadow: none;
  }
}

/* ==========================================================================
   Responsive Breakpoints
   ========================================================================== */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .media-card-frame {
    max-width: 600px;
    margin: 0 auto;
  }

  .register-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 840px) {
  .site-header {
    top: 0;
  }

  .announcement-bar {
    display: none;
  }

  .hero-section {
    height: auto;
    min-height: 100vh;
    max-height: none;
    padding-top: 110px;
    padding-bottom: 60px;
  }

  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .hero-info-strip {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
  }

  .strip-divider {
    width: 100%;
    height: 1px;
  }

  .exp-card-panoramic {
    grid-template-columns: 1fr;
  }

  .exp-card-panoramic .exp-media-pane {
    min-height: 260px;
  }

  .exp-card-vertical {
    grid-column: span 12;
  }

  .timeline-row {
    grid-template-columns: 110px 36px 1fr;
  }

  .time-main {
    font-size: 1.05rem;
  }

  .form-row-2, .form-row-3 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 70px 0;
  }

  .hero-title {
    font-size: 2.6rem;
  }

  .hero-actions {
    width: 100%;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-meta-bar {
    flex-wrap: wrap;
    gap: 12px;
  }

  .meta-dot {
    display: none;
  }

  .about-spec-cards {
    grid-template-columns: 1fr;
  }

  .timeline-row {
    grid-template-columns: 1fr;
    padding-left: 20px;
    border-left: 2px solid rgba(18, 18, 18, 0.15);
    margin-bottom: 24px;
  }

  .spine-col {
    display: none;
  }

  .time-col {
    text-align: left;
    padding: 0;
    margin-bottom: 8px;
  }

  .schedule-card {
    margin: 0;
    padding: 20px;
  }

  .register-form-col {
    padding: 24px 20px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .footer-legal-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .modal-card {
    padding: 24px 18px;
  }

  .ticket-footer-strip {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

#### Output
- The page opens with a hero section and a sticky header that changes on scroll, with a slide-in drawer menu on small screens.
- Clicking a pass card (or using the dropdown) selects the pass type, and the **+ / −** buttons or the number box change the quantity; the order summary recalculates instantly.
- The timetable filter tabs (**All Stages / Main Arena / The Groove Vault**) show only the sessions of the chosen stage, and the FAQ items open one at a time.
- Submitting the form with errors highlights the invalid fields; a valid submission opens the digital pass with the attendee name, email, pass type, quantity, total amount and booking reference.

> **Screenshot:**
> ![AFTERHOURS concert registration output](<concert registration/concert registration.png>)

---

### 2. My City – Nagpur — `nagpur-project/index.html`
A single-page tribute site to the Orange City. It has a sticky navigation bar with a hamburger menu for small screens, a hero section, an **About Nagpur** section, a **Famous Landmarks** photo wall (Deekshabhoomi, Zero Mile Stone, Futala Lake, Sitabuldi Fort, Raman Science Centre, Ambazari Lake and more, plus an "Also worth a visit" strip) and a closing section about Symbiosis Institute of Technology, Nagpur. The internal script adds a **scroll-spy** that highlights the active menu link while scrolling (throttled with `requestAnimationFrame`), reveal-on-scroll animations through `IntersectionObserver`, a back-to-top button, `Escape` / resize handling for the menu and graceful hiding of images that fail to load. The photographs are available in the `images/` folder and are also embedded in the page as Base64 data.

#### `11 JavaScript timers and ES6 module/nagpur-project/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>My City – Nagpur | The Orange City of India</title>
<style>
:root{--navy:#102A43;--royal:#1565C0;--sky:#E8F3FF;--cream:#FFF9F0;--orange:#F28C28;--white:#fff;--ink:#243447;--line:rgba(16,42,67,.14);--r:22px;--sans:"Segoe UI","Helvetica Neue",Arial,sans-serif;--serif:Georgia,"Palatino Linotype",serif;--ease:cubic-bezier(.22,.61,.36,1)}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:90px}
body{margin:0;font-family:var(--sans);color:var(--ink);background:var(--cream);line-height:1.6;overflow-x:hidden}
img{display:block;max-width:100%}a{color:inherit;text-decoration:none}h1,h2,h3,p,ul,figure,dl,dd{margin:0}ul{padding:0;list-style:none}button{font:inherit;cursor:pointer}
:focus-visible{outline:3px solid var(--orange);outline-offset:3px;border-radius:6px}
.wrap{max-width:1200px;margin-inline:auto;padding-inline:clamp(1rem,4vw,2rem)}
.tag{display:inline-block;padding:.35rem .9rem;border:1.5px solid var(--navy);border-radius:99px;font-size:.72rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--navy)}
.reveal{opacity:0;transform:translateY(30px);transition:opacity .8s var(--ease),transform .8s var(--ease);transition-delay:var(--d,0s)}
.reveal.on{opacity:1;transform:none}
header{position:sticky;top:0;z-index:50;padding:.7rem 0}
.bar{display:flex;align-items:center;justify-content:space-between;gap:1rem;background:var(--navy);color:var(--white);border-radius:99px;padding:.5rem .6rem .5rem .6rem;box-shadow:0 12px 30px rgba(16,42,67,.25);position:relative}
.brand{display:flex;align-items:center;gap:.7rem;font-weight:800;letter-spacing:.14em;font-size:.9rem}
.brand i{width:40px;height:40px;border-radius:50%;background:repeating-conic-gradient(var(--orange) 0 20deg,#ffb35c 20deg 40deg);border:3px solid var(--cream);flex:none}
.brand small{color:var(--orange);letter-spacing:.2em;font-size:.72rem}.brand small::before{content:" | ";color:#fff6}
.links{display:flex;gap:.3rem}
.links a{position:relative;padding:.6rem 1.1rem;font-size:.9rem;font-weight:600;border-radius:99px;transition:background .3s,color .3s}
.links a::after{content:"";position:absolute;left:1.1rem;right:1.1rem;bottom:.35rem;height:2px;background:var(--orange);transform:scaleX(0);transform-origin:right;transition:transform .35s var(--ease)}
.links a:hover::after,.links a.act::after{transform:scaleX(1);transform-origin:left}
.links a.act{color:var(--orange)}
.burger{display:none;width:44px;height:44px;border-radius:50%;border:0;background:var(--orange);color:var(--navy);font-weight:900;font-size:1.2rem}
.hero{position:relative;padding:2.5rem 0 5rem;overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1.05fr 1fr;gap:3rem;align-items:center}
h1{font-size:clamp(3.2rem,9vw,7.4rem);line-height:.88;font-weight:900;letter-spacing:-.04em;text-transform:uppercase;color:var(--navy);margin-top:1.2rem}
h1 span{display:block}
h1 .n{color:var(--royal);position:relative;display:inline-block}
h1 .n::after{content:"";position:absolute;left:0;right:0;bottom:-.04em;height:.1em;background:var(--orange);border-radius:9px;transform-origin:left;animation:draw 1s .9s var(--ease) both}
.lead{margin-top:1.6rem;max-width:30rem;font-size:1.2rem;color:#4b5f73}
.cta{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:2rem}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:.8rem 1.8rem;border-radius:99px;font-weight:800;letter-spacing:.03em;border:2.5px solid var(--navy);transition:transform .3s var(--ease),box-shadow .3s var(--ease),background .3s}
.b1{background:var(--orange);box-shadow:5px 5px 0 var(--navy)}.b1:hover{transform:translate(3px,3px);box-shadow:2px 2px 0 var(--navy)}
.b2{background:var(--white);box-shadow:5px 5px 0 var(--royal)}.b2:hover{transform:translate(3px,3px);box-shadow:2px 2px 0 var(--royal)}
.strip{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:2.2rem}
.strip div{background:var(--white);border:1.5px solid var(--line);border-radius:14px;padding:.6rem 1rem}
.strip dt{font-size:.64rem;letter-spacing:.2em;font-weight:800;text-transform:uppercase;color:var(--orange)}.strip dd{font-weight:700;font-size:.92rem;color:var(--navy)}
.art{position:relative;aspect-ratio:1/1.08;max-width:560px;margin-inline:auto;width:100%}
.sun{position:absolute;inset:6% 0 auto 6%;aspect-ratio:1;border-radius:50%;background:repeating-conic-gradient(var(--orange) 0 15deg,#f9a74f 15deg 30deg);box-shadow:0 0 0 14px var(--cream),0 0 0 17px var(--orange);animation:spin 80s linear infinite}
.arch{position:absolute;left:15%;right:9%;bottom:0;top:12%;border-radius:999px 999px 26px 26px;overflow:hidden;border:6px solid var(--navy);background:linear-gradient(var(--royal),var(--navy));box-shadow:14px 14px 0 var(--navy);animation:rise 1s .2s var(--ease) both}
.arch img{width:100%;height:100%;object-fit:cover}
.arch::after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 55%,rgba(16,42,67,.7))}
.arch b{position:absolute;left:0;right:0;bottom:1rem;text-align:center;z-index:2;color:#fff;font-family:var(--serif);font-size:1.3rem}
.float{position:absolute;left:0;top:30%;z-index:3;background:var(--navy);color:var(--white);padding:.7rem 1.1rem;border-radius:99px;font-size:.72rem;font-weight:800;letter-spacing:.16em;border:2.5px solid var(--orange);transform:rotate(-8deg);animation:bob 4.5s ease-in-out infinite}
.dot{position:absolute;border-radius:50%;background:var(--royal)}
.d1{width:46px;height:46px;right:0;top:4%}.d2{width:20px;height:20px;left:6%;bottom:12%;background:var(--orange)}
@keyframes spin{to{transform:rotate(360deg)}}@keyframes draw{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes rise{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}
@keyframes bob{0%,100%{transform:rotate(-8deg) translateY(0)}50%{transform:rotate(-8deg) translateY(-10px)}}
.hero .wrap>div:first-child>*{animation:rise .9s var(--ease) both}
.hero .wrap>div:first-child>*:nth-child(2){animation-delay:.1s}.hero .wrap>div:first-child>*:nth-child(3){animation-delay:.2s}.hero .wrap>div:first-child>*:nth-child(4){animation-delay:.3s}.hero .wrap>div:first-child>*:nth-child(5){animation-delay:.4s}
.tape{padding:2.2rem 0;overflow:hidden}
.tape-in{background:var(--orange);border-block:3px solid var(--navy);transform:rotate(-2deg);margin-inline:-3%;overflow:hidden;white-space:nowrap;box-shadow:0 10px 0 var(--navy)}
.track{display:flex;width:max-content;animation:slide 40s linear infinite}
.tape:hover .track{animation-play-state:paused}
.track span{display:inline-flex;align-items:center;padding:1rem 0;font-weight:900;font-size:clamp(1rem,2.2vw,1.45rem);letter-spacing:.12em;color:var(--navy)}
.track span::after{content:"✦";margin-inline:1.6rem;color:var(--white);font-size:1.2em}
@keyframes slide{to{transform:translateX(-50%)}}
section{padding:5.5rem 0}
.about .wrap{display:grid;grid-template-columns:1fr 1.2fr;gap:3.5rem;align-items:start}
.about .intro{position:sticky;top:110px}
h2{font-size:clamp(2.3rem,5.2vw,4.4rem);line-height:.95;font-weight:900;letter-spacing:-.03em;text-transform:uppercase;color:var(--navy);margin:1rem 0 1.4rem}
h2 em{white-space:nowrap;font-style:normal;color:var(--royal);background:linear-gradient(transparent 62%,var(--orange) 62% 90%,transparent 90%)}
.intro p{font-size:1.12rem;color:#4b5f73}
.rows{display:grid;gap:1.2rem}
.row{display:grid;grid-template-columns:auto 1fr;gap:1.4rem;align-items:center;background:var(--white);border:2.5px solid var(--navy);border-radius:var(--r);padding:1.4rem 1.6rem;box-shadow:7px 7px 0 var(--c);transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
.row:hover{transform:translate(-4px,-4px);box-shadow:12px 12px 0 var(--c)}
.row b{font-size:4.2rem;line-height:1;font-weight:900;color:transparent;-webkit-text-stroke:2px var(--c)}
.row h3{font-size:1.5rem;font-weight:900;color:var(--navy)}.row p{color:#4b5f73;margin-top:.2rem}
.lm{background:var(--navy);color:var(--white);position:relative;overflow:hidden}
.lm::before{content:"";position:absolute;right:-200px;top:-200px;width:520px;height:520px;border-radius:50%;border:2px dashed #f28c2866}
.lm .tag{color:var(--white);border-color:var(--orange)}.lm h2{color:var(--white)}.lm h2 em{color:var(--white)}
.sub{max-width:36rem;font-size:1.15rem;color:#ffffffb8;margin-bottom:3rem}
.wall{display:grid;grid-template-columns:repeat(3,1fr);gap:2.6rem 1.8rem;align-items:start;position:relative}.wall .card:nth-child(3n+2){margin-top:2.6rem}.wall .card:nth-child(13){grid-column:1/-1;margin-top:0}
.card{margin:0;background:var(--white);color:var(--ink);padding:.8rem .8rem 1.3rem;border-radius:8px;box-shadow:0 18px 36px rgba(0,0,0,.35);rotate:var(--t,0deg);transition:transform .45s var(--ease),rotate .45s var(--ease),box-shadow .45s var(--ease);position:relative}
.card:hover{rotate:0deg;transform:translateY(-10px) scale(1.02);box-shadow:0 28px 50px rgba(0,0,0,.5);z-index:3}
.card::before{content:"";position:absolute;top:-13px;left:50%;width:90px;height:26px;margin-left:-45px;background:#f28c28cc;transform:rotate(-3deg);z-index:2}
.ph{position:relative;overflow:hidden;border-radius:4px;background:linear-gradient(145deg,var(--royal),var(--navy));aspect-ratio:var(--a,4/3)}
.ph::before{content:attr(data-f);position:absolute;inset:0;display:grid;place-items:center;text-align:center;padding:1rem;font-family:var(--serif);color:#fffc}
.ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .9s var(--ease)}
.card:hover .ph img{transform:scale(1.12)}
.ph::after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 55%,rgba(16,42,67,.65))}
.loc{position:absolute;left:.7rem;bottom:.7rem;z-index:2;background:var(--orange);color:var(--navy);font-size:.66rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase;padding:.3rem .7rem;border-radius:99px}
.cap{padding:1rem .5rem 0}
.cap small{display:block;font-size:.7rem;font-weight:900;letter-spacing:.24em;color:#8a98a8}
.cap h3{font-size:1.65rem;line-height:1.1;margin:.2rem 0 .5rem}
.cap p{font-size:.96rem;color:#4b5f73}
.big h3{font-size:2.5rem}
.t1{font-family:"Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif;font-weight:700;color:#4A2C8F}
.t2{font-family:Impact,Haettenschweiler,"Arial Narrow Bold","Arial Narrow",sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#C2542D}
.t3{font-family:Cambria,"Hoefler Text",Georgia,serif;font-style:italic;font-weight:400;color:#0E8C8C}
.t4{font-family:"Times New Roman",Times,serif;font-weight:800;font-variant:small-caps;letter-spacing:.04em;color:#6B1426;text-decoration:underline double;text-underline-offset:6px}
.t5{font-family:"Century Gothic","Trebuchet MS","Avenir Next",sans-serif;font-weight:600;color:var(--royal)}
.t6{font-family:"Gill Sans","Gill Sans MT",Candara,Optima,sans-serif;font-weight:300;letter-spacing:.06em;color:#2E7D32}
.t7{font-family:Copperplate,"Copperplate Gothic Light","Bookman Old Style",serif;font-weight:700;letter-spacing:.04em;color:#E65100;text-decoration:underline wavy;text-underline-offset:7px;text-decoration-color:#e6510077}
.t8{font-family:Garamond,"Hoefler Text","Palatino Linotype",Georgia,serif;font-weight:700;letter-spacing:.03em;color:#8D6E00}
.t9{font-family:"Lucida Handwriting","Brush Script MT","Segoe Script",cursive;font-weight:400;color:#D81B60}
.t10{font-family:"Courier New",Courier,monospace;font-weight:700;letter-spacing:.02em;color:#3E7C17}
.t11{font-family:Rockwell,"Roboto Slab","Courier New",serif;font-weight:700;color:#8B5A2B}
.t12{font-family:"Palatino Linotype",Palatino,Georgia,serif;font-style:italic;font-weight:700;color:#37474F;text-decoration:underline dotted;text-underline-offset:6px}
.t13{font-family:"Century Gothic","Trebuchet MS",sans-serif;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:#1A237E}
.more{display:flex;flex-wrap:wrap;gap:1rem;align-items:center;margin-top:1rem}
.more>span{font-weight:900;letter-spacing:.2em;font-size:.78rem;color:var(--orange);text-transform:uppercase}
.chip{display:flex;align-items:center;gap:.8rem;padding:.4rem 1.2rem .4rem .4rem;background:#ffffff14;border:1.5px solid #ffffff40;border-radius:99px;transition:background .3s,transform .3s}
.chip:hover{background:#ffffff26;transform:translateY(-4px)}
.chip img{width:54px;height:54px;border-radius:50%;object-fit:cover}.chip b{display:block;font-size:.95rem}.chip small{color:#ffffffa8}
.col{background:var(--sky)}
.ticket{display:grid;grid-template-columns:1.2fr auto 1fr;background:var(--white);border:3px solid var(--navy);border-radius:var(--r);box-shadow:12px 12px 0 var(--royal);overflow:hidden;position:relative}
.ticket::before,.ticket::after{content:"";position:absolute;left:calc(54% - 14px);width:28px;height:28px;border-radius:50%;background:var(--sky);border:3px solid var(--navy);z-index:2}
.ticket::before{top:-17px}.ticket::after{bottom:-17px}
.tk{padding:clamp(1.6rem,4vw,3rem)}
.tk h2{font-size:clamp(1.4rem,3vw,2.2rem);margin:.8rem 0 1rem;letter-spacing:.02em}
.blink{display:block;padding:1rem 1.2rem;border:3px dashed var(--royal);border-radius:16px;font-size:clamp(1.5rem,3.6vw,2.6rem);line-height:1.1;font-weight:900;text-transform:uppercase;letter-spacing:-.01em;animation:blink 1.4s ease-in-out infinite}
@keyframes blink{0%,42%{opacity:1;color:var(--royal);border-color:var(--royal)}50%,92%{opacity:.25;color:var(--orange);border-color:var(--orange)}100%{opacity:1;color:var(--royal);border-color:var(--royal)}}
.tk p{margin-top:1.1rem;font-size:1.1rem;color:#4b5f73}
.perf{width:0;border-left:3px dashed var(--navy)}
.tpic{position:relative;min-height:320px;background:linear-gradient(145deg,var(--royal),var(--navy))}
.tpic::before{content:attr(data-f);position:absolute;inset:0;display:grid;place-items:center;padding:1rem;text-align:center;font-family:var(--serif);color:#fffc}
.tpic img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.tpic span{position:absolute;right:1rem;bottom:1rem;background:var(--orange);border:2px solid var(--navy);padding:.4rem .9rem;border-radius:99px;font-size:.7rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase;transform:rotate(-4deg)}
footer{background:var(--navy);color:#ffffffc4;padding:4rem 0 1.4rem;position:relative}
footer::before{content:"";position:absolute;top:0;left:0;right:0;height:10px;background:repeating-linear-gradient(90deg,var(--orange) 0 30px,var(--royal) 30px 60px)}
.fgrid{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:2.5rem;padding-bottom:2.5rem}
footer h2{font-size:clamp(1.8rem,4vw,3rem);color:var(--white);margin:0 0 .6rem}footer h2 span{color:var(--orange)}
footer h3{font-size:.76rem;letter-spacing:.24em;text-transform:uppercase;color:var(--orange);margin:0 0 1rem}
footer li+li{margin-top:.5rem}footer li a:hover{color:var(--orange)}
.motif{display:flex;gap:.4rem;margin-top:1rem}.motif i{width:14px;height:14px;border-radius:50%;background:var(--orange)}.motif i:nth-child(2){opacity:.6}.motif i:nth-child(3){opacity:.3}
.credit{border-top:1px solid #ffffff22;padding:1.6rem 0 .6rem;text-align:center}.credit h3{margin:0 0 .6rem}.credit strong{color:var(--white);font-size:1.15rem}.copy{border-top:1px solid #ffffff22;padding-top:1.2rem;font-size:.88rem;display:flex;flex-wrap:wrap;justify-content:space-between;gap:.5rem}
.top{position:fixed;right:1.1rem;bottom:1.1rem;z-index:60;width:52px;height:52px;border-radius:50%;border:2.5px solid var(--navy);background:var(--orange);font-size:1.3rem;font-weight:900;color:var(--navy);box-shadow:4px 4px 0 var(--navy);opacity:0;visibility:hidden;transform:translateY(16px);transition:.35s var(--ease)}
.top.show{opacity:1;visibility:visible;transform:none}.top:hover{background:var(--white)}
@media(min-width:981px){.art{transform:translateX(-56px)}}
@media(max-width:980px){.wall{grid-template-columns:1fr 1fr}.wall .card:nth-child(n){margin-top:0}.wall .card:nth-child(even){margin-top:2rem}.wall .card:nth-child(13){grid-column:1/-1}.about .wrap,.hero .wrap{grid-template-columns:1fr}.about .intro{position:static}}
@media(max-width:820px){.burger{display:block}.links{position:absolute;top:calc(100% + .6rem);left:0;right:0;flex-direction:column;background:var(--navy);border-radius:24px;padding:.8rem;opacity:0;visibility:hidden;transform:translateY(-8px);transition:.3s var(--ease);box-shadow:0 18px 30px rgba(16,42,67,.3)}.links.open{opacity:1;visibility:visible;transform:none}.links a{padding:.9rem 1.1rem}.links a::after{display:none}.brand small{font-size:.6rem;letter-spacing:.12em}.brand{font-size:.8rem;letter-spacing:.1em}
.ticket{grid-template-columns:1fr}.perf{display:none}.ticket::before,.ticket::after{display:none}.tpic{min-height:240px;order:-1}.fgrid{grid-template-columns:1fr 1fr}.fgrid>div:first-child{grid-column:1/-1}}
@media(max-width:600px){section{padding:4rem 0}.wall{grid-template-columns:1fr}.wall .card:nth-child(n){margin-top:0}.btn{flex:1 1 100%}.row{grid-template-columns:1fr;gap:.4rem}.row b{font-size:3rem}.fgrid{grid-template-columns:1fr}.big h3{font-size:2.1rem}.float{left:-2%}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.reveal{opacity:1;transform:none;transition:none}.sun,.float,.arch,.hero .wrap>div:first-child>*,h1 .n::after{animation:none}.track{animation-duration:100s}.blink{animation-duration:2.8s}.card,.card:hover{rotate:0deg;transform:none}}
</style>
</head>
<body>
<header>
<div class="wrap"><div class="bar">
<a class="brand" href="#home" aria-label="Nagpur, The Orange City – home"><i aria-hidden="true"></i><span>NAGPUR<small>THE ORANGE CITY</small></span></a>
<nav aria-label="Primary"><ul class="links" id="links">
<li><a href="#home" class="act">Home</a></li><li><a href="#about">About</a></li><li><a href="#landmarks">Landmarks</a></li><li><a href="#explore">Explore</a></li></ul></nav>
<button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="links" aria-label="Open menu">☰</button>
</div></div>
</header>
<main>
<section class="hero" id="home" aria-labelledby="h1" style="padding-top:2.5rem">
<div class="wrap">
<div>
<span class="tag">Maharashtra, India</span>
<h1 id="h1"><span>My City,</span><span class="n">Nagpur.</span></h1>
<p class="lead">Where heritage meets modernity, where culture thrives, and every corner tells a story.</p>
<div class="cta"><a class="btn b1" href="#explore">Explore Nagpur →</a><a class="btn b2" href="#landmarks">Discover Landmarks</a></div>
<dl class="strip"><div><dt>Known as</dt><dd>The Orange City</dd></div><div><dt>State</dt><dd>Maharashtra</dd></div><div><dt>Famous for</dt><dd>Oranges, Heritage &amp; Culture</dd></div></dl>
</div>
<div class="art">
<div class="sun" aria-hidden="true"></div><span class="dot d1" aria-hidden="true"></span><span class="dot d2" aria-hidden="true"></span>
<div class="arch"><img src="data:...BASE64..." alt="A sunlit market street lined with stalls piled high with fresh oranges" width="450" height="800" fetchpriority="high"></div>
<div class="float">THE HEART OF VIDARBHA</div>
</div>
</div>
</section>

<div class="tape" role="region" aria-label="Welcome to Nagpur – the Orange City of India. Explore its culture, heritage, landmarks and beauty.">
<div class="tape-in"><div class="track" aria-hidden="true"><span>WELCOME TO NAGPUR – THE ORANGE CITY OF INDIA • EXPLORE ITS CULTURE, HERITAGE, LANDMARKS AND BEAUTY •</span><span>WELCOME TO NAGPUR – THE ORANGE CITY OF INDIA • EXPLORE ITS CULTURE, HERITAGE, LANDMARKS AND BEAUTY •</span><span>WELCOME TO NAGPUR – THE ORANGE CITY OF INDIA • EXPLORE ITS CULTURE, HERITAGE, LANDMARKS AND BEAUTY •</span><span>WELCOME TO NAGPUR – THE ORANGE CITY OF INDIA • EXPLORE ITS CULTURE, HERITAGE, LANDMARKS AND BEAUTY •</span><span>WELCOME TO NAGPUR – THE ORANGE CITY OF INDIA • EXPLORE ITS CULTURE, HERITAGE, LANDMARKS AND BEAUTY •</span><span>WELCOME TO NAGPUR – THE ORANGE CITY OF INDIA • EXPLORE ITS CULTURE, HERITAGE, LANDMARKS AND BEAUTY •</span></div></div>
</div>

<section class="about" id="about" aria-labelledby="ab">
<div class="wrap">
<div class="intro reveal"><span class="tag">About Nagpur</span><h2 id="ab">A city with <em>a story</em></h2>
<p>Nagpur, popularly known as the Orange City, is one of Maharashtra's most prominent cities. Located in the geographical heart of India, it is known for its rich cultural heritage, historical landmarks, educational institutions and vibrant lifestyle.</p></div>
<div class="rows">
<article class="row reveal" style="--c:var(--royal)"><b>01</b><div><h3>Heritage</h3><p>A city enriched with historical monuments and cultural traditions.</p></div></article>
<article class="row reveal" style="--c:var(--orange);--d:.1s"><b>02</b><div><h3>Education</h3><p>A growing educational hub with reputed institutions and universities.</p></div></article>
<article class="row reveal" style="--c:var(--navy);--d:.2s"><b>03</b><div><h3>Identity</h3><p>Famous for its oranges, geographical significance and unique cultural character.</p></div></article>
</div></div>
</section>

<section class="lm" id="landmarks" aria-labelledby="lh">
<div class="wrap">
<div class="reveal"><span class="tag">Famous Landmarks</span><h2 id="lh">Places that define <em>Nagpur</em></h2>
<p class="sub">From historical monuments to peaceful lakes, discover the places that make our city special.</p></div>
<div class="wall">
<article class="card big reveal" style="--t:-1.6deg"><figure class="ph" data-f="Deekshabhoomi" style="--a:4/3.4"><img src="data:...BASE64..." alt="Deekshabhoomi, the white Buddhist stupa in Nagpur" loading="lazy"><span class="loc">Dikshabhoomi Road</span></figure><div class="cap"><small>01</small><h3 class="t1">Deekshabhoomi</h3><p>A significant Buddhist monument and an important symbol of social transformation.</p></div></article>
<article class="card reveal" style="--t:1.8deg;--d:.1s"><figure class="ph" data-f="Zero Mile Stone" style="--a:3/3.6"><img src="data:...BASE64..." alt="The tall stone pillar of the Zero Mile Stone among trees" loading="lazy"><span class="loc">Civil Lines</span></figure><div class="cap"><small>02</small><h3 class="t2">Zero Mile Stone</h3><p>A historic geographical marker associated with the measurement of distances across India.</p></div></article>
<article class="card reveal" style="--t:-1deg;--d:.2s"><figure class="ph" data-f="Futala Lake" style="--a:16/10"><img src="data:...BASE64..." alt="Calm water of Futala Lake with the city skyline" loading="lazy"><span class="loc">Telangkhedi</span></figure><div class="cap"><small>03</small><h3 class="t3">Futala Lake</h3><p>A popular lakeside destination known for its scenic beauty and evening atmosphere.</p></div></article>
<article class="card reveal" style="--t:1.4deg"><figure class="ph" data-f="Sitabuldi Fort" style="--a:4/3"><img src="data:...BASE64..." alt="Arched brick buildings inside Sitabuldi Fort" loading="lazy"><span class="loc">Sitabuldi</span></figure><div class="cap"><small>04</small><h3 class="t4">Sitabuldi Fort</h3><p>A historic fort situated in the heart of Nagpur, associated with the Battle of Sitabuldi.</p></div></article>
<article class="card reveal" style="--t:-1.8deg;--d:.1s"><figure class="ph" data-f="Raman Science Centre" style="--a:4/3.2"><img src="data:...BASE64..." alt="Exhibit on Sir C. V. Raman at Raman Science Centre" loading="lazy"><span class="loc">Civil Lines</span></figure><div class="cap"><small>05</small><h3 class="t5">Raman Science Centre</h3><p>An interactive science centre that encourages scientific curiosity and learning.</p></div></article>
<article class="card reveal" style="--t:1deg;--d:.2s"><figure class="ph" data-f="Ambazari Lake" style="--a:16/10"><img src="data:...BASE64..." alt="Sunset rays over Ambazari Lake" loading="lazy"><span class="loc">West Nagpur</span></figure><div class="cap"><small>06</small><h3 class="t6">Ambazari Lake</h3><p>A beautiful natural attraction known for its lake and surrounding greenery.</p></div></article>
<article class="card reveal" style="--t:-1.2deg"><figure class="ph" data-f="Ganesh Temple, Tekdi" style="--a:3/3.4"><img src="data:...BASE64..." alt="Garlanded orange idol of Lord Ganesha at Tekdi temple" loading="lazy"><span class="loc">Near Railway Station</span></figure><div class="cap"><small>07</small><h3 class="t7">Shri Ganesh Temple, Tekdi</h3><p>A famous temple located on a hill near Nagpur Railway Station.</p></div></article>
<article class="card reveal" style="--t:-1.4deg;--d:0.1s"><figure class="ph" data-f="ISKCON Nagpur" style="--a:3/3.7"><img src="data:...BASE64..." alt="Sri Sri Radhagopinath deities at ISKCON temple, Nagpur, adorned with flower garlands" loading="lazy"><span class="loc">Temple</span></figure><div class="cap"><small>08</small><h3 class="t8">ISKCON Nagpur</h3><p>Sri Sri Radhagopinath Temple – a serene Krishna temple known for its ornate altar and devotional atmosphere.</p></div></article>
<article class="card reveal" style="--t:1.6deg;--d:0.2s"><figure class="ph" data-f="Lata Mangeshkar Musical Garden" style="--a:16/10"><img src="data:...BASE64..." alt="White Nataraja statue inside an arch at Lata Mangeshkar Musical Garden" loading="lazy"><span class="loc">Garden</span></figure><div class="cap"><small>09</small><h3 class="t9">Lata Mangeshkar Musical Garden</h3><p>A landscaped city garden with open lawns, winding paths and a striking Nataraja sculpture at its heart.</p></div></article>
<article class="card reveal" style="--t:-1.2deg;--d:0.0s"><figure class="ph" data-f="Sakkardara Garden" style="--a:16/10"><img src="data:...BASE64..." alt="Wooden pavilion bridge over a pond at Sakkardara Garden surrounded by trees" loading="lazy"><span class="loc">Garden</span></figure><div class="cap"><small>10</small><h3 class="t10">Sakkardara Garden</h3><p>A green, peaceful garden with a tranquil pond, a wooden bridge pavilion and shaded walks.</p></div></article>
<article class="card reveal" style="--t:1.2deg;--d:0.1s"><figure class="ph" data-f="Gorewada Lake" style="--a:4/3"><img src="data:...BASE64..." alt="Gorewada Lake with a leopard-print sign and cut-out bird figures on the shore" loading="lazy"><span class="loc">Lake</span></figure><div class="cap"><small>11</small><h3 class="t11">Gorewada Lake</h3><p>A calm lakeside spot on the edge of the city, loved for its birdlife and quiet sunrise views.</p></div></article>
<article class="card reveal" style="--t:-1.6deg;--d:0.2s"><figure class="ph" data-f="Seminary Hills" style="--a:3/3.4"><img src="data:...BASE64..." alt="A narrow railway track running through green forest at Seminary Hills" loading="lazy"><span class="loc">Hills</span></figure><div class="cap"><small>12</small><h3 class="t12">Seminary Hills</h3><p>A leafy hill area with shaded forest paths and a peaceful railway track running through the trees.</p></div></article>
<article class="card reveal" style="--t:0.8deg;--d:0.0s"><figure class="ph" data-f="Sachee Art Gallery" style="--a:21/9"><img src="data:...BASE64..." alt="Sachee Art Gallery interior with framed paintings, sofas and decor pieces" loading="lazy"><span class="loc">Gallery</span></figure><div class="cap"><small>13</small><h3 class="t13">Sachee Art Gallery</h3><p>A creative corner of the city filled with paintings, handicrafts and curated home décor.</p></div></article>
</div>
<div class="more reveal"><span>Also worth a visit</span>
<div class="chip"><img src="data:...BASE64..." alt="Dragon Palace Temple with golden spire" loading="lazy"><div><b>Dragon Palace Temple</b><small>Kamptee</small></div></div>
<div class="chip"><img src="data:...BASE64..." alt="Red entrance gate of Maharajbagh Zoo" loading="lazy"><div><b>Maharajbagh Zoo</b><small>Nagpur</small></div></div></div>
</div>
</section>

<section class="col" id="explore" aria-labelledby="ch">
<div class="wrap"><div class="ticket reveal">
<div class="tk"><h2 id="ch">Where Ambition Meets Innovation</h2>
<strong class="blink">Symbiosis Institute of Technology, Nagpur</strong>
<p>A place where ideas take shape, innovation thrives and tomorrow's technology leaders begin their journey.</p></div>
<div class="perf" aria-hidden="true"></div>
<div class="tpic" data-f="Symbiosis Institute of Technology, Nagpur"><img src="data:...BASE64..." alt="White colonnaded main building of Symbiosis Institute of Technology, Nagpur" loading="lazy"><span>Nagpur Campus</span></div>
</div></div>
</section>


</main>

<footer>
<div class="wrap">
<div class="fgrid">
<div><h2>My City – <span>Nagpur</span></h2><p style="font-family:var(--serif);font-style:italic;font-size:1.15rem">Proud to call the Orange City home.</p><div class="motif" aria-hidden="true"><i></i><i></i><i></i></div></div>
<nav aria-label="Footer"><h3>Quick Links</h3><ul><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#landmarks">Landmarks</a></li><li><a href="#explore">Explore</a></li></ul></nav>
<div><h3>With Love</h3><p>Made with pride for Nagpur, Maharashtra.</p></div>
</div>
<div class="credit"><h3>Designed By</h3><p><strong>Ananya Marghade</strong><br>PRN 24070521004<br>Batch A1</p></div>
</div>
</footer>
<button class="top" id="top" type="button" aria-label="Back to top">↑</button>

<script>
(function(){
var links=document.getElementById('links'),burger=document.getElementById('burger'),top=document.getElementById('top');
var as=[].slice.call(links.querySelectorAll('a')),secs=as.map(function(a){return document.querySelector(a.getAttribute('href'))});
function menu(o){links.classList.toggle('open',o);burger.setAttribute('aria-expanded',String(o));burger.textContent=o?'✕':'☰';burger.setAttribute('aria-label',o?'Close menu':'Open menu')}
burger.addEventListener('click',function(){menu(!links.classList.contains('open'))});
as.forEach(function(a){a.addEventListener('click',function(){menu(false)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});
window.addEventListener('resize',function(){if(innerWidth>820)menu(false)});
top.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
function sc(){var y=scrollY;top.classList.toggle('show',y>500);var m=y+innerHeight*.35,c=0;secs.forEach(function(s,i){if(s&&s.offsetTop<=m)c=i});if(innerHeight+y>=document.documentElement.scrollHeight-4)c=secs.length-1;as.forEach(function(a,i){a.classList.toggle('act',i===c)})}
var t=false;addEventListener('scroll',function(){if(!t){requestAnimationFrame(function(){sc();t=false});t=true}},{passive:true});sc();
var r=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});r.forEach(function(e){io.observe(e)})}else{r.forEach(function(e){e.classList.add('on')})}
document.querySelectorAll('.ph img,.tpic img,.chip img').forEach(function(i){function f(){i.style.display='none'}i.addEventListener('error',f);if(i.complete&&i.naturalWidth===0)f()});
})();
</script>
</body>
</html>
```

> **Note:** long Base64-encoded image data embedded in this file is shortened to `data:...BASE64...` here for readability. The complete file is in the folder.

#### Output
- The page shows the *"My City, Nagpur."* hero and scrolls smoothly between the About, Landmarks and Campus sections.
- The navigation link of the section currently on screen is highlighted, and the **top** button appears after scrolling down.
- Landmark cards fade and slide into view as they enter the viewport.

> **Screenshot:**
> ![My City Nagpur output](<nagpur-project/nagpur site.png>)

---

### 3. RakhiNest — Luxury Rakhi Store — `rakhinest/`
A two-page e-commerce site (`index.html` home page and `shop.html` catalogue) driven by one shared script, `js/app.js`. The data (categories and products) is kept in arrays, the header and footer are rendered by JavaScript, and a **`Store` module** built with an IIFE (closure) keeps the cart, wishlist, coupons, user account and orders, saving them in `localStorage` (with an in-memory fallback if storage is blocked) and notifying the UI through listener callbacks. The script provides a live search suggestion box, category / sort filters read from the URL query string, a product quick-view modal, a cart drawer with quantity controls, coupon codes (`RAKHI10`, `NEST200`), free shipping above ₹999, sign-in / sign-up, a checkout form with regex validators (email, phone, PIN code, UPI ID, card number, expiry, CVV) and an **order tracking** timeline. Timers are used for the auto-hiding toast message (`setTimeout`, 3.2 s) and for the delayed count-up animation of the hero statistics.

#### `11 JavaScript timers and ES6 module/rakhinest/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RakhiNest | Luxury Rakhis and Festive Gifting</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<script>document.documentElement.classList.add("js")</script>
</head>
<body data-page="home" data-nav="home">
<div id="site-header"></div>
<main>
<section class="hero"><div class="wrap hero-grid">
<div class="hero-copy">
<span class="eyebrow">Raksha Bandhan 2026 Collection</span>
<h1>A thread woven with <em>love</em>, finished in silver and gold</h1>
<p>Handcrafted rakhis and keepsake hampers from India's finest artisans, wrapped with care and delivered to your brother wherever he is.</p>
<div class="hero-actions"><a class="btn" href="shop.html">Shop the Collection</a><a class="link" href="shop.html?cat=hampers">Explore Gift Hampers</a></div>
<div class="hero-stats"><div><strong data-count="4.8" data-dec="1">4.8</strong><span>Average rating</span></div><div><strong data-count="25000" data-suffix="+">25,000+</strong><span>Happy families</span></div><div><strong data-count="7" data-suffix=" days">7 days</strong><span>Easy replacement</span></div></div>
</div>
<div class="hero-media"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDM8mWs010hay5BOjtY_5LC6qvwaDO8DQymYAC_BS0482eX5lsC21BFGyDKTpIYvv7Z1bhMAauohfwM5JfTgJwcKwp7IkGCy4pA9QQpTwD77mz4rUsUXhNf_ZocEkkW8UZf4joZxVhB4gCNOPdfFzAkVBQHHm-1goz6TOmRrvqgOkenE62zK4rmpIcIZL03lkxkWx7Ak21utwq8Fgku7_6XazSNI827ADilSB-c74" alt="Handcrafted silver and rudraksha rakhi"><div class="hero-tag"><b>Royal Rudraksha Silver</b><span>Our most gifted rakhi this season</span></div></div>
</div></section>
<section class="sec"><div class="wrap">
<div class="reveal sec-head center"><span class="eyebrow">Shop by category</span><h2>Find the Perfect Rakhi</h2><div class="orn"><i></i></div></div>
<div class="cat-grid" id="cat-grid"></div>
</div></section>
<section class="sec alt"><div class="wrap">
<div class="reveal sec-head"><div><span class="eyebrow">Most loved</span><h2>Bestselling Rakhis</h2><p>The designs our customers return to every Raksha Bandhan.</p></div><a class="link" href="shop.html?sort=popular">View all</a></div>
<div class="prod-grid" id="bestsellers"></div>
</div></section>
<section class="combo"><div class="wrap combo-grid">
<div class="combo-copy reveal">
<span class="eyebrow">Special Rakhi Combo</span>
<h2>The Grand Festive <em>Keepsake Hamper</em></h2>
<p>Two designer rakhis, assorted mithai, dry fruits and a scented candle, arranged in a velvet keepsake chest.</p>
<ul><li class="reveal">Two handcrafted designer rakhis</li><li class="reveal">Premium kaju katli and dry fruits</li><li class="reveal">Personalised greeting card included</li></ul>
<div class="combo-price"><b>₹2,999</b><s>₹3,799</s></div>
<a class="btn gold" href="#" data-act="quick" data-id="12">Shop the Hamper</a>
</div>
<div class="combo-media reveal"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjlOBSEAeYLLGMt50lFj8TbX8sieQWxIIi55aNKX8vPHb_VGrdgCm_tbYULfWQEk19CPIEkSQDekOK2ggMH8wijOS5wCRFcR-X1YjCDjgEpm-ZwpAf0y_cjPaBCUSA0y6flyQDlxZJX4vhKHQ3qyZZzMMgYTOUWTHk_TfECxctyFewNLwVXHyhtgP9iVUyUyzJweKpBFmj9UbHOFpKAiL610HJq0ULxIaV1tG2iCI" alt="Grand festive hamper with velvet keepsake chest"></div>
</div></section>
<section class="sec" id="why"><div class="wrap">
<div class="reveal sec-head center"><span class="eyebrow">Why RakhiNest</span><h2>Crafted with Care, Delivered with Love</h2><div class="orn"><i></i></div></div>
<div class="why">
<div class="reveal"><svg viewBox="0 0 24 24"><path d="M12 3 4 7v5c0 4.500 3.400 8 8 9 4.600-1 8-4.500 8-9V7l-8-4Z"/><path d="m9 12 2 2 4-4"/></svg><h3>Authentic Materials</h3><p>Hallmarked 925 silver, genuine zari and hand-set stones in every piece.</p></div>
<div class="reveal"><svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.500" r="1.500"/><circle cx="17" cy="17.500" r="1.500"/></svg><h3>Delivery Across India</h3><p>Free shipping above ₹999 with guaranteed delivery before the festival.</p></div>
<div class="reveal"><svg viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="12"/><path d="M12 9v12M3 13h18M12 9c-3 0-5-1-5-3s3-3 5 3c2-6 5-5 5-3s-2 3-5 3Z"/></svg><h3>Gift-Ready Packaging</h3><p>Keepsake boxes with roli, chawal and a card you can personalise.</p></div>
<div class="reveal"><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-3-6.200M20 4v5h-5"/></svg><h3>7 Day Replacement</h3><p>Damaged or not as expected? We replace it, no questions asked.</p></div>
</div>
</div></section>
<section class="sec alt" id="collections"><div class="wrap">
<div class="reveal sec-head"><div><span class="eyebrow">Featured collections</span><h2>Curated for the Season</h2></div></div>
<div class="collections">
<a class="coll reveal" href="shop.html?cat=designer"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0" alt=""><div><span class="eyebrow" style="color:var(--champagne)">Royal Heritage</span><h3>Pearl and Zari Designer Rakhis</h3><p>Chandrika, kundan and meenakari motifs inspired by Indian courts.</p><span class="link">Explore</span></div></a>
<a class="coll reveal" href="shop.html?cat=silver"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI" alt=""><div><span class="eyebrow" style="color:var(--champagne)">Sacred Silver</span><h3>Pure 925 Silver</h3><p>Rakhis to be worn long after the festival.</p><span class="link">Explore</span></div></a>
</div>
</div></section>
<section class="sec" id="reviews"><div class="wrap">
<div class="reveal sec-head center"><span class="eyebrow">Customer love</span><h2>Words from Our Families</h2><div class="orn"><i></i></div></div>
<div class="tests">
<div class="test reveal"><div class="s">★★★★★</div><p>The silver rudraksha rakhi arrived in a beautiful box. My brother in Dubai wore it the same day.</p><b>Priya Deshmukh</b><span>Nagpur</span></div>
<div class="test reveal"><div class="s">★★★★★</div><p>The Bhaiya Bhabhi set looked even better in person. Packaging felt truly premium.</p><b>Ananya Iyer</b><span>Bengaluru</span></div>
<div class="test reveal"><div class="s">★★★★★</div><p>Ordered the kaju katli hamper for my brothers. It reached two days early and was fresh.</p><b>Meera Kapoor</b><span>New Delhi</span></div>
</div>
</div></section>
<section class="news" id="newsletter"><div class="wrap news-grid">
<div class="reveal"><span class="eyebrow">Join the circle</span><h2>Early access to festive collections and 10% off your first order</h2></div>
<div class="reveal"><form id="news-form" novalidate><input type="email" placeholder="Your email address" aria-label="Email address"><button type="submit">Subscribe</button></form><div class="msg" id="news-msg" style="margin-top:12px"></div><small>We send only occasional, thoughtful updates. Unsubscribe anytime.</small></div>
</div></section>
</main>
<div id="site-footer"></div>
<script src="js/app.js"></script>
</body>
</html>
```

#### `11 JavaScript timers and ES6 module/rakhinest/shop.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shop Rakhis | RakhiNest</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<script>document.documentElement.classList.add("js")</script>
</head>
<body data-page="shop" data-nav="shop">
<div id="site-header"></div>
<section class="page-head"><div class="wrap"><div class="crumbs"><a href="index.html">Home</a> / <span id="crumb-now">Shop</span></div><h1 id="shop-title">All Rakhis &amp; Gifts</h1></div></section>
<main class="wrap shop-layout">
<aside class="filters" id="filters"></aside>
<div>
<div class="toolbar"><button class="btn ghost sm filter-toggle" data-act="filters">Filters</button><span id="result-count"></span><label>Sort by <select id="sort"></select></label></div>
<div class="prod-grid three" id="grid"></div>
</div>
</main>
<div id="site-footer"></div>
<script src="js/app.js"></script>
</body>
</html>
```

#### `11 JavaScript timers and ES6 module/rakhinest/js/app.js`
```js
const IMAGES = {
 "logo": "https://lh3.googleusercontent.com/aida/AEtjO1XPkQy8D8WHPxHfjlzBtKbFs2X3C6f3hifvobsuR8OVmcRe_28TusOTzf5MVQSWUoG9M_LUNat_mqOZKLTdN-VXazrlb2UvUS5l-6HdjjFkd2tQbGNEPeIuKStgLgRSFVnxYHPDsSwrSsleLbXB98UhE1bT3mfU0_Uw-l5105DlTQrNcq0A8h8_hwzSVN-jTn2Y7e2NOtQg3bjwJxCU_BcqT95i7Lpi4-fZA8Ip087N",
 "hero": "https://lh3.googleusercontent.com/aida-public/AB6AXuCDM8mWs010hay5BOjtY_5LC6qvwaDO8DQymYAC_BS0482eX5lsC21BFGyDKTpIYvv7Z1bhMAauohfwM5JfTgJwcKwp7IkGCy4pA9QQpTwD77mz4rUsUXhNf_ZocEkkW8UZf4joZxVhB4gCNOPdfFzAkVBQHHm-1goz6TOmRrvqgOkenE62zK4rmpIcIZL03lkxkWx7Ak21utwq8Fgku7_6XazSNI827ADilSB-c74",
 "chandrika": "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0",
 "grand": "https://lh3.googleusercontent.com/aida-public/AB6AXuAjlOBSEAeYLLGMt50lFj8TbX8sieQWxIIi55aNKX8vPHb_VGrdgCm_tbYULfWQEk19CPIEkSQDekOK2ggMH8wijOS5wCRFcR-X1YjCDjgEpm-ZwpAf0y_cjPaBCUSA0y6flyQDlxZJX4vhKHQ3qyZZzMMgYTOUWTHk_TfECxctyFewNLwVXHyhtgP9iVUyUyzJweKpBFmj9UbHOFpKAiL610HJq0ULxIaV1tG2iCI"
};
const CATEGORIES = [
 {
  "slug": "silver",
  "name": "Silver Rakhis",
  "tagline": "Hallmarked 925 sterling silver",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI"
 },
 {
  "slug": "designer",
  "name": "Designer Rakhis",
  "tagline": "Zari, kundan and meenakari",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8Ds2Vi0AjBIf4EO2k6xawd5bFhFWSENLeINRPXuylexs2YdupuyeOvKmWS0SIYMgCCkv4K0gtwf5jD0jZP9gQZuN66G3tK7lXYLqECGphZCz53t__0kWntLNR90Q6WwkHzjUu5H-GWKYa3_97Y3TZrJktK6atk-jTNC9qRp1j-m9IsrijdunSHFHpJNFvOFeYdJsxcWWGfq_ncn6jYGokFrSvn2cHkVjCKrhQrU"
 },
 {
  "slug": "bhabhi",
  "name": "Bhaiya Bhabhi",
  "tagline": "Matching rakhi and lumba sets",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuACjKjn5NuKdRxYN1azJNd5lUbSBUgt3oZgz0LnCutr6kwfQaijsyeWzXIsv9QkntEd4t2KkkOU4Und7A_OzTUiytrvSaLV-WFgX1t9j_FxKHrA_JdVFd-CVCgz-qf7hKK8m3ydSyNIBIiEeOTnBXA98bzDAbw8ZlhHN_YpzlSiUQwVmgDmIm15-b1sUn-u-TfFOStW72bb8_NzGCNId88IDWWk8M1IUvkbcYmJI6Q"
 },
 {
  "slug": "kids",
  "name": "Kids Rakhis",
  "tagline": "Child-safe, playful designs",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCXy2keGLQIX5oOrEnphOH-lX-DSuTR74NTJE6ZeLTKpGuN5v6n_uuP3l1dDBv_LVG9ictSnrjx5iLYYOu258I2926mdHfsVBHDEyxa5mJJblxOhx8a_znWwIV4zixoyisHo3zQwFOFfbpCorTjmnihJEs4IHg-5EwbMkRluScXm2Jp-4ygamTyx5eNf7ohkNNdEca8kD_7uQLuQShINB3B8g7Ue6_bDiBTddJXTUU"
 },
 {
  "slug": "evil-eye",
  "name": "Evil Eye",
  "tagline": "Protective nazar charms",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sYtVkIjbaZ5idaSsjarRCsaJNgASLuRM9s1o_W_ZnbiYDtfkU6CFo6njhMbHkJbt-cy0L9HCuxfgsKaYWrVpNPDQn6Ih7MJlwRg4gn9Pz4lc07Mgu_mlJhU6Ai1r6QcINYrzNd_dcN42-nJewnogYcQQM4v6crygAZAfemIqyyVrN_0En2gP8KoDzLYZ0gltiM53han9siq41eX49nyvlKgMRGV17qj4vDCE14g"
 },
 {
  "slug": "hampers",
  "name": "Gift Hampers",
  "tagline": "Sweets, dry fruits and keepsakes",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAjlOBSEAeYLLGMt50lFj8TbX8sieQWxIIi55aNKX8vPHb_VGrdgCm_tbYULfWQEk19CPIEkSQDekOK2ggMH8wijOS5wCRFcR-X1YjCDjgEpm-ZwpAf0y_cjPaBCUSA0y6flyQDlxZJX4vhKHQ3qyZZzMMgYTOUWTHk_TfECxctyFewNLwVXHyhtgP9iVUyUyzJweKpBFmj9UbHOFpKAiL610HJq0ULxIaV1tG2iCI"
 }
];
const PRODUCTS = [
 {
  "id": 1,
  "slug": "royal-rudraksha-silver",
  "name": "Royal Rudraksha Silver Rakhi",
  "category": "silver",
  "short": "Handcrafted silver and sacred rudraksha rakhi on a hand-twisted silk thread.",
  "description": "Crafted by master artisans, this rakhi pairs hand-finished sterling silver with genuine rudraksha beads. It arrives in a keepsake gift box with roli, chawal and a handwritten greeting card.",
  "price": 1899,
  "mrp": 2499,
  "rating": 4.9,
  "reviews": 128,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCDM8mWs010hay5BOjtY_5LC6qvwaDO8DQymYAC_BS0482eX5lsC21BFGyDKTpIYvv7Z1bhMAauohfwM5JfTgJwcKwp7IkGCy4pA9QQpTwD77mz4rUsUXhNf_ZocEkkW8UZf4joZxVhB4gCNOPdfFzAkVBQHHm-1goz6TOmRrvqgOkenE62zK4rmpIcIZL03lkxkWx7Ak21utwq8Fgku7_6XazSNI827ADilSB-c74",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuD5LhAIx2gClGmL8AUZxC9l8iNcOOe_MoIBF89o8GV4oOtTZ02KXP0vx6pWrOE_zsCxeefpkrDtPnUbiracw2uR-IGSWIxVbfWLgyK1TLBYAc8tpNkMv5O2grzBea-tJJHwN6YUu_jogpcGdPXD3_7vRqXwihNbVfT5XAw28a900pWF2Gwu3dpttB8WHLIzgWyXBIsj0Cvz5ZzpVSd6Owsmr2yoxQqVE8HXUO2b0xU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI"
  ],
  "badge": "Bestseller"
 },
 {
  "id": 2,
  "slug": "zari-silk-rakhi",
  "name": "Golden Zari Silk Rakhi",
  "category": "designer",
  "short": "Traditional silk rakhi woven with golden zari resham.",
  "description": "Woven with real zari thread on soft Banarasi-style silk, this rakhi is a timeless choice for the traditional brother. Includes roli, chawal and mishri.",
  "price": 649,
  "mrp": 899,
  "rating": 4.7,
  "reviews": 214,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8Ds2Vi0AjBIf4EO2k6xawd5bFhFWSENLeINRPXuylexs2YdupuyeOvKmWS0SIYMgCCkv4K0gtwf5jD0jZP9gQZuN66G3tK7lXYLqECGphZCz53t__0kWntLNR90Q6WwkHzjUu5H-GWKYa3_97Y3TZrJktK6atk-jTNC9qRp1j-m9IsrijdunSHFHpJNFvOFeYdJsxcWWGfq_ncn6jYGokFrSvn2cHkVjCKrhQrU"
  ],
  "badge": "Bestseller"
 },
 {
  "id": 3,
  "slug": "pearl-925-silver",
  "name": "Freshwater Pearl 925 Silver Rakhi",
  "category": "silver",
  "short": "Opulent 925 sterling silver rakhi set with freshwater pearls.",
  "description": "Hallmarked 925 sterling silver centrepiece with lustrous freshwater pearls. The rakhi can be worn later as a bracelet.",
  "price": 2299,
  "mrp": 2999,
  "rating": 4.8,
  "reviews": 96,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuD5LhAIx2gClGmL8AUZxC9l8iNcOOe_MoIBF89o8GV4oOtTZ02KXP0vx6pWrOE_zsCxeefpkrDtPnUbiracw2uR-IGSWIxVbfWLgyK1TLBYAc8tpNkMv5O2grzBea-tJJHwN6YUu_jogpcGdPXD3_7vRqXwihNbVfT5XAw28a900pWF2Gwu3dpttB8WHLIzgWyXBIsj0Cvz5ZzpVSd6Owsmr2yoxQqVE8HXUO2b0xU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBmVzdTA2_LmvbMqmpPIcKGd4UYUD-EHxw5vdUIHhao2SzE0QLu9vNJlWiP90OWoNh3UxfDZYCPoS-Fy9L9p7kb6LZjENjDy-pOei9KC-gT37tko44WJcLbJbpobvabik9_UaeUmiXn3yvIpnwykGXgbmkKik6nf11y-ip9teJxLZYetZA3PQhVE6TB8Du-fQ2wcpPk0vwjyVSzkekZ6ufqY3kvhkQLn_zm4hFNO5Y"
  ],
  "badge": "New"
 },
 {
  "id": 4,
  "slug": "royal-bhaiya-bhabhi-set",
  "name": "Royal Bhaiya Bhabhi Rakhi Set",
  "category": "bhabhi",
  "short": "Matching rakhi and hanging lumba for brother and sister-in-law.",
  "description": "A coordinated pair in deep maroon and gold with beadwork and tassels. Comes in a two-compartment gift box.",
  "price": 999,
  "mrp": 1399,
  "rating": 4.8,
  "reviews": 173,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6NI-eUdzEevTeQmFTJIyuFugJ9FbSS2LC8D5mRXUIyfIuMEIlkBeN2dMTEyrFGq5ntFCKsk5lTw5jBpBNl4S-1z-mHMrpYiLxehU_t9R8G1X5JoPyJP_t6NGeA7dyerH-AEQBTglRfQ0X46eCc5gPk97A7CfC2dH-za-SvlVNvorDHCKoxdWN51vBN3MUiwoYQtmYJqDKVP7Y9YsK0aqmv7OiFn7T7aNuCjpBSU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCvdK2xemCuP3FyXxkTLtlzTzDpOF3Nt22BtAyxeeG4rRldQZ5nf-2TqK6fd-21bIxPHhfBcpjdCLEE91CfYTQfgHOkE45panibFSW2b2UOOw0ctYN4M8YGezzZTahuyHNl9Gxz_HZiOaes_2EIynCRVwwTHujX6ErBb-Xt0J8ktntzS6FAMKS7yRloc_MmmkqBZySTTg_FidA1CtcOctxzrC0CEMVi0AGY3Pi_mn4",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuACjKjn5NuKdRxYN1azJNd5lUbSBUgt3oZgz0LnCutr6kwfQaijsyeWzXIsv9QkntEd4t2KkkOU4Und7A_OzTUiytrvSaLV-WFgX1t9j_FxKHrA_JdVFd-CVCgz-qf7hKK8m3ydSyNIBIiEeOTnBXA98bzDAbw8ZlhHN_YpzlSiUQwVmgDmIm15-b1sUn-u-TfFOStW72bb8_NzGCNId88IDWWk8M1IUvkbcYmJI6Q"
  ],
  "badge": "Bestseller"
 },
 {
  "id": 5,
  "slug": "cartoon-kids-rakhi",
  "name": "Playful Cartoon Kids Rakhi",
  "category": "kids",
  "short": "Bright, child-safe rakhi with a friendly character motif.",
  "description": "Soft enamel finish with rounded edges and a stretchable thread that is gentle on small wrists.",
  "price": 349,
  "mrp": 499,
  "rating": 4.6,
  "reviews": 89,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBMRPx4Aa8o0MT-Cuo90DLOEPh7LEde6IzVuGRZ2jijy0IXr-LA_6XpfA5I3AQ8kw-ihvLbyKwiewyjj-Bxgq0WbF73ZWsNMbErxupZ6_N7CCTmq5OwGWSFrqfdqqAuISwGH2VkA0cV6h78LBL70rDirYh8L_0T_Fmv7m_Un8dCAvAY7FzamqHI2B5xLR4Br_3viGTGfX9IJZWPLnPkg1Sey7yUgrJy-L7skebuY-s",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCXy2keGLQIX5oOrEnphOH-lX-DSuTR74NTJE6ZeLTKpGuN5v6n_uuP3l1dDBv_LVG9ictSnrjx5iLYYOu258I2926mdHfsVBHDEyxa5mJJblxOhx8a_znWwIV4zixoyisHo3zQwFOFfbpCorTjmnihJEs4IHg-5EwbMkRluScXm2Jp-4ygamTyx5eNf7ohkNNdEca8kD_7uQLuQShINB3B8g7Ue6_bDiBTddJXTUU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": ""
 },
 {
  "id": 6,
  "slug": "cobalt-evil-eye-rakhi",
  "name": "Cobalt Evil Eye Rakhi",
  "category": "evil-eye",
  "short": "Turkish evil eye amulet rakhi embedded in fine gold beadwork.",
  "description": "A protective cobalt-blue nazar amulet set in gold-tone beadwork, a popular pick for younger brothers.",
  "price": 549,
  "mrp": 749,
  "rating": 4.7,
  "reviews": 142,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sYtVkIjbaZ5idaSsjarRCsaJNgASLuRM9s1o_W_ZnbiYDtfkU6CFo6njhMbHkJbt-cy0L9HCuxfgsKaYWrVpNPDQn6Ih7MJlwRg4gn9Pz4lc07Mgu_mlJhU6Ai1r6QcINYrzNd_dcN42-nJewnogYcQQM4v6crygAZAfemIqyyVrN_0En2gP8KoDzLYZ0gltiM53han9siq41eX49nyvlKgMRGV17qj4vDCE14g",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXgOtq1o5obV9a5_Zr-q4lG4JzItrR4cgInFAzNfHzbCJfiEbgMR_ggNg7_-zaMdnMAjOziuga-nk_DXsWUN5s_YGTengxlJhNAinA_1i3J6Ykxpk1_fSYYCbrAKpYOcr2bBtaVaX-jEKzl6Ew5dzfKO5gWHJobwE9GjPejjM6dHJQJRBkJIL5b7KZSzPJsy0E_DqOZ9iprg_ctkCOIiTQsUNAWoS5cejp23t_lA",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": ""
 },
 {
  "id": 7,
  "slug": "gourmet-kaju-katli-hamper",
  "name": "Gourmet Kaju Katli Hamper",
  "category": "hampers",
  "short": "Artisanal kaju katli, dry fruits and a designer rakhi in a festive box.",
  "description": "Includes 250 g kaju katli, roasted almonds, a designer rakhi, roli chawal and a greeting card, packed in a hand-finished box.",
  "price": 1599,
  "mrp": 1999,
  "rating": 4.9,
  "reviews": 77,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuClld473OTQcygRDv_8OB8dns-5v8lQC9fBBxZO8LOKz6ZpFoYsjnb_o19CTLDO-CsozV7DARzNuEGOMlif7D9PVOzRkjHJeWsadcyZDqWYMGOLPMVPY3fx7ZscuWCfoAGuz52TyTmRwOEAeDOLWZ40yM8XzVItf4_qhLAdklKHuyEPZqK4Zqp3pRYQ5raoa6n7nA64oDKuEuPW2I4BZQGzUxLPxiZxI1Zlbo6mkJY",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAjlOBSEAeYLLGMt50lFj8TbX8sieQWxIIi55aNKX8vPHb_VGrdgCm_tbYULfWQEk19CPIEkSQDekOK2ggMH8wijOS5wCRFcR-X1YjCDjgEpm-ZwpAf0y_cjPaBCUSA0y6flyQDlxZJX4vhKHQ3qyZZzMMgYTOUWTHk_TfECxctyFewNLwVXHyhtgP9iVUyUyzJweKpBFmj9UbHOFpKAiL610HJq0ULxIaV1tG2iCI",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": "Gift Favourite"
 },
 {
  "id": 8,
  "slug": "chandrika-pearl-zari",
  "name": "Chandrika Pearl and Zari Rakhi",
  "category": "designer",
  "short": "Royal chandrika pearl rakhi with golden zari detailing.",
  "description": "A flatlay favourite: a chandrika motif of seed pearls bordered in zari, on a double-strand silk thread.",
  "price": 799,
  "mrp": 1099,
  "rating": 4.7,
  "reviews": 118,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8Ds2Vi0AjBIf4EO2k6xawd5bFhFWSENLeINRPXuylexs2YdupuyeOvKmWS0SIYMgCCkv4K0gtwf5jD0jZP9gQZuN66G3tK7lXYLqECGphZCz53t__0kWntLNR90Q6WwkHzjUu5H-GWKYa3_97Y3TZrJktK6atk-jTNC9qRp1j-m9IsrijdunSHFHpJNFvOFeYdJsxcWWGfq_ncn6jYGokFrSvn2cHkVjCKrhQrU"
  ],
  "badge": ""
 },
 {
  "id": 9,
  "slug": "sudarshan-chakra-silver",
  "name": "Sudarshan Chakra Silver Rakhi",
  "category": "silver",
  "short": "Pure 925 silver rakhi with an intricately engraved Sudarshan Chakra.",
  "description": "Symbolising protection, the Sudarshan Chakra is engraved by hand on pure 925 silver and fitted on a red mauli thread.",
  "price": 1799,
  "mrp": 2299,
  "rating": 4.9,
  "reviews": 64,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBmVzdTA2_LmvbMqmpPIcKGd4UYUD-EHxw5vdUIHhao2SzE0QLu9vNJlWiP90OWoNh3UxfDZYCPoS-Fy9L9p7kb6LZjENjDy-pOei9KC-gT37tko44WJcLbJbpobvabik9_UaeUmiXn3yvIpnwykGXgbmkKik6nf11y-ip9teJxLZYetZA3PQhVE6TB8Du-fQ2wcpPk0vwjyVSzkekZ6ufqY3kvhkQLn_zm4hFNO5Y",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuD5LhAIx2gClGmL8AUZxC9l8iNcOOe_MoIBF89o8GV4oOtTZ02KXP0vx6pWrOE_zsCxeefpkrDtPnUbiracw2uR-IGSWIxVbfWLgyK1TLBYAc8tpNkMv5O2grzBea-tJJHwN6YUu_jogpcGdPXD3_7vRqXwihNbVfT5XAw28a900pWF2Gwu3dpttB8WHLIzgWyXBIsj0Cvz5ZzpVSd6Owsmr2yoxQqVE8HXUO2b0xU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI"
  ],
  "badge": "New"
 },
 {
  "id": 10,
  "slug": "gulab-kangan-lumba-pair",
  "name": "Gulab Kangan Lumba Pair",
  "category": "bhabhi",
  "short": "Rose-gold metal rakhi and lumba pair with rose motifs.",
  "description": "A delicate rose-gold pair with enamel roses. The lumba is designed as a bangle charm for the bhabhi.",
  "price": 899,
  "mrp": 1199,
  "rating": 4.6,
  "reviews": 101,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCvdK2xemCuP3FyXxkTLtlzTzDpOF3Nt22BtAyxeeG4rRldQZ5nf-2TqK6fd-21bIxPHhfBcpjdCLEE91CfYTQfgHOkE45panibFSW2b2UOOw0ctYN4M8YGezzZTahuyHNl9Gxz_HZiOaes_2EIynCRVwwTHujX6ErBb-Xt0J8ktntzS6FAMKS7yRloc_MmmkqBZySTTg_FidA1CtcOctxzrC0CEMVi0AGY3Pi_mn4",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6NI-eUdzEevTeQmFTJIyuFugJ9FbSS2LC8D5mRXUIyfIuMEIlkBeN2dMTEyrFGq5ntFCKsk5lTw5jBpBNl4S-1z-mHMrpYiLxehU_t9R8G1X5JoPyJP_t6NGeA7dyerH-AEQBTglRfQ0X46eCc5gPk97A7CfC2dH-za-SvlVNvorDHCKoxdWN51vBN3MUiwoYQtmYJqDKVP7Y9YsK0aqmv7OiFn7T7aNuCjpBSU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuACjKjn5NuKdRxYN1azJNd5lUbSBUgt3oZgz0LnCutr6kwfQaijsyeWzXIsv9QkntEd4t2KkkOU4Und7A_OzTUiytrvSaLV-WFgX1t9j_FxKHrA_JdVFd-CVCgz-qf7hKK8m3ydSyNIBIiEeOTnBXA98bzDAbw8ZlhHN_YpzlSiUQwVmgDmIm15-b1sUn-u-TfFOStW72bb8_NzGCNId88IDWWk8M1IUvkbcYmJI6Q"
  ],
  "badge": ""
 },
 {
  "id": 11,
  "slug": "nazar-battu-sapphire",
  "name": "Nazar Battu Sapphire Rakhi",
  "category": "evil-eye",
  "short": "Evil eye protective rakhi with sapphire-blue glass beads.",
  "description": "Fine sapphire glass beads frame a nazar battu charm. Light enough for everyday wear well after the festival.",
  "price": 599,
  "mrp": 799,
  "rating": 4.5,
  "reviews": 73,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXgOtq1o5obV9a5_Zr-q4lG4JzItrR4cgInFAzNfHzbCJfiEbgMR_ggNg7_-zaMdnMAjOziuga-nk_DXsWUN5s_YGTengxlJhNAinA_1i3J6Ykxpk1_fSYYCbrAKpYOcr2bBtaVaX-jEKzl6Ew5dzfKO5gWHJobwE9GjPejjM6dHJQJRBkJIL5b7KZSzPJsy0E_DqOZ9iprg_ctkCOIiTQsUNAWoS5cejp23t_lA",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sYtVkIjbaZ5idaSsjarRCsaJNgASLuRM9s1o_W_ZnbiYDtfkU6CFo6njhMbHkJbt-cy0L9HCuxfgsKaYWrVpNPDQn6Ih7MJlwRg4gn9Pz4lc07Mgu_mlJhU6Ai1r6QcINYrzNd_dcN42-nJewnogYcQQM4v6crygAZAfemIqyyVrN_0En2gP8KoDzLYZ0gltiM53han9siq41eX49nyvlKgMRGV17qj4vDCE14g",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": ""
 },
 {
  "id": 12,
  "slug": "grand-festive-hamper",
  "name": "Grand Festive Keepsake Hamper",
  "category": "hampers",
  "short": "Luxury hamper with velvet keepsake chest, sweets and two rakhis.",
  "description": "Our grandest gift: a velvet keepsake chest with two designer rakhis, assorted mithai, dry fruits, a scented candle and a personalised card.",
  "price": 2999,
  "mrp": 3799,
  "rating": 4.9,
  "reviews": 52,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAjlOBSEAeYLLGMt50lFj8TbX8sieQWxIIi55aNKX8vPHb_VGrdgCm_tbYULfWQEk19CPIEkSQDekOK2ggMH8wijOS5wCRFcR-X1YjCDjgEpm-ZwpAf0y_cjPaBCUSA0y6flyQDlxZJX4vhKHQ3qyZZzMMgYTOUWTHk_TfECxctyFewNLwVXHyhtgP9iVUyUyzJweKpBFmj9UbHOFpKAiL610HJq0ULxIaV1tG2iCI",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuClld473OTQcygRDv_8OB8dns-5v8lQC9fBBxZO8LOKz6ZpFoYsjnb_o19CTLDO-CsozV7DARzNuEGOMlif7D9PVOzRkjHJeWsadcyZDqWYMGOLPMVPY3fx7ZscuWCfoAGuz52TyTmRwOEAeDOLWZ40yM8XzVItf4_qhLAdklKHuyEPZqK4Zqp3pRYQ5raoa6n7nA64oDKuEuPW2I4BZQGzUxLPxiZxI1Zlbo6mkJY",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": "Premium"
 },
 {
  "id": 13,
  "slug": "meenakari-peacock",
  "name": "Meenakari Peacock Rakhi",
  "category": "designer",
  "short": "Royal meenakari peacock rakhi in vibrant turquoise.",
  "description": "Hand-painted meenakari enamel peacock set in a gold-plated frame, finished with beaded tassels.",
  "price": 899,
  "mrp": 1199,
  "rating": 4.8,
  "reviews": 135,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8Ds2Vi0AjBIf4EO2k6xawd5bFhFWSENLeINRPXuylexs2YdupuyeOvKmWS0SIYMgCCkv4K0gtwf5jD0jZP9gQZuN66G3tK7lXYLqECGphZCz53t__0kWntLNR90Q6WwkHzjUu5H-GWKYa3_97Y3TZrJktK6atk-jTNC9qRp1j-m9IsrijdunSHFHpJNFvOFeYdJsxcWWGfq_ncn6jYGokFrSvn2cHkVjCKrhQrU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0"
  ],
  "badge": ""
 },
 {
  "id": 14,
  "slug": "om-silver-talisman",
  "name": "Om Silver Talisman Rakhi",
  "category": "silver",
  "short": "Authentic 925 silver Om talisman flanked by silver beads.",
  "description": "An Om engraved centrepiece in 925 silver, flanked by oxidised silver beads on a fine thread.",
  "price": 1399,
  "mrp": 1799,
  "rating": 4.8,
  "reviews": 88,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuD5LhAIx2gClGmL8AUZxC9l8iNcOOe_MoIBF89o8GV4oOtTZ02KXP0vx6pWrOE_zsCxeefpkrDtPnUbiracw2uR-IGSWIxVbfWLgyK1TLBYAc8tpNkMv5O2grzBea-tJJHwN6YUu_jogpcGdPXD3_7vRqXwihNbVfT5XAw28a900pWF2Gwu3dpttB8WHLIzgWyXBIsj0Cvz5ZzpVSd6Owsmr2yoxQqVE8HXUO2b0xU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBmVzdTA2_LmvbMqmpPIcKGd4UYUD-EHxw5vdUIHhao2SzE0QLu9vNJlWiP90OWoNh3UxfDZYCPoS-Fy9L9p7kb6LZjENjDy-pOei9KC-gT37tko44WJcLbJbpobvabik9_UaeUmiXn3yvIpnwykGXgbmkKik6nf11y-ip9teJxLZYetZA3PQhVE6TB8Du-fQ2wcpPk0vwjyVSzkekZ6ufqY3kvhkQLn_zm4hFNO5Y"
  ],
  "badge": ""
 },
 {
  "id": 15,
  "slug": "emerald-velvet-lumba-set",
  "name": "Emerald Velvet Bhaiya Bhabhi Set",
  "category": "bhabhi",
  "short": "Deep emerald velvet lumba set with gold zardozi accents.",
  "description": "A luxe set with velvet-wrapped lumba and a matching rakhi, accented with gold zardozi work.",
  "price": 1199,
  "mrp": 1599,
  "rating": 4.7,
  "reviews": 69,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuACjKjn5NuKdRxYN1azJNd5lUbSBUgt3oZgz0LnCutr6kwfQaijsyeWzXIsv9QkntEd4t2KkkOU4Und7A_OzTUiytrvSaLV-WFgX1t9j_FxKHrA_JdVFd-CVCgz-qf7hKK8m3ydSyNIBIiEeOTnBXA98bzDAbw8ZlhHN_YpzlSiUQwVmgDmIm15-b1sUn-u-TfFOStW72bb8_NzGCNId88IDWWk8M1IUvkbcYmJI6Q",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6NI-eUdzEevTeQmFTJIyuFugJ9FbSS2LC8D5mRXUIyfIuMEIlkBeN2dMTEyrFGq5ntFCKsk5lTw5jBpBNl4S-1z-mHMrpYiLxehU_t9R8G1X5JoPyJP_t6NGeA7dyerH-AEQBTglRfQ0X46eCc5gPk97A7CfC2dH-za-SvlVNvorDHCKoxdWN51vBN3MUiwoYQtmYJqDKVP7Y9YsK0aqmv7OiFn7T7aNuCjpBSU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCvdK2xemCuP3FyXxkTLtlzTzDpOF3Nt22BtAyxeeG4rRldQZ5nf-2TqK6fd-21bIxPHhfBcpjdCLEE91CfYTQfgHOkE45panibFSW2b2UOOw0ctYN4M8YGezzZTahuyHNl9Gxz_HZiOaes_2EIynCRVwwTHujX6ErBb-Xt0J8ktntzS6FAMKS7yRloc_MmmkqBZySTTg_FidA1CtcOctxzrC0CEMVi0AGY3Pi_mn4"
  ],
  "badge": ""
 },
 {
  "id": 16,
  "slug": "bal-ganesha-kids",
  "name": "Bal Ganesha Kids Rakhi",
  "category": "kids",
  "short": "Smooth, rounded Bal Ganesha rakhi with child-safe soft enamel.",
  "description": "A friendly Bal Ganesha in soft enamel with rounded edges and no sharp points, safe for little hands.",
  "price": 399,
  "mrp": 549,
  "rating": 4.8,
  "reviews": 156,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCXy2keGLQIX5oOrEnphOH-lX-DSuTR74NTJE6ZeLTKpGuN5v6n_uuP3l1dDBv_LVG9ictSnrjx5iLYYOu258I2926mdHfsVBHDEyxa5mJJblxOhx8a_znWwIV4zixoyisHo3zQwFOFfbpCorTjmnihJEs4IHg-5EwbMkRluScXm2Jp-4ygamTyx5eNf7ohkNNdEca8kD_7uQLuQShINB3B8g7Ue6_bDiBTddJXTUU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBMRPx4Aa8o0MT-Cuo90DLOEPh7LEde6IzVuGRZ2jijy0IXr-LA_6XpfA5I3AQ8kw-ihvLbyKwiewyjj-Bxgq0WbF73ZWsNMbErxupZ6_N7CCTmq5OwGWSFrqfdqqAuISwGH2VkA0cV6h78LBL70rDirYh8L_0T_Fmv7m_Un8dCAvAY7FzamqHI2B5xLR4Br_3viGTGfX9IJZWPLnPkg1Sey7yUgrJy-L7skebuY-s",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": "Bestseller"
 },
 {
  "id": 17,
  "slug": "kundan-floral-rakhi",
  "name": "Kundan Floral Centrepiece Rakhi",
  "category": "designer",
  "short": "Kundan floral rakhi with hand-set polki-style stones.",
  "description": "A floral centrepiece of hand-set polki-style stones in a gold-tone setting with pearl drops.",
  "price": 749,
  "mrp": 999,
  "rating": 4.6,
  "reviews": 92,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDsgMlF_IN-CYAbIMnOIyZI39HJQS23lKEBZf6mk0cgrMJkmSYLkmlR3X9WjaVGwg2QpHcdVmAwn-rgBxqEdNEZg2tnFD_w06Vqhf959y4sY2XFcA9z8mSeUJy5uJIneGfo57CB3f6JGSMDYgSO9noUJdVacRD9N34iNCytbGjCxZAU8vII0ZYJrRYp6HsYRo1Nbb2-mrA83PzBVXJgPfkfbCK8lNhy5G3AkAgnzfg",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0"
  ],
  "badge": ""
 },
 {
  "id": 18,
  "slug": "zardozi-gold-rakhi",
  "name": "Regal Zardozi Gold Rakhi",
  "category": "designer",
  "short": "Regal zardozi embroidered rakhi in authentic gold bullion wire.",
  "description": "Zardozi embroidery in gold bullion wire on deep burgundy silk, for a regal festive look.",
  "price": 1099,
  "mrp": 1499,
  "rating": 4.7,
  "reviews": 61,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDUasfvg9GZNnS7JbGLiAvFM4V_q4Q49LYF0bmYmBXCXB4q_UFQyxFkENOKlJyz3vQlxZzBilBoJPB5moj__571b_ble4BLCHpuUE1p3i3V_RgRUWZ8FN7wq4nvTEbd6Pecq4VAAwDhVI2bQh2SXY1PqBp5AO6mpLOYJrt-TkNXMEgyrhp1fiFr62yiTVtn9QlLDj8ls32BYfZXhJV6JT-fo98x9QfWsYOQfn9sGwg",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0"
  ],
  "badge": ""
 }
];
const Store = (() => {
  const listeners = [];
  const mem = {};
  const read = (key, fallback) => {
    let raw = mem[key];
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) raw = stored;
    } catch (e) {
      raw = mem[key];
    }
    if (raw === undefined || raw === null) return fallback;
    try {
      const value = JSON.parse(raw);
      return value === null || value === undefined ? fallback : value;
    } catch (e) {
      return fallback;
    }
  };
  const write = (key, value) => {
    const raw = JSON.stringify(value);
    mem[key] = raw;
    try {
      localStorage.setItem(key, raw);
    } catch (e) {
      return;
    }
  };
  const emit = () => listeners.forEach((fn) => fn());
  const COUPONS = { RAKHI10: { type: 'percent', value: 10, label: '10% off' }, NEST200: { type: 'flat', value: 200, label: '₹200 off', min: 1500 } };
  const FREE_SHIP = 999;
  const SHIP_FEE = 79;

  const api = {
    on: (fn) => listeners.push(fn),
    product: (id) => PRODUCTS.find((p) => p.id === Number(id)),
    bySlug: (slug) => PRODUCTS.find((p) => p.slug === slug),
    category: (slug) => CATEGORIES.find((c) => c.slug === slug),
    discount: (p) => Math.round((1 - p.price / p.mrp) * 100),
    money: (n) => '₹' + Math.round(n).toLocaleString('en-IN'),
    cart: () => read('rn_cart', []),
    wishlist: () => read('rn_wish', []),
    hasWish: (id) => api.wishlist().includes(Number(id)),
    addCart(id, qty = 1) {
      const cart = api.cart();
      const line = cart.find((l) => l.id === Number(id));
      if (line) line.qty = Math.min(10, line.qty + qty);
      else cart.push({ id: Number(id), qty: Math.min(10, qty) });
      write('rn_cart', cart);
      emit();
    },
    setQty(id, qty) {
      let cart = api.cart();
      if (qty < 1) cart = cart.filter((l) => l.id !== Number(id));
      else cart.forEach((l) => { if (l.id === Number(id)) l.qty = Math.min(10, qty); });
      write('rn_cart', cart);
      emit();
    },
    removeCart(id) {
      write('rn_cart', api.cart().filter((l) => l.id !== Number(id)));
      emit();
    },
    clearCart() {
      write('rn_cart', []);
      write('rn_coupon', '');
      emit();
    },
    toggleWish(id) {
      let list = api.wishlist();
      const has = list.includes(Number(id));
      list = has ? list.filter((x) => x !== Number(id)) : [...list, Number(id)];
      write('rn_wish', list);
      emit();
      return !has;
    },
    lines: () => api.cart().map((l) => ({ ...l, p: api.product(l.id) })).filter((l) => l.p),
    count: () => api.cart().reduce((s, l) => s + l.qty, 0),
    coupon: () => read('rn_coupon', ''),
    applyCoupon(code) {
      const key = String(code).trim().toUpperCase();
      const c = COUPONS[key];
      const sub = api.totals(true).subtotal;
      if (!c) return { ok: false, text: 'This coupon code is not valid.' };
      if (c.min && sub < c.min) return { ok: false, text: 'Add items worth ' + api.money(c.min) + ' or more to use ' + key + '.' };
      write('rn_coupon', key);
      emit();
      return { ok: true, text: key + ' applied: ' + c.label + '.' };
    },
    removeCoupon() {
      write('rn_coupon', '');
      emit();
    },
    totals(ignoreCoupon) {
      const lines = api.lines();
      const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
      const mrp = lines.reduce((s, l) => s + l.p.mrp * l.qty, 0);
      const c = ignoreCoupon ? null : COUPONS[api.coupon()];
      let off = 0;
      if (c && (!c.min || subtotal >= c.min)) off = c.type === 'percent' ? Math.round(subtotal * c.value / 100) : c.value;
      const shipping = subtotal === 0 || subtotal - off >= FREE_SHIP ? 0 : SHIP_FEE;
      return { subtotal, savings: mrp - subtotal, off, shipping, total: subtotal - off + shipping, code: off ? api.coupon() : '', freeAt: FREE_SHIP };
    },
    users: () => read('rn_users', []),
    user: () => read('rn_session', null),
    signup({ name, email, password }) {
      const users = api.users();
      if (users.some((u) => u.email === email)) return { ok: false, text: 'An account with this email already exists.' };
      users.push({ name, email, key: btoa(unescape(encodeURIComponent(password))) });
      write('rn_users', users);
      write('rn_session', { name, email });
      emit();
      return { ok: true };
    },
    login(email, password) {
      const key = btoa(unescape(encodeURIComponent(password)));
      const u = api.users().find((x) => x.email === email && x.key === key);
      if (!u) return { ok: false, text: 'Email or password is incorrect.' };
      write('rn_session', { name: u.name, email: u.email });
      emit();
      return { ok: true };
    },
    logout() {
      write('rn_session', null);
      emit();
    },
    orders() {
      const orders = read('rn_orders', null);
      if (orders) return orders;
      const seed = [{ id: 'RN10234', createdAt: Date.now() - 2 * 3600000, stage: 2, name: 'Demo Customer', city: 'Nagpur', payment: 'UPI', items: [{ name: 'Royal Rudraksha Silver Rakhi', qty: 1, price: 1899, image: PRODUCTS[0].images[0] }], total: 1899 }];
      write('rn_orders', seed);
      return seed;
    },
    placeOrder(details) {
      const t = api.totals();
      const id = 'RN' + Math.floor(10000 + Math.random() * 89999);
      const order = { id, createdAt: Date.now(), stage: 0, name: details.name, city: details.city, payment: details.payment, email: details.email, items: api.lines().map((l) => ({ name: l.p.name, qty: l.qty, price: l.p.price, image: l.p.images[0] })), total: t.total };
      write('rn_orders', [order, ...api.orders()]);
      api.clearCart();
      return order;
    },
    findOrder: (id) => api.orders().find((o) => o.id.toLowerCase() === String(id).trim().toLowerCase()),
    stage: (o) => Math.min(4, o.stage + Math.floor((Date.now() - o.createdAt) / (8 * 3600000)))
  };
  return api;
})();
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealObserver = 'IntersectionObserver' in window && !reducedMotion
  ? new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      revealObserver.unobserve(en.target);
    }
  }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
  : null;

function watchReveal(root = document) {
  $$('.reveal', root).forEach((el) => {
    if (el.dataset.watched) return;
    el.dataset.watched = '1';
    const index = [...el.parentNode.children].indexOf(el);
    el.style.setProperty('--d', (index % 5) * 90 + 'ms');
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('in');
  });
}

function countUp(el) {
  const target = Number(el.dataset.count);
  const dec = Number(el.dataset.dec || 0);
  const suffix = el.dataset.suffix || '';
  if (reducedMotion) return;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / 1600);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (target * eased).toLocaleString('en-IN', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const ICONS = {
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20.5s-8-4.8-8-11A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5c0 6.200-8 11-8 11Z"/></svg>',
  bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  tick: '<svg viewBox="0 0 24 24"><path d="m5 12.5 4.500 4.500L19 7.500"/></svg>'
};

const NAV = [
  { label: 'Shop', href: 'shop.html', key: 'shop', sub: CATEGORIES.map((c) => ({ label: c.name, href: 'shop.html?cat=' + c.slug })) },
  { label: 'Collections', href: 'index.html#collections', key: 'collections', sub: [{ label: 'Royal Heritage', href: 'shop.html?cat=designer' }, { label: 'Sacred Silver', href: 'shop.html?cat=silver' }, { label: 'Festive Combos', href: 'shop.html?cat=hampers' }] },
  { label: 'Gifts', href: 'shop.html?cat=hampers', key: 'gifts', sub: [{ label: 'Under ₹1,000', href: 'shop.html?price=0-1000' }, { label: 'Premium Gifts', href: 'shop.html?price=2000-99999' }] },
  { label: 'Track Order', href: '#', key: 'track', act: 'track' }
];

const stars = (r) => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));

function productCard(p) {
  const on = Store.hasWish(p.id);
  const cat = Store.category(p.category).name;
  return `<article class="pcard reveal">
    <div class="pmedia">
      <a class="pimg" href="#" data-act="quick" data-id="${p.id}"><img loading="lazy" src="${p.images[0]}" alt="${esc(p.name)}">${p.badge ? `<span class="pbadge">${p.badge}</span>` : ''}<span class="pbadge off">${Store.discount(p)}% off</span></a>
      <button class="wish ${on ? 'on' : ''}" data-act="wish" data-id="${p.id}" aria-label="Add to wishlist">${ICONS.heart}</button>
      <button class="quick" data-act="quick" data-id="${p.id}">Quick View</button>
    </div>
    <div class="pbody">
      <span class="pcat">${cat}</span>
      <a class="pname" href="#" data-act="quick" data-id="${p.id}">${esc(p.name)}</a>
      <div class="stars"><span class="s">${stars(p.rating)}</span>${p.rating} (${p.reviews})</div>
      <div class="price"><b>${Store.money(p.price)}</b><s>${Store.money(p.mrp)}</s></div>
      <button class="btn ghost sm" data-act="add" data-id="${p.id}">Add to Cart</button>
    </div>
  </article>`;
}

function renderLayout() {
  const page = document.body.dataset.nav || '';
  const nav = NAV.map((n) => `<li><a href="${n.href}" ${n.act ? `data-act="${n.act}"` : ''} class="${n.key === page ? 'active' : ''}">${n.label}</a>${n.sub ? `<div class="dropdown">${n.sub.map((s) => `<a href="${s.href}">${s.label}</a>`).join('')}</div>` : ''}</li>`).join('');
  const mobile = NAV.map((n) => `<a href="${n.href}" ${n.act ? `data-act="${n.act}"` : ''}>${n.label}</a>${(n.sub || []).map((s) => `<a class="sub" href="${s.href}">${s.label}</a>`).join('')}`).join('');
  $('#site-header').outerHTML = `
    <div class="announce">Free shipping above <b>₹999</b> &nbsp;·&nbsp; Use code <b>RAKHI10</b> for 10% off &nbsp;·&nbsp; Order by 5 days before Raksha Bandhan for guaranteed delivery</div>
    <header class="site-header"><div class="wrap nav-row">
      <button class="icon-btn menu-btn" data-act="menu" aria-label="Open menu">${ICONS.menu}</button>
      <a class="logo" href="index.html" aria-label="RakhiNest home"><img src="images/logo.png" alt="RakhiNest, Tie the Bond, Share the Love"></a>
      <ul class="main-nav">${nav}</ul>
      <form class="search" id="search-form" action="shop.html" autocomplete="off"><input type="search" name="q" placeholder="Search rakhis, hampers, gifts" aria-label="Search"><button type="submit" aria-label="Search" class="icon-btn" style="width:28px;height:28px;top:4px">${ICONS.search}</button><div class="suggest" id="suggest"></div></form>
      <div class="icons">
        <button class="icon-btn" data-act="account" aria-label="Account" title="Account">${ICONS.user}</button>
        <button class="icon-btn" data-act="wishlist" aria-label="Wishlist" title="Wishlist">${ICONS.heart}<span class="badge" id="wish-count"></span></button>
        <button class="icon-btn" data-act="drawer" aria-label="Open cart" title="Cart">${ICONS.bag}<span class="badge" id="cart-count"></span></button>
      </div>
    </div></header>
    <nav class="mnav" id="mnav"><form action="shop.html"><input type="search" name="q" placeholder="Search rakhis and gifts"></form>${mobile}<a href="#" data-act="account">Account</a><a href="#" data-act="wishlist">Wishlist</a></nav>
    <div class="overlay" id="overlay" data-act="close"></div>
    <aside class="drawer" id="drawer"><header><h3>Your Cart</h3><button data-act="close" aria-label="Close cart">×</button></header><div class="dbody" id="drawer-body"></div><footer id="drawer-foot"></footer></aside>
    <aside class="drawer" id="wdrawer"><header><h3>Your Wishlist</h3><button data-act="close" aria-label="Close wishlist">×</button></header><div class="dbody" id="wdrawer-body"></div></aside>
    <div class="modal" id="modal" role="dialog" aria-modal="true"></div>
    <div class="toast" id="toast"></div>`;
  $('#site-footer').outerHTML = `
    <footer class="site-footer"><div class="wrap">
      <div class="foot-grid">
        <div><h4>RakhiNest</h4><p>Handcrafted rakhis and festive gifts that carry a sister's love across any distance. Designed in India, delivered worldwide.</p></div>
        <div><h4>Shop</h4><ul>${CATEGORIES.slice(0, 5).map((c) => `<li><a href="shop.html?cat=${c.slug}">${c.name}</a></li>`).join('')}</ul></div>
        <div><h4>Help</h4><ul><li><a href="#" data-act="track">Track Order</a></li><li><a href="#" data-act="account">My Account</a></li><li><a href="#" data-act="wishlist">Wishlist</a></li><li><a href="#" data-act="drawer">Cart</a></li></ul></div>
        <div><h4>Company</h4><ul><li><a href="index.html#why">Why RakhiNest</a></li><li><a href="index.html#collections">Collections</a></li><li><a href="index.html#reviews">Reviews</a></li><li><a href="index.html#newsletter">Newsletter</a></li></ul></div>
        <div><h4>Contact</h4><ul><li>care@rakhinest.in</li><li>Mon to Sat, 10 am to 7 pm</li><li>Sitabuldi, Nagpur, Maharashtra 440012</li></ul></div>
      </div>
      <div class="foot-bar"><span>© 2026 RakhiNest. All rights reserved.</span><span>Secure payments: UPI · Cards · Net Banking · Cash on Delivery</span></div>
      <div class="foot-credit"><span>Designed By</span><b>Ananya Marghade</b><span>PRN 24070521004</span><span>Batch A1</span></div>
    </div></footer>`;
}

function toast(text, withCart) {
  const t = $('#toast');
  t.innerHTML = `<span>${text}</span>${withCart ? '<a href="#" data-act="drawer">View Cart</a>' : ''}`;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 3200);
}

function closeAll() {
  ['#drawer', '#wdrawer', '#modal', '#mnav', '#overlay'].forEach((s) => $(s) && $(s).classList.remove('open'));
  const f = $('#filters');
  if (f) f.classList.remove('open');
}

function openLayer(sel) {
  closeAll();
  $(sel).classList.add('open');
  $('#overlay').classList.add('open');
}

function qtyControl(l) {
  return `<div class="qty"><button data-act="dec" data-id="${l.p.id}" aria-label="Decrease">−</button><span>${l.qty}</span><button data-act="inc" data-id="${l.p.id}" aria-label="Increase">+</button></div>`;
}

function renderDrawer() {
  const lines = Store.lines();
  const t = Store.totals();
  $('#drawer-body').innerHTML = lines.length
    ? lines.map((l) => `<div class="drow"><a href="#" data-act="quick" data-id="${l.p.id}"><img src="${l.p.images[0]}" alt=""></a><div><h4>${esc(l.p.name)}</h4><small>${Store.money(l.p.price)}</small><div style="margin-top:8px;display:flex;align-items:center">${qtyControl(l)}<button class="rm" data-act="rm" data-id="${l.p.id}">Remove</button></div></div></div>`).join('')
    : '<div class="empty"><h3>Your cart is empty</h3><p>Discover rakhis crafted for every brother.</p><a class="btn" href="shop.html">Shop Now</a></div>';
  $('#drawer-foot').innerHTML = lines.length
    ? `<div class="srow"><span>Subtotal</span><b>${Store.money(t.subtotal)}</b></div><p class="note" style="margin:0 0 14px">${t.shipping ? 'Add ' + Store.money(t.freeAt - t.subtotal) + ' more for free shipping.' : 'You qualify for free shipping.'}</p><div class="coupon" style="margin:0 0 12px"><input id="d-coupon" placeholder="Coupon code" value="${t.code}"><button class="btn sm" data-act="coupon">Apply</button></div>${t.off ? `<div class="srow disc"><span>Coupon ${t.code}</span><span>− ${Store.money(t.off)}</span></div>` : ''}<div class="srow total" style="margin-top:4px;padding-top:12px"><span>Total</span><span>${Store.money(t.total)}</span></div><button class="btn block" style="margin-top:14px" data-act="checkout">Checkout</button>`
    : '';
}

function renderWishDrawer() {
  const list = Store.wishlist().map(Store.product).filter(Boolean);
  $('#wdrawer-body').innerHTML = list.length
    ? list.map((p) => `<div class="drow"><a href="#" data-act="quick" data-id="${p.id}"><img src="${p.images[0]}" alt=""></a><div><h4>${esc(p.name)}</h4><small>${Store.money(p.price)}</small><div style="margin-top:8px;display:flex;align-items:center;gap:12px"><button class="btn sm" data-act="add" data-id="${p.id}">Add to Cart</button><button class="rm" data-act="wish" data-id="${p.id}">Remove</button></div></div></div>`).join('')
    : '<div class="empty"><h3>Your wishlist is empty</h3><p>Tap the heart on any rakhi to save it here.</p><button class="btn" data-act="close">Keep Browsing</button></div>';
}

function syncState() {
  const c = Store.count();
  const w = Store.wishlist().length;
  [['#cart-count', c], ['#wish-count', w]].forEach(([sel, n]) => {
    const badge = $(sel);
    const prev = badge.textContent;
    badge.textContent = n || '';
    if (n && prev !== badge.textContent) {
      badge.classList.remove('pop');
      void badge.offsetWidth;
      badge.classList.add('pop');
    }
  });
  $$('[data-act="wish"],.wishbtn').forEach((b) => b.classList.toggle('on', Store.hasWish(b.dataset.id)));
  renderDrawer();
  renderWishDrawer();
}

function bindSearch() {
  const form = $('#search-form');
  const input = $('input', form);
  const box = $('#suggest');
  const q0 = new URLSearchParams(location.search).get('q');
  if (q0) input.value = q0;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const hits = q.length < 2 ? [] : PRODUCTS.filter((p) => (p.name + ' ' + p.category + ' ' + p.short).toLowerCase().includes(q)).slice(0, 5);
    box.innerHTML = hits.map((p) => `<a href="#" data-act="quick" data-id="${p.id}"><img src="${p.images[0]}" alt=""><div>${esc(p.name)}<small>${Store.money(p.price)}</small></div></a>`).join('');
    box.classList.toggle('open', hits.length > 0);
  });
  document.addEventListener('click', (e) => { if (!form.contains(e.target)) box.classList.remove('open'); });
  form.addEventListener('submit', (e) => {
    if (!input.value.trim()) e.preventDefault();
  });
}

function bindActions() {
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el) return;
    const act = el.dataset.act;
    const id = el.dataset.id;
    if (act === 'add') {
      const qtyEl = $('#pd-qty');
      const qty = el.dataset.useqty && qtyEl ? Number(qtyEl.textContent) : 1;
      Store.addCart(id, qty);
      toast(esc(Store.product(id).name) + ' added to cart', true);
      if (el.closest('#modal')) closeAll();
    } else if (act === 'wish') {
      e.preventDefault();
      const added = Store.toggleWish(id);
      toast(added ? 'Saved to your wishlist' : 'Removed from wishlist');
    } else if (act === 'quick') { e.preventDefault(); $('#suggest').classList.remove('open'); openProduct(id); }
    else if (act === 'checkout') openCheckout();
    else if (act === 'account') { e.preventDefault(); openAccount(); }
    else if (act === 'track') { e.preventDefault(); openTrack(id); }
    else if (act === 'wishlist') openLayer('#wdrawer');
    else if (act === 'coupon') {
      const r = Store.applyCoupon($('#d-coupon').value);
      toast(r.text);
    }
    else if (act === 'drawer') { e.preventDefault(); openLayer('#drawer'); }
    else if (act === 'menu') openLayer('#mnav');
    else if (act === 'filters') openLayer('#filters');
    else if (act === 'close') closeAll();
    else if (act === 'inc') Store.setQty(id, Store.cart().find((l) => l.id === Number(id)).qty + 1);
    else if (act === 'dec') Store.setQty(id, Store.cart().find((l) => l.id === Number(id)).qty - 1);
    else if (act === 'rm') Store.removeCart(id);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
}

document.addEventListener('DOMContentLoaded', () => {
  renderLayout();
  bindActions();
  bindSearch();
  Store.on(syncState);
  syncState();
  watchReveal();
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
const validators = {
  optional: () => true,
  required: (v) => v.trim().length > 0,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  phone: (v) => /^[6-9]\d{9}$/.test(v.trim()),
  pin: (v) => /^\d{6}$/.test(v.trim()),
  password: (v) => v.length >= 6,
  card: (v) => /^\d{16}$/.test(v.replace(/\s/g, '')),
  expiry: (v) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(v.trim()),
  cvv: (v) => /^\d{3}$/.test(v.trim()),
  upi: (v) => /^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(v.trim())
};

function checkForm(form) {
  let ok = true;
  $$('[data-v]', form).forEach((input) => {
    if (input.closest('[hidden]')) return;
    const valid = validators[input.dataset.v](input.value);
    input.closest('.field').classList.toggle('invalid', !valid);
    if (!valid) ok = false;
  });
  return ok;
}

function field(label, name, type, v, extra = '') {
  return `<div class="field"><label for="${name}">${label}</label><input id="${name}" name="${name}" type="${type}" data-v="${v}" ${extra}></div>`;
}

function showModal(html, cls = '') {
  const m = $('#modal');
  m.className = 'modal ' + cls;
  m.innerHTML = '<button class="close" data-act="close" aria-label="Close">×</button>' + html;
  m.scrollTop = 0;
  openLayer('#modal');
  return m;
}

function openProduct(id) {
  const p = Store.product(id);
  if (!p) return;
  const cat = Store.category(p.category);
  const m = showModal(`
    <div class="mimg"><div class="mmain"><img id="main-img" src="${p.images[0]}" alt="${esc(p.name)}"></div><div class="mthumbs">${p.images.map((src, i) => `<button class="${i ? '' : 'on'}" data-src="${src}" aria-label="View image ${i + 1}"><img src="${src}" alt=""></button>`).join('')}</div></div>
    <div class="mbody"><span class="pcat">${cat.name}</span><h2>${esc(p.name)}</h2>
      <div class="stars"><span class="s">${stars(p.rating)}</span>${p.rating} (${p.reviews} reviews)</div>
      <div class="price"><b style="font-size:26px;font-family:var(--serif);font-weight:500">${Store.money(p.price)}</b><s>${Store.money(p.mrp)}</s><em>${Store.discount(p)}% off</em></div>
      <p style="color:var(--muted);margin-bottom:22px">${esc(p.description)}</p>
      <div class="opts" style="margin-top:0"><div class="qty"><button id="q-dec" aria-label="Decrease">−</button><span id="pd-qty">1</span><button id="q-inc" aria-label="Increase">+</button></div><button class="btn" data-act="add" data-id="${p.id}" data-useqty="1">Add to Cart</button><button class="wishbtn ${Store.hasWish(p.id) ? 'on' : ''}" data-act="wish" data-id="${p.id}" aria-label="Wishlist">${ICONS.heart}</button></div>
      <button class="btn ghost block" id="buy-now">Buy It Now</button>
      <div class="field" style="margin-top:22px"><label for="pin">Check delivery</label><div class="pincode"><input id="pin" inputmode="numeric" maxlength="6" placeholder="6 digit pincode"><button class="btn sm" id="pin-btn">Check</button></div><div class="pin-msg" id="pin-msg"></div></div>
      <ul class="perks"><li><b>Includes</b>Roli, chawal and a greeting card</li><li><b>Delivery</b>Free above ₹999, else ₹79</li><li><b>Returns</b>7 day easy replacement</li></ul>
    </div>`, 'wide');
  let qty = 1;
  const show = () => { $('#pd-qty').textContent = qty; };
  $('#q-inc', m).addEventListener('click', () => { qty = Math.min(10, qty + 1); show(); });
  $('#q-dec', m).addEventListener('click', () => { qty = Math.max(1, qty - 1); show(); });
  $('.mthumbs', m).addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    $$('.mthumbs button', m).forEach((x) => x.classList.toggle('on', x === b));
    $('#main-img').src = b.dataset.src;
  });
  $('#buy-now', m).addEventListener('click', () => { Store.addCart(p.id, qty); openCheckout(); });
  $('#pin-btn', m).addEventListener('click', () => {
    const msg = $('#pin-msg');
    if (!validators.pin($('#pin').value)) { msg.textContent = 'Enter a valid 6 digit pincode.'; msg.style.color = '#a3262a'; return; }
    const d = new Date(Date.now() + 4 * 86400000);
    msg.style.color = 'var(--ok)';
    msg.textContent = 'Delivery available. Expected by ' + d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' }) + '.';
  });
}

function openCheckout() {
  if (!Store.lines().length) {
    showModal('<div class="mpad"><div class="empty"><h3>Nothing to check out yet</h3><p>Add a rakhi to your cart first.</p><button class="btn" data-act="close">Keep Browsing</button></div></div>', 'one');
    return;
  }
  const user = Store.user();
  const t = Store.totals();
  const states = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Madhya Pradesh', 'Telangana'];
  const m = showModal(`<form class="mpad co-grid" id="co-form" novalidate>
    <div>
      <h2 style="font-size:32px;margin-bottom:26px">Checkout</h2>
      <div class="fblock"><h3>Contact</h3><div class="two">${field('Full name', 'name', 'text', 'required', `value="${user ? esc(user.name) : ''}" autocomplete="name"`)}${field('Phone', 'phone', 'tel', 'phone', 'maxlength="10" placeholder="10 digit mobile number" autocomplete="tel"')}</div>${field('Email', 'email', 'email', 'email', `value="${user ? esc(user.email) : ''}" autocomplete="email"`)}</div>
      <div class="fblock"><h3>Delivery Address</h3>${field('Address', 'address', 'text', 'required', 'placeholder="House no., street, area" autocomplete="street-address"')}<div class="three-f">${field('City', 'city', 'text', 'required')}<div class="field"><label for="state">State</label><select id="state" name="state" data-v="required">${states.map((s) => `<option>${s}</option>`).join('')}</select></div>${field('Pincode', 'pincode', 'text', 'pin', 'maxlength="6" inputmode="numeric"')}</div></div>
      <div class="fblock" style="margin-bottom:0"><h3>Payment</h3>
        <div class="pay"><label><input type="radio" name="pay" value="UPI" checked>UPI<small>GPay, PhonePe, Paytm</small></label><label><input type="radio" name="pay" value="Card">Credit / Debit Card<small>Visa, Mastercard, RuPay</small></label><label><input type="radio" name="pay" value="Cash on Delivery">Cash on Delivery<small>Pay when it arrives</small></label></div>
        <div id="pay-upi" style="margin-top:20px">${field('UPI ID', 'upi', 'text', 'upi', 'placeholder="name@bank"')}</div>
        <div id="pay-card" hidden style="margin-top:20px">${field('Card number', 'card', 'text', 'card', 'maxlength="19" inputmode="numeric" placeholder="1234 5678 9012 3456"')}<div class="two">${field('Expiry (MM/YY)', 'exp', 'text', 'expiry', 'maxlength="5" placeholder="08/28"')}${field('CVV', 'cvv', 'password', 'cvv', 'maxlength="3" inputmode="numeric"')}</div></div>
      </div>
    </div>
    <aside class="summary"><h3>Your Order</h3>
      ${Store.lines().map((l) => `<div class="mini"><img src="${l.p.images[0]}" alt=""><span>${esc(l.p.name)} × ${l.qty}</span><b>${Store.money(l.p.price * l.qty)}</b></div>`).join('')}
      <div style="border-top:1px solid var(--line);margin-top:14px;padding-top:12px">
        <div class="srow"><span>Subtotal</span><span>${Store.money(t.subtotal)}</span></div>
        ${t.off ? `<div class="srow disc"><span>Coupon ${t.code}</span><span>− ${Store.money(t.off)}</span></div>` : ''}
        <div class="srow"><span>Shipping</span><span>${t.shipping ? Store.money(t.shipping) : 'Free'}</span></div>
        <div class="srow total"><span>Total</span><span>${Store.money(t.total)}</span></div></div>
      <button class="btn block" style="margin-top:24px" type="submit">Place Order</button>
      <p class="note">This is a demo store and no payment is taken.</p></aside></form>`, 'xwide');
  const form = $('#co-form', m);
  form.addEventListener('change', (e) => {
    if (e.target.name !== 'pay') return;
    $('#pay-upi').hidden = e.target.value !== 'UPI';
    $('#pay-card').hidden = e.target.value !== 'Card';
  });
  $('#card').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!checkForm(form)) { $('.invalid', form).scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    const order = Store.placeOrder({ name: $('#name').value.trim(), email: $('#email').value.trim(), city: $('#city').value.trim(), payment: $('[name=pay]:checked').value });
    showModal(`<div class="mpad"><div class="done"><div class="tick">${ICONS.tick}</div><span class="eyebrow">Order confirmed</span><h1>Thank you, ${esc(order.name.split(' ')[0])}</h1><p>Your order <b>${order.id}</b> has been placed. A confirmation will be sent to ${esc(order.email)}.</p><p>Order total: <b>${Store.money(order.total)}</b></p><button class="btn" data-act="track" data-id="${order.id}">Track Order</button><button class="btn ghost" data-act="close">Continue Shopping</button></div></div>`, 'one');
  });
}

function openAccount(tab = 'login') {
  const user = Store.user();
  if (user) {
    const orders = Store.orders().filter((o) => !o.email || o.email === user.email || o.id === 'RN10234');
    const m = showModal(`<div class="mpad"><span class="eyebrow">My Account</span><h2 style="font-size:34px;margin:8px 0 4px">Namaste, ${esc(user.name)}</h2><p style="color:var(--muted)">${esc(user.email)}</p>
      <h3 style="margin:30px 0 4px;font-size:22px">Your Orders</h3>
      ${orders.length ? orders.map((o) => `<div class="ord"><div><b>${o.id}</b><small>${new Date(o.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · ${o.items.length} item${o.items.length > 1 ? 's' : ''} · ${Store.money(o.total)}</small></div><button class="link" data-act="track" data-id="${o.id}">Track</button></div>`).join('') : '<p style="margin-top:16px;color:var(--muted)">No orders yet.</p>'}
      <button class="btn ghost" style="margin-top:30px" id="logout">Sign Out</button></div>`, 'one narrow');
    $('#logout', m).addEventListener('click', () => { Store.logout(); openAccount(); });
    return;
  }
  const m = showModal(`<div class="mpad"><div class="tabs"><button data-tab="login" class="${tab === 'login' ? 'on' : ''}">Sign In</button><button data-tab="signup" class="${tab === 'signup' ? 'on' : ''}">Create Account</button></div>
    <form id="auth-form" novalidate>
      ${tab === 'signup' ? field('Full name', 'name', 'text', 'required', 'autocomplete="name"') : ''}
      ${field('Email', 'email', 'email', 'email', 'autocomplete="email"')}
      ${field('Password', 'password', 'password', 'password', 'placeholder="At least 6 characters"')}
      ${tab === 'signup' ? field('Confirm password', 'confirm', 'password', 'password') : ''}
      <div class="msg err" id="auth-msg"></div>
      <button class="btn block" type="submit">${tab === 'login' ? 'Sign In' : 'Create Account'}</button></form></div>`, 'one narrow');
  $$('.tabs button', m).forEach((b) => b.addEventListener('click', () => openAccount(b.dataset.tab)));
  const form = $('#auth-form', m);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = $('#auth-msg');
    msg.textContent = '';
    if (!checkForm(form)) { msg.textContent = 'Please correct the highlighted fields.'; return; }
    const email = $('#email').value.trim().toLowerCase();
    let r;
    if (tab === 'signup') {
      if ($('#password').value !== $('#confirm').value) { msg.textContent = 'Passwords do not match.'; return; }
      r = Store.signup({ name: $('#name').value.trim(), email, password: $('#password').value });
    } else r = Store.login(email, $('#password').value);
    if (!r.ok) { msg.textContent = r.text; return; }
    openAccount();
    toast('Signed in successfully');
  });
}

function openTrack(prefill) {
  const steps = [['Order Placed', 'We have received your order.'], ['Packed', 'Your rakhi is being gift-wrapped.'], ['Shipped', 'Handed over to our courier partner.'], ['Out for Delivery', 'Arriving at your doorstep today.'], ['Delivered', 'Delivered. Happy Raksha Bandhan!']];
  const m = showModal(`<div class="mpad"><span class="eyebrow">Order tracking</span><h2 style="font-size:34px;margin:8px 0 8px">Track Your Order</h2><p style="color:var(--muted)">Enter the order ID from your confirmation. To see a sample, try <b>RN10234</b>.</p>
    <form id="track-form" class="trackf" novalidate><input id="order-id" placeholder="Order ID, e.g. RN10234" aria-label="Order ID"><button class="btn" type="submit">Track</button></form><div id="track-out"></div></div>`, 'one narrow');
  const out = $('#track-out', m);
  const run = (id) => {
    const o = Store.findOrder(id);
    if (!o) { out.innerHTML = `<div class="msg err">No order found for “${esc(id)}”. Check the order ID and try again.</div>`; return; }
    const cur = Store.stage(o);
    out.innerHTML = `<div class="tbox"><b style="font-family:var(--serif);font-size:22px;color:var(--burgundy)">Order ${o.id}</b><div style="color:var(--muted);font-size:14px;margin-top:4px">${o.items.map((i) => esc(i.name) + ' × ' + i.qty).join(', ')} · ${Store.money(o.total)} · ${esc(o.payment)}</div></div>
      <div class="tl">${steps.map(([t, d], i) => `<div class="step ${i < cur ? 'done-s' : i === cur ? 'done-s cur' : ''}"><i>${i <= cur ? '✓' : i + 1}</i><div><b>${t}</b><span>${d}</span></div></div>`).join('')}</div>`;
  };
  $('#track-form', m).addEventListener('submit', (e) => {
    e.preventDefault();
    const v = $('#order-id').value;
    if (!v.trim()) { out.innerHTML = '<div class="msg err">Please enter your order ID.</div>'; return; }
    run(v);
  });
  if (prefill) { $('#order-id').value = prefill; run(prefill); }
}
const params = () => new URLSearchParams(location.search);

const Pages = {
  home() {
    const best = [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, 8);
    $('#cat-grid').innerHTML = CATEGORIES.map((c) => `<a class="cat reveal" href="shop.html?cat=${c.slug}"><img loading="lazy" src="${c.image}" alt=""><div><h3>${c.name}</h3><span>${c.tagline}</span></div></a>`).join('');
    $('#bestsellers').innerHTML = best.map(productCard).join('');
    watchReveal();
    setTimeout(() => $$('[data-count]').forEach(countUp), 700);
    $('#news-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('input', e.target);
      const msg = $('#news-msg');
      if (!validators.email(input.value)) {
        msg.textContent = 'Please enter a valid email address.';
        msg.className = 'msg err';
        return;
      }
      msg.textContent = 'Thank you. Your first offer code is on its way to ' + input.value.trim() + '.';
      msg.className = 'msg ok';
      input.value = '';
    });
  },

  shop() {
    const q = params();
    const state = {
      cats: q.get('cat') ? q.get('cat').split(',') : [],
      price: q.get('price') || '',
      rating: q.get('rating') || '',
      sort: q.get('sort') || 'featured',
      q: (q.get('q') || '').trim().toLowerCase()
    };
    const prices = [['', 'All prices'], ['0-500', 'Under ₹500'], ['500-1000', '₹500 to ₹1,000'], ['1000-2000', '₹1,000 to ₹2,000'], ['2000-99999', 'Above ₹2,000']];
    const ratings = [['', 'All ratings'], ['4', '4 stars & above'], ['4.5', '4.5 stars & above']];
    const sorts = [['featured', 'Featured'], ['popular', 'Most Popular'], ['rating', 'Top Rated'], ['discount', 'Biggest Discount'], ['low', 'Price: Low to High'], ['high', 'Price: High to Low']];
    $('#filters').innerHTML = `
      <div class="fgroup"><h4>Category</h4>${CATEGORIES.map((c) => `<label><input type="checkbox" name="cat" value="${c.slug}" ${state.cats.includes(c.slug) ? 'checked' : ''}>${c.name}<em>${PRODUCTS.filter((p) => p.category === c.slug).length}</em></label>`).join('')}</div>
      <div class="fgroup"><h4>Price</h4>${prices.map(([v, l]) => `<label><input type="radio" name="price" value="${v}" ${state.price === v ? 'checked' : ''}>${l}</label>`).join('')}</div>
      <div class="fgroup"><h4>Rating</h4>${ratings.map(([v, l]) => `<label><input type="radio" name="rating" value="${v}" ${state.rating === v ? 'checked' : ''}>${l}</label>`).join('')}</div>
      <button class="btn ghost block sm" id="clear-filters">Clear All</button>`;
    $('#sort').innerHTML = sorts.map(([v, l]) => `<option value="${v}" ${state.sort === v ? 'selected' : ''}>${l}</option>`).join('');

    const render = () => {
      const [lo, hi] = state.price ? state.price.split('-').map(Number) : [0, Infinity];
      let list = PRODUCTS.filter((p) =>
        (!state.cats.length || state.cats.includes(p.category)) &&
        p.price >= lo && p.price <= hi &&
        (!state.rating || p.rating >= Number(state.rating)) &&
        (!state.q || (p.name + ' ' + p.short + ' ' + p.description + ' ' + Store.category(p.category).name).toLowerCase().includes(state.q)));
      const sorter = { popular: (a, b) => b.reviews - a.reviews, rating: (a, b) => b.rating - a.rating, discount: (a, b) => Store.discount(b) - Store.discount(a), low: (a, b) => a.price - b.price, high: (a, b) => b.price - a.price };
      if (sorter[state.sort]) list = [...list].sort(sorter[state.sort]);
      const title = state.cats.length === 1 ? Store.category(state.cats[0]).name : state.q ? 'Results for “' + esc(q.get('q')) + '”' : 'All Rakhis & Gifts';
      $('#shop-title').innerHTML = title;
      $('#crumb-now').innerHTML = title;
      $('#result-count').textContent = list.length + (list.length === 1 ? ' product' : ' products');
      $('#grid').innerHTML = list.length ? list.map(productCard).join('') : '<div class="empty" style="grid-column:1/-1"><h3>No rakhis match your filters</h3><p>Try widening the price range or clearing a filter.</p><button class="btn" id="reset-empty">Clear Filters</button></div>';
      watchReveal($('#grid'));
      const next = new URLSearchParams();
      if (state.cats.length) next.set('cat', state.cats.join(','));
      if (state.price) next.set('price', state.price);
      if (state.rating) next.set('rating', state.rating);
      if (state.sort !== 'featured') next.set('sort', state.sort);
      if (q.get('q')) next.set('q', q.get('q'));
      history.replaceState(null, '', location.pathname + (next.toString() ? '?' + next : ''));
    };
    const reset = () => {
      state.cats = []; state.price = ''; state.rating = ''; state.q = ''; q.delete('q');
      $$('#filters input').forEach((i) => { i.checked = i.type === 'radio' && i.value === ''; });
      render();
    };
    $('#filters').addEventListener('change', (e) => {
      if (e.target.name === 'cat') state.cats = $$('[name=cat]:checked').map((i) => i.value);
      else state[e.target.name] = e.target.value;
      render();
    });
    $('#filters').addEventListener('click', (e) => { if (e.target.id === 'clear-filters') reset(); });
    $('#grid').addEventListener('click', (e) => { if (e.target.id === 'reset-empty') reset(); });
    $('#sort').addEventListener('change', (e) => { state.sort = e.target.value; render(); });
    render();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const fn = Pages[document.body.dataset.page];
  if (fn) fn();
});
```

#### `11 JavaScript timers and ES6 module/rakhinest/css/style.css`
```css
:root{--ivory:#fbf9f5;--cream:#f5f1ea;--burgundy:#4a0e17;--wine:#763037;--rose:#93474d;--blush:#f3e1e0;--gold:#b08a45;--champagne:#ecdfc0;--ink:#1b1c1a;--muted:#6f5f5d;--line:#e4d9cf;--white:#fff;--ok:#2f6b4a;--serif:"Playfair Display",Georgia,serif;--sans:"Plus Jakarta Sans",system-ui,sans-serif;--wrap:1320px;--pad:48px;--ease:.28s cubic-bezier(.3,.7,.2,1)}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:var(--sans);background:var(--ivory);color:var(--ink);font-size:15px;line-height:1.65;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit;color:inherit}
button{cursor:pointer;background:none;border:0}
ul{list-style:none}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 var(--pad)}
.eyebrow{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);font-weight:600}
h1,h2,h3,h4{font-family:var(--serif);font-weight:600;line-height:1.15;letter-spacing:-.01em;color:var(--burgundy)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 32px;font-size:13px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;border:1px solid var(--burgundy);background:var(--burgundy);color:var(--ivory);transition:var(--ease)}
.btn:hover{background:var(--wine);border-color:var(--wine)}
.btn.ghost{background:transparent;color:var(--burgundy)}
.btn.ghost:hover{background:var(--burgundy);color:var(--ivory)}
.btn.gold{background:var(--champagne);border-color:var(--champagne);color:var(--burgundy)}
.btn.gold:hover{background:var(--ivory);border-color:var(--ivory)}
.btn.block{width:100%}
.btn.sm{padding:10px 20px;font-size:12px}
.link{font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;border-bottom:1px solid var(--gold);padding-bottom:3px;color:var(--burgundy)}
.link:hover{color:var(--gold)}
.announce{background:var(--burgundy);color:var(--champagne);font-size:12.5px;letter-spacing:.06em;text-align:center;padding:9px var(--pad)}
.announce b{color:#fff;font-weight:600}
.site-header{position:sticky;top:0;z-index:50;background:rgba(251,249,245,.98);border-bottom:1px solid var(--line)}
.nav-row{display:flex;align-items:center;gap:40px;height:84px}
.logo{display:flex;align-items:center;gap:12px;font-family:var(--serif);font-size:28px;font-weight:600;color:var(--burgundy);letter-spacing:-.01em}
.logo img{width:40px;height:40px;object-fit:contain}
.logo span{color:var(--gold);font-style:italic}
.main-nav{display:flex;gap:6px;margin-left:12px}
.main-nav>li{position:relative}
.main-nav>li>a{display:block;padding:30px 14px;font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink);transition:var(--ease)}
.main-nav>li:hover>a,.main-nav>li>a.active{color:var(--wine)}
.dropdown{position:absolute;top:100%;left:0;min-width:240px;background:var(--ivory);border:1px solid var(--line);border-top:2px solid var(--gold);padding:12px 0;opacity:0;visibility:hidden;transform:translateY(8px);transition:var(--ease);box-shadow:0 18px 40px rgba(74,14,23,.1)}
.main-nav>li:hover .dropdown,.main-nav>li:focus-within .dropdown{opacity:1;visibility:visible;transform:none}
.dropdown a{display:block;padding:9px 24px;font-size:14px;color:var(--muted)}
.dropdown a:hover{color:var(--burgundy);background:var(--cream);padding-left:30px}
.search{flex:1;max-width:380px;margin-left:auto;position:relative}
.search input{width:100%;border:0;border-bottom:1px solid var(--line);background:transparent;padding:10px 34px 10px 0;font-size:14px;outline:0;transition:var(--ease)}
.search input:focus{border-color:var(--burgundy)}
.search button{position:absolute;right:0;top:9px;color:var(--muted)}
.suggest{position:absolute;top:100%;left:0;right:0;background:var(--ivory);border:1px solid var(--line);box-shadow:0 18px 40px rgba(74,14,23,.12);display:none;z-index:60}
.suggest.open{display:block}
.suggest a{display:flex;gap:14px;align-items:center;padding:10px 14px;border-bottom:1px solid var(--line);font-size:14px}
.suggest a:hover{background:var(--cream)}
.suggest img{width:44px;height:44px;object-fit:cover}
.suggest small{color:var(--gold);display:block;font-weight:600}
.icons{display:flex;align-items:center;gap:6px}
.icon-btn{position:relative;width:42px;height:42px;display:grid;place-items:center;color:var(--burgundy);transition:var(--ease)}
.icon-btn:hover{color:var(--gold)}
.icon-btn svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.badge{position:absolute;top:3px;right:1px;min-width:18px;height:18px;border-radius:9px;background:var(--burgundy);color:#fff;font-size:10.5px;font-weight:700;display:grid;place-items:center;padding:0 4px}
.badge:empty,.badge[data-n="0"]{display:none}
.menu-btn{display:none}
.hero{background:var(--cream);position:relative;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1fr 1.05fr;align-items:center;min-height:680px}
.hero-copy{padding:70px 60px 70px 0}
.hero h1{font-size:clamp(46px,4.6vw,72px);margin:20px 0 24px;line-height:1.04}
.hero h1 em{color:var(--gold);font-weight:500}
.hero p{font-size:17px;color:var(--muted);max-width:520px;margin-bottom:38px}
.hero-actions{display:flex;gap:16px;align-items:center;flex-wrap:wrap}
.hero-stats{display:flex;gap:44px;margin-top:56px;padding-top:28px;border-top:1px solid var(--line)}
.hero-stats strong{display:block;font-family:var(--serif);font-size:30px;color:var(--burgundy)}
.hero-stats span{font-size:12.5px;color:var(--muted);letter-spacing:.06em}
.hero-media{position:relative;height:100%;min-height:680px}
.hero-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.hero-media::after{content:"";position:absolute;inset:28px;border:1px solid rgba(236,223,192,.8);pointer-events:none}
.hero-tag{position:absolute;left:-40px;bottom:64px;background:var(--burgundy);color:var(--champagne);padding:22px 30px;z-index:2;max-width:260px}
.hero-tag b{display:block;font-family:var(--serif);font-size:20px;color:#fff;font-weight:500}
.hero-tag span{font-size:13px}
.sec{padding:96px 0}
.sec.alt{background:var(--cream)}
.sec-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;gap:30px}
.sec-head.center{flex-direction:column;align-items:center;text-align:center}
.sec-head h2{font-size:42px;margin-top:10px}
.sec-head p{color:var(--muted);max-width:560px;margin-top:12px}
.orn{display:flex;align-items:center;gap:14px;color:var(--gold);margin-top:16px}
.orn::before,.orn::after{content:"";width:56px;height:1px;background:var(--gold)}
.orn i{width:7px;height:7px;background:var(--gold);transform:rotate(45deg)}
.cat-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:20px}
.cat{position:relative;display:block;overflow:hidden;aspect-ratio:3/4.1;background:var(--burgundy)}
.cat img{width:100%;height:100%;object-fit:cover;transition:transform .8s ease,opacity var(--ease);opacity:.92}
.cat:hover img{transform:scale(1.07);opacity:1}
.cat::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(42,0,6,.82),transparent 55%)}
.cat div{position:absolute;left:20px;right:20px;bottom:20px;z-index:2;color:#fff}
.cat h3{font-size:21px;color:#fff;margin-bottom:4px}
.cat span{font-size:12.5px;color:var(--champagne)}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:36px 28px}
.prod-grid.three{grid-template-columns:repeat(3,1fr)}
.pcard{position:relative;display:flex;flex-direction:column}
.pimg{position:relative;aspect-ratio:1/1.08;overflow:hidden;background:var(--cream);display:block}
.pimg img{width:100%;height:100%;object-fit:cover;transition:transform .8s ease}
.pcard:hover .pimg img{transform:scale(1.06)}
.pbadge{position:absolute;top:14px;left:14px;background:var(--burgundy);color:var(--champagne);font-size:11px;letter-spacing:.12em;text-transform:uppercase;padding:5px 11px;font-weight:600;z-index:2}
.pbadge.off{background:var(--champagne);color:var(--burgundy);left:auto;right:14px;top:auto;bottom:14px}
.wish{position:absolute;top:10px;right:10px;width:38px;height:38px;display:grid;place-items:center;background:rgba(251,249,245,.92);color:var(--burgundy);z-index:3;transition:var(--ease)}
.wish svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.7}
.wish.on svg{fill:var(--rose);stroke:var(--rose)}
.wish:hover{background:var(--burgundy);color:#fff}
.wish.on:hover svg{stroke:#fff;fill:#fff}
.quick{position:absolute;left:0;right:0;bottom:0;background:rgba(74,14,23,.94);color:var(--champagne);font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;padding:14px;transform:translateY(100%);transition:var(--ease);z-index:2}
.pcard:hover .quick{transform:none}
.pbody{padding-top:18px;display:flex;flex-direction:column;flex:1}
.pcat{font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);font-weight:600}
.pname{font-family:var(--serif);font-size:19px;color:var(--burgundy);margin:6px 0 8px;line-height:1.3;font-weight:500}
.pname:hover{color:var(--rose)}
.stars{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--muted)}
.stars .s{color:var(--gold);letter-spacing:2px}
.price{display:flex;align-items:baseline;gap:10px;margin:10px 0 16px}
.price b{font-size:18px;color:var(--ink);font-weight:700}
.price s{color:#9b8d8a;font-size:14px}
.price em{font-style:normal;color:var(--ok);font-size:13px;font-weight:600}
.pcard .btn{margin-top:auto}
.combo{background:var(--burgundy);color:var(--champagne);position:relative;overflow:hidden}
.combo-grid{display:grid;grid-template-columns:1.1fr 1fr;align-items:stretch}
.combo-copy{padding:90px 70px 90px 0}
.combo h2{color:#fff;font-size:50px;margin:16px 0 20px}
.combo h2 em{color:var(--champagne);font-weight:500}
.combo p{max-width:500px;margin-bottom:30px;color:#e6d3c8}
.combo ul{margin-bottom:38px;display:grid;gap:12px}
.combo li{display:flex;gap:12px;align-items:center;font-size:14.5px}
.combo li::before{content:"";width:7px;height:7px;background:var(--gold);transform:rotate(45deg);flex:none}
.combo-price{display:flex;align-items:baseline;gap:14px;margin-bottom:32px}
.combo-price b{font-family:var(--serif);font-size:44px;color:#fff;font-weight:500}
.combo-price s{color:#b69a94}
.combo-media{position:relative;min-height:520px}
.combo-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.why{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.why div{padding:44px 34px;border-right:1px solid var(--line)}
.why div:last-child{border-right:0}
.why svg{width:36px;height:36px;fill:none;stroke:var(--gold);stroke-width:1.3;margin-bottom:20px;stroke-linecap:round;stroke-linejoin:round}
.why h3{font-size:21px;margin-bottom:10px}
.why p{color:var(--muted);font-size:14.5px}
.collections{display:grid;grid-template-columns:1.4fr 1fr;gap:28px}
.coll{position:relative;display:block;overflow:hidden;min-height:480px;background:var(--burgundy)}
.coll img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .9s ease}
.coll:hover img{transform:scale(1.05)}
.coll::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(42,0,6,.85),transparent 60%)}
.coll div{position:absolute;left:40px;bottom:36px;right:40px;z-index:2;color:#fff}
.coll h3{font-size:34px;color:#fff;margin:8px 0}
.coll p{color:var(--champagne);margin-bottom:16px;max-width:420px}
.coll .link{color:#fff;border-color:var(--champagne)}
.tests{display:grid;grid-template-columns:repeat(3,1fr);gap:56px}
.test{border-top:2px solid var(--gold);padding-top:28px}
.test .s{color:var(--gold);letter-spacing:3px;font-size:14px}
.test p{font-family:var(--serif);font-size:21px;color:var(--burgundy);margin:16px 0 22px;line-height:1.5;font-weight:500}
.test b{display:block;font-size:14px}
.test span{font-size:13px;color:var(--muted)}
.news{background:var(--blush);padding:80px 0}
.news-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}
.news h2{font-size:38px;margin-top:10px}
.news form{display:flex;border-bottom:1px solid var(--burgundy)}
.news input{flex:1;background:transparent;border:0;padding:16px 0;outline:0;font-size:15px}
.news button{font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--burgundy);padding:0 6px}
.news small{display:block;margin-top:12px;color:var(--muted)}
.site-footer{background:#2b0a10;color:#d8c5bd;padding:80px 0 0}
.foot-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr 1.3fr;gap:48px;padding-bottom:56px}
.site-footer .logo{color:#fff;margin-bottom:18px}
.site-footer h4{font-family:var(--sans);font-size:12.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--champagne);margin-bottom:20px;font-weight:600}
.site-footer li{margin-bottom:10px;font-size:14px}
.site-footer li a:hover{color:#fff}
.site-footer p{font-size:14px;max-width:320px}
.foot-bar{border-top:1px solid rgba(236,223,192,.18);padding:24px 0;display:flex;justify-content:space-between;font-size:13px;color:#b49f97;gap:20px;flex-wrap:wrap}
.page-head{background:var(--cream);padding:52px 0 44px;border-bottom:1px solid var(--line)}
.page-head h1{font-size:46px;margin-top:8px}
.crumbs{font-size:13px;color:var(--muted);margin-bottom:10px}
.crumbs a:hover{color:var(--burgundy)}
.shop-layout{display:grid;grid-template-columns:270px 1fr;gap:56px;padding:56px 0 96px;align-items:start}
.filters{position:sticky;top:110px}
.fgroup{padding-bottom:26px;margin-bottom:26px;border-bottom:1px solid var(--line)}
.fgroup h4{font-family:var(--sans);font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--burgundy);margin-bottom:16px;font-weight:700}
.fgroup label{display:flex;align-items:center;gap:12px;padding:6px 0;font-size:14.5px;cursor:pointer;color:var(--muted)}
.fgroup label:hover{color:var(--burgundy)}
.fgroup input{accent-color:var(--burgundy);width:16px;height:16px}
.fgroup label em{margin-left:auto;font-style:normal;font-size:12.5px}
.toolbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;padding-bottom:20px;border-bottom:1px solid var(--line);gap:16px}
.toolbar select{border:1px solid var(--line);background:var(--ivory);padding:10px 14px;font-size:14px;outline:0}
.filter-toggle{display:none}
.empty{text-align:center;padding:80px 20px;color:var(--muted)}
.empty h3{font-size:28px;margin-bottom:10px}
.empty .btn{margin-top:24px}
.pd{display:grid;grid-template-columns:1.1fr 1fr;gap:72px;padding:56px 0 80px;align-items:start}
.gallery{display:grid;grid-template-columns:92px 1fr;gap:18px;position:sticky;top:110px}
.thumbs{display:grid;gap:14px;align-content:start}
.thumbs button{aspect-ratio:1;border:1px solid var(--line);overflow:hidden;opacity:.7;transition:var(--ease)}
.thumbs button.on,.thumbs button:hover{opacity:1;border-color:var(--burgundy)}
.thumbs img{width:100%;height:100%;object-fit:cover}
.mainimg{aspect-ratio:1/1.05;overflow:hidden;background:var(--cream);cursor:zoom-in}
.mainimg img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}
.mainimg:hover img{transform:scale(1.4)}
.pd-info h1{font-size:42px;margin:10px 0 14px}
.pd-info .price b{font-size:30px;font-family:var(--serif);font-weight:500}
.pd-info .price s{font-size:18px}
.pd-info>p{color:var(--muted);margin-bottom:26px}
.opts{display:flex;gap:16px;align-items:stretch;margin:30px 0 20px}
.qty{display:inline-flex;align-items:center;border:1px solid var(--line)}
.qty button{width:40px;height:44px;font-size:18px;color:var(--burgundy)}
.qty button:hover{background:var(--cream)}
.qty span{min-width:36px;text-align:center;font-weight:600}
.opts .btn{flex:1}
.opts .wishbtn{width:54px;border:1px solid var(--line);display:grid;place-items:center;color:var(--burgundy);transition:var(--ease)}
.opts .wishbtn svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.7}
.opts .wishbtn.on svg{fill:var(--rose);stroke:var(--rose)}
.opts .wishbtn:hover{border-color:var(--burgundy)}
.perks{border-top:1px solid var(--line);margin-top:30px}
.perks li{display:flex;gap:14px;padding:14px 0;border-bottom:1px solid var(--line);font-size:14px;color:var(--muted)}
.perks b{color:var(--burgundy);min-width:120px}
.pincode{display:flex;gap:10px;margin-top:6px}
.pincode input{flex:1;border:1px solid var(--line);background:transparent;padding:12px 14px;outline:0}
.pin-msg{font-size:13px;margin-top:8px;min-height:20px;color:var(--ok)}
.cart-layout{display:grid;grid-template-columns:1fr 400px;gap:64px;padding:56px 0 96px;align-items:start}
.citem{display:grid;grid-template-columns:120px 1fr auto;gap:24px;padding:24px 0;border-bottom:1px solid var(--line);align-items:center}
.citem:first-child{border-top:1px solid var(--line)}
.citem img{width:120px;height:120px;object-fit:cover}
.citem h3{font-size:20px;font-weight:500;margin-bottom:4px}
.citem small{color:var(--muted);display:block;margin-bottom:12px}
.citem .rm{font-size:12.5px;color:var(--muted);text-decoration:underline;margin-left:18px}
.citem .rm:hover{color:var(--rose)}
.citem .lt{font-weight:700;font-size:17px;text-align:right}
.summary{background:var(--cream);padding:36px;position:sticky;top:110px}
.summary h3{font-size:24px;margin-bottom:22px}
.srow{display:flex;justify-content:space-between;padding:9px 0;font-size:14.5px;color:var(--muted)}
.srow.total{border-top:1px solid var(--line);margin-top:12px;padding-top:18px;font-size:18px;color:var(--ink);font-weight:700}
.srow.disc{color:var(--ok)}
.coupon{display:flex;gap:8px;margin:20px 0}
.coupon input{flex:1;border:1px solid var(--line);background:var(--ivory);padding:11px 14px;outline:0;text-transform:uppercase}
.note{font-size:12.5px;color:var(--muted);margin-top:12px}
.msg{font-size:13px;min-height:20px;margin-bottom:8px}
.msg.err{color:#a3262a}
.msg.ok{color:var(--ok)}
.field{margin-bottom:18px}
.field label{display:block;font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;font-weight:600;color:var(--burgundy);margin-bottom:8px}
.field input,.field select,.field textarea{width:100%;border:1px solid var(--line);background:var(--ivory);padding:13px 14px;outline:0;transition:var(--ease)}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--burgundy)}
.field.invalid input,.field.invalid select{border-color:#a3262a}
.two{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.three-f{display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px}
.fblock{margin-bottom:44px}
.fblock h3{font-size:26px;margin-bottom:24px;padding-bottom:14px;border-bottom:1px solid var(--line)}
.pay{display:grid;gap:12px}
.pay label{display:flex;gap:14px;align-items:center;border:1px solid var(--line);padding:16px 18px;cursor:pointer;transition:var(--ease)}
.pay label:has(input:checked){border-color:var(--burgundy);background:var(--cream)}
.pay input{accent-color:var(--burgundy)}
.pay small{margin-left:auto;color:var(--muted)}
.mini{display:flex;gap:14px;align-items:center;padding:10px 0;font-size:14px}
.mini img{width:56px;height:56px;object-fit:cover}
.mini span{flex:1}
.mini b{font-weight:700}
.done{text-align:center;max-width:620px;margin:0 auto;padding:100px 0}
.done .tick{width:76px;height:76px;border:1px solid var(--gold);border-radius:50%;display:grid;place-items:center;margin:0 auto 28px;color:var(--gold)}
.done .tick svg{width:34px;height:34px;fill:none;stroke:currentColor;stroke-width:1.6}
.done h1{font-size:44px;margin-bottom:14px}
.done p{color:var(--muted);margin-bottom:10px}
.done .btn{margin:28px 8px 0}
.auth{display:grid;grid-template-columns:1fr 1fr;min-height:720px}
.auth-art{position:relative;background:var(--burgundy)}
.auth-art img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.55}
.auth-art div{position:absolute;left:56px;right:56px;bottom:64px;color:#fff}
.auth-art h2{color:#fff;font-size:42px;margin:12px 0}
.auth-art p{color:var(--champagne)}
.auth-form{display:flex;align-items:center;justify-content:center;padding:60px var(--pad)}
.auth-box{width:100%;max-width:440px}
.tabs{display:flex;border-bottom:1px solid var(--line);margin-bottom:34px}
.tabs button{flex:1;padding:14px;font-size:13px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:var(--muted);border-bottom:2px solid transparent;margin-bottom:-1px}
.tabs button.on{color:var(--burgundy);border-color:var(--burgundy)}
.profile{max-width:760px;margin:0 auto;padding:70px 0 100px}
.profile h1{font-size:42px;margin-bottom:8px}
.ord{border:1px solid var(--line);padding:22px 26px;margin-top:16px;display:flex;justify-content:space-between;align-items:center;gap:20px}
.ord b{font-family:var(--serif);font-size:19px;color:var(--burgundy)}
.ord small{display:block;color:var(--muted)}
.track{max-width:820px;margin:0 auto;padding:70px 0 100px}
.track form{display:flex;gap:12px;margin:28px 0 40px}
.track form input{flex:1;border:1px solid var(--line);background:var(--ivory);padding:14px 16px;outline:0}
.tl{margin-top:30px;position:relative}
.step{display:grid;grid-template-columns:44px 1fr;gap:20px;padding-bottom:34px;position:relative}
.step::before{content:"";position:absolute;left:21px;top:44px;bottom:0;width:1px;background:var(--line)}
.step:last-child::before{display:none}
.step i{width:44px;height:44px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;background:var(--ivory);color:var(--muted);font-style:normal;font-size:13px;font-weight:700}
.step.done-s i{background:var(--burgundy);border-color:var(--burgundy);color:#fff}
.step.done-s::before{background:var(--burgundy)}
.step.cur i{border-color:var(--gold);color:var(--gold);box-shadow:0 0 0 5px var(--champagne)}
.step b{font-family:var(--serif);font-size:20px;color:var(--burgundy);display:block;font-weight:500}
.step span{font-size:13.5px;color:var(--muted)}
.tbox{border:1px solid var(--line);padding:26px 30px;background:var(--cream)}
.overlay{position:fixed;inset:0;background:rgba(27,10,14,.55);z-index:100;opacity:0;visibility:hidden;transition:var(--ease)}
.overlay.open{opacity:1;visibility:visible}
.modal{position:fixed;left:50%;top:50%;z-index:110;width:min(960px,92vw);max-height:90vh;overflow:auto;background:var(--ivory);transform:translate(-50%,-46%);opacity:0;visibility:hidden;transition:var(--ease);display:grid;grid-template-columns:1fr 1fr}
.modal.open{opacity:1;visibility:visible;transform:translate(-50%,-50%)}
.modal .mimg{background:var(--cream);min-height:460px}
.modal .mimg img{width:100%;height:100%;object-fit:cover}
.modal .mbody{padding:44px 40px}
.modal h2{font-size:32px;margin:10px 0 12px}
.modal .close{position:absolute;right:14px;top:14px;width:40px;height:40px;font-size:26px;color:var(--burgundy);z-index:2;background:var(--ivory)}
.toast{position:fixed;left:50%;bottom:34px;transform:translate(-50%,30px);background:var(--burgundy);color:var(--champagne);padding:14px 26px;font-size:14px;z-index:200;opacity:0;visibility:hidden;transition:var(--ease);display:flex;gap:18px;align-items:center}
.toast.show{opacity:1;visibility:visible;transform:translate(-50%,0)}
.toast a{color:#fff;border-bottom:1px solid var(--gold);font-size:12.5px;letter-spacing:.1em;text-transform:uppercase}
.drawer{position:fixed;top:0;right:0;bottom:0;width:min(440px,100vw);background:var(--ivory);z-index:110;transform:translateX(100%);transition:var(--ease);display:flex;flex-direction:column}
.drawer.open{transform:none}
.drawer header{display:flex;justify-content:space-between;align-items:center;padding:24px 28px;border-bottom:1px solid var(--line)}
.drawer header h3{font-size:24px}
.drawer header button{font-size:28px;color:var(--burgundy)}
.drawer .dbody{flex:1;overflow:auto;padding:8px 28px}
.drawer footer{padding:24px 28px;border-top:1px solid var(--line);background:var(--cream)}
.drow{display:grid;grid-template-columns:76px 1fr;gap:16px;padding:18px 0;border-bottom:1px solid var(--line)}
.drow img{width:76px;height:76px;object-fit:cover}
.drow h4{font-size:16px;font-weight:500;margin-bottom:4px}
.drow small{color:var(--muted)}
.drow .qty button{height:32px;width:32px}
.drow .rm{font-size:12px;text-decoration:underline;color:var(--muted);margin-left:12px}
.mnav{display:none}
@media (max-width:1280px){:root{--pad:36px}.cat-grid{grid-template-columns:repeat(3,1fr)}.cat{aspect-ratio:4/3.4}.nav-row{gap:24px}.main-nav>li>a{padding:30px 9px;font-size:12px}.foot-grid{grid-template-columns:1.4fr 1fr 1fr 1fr;gap:36px}.foot-grid>:last-child{grid-column:span 4}}
@media (max-width:1024px){.prod-grid{grid-template-columns:repeat(3,1fr)}.shop-layout{grid-template-columns:230px 1fr;gap:36px}.hero-grid{min-height:560px}.hero-media{min-height:560px}.why{grid-template-columns:repeat(2,1fr)}.why div:nth-child(2){border-right:0}.why div:nth-child(-n+2){border-bottom:1px solid var(--line)}.pd{gap:40px}.cart-layout{grid-template-columns:1fr 340px;gap:36px}.tests{gap:32px}.combo h2{font-size:42px}.search{max-width:220px}}
@media (max-width:860px){:root{--pad:22px}.menu-btn{display:grid}.main-nav{display:none}.nav-row{height:68px;gap:10px}.search{display:none}.logo{font-size:24px;margin-right:auto}.mnav{display:block;position:fixed;top:0;left:0;bottom:0;width:min(340px,86vw);background:var(--ivory);z-index:110;transform:translateX(-100%);transition:var(--ease);padding:26px;overflow:auto}.mnav.open{transform:none}.mnav form{margin-bottom:20px}.mnav input{width:100%;border:1px solid var(--line);padding:12px;background:transparent}.mnav a{display:block;padding:13px 0;border-bottom:1px solid var(--line);font-weight:600;font-size:14px;letter-spacing:.08em;text-transform:uppercase}.mnav a.sub{padding-left:16px;text-transform:none;font-weight:400;letter-spacing:0;color:var(--muted)}.hero-grid{grid-template-columns:1fr;min-height:0}.hero-copy{padding:48px 0 40px}.hero-media{min-height:420px;order:-1;margin:0 calc(var(--pad)*-1)}.hero-tag{left:var(--pad);bottom:24px}.hero-stats{gap:26px;margin-top:36px}.sec{padding:64px 0}.sec-head{flex-direction:column;align-items:flex-start;margin-bottom:32px}.sec-head h2{font-size:32px}.cat-grid{grid-template-columns:repeat(2,1fr);gap:14px}.prod-grid,.prod-grid.three{grid-template-columns:repeat(2,1fr);gap:28px 14px}.combo-grid{grid-template-columns:1fr}.combo-copy{padding:56px 0 40px}.combo h2{font-size:34px}.combo-media{min-height:320px;margin:0 calc(var(--pad)*-1)}.collections{grid-template-columns:1fr}.coll{min-height:360px}.coll div{left:22px;right:22px}.tests{grid-template-columns:1fr}.news-grid{grid-template-columns:1fr;gap:28px}.foot-grid{grid-template-columns:1fr 1fr}.foot-grid>:first-child,.foot-grid>:last-child{grid-column:span 2}.page-head h1{font-size:34px}.shop-layout{grid-template-columns:1fr;padding:32px 0 64px}.filters{position:fixed;top:0;left:0;bottom:0;width:min(330px,88vw);background:var(--ivory);z-index:110;padding:26px;overflow:auto;transform:translateX(-100%);transition:var(--ease)}.filters.open{transform:none}.filter-toggle{display:inline-flex}.pd{grid-template-columns:1fr;padding:28px 0 56px}.gallery{position:static;grid-template-columns:1fr}.thumbs{grid-template-columns:repeat(3,1fr);order:2}.pd-info h1{font-size:32px}.cart-layout{grid-template-columns:1fr;padding:32px 0 64px}.summary{position:static}.citem{grid-template-columns:90px 1fr;gap:16px}.citem img{width:90px;height:90px}.citem .lt{grid-column:2;text-align:left}.two,.three-f{grid-template-columns:1fr}.auth{grid-template-columns:1fr}.auth-art{min-height:260px}.auth-art div{left:22px;bottom:28px}.auth-art h2{font-size:30px}.modal{grid-template-columns:1fr}.modal .mimg{min-height:280px;max-height:320px}.modal .mbody{padding:28px 22px}.why{grid-template-columns:1fr}.why div{border-right:0;border-bottom:1px solid var(--line);padding:30px 4px}.quick{display:none}.track form{flex-direction:column}.opts{flex-wrap:wrap}.ord{flex-direction:column;align-items:flex-start}}
@media (max-width:480px){.hero h1{font-size:40px}.pname{font-size:16px}.price b{font-size:16px}.announce{font-size:11.5px}.hero-stats{flex-wrap:wrap}.foot-grid{grid-template-columns:1fr}.foot-grid>*{grid-column:auto!important}}
.pmedia{position:relative;overflow:hidden}
.prod-grid.wl{grid-template-columns:repeat(4,1fr)}
@media (max-width:1024px){.prod-grid.wl{grid-template-columns:repeat(3,1fr)}}
@media (max-width:860px){.prod-grid.wl{grid-template-columns:repeat(2,1fr)}}
.modal.wide{width:min(1040px,94vw)}
.modal.xwide{width:min(1120px,94vw);grid-template-columns:1fr}
.modal.one{grid-template-columns:1fr;width:min(720px,94vw)}
.modal.one.narrow{width:min(540px,94vw)}
.mpad{padding:48px}
.co-grid{display:grid;grid-template-columns:1fr 360px;gap:48px;align-items:start}
.modal .summary{position:static}
.modal .done{padding:10px 0}
.modal .tabs{margin-top:8px}
.mimg{display:flex;flex-direction:column}
.mmain{flex:1;min-height:420px;overflow:hidden}
.mmain img{width:100%;height:100%;object-fit:cover}
.mthumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:10px;background:var(--ivory)}
.mthumbs button{aspect-ratio:1;border:1px solid var(--line);overflow:hidden;opacity:.7;transition:var(--ease)}
.mthumbs button.on,.mthumbs button:hover{opacity:1;border-color:var(--burgundy)}
.mthumbs img{width:100%;height:100%;object-fit:cover}
.trackf{display:flex;gap:12px;margin:24px 0 30px}
.trackf input{flex:1;border:1px solid var(--line);background:var(--ivory);padding:14px 16px;outline:0}
#wdrawer .empty,#drawer .empty{padding:60px 10px}
.modal .perks b{min-width:90px}
@media (max-width:860px){.modal .mimg{max-height:none;min-height:0}.mpad{padding:56px 22px 28px}.co-grid{grid-template-columns:1fr;gap:28px}.mmain{min-height:280px;max-height:340px}.trackf{flex-direction:column}.modal.wide,.modal.xwide{width:94vw}}
@keyframes rise{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@keyframes zoomIn{from{transform:scale(1.12)}to{transform:scale(1)}}
@keyframes slideIn{from{opacity:0;transform:translateX(-36px)}to{opacity:1;transform:none}}
@keyframes fade{from{opacity:0}to{opacity:1}}
@keyframes pop{0%{transform:scale(1)}40%{transform:scale(1.5)}100%{transform:scale(1)}}
@keyframes heartPop{0%{transform:scale(1)}40%{transform:scale(1.4)}100%{transform:scale(1)}}
@keyframes drawLine{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.js .reveal{opacity:0;transform:translateY(32px);transition:opacity .9s ease var(--d,0ms),transform .9s cubic-bezier(.2,.7,.2,1) var(--d,0ms)}
.js .reveal.in{opacity:1;transform:none}
.js .coll.reveal,.js .combo-media.reveal{transform:translateY(0) scale(.97)}
.js .coll.reveal.in,.js .combo-media.reveal.in{transform:none}
.js .hero-copy>*{animation:rise 1s cubic-bezier(.2,.7,.2,1) both}
.js .hero-copy>:nth-child(1){animation-delay:.1s}
.js .hero-copy>:nth-child(2){animation-delay:.25s}
.js .hero-copy>:nth-child(3){animation-delay:.4s}
.js .hero-copy>:nth-child(4){animation-delay:.55s}
.js .hero-copy>:nth-child(5){animation-delay:.7s}
.hero-media{overflow:hidden}
.js .hero-media img{animation:zoomIn 2.2s cubic-bezier(.2,.7,.2,1) both}
.js .hero-media::after{animation:fade 1.4s .8s both}
.js .hero-tag{animation:slideIn 1s 1s cubic-bezier(.2,.7,.2,1) both}
.hero-tag{left:28px}
.js .announce{animation:fade 1s both}
.site-header{transition:box-shadow .3s}
.site-header.scrolled{box-shadow:0 8px 26px rgba(74,14,23,.09)}
.nav-row{transition:height .3s}
.site-header.scrolled .nav-row{height:70px}
.badge.pop{animation:pop .45s}
.wish.on svg,.wishbtn.on svg{animation:heartPop .45s}
.btn{transition:var(--ease),transform .2s}
.btn:hover{transform:translateY(-2px)}
.btn:active{transform:translateY(0) scale(.98)}
.link{border-bottom:0;background:linear-gradient(var(--gold),var(--gold)) 0 100%/100% 1px no-repeat;transition:background-size .3s,color .3s}
.link:hover{background-size:100% 3px}
.coll .link{background-image:linear-gradient(var(--champagne),var(--champagne))}
.cat div{transition:transform .5s cubic-bezier(.2,.7,.2,1)}
.cat:hover div{transform:translateY(-8px)}
.coll div{transition:transform .5s cubic-bezier(.2,.7,.2,1)}
.coll:hover div{transform:translateY(-8px)}
.orn::before,.orn::after{transform-origin:center}
.js .reveal.in .orn::before,.js .reveal.in .orn::after{animation:drawLine 1s .3s both}
.why div{transition:background-color .4s}
.why div:hover{background:var(--cream)}
.why svg{transition:transform .5s cubic-bezier(.2,.7,.2,1)}
.why div:hover svg{transform:translateY(-5px) scale(1.08)}
.test{transition:border-color .3s}
.test:hover{border-color:var(--burgundy)}
.modal.open .mbody>*{animation:rise .6s both}
.modal.open .mbody>:nth-child(2){animation-delay:.05s}
.modal.open .mbody>:nth-child(3){animation-delay:.1s}
.modal.open .mbody>:nth-child(4){animation-delay:.15s}
.modal.open .mbody>:nth-child(5){animation-delay:.2s}
.modal.open .mbody>:nth-child(n+6){animation-delay:.25s}
@media (max-width:860px){.js .hero-tag{animation:rise 1s 1s both}.hero-tag{left:var(--pad)}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition-duration:.01ms!important;scroll-behavior:auto!important}.js .reveal{opacity:1;transform:none}}
.logo img{width:auto;height:66px;object-fit:contain;transition:height .3s}
.site-header.scrolled .logo img{height:56px}
@media (max-width:860px){.logo img,.site-header.scrolled .logo img{height:50px}}
.foot-credit{border-top:1px solid rgba(236,223,192,.18);padding:26px 0 30px;text-align:center;display:flex;flex-direction:column;gap:2px;font-size:13px;color:#b49f97}
.foot-credit span:first-child{font-size:11.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--gold)}
.foot-credit b{font-family:var(--serif);font-size:20px;font-weight:500;color:var(--champagne);margin:4px 0}
```

#### Output
- The home page shows the hero banner with count-up statistics, category cards, bestselling rakhis, the festive combo hamper, reviews and a newsletter form that validates the email address.
- `shop.html` lists the products with filters and sorting; **Add to Cart** shows a toast that disappears by itself, and the cart badge, drawer and totals update immediately.
- Applying a valid coupon reduces the total, and shipping becomes free when the subtotal crosses ₹999.
- **Checkout** validates every field before showing the order confirmation, and **Track Order** displays the delivery stages for an order ID. Cart, wishlist and account data survive a page refresh because they are stored in `localStorage`.

> **Screenshot:**
> ![RakhiNest output](<rakhinest/RakhiNest.png>)

---

## Result / Conclusion
The practical was completed successfully. JavaScript timers were used to build a real-time **Class Scheduler**: `setInterval()` drives a live clock, a countdown and automatic status changes (upcoming → starting soon → ongoing → completed), while `setTimeout()` handles short-lived effects such as toast notifications and tick animations. The application's code is loaded as an ES6 module through `<script type="module">`, uses modern ES6 syntax throughout, validates user input and persists the schedule in `localStorage`. The case studies applied the same modern JavaScript to three complete websites — a concert registration page with a live price calculator and digital pass, a scroll-aware city showcase, and a multi-page rakhi store with a closure-based data store, cart, checkout and order tracking.
