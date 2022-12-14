// Promise는 자바스크립트에서 콜백함수 대신 쓰는 오브젝트
// 참고 : 드림코딩(https://www.youtube.com/watch?v=JB_yU6Oe2eE)
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 새로운 promise가 만들어질 때, executor는 자동적으로 실행된다.
const promise = new Promise((resolve, reject) => {
  console.log("test");
  setTimeout(() => {
    resolve("yes");
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log("I said" + value);
  })
  .catch((error) => console.error(error))
  .finally(() => {
    // 마지막으로 어떤 기능을 사용하고 싶을 때 finally 사용 (성공여부와 상관 없음)
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getOne = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("one");
    }, 1000);
  });
};
const getTwo = (one) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${one} => two`);
    }, 1000);
  });
};
const getThree = (two) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${two} => Three`);
    }, 1000);
  });
};

getOne()
  .then((one) => getTwo(one)) // .then(getTwo)로 생략이 가능하다. 그대로 전달함.
  .catch((error) => {
    // 오류 처리를 잘 해야한다.
    return "zero";
  })
  .then((two) => getThree(two))
  .then((final) => console.log(final))
  .catch(console.log);
