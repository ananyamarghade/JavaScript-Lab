const expenses = [];

function addExpense() {

    const name = document.getElementById("expenseName").value.trim();
    const amount = Number(document.getElementById("expenseAmount").value);
    const category = document.getElementById("expenseCategory").value;

    if (name === "" || amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid expense.");
        return;
    }

    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

    updateExpenseData();
}

function updateExpenseData() {

    const amounts = expenses.map(function(expense) {
        return expense.amount;
    });

    const expenseReport = {
        expenses: amounts,
        total: amounts.reduce(function(sum, amount) {
            return sum + amount;
        }, 0),
        maximum: Math.max(...amounts),
        minimum: Math.min(...amounts),
        count: amounts.length
    };

    expenseReport.average =
        expenseReport.total / expenseReport.count;

    document.getElementById("total").textContent =
        "₹" + expenseReport.total.toFixed(2);

    document.getElementById("average").textContent =
        "₹" + expenseReport.average.toFixed(2);

    document.getElementById("maximum").textContent =
        "₹" + expenseReport.maximum.toFixed(2);

    document.getElementById("minimum").textContent =
        "₹" + expenseReport.minimum.toFixed(2);

    document.getElementById("arrayDisplay").textContent =
        "const expenses = [" + amounts.join(", ") + "];";

    document.getElementById("arrayCount").textContent =
        expenseReport.count;

    document.getElementById("arrayMin").textContent =
        "₹" + expenseReport.minimum.toFixed(2);

    document.getElementById("arrayMax").textContent =
        "₹" + expenseReport.maximum.toFixed(2);

    const list = document.getElementById("expenseList");

    list.innerHTML = expenses.map(function(expense) {

        return `
            <tr>
                <td>${expense.name}</td>
                <td>${expense.category}</td>
                <td>₹${expense.amount.toFixed(2)}</td>
            </tr>
        `;

    }).join("");
}