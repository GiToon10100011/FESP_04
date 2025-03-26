//기존 mvc를 사용하기 전의 코드 
const section = document.querySelector("#calc-app");
const xInput = section.querySelector(".x-input");
const yInput = section.querySelector(".y-input");
const calculateBtn = section.querySelector(".calculate-btn");
const resultWindow = section.querySelector(".resultWindow");

calculateBtn.onclick = (e) => {
  e.preventDefault();
  console.log("hello");
  const x = Number(xInput.value);
  const y = Number(yInput.value);
  resultWindow.innerText = x + y;
};

//mvc를 사용하고 난 후의 코드 
//document객체를 사용하는 코드를 전부 사용하지 않게 됨.

// const result = x + y;

//document객체의 단일화 