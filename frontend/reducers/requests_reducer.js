import { RECEIVE_ALL_REQUESTS } from '../actions/connection_request_actions'
import _ from 'lodash';

const requestsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_REQUESTS:
            return action.requests
        default:
            return state;
    }
};

export default requestsReducer;