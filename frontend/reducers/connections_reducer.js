import { RECEIVE_ALL_CONNECTIONS } from '../actions/connection_actions';
import _ from 'lodash';

const connectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_CONNECTIONS:
            return action.connections
        default:
            return state;
    }
};

export default connectionsReducer;