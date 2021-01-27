import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';

const rootReducer = combineReducers({
    charactersReducer,
});

export default rootReducer;