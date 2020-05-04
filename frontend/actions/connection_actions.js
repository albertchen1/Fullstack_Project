// import * as APIUtil from "../util/session_api_util";
import * as APIUtil from "../util/connection_api_util"
export const RECEIVE_ALL_CONNECTIONS = 'RECEIVE_ALL_CONNECTIONS';
// export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveAllConnections = (connections) => ({
    type: RECEIVE_ALL_CONNECTIONS,
    connections
});

// export const receiveComment = (comment) => ({
//     type: RECEIVE_COMMENT,
//     comment
// })

export const fetchAllConnections = (id) => dispatch => (
    APIUtil.fetchAllConnections(id)
        .then(connections => dispatch(receiveAllConnections(connections)))
)

// export const fetchComment = (id) => dispatch => (
//     APIUtil.fetchComment(id)
//         .then(comment => dispatch(receiveComment(comment)))
// )

export const createConnection = (connection) => dispatch => (
    APIUtil.createConnection(connection)
        // .then(comments => dispatch(receiveAllComments(comments)))
        .then(connections => dispatch(receiveAllConnections(connections)))
)

// export const deleteComment = (id) => dispatch => (
//     APIUtil.removeComment(id)
//         .then((comments) => dispatch(receiveAllComments(comments)))
// )