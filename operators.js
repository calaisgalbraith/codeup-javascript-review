var sample = "Hello Codeup";


// Use .length to find the number of characters in the string.
console.log("Length: " + sample.length);

// Try to make the sample string all upper or all lower case.
sample.toUpperCase();
console.log(sample);

// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample = sample + " Students";
console.log(sample);

//Replace "Students" with "Class".
sample = "Hello Codeup Class";
console.log(sample);

//Find the index of "c" using .indexOf(). What do you observe?
console.log("Index of c: " + sample.indexOf("c"));

//Find the index of "C" using .indexOf().
console.log("Index of C: " + sample.indexOf("C"));

//Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
console.log(sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1));

//--------------

//You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

let brotherBear = 5;
let mermaid = 3;
let hercules = 1;

let total = 2 * (brotherBear + mermaid + hercules);


//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon.

let google = 400;
let amazon = 380;
let facebook = 350;

let payment = (google * 6) + (amazon * 4) + (facebook * 10);


//A student can be enrolled in a class only if the class is not full and the
// class schedule does not conflict with her current schedule.
let classFull;
let conflict ;
let canEnroll;

if(!classFull && !conflict){
    canEnroll = true;
}
else{
    canEnroll = false;
}

//A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific amount of products.

let items;
let expired;
let isPremium;
let offer;

if(!expired){
    if(!isPremium && items > 2){
        offer = "Can Apply"
    }
    else if(isPremium){
        offer = "Can Apply";
    }
    else{
        offer = "Cannot Apply";
    }
}
else{
    offer = "Cannot Apply";
}

//------------

var username = 'codeup';
var password = 'notastrongpassword';

// Create a variable that holds a boolean value for each of the following conditions:
    // the password must be at least 5 characters
    // the password must not include the username
    // the username must be no more than 20 characters
    // neither the username or password can start or end with whitespace

let passwordCharacter = password.length >= 5;
let passwordUsername = password.includes(username);
let usernameCharacter = username.length > 20;
let whiteSpace = (username.trim() === username) && (password.trim() === password);