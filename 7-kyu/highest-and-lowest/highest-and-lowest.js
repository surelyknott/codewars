function highAndLow(numbers){
  // split string into array, then convert string values to numbers
  const a = numbers.split(" ").map(Number);
​
  // sort array numerically (highest to lowest)
  a.sort(function(a, b){
    return b - a;
  });
​
  // return highest and lowest values as a space-separated string
  return a[0] + " " + a[a.length - 1];
}
​