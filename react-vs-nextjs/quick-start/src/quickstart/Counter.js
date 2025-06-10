import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>clicked {count} times</button>;
}

export default function Counter() {
  return (
    <div>
      <h1>Counter that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
