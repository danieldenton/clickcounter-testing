import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  const handleDecrement = () => {
    if (count === 0) {
      setError(true);
    } else {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
    if (error) {
      setError(false);
    }
  };

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>

      <button data-test="decrement-button" onClick={() => handleDecrement()}>
        Decrement counter
      </button>
      <button data-test="increment-button" onClick={() => handleIncrement()}>
        Increment counter
      </button>
      {error ? (
        <h3 data-test="error">You cannot decrement the count below 0</h3>
      ) : null}
    </div>
  );
}

export default App;
