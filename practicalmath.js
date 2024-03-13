//Description
//This program sets up functions to calculate the fuel needed for the entire trip, check if the budget is enough to cover the fuel expense, calculate the time taken for the trip, and compares the results for traveling at different speeds. Finally, it logs the results using string concatenation or template literals.

// Constants
const totalDistance = 1500; // miles
const fuelEfficiencies = {
    55: 30, // miles per gallon
    60: 28, // miles per gallon
    75: 23  // miles per gallon
};
const fuelBudget = 175; // dollars
const costPerGallon = 3; // dollars
const hoursPerDay = 24; // hours

// Function to calculate fuel needed for the entire trip
function calculateFuelNeeded(speed) {
    return totalDistance / fuelEfficiencies[speed];
}

// Function to check if the budget is enough to cover the fuel expense
function isBudgetEnough(fuelNeeded) {
    return fuelNeeded * costPerGallon <= fuelBudget;
}

// Function to calculate the time taken for the trip
function calculateTripTime(speed) {
    return totalDistance / speed;
}

// Function to compare results for different speeds
function compareResults(speed) {
    const fuelNeeded = calculateFuelNeeded(speed);
    const tripTime = calculateTripTime(speed);

    console.log(`At ${speed} miles per hour:`);
    console.log(`Fuel needed: ${fuelNeeded.toFixed(2)} gallons`);
    console.log(`Trip time: ${tripTime.toFixed(2)} hours`);
    console.log(`Budget enough: ${isBudgetEnough(fuelNeeded) ? "Yes" : "No"}`);
}

// Compare results for traveling at different speeds
compareResults(55);
compareResults(60);
compareResults(75);
