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
