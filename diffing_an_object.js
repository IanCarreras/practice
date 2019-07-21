newCommit = {
    apples: 3, 
    oranges: 4
}

oldCommit = {
    apples: 3, 
    grapes: 5
}

function diff(newCode, oldCode) {
    let diff = []
    let oldEntries = Object.entries(oldCode)
    let newEntries = Object.entries(newCode)
    
    oldEntries.forEach(entry => {
      if(!newCode.hasOwnProperty(entry[0])) {
        entry.unshift('-')
        diff.push(entry)
      }  
    })
  
    newEntries.forEach(entry => {
      if(!oldCode.hasOwnProperty(entry[0])) {
        entry.unshift('+')
        diff.push(entry)
      } 
    })
    return diff
}

console.log( diff(newCommit, oldCommit))

//returns: 
// [
//     ['-', 'grapes', 5],
//     ['+', 'oranges',4]
// ]