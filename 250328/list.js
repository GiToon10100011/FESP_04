import { test1 as rr, test2 } from "./new-menu.js";
import Menu from "./menu.js";

//이름 충돌 방지를 위해 as를 사용할 수 있다. 

rr();
test2();

class List {
  constructor(menu) {
    this.menu = menu;
  }
  render(){
    
  }
}


