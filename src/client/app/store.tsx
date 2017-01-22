import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducers} from './reducers/reducers';
import * as React from 'react';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;