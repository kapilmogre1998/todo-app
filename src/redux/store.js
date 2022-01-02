import { createStore } from 'redux'
import loginReducer from './login/reducer';
import { todoReducer } from './todo/reducer'
import { combineReducers } from 'redux';

const rootReducer =combineReducers({
    todo: todoReducer,
    login: loginReducer
})

export const store = createStore(rootReducer);

