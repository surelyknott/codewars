function countSheeps(sheep) {
​
  let startCount = 0
​
  for (let i = 0; i < sheep.length; i++){
    if(sheep[i]){
      startCount ++
      }
  }
  
  return startCount
}
​
/*
function countSheeps(sheep) {
  return sheep.filter(Boolean).length
}
This removes all falsey values, leaving only the truthy values.
*/ 