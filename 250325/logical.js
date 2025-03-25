//1일차 논리 연산 / 함수 객체 코드

let x;
console.log(1 < x);
console.log(x < 3);

if (1 < x < 3) console.log("hi");

console.log("Cat" && "Dog"); //Dog

let nums = [1, 2, 3, 4, 5];

// nums.splice(2); 2번째 이후의 요소를 모두 날림
// nums.splice(1, 1); 1번째 이후로 1개의 요소를 날림
// nums.splice(2, 0, new Array(1, 2, 3)); 2번째 인덱스에서 [1, 2, 3]의 배열을 삽입

nums.splice(2, 2); // 3, 4를 날림

const add = new Function("x, y", "return x+y");
//function(x, y){
//  return x+y;
//}
console.log(add(3, 4));
