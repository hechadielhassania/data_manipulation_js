// Declare a variable called num
let num = 10;

// Write a conditional statement that checks if the num is positive or negative
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Change the value of the variable
num = -5;

// Run the conditional again
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Conditional for granting access based on age
let age = 20;
if (age >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//Output an increasing number of # symbols, from 1 to 7

for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}

//without using the repeat function
for (let i = 1; i <= 7; i++) {
    let hash = '';
    for (let j = 0; j < i; j++) {
        hash += '#';
    }
    console.log(hash);
}