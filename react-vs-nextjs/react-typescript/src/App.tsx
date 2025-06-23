import "./App.css";
import Demo from "./component/ConditionalRendering/Demo";
import PackingList from "./component/ConditionalRendering/PackingList";
import ContactFrom from "./component/ContactFrom";
import { CounterButtons } from "./component/CounterButtons";
import { CounterProvider } from "./component/CounterContext";
import { CounterDisplay } from "./component/CounterDisplay";
import TodoList from "./component/CurlyBracket";
import Darklight from "./component/dark-light-switcher/Darklight";
import Form from "./component/Form";
import Profile from "./component/PropsComponent/Imagecomponent";
import Gallery2 from "./component/rendercommit";
import List from "./component/RenderingList/List";
import MainList from "./component/RenderingList/Mainlist";
import ProductList from "./component/RenderingList/ProductList";
import RecipeApp from "./component/RenderingList/Recipe2";
import RecipeList from "./component/RenderingList/Recipies";
import Toolbar from "./component/ResponseEvent/Responseevent";
import Gallery from "./component/StateMemory";
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
        {/* <Button /> */}
        <Toolbar />
        <Darklight />
        <Gallery />
        <Gallery2 />
        <Form />
      </div>
    </>
  );
}
