import {applyMiddleware, combineReducers, createStore} from 'redux'
import { thunk } from 'redux-thunk';
import {questionReducer} from "./base/reducer";

const reducers = combineReducers({
    data : questionReducer,
});

const store = createStore(reducers, applyMiddleware(thunk))

export default store
