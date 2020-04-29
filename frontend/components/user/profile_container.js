import { connect } from 'react-redux';
import Profile from './profile'
import { fetchUser, updateUser } from '../../actions/user_actions'
import { fetchEducation, updateEducation } from '../../actions/profile/education_actions'
import { fetchExperience, updateExperience } from '../../actions/profile/experience_actions'

const mapStateToProps = (state) => {
    return {
        user: Object.values(state.entities.users)[0],
        educations: Object.values(state.entities.educations),
        experiences: Object.values(state.entities.experiences)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchEducation: (userId) => dispatch(fetchEducation(userId)),
    fetchExperience: (userId) => dispatch(fetchExperience(userId)),
    updateEducation: (education) => dispatch(updateEducation(education)),
    updateExperience: (experience) => dispatch(updateExperience(experience)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);