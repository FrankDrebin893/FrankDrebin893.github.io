import {combineReducers} from 'redux';
import appReducer from './appReducer';
var reduxRouter = require('react-router-redux')

export var reducers = combineReducers({
    appState: appReducer,
    routing: reduxRouter.routerReducer
}); 