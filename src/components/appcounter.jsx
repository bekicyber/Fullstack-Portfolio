import { useState } from "react";
import "./appCounters.css";

function AppCounter() {
  const [count, setCount] = useState(0);

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const oddEven = count % 2 === 0 ? "Even" : "Odd";
  const statusCount =
    count % 2 === 0
      ? "badge m-2 badge-lg text-bg-primary"
      : "badge m-2 badge-lg text-bg-warning";
  return (
    <div className="container">
      <div className="text-content">
        <h1>React Counter App</h1>
        <h3>
          Count: <span className={statusCount}>{count}</span>
        </h3>
        <h6>
          Status: <span> {oddEven} </span>{" "}
        </h6>
      </div>
      <div className="btn-fild">
        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          Increase
        </button>
        <button onClick={decrease} className="btn btn-danger">
          Decrease
        </button>
        <button onClick={() => setCount(0)} className="btn btn-primary">
          Reset
        </button>
      </div>
      <div className="zero">
        {count === 0 && <p>Counter is at Zero</p>}
        {count === 20 && <p>You have reached {count}</p>}
      </div>
    </div>
  );
}

export default AppCounter;
