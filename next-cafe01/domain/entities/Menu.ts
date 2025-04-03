export class Menu {
  id: number;
  korName: string;
  engName: string;
  price: number;

  constructor(id: number, korName: string, engName: string, price: number) {
    this.id = id;
    this.korName = korName;
    this.engName = engName;
    this.price = price;
  }
}
