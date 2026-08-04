# Experiment No. 2
**Student Name:** Ananya Marghade
**PRN:** 24070521004
**File Path:** `2 To build a billing calculator with user input./shop-billing.html` | `2 To build a billing calculator with user input./shop-billing.js`

---

## Experiment Title
Demonstration of `var`, `let`, `const`, Template Literals, Destructuring, and a Billing Calculator with User Input

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Experiment Program Code

### QuickCart Billing Calculator — `shop-billing.html`
A shopping-cart style billing page (customer/delivery details, cart table, price summary, printable receipt) with all styling embedded in an internal `<style>` block.

#### `2 To build a billing calculator with user input./shop-billing.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bill Calculator</title>
<style>

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Verdana, Geneva, sans-serif;
}

body{
    background:#eaeded;
    padding:25px;
}

.wrap{
    max-width:880px;
    margin:auto;
    background:#ffffff;
    border:1px solid #ddd;
}

.top{
    background:#131921;
    color:#fff;
    padding:16px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.top .brand{
    font-size:22px;
    font-weight:bold;
}

.top .brand span{
    color:#f0c14b;
}

.top p{
    font-size:12px;
    color:#ccc;
    margin-top:3px;
}

.subbar{
    background:#232f3e;
    color:#ddd;
    padding:8px 20px;
    font-size:13px;
}

.box{
    padding:20px;
}

.sectionTitle{
    font-size:15px;
    font-weight:bold;
    color:#131921;
    margin:10px 0 8px 0;
    padding-bottom:5px;
    border-bottom:2px solid #f0c14b;
    display:inline-block;
}

label{
    display:block;
    font-size:13px;
    margin-bottom:4px;
    color:#444;
}

input, select{
    width:100%;
    padding:8px;
    margin-bottom:12px;
    border:1px solid #aab7c4;
    border-radius:3px;
    font-size:14px;
}

input:focus, select:focus{
    outline:none;
    border-color:#e77600;
    box-shadow:0 0 3px 2px rgba(228,121,17,.5);
}

.two-col{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:15px;
}

#upiBox{
    background:#fff8e7;
    border:1px solid #f0c14b;
    border-radius:4px;
    padding:12px;
    margin-bottom:12px;
}

#upiBox label{
    color:#7a5b00;
}

.add-row{
    display:grid;
    grid-template-columns:2fr 1fr 1fr auto;
    gap:8px;
    align-items:start;
}

button{
    padding:9px 15px;
    border:none;
    cursor:pointer;
    font-size:14px;
}

#addBtn{
    background:#f0c14b;
    color:#111;
    height:38px;
    border:1px solid #a88734;
    font-weight:bold;
}

#addBtn:hover{
    background:#f4d078;
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:15px;
}

th, td{
    border:1px solid #ddd;
    padding:8px;
    font-size:13px;
    text-align:center;
}

th{
    background:#232f3e;
    color:#fff;
    font-weight:normal;
}

tbody tr:nth-child(even){
    background:#f7f8fa;
}

.delBtn{
    background:#fff;
    color:#c0392b;
    border:1px solid #c0392b;
    padding:5px 10px;
    font-size:12px;
    border-radius:3px;
}

.delBtn:hover{
    background:#c0392b;
    color:#fff;
}

.summary{
    margin-top:20px;
    border:1px solid #ddd;
    border-radius:4px;
    padding:15px;
    background:#f8f8f8;
}

.line{
    display:flex;
    justify-content:space-between;
    padding:4px 0;
    font-size:14px;
}

.line.grand{
    font-size:19px;
    font-weight:bold;
    border-top:2px solid #333;
    margin-top:8px;
    padding-top:10px;
    color:#1a1a1a;
}

.btnrow{
    margin-top:18px;
    display:flex;
    gap:10px;
}

button{
    border-radius:3px;
}

#billBtn{
    background:#ffa41c;
    color:#111;
    border:1px solid #a5690a;
    font-weight:bold;
}

#billBtn:hover{
    background:#ffb84d;
}

#printBtn{
    background:#fff;
    color:#232f3e;
    border:1px solid #999;
}

#printBtn:hover{
    background:#eee;
}

#resetBtn{
    background:#fff;
    color:#c0392b;
    border:1px solid #c0392b;
}

#resetBtn:hover{
    background:#c0392b;
    color:#fff;
}

.receipt{
    margin-top:20px;
    padding:18px;
    border:1px solid #ccc;
    border-radius:4px;
    display:none;
}

.receipt h2{
    text-align:center;
    margin-bottom:10px;
    font-size:19px;
    color:#131921;
}

.note{
    font-size:12px;
    color:#e77600;
    margin-top:5px;
}

@media print{
    body *{
        visibility:hidden;
    }
    .receipt, .receipt *{
        visibility:visible;
    }
    .receipt{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        border:none;
        margin:0;
        padding:10px;
    }
    button{display:none;}
    body{background:#fff;}
}
body{
    background:#eaeded;
    padding:25px;
    min-height:100vh;
    display:flex;
    flex-direction:column;
}

.wrap{
    max-width:880px;
    margin:auto;
    background:#ffffff;
    border:1px solid #ddd;
    flex:1;
}

.footer{
    text-align:center;
    margin-top:20px;
    padding:15px;
    color:#555;
    font-size:14px;
}
</style>
</head>

<body>

<div class="wrap">

<div class="top">
<div>
<div class="brand">Quick<span>Cart</span></div>
<p>Order No: <span id="orderNo"></span> &nbsp;|&nbsp; <span id="orderDate"></span></p>
</div>
</div>

<div class="subbar">Checkout &nbsp;›&nbsp; Billing Summary</div>

<div class="box">

<div class="sectionTitle">Delivery Details</div>

<label>Customer Name</label>
<input type="text" id="custName" placeholder="Enter customer name">

<div class="two-col">
<div>
<label>Phone Number</label>
<input type="text" id="custPhone" placeholder="10 digit mobile number" maxlength="10">
</div>

<div>
<label>Delivery Pincode</label>
<input type="text" id="pincode" placeholder="6 digit pincode">
</div>
</div>

<label>Delivery Address</label>
<input type="text" id="custAddress" placeholder="House no, street, area, city">

<div class="two-col">
<div>
<label>Membership</label>
<select id="membership">
<option value="none">No Membership</option>
<option value="prime">Prime Member (10% off)</option>
<option value="prime_plus">Prime Plus (25% off)</option>
</select>
</div>

<div>
<label>Payment Mode</label>
<select id="payMode" onchange="toggleUpiOptions()">
<option>Cash on Delivery</option>
<option>UPI</option>
<option>Debit/Credit Card</option>
<option>Wallet</option>
</select>
</div>
</div>

<div id="upiBox" style="display:none;">
<label>Pay Using</label>
<select id="upiApp" onchange="toggleUpiId()">
<option value="Google Pay">Google Pay</option>
<option value="PhonePe">PhonePe</option>
<option value="Paytm">Paytm</option>
<option value="BHIM UPI">BHIM UPI</option>
<option value="Amazon Pay UPI">Amazon Pay UPI</option>
<option value="other">Enter UPI ID manually</option>
</select>

<input type="text" id="upiId" placeholder="yourname@okbank" style="display:none;">
</div>

<label>Promo Code</label>
<input type="text" id="promo" placeholder="e.g. SAVE50">

<hr style="margin:15px 0;border:none;border-top:1px solid #ddd;">

<div class="sectionTitle">Your Cart</div>

<label>Add Item to Cart</label>
<div class="add-row">
<input type="text" id="itemName" placeholder="Item name">
<input type="number" id="itemPrice" placeholder="Price">
<input type="number" id="itemQty" placeholder="Qty" value="1">
<button id="addBtn" onclick="addItem()">Add</button>
</div>

<table>
<thead>
<tr>
<th>Item</th>
<th>Price</th>
<th>Qty</th>
<th>Amount</th>
<th></th>
</tr>
</thead>
<tbody id="cartBody"></tbody>
</table>

<div class="sectionTitle">Price Details</div>

<div class="summary">

<div class="line">
<span>Items in cart</span>
<span id="totalItems">0</span>
</div>

<div class="line">
<span>Cart Value</span>
<span>Rs. <span id="cartValue">0.00</span></span>
</div>

<div class="line">
<span>Delivery Charge</span>
<span>Rs. <span id="deliveryCharge">90.00</span></span>
</div>

<div class="line">
<span>GST (18%)</span>
<span>Rs. <span id="taxAmt">0.00</span></span>
</div>

<div class="line">
<span>Membership Discount</span>
<span>- Rs. <span id="memberDisc">0.00</span></span>
</div>

<div class="line">
<span>Promo Discount</span>
<span>- Rs. <span id="promoDisc">0.00</span></span>
</div>

<div class="line grand">
<span>Payable Amount</span>
<span>Rs. <span id="finalAmt">0.00</span></span>
</div>

<p class="note" id="freeDelNote"></p>

</div>

<div class="btnrow">
<button id="billBtn" onclick="makeReceipt()">Generate Bill</button>
<button id="printBtn" onclick="printReceipt()">Print</button>
<button id="resetBtn" onclick="resetAll()">Reset</button>
</div>

<div class="receipt" id="receiptBox"></div>

</div>
</div>

<script src="shop-billing.js"></script>
<div class="footer">
    <strong>Designed By:</strong><br>
    Ananya Marghade<br>
    PRN: 24070521004<br>
    Batch A1
</div>
</body>
</html>

```


### Billing Logic — `shop-billing.js`
Implements cart operations (add/remove item), running price calculations (delivery charge, 18% GST, membership discount, promo-code discount), receipt generation, printing, and a full form reset — using `var` and `let` declarations, `forEach` loops, conditional (`if-else`) control structures, and array methods (`push`, `splice`).

#### `2 To build a billing calculator with user input./shop-billing.js`
```js
var cart = [];

document.getElementById("orderNo").innerHTML =
    "QC" + Math.floor(Math.random() * 90000 + 10000);

document.getElementById("orderDate").innerHTML =
    new Date().toLocaleString();

function addItem() {

    let name = document.getElementById("itemName").value.trim();
    let price = Number(document.getElementById("itemPrice").value);
    let qty = Number(document.getElementById("itemQty").value);

    if (name === "" || price <= 0 || qty <= 0) {
        alert("Please fill item name, price and quantity correctly");
        return;
    }

    cart.push({
        name: name,
        price: price,
        qty: qty,
        amount: price * qty
    });

    renderCart();

    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQty").value = "1";
}

function toggleUpiOptions() {

    let mode = document.getElementById("payMode").value;
    let box = document.getElementById("upiBox");

    if (mode === "UPI") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

function toggleUpiId() {

    let app = document.getElementById("upiApp").value;
    let idField = document.getElementById("upiId");

    if (app === "other") {
        idField.style.display = "block";
    } else {
        idField.style.display = "none";
    }
}

function renderCart() {

    let html = "";

    cart.forEach(function (item, i) {
        html += "<tr>" +
            "<td>" + item.name + "</td>" +
            "<td>Rs. " + item.price + "</td>" +
            "<td>" + item.qty + "</td>" +
            "<td>Rs. " + item.amount.toFixed(2) + "</td>" +
            "<td><button class='delBtn' onclick='removeItem(" + i + ")'>Remove</button></td>" +
            "</tr>";
    });

    document.getElementById("cartBody").innerHTML = html;

    calculate();
}

function removeItem(i) {
    cart.splice(i, 1);
    renderCart();
}

function calculate() {

    let cartValue = 0;
    cart.forEach(function (item) {
        cartValue += item.amount;
    });

    let delivery = 0;
    if (cartValue > 0 && cartValue < 500) {
        delivery = 49;
    }

    let tax = cartValue * 0.18;

    let membership = document.getElementById("membership").value;
    let memberDisc = 0;

    if (membership === "prime") {
        memberDisc = cartValue * 0.10;
        delivery = delivery*0.10;
    } else if (membership === "prime_plus") {
        memberDisc = cartValue * 0.25;
        delivery = 0;
    }

    let promo = document.getElementById("promo").value.trim().toUpperCase();
    let promoDisc = 0;

    if (promo === "SAVE50" && cartValue >= 300) {
        promoDisc = 50;
    } else if (promo === "FLAT100" && cartValue >= 1000) {
        promoDisc = 100;
    } else if (promo === "WELCOME10") {
        promoDisc = cartValue * 0.10;
    }
    else if (promo === "NEW26") {
        promoDisc = cartValue * 0.20;
    }

    let finalAmt = cartValue + delivery + tax - memberDisc - promoDisc;

    if (finalAmt < 0) finalAmt = 0;

    document.getElementById("totalItems").innerHTML = cart.length;
    document.getElementById("cartValue").innerHTML = cartValue.toFixed(2);
    document.getElementById("deliveryCharge").innerHTML = delivery.toFixed(2);
    document.getElementById("taxAmt").innerHTML = tax.toFixed(2);
    document.getElementById("memberDisc").innerHTML = memberDisc.toFixed(2);
    document.getElementById("promoDisc").innerHTML = promoDisc.toFixed(2);
    document.getElementById("finalAmt").innerHTML = finalAmt.toFixed(2);

    let note = document.getElementById("freeDelNote");
    if (cartValue > 0 && cartValue < 500 && membership !== "prime_plus") {
        note.innerHTML = "Add items worth Rs. " + (500 - cartValue).toFixed(2) + " more for free delivery";
    } else {
        note.innerHTML = "";
    }
}

function makeReceipt() {

    let name = document.getElementById("custName").value.trim();
    let phone = document.getElementById("custPhone").value.trim();
    let address = document.getElementById("custAddress").value.trim();

    if (name === "") {
        alert("Please enter customer name");
        return;
    }

    if (phone.length !== 10) {
        alert("Please enter a valid 10 digit phone number");
        return;
    }

    if (address === "") {
        alert("Please enter delivery address");
        return;
    }

    if (cart.length === 0) {
        alert("Cart is empty, add some items first");
        return;
    }

    let payMode = document.getElementById("payMode").value;
    let payDetail = payMode;

    if (payMode === "UPI") {
        let upiApp = document.getElementById("upiApp").value;
        if (upiApp === "other") {
            payDetail = "UPI - " + (document.getElementById("upiId").value.trim() || "not provided");
        } else {
            payDetail = "UPI - " + upiApp;
        }
    }

    let rows = "";
    cart.forEach(function (item) {
        rows += "<tr>" +
            "<td>" + item.name + "</td>" +
            "<td>Rs. " + item.price + "</td>" +
            "<td>" + item.qty + "</td>" +
            "<td>Rs. " + item.amount.toFixed(2) + "</td>" +
            "</tr>";
    });

    let box = document.getElementById("receiptBox");
    box.style.display = "block";

    box.innerHTML =
        "<h2>Order Receipt</h2>" +
        "<p><b>Customer:</b> " + name + "</p>" +
        "<p><b>Phone:</b> " + phone + "</p>" +
        "<p><b>Address:</b> " + address + "</p>" +
        "<p><b>Order No:</b> " + document.getElementById("orderNo").innerHTML + "</p>" +
        "<p><b>Payment Mode:</b> " + payDetail + "</p>" +
        "<p><b>Delivery Pincode:</b> " + (document.getElementById("pincode").value || "-") + "</p>" +
        "<table border='1' width='100%' style='margin-top:10px;border-collapse:collapse;'>" +
        "<tr><th>Item</th><th>Price</th><th>Qty</th><th>Amount</th></tr>" +
        rows +
        "</table>" +
        "<p style='margin-top:10px;'>Cart Value: Rs. " + document.getElementById("cartValue").innerHTML + "</p>" +
        "<p>Delivery: Rs. " + document.getElementById("deliveryCharge").innerHTML + "</p>" +
        "<p>GST: Rs. " + document.getElementById("taxAmt").innerHTML + "</p>" +
        "<p>Discounts: Rs. " + (Number(document.getElementById("memberDisc").innerHTML) + Number(document.getElementById("promoDisc").innerHTML)).toFixed(2) + "</p>" +
        "<h3 style='margin-top:10px;'>Total Payable: Rs. " + document.getElementById("finalAmt").innerHTML + "</h3>" +
        "<p style='text-align:center;margin-top:12px;'>Thanks for shopping with us!</p>";

    alert("Bill generated successfully!");
}

function printReceipt() {

    let box = document.getElementById("receiptBox");

    if (box.innerHTML.trim() === "") {
        alert("Generate the bill first before printing");
        return;
    }

    window.print();
}

function resetAll() {

    if (!confirm("Clear the whole cart and bill?")) return;

    cart = [];

    document.getElementById("custName").value = "";
    document.getElementById("custPhone").value = "";
    document.getElementById("custAddress").value = "";
    document.getElementById("membership").selectedIndex = 0;
    document.getElementById("payMode").selectedIndex = 0;
    document.getElementById("promo").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQty").value = "1";

    document.getElementById("upiBox").style.display = "none";
    document.getElementById("upiApp").selectedIndex = 0;
    document.getElementById("upiId").value = "";
    document.getElementById("upiId").style.display = "none";

    document.getElementById("cartBody").innerHTML = "";

    let receipt = document.getElementById("receiptBox");
    receipt.style.display = "none";
    receipt.innerHTML = "";

    calculate();
}

document.getElementById("membership").addEventListener("change", calculate);
document.getElementById("promo").addEventListener("input", calculate);
```


---

## Output
- The page loads with an auto-generated **Order Number** and current **Order Date/Time**.
- User fills in delivery details (name, phone, address, pincode), selects a **Membership** tier and **Payment Mode** (selecting UPI reveals a UPI-app sub-menu).
- Items can be added to the cart via **Add**; each addition re-renders the cart table and recalculates the price summary in real time (cart value, delivery charge, 18% GST, membership discount, promo discount, and final payable amount).
- A promo code (e.g. `SAVE50`, `FLAT100`, `WELCOME10`, `NEW26`) is validated against the cart value and applies the corresponding discount.
- Clicking **Generate Bill** validates the customer name, 10-digit phone number, address, and non-empty cart, then renders a formatted receipt and shows a success alert.
- **Print** opens the browser print dialog restricted to the receipt only (via `@media print` rules); **Reset** clears the entire form and cart after a confirmation prompt.

> **Screenshot:**
> ![Billing calculator output](https://raw.githubusercontent.com/ananyamarghade/JavaScript-Lab/d58808a2be018186c55400541afeb3011fcca150/2%20To%20build%20a%20billing%20calculator%20with%20user%20input./billing%20form.png)


---

## Result / Conclusion
The practical was completed successfully. Variable declarations (`var`, `let`), array/object manipulation, conditional pricing logic, and DOM manipulation were used to build a fully interactive billing calculator that computes cart totals, taxes, delivery charges, membership and promo-code discounts, and generates a printable receipt based on live user input.
