import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './CombineReducers';

export const store = createStore(reducer, applyMiddleware(logger))