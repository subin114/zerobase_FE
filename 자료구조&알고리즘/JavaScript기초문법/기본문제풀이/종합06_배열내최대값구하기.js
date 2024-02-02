/*
정수가 저장된 배열을 입력 받아 그 중 최대값을 반환해주는 함수를 구현하시오.
(* 본 문제는 Math 객체를 이용하지 않고 반복문을 통해 구현해야 한다.)
입력 값은 배열 형태로 값은 정수가 입력되며, 그 중 최대값을 반환한다.
*/

/* user code */
function answer(arr) {
  let max;

  max = Number.MIN_SAFE_INTEGER;    // 배열 내에 음수가 있어서 0으로 초기화 하면 X (max = arr[0]; 을 작성하고 let i = 1;로 변경하는 방법도 있음)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    };
  };

  /*
  만약, Math 객체를 이용해서 작성할 경우에는 아래와 같음.
  max = Math.max.apply(null, arr);
  */

  return max;
}


/* main code */
let input = [
  [1, 6, 5, 2, 3],
  [19, 41, 23, -4, 17],
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log( `#${i + 1} ${answer(input[i])}` );
}