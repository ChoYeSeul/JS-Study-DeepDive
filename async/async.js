// async & await
// clear styled of using promise
// 참고 : 드림코딩(https://www.youtube.com/watch?v=aoQSOZfz3vQ)

// 1. async : promise를 더 간편히 쓸 수 있는
async function fetchUser() {
  // network 데이터를 받아오는 속도가 10초라고 쳤을 때,
  return "jelly";
}

const user = fetchUser();
console.log(user);

// 2. await
// async를 쓴 함수 안에서만 사용 가능

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "apple";
}

async function getBanana() {
  await delay(3000);
  return "banana";
}

// promise 사용
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple}${banana}`);
  });
}

// 직렬
async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple}${banana}`;
  } catch {
    (e) => console.error(encodeURIComponent);
  }
}

// 병렬
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple}${banana}`;
}

// 3.useful Promise APIs : all
// 병렬 방식을 조금 더 보기 쉽게! all을 사용하자.
// 비동기 실행시킨 것 중에 하나라도 실패하면 그 즉시 통신 중단
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()].then((fruits) => fruits.join(" + ")));
}

// race는 가장 먼저 결과를 내는 것을 보내준다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickFruits().then(console.log);
pickAllFruits().then(console.log);

// Promise.allSettled
// 성공한 것들은 모두 보여지도록 하고싶다 하면 Promise.allSettled 사용
