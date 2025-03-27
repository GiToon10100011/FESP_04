function Calc() {
  console.log("init");
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const handleX = (e) => {
    setX(Number(e.target.value));
  };
  const handleY = (e) => {
    setY(Number(e.target.value));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setResult(x + y);
    console.log("in handler")
  };

  return (
    <section id="calc-app">
      <h1>덧셈 계산기</h1>
      <form>
        <fieldset>
          <legend>계산기 입력폼</legend>
          <div>
            <label>x:</label>
            <input class="x-input" dir="rtl" value={x} onChange={handleX} />
            <label>y:</label>
            <input class="y-input" dir="rtl" value={y} onChange={handleY} />
            <span>=</span>
            <span class="resultWindow">{result}</span>
          </div>
          <hr />
          <div>
            <input type="submit" value="초기화" />
            <input
              type="submit"
              value="계산하기"
              class="calculate-btn"
              onClick={clickHandler}
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
}

React.createElement("h1", null, "HelloWorld");
ReactDOM.render(<Calc />, document.getElementById("root"));

//babel이 없으면 작동이 되지 않을 것이다.
