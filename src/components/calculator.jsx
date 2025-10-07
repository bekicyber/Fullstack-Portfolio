import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput(input + value);
  }

  function handleClear() {
    setInput("");
  }

  function handleCalculate() {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  }

  return (
    <div>
      <h1>Calculator App</h1>
      <div className="container">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>÷</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>x</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={handleClear}>C</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={handleCalculate} id="equals">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
