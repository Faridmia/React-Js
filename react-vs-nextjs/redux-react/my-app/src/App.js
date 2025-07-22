import "./App.css";
import CounterView from "./components/features/counter/counterview.js";
import PostView from "./components/features/posts/postview.js";

function App() {
  return (
    <div className="App">
      <h1>Welcome to react-redux</h1>
      {/* <Counter />
      <Todos /> */}
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;

// step 1 install packages
// step 2: constant define
// step3: asynchronous creator
// step 3: reducer
// step 5: create store
// step 6: provide store
// step 7: use store
// step 8: adding store
