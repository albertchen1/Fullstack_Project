import { connect } from 'react-redux';
import Connections from './connections';
import { fetchAllRequests, deleteRequest } from '../../actions/connection_request_actions'; 
import { createConnection, fetchAllConnections } from '../../actions/connection_actions'; 

const mapStateToProps = (state) => {
    return {
        user: Object.values(state.entities.users)[0],
        requests: Object.values(state.entities.requests),
        connections: Object.values(state.entities.connections)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllRequests: (id) => dispatch(fetchAllRequests(id)),
    deleteRequest: (id) => dispatch(deleteRequest(id)),
    createConnection: (connection) => dispatch(createConnection(connection)),
    fetchAllConnections: (id) => dispatch(fetchAllConnections(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Connections);