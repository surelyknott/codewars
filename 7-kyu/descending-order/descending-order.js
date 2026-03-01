function descendingOrder(n){
  const splitNums = String(n).split('') 
  function numsDescending (a, b) { 
    return b - a
  }
  return Number(splitNums.sort(numsDescending).join(''));
}