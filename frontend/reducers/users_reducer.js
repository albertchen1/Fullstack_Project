import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';
import _ from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = _.merge({}, state);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
        default:
            return state;
    }
};

export default usersReducer;