function squareDigits(num){
  
  const separate = num.toString().split('')
  
  const square = separate.map(d => {
    const n = Number(d)
    return n * n
  })                  
  
  const joined = square.join('')
  
  return Number(joined)
  
}