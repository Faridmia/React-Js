import { useEffect, useState } from "react";

export default function IncrementDecrement() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + increment);
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment === 0}
          onClick={() => {
            setIncrement((i) => i - 1);
          }}
        >
          –
        </button>
        <b>{increment}</b>
        <button
          onClick={() => {
            setIncrement((i) => i + 1);
          }}
        >
          +
        </button>
      </p>
    </>
  );
}
