import { RECEIVE_ALL_EDUCATION, RECEIVE_EDUCATION } from '../actions/profile/education_actions'
import _ from 'lodash';

const educationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_EDUCATION:
            return action.educations
        case RECEIVE_EDUCATION:
            return Object.assign({}, state, { [action.education.id]: action.education })
        // newState[action.currentUser.id] = action.currentUser;
        // return newState;
        default:
            return state;
    }
};

export default educationsReducer;