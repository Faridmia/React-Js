import "./App.css";
import Demo from "./component/ConditionalRendering/Demo";
import PackingList from "./component/ConditionalRendering/PackingList";
import ContactFrom from "./component/ContactFrom";
import { CounterButtons } from "./component/CounterButtons";
import { CounterProvider } from "./component/CounterContext";
import { CounterDisplay } from "./component/CounterDisplay";
import TodoList from "./component/CurlyBracket";
import Profile from "./component/PropsComponent/Imagecomponent";
export default function App() {
  return (
    <>
      <CounterProvider>
        <CounterDisplay />
        <CounterButtons />
      </CounterProvider>

      <div>
        <ContactFrom />
        <TodoList />
        <Profile />
        <PackingList />
        <Demo />
      </div>
    </>
  );
}
