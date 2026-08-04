# Experiment No. 4
**Student Name:** Ananya Marghade
**PRN:** 24070521004
**File Path:** `4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/palindrome.html` | `4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/palindrome.js` | `4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/vehicleregistration.html` | `4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/vehicleregistration.js`

---

## Experiment Title
Use Function Types, Scope, and Closures; Apply try-catch to Build a Palindrome Checker

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Experiment Program Code

### Palindrome Checker — `palindrome.html`

#### `4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/palindrome.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Palindrome Checker</title>

    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family: Arial, sans-serif;
        }

        body{
            background: linear-gradient(to right,#dbeafe,#f8fbff);
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:100vh;
        }

        .container{
            width:370px;
            background:white;
            padding:30px;
            border-radius:12px;
            box-shadow:0 8px 18px rgba(0,0,0,0.15);
            text-align:center;
            border-top:6px solid #3b82f6;
        }

        h2{
            color:#2563eb;
            margin-bottom:20px;
        }

        label{
            display:block;
            text-align:left;
            margin-bottom:8px;
            color:#444;
            font-weight:bold;
        }

        input[type="text"]{
            width:100%;
            padding:10px;
            border:1px solid #bfbfbf;
            border-radius:8px;
            margin-bottom:20px;
            font-size:15px;
            outline:none;
        }

        input[type="text"]:focus{
            border-color:#3b82f6;
        }

        input[type="button"]{
            width:100%;
            padding:11px;
            background:#2563eb;
            color:white;
            border:none;
            border-radius:8px;
            cursor:pointer;
            font-size:15px;
            transition:0.3s;
        }

        input[type="button"]:hover{
            background:#1d4ed8;
            transform:scale(1.02);
        }

        #result{
            margin-top:20px;
            padding:15px;
            border-radius:8px;
            border:1px solid #ddd;
            background:#f8f9fa;
            text-align:left;
            line-height:1.8;
            display:none;
        }

        .success{
            background:#e8f8ec;
            border-left:5px solid #025202;
            color: #000000;
        }

        .error{
            background:#fdeaea;
            border-left:5px solid red;
            color:red;
        }
        .footer-block {
            margin-top: 28px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
            line-height: 1.4;
            }

            .footer-block p {
            margin: 0;
            }
    </style>
</head>

<body>

<div class="container">

    <h2>Palindrome Checker</h2>
    <label>Enter a String</label>
    <input type="text" id="word" placeholder="Example: madam">

    <input type="button" value="Check Palindrome" onclick="checkPalindrome()">

    <p id="result"></p>

</div>
<script src="palindrome.js"></script>
<div class="footer-block">
    <p>Designed By</p>
    <p class="footer-name">Ananya Marghade</p>
    <p>PRN 24070521004</p>
    <p>Batch A1</p>
  </div>
</body>
</html>

```


### Palindrome Logic — `palindrome.js`
Demonstrates a **named function** (`reverseString`), a **closure** (`message()` returns an inner `display()` function that still has access to the outer `msg` variable), and **try-catch** error handling for input validation (empty input, non-alphanumeric characters, length limits, spaces).

#### `4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/palindrome.js`
```js
function reverseString(str){
    return str.split("").reverse().join("");
}

function message(){
    var msg = "Palindrome Checker";
    function display(){
        return msg;
    }
    return display;
}

function palindromeType(str){
    if(str.length % 2 == 0){
        return "Even Palindrome";
    }
    else{
        return "Odd Palindrome";
    }
}

function checkPalindrome(){

    try{

        var word = document.getElementById("word").value.trim();

        if(word==""){
            throw "Please enter a string.";
        }

        if(!/^[A-Za-z0-9]+$/.test(word)){
            throw "Only alphabets and digits are allowed!";
        }

        if(word.length<3){
            throw "Please enter at least 3 characters.";
        }

        if(word.length>30){
            throw "Maximum 30 characters allowed.";
        }
        if(word.includes(" ")){
            throw "Spaces are not allowed!";
        }
        let input = word.toLowerCase();
        let reverse = reverseString(input);

        let result = document.getElementById("result");

        result.style.display="block";

        if(input==reverse){

            result.className="success";
            result.innerHTML =
            "<h3>" + message()() + "</h3>" +
            "<b>Result :</b> <span style='color: #025202;font-weight:bold;'>PALINDROME</span><br>" +
            "<b>Type :</b> " + palindromeType(input);
        }

        else{
            result.innerHTML =
            "<h3>" + message()() + "</h3>" +
            "<b>Input :</b> " + word + "<br>" +
            "<b>Reverse :</b> " + reverse + "<br>" +
            "<b>Result :</b> <span style='color:red;font-weight:bold;'>NOT A PALINDROME</span>";

        }

    }

    catch(error){
        alert(error);
    }

}

```


---

## Output (Palindrome Checker)
- User enters a string (e.g. "madam") and clicks **Check Palindrome**.
- The `try` block validates the input: rejects empty input, non-alphanumeric characters, strings shorter than 3 or longer than 30 characters, and spaces — each violation is `throw`n as an error and caught in the `catch` block, which displays it via `alert()`.
- On valid input, the string is reversed and compared (case-insensitively) to the original.
- If it matches, a green **PALINDROME** result is shown along with its type (**Odd/Even Palindrome**, based on string length); otherwise, a red **NOT A PALINDROME** result is shown along with the reversed string.
- The heading "Palindrome Checker" inside the result box is generated using the **closure** returned by `message()`.

> **Screenshot:**
> ![Palindrome checker - empty state](https://raw.githubusercontent.com/ananyamarghade/JavaScript-Lab/29a209b2ba1ab51e1a7f43f315b9e8040e3b1633/4%20Use%20function%20types%2C%20scope%2C%20and%20closures%3B%20apply%20try-catch%20to%20build%20a%20palindrome%20checker/4.1)%20Palindrome%20Checker/palindrome1.png)
> ![Palindrome checker - palindrome result](https://raw.githubusercontent.com/ananyamarghade/JavaScript-Lab/29a209b2ba1ab51e1a7f43f315b9e8040e3b1633/4%20Use%20function%20types%2C%20scope%2C%20and%20closures%3B%20apply%20try-catch%20to%20build%20a%20palindrome%20checker/4.1)%20Palindrome%20Checker/palindrome2.png)
> ![Palindrome checker - non-palindrome / error result](https://raw.githubusercontent.com/ananyamarghade/JavaScript-Lab/29a209b2ba1ab51e1a7f43f315b9e8040e3b1633/4%20Use%20function%20types%2C%20scope%2C%20and%20closures%3B%20apply%20try-catch%20to%20build%20a%20palindrome%20checker/4.1)%20Palindrome%20Checker/palindrome3.png)
---

## Case Study Title
Vehicle Registration Number Validator Using Functions and try-catch

## Case Study Program Code

### Vehicle Registration Validator — `vehicleregistration.html`

#### `4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/vehicleregistration.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Vehicle Registration Validator</title>

    <style>

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:Segoe UI, Arial, sans-serif;
        }

        body{
            min-height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg,#eaf2ff,#cfe2ff,#aecbff);
        }

        .container{
            width:420px;
            background:#ffffff;
            padding:35px;
            border-radius:18px;
            text-align:center;
            box-shadow:
            0 12px 30px rgba(0,0,0,0.10),
            0 20px 45px rgba(37,99,235,0.15);
        }

        h2{
            color:#1e3a8a;
            margin-bottom:10px;
            font-size:30px;
        }

        .info{
            color:#666;
            font-size:15px;
            margin-bottom:25px;
            padding-bottom:15px;
            border-bottom:1px solid #e5e7eb;
        }

        label{
            display:block;
            text-align:left;
            font-weight:bold;
            margin-bottom:8px;
            color:#333;
        }

        input{
            width:100%;
            padding:12px;
            font-size:17px;
            border:2px solid #d1d5db;
            border-radius:10px;
            outline:none;
            transition:0.3s;
        }

        input:focus{
            border-color:#2563eb;
            box-shadow:0 0 8px rgba(37,99,235,0.25);
        }

        button{
            width:100%;
            margin-top:20px;
            padding:12px;
            font-size:17px;
            font-weight:bold;
            color:white;
            border:none;
            border-radius:10px;
            cursor:pointer;
            background:linear-gradient(to right,#2563eb,#4f46e5);
            transition:.3s;
        }

        button:hover{
            transform:translateY(-2px);
            box-shadow:0 8px 18px rgba(37,99,235,.30);
        }

        #result{
            min-height:58px;
            margin-top:22px;
            padding:15px;
            border-radius:10px;
            display:none;
            justify-content:center;
            align-items:center;
            font-size:17px;
            font-weight:bold;
        }

        .success{
            display:flex !important;
            background:#dcfce7;
            border:2px solid #22c55e;
            color:#166534;
        }

        .error{
            display:flex !important;
            background:#fee2e2;
            border:2px solid #ef4444;
            color:#991b1b;
        }

        .example{
            margin-top:18px;
            font-size:14px;
            color:#666;
        }

        .example span{
            color:#2563eb;
            font-weight:bold;
        }
        .footer-block {
            margin-top: 28px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
            line-height: 1.4;
            }

        .footer-block p {
            margin: 0;
            }

    </style>

    <script src="vehicleregistration.js"></script>

</head>

<body>

<div class="container">

    <h2>Vehicle Registration Validator</h2>

    <p class="info">
        Validate an Indian Vehicle Registration Number
    </p>

    <label>Registration Number</label>

    <input
        type="text"
        id="text"
        placeholder="Example: MH12AB1234"
        maxlength="10">

    <button onclick="checkRegistrationNumber()">
        Validate
    </button>

    <div id="result"></div>


</div>
<div class="footer-block">
    <p>Designed By</p>
    <p class="footer-name">Ananya Marghade</p>
    <p>PRN 24070521004</p>
    <p>Batch A1</p>
</div>
</body>
</html>
```


### Validation Logic — `vehicleregistration.js`
Validates an Indian vehicle registration number (format: `SS DD LL NNNN`, e.g. `MH12AB1234`) using sequential `if` checks inside a `try` block, each `throw`ing a specific error message that is caught and shown via `alert()` along with an on-page error/success state.

#### `4 Use function types, scope, and closures; apply try-catch to build a palindrome checker/vehicleregistration.js`
```js
function checkRegistrationNumber() {

    try {
        var number = document.getElementById("text").value.trim();
        document.getElementById("text").value = number;
        if (number == "") {
            throw "Please enter the Vehicle Registration Number!";
        }

        if (number.includes(" ")) {
            throw "Spaces are not allowed in the Registration Number!";
        }

        if (number.length != 10) {
            throw "Vehicle Registration Number must be exactly 10 characters!";
        }

        if (!/^[A-Z]{2}/.test(number)) {
            throw "First 2 characters must be uppercase alphabets (State Code)!";
        }

        if (!/^[A-Z]{2}[0-9]{2}/.test(number)) {
            throw "3rd and 4th characters must be digits (District Code)!";
        }

        if (!/^[A-Z]{2}[0-9]{2}[A-Z]{2}/.test(number)) {
            throw "5th and 6th characters must be uppercase alphabets (Series)!";
        }

        if (!/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(number)) {
            throw "Last 4 characters must be digits (Vehicle Number)!";
        }

        var result = document.getElementById("result");
        result.style.display = "block";
        result.className = "success";
        result.innerHTML = "VALID Registration Number";

    }

    catch (error) {

        alert(error);

        var result = document.getElementById("result");
        result.style.display = "block";
        result.className = "error";
        result.innerHTML = "INVALID Registration Number";
    }
}
```


---

## Output (Case Study — Vehicle Registration Validator)
- User enters a registration number (e.g. `MH12AB1234`) and clicks **Validate**.
- The `try` block checks, in order: non-empty input, no spaces, exactly 10 characters, first 2 characters are uppercase letters (state code), next 2 are digits (district code), next 2 are uppercase letters (series), and the last 4 are digits (vehicle number).
- Any failed check `throw`s a descriptive error, caught by the `catch` block, which alerts the message and marks the result box red with **"INVALID Registration Number."**
- If all checks pass, the result box turns green and displays **"VALID Registration Number."**

> **Screenshot:**
> ![Vehicle registration validator - valid input](https://github.com/ananyamarghade/JavaScript-Lab/blob/e84df12bcd23d0a59e4572d99a2ce61c06d733f9/4%20Use%20function%20types%2C%20scope%2C%20and%20closures%3B%20apply%20try-catch%20to%20build%20a%20palindrome%20checker/4.2)%20Vehicle%20Registration%20Page/vehicle%20registration1.png)%20Vehicle%20Registration%20Page/vehicle%20registration1.png)
> ![Vehicle registration validator - invalid input](
https://github.com/ananyamarghade/JavaScript-Lab/blob/e84df12bcd23d0a59e4572d99a2ce61c06d733f9/4%20Use%20function%20types%2C%20scope%2C%20and%20closures%3B%20apply%20try-catch%20to%20build%20a%20palindrome%20checker/4.2)%20Vehicle%20Registration%20Page/vehicle%20registration2.png)%20Vehicle%20Registration%20Page/vehicle%20registration2.png)

---

## Result / Conclusion
The practical was completed successfully. Function types (named functions and closures), variable scope, and `try-catch` error handling were implemented in JavaScript. A Palindrome Checker (using a closure to generate its heading and structured error validation) and a Vehicle Registration Number Validator (using sequential regex-based `try-catch` validation) were developed to demonstrate robust, exception-safe handling of user input.
