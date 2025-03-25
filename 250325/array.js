//1일차 배열 메소드 / 메소드 체이닝 정리 코드

let data = [2, 4, 22, 34, 16, 34, 23, 12, 45, 67, 89];
//변수 충돌을 방지 하기 위해 다음과 같이 지역화를 할 수 있음.
{
  let data = [1, 10, 9, 19999];
  data.sort((a, b) => b - a);
  console.log(data);
}

const sortNumbers = (a, b) => {
  return a - b;
};

data.sort(); //인자를 주지 않는다면, 문자열로 취급해서 정렬을 수행하게 됨.
// data.sort(sortNumbers)
console.log(data);

let methodChaining = data
  .filter((a) => a > 20)
  .map((a) => a * 2)
  .sort((a, b) => b - a)
  .reduce((a, b) => a + b);

  console.log(methodChaining)