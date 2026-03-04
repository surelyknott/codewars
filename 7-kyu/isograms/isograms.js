function isIsogram(str){
  str = str.toLowerCase()
  const seen = []
  for (let i = 0; i < str.length; i++) {
      const letter = str[i]
      if (seen.includes(letter)) {
          return false
      }
      seen.push(letter)
  }
  return true
}