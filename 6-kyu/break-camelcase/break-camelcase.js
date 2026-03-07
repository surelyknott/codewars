function solution(string) {
​
  const arr = string.split('') 
  const isUpper = letter => letter === letter.toUpperCase() 
​
  for(let i = 0; i < arr.length; i++){ 
    if(isUpper(string[i])){
    arr[i] = ' ' + string[i] 
    }
  }
​
  return arr.join('')
}