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
