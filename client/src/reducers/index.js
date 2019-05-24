import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

//combineReducers: combine all components reducers into a "rootReducer" to traffic actions
export default combineReducers({
    item: itemReducer
})