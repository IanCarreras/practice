// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

const queueTime = (arr, n) => {
  console.log(arr)
  let tilled = [] 
    
  for(let i=0; i<n; i++) {
    tilled.push(arr[i])
  }

  let count = 0

  console.log(tilled)
  console.log('count '+count)
  
  for(let i=n; i<=arr.length; i++) {
    tilled.sort((a,b) => b-a)
    console.log('sorted '+tilled)

    count += tilled[tilled.length-1]
    console.log('count '+ count)

    for(let t=0; t<tilled.length; t++) {
      tilled[t] -= tilled[tilled.length-1]
    }
    tilled.pop()
    tilled.push(arr[i])
      
    console.log('tilled '+ tilled)
  }

  return count
}
  
  //console.log(queueTime([5,3,4], 1))
  // should return 12
  // because when there is 1 till, the total time is just the sum of the times
  
  console.log(queueTime([10,2,3,3], 2))
  // should return 10
  // because here n=2 and the 2nd, 3rd, and 4th people in the 
  // queue finish before the 1st person has finished.
  
  //console.log(queueTime([2,3,10], 2))
  // should return 12
  
  //console.log( queueTime( [44, 41, 46, 26, 39, 7, 35, 17, 49, 43, 40, 7, 32, 34, 12, 18, 39, 22, 9, 28, 25, 15, 6, 3], 3 ) );
  // shoiuld return 214