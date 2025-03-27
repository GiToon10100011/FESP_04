// let f3;
// let x = 100;
// let f1 = function () {
//   let x = 40;
//   f3 = function (x = 10) {
//     console.log(x);
//   };
// };

// f1();
// f3();

// let f3;
// let x = 100;
// let f1 = function () {
//   // let x = 40;
//   console.log("f1:", window.x, x)
//   let x = 40;
//   f3 = function () {
//     console.log(x);
//   };
// };

// console.log("global:", window.x, x)

// f1();

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

//init은 name과 displayName이라는 지역 변수/함수를 만든다. 
//displayName은 init()내에서 정의된 내부 함수로, init()함수에서만 실행이 가능하다. 
//이처럼 중첩된 함수는 렉시컬 스코프 (변수가 선언됐을때 스코프 영역이 지정됨)로 인해 바깥 스코프에서 선언된 변수들에 대한 접근이 가능해진다. 
//ES6이전에는 함수스코프, 전역 스코프 2가지만 존재했었다. 이러한 점때문에 var로 선언된 변수들은, 중괄호 블럭 내의 블럭 스코프가 생성되지 않아서 조건문 등에서 전역 스코프로 변수가 생성되어 아래의 코드 처럼 에러가 생기지 않고 1이나 2가 출력되는 현상이 발생한다. 

if (Math.random() > 0.5) {
  var ex = 1;
} else {
  var ex = 2;
}
console.log(ex);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures