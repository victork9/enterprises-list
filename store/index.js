import { createStore } from "redux";
import Reducers from "./reducers";
import React from 'react';

const createAppropriateStore = createStore;

const Store = createAppropriateStore(

    Reducers
);


export { Store };