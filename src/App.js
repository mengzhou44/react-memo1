import React, { useState, memo, useMemo, useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function getLargest() {
    console.log('call getLargest');
    return Math.max(...arr);
  }

  function changeChildNumber() {
       setChildNumber(childNumber+1)
  }

  const memorizedCallback = useCallback(() => changeChildNumber(), []);
  const memorizedLargest = useMemo(() => getLargest(), [arr]);

  return (
    <div>
      <h3>Visited {count} times </h3>
      <button onClick={() => setCount(count + 1)}> click </button>
      <button onClick={() => setArr([78, 23, 91])}> set new array </button>
      <Child number={childNumber} increment={memorizedCallback} />
      Largest Number
      {memorizedLargest}
    </div>
  );
};

const Child = memo(({ number, increment }) => {
  console.log('render child');
  return (
    <div>
      child  {number}
      <button onClick={() => increment()}>increment</button>
    </div>
  );
});

export default App;
