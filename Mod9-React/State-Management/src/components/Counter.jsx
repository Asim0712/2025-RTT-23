import { useState } from 'react';

function Counter() {
  // Initialize state: count starts at 0
  const [count, setCount] = useState(0); // TypeScript infers 'count' is a number

  // Function to handle button click
  const increment = () => {
    // Use the setter function to update the state
    // Pass the new value directly
    setCount(count + 1);
    // Note: Avoid count++ or ++count - modify state via the setter!
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      {/* Read the current state value */}
      <p>Current Count: {count}</p>
      {/* Call state update functions in event handlers */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
       {/* Example of using the previous state for updates */}
      <button onClick={() => setCount(prevCount => prevCount + 5)}>Add 5</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;