function findShort(stringOfWords){ 
  
  const strToArray = stringOfWords.split(' '); 
  
  let counter = strToArray[0].length;
  
  for (let i = 0; i < strToArray.length; i++){ 
    if (strToArray[i].length <= counter){ 
      counter = strToArray[i].length;
    }
  }
  return counter;
}
​
/*
​
P - given a string of words
R - return the length of the shortest word(s)
E - dancer, sprinter, actor => actor
P - 
​
1. split words into array (done)
2. loop through or method that checks the shortest length word (done)
3. return just the length of that word (done)
4. or word(s) if shared shortest length (done)
​
*/