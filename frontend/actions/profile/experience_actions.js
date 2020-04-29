// import * as APIUtil from "../util/session_api_util";
import * as APIUtil from '../../util/profile/experience_api_util';
export const RECEIVE_ALL_EXPERIENCES = 'RECEIVE_ALL_EXPERIENCES';
export const RECEIVE_EXPERIENCE = 'RECEIVE_EXPERIENCE';

export const receiveExperiences = (experiences) => ({
    type: RECEIVE_ALL_EXPERIENCES,
    experiences
});

export const receiveExperience = (experience) => ({
    type: RECEIVE_EXPERIENCE,
    experience
})

export const fetchExperience = (userId) => dispatch => (
    APIUtil.fetchExperience(userId)
        .then(experiences => dispatch(receiveExperiences(experiences)))
)

export const updateExperience = experience => dispatch (
    APIUtil.updateExperience(experience)
        .then(experiences => dispatch(receiveExperiences(experiences)))
)


export const createExperience = (experience) => dispatch => (
    APIUtil.createExperience(experience)
        // .then(comments => dispatch(receiveAllComments(comments)))
        .then(experience => dispatch(receiveExperience(experience)))
)

export const deleteExperience = (experienceId) => dispatch => (
    APIUtil.deleteExperience(experienceId)
        .then((experiences) => dispatch(receiveExperiences(experiences)))
)