import "./App.css";
import List2 from "./component/AddRemove";
import CatFriends from "./component/CatFriends";
import CatFriends2 from "./component/catview";
import Demo from "./component/ConditionalRendering/Demo";
import PackingList from "./component/ConditionalRendering/PackingList";
import ContactFrom from "./component/ContactFrom";
import ContextApifarid from "./component/ContextApi/ContextApi";
import ImageContext from "./component/ContextApi/ImageContext";
import ProfilePage from "./component/ContextApi/ProfilePage";
import { CounterButtons } from "./component/CounterButtons";
import { CounterProvider } from "./component/CounterContext";
import { CounterDisplay } from "./component/CounterDisplay";
import TodoList from "./component/CurlyBracket";
import Darklight from "./component/dark-light-switcher/Darklight";
import Form from "./component/Form";
import InputData from "./component/inputField";
import FormSubmit from "./component/ManagingState/Answerfield";
import Messenger from "./component/ManagingState/Parentcontact";
import MountUnmountData from "./component/MountUnmount";
import Form5 from "./component/objectupdate";
import Profile from "./component/PropsComponent/Imagecomponent";
import CounterAdvanced from "./component/Reducer";
import Gallery2 from "./component/rendercommit";
import List from "./component/RenderingList/List";
import MainList from "./component/RenderingList/Mainlist";
import ProductList from "./component/RenderingList/ProductList";
import RecipeApp from "./component/RenderingList/Recipe2";
import RecipeList from "./component/RenderingList/Recipies";
import Toolbar from "./component/ResponseEvent/Responseevent";
import ShowRef from "./component/showref";
import Gallery from "./component/StateMemory";
import Counter2 from "./component/StateUpdater";
import TaskApp from "./component/Taskapp/taskapp";
import UserProfile from "./component/UserProfile";
import VideoApp from "./component/VideoPlayer";
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
        <Counter2 />
        <UserProfile />
        <Form5 />
        <List2 />
        <FormSubmit />
        <Messenger />
        <CounterAdvanced />
        <TaskApp />
        <ContextApifarid />
        <ProfilePage />
        <ImageContext />
        <CatFriends />
        <CatFriends2 />
        <ShowRef />
        <VideoApp />
        <MountUnmountData />
        <InputData />
      </div>
    </>
  );
}
