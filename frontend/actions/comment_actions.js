// import * as APIUtil from "../util/session_api_util";
import * as APIUtil from "../util/comment_api_util";
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
});

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

export const fetchAllComments = (id) => dispatch => (
    APIUtil.fetchAllComments(id)
        .then(comments => dispatch(receiveAllComments(comments)))
)

export const fetchComment = (id) => dispatch => (
    APIUtil.fetchComment(id)
        .then(comment => dispatch(receiveComment(comment)))
)

export const createComment = (comment) => dispatch => (
    APIUtil.createComment(comment)
        .then(comments => dispatch(receiveAllComments(comments)))
)

export const deleteComment = (id) => dispatch => (
    APIUtil.removeComment(id)
        .then((comments) => dispatch(receiveAllComments(comments)))
)