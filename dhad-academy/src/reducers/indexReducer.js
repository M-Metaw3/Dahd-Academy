import { combineReducers } from "redux";
import {   applyMiddleware,compose, createStore } from 'redux';
import thunk from "redux-thunk"

import teacher from "./teachersReducer.js";

  const reducers =combineReducers({teacher})
const store = createStore( reducers, applyMiddleware(compose(thunk)),      
)
 
export default store