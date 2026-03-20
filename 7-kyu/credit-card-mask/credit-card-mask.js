function maskify(cc) {
  if (cc.length <= 4) return cc
​
  let arr = cc.split('')
​
  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = '#'
  }
​
  return arr.join('')
}
​
/*
​
function maskify(cc) {
  if (cc.length <= 4) {
    return cc
  }
​
  return '#'.repeat(cc.length - 4) + cc.slice(-4)
}
​
*/