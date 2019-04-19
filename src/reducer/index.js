import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import  * as types from '../constant/actionType.js';

const nameInitialState = {}
const user = (state = nameInitialState, action) => {
    switch (action.type) {
        case types['USER_LOGIN']:
            return Object.assign({}, state, {user: action.user});
        case types['USER_CREATE']:
            return Object.assign({}, state, {user: action.user});
        case types['USER_INFO']:
            return Object.assign({}, state, {user: action.user});
        default:
            return state
    }
}

export default combineReducers({
    user,
    routing: routerReducer,
})