import {combineReducers} from 'redux';
import hours from './timesheetReducer';

const rootReducer = combineReducers({
    hours
});

export default rootReducer;