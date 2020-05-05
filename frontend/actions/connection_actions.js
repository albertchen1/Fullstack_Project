// import * as APIUtil from "../util/session_api_util";
import * as APIUtil from "../util/connection_api_util"
export const RECEIVE_ALL_CONNECTIONS = 'RECEIVE_ALL_CONNECTIONS';
// export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveAllConnections = (connections) => ({
    type: RECEIVE_ALL_CONNECTIONS,
    connections
});

export const fetchAllConnections = (id) => dispatch => (
    APIUtil.fetchAllConnections(id)
        .then(connections => dispatch(receiveAllConnections(connections)))
)

export const createConnection = (connection) => dispatch => (
    APIUtil.createConnection(connection)
        .then(connections => dispatch(receiveAllConnections(connections)))
)

// export const deleteComment = (id) => dispatch => (
//     APIUtil.removeComment(id)
//         .then((comments) => dispatch(receiveAllComments(comments)))
// )