
//Part 1: Growing Pains

//To solve this task, we'll create a program to manage plant growth in a circular area. Here's a brief overview of what we need to do:
// 1 Calculate the area of the circular garden.
// 2 Predict the plant growth after a specific number of weeks.
// 3 Decide whether to prune, monitor, or plant more plants based on the growth.

const PI = 3.1415;
const radius = 5;
const minSpacePerPlant = 0.8;
const maxCapacity = PI * radius * radius / minSpacePerPlant;

function predictPlantGrowth(weeks) {
    let plantCount = 20 * Math.pow(2, weeks);
    if (plantCount > 0.8 * maxCapacity) {
        console.log("Prune the plants.");
    } else if (plantCount >= 0.5 * maxCapacity && plantCount <= 0.8 * maxCapacity) {
        console.log("Monitor the plants.");
    } else {
        console.log("Plant more plants.");
    }
}

// Results for 1, 2, and 3 weeks of growth
predictPlantGrowth(1);
predictPlantGrowth(2);
predictPlantGrowth(3);

//--------------------------------------------------------

//Part 2: Thinking Bigger

//Now, let's expand our logic to determine the additional space required and the radius of the expanded garden if we start with 100 plants and don't prune them for 10 weeks.


const initialPlantCount = 100;
const weeksToGrow = 10;
const finalPlantCount = initialPlantCount * Math.pow(2, weeksToGrow);
const additionalSpaceRequired = (finalPlantCount * minSpacePerPlant) - (PI * radius * radius);

console.log("Additional space required:", additionalSpaceRequired);

// Calculate the radius of the expanded garden
const newRadius = Math.sqrt((additionalSpaceRequired + (PI * radius * radius)) / PI);
console.log("Radius of the expanded garden:", newRadius);

//--------------------------------------------------------

//Part 3: Errors in Judgement

// In case the scientists ignore our recommendations and start with 100 plants without pruning, we'll handle potential errors using try and catch blocks to ensure we don't exceed the available space in the garden. If the space required exceeds the available space, we'll log an appropriate error message.

try {
    const initialPlantCount = 100;
    const weeksToGrow = 10;
    const finalPlantCount = initialPlantCount * Math.pow(2, weeksToGrow);
    const spaceRequired = finalPlantCount * minSpacePerPlant;
    
    if (spaceRequired > PI * radius * radius) {
        throw new Error("Not enough space to accommodate the plants.");
    }
    
    console.log("No errors. Plants can be accommodated.");
} catch (error) {
    console.error(error.message);
}

