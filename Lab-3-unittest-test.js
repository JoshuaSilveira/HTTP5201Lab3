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

test__checkHumberId("n12345678", true); //test to pass
test__checkHumberId("n0123", false); //test to fail
test__checkHumberId("x", false); //test to fail with known failing value
test__checkHumberId(undefined, false); //''
test__checkHumberId("N1234567", false); //boundry test
test__checkHumberId("N12345678", true); //boundry test
test__checkHumberId("N123456789", false); //boundry test
test__checkHumberId("N12345678", true);

