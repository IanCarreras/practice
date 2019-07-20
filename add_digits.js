//Take a number and return the sum of the digits */
const getSumOfDigits = (num) => {
    return num.toString().split('').reduce((acc, cV) => parseInt(acc,10) + parseInt(cV,10))
  }
  
  
  console.log(getSumOfDigits(42)) // 6
  console.log(getSumOfDigits(103)) // 4