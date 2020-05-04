import { connect } from 'react-redux';
import ConnectionList from './connection_list';
import { fetchAllConnections } from '../../actions/connection_actions'; 

const mapStateToProps = (state) => {
    return {
        user: Object.values(state.entities.users)[0],
        connections: Object.values(state.entities.connections)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllConnections: (id) => dispatch(fetchAllConnections(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectionList);