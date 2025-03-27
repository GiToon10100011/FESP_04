class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      result: 0,
    };
  }

  handleX = (e) => {
    this.setState({ x: Number(e.target.value) });
  };

  handleY = (e) => {
    this.setState({ y: Number(e.target.value) });
  };

  clickHandler = (e) => {
    e.preventDefault();
    this.setState({ result: this.state.x + this.state.y });
  };

  render() {
    return (
      <section id="calc-app">
        <h1>덧셈 계산기</h1>
        <form>
          <fieldset>
            <legend>계산기 입력폼</legend>
            <div>
              <label>x:</label>
              <input
                class="x-input"
                dir="rtl"
                value={this.state.x}
                onChange={this.handleX}
              />
              <label>y:</label>
              <input
                class="y-input"
                dir="rtl"
                value={this.state.y}
                onChange={this.handleY}
              />
              <span>=</span>
              <span class="resultWindow">{this.state.result}</span>
            </div>
            <hr />
            <div>
              <input type="submit" value="초기화" />
              <input
                type="submit"
                value="계산하기"
                class="calculate-btn"
                onClick={this.clickHandler}
              />
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}

React.createElement("h1", null, "HelloWorld");
ReactDOM.render(<Calc />, document.getElementById("root"));

//babel이 없으면 작동이 되지 않을 것이다.
