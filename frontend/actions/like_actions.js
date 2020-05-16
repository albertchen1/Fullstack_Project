// import * as APIUtil from "../util/session_api_util";
import * as APIUtil from "../util/like_api_util";
import { receivePost } from './post_actions';
export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

export const receiveAllLikes = (likes) => ({
    type: RECEIVE_ALL_LIKES,
    likes
});

export const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
})

// export const fetchAllComments = (id) => dispatch => (
//     APIUtil.fetchAllComments(id)
//         .then(comments => dispatch(receiveAllComments(comments)))
// )

// export const fetchComment = (id) => dispatch => (
//     APIUtil.fetchComment(id)
//         .then(comment => dispatch(receiveComment(comment)))
// )

export const createLike = (like) => dispatch => (
    APIUtil.createLike(like)
        // .then(comments => dispatch(receiveAllComments(comments)))
        .then(post => dispatch(receivePost(post)))
)

export const deleteLike = (id) => dispatch => (
    APIUtil.removeLike(id)
        // .then((comments) => dispatch(receiveAllComments(comments)))
        .then(post => dispatch(receivePost(post)))
)