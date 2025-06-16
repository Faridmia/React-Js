import { useCounterContext } from "./CounterContext";

export function CounterDisplay() {
  const { state } = useCounterContext();

  return <h2>📊 Current Count: {state.count}</h2>;
}
