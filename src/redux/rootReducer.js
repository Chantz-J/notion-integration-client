import { combineReducers } from 'redux';

// REDUCERS
import { notionReducer } from './notion/notion-reducer';

// ROOT
export default combineReducers({
    notion: notionReducer,
})