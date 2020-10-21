const hello_world = () => {
  return 'Hello World'
}

const sum_all_primes = (num) => {
  let total = 0
  const checkForPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i
    }
  }
  return total
}

const seek_and_destroy = (arr, targets) => {
  let survivors = []
  arr.map((v) => {
    if (!targets.includes(v)) {
      survivors.push(v)
    }
  })
  return survivors
}

const sort_by_height1 = (a) => {
  let trees = []
  let ppl = []
  for (let i = 0; i < a.length; i++) {
    a[i] === -1 ? trees.push(i) : ppl.push(a[i])
  }
  ppl.sort()
  ppl.reverse()
  let order = []
  for (let i = 0; i < a.length; i++) {
    trees.includes(i) ? (order[i] = -1) : (order[i] = ppl.pop())
  }
  return order
}

const sort_by_height2 = (a) => {
  const arr1 = []
  const arr2 = []
  a.forEach((val, i) => {
    val === -1 ? arr1.push(i) : arr2.push(val)
  })
  const sortArr = arr2.sort((a, b) => a - b)
  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))
  return sortArr
}

console.log(sort_by_height1([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(sort_by_height2([-1, 150, 190, 170, -1, -1, 160, 180]))
