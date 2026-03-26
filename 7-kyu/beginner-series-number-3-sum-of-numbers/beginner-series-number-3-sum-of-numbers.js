function getSum(a, b){
  
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  
  let total = 0
   
   for (let i = min; i <= max; i++) { 
     total += i;
   }
  return total;
}
​
/*
​
P - two integers (positive or negative)
R - return the sum of all integers between, and including them
​
E: 
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
​
P: 
- first we order a and b
- could set a as start of counter 
- figure out difference between the two numbers (maybe unneccessary in a loop)
- then loop through to end and add as you go
​
*/