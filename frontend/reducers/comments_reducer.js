import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions'
import _ from 'lodash';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            return Object.assign({}, state, { [action.comment.id]: action.comment })
        // newState[action.currentUser.id] = action.currentUser;
        // return newState;
        default:
            return state;
    }
};

export default commentsReducer;