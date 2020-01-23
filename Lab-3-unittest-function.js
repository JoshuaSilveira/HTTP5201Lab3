//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

 function checkHumbrId(idIn){
     "user strict"
     let validID = false;
     if(idIn===undefined){
         return false;
     }else if(!idIn.match(/(n|N)\d{8}/)){
        return false;
     }
     
     return true;
 }

