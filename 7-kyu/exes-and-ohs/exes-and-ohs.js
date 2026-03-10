function XO(str) {
​
  str = str.toLowerCase()
  
  let xCounter = 0
  let oCounter = 0
  
  for (let i = 0; i < str.length; i++){
    if(str[i] === 'x'){
      xCounter ++;
    }
    else if(str[i] === 'o'){
      oCounter ++;
    }
  }
​
  return xCounter === oCounter;
}
​
/* 
​
P: takes in a string
R: return a boolean (case insensitive)
E: XO("ooxx") => true
   XO("xooxx") => false
   XO("ooxXm") => true
   XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
   XO("zzoo") => false
P: 
- we are counting both 'x' and 'o' in a string
- we should declare both x and X, or just use toLower() at some point
- return true when neither present (or equal amount, so zero
- for loop?
​
*/