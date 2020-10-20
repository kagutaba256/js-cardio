const hello_world = () => {
  return 'Hello World'
}

const reverse_string1 = (string) => {
  ret = ''
  for (let i = string.length - 1; i >= 0; i--) {
    ret += string[i]
  }
  return ret
}

const reverse_string2 = (string) => string.split('').reverse().join('')

const reverse_string3 = (string) => {
  ret = ''
  for (let char of string) {
    ret = char + ret
  }
  return ret
}

const reverse_string4 = (string) => {
  ret = ''
  string.split('').forEach((char) => {
    ret = char + ret
  })
  return ret
}

const reverse_string5 = (string) =>
  string.split('').reduce((r, char) => char + r)

// palindromes
const is_palindrome1 = (string) => {
  const middle = (string.length + 1) / 2
  const beginning = string.slice(0, middle)
  const end = string.slice(middle - (string.length % 2 | 0), string.length)
  return beginning === end.split('').reverse().join('')
}

const is_palindrome2 = (str) => {
  const revString = str.split('').reverse().join('')
  return revString === str
}

const reverse_int = (int) => {
  const revString = int.toString().split('').reverse().join('')
  return parseInt(revString) * Math.sign(int)
}

const capitalize_letters1 = (string) => {
  return string
    .toLowerCase()
    .split(' ')
    .reduce(
      (acc, word) => [...acc, word.charAt(0).toUpperCase() + word.slice(1)],
      []
    )
    .join(' ')
}

const capitalize_letters2 = (str) => {
  const strArr = str.toLowerCase().split(' ')
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
  }
  return strArr.join(' ')
}

const capitalize_letters3 = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

const capitalize_letters4 = (str) => {
  return str.replace(/\b[a-z]/gi, (c) => c.toUpperCase())
}

const max_character1 = (str) => {
  const charMap = {}
  str.split('').forEach((c) => {
    if (charMap[c]) {
      charMap[c]++
    } else {
      charMap[c] = 1
    }
  })
  for (let char in charMap) {
    0
  }
}

console.log(max_character1('javascript'))
