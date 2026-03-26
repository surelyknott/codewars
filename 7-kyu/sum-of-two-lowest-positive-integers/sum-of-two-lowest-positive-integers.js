function sumTwoSmallestNumbers(numbers) {  
  
  function compareNumbers(a, b) {
    return a - b;
  }
  
  const sorted = numbers.sort(compareNumbers);
  
  return sorted[0] + sorted[1];
}
​
/*
​
P - An array of numbers is passed as a parameter.
R - Return the sum of the two lowest positive numbers.
E - [19, 5, 42, 2, 77] > 7. No floats or non-positive integers will be passed.
P: 
- initial thoughts: sort()?
- needed a compareNumbers function which showed how to sort (how to simplify?)
- then take elements 0 and 1 and add?
- then return the added value 
​
*/
​
​