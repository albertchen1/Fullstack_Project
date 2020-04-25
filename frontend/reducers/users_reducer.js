import { RECEIVE_USER } from '../actions/user_actions';
import _ from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = _.merge({}, state);

    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        default:
            return state;
    }
};

export default usersReducer;