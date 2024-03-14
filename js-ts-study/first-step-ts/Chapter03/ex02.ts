// 02. 타입 추론

/*
- 개발자가 수동으로 명시해야 하는 타입 구문의 수를 줄일 수 있음
- 코드의 전체적인 안전성이 향상됨
- 어떤 변수에 타입이 다른 값을 재할당하기보다는, 별도의 변수를 사용하는 것이 더 바람직함
*/

let x = 12;

const y = 12; // const는 값이 변경되지 않기 때문에 12로 추론됨 (= 리터럴 타입)

let student = {
  name: "김개발",
  age: 15,
  score: {
    국어: 100,
    영어: 80,
    수학: 90,
  },
};

const parseNumber = (a = 10) => {
  // return 값이 없기 때문에 void로 추론됨
  console.log(a + 5);
};

parseNumber(); // 2를 넣어주면 결과는 7, 아무것도 안넣어주면 결과는 15
