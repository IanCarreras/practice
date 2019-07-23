// write a program that prints the numbers from 1 to 100. But for multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'
// for numbers which are multiples of boh three and five print 'FizzBuzz'

function fizzbuzz() {
  for(let i=1; i<=100; i++) {
    if(i%3 == 0 && i%5 == 0) console.log('fizzbuzz')
    else if(i%3 == 0) console.log('fizz')
    else if(i%5 == 0) console.log('buzz')
    else console.log(i)
  }
}
  
  
console.log(fizzbuzz())

// function fizzbuzz() {
//   for(let i=0; i<100;)
//     console.log((++i % 3 ? '':'fizz') + (i%5 ? '':'buzz') ||i)
// }