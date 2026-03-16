function findShort(s){
  return s
  .split(' ')
  .reduce((shortest, word) => Math.min(shortest, word.length), Infinity)
}