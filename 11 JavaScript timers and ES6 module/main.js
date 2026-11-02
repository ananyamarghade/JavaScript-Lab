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