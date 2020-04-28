import { connect } from 'react-redux';
import Profile from './profile'
import { fetchUser, updateUser } from '../../actions/user_actions'
import { fetchEducation } from '../../actions/profile/education_actions'

const mapStateToProps = (state) => {
    return {
        user: Object.values(state.entities.users)[0],
        educations: Object.values(state.entities.educations)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchEducation: (userId) => dispatch(fetchEducation(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);