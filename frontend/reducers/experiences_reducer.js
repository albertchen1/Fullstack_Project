import { RECEIVE_ALL_EXPERIENCES, RECEIVE_EXPERIENCE } from '../actions/profile/experience_actions'
import _ from 'lodash';

const experienceReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_EXPERIENCES:
            return action.experiences
        case RECEIVE_EXPERIENCE:
            return Object.assign({}, state, { [action.experience.id]: action.experience })
        // newState[action.currentUser.id] = action.currentUser;
        // return newState;
        default:
            return state;
    }
};

export default experienceReducer;