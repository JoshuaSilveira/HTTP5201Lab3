//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.

function test__checkHumberId(valueIn, expected) {
    "use strict";

    let result = checkHumbrId(valueIn);
    let passOrFail;
    if(result === expected) {
        passOrFail = "pass";
    }
    else passOrFail = "fail";

    let resultMessage;
    if(passOrFail === "pass")
    {
        resultMessage = "--PASSED--";
    }
    else resultMessage = "xxFAILEDxx";

    let message = "Value: " + valueIn + " | Expected: " +  expected + " | Result: <strong>" + result + "<span class=\"" + passOrFail + "\"> " + resultMessage + "</span></strong><br />";
    document.getElementById("data").innerHTML += message;   
}

///(n|N)\d{8}/

