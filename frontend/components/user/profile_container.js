import { connect } from 'react-redux';
import Profile from './profile'
import { fetchUser, updateUser } from '../../actions/user_actions'

const mapStateToProps = (state) => {
    return {
        user: Object.values(state.entities.users)[0]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);