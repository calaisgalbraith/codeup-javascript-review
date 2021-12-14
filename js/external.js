"use strict";

console.log("Hello from external Javascript");

//Use the alert function to show a message that says 'Welcome to my Website!'.
alert("Welcome to my Website");

// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
// For example, if the user enters "blue", your code should alert a message that says: "Great, blue is my favorite color too!"
var favColor = prompt("What is your favorite color?");
alert("Great, " + favColor + " is my favorite color too!");

// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

let brotherBear = 5;
let mermaid = 3;
let hercules = 1;
let total = 2 * (brotherBear + mermaid + hercules);

alert("Your total is: " + total);

//-----

let google = 400;
let amazon = 380;
let facebook = 350;
let payment = (google * 6) + (amazon * 4) + (facebook * 10);

alert("Your payment is: " + payment);

//------
let classFull = confirm("Is the class full?");
let conflict = confirm("Is there a class conflict?");

if(!classFull && !conflict){
    alert("You can enroll in this class");
}
else{
    alert("You cannot enroll in this class");
}

//------
let expired = "Is the Offer expired?";

if(!expired){
    let isPremium = "Are you a Premium Member?" ;

    if(isPremium){
        alert("Offer can be applied");
    }

    else{
        let items = "How many items are you buying?";

        if(items > 2){
            alert("Offer can be applied");
        }
        else{
            alert("Offer cannot be applied");
        }
    }
}
else{
    alert("Offer cannot be applied");
}

//------
var username = prompt("Enter a username:");
var password = prompt("Enter a password");

let passwordCharacter = password.length < 5;
let passwordUsername = password.includes(username);
let usernameCharacter = username.length > 20;
let whiteSpace = (username.trim() === username) && (password.trim() === password);

if(passwordCharacter){
    alert("Password must be at least 5 characters in length");
}
else if(passwordUsername){
    alert("Password cannot contain username");
}
else if(usernameCharacter){
    alert("Username cannot exceed 20 characters in length");
}
else if(!whiteSpace){
    alert("Username and password cannot contain whitespace");
}
else{
    alert("Registration Successful");
}