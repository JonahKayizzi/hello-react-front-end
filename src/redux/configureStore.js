import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings';

const reducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({ reducer });

export default store;
