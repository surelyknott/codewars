function abbrevName(name){
  const words = name.split(" ");  
  
  const first = words[0][0].toUpperCase(); 
  const second = words[1][0].toUpperCase(); 
  
  return first + "." + second;
}
​
/*
​
function abbrevName(name){
  return name
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join(".");
}
​
*/