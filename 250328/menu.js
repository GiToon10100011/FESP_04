function Menu() {
  this.korName = "아메리카노";
  this.engName = "Americano";
  this.price = 4000;
}

Menu.prototype.toJSON = function () {
  return {
    korName: this.korName,
    engName: this.engName,
    price: this.price,
  };
};

export default Menu;
