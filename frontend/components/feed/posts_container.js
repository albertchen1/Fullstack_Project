import { connect } from 'react-redux';
import Posts from './posts'

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
