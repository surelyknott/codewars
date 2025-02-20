const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= fuelLeft * mpg;
​
// Test the function
console.log(zeroFuel(50, 25, 2)); // Expected output: true