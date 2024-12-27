import { useEffect, useState } from 'react';

const SimpleExample = () => {
  const [count, setCount] = useState(0);

  // useEffect hook to log a message every time the count changes
  useEffect(() => {
    console.log('Count has changed:', count);
  }, [count]); // This will run when 'count' changes

  return (
    <div>
      <h1>Count: {count}</h1> 
      
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default SimpleExample;
