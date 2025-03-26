React.createElement("h1", null, "HelloWorld")
ReactDOM.render(
  <section id="calc-app">
    <h1>덧셈 계산기</h1>
    <form>
      <fieldset>
        <legend>계산기 입력폼</legend>
        <div>
          <label>x:</label>
          <input class="x-input" dir="rtl" />
          <label>y:</label>
          <input class="y-input" dir="rtl" />
          <span>=</span>
          <span class="resultWindow">0</span>
        </div>
        <hr />
        <div>
          <input type="submit" value="초기화" />
          <input type="submit" value="계산하기" class="calculate-btn" />
        </div>
      </fieldset>
    </form>
  </section>,
  document.getElementById("root")
);

//babel이 없으면 작동이 되지 않을 것이다. 