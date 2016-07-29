import update from 'react-addons-update';

export default function timesheetReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_HOUR':
            return [...state, action.hour];
        case 'REMOVE_HOUR':
            let index = state.indexOf(action.hour);
            return update(state,{$splice: [[index, 1]]});
        default:
            return state;
    }
}