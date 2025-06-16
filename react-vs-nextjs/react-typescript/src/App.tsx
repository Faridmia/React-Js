import "./App.css";
import ContactFrom from "./component/ContactFrom";
import { CounterButtons } from "./component/CounterButtons";
import { CounterProvider } from "./component/CounterContext";
import { CounterDisplay } from "./component/CounterDisplay";
export default function App() {
  return (
    <>
      <CounterProvider>
        <CounterDisplay />
        <CounterButtons />
      </CounterProvider>

      <div>
        <ContactFrom />
      </div>
    </>
  );
}
