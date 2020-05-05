import { connect } from 'react-redux';
// import { fetchUser, updateUser } from '../../actions/user_actions'
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // updateUser: (user) => dispatch(updateUser(user)),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
