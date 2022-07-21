//Create the Controller Function

//Declare a new function that calls the built-in getValues function the numbers
function getValues(){

    /* Within the scope-block of the function create a variable of messge that is defined as the value of the document-element possessing the id of "message"*/
    let message = document.getElementById("message").value;
        
    /* Within the scope-block of the function create a variable of "reversedMessage" that is defined as the value of the called function "reverse" and the value of the pass-through variable "message"*/
    let reversedMessage = reverse(message);

    /*Call the function "displayMessage", which has the the vaalue of the pass-through variable "reversedMessage"*/
    displayReversed(reversedMessage);        
}



//Create the Business Logic

/*Declare a new function which calls the "reverse" function and possesses the parameter of message*/
function reverse(message){

    //Note a string is array of characters

    /*Create a variable of "textString" which is defined as a text string*/
    let reversedString = "";

    //Create a for-loop where we  create a variable of index which is defined as the value of the length of the variable "message" minus 1. As long as the index is greater to or equal than 0 subtract one from the value of index. This is a decrementing for-loop*/
    for (let index = message.length-1; index >= 0; index--){

        /*The value of variable "index" within the variable message accumulates the value of the variable "textString"*/
        reversedString += message[index];
    
    }

    //Return the vaule for numbers
    return reversedString;
}


//Create the View Function

/*Declare a function which calls the built in displayNumbers function and possesses the parameter of numbersArray.*/
function displayReversed(reversedMessage){

    /*Create a variable of results which is defined as teh value of the document elemetn possessing the Id of "results*/
    let results = document.getElementById("results");

    /*Add the value of "revMessage" to the class of the results message*/
    results.classList.add("revMessage");

    /*The inner HTML of the results variable is defined as the value of the variable "reversedMessage"*/
    results.innerHTML = reversedMessage;
}

//ExtraCredit Use Tables