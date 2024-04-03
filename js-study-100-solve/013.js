// No.13 구구단

/*
2 ~ 9단으로 구성된 구구단을 출력하는 함수를 구현한다.
*/

const printMultiplicationTable = () => {
  let res = "";

  for (let i = 2; i <= 9; i++) {
    res += `=== ${i}단 ===\n`;
    for (let j = 1; j <= 9; j++) {
      res += `${i} * ${j} = ${i * j}\n`;
    }
  }

  return res;
};

console.log(printMultiplicationTable());
