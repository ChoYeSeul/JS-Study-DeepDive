// 모듈은 공개가 필요한 자산에 한정하여 명시적으로 선택적 공개 가능 -> export
// 변수, 함수, 클래스 등 모든 식별자를 export 가능

// 변수의 공개
export const x = "";

// 함수의 공개
export function double(x) {
  return x * 2;
}

// 클래스의 공개
export class Person {
  constructor(name) {
    this.name = name;
  }
}

// default를 사용하여 import할 때 이름을 변경할 수 있게 한다.
export default dogName = "mint";
