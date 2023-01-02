// while

// while문은 주어진 조건식의 평가 견과가 참이면 코드 블록을 계속해서 반복 실행한다.
// for : 반복 횟수가 명확할 때, while : 반복 횟수가 불명확할 때

// 1. while
let count = 0;

// (1) count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count); // 0, 1, 2
  count++;
}

// (2) 조건식의 평가 결과가 언제나 참이면 무한 루프가 된다.
// while(true){console.log('test')} // infinite loop

// (2-1) 무한 루프에서  탈출하기 위해서는 코드 블록 내에 if문으로 탈출 조건을 만들고 break 문으로 코드 블록을 탈출하면 된다.
while (true) {
  console.log(count);
  count++;
  if (count === 3) break;
} // 0, 1, 2

// 2. do... while 문
