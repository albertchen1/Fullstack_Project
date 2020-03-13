import {RECEIVE_ALL_POSTS, RECEIVE_POST} from '../actions/post_actions'
import _ from 'lodash';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = _.merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts
        case RECEIVE_POST:
            return Object.assign({}, state, {[action.post.id]: action.post})
            // newState[action.currentUser.id] = action.currentUser;
            // return newState;
        default:
            return state;
    }
};

export default postsReducer;