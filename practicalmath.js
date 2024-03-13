// Constants
const totalDistance = 1500; // miles
const fuelEfficiency = {
    55: 30, // miles per gallon
    60: 28, // miles per gallon
    75: 23  // miles per gallon
};
const fuelBudget = 175; // dollars
const costPerGallon = 3; // dollars

// Calculate fuel needed for the entire trip
const fuelNeeded55 = totalDistance / fuelEfficiency[55];
const fuelNeeded60 = totalDistance / fuelEfficiency[60];
const fuelNeeded75 = totalDistance / fuelEfficiency[75];

// Check if the budget is enough to cover the fuel expense
const isBudgetEnough55 = fuelNeeded55 * costPerGallon <= fuelBudget;
const isBudgetEnough60 = fuelNeeded60 * costPerGallon <= fuelBudget;
const isBudgetEnough75 = fuelNeeded75 * costPerGallon <= fuelBudget;

// Calculate the time taken for the trip
const tripTime55 = totalDistance / 55;
const tripTime60 = totalDistance / 60;
const tripTime75 = totalDistance / 75;

// Compare results for traveling at different speeds
console.log(`At 55 miles per hour:`);
console.log(`Fuel needed: ${fuelNeeded55.toFixed(2)} gallons`);
console.log(`Trip time: ${tripTime55.toFixed(2)} hours`);
console.log(`Budget enough: ${isBudgetEnough55 ? "Yes" : "No"}`);
console.log();

console.log(`At 60 miles per hour:`);
console.log(`Fuel needed: ${fuelNeeded60.toFixed(2)} gallons`);
console.log(`Trip time: ${tripTime60.toFixed(2)} hours`);
console.log(`Budget enough: ${isBudgetEnough60 ? "Yes" : "No"}`);
console.log();

console.log(`At 75 miles per hour:`);
console.log(`Fuel needed: ${fuelNeeded75.toFixed(2)} gallons`);
console.log(`Trip time: ${tripTime75.toFixed(2)} hours`);
console.log(`Budget enough: ${isBudgetEnough75 ? "Yes" : "No"}`);
