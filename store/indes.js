import { createStore } from "redux";
import Reducers from "./reducers";

const createAppropriateStore = createStore;

const Store = createAppropriateStore(
    Reducers
);


export { Store };