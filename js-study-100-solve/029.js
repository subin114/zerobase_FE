// No.29 원소들의 곱과 합

/*
정수가 담긴 리스트 nums가 주어질 때,
모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
*/

const solution = nums => {
  let mul = nums.reduce((acc, i) => acc * i, 1)
  let sum = nums.reduce((acc, i) => acc + i, 0)

  return mul < Math.pow(sum, 2) ? 1 : 0
}

console.log(solution([3, 4, 5, 2, 1])) // 1
console.log(solution([5, 7, 8, 3])) // 0
