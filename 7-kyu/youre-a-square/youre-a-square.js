function isSquare(n){
  if (n < 0) return false;
  let squareRoot = Math.sqrt(n);
  return Number.isInteger(squareRoot);
}