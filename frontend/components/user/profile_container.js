import { connect } from 'react-redux';
import Profile from './profile'
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state) => {
    return {
        user: Object.values(state.entities.users),
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);