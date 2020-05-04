import { connect } from 'react-redux';
// import Posts from './posts'
import Feed from './feed'
import {fetchAllPosts} from '../../actions/post_actions'

const mapStateToProps = (state) => {
    return {
        user: Object.values(state.entities.users)[0]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);