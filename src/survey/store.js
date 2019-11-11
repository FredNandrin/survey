import {applyMiddleware, combineReducers, createStore} from 'redux/index'
import thunk from 'redux-thunk/index';
import {dataFetching} from "./base/reducer";

const reducers = combineReducers({
    data : dataFetching,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
