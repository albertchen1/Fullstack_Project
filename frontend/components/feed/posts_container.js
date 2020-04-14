import { connect } from 'react-redux';
import Posts from './posts'
import { deletePost } from '../../actions/post_actions'

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    deletePost: (id) => dispatch(deletePost(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
