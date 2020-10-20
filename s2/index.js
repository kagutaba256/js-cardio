const hello_world = () => {
  return 'Hello World'
}

const longestWord = (sen) => {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
  const sorted = wordArr.sort((a, b) => b.length - a.length)
  return sorted.filter((word) => word.length === sorted[0].length)
}

const chunk_array1 = (arr, len) => {
  let chunks = []
  let i = 0
  let chunk = []
  arr.map((x) => {
    chunk.push(x)
    i++
    if (i === len) {
      i = 0
      chunks.push(chunk)
      chunk = []
    }
  })
  if (i > 0) {
    chunks.push(chunk)
  }
  return chunks
}

const chunk_array2 = (arr, len) => {
  const chunkedArr = []
  let i = 0
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len))
    i += len
  }
  return chunkedArr
}

const chunk_array3 = (arr, len) => {
  const chunkedArr = []
  arr.forEach((val) => {
    const last = chunkedArr[chunkedArr.length - 1]
    if (!last || last.length === len) {
      chunkedArr.push([val])
    } else {
      last.push(val)
    }
  })
  return chunkedArr
}

const flatten_array1 = (arrays) => {
  let a = []
  arrays.map((array) => {
    array.map((x) => {
      a.push(x)
    })
  })
  return a
}

const flatten_array2 = (arrays) => {
  return arrays.reduce((acc, array) => {
    return acc.concat(array)
  })
}

const flatten_array3 = (arrays) => {
  return [].concat.apply([], arrays)
}

const flatten_array4 = (arrays) => {
  return [].concat(...arrays)
}

const anagram1 = (s1, s2) => {
  const prep_string = (str) => {
    return str
      .trim()
      .toLowerCase()
      .match(/[a-z0-9]+/g)
      .join('')
      .split('')
  }
  let s1_a = prep_string(s1)
  let s2_a = prep_string(s2)
  if (s1_a.length != s2_a.length) {
    return false
  }
  s1_map = {}
  s2_map = {}
  s1_a.map((c) => {
    s1_map[c] ? s1_map[c]++ : (s1_map[c] = 1)
  })
  s2_a.map((c) => {
    s2_map[c] ? s2_map[c]++ : (s2_map[c] = 1)
  })
  for (let k in s1_map) {
    if (s1_map[k] != s2_map[k]) {
      return false
    }
  }
  return true
}

console.log(anagram1('Dormitory', 'dirty room'))
