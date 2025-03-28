import Menu from "./menu.js";

function NewMenu() {
  
}

NewMenu.prototype = new Menu();
// NewMenu.prototype = Object.create(Menu.prototype);

let m1 = new NewMenu();
console.log(m1.toJSON());

//is a 상속 
// class NewMenu extends Menu {
//   constructor(korName, engName, price) {
//     super(korName, engName, price);
//   }
// }

function test1() {
  console.log("test1");
}

function test2() {}

export { test1, test2 };