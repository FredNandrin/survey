import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import {dataFetching} from "./base/reducer";

const reducers = combineReducers({
    data : dataFetching,
});

const store = createStore(reducers, applyMiddleware(thunk))

export default store
