// import * as APIUtil from "../util/session_api_util";
import * as APIUtil from "../util/connection_request_api_util";
// import {receivePost} from './post_actions';
export const RECEIVE_ALL_REQUESTS = 'RECEIVE_ALL_REQUESTS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';

export const receiveAllRequests = (requests) => ({
    type: RECEIVE_ALL_REQUESTS,
    requests
});

export const receiveRequest = (request) => ({
    type: RECEIVE_REQUEST,
    request
})

export const fetchAllRequests = (id) => dispatch => (
    APIUtil.fetchAllRequests(id)
        .then(requests => dispatch(receiveAllRequests(requests)))
)

// export const fetchComment = (id) => dispatch => (
//     APIUtil.fetchComment(id)
//         .then(comment => dispatch(receiveComment(comment)))
// )

export const createRequest = (request) => dispatch => (
    APIUtil.createRequest(request)
        .then(requests => dispatch(receiveAllRequests(requests)))
)

export const deleteRequest = (id) => dispatch => (
    APIUtil.removeRequest(id)
        .then((requests) => dispatch(receiveAllRequests(requests)))
)