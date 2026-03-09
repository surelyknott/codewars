function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
​
/* 
const lovefunc = (f1, f2) => f1 % 2 !== f2 % 2 ? true : false
​
const even = e => e % 2 === 0;
const odd = o => o % 2 === 1;
​
const lovefunc = (flower1, flower2) => (even(flower1)) && (odd(flower2)) || (odd(flower1)) && (even(flower2)) ? true : false
*/
​
​