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
</body>
</html>
