function sortString(str) {
    let array = str.split('')
    array.sort((letter1, letter2) => {
      if (letter1 < letter2) { return -1 }
      if (letter1 > letter2) { return 1 }
      return 0
    })
    return array.join('')
  }

  console.log(sortString('dcba'))