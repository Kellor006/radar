function getValue() 
{
    // make sure block is invisible
    document.getElementById("alertBlock").classList.add("invisible");
    // get user string for the page
    let userString = document.getElementById("userString").value;

    //check for palindrome
    let returnObj = checkForPalindrome(userString);

    //display 
    displayString(returnObj);
}

// palindrome logic
function checkForPalindrome(userString)
{
    userString = userString.toLowerCase();

    //remove spaces and special characters
    //anything between a-z lower case and 0-9
    let regex = /[^a-z0-9]/gi;
    //it will only return a-z 0-9 and anything thats not in this match remove.
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    //due to array starting at [0] we -1 to get to the correct character number in the array 
    // if userString = h[0]i[1] but chararacter numbers would be [1][2] to have it correct in array -1 == [1][0]
    for (let i = userString.length - 1; i >= 0; i--) 
    {
        revString += userString[i];
    }

    if (revString == userString) 
    {
        returnObj.msg = "Well Done! You got yourself a palindrome!"
    } 
    else
    {
        returnObj.msg = "Unlucky, not a palindrome"
    }

    returnObj.reversed = revString;

    return returnObj;
}


function displayString(returnObj) 
{
    //write to the page
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    //turn alert box on (from invisible)
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alertBlock").classList.remove("invisible");
}