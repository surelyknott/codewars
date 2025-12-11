function longest(s1, s2){
  let c = s1 + s2;
  let s = new Set (c);
  let arr = Array.from(s);
  arr.sort();
  return arr.join('')
}