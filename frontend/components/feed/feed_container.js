import { connect } from 'react-redux';
// import Posts from './posts'
import Feed from './feed'
import {fetchAllPosts} from '../../actions/post_actions'
import {fetchAllConnections} from '../../actions/connection_actions'

const mapStateToProps = (state) => {
    return {
        // user: Object.values(state.session.user)[0],
        user: Object.values(state.entities.users)[0],
        connections: Object.values(state.entities.connections)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAllConnections: (id) => dispatch(fetchAllConnections(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);