import "./App.css";
import Demo from "./component/ConditionalRendering/Demo";
import PackingList from "./component/ConditionalRendering/PackingList";
import ContactFrom from "./component/ContactFrom";
import { CounterButtons } from "./component/CounterButtons";
import { CounterProvider } from "./component/CounterContext";
import { CounterDisplay } from "./component/CounterDisplay";
import TodoList from "./component/CurlyBracket";
import Profile from "./component/PropsComponent/Imagecomponent";
import List from "./component/RenderingList/List";
import MainList from "./component/RenderingList/Mainlist";
import ProductList from "./component/RenderingList/ProductList";
import RecipeApp from "./component/RenderingList/Recipe2";
import RecipeList from "./component/RenderingList/Recipies";
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
        <List />
        <MainList />
        <ProductList />
        <RecipeList />
        <RecipeApp />
      </div>
    </>
  );
}
