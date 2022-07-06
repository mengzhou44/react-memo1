import React, { useState, useMemo } from 'react';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 2000000000) i++;
    return count1 % 2 === 0 ? 'EVEN' : 'ODD';
  },[count1]);

  return (
    <div>
      <div>
        <button onClick={() => setCount1(count1 + 1)}> count {count1} </button>
        <span> {isEven} </span>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}> count {count2} </button>
      </div>
    </div>
  );
};

export default App;
