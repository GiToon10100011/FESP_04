let module1 = require("./app.js");
console.log(module1.add());

let fs = require("fs");

let module2 = require("newlec-hello");

//readFileSync는 동기형 함수이다.

let input = fs.readFileSync("data.txt", "utf-8"); //사용자가 실행한 위치에 해당 파일이 존재해야하기 때문에 nodeExamples이외의 경로에서 실행하게 되면 작동하지 않음. cd로 해당 파일 경로로 이동하여 node로 실행해줘야함.

console.log(input);

//비동기 방식의 fs모듈 사용

fs.readFile("data.txt", "utf-8", (err, data) => {
  console.log(input, "async");
});

//콜백은 계속 중첩되는 함수들을 사용하게 되기 때문에 유지보수하기가 추후에 힘들어진다. (콜백 지옥)

// 비동기형 프로미스 사용

//Promise는 에러가 났는지 안났는지 확인하는 일종의 감독관리하는 느낌의 객체이다.
new Promise((resolve, reject) => {
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

//깔끔한 업무 로직
// const promise = fs.readFile("data.txt", "utf-8");

//가공을 위한 미들웨어 시스템, 작업을 넣고 빼기가 용이함.
// promise.then((data) => {
//   console.log(data);
// })

// 프로미스를 사용하는 방법

// (async () => {
//   let data = await fs.readFile("data.txt", "utf-8");
//   console.log(data);
// })();

console.log(module2.hello())