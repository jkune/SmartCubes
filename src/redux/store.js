import { createStore, combineReducers } from 'redux';
import puzzles from './reducers/puzzles';
import skin from './reducers/skin';

const reducer = combineReducers({
    puzzles,
    skin,
});

const store = createStore(reducer);

export default store;
