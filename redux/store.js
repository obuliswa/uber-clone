import { createStore } from 'redux';
import reducers from './reducers/index';

export default function combineReducers(initialState) {
    const store = createStore(reducers, initialState)
    return store
}