newCommit = {
    apples: 3, 
    oranges: 4
}

oldCommit = {
    apples: 3, 
    grapes: 5
}

function diff(newCode, oldCode) {
    return Object.entries(newCode)
}

console.log( diff(newCommit, oldCommit))

//returns: 
// [
//     ['-', 'grapes', 5],
//     ['+', 'oranges',4]
// ]