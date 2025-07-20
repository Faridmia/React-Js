import { createStore } from "redux";
import counterReducer from "./components/reducers/counterreducer";

const store = createStore(counterReducer);

export default store;
