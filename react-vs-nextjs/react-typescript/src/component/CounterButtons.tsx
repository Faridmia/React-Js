import { useCounterContext } from "./CounterContext";

export function CounterButtons() {
  const { dispatch } = useCounterContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>
        ➕ Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        ➖ Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>🔁 Reset</button>
    </div>
  );
}
