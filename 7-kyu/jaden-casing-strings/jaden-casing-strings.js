/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/
​
Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
    
     const words = this.split(' ')
     
     for (let i = 0; i < words.length; i++) {
       let capitalisedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1)
       
       words[i] = capitalisedWord
     }
​
     return words.join(' ');
   }
  }
);
​
/*
​
notes: what is defineProperty? defineProperty() allows a precise addition to or modification of a property on an object
okay, so i'm creating the function toJadenCase() which capitalises the first letter of each word then returns
​
​
P string
R return the string with capitalised letters
E Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
  Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
P 
​
- how to separate each word? .split(' ')
- how to check if it's the first letter of the word? find character at index[0]? charAt(0)
- toUpperCase() on that first char at index[0]?
- put whole string back together
- return
​
*/