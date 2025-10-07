import React from "react";
import "./clock.css";

function Clock() {
  return (
    <div className="clock-container">
      <h1>Clock Hello</h1>
      <input type="time" placeholder="07:00" />
    </div>
  );
}

export default Clock;
