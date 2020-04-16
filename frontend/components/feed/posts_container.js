import { connect } from 'react-redux';
import Posts from './posts'
import { deletePost } from '../../actions/post_actions'
import { createComment, fetchAllComments } from '../../actions/comment_actions'

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        comments: Object.values(state.entities.comments)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    deletePost: (id) => dispatch(deletePost(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    fetchAllComments: (id) => dispatch(fetchAllComments(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
